import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthStateInterface } from 'src/app/auth/types/authState.interface'

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingFutureSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const validationErrorsFutureSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
