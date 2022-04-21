import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Router } from '@angular/router'

import { AuthService } from 'src/app/auth/services/auth.service'
import { PersistentService } from 'src/app/shared/services/persistent.service'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token)
            return loginSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              loginFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSuccessAction),
      tap(() => {
        this.router.navigateByUrl('/').then(() => {
        })
      })
    ),
    {
      dispatch: false,
    }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistentService,
    private router: Router
  ) {}
}
