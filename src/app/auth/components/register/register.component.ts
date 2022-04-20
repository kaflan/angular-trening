import { Component, OnInit } from '@angular/core'
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { registerAction } from 'src/app/auth/store/actions'
import { isSubmittingFutureSelector, validationErrorsFutureSelector } from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import {BackendErrorsInterface} from "../../../shared/types/backendErrors.interface";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  validationErrors$: Observable<BackendErrorsInterface | null>

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initValues()
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingFutureSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsFutureSelector))
    console.log(this.validationErrors$);
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username:  new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(): void {
    console.log('submit')
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({ request }))
    this.validationErrors$.subscribe((validationErr: BackendErrorsInterface | null) => {
      if(validationErr) {
        Object.keys(validationErr).forEach((propKey) => {
          const formControl = this.form.get(propKey);
          if(formControl) {
            formControl.setErrors({
              serverError: validationErr[propKey]
            });
          }
        });
      }
    })
    console.log(this.form.get('username').errors)
  }
}
