import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { TokenStoreService } from '../modules/auth/services/token-store.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private token: TokenStoreService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.token.getToken();
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token),
    });
    return next.handle(modifiedReq);
  }
}
export const headerInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ];
