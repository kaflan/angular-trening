import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {environment} from "src/environments/environment";
import {GetFeedResponseInterface} from "src/app/shared/modules/feed/types/getFeedResponse.interface";


@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<GetFeedResponseInterface> {
    return this.http.get<GetFeedResponseInterface>(`${environment.apiUrl}${url}`)
  }
}
