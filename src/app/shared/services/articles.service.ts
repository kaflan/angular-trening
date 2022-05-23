import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface'
import { ArticleInterface } from 'src/app/shared/types/article.interface'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { SaveArticleResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface'

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    return this.http.post(`${environment.apiUrl}/articles/`, articleInput).pipe(
      map((resposne: SaveArticleResponseInterface) => {
        return resposne.article
      })
    )
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    return this.http
      .get<GetArticleResponseInterface>(
        `${environment.apiUrl}/articles/${slug}`
      )
      .pipe(
        map((response: GetArticleResponseInterface) => {
          return response.article
        })
      )
  }

  deleteArticle(slug: string): Observable<{}> {
    return this.http.delete<{}>(`${environment.apiUrl}/articles/${slug}`)
  }
}
