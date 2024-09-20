import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [FormsModule],
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

  saveBudget() {
    console.log(this.data)
  }
}
