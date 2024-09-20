import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { MonthBarComponent } from 'src/app/components/month-bar/month-bar.component';
import { BudgetComponent } from './budget/budget.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [BudgetComponent, CreateExpenseComponent, MonthBarComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
})
export class SettingsComponent implements OnInit {
  title = '';
  year_month?: number;
  ngOnInit() {
    const currentMonth = moment().format('MMMM');
    const currentYear = moment().format('YYYY');
    this.title = `${currentMonth}-${currentYear}`;
  }

  onMonthYearChange(event: { month: string; monthName: string; year: number }) {
    this.title = `${event.monthName}-${event.year}`;
    this.year_month = Number(event.year + event.month);
  }
}
