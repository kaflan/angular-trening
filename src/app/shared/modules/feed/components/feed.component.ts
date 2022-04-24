import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import {getFeedAction} from "src/app/shared/modules/feed/store/actions";
import {GetFeedResponseInterface} from "src/app/shared/modules/feed/types/getFeedResponse.interface";
import {dataFeedSelector, errorFeedSelector, isLoadingFeedSelector} from "src/app/shared/modules/feed/store/selectors";

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingFeedSelector))
    this.feed$ = this.store.pipe(select(dataFeedSelector))
    this.error$ = this.store.pipe(select(errorFeedSelector))
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
