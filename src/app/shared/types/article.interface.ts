import {ProfileInterface} from "./profile.interface";

export interface ArticleInterface {
  body: string
  title: string,
  createdAd: string,
  updatedAd: string,
  description: string,
  favorited: boolean
  favoritesCount: number,
  slug: string,
  tagList: string[],
  author: ProfileInterface
}
