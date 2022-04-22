import { Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface'
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface'
import { environment } from 'src/environments/environment'
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'
import { LoginRequestInterface } from 'src/app/auth/types/loginRequest.interfase'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users`, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${environment.apiUrl}/users/login`, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.http
      .get(`${environment.apiUrl}/user`)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
