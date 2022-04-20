import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthStateInterface } from '../types/authState.interface'

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth')

export const isSubmittingFutureSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
