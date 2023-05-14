

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorServiceService } from '../servicios/autenticacion/error-service';
import { TokenService } from '../servicios/autenticacion/token.service';

@Injectable({
  providedIn: 'root'
})
export class EduInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService, private errorService: ErrorServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if (token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
    }
    return next.handle(intReq).pipe(
      catchError(error => {
        let errorMessage = '';
        let errorStatus;
        if (error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // backend error
          errorMessage = `Server-side error: ${error.status} ${error.message}`;
          errorStatus = error.status;
        }
        
        // aquí podrías agregar código que muestre el error en alguna parte fija de la pantalla.
        this.errorService.show(errorStatus);
        return throwError(errorMessage);
      })
    );
  }
}

export const interceptorProvider = [{provide: HTTP_INTERCEPTORS, useClass: EduInterceptorService, multi: true}];