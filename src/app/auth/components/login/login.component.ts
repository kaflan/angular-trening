import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'

import { loginAction } from 'src/app/auth/store/actions'
import {
  isSubmittingFutureSelector,
  validationErrorsFutureSelector,
} from 'src/app/auth/store/selectors'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interfase'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
    this.isSubmitting$ = this.store.pipe(select(isSubmittingFutureSelector))
    this.validationErrors$ = this.store.pipe(
      select(validationErrorsFutureSelector)
    )
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({ request }))
    this.validationErrors$.subscribe(
      (validationErr: BackendErrorsInterface | null) => {
        if (validationErr) {
          Object.keys(validationErr).forEach((propKey) => {
            const formControl = this.form.get(propKey)
            if (formControl) {
              formControl.setErrors({
                serverError: validationErr[propKey],
              })
            }
          })
        }
      }
    )
    console.log(this.form.get('email').errors)
  }
}
