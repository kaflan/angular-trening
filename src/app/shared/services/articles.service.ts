import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface'
import { ArticleInterface } from 'src/app/shared/types/article.interface'

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getFeed(slug: string): Observable<ArticleInterface> {
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
}
