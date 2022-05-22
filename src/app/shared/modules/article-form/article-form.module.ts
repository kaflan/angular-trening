import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ArticleFormComponent]
})
export class ArticleFormModule { }
