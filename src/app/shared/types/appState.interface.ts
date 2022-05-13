import { GetArticleStateInterface } from 'src/app/article/types/getArticleState.interface'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { GetFeedStateInterface } from 'src/app/shared/modules/feed/types/getFeedState.interface'
import { PopularTagsState } from 'src/app/shared/types/popularTagsState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  feed: GetFeedStateInterface
  popularTags: PopularTagsState
  article: GetArticleStateInterface
}
