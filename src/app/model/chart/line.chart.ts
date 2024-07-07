import {Chart} from "chart.js/auto";
import {ChartData} from "./chart.data";

export class LineChart extends Chart {

  static instance(chartId: string, data: ChartData): Chart {
    return new Chart(chartId, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [data.dataset],
      },
      options: {
        aspectRatio: 2.5,
        backgroundColor: 'blue',
      }
    });
  }
}
