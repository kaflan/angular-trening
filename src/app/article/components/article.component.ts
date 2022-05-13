import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { getArticleAction } from 'src/app/article/store/actions';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  slug: string
  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initializevalues()
    this.fetchData()
  }

  initializevalues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({
      slug: this.slug
    }))
  }

}
