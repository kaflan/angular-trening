import {Injectable} from "@angular/core";
import {HttpInterceptor} from "@angular/common/http";
import {HttpRequest,HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'

import { PersistentService } from 'src/app/shared/services/persistent.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private persistentService: PersistentService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persistentService.get('accessToken')
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    })
    return next.handle(req);
  }
}
