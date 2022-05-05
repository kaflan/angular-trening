import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'
import { McTagListModule } from 'src/app/shared/modules/mc-taglist/mc-tag-list.module'
import { McTagListPopularModule } from 'src/app/shared/modules/mc-taglist-popular/mc-taglist-popular.module'
import { FeedTogglerModule } from 'src/app/feed-toggler/feed-toggler.module'

import { TagFeedComponent } from './components/tag-feed.component'

const routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
]

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    McTagListModule,
    McTagListPopularModule,
    FeedTogglerModule,
  ]
})
export class TagFeedModule { }
