import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { GetArticleResponseInterface } from 'src/app/shared/types/getArticleResponse.interface'

@Injectable()
export class ArticlesService {
  constructor(private http: HttpClient) {}

  getFeed(slug: string): Observable<GetArticleResponseInterface> {
    return this.http.get<GetArticleResponseInterface>(`${environment.apiUrl}/articles/${slug}`)
  }
}
