import {Component, Input, OnInit} from '@angular/core';

import {ArticleInputInterface} from "src/app/shared/types/articleInput.interface";
import {BackendErrorsInterface} from "src/app/shared/types/backendErrors.interface";

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmitting: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  constructor() { }

  ngOnInit(): void {
  }

}
