import { Component, Injectable, OnInit, Output } from '@angular/core';
import { delay } from 'rxjs/operators';
import { TreeViewService } from '../../Services/tree-view.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit { 
  viewState: ViewState = ViewState.Initial;
  viewStateTypes = ViewState;
  jsonFile: any ;
  dataSource: FileNode[];
  msg:string="";
  _urlPath = '';
  get urlPath(): string{
    return this._urlPath;
  }
  set urlPath( value: string){
    this._urlPath = value;
  }

  constructor(private treeviewService: TreeViewService) 
  { }

  ngOnInit(): void {
  }

  refreshView(){
    this.msg = "";
  }

  renderURL (){
    this.viewState = ViewState.Loading;
    this.treeviewService.getJSON(this.urlPath).subscribe({
        next: x => {this.jsonFile = x; 
          this.dataSource = this.buildFileTree(this.jsonFile);
          this.viewState = ViewState.Completed;
        },
        error: err => {console.error(err);
          this.viewState = ViewState.Failed;
        } 
      
      });

      if(isNaN(this.jsonFile)){
        this.viewState = ViewState.WithNoComponents;
        this.msg = "Your search - "+ this.urlPath+" - did not match any documents.";
      }     
     }
     
     buildFileTree(value:any):FileNode[]{
      let data: any[] = [];
      for (let k in value) {
        let v = value[k];
        let node = new FileNode();
        node.key = `${k}`;
        if (v === null || v === undefined) {
          // no action
        } else if (typeof v === 'object') {
          node.children = this.buildFileTree(v);
        } else {
          node.value = v;
        }
        data.push(node);
      }
      return data;
    }  
}

export class FileNode {
  children?: any[];
  key: string;
  value: any;
  showChildren: boolean;
}
enum ViewState {
    Initial,
    Loading,
    Completed,
    Failed,
    WithNoComponents
  }