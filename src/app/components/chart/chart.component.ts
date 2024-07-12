import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@app/service/dashboard.service';
import { Chart } from 'chart.js/auto';
import { ChartBuilder } from '@app/common/chart.builder';
import { Mapper } from '@app/common/mapper';
import { AggregatedExpense } from '@app/model/api/aggregated.expense';
import { catchError, of } from 'rxjs';
import { ListResult } from '@app/model/api/list.result';
import { emptyListResult } from '@app/model/api/empty.list.result';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit {
  public chart?: Chart;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService
      .getAggregatedExpensesForLastMonth()
      .pipe(
        catchError(err => {
          console.error(err);
          alert(err.statusText);
          return of(emptyListResult);
        })
      )
      .subscribe({
        next: value => this.createChart(value),
      });
  }

  private createChart(listResult: ListResult<AggregatedExpense>) {
    const { labels, dataset } = Mapper.toChartData(listResult.data);

    this.chart = ChartBuilder.newBuilder('chart', 'line')
      .aspectRatio(2.5)
      .backgroundColor('blue')
      .labels(labels)
      .dataset(dataset, 'Expenses')
      .build();
  }
}
