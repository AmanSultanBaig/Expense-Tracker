import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { ListExpenseComponent } from './pages/expenses/list-expense/list-expense.component';
import { CreateExpenseComponent } from './pages/settings/create-expense/create-expense.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'expense-list', component: ListExpenseComponent },
  { path: 'register', component: CreateExpenseComponent },
  { path: 'settings', component: SettingsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
});
