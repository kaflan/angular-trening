import { createReducer, on, Action } from '@ngrx/store'

import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import {
  getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction,
  loginAction, loginFailureAction, loginSuccessAction,
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from 'src/app/auth/store/actions'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
  isLoading: false
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
      isLoggedIn: true,
      isSubmitting: false,
    })
  ),
  on(
    registerFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      validationErrors: action.errors,
      isSubmitting: false,
    })
  ),
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
      isLoggedIn: true,
      isSubmitting: false,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      validationErrors: action.errors,
      isSubmitting: false,
    })
  ),
  on(
    getCurrentUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      currentUser: action.currentUser,
      isLoading: false,
      isLoggedIn: true
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null
    })
  )

)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
