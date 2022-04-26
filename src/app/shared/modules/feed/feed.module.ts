import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {RouterModule} from "@angular/router";

import {reducers} from "./store/reducers";
import {FeedComponent} from "./components/feed.component";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {FeedService} from "src/app/shared/services/feed.service";
import {BannerModule} from "src/app/shared/modules/banner/banner.module";
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {McPaginationModule} from "src/app/shared/modules/mc-pagination/mc-pagination.module";
import {McTagListModule} from "src/app/shared/modules/mc-taglist/mc-tag-list.module";


@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    BannerModule,
    ErrorMessageModule,
    LoadingModule,
    McPaginationModule,
    McTagListModule
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
