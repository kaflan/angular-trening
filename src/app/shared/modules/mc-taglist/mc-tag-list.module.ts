import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {McTagListComponent} from "./components/mc-tag-list.component";
import { PopularTagsService } from 'src/app/shared/services/popularTags.service';



@NgModule({
  declarations: [
    McTagListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PopularTagsService
  ],
  exports: [
    McTagListComponent
  ]
})
export class McTagListModule { }
