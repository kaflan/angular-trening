import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'

import { PopularTagsService } from "src/app/shared/services/popularTags.service";
import { getPopularTags, getPopularTagsFailure, getPopularTagsSuccess } from '../actions';

@Injectable()
export class GetPopularTagsEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTags),
      switchMap(() => {
        return this.popularTags.getPopularTags().pipe(
          map((popularTags: string[] ) => {
            return getPopularTagsSuccess({popularTags})
          }),
          catchError(() => {
            return of(getPopularTagsFailure())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private popularTags: PopularTagsService,
  ) {}
}
