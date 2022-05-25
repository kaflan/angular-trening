import { createFeatureSelector, createSelector } from '@ngrx/store'
import { GetArticleStateInterface } from 'src/app/article/types/getArticleState.interface'

export const articleFeatureSelector =
  createFeatureSelector<GetArticleStateInterface>('article')

export const isLoadingArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: GetArticleStateInterface) => articleState.isLoading
)

export const dataArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: GetArticleStateInterface) => articleState.data
)

export const errorArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: GetArticleStateInterface) => articleState.error
)


export const validationArticleSelector = createSelector(
  articleFeatureSelector,
  (articleState: GetArticleStateInterface) => articleState.validationErrors
)

export const isSubmittingSelector = createSelector(
  articleFeatureSelector,
  (articleState: GetArticleStateInterface) => articleState.isSubmitting
)