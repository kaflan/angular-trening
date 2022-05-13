import { createReducer, on, Action } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions'
import { GetArticleStateInterface } from 'src/app/article/types/getArticleState.interface'


const initialState: GetArticleStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): GetArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): GetArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): GetArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): GetArticleStateInterface => initialState)
)

export function reducers(state: GetArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
