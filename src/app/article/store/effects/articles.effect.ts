import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { ArticlesService } from 'src/app/shared/services/articles.service'
import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from 'src/app/article/store/actions'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({ slug }) => {
        return this.feedService.getFeed(slug).pipe(
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

  constructor(private actions$: Actions, private feedService: ArticlesService) {}
}
