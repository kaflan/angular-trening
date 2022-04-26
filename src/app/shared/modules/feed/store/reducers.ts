import { GetFeedStateInterface } from 'src/app/shared/modules/feed/types/getFeedState.interface'
import {createReducer, on, Action} from "@ngrx/store";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "./actions";
import {routerNavigationAction} from "@ngrx/router-store";

const initialState: GetFeedStateInterface = {
  isLoading: false,
  data: null,
  error: null
};

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state): GetFeedStateInterface => ({
    ...state,
    isLoading: true
  })),
  on(getFeedSuccessAction, (state, action): GetFeedStateInterface => ({
    ...state,
    isLoading: false,
    data: action.feed,
  })),
  on(getFeedFailureAction, (state): GetFeedStateInterface => ({
    ...state,
    isLoading: false
  })),
  on(routerNavigationAction, (): GetFeedStateInterface => initialState)
)

export function reducers(state: GetFeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
