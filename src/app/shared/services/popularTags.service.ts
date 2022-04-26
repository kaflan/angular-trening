import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { PopularTagsResponseInterface } from 'src/app/shared/types/popularTagsResponse.interface'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}
  getPopularTags(): Observable<string[]> {
    const url = `${environment.apiUrl}/tags`
    return this.http.get(url).pipe(
      map((response: PopularTagsResponseInterface) => {
        return response.tags
      })
    )
  }
}
