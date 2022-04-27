import { Action, createReducer, on } from '@ngrx/store'
import { PopularTagsState } from 'src/app/shared/types/popularTagsState.interface'
import {
  getPopularTags,
  getPopularTagsFailure,
  getPopularTagsSuccess,
} from './actions'

const initialState: PopularTagsState = {
  data: null,
  isLoading: false,
  error: null,
}
const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTags,
    (state): PopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccess,
    (state, action): PopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailure,
    (state): PopularTagsState => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: PopularTagsState, action: Action) {
  return popularTagsReducer(state, action);
}
