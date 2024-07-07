import {Component, OnInit} from '@angular/core';
import {ChartCreatorService} from "../../service/chart-creator.service";
import {DashboardService} from "../../service/dashboard.service";
import {Chart} from "chart.js/auto";
import {ChartType} from "../../model/chart/chart.type";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  public chart?: Chart;

  constructor(private chartCreatorService: ChartCreatorService, private dashboardService: DashboardService) {
  }

  ngOnInit(): void {
    this.dashboardService.getAggregatedExpensesForLastMonth()
      .subscribe({
        next: value => this.chart = this.chartCreatorService.create('chart', ChartType.Line, value),
        error: e => console.error(e),
      })
  }
}
