import { createAction, props } from '@ngrx/store'

import { ActionTypes } from './actionTypes'


export const getPopularTags = createAction(
    ActionTypes.GET_POPULAR_TAGS
)

export const getPopularTagsSuccess = createAction(
    ActionTypes.GET_POPULAR_TAGS_SUCCESS,
    props<{ popularTags: string[] }>()
)

export const getPopularTagsFailure = createAction(
    ActionTypes.GET_POPULAR_TAGS_FAILURE
)