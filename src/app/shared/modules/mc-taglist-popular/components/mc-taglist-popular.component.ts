import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'

import { Observable } from 'rxjs'
import {
  popularTagsSelector,
  isLoadingSelector,
  errorSelector,
} from 'src/app/shared/modules/mc-taglist-popular/store/selectors'
import { getPopularTags } from 'src/app/shared/modules/mc-taglist-popular/store/actions'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './mc-taglist-popular.component.html',
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<string[] | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTags())
  }
}
