import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  OnInit,
} from '@angular/core';
import { LineChartComponent } from '@app/components/line-chart/line-chart.component';
import { DashboardService } from '@app/service/dashboard.service';
import { ChartData } from '@app/model/chart-data';
import { MatDialog } from '@angular/material/dialog';
import { AddExpenseDialogComponent } from '@app/components/add-expense-modal/add-expense-dialog.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LineChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  readonly expenses = model<ChartData>();
  readonly dialog = inject(MatDialog);

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.getAggregatedExpensesForLastMonth();
  }

  private getAggregatedExpensesForLastMonth() {
    this.dashboardService.getAggregatedExpensesForLastMonth().subscribe({
      next: value => {
        this.expenses.set({
          labels: value.data.map(v => v.title),
          data: value.data.map(v => v.item),
        });
      },
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent, {
      data: { title: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        alert(result);
      }
    });
  }
}
