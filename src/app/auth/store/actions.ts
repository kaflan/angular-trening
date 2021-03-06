import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/auth/store/actionTypes'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interfase'

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)

export const loginAction = createAction(
  ActionTypes.LOG_IN,
  props<{ request: LoginRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOG_IN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOG_IN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)


export const getCurrentUserAction = createAction(
  ActionTypes.GET_CURRENT_USER
)
export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
)
export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
)
