import { Component, Input, OnInit } from '@angular/core';
import { FileNode } from '../main-view/main-view.component';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  @Input() dataSource: FileNode[];

  constructor() {
   }

  ngOnInit(): void {
  }
  hasChildren(node: FileNode){
    if (node.children && node.children.length>0) return true;
    return false;
  }
  toggleChild(node: FileNode){
    node.showChildren = !node.showChildren;
  }
}