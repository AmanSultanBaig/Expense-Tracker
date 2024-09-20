import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import moment from 'moment';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
  providers: [ApiService],
})
export class BudgetComponent {
  _title: string = '';
  loggedInUser: any = {};
  data: any = {
    budget: 0,
    saving: 0,
    year_month: Number(moment().format('YYYYMM')),
  };

  @Input() set title(value: string) {
    this._title = value;
  }

  @Input() set year_month(value: number) {
    if(value) {
      this.data.year_month = value;
      this.getBudget();
    }
  }

  constructor(private _apiService: ApiService) {
    this.loggedInUser = this._apiService.getLoggedInUser();
    this.getBudget();
  }

  saveBudget() {
    this.data.budget = parseFloat(this.data.budget);
    this.data.saving = parseFloat(this.data.saving);

    this._apiService
      .create('/create-budget', this.data, this.loggedInUser.token)
      .subscribe((res) => {
        this._apiService.showToast(
          'Success!',
          'Budget Saved Successfully!',
          'success',
          'Close'
        );
      });
  }

  getBudget() {
    this.data.budget = parseFloat(this.data.budget);
    this.data.saving = parseFloat(this.data.saving);

    this._apiService
      .create('/get-budget', {year_month: this.data.year_month}, this.loggedInUser.token)
      .subscribe((res) => {
        if(res.data && Object.keys(res.data).length) {
          this.data.budget = res.data.budget;
          this.data.saving = res.data.saving;
        } else {
          this.data.budget = 0;
          this.data.saving = 0;
        }
      });
  }
}
