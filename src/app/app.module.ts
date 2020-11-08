import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewComponent } from './Components/tree-view/tree-view.component';
import { MainViewComponent } from './Components/main-view/main-view.component';
import { MaterialsModule } from './Components/materials/material.module';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,    
    MainViewComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MaterialsModule,
  ],
  providers: [TreeViewComponent, MainViewComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
