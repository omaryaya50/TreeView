import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeviewModule } from "ngx-treeview";
import { TreeModule } from "@circlon/angular-tree-component";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeviewModule ,
    TreeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
