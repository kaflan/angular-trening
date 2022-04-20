import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { HttpErrorResponse } from '@angular/common/http'
import { catchError, map, of, switchMap, tap } from 'rxjs'
import { Router } from '@angular/router'

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions'
import { AuthService } from '../../services/auth.service'
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface'
import { PersistentService } from '../../../shared/services/persistent.service'


@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set('accessToken', currentUser.token)
            return registerSuccessAction({ currentUser })
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/').then(() => {})
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
