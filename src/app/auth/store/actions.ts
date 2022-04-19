import { createAction, props } from '@ngrx/store'
import {ActionTypes} from 'src/app/auth/store/actionTypes'

export const action = createAction(
  ActionTypes.REGISTER,
  props<{username: string; password: string; email: string}>()
)
