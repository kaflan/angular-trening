import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'

import { ArticlesService } from 'src/app/shared/services/articles.service'
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction,
  deleteArticleAction,
  deleteArticleSuccessAction, deleteArticleFailureAction
} from 'src/app/article/store/actions'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import {Router} from "@angular/router";

@Injectable()
export class ArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.articlesService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleSuccessAction({ article })
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )


  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articlesService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction()
          }),
          catchError(() => {
            return of(deleteArticleFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(deleteArticleSuccessAction),
      tap(() => this.router.navigate(['/']))
    ),
    {
      dispatch: false
    }
  )



  constructor(private actions$: Actions, private articlesService: ArticlesService, private router: Router) {}
}
