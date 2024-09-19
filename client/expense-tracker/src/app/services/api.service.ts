import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8088/api/v1';

  constructor(private http: HttpClient) {}

  create(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(
          () => new Error(error.error.message || 'An unknown error occurred')
        );
      })
    );
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
