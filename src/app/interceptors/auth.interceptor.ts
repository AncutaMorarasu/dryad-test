import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HTTPServiceService } from '../services/service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private httpService: HTTPServiceService) {}

  token: string;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.httpService.token.subscribe((value) => {
      this.token = value;
    });

    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${this.token}`),
    });
    return next.handle(modifiedRequest);
  }
}
