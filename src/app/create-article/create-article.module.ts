import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import {StoreModule} from "@ngrx/store";

import { CreateArticleComponent } from './components/create-article.component'
import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module'
import { ArticlesService } from 'src/app/shared/services/articles.service'
import { ArticleEffect } from 'src/app/article/store/effects/articles.effect'

import {reducers} from "src/app/article/store/reducers";

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
  {
    path: 'articles/edit/:slug',
    component: CreateArticleComponent,
  },
]

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([ArticleEffect]),
    StoreModule.forFeature('article', reducers),
  ],
  providers: [ArticlesService],
})
export class CreateArticleModule {}
