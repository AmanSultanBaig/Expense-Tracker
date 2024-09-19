import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MonthBarComponent } from 'src/app/components/month-bar/month-bar.component';
import { ApiService } from 'src/app/services/api.service';
import moment from 'moment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-expense',
  standalone: true,
  imports: [MonthBarComponent, HttpClientModule, CommonModule],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css',
  providers: [ApiService],
})
export class ListExpenseComponent implements OnInit {
  expenses: any = [];
  loggedInUser: any = {};
  isCardView: boolean = true;
  title: string = '';
  filters: any = {
    year_month: Number(moment().format('YYYYMM')),
    user_id: '',
  };
  constructor(private _apiService: ApiService) {
    this.loggedInUser = this._apiService.getLoggedInUser();
  }

  ngOnInit() {
    this.title = `Expenses of ${moment().format('MMMM')}-${moment().format(
      'YYYY'
    )}`;
    this.filters.user_id = this.loggedInUser.id;
  }

  onMonthYearChange(event: { month: string; monthName: string; year: number }) {
    this.title = `Expenses of ${event.monthName}-${event.year}`;
    const yearMonth = `${event.year}${event.month}`;
    this.filters.year_month = Number(yearMonth);
  }
}
