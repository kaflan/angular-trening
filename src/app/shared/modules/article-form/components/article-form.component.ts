import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'

import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'mc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: ArticleInputInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('articleSubmit') articleSubmitEvent =
    new EventEmitter<ArticleInputInterface>()

  form: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    const { title, description, body, tagList } = this.initialValuesProps
    this.form = this.fb.group({
      title,
      description,
      body,
      tagList: tagList.join(' '),
    })
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.form.value)
  }
}
