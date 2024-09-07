import { Component, effect, model, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { ChartData } from '@app/model/chart-data';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent implements OnInit {
  chart!: Chart;
  expenses = model<ChartData>();

  constructor() {
    effect(() => {
      this.chart.data.labels = this.expenses()?.labels;
      this.chart.data.datasets[0].data = this.expenses()?.data || [];
      this.chart.update();
    });
  }

  ngOnInit(): void {
    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'Expenses',
            data: [],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    });
  }
}
