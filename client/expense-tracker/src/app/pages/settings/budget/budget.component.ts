import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css',
})
export class BudgetComponent {
  _title: string = '';
  data: any = {
    budget: 0,
    saving: 0,
  };

  @Input() set title(value: string) {
    this._title = value;
  }
}
