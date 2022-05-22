import { Component, OnInit } from '@angular/core'
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: ['123'],
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log('onSubmit in pareent', res)
  }
}
