import { createFeatureSelector, createSelector } from '@ngrx/store'
import { AuthStateInterface } from '../types/authState.interface'
import {BackendErrorsInterface} from "../../shared/types/backendErrors.interface";

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
