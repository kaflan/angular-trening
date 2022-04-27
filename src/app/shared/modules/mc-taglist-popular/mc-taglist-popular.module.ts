import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { McTagListPopularComponent } from './components/mc-taglist-popular.component';
import { reducers } from './store/reducers';
import { GetPopularTagsEffect } from './store/effects/getPopularTags';



@NgModule({
  declarations: [
    McTagListPopularComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([
      GetPopularTagsEffect
    ])
  ],
  exports: [McTagListPopularComponent]
})
export class McTagListPopularModule { }
