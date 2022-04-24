import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import {GetFeedStateInterface} from "src/app/shared/modules/feed/types/getFeedState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: GetFeedStateInterface
}
