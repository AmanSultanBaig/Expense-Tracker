import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button'; // Import PrimeNG modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ApiService } from '../../services/api.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ToastModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ApiService, MessageService],
})
export class LoginComponent {
  loginData: any = { email: '', password: '' };
  registerData: any = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  constructor(
    private _apiService: ApiService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info Message',
      detail: 'Test toast notification',
    });
  }

  login() {
    this._apiService.login('sign-in', this.loginData).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Login Successfully!',
        });
      },
      error: (error) => {
        const errorMessage = error.message || 'An error occurred during login.';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
        });
      },
    });
  }

  register() {
    this.registerData.full_name = `${this.registerData.first_name} ${this.registerData.last_name}`;
    this._apiService.login('sign-up', this.registerData).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Register Successfully!',
        });
      },
      error: (error) => {
        const errorMessage = error.message || 'An error occurred during login.';
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: errorMessage,
        });
      },
    });
  }
}
