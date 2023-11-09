import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-token-expired-interceptor',
  templateUrl: './token-expired-interceptor.component.html',
  styleUrls: ['./token-expired-interceptor.component.css']
})
export class TokenExpiredInterceptorComponent implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          // Check if the error status is 401 (unauthorized) for token expiration
          // You can navigate the user to the login page or display a message here
          // For example:
          this.router.navigate(['/login']); // Redirect to login page
          // or display a message
          // Example: this.notificationService.showErrorMessage('Session expired. Please login again.');
        }
        return throwError(error);
      })
    );
  }

}
