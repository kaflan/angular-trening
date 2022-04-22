import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'

import { RegisterComponent } from 'src/app/auth/components/register/register.component'
import { LoginComponent } from 'src/app/auth/components/login/login.component'
import { reducers } from 'src/app/auth/store/reducers'
import { PersistentService } from 'src/app/shared/services/persistent.service'
import { AuthService } from './services/auth.service'
import { RegisterEffect } from './store/effects/register.effect'
import { LoginEffect } from './store/effects/login.effect'
import {GetCurrentUserEffect} from "./store/effects/getCurrentUser.effect";

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistentService],
})
export class AuthModule {}
