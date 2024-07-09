import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboard.service';
import { Chart } from 'chart.js/auto';
import { ChartBuilder } from '../../common/chart.builder';
import { ListResult } from '../../model/api/list.result';
import { AggregatedExpense } from '../../model/api/aggregated.expense';
import { Mapper } from '../../common/mapper';

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
    this.dashboardService.getAggregatedExpensesForLastMonth().subscribe({
      next: value => this.createChart(value),
      error: e => {
        alert('Something went wrong!');
        console.error(e);
      },
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
