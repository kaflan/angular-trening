import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {McTagListComponent} from "./components/mc-tag-list.component";



@NgModule({
  declarations: [
    McTagListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    McTagListComponent
  ]
})
export class McTagListModule { }
