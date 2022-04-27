import { createFeatureSelector, createSelector } from '@ngrx/store'
import { GetFeedStateInterface } from 'src/app/shared/modules/feed/types/getFeedState.interface'

export const feedFeatureSelector =
  createFeatureSelector<GetFeedStateInterface>('feed')

export const isLoadingFeedSelector = createSelector(
  feedFeatureSelector,
  (feedState: GetFeedStateInterface) => feedState.isLoading
)

export const dataFeedSelector = createSelector(
  feedFeatureSelector,
  (feedState: GetFeedStateInterface) => feedState.data
)

export const errorFeedSelector = createSelector(
  feedFeatureSelector,
  (feedState: GetFeedStateInterface) => feedState.error
)
