import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8088/api/v1';

  constructor(private http: HttpClient, private router: Router) {}

  create(endpoint: string, data: any, token?: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    let bearerHeader = {};

    if(token) {
      bearerHeader = { headers }
    }

    return this.http.post(`${this.apiUrl}/${endpoint}`, data, bearerHeader).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(
          () => new Error(error.error.message || 'An unknown error occurred')
        );
      })
    );
  }

  storeLoggedInUser(data: any) {
    localStorage.setItem('loggedIn-user', JSON.stringify(data));
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem('loggedIn-user') || '{}');
  }

  logout() {
    localStorage.removeItem("loggedIn-user");
    this.router.navigate(['/login']);
  }

  showToast(
    title: string = 'Success!',
    message: string = 'operation done',
    icon: SweetAlertIcon = 'success',
    buttonText: string = 'OK'
  ) {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      confirmButtonText: buttonText,
    });
  }
}
