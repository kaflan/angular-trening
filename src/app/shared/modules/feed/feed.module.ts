import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

import {FeedComponent} from "./components/feed.component";
import {GetFeedEffect} from "./store/effects/getFeed.effect";

import {reducers} from "./store/reducers";
import {FeedService} from "src/app/shared/services/feed.service";



@NgModule({
  declarations: [
    FeedComponent,
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
  ],
   exports: [ FeedComponent ],
  providers: [FeedService]
})
export class FeedModule { }
