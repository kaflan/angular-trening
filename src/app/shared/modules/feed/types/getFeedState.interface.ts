import {GetFeedResponseInterface} from "./getFeedResponse.interface";

export interface GetFeedStateInterface {
  isLoading: boolean,
  error: string | null
  data: GetFeedResponseInterface | null
}
