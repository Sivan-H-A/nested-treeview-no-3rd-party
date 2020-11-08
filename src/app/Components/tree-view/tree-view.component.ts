import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {
  @Input() jsonFile: JSON;
  private transformer = (node:FileNode, level: number)=>{
    return {
      expandable: !!node.children && node.children.length>0,
      name: node.key,
      value: node.value,
      level:level,
    };
  }

  treeControl: FlatTreeControl<FileFlatNode>;
  treeFlattener : MatTreeFlattener<FileNode, FileFlatNode>;
  dataSource: MatTreeFlatDataSource<FileNode, FileFlatNode>;

  constructor() {
    this.treeFlattener = new MatTreeFlattener(this.transformer, this.getLevel,this.isExpandable, this.getChildren);
    this.treeControl = new FlatTreeControl<FileFlatNode>(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
   }

  ngOnInit(): void {
    this.dataSource.data = this.buildFileTree(this.jsonFile, 0);
  }

  buildFileTree(value:any, level:number):FileNode[]{
    let data: any[] = [];
    for (let k in value) {
      let v = value[k];
      let node = new FileNode();
      node.key = `${k}`;
      if (v === null || v === undefined) {
        // no action
      } else if (typeof v === 'object') {
        node.children = this.buildFileTree(v, level + 1);
      } else {
        node.value = v;
      }
      data.push(node);
    }
    return data;
  }

  private getLevel = (node: FileFlatNode) => { return node.level; };
  private isExpandable = (node: FileFlatNode) => { return node.expandable; };
  private getChildren = (node: FileNode) => { return node.children; }

  hasChild = (_: number, node: FileFlatNode) => node.expandable;
  
}

export class FileNode {
  children?: FileNode[];
  key: string;
  value: any;
}
export class FileFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}