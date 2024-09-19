import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-month-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-bar.component.html',
  styleUrl: './month-bar.component.css',
})
export class MonthBarComponent {
  months: { name: string; value: string }[] = [
    { name: 'January', value: '01' },
    { name: 'February', value: '02' },
    { name: 'March', value: '03' },
    { name: 'April', value: '04' },
    { name: 'May', value: '05' },
    { name: 'June', value: '06' },
    { name: 'July', value: '07' },
    { name: 'August', value: '08' },
    { name: 'September', value: '09' },
    { name: 'October', value: '10' },
    { name: 'November', value: '11' },
    { name: 'December', value: '12' },
  ];

  years: number[] = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - 5 + i
  ); // Last 5 years to next 5 years

  selectedMonth: string = this.months[new Date().getMonth()].value; // Default to current month
  selectedYear: number = new Date().getFullYear(); // Default to current year

  @Output() monthYearChange = new EventEmitter<{
    month: string;
    year: number;
  }>();

  onMonthChange(value: string) {
    this.selectedMonth = value;
    this.emitMonthYearChange();
  }

  onYearChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedYear = parseInt(target.value, 10);
    this.emitMonthYearChange();
  }

  private emitMonthYearChange() {
    const selectedMonth =
      this.months.find((m) => m.value === this.selectedMonth)?.value || '';
    this.monthYearChange.emit({ month: selectedMonth, year: this.selectedYear });
  }
}
