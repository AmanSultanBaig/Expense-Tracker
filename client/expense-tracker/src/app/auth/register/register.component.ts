import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [ApiService],
})
export class RegisterComponent {
  registerData: any = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  constructor(private _apiService: ApiService, private router: Router) {}

  register() {
    this.registerData.full_name = `${this.registerData.first_name} ${this.registerData.last_name}`;
    this._apiService.create('sign-up', this.registerData).subscribe({
      next: (res) => {
        this._apiService.showToast(
          'Success!',
          'Registered Successfully!',
          'success',
          'Close'
        );
        this.router.navigate(['/login'])
      },
      error: (error) => {
        const errorMessage =
          error.message || 'An error occurred during register.';
        this._apiService.showToast('Error!', errorMessage, 'error', 'Close');
      },
    });
  }
}
