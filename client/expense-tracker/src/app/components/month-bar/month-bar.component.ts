import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-month-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-bar.component.html',
  styleUrl: './month-bar.component.css',
})
export class MonthBarComponent {
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  years: number[] = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - 5 + i
  ); // Last 5 years to next 5 years

  selectedMonth: string = this.months[new Date().getMonth()]; // Default to current month
  selectedYear: number = new Date().getFullYear(); // Default to current year

  onMonthChange(month: string) {
    this.selectedMonth = month;
  }

  onYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedYear = parseInt(target.value, 10);
  }
}
