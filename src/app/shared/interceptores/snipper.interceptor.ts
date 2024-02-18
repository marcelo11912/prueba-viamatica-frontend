import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SnipperService } from 'src/app/services/snipper.service';

@Injectable()
export class SnipperInterceptor implements HttpInterceptor {

  constructor(private spinner: SnipperService) { }  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   this.spinner.mostrar();
   return next.handle(req).pipe(
    finalize(()=> this.spinner.ocultar())
   )
  }
}
