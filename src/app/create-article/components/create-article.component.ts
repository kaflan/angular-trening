import { Component, OnInit } from '@angular/core'
import { ArticlesService } from 'src/app/shared/services/articles.service'
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

  constructor(private articleService: ArticlesService) {}

  ngOnInit(): void {}

  onSubmit(res: any): void {
    console.log('onSubmit in pareent', res)
  }
}
