import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { ArticleComponent } from './components/article.component';
import { reducers } from './store/reducers';
import { ArticleEffect } from './store/effects/articles.effect';
import {McTagListModule} from "../shared/modules/mc-taglist/mc-tag-list.module";

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  declarations: [
    ArticleComponent
  ],
    imports: [
        CommonModule,
        EffectsModule.forFeature([ArticleEffect]),
        StoreModule.forFeature('article', reducers),
        RouterModule.forChild(routes),
        ErrorMessageModule,
        LoadingModule,
        McTagListModule
    ],
  providers: [ArticlesService]
})
export class ArticleModule { }
