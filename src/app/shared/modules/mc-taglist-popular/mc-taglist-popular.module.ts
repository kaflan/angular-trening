import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { RouterModule } from '@angular/router'

import { PopularTagsComponent } from './components/mc-taglist-popular.component'
import { reducers } from './store/reducers'
import { GetPopularTagsEffect } from './store/effects/getPopularTags'
import { ErrorMessageModule } from '../errorMessage/errorMessage.module'

import { LoadingModule } from '../loading/loading.module'

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    ErrorMessageModule,
    RouterModule,
    LoadingModule,
  ],
  exports: [PopularTagsComponent],
})
export class McTagListPopularModule {}
