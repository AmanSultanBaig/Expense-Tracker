import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [ApiService],
})
export class LoginComponent {
  loginData: any = { email: '', password: '' };

  constructor(private _apiService: ApiService, private router: Router) {}

  login() {
    this._apiService.create('sign-in', this.loginData).subscribe({
      next: (res) => {
        this._apiService.showToast(
          'Success!',
          'Logged In Successfully !',
          'success',
          'Close'
        );
        this.router.navigate(['/expense-list']);
        this._apiService.storeLoggedInUser(res.data);
      },
      error: (error) => {
        const errorMessage = error.message || 'An error occurred during login.';
        this._apiService.showToast('Error!', errorMessage, 'error', 'Close');
      },
    });
  }
}
