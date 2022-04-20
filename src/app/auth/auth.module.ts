import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { EffectsModule } from '@ngrx/effects'
import { RegisterComponent } from 'src/app/auth/components/register/register.component'

import { reducers } from 'src/app/auth/store/reducers'
import { AuthService } from './services/auth.service'

import { RegisterEffect } from './store/effects/register.effect'
import { PersistentService } from '../shared/services/persistent.service'

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  declarations: [RegisterComponent],
  providers: [AuthService, PersistentService],
})
export class AuthModule {}
