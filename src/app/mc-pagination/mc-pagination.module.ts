import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McPaginationComponent } from './mc-pagination.component';
import {UtilService} from "../shared/services/util.service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    McPaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    McPaginationComponent
  ],
  providers: [UtilService]
})
export class McPaginationModule { }
