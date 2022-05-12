import { createAction, props } from '@ngrx/store'
import { ActionTypes } from './actionTypes'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

export const getFeedAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ url: string }>()
)

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const getFeedFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)
