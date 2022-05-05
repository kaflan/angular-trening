import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { GlobalFeedComponent } from 'src/app/globalFeed/components/globalFeed/globalFeed.component'
import { FeedModule } from 'src/app/shared/modules/feed/feed.module'
import { BannerModule } from 'src/app/shared/modules/banner/banner.module'
import { McTagListModule } from 'src/app/shared/modules/mc-taglist/mc-tag-list.module'
import { McTagListPopularModule } from 'src/app/shared/modules/mc-taglist-popular/mc-taglist-popular.module'
import { FeedTogglerModule } from 'src/app/feed-toggler/feed-toggler.module'

const routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    McTagListModule,
    McTagListPopularModule,
    FeedTogglerModule,
  ],
  declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
