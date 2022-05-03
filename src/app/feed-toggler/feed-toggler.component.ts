import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  selector: 'feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameProps: string | null

  isLoggedIn$: Observable<boolean>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {}

}
