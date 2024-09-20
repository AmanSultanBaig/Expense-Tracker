import { Component } from '@angular/core';
import { MonthBarComponent } from 'src/app/components/month-bar/month-bar.component';
import { BudgetComponent } from './budget/budget.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BudgetComponent, CreateExpenseComponent, MonthBarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
