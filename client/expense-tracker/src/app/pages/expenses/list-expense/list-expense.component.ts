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
  initialCall: boolean = true;
  expenses: any = [];
  loggedInUser: any = {};
  isCardView: boolean = true;
  title: string = '';
  transactionProgress:any = {
    budget: 100000,
    expend: 0,
    remain: 0,
    saving: 0,
  };
  year_month = Number(moment().format('YYYYMM'));
  constructor(private _apiService: ApiService) {
    this.loggedInUser = this._apiService.getLoggedInUser();
  }

  ngOnInit() {
    const currentMonth = moment().format('MMMM');
    const currentYear = moment().format('YYYY');
    this.title = `Expenses of ${currentMonth}-${currentYear}`;
    if (this.initialCall) {
      this.fetchExpenses();
    }
    this.initialCall = false;
  }

  onMonthYearChange(event: { month: string; monthName: string; year: number }) {
    this.title = `Expenses of ${event.monthName}-${event.year}`;
    const yearMonth = `${event.year}${event.month}`;
    this.year_month = Number(yearMonth);
    this.fetchExpenses();
    this.transactionProgress = { budget: 100000, expend: 0, remain: 0, saving: 0 };
  }

  fetchExpenses() {
    this._apiService.create('/list-expense', { date: this.year_month }, this.loggedInUser.token).subscribe((res) => {
        this.expenses = res?.data || [];

        if (this.expenses.length) {
          this.expenses.forEach((expense: any) => {
            this.transactionProgress.expend += expense.expend;
          });
          this.transactionProgress.remain = (this.transactionProgress.budget - this.transactionProgress.expend);
        }
      });
  }
}
