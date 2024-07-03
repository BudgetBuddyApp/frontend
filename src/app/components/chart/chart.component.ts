import {Component, OnInit} from '@angular/core';
import {Chart} from "chart.js/auto";

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart() {
    this.chart = new Chart('chart', {
      type: 'line',
      data: {
        labels: [
          '2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05', '2022-05-06', '2022-05-07', '2022-05-08',
          '2022-05-09', '2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13', '2022-05-14', '2022-05-15', '2022-05-16',
          '2022-05-17', '2022-05-18', '2022-05-19', '2022-05-20', '2022-05-21', '2022-05-22', '2022-05-23', '2022-05-24',
          '2022-05-25', '2022-05-26', '2022-05-27', '2022-05-28', '2022-05-29', '2022-05-30'
        ],
        datasets: [
          {
            label: 'Expenses',
            data: [
              29, 72, 75, 190, 502, 825, 406, 642, 88, 4, 679, 381, 818, 678, 90,
              757, 753, 698, 124, 203, 689, 528, 852, 70, 992, 412, 170, 132, 109, 105
            ]
          }
        ],
      },
      options: {
        aspectRatio: 2.5,
        backgroundColor: 'blue',
      }
    });
  }

}
