import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FeedTogglerComponent} from "./feed-toggler.component";



@NgModule({
  declarations: [
    FeedTogglerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ FeedTogglerComponent ]
})
export class FeedTogglerModule { }
