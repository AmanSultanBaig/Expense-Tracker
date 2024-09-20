import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';  // Import PrimeNG modules here
import { InputTextModule } from 'primeng/inputtext';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, InputTextModule, RouterOutlet, HeaderComponent],  // Import PrimeNG modules here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expense-tracker';
}
