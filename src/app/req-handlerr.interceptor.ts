import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReqHandlerrInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.includes('/user')){
      return next.handle(request);
    }
    const req = request.clone({
      setHeaders: {
        'Name' : 'Saikiran'
      }
    })
    return next.handle(req);
  }
}
