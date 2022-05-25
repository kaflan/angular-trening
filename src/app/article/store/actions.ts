import { createAction, props } from '@ngrx/store'

import { ActionTypes } from './actionTypes'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
)

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{ slug: string }>()
)

export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
)

export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
)

export const createArticle = createAction(
  ActionTypes.CREATE_ARTICLE,
  props<{ articleInput: ArticleInterface }>()
)

export const createArticleSuccess = createAction(
  ActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const createArticleFailure = createAction(
  ActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: any }>()
)


export const editArticle = createAction(
  ActionTypes.EDIT_ARTICLE,
  props<{ slug: string, articleInput: ArticleInterface }>()
)

export const editArticleSuccess = createAction(
  ActionTypes.EDIT_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
)

export const editArticleFailure = createAction(
  ActionTypes.EDIT_ARTICLE_FAILURE,
  props<{ errors: any }>()
)
