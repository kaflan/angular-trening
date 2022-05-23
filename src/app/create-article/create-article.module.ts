import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { CreateArticleComponent } from './components/create-article.component'
import { ArticleFormModule } from 'src/app/shared/modules/article-form/article-form.module'
import { ArticlesService } from 'src/app/shared/services/articles.service'

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
]

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  providers: [ArticlesService],
})
export class CreateArticleModule {}
