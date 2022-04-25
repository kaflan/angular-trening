import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subscription} from "rxjs";

import {getFeedAction} from "src/app/shared/modules/feed/store/actions";
import {GetFeedResponseInterface} from "src/app/shared/modules/feed/types/getFeedResponse.interface";
import {dataFeedSelector, errorFeedSelector, isLoadingFeedSelector} from "src/app/shared/modules/feed/store/selectors";
import {environment} from "src/environments/environment";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {parseUrl, stringify} from "query-string";

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.baseUrl = this.router.url.split('?')[0]
  }
  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || 1)
      this.fetchData()
    })
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingFeedSelector))
    this.feed$ = this.store.pipe(select(dataFeedSelector))
    this.error$ = this.store.pipe(select(errorFeedSelector))
  }

  fetchData(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = parseUrl(this.apiUrlProps)
    const stringifyParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    })
    const url = `${parsedUrl.url}?${stringifyParams}`
    this.store.dispatch(getFeedAction({url}))
  }
}
