import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'

import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import {
  currentUserSelector,
  isAnonymousInSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'mc-topBar',
  templateUrl: './topBar.component.html',
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>
  currentUser$: Observable<CurrentUserInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousInSelector))
    this.currentUser$ = this.store.pipe(select(currentUserSelector))
  }
}
