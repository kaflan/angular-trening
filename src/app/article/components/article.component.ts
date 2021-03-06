import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { select, Store } from '@ngrx/store'
import { combineLatest, Observable, Subscription, map } from 'rxjs'

import {deleteArticleAction, getArticleAction} from 'src/app/article/store/actions'
import { currentUserSelector } from 'src/app/auth/store/selectors'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import {
  dataArticleSelector,
  errorArticleSelector,
  isLoadingArticleSelector,
} from '../store/selectors'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string
  article: ArticleInterface | null
  articleSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingArticleSelector))
    this.error$ = this.store.pipe(select(errorArticleSelector))
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(dataArticleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) return true
          return currentUser.username === article.author.username
        }
      )
    )
  }

  initializeListeners(): void {
    this.articleSubscription = this.store
      .pipe(select(dataArticleSelector))
      .subscribe((article: ArticleInterface | null) => (this.article = article))
  }

  fetchData(): void {
    this.store.dispatch(
      getArticleAction({
        slug: this.slug,
      })
    )
  }

  deleteArticle(): void {
      this.store.dispatch(deleteArticleAction({
        slug: this.slug
      }))
  }
}
