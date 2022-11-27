import { Router } from '@angular/router';
import { Configs } from './../_configs/configs';
import { Injectable } from '@angular/core'; // imports the class that provides local storage for token
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { catchError, filter, take, switchMap } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
    providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authenticateService: AuthenticateService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.body instanceof FormData) {
            return next.handle(req);
        } else {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + Configs.getToken) });// This clones HttpRequest and Authorization header with Bearer token added
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
            req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

            return next.handle(req)
                .pipe(
                    catchError((error: HttpErrorResponse) => {
                        // Catching Error Stage
                        if (error && error.status === 401) {
                            this.authenticateService.logout();
                            this.router.navigate(['signin']);
                        }
                        const err = error.error.message || error.statusText;
                        return throwError(error); // any further errors are returned to frontend                    
                    })
                );
        }
    }
}