import { Component } from '@angular/core';
import { MonthBarComponent } from 'src/app/components/month-bar/month-bar.component';

@Component({
  selector: 'app-list-expense',
  standalone: true,
  imports: [MonthBarComponent],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css',
})
export class ListExpenseComponent {}
