import { Component } from '@angular/core';
import {ChartComponent} from "../../components/chart/chart.component";
import {AddExpenseComponent} from "../../components/add-expense/add-expense.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartComponent,
    AddExpenseComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
