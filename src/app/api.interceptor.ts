import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export const apiInterceptor: HttpInterceptorFn =  (req: HttpRequest<unknown>, next: HttpHandlerFn) : Observable<HttpEvent<unknown>> => {
  // 沒有建構式怎麼注入?(用 inject 就好了)
  var router = inject(Router);
  console.log(router.url);

  console.log(req.url);
  return next(req);
}
