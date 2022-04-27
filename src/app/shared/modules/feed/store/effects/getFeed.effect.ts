import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { FeedService } from 'src/app/shared/services/feed.service'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from 'src/app/shared/modules/feed/store/actions'
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/getFeedResponse.interface'

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed })
          }),
          catchError(() => {
            return of(getFeedFailureAction())
          })
        )
      })
    )
  )

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
