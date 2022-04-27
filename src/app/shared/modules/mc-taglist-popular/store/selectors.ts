import { createFeatureSelector, createSelector } from '@ngrx/store'

import { PopularTagsState } from 'src/app/shared/types/popularTagsState.interface'

export const popularTagsFeatureSelector =
  createFeatureSelector<PopularTagsState>('popularTags')

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagState: PopularTagsState) => popularTagState.data
)

export const popularTagsIsLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagState: PopularTagsState) => popularTagState.isLoading
)

export const popularTagsErrSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagState: PopularTagsState) => popularTagState.error
)
