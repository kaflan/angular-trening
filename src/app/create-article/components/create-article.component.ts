import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'

import { ArticlesService } from 'src/app/shared/services/articles.service'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import {
  isSubmittingSelector,
  validationArticleSelector,
} from 'src/app/article/store/selectors'
import { createArticle } from 'src/app/article/store/actions'
import { ArticleInterface } from 'src/app/shared/types/article.interface'


@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  slug: string
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface | null>
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  constructor(
    private articleService: ArticlesService,
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeData();
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.validationErrors$ = this.store.pipe(select(validationArticleSelector))
  }

  initializeData(): void {
      this.slug = this.route.snapshot.paramMap.get('slug')
      if(this.slug) {
        this.fetchData();
      }
  }

  fetchData(): void {
    this.store.
  }

  onSubmit(articleInput: ArticleInterface): void {
    this.store.dispatch(createArticle({ articleInput }))
  }
}
