import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { YourFeedComponent } from './components/your-feed.component'
import { FeedModule } from '../shared/modules/feed/feed.module'
import { McTagListPopularModule } from '../shared/modules/mc-taglist-popular/mc-taglist-popular.module'
import { FeedTogglerModule } from '../feed-toggler/feed-toggler.module'
import {BannerModule} from "../shared/modules/banner/banner.module";

const routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    McTagListPopularModule,
    FeedTogglerModule,
    BannerModule,
  ],
})
export class YourFeedModule {}
