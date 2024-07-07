import {ChartType} from "../model/chart/chart.type";
import {LineChart} from "../model/chart/line.chart";
import {ChartData} from "../model/chart/chart.data";
import {Chart} from "chart.js/auto";

export class ChartCreator {

  /**
   * Factory method that creates a specific Chart instance.
   *
   * @param chartId canvas ID in HTML
   * @param type type of chart that will be rendered
   * @param data labels and dataset
   */
  public static create(chartId: string, type: ChartType, data: ChartData): Chart {
    if (type === ChartType.Line) {
      return LineChart.instance(chartId, data);
    }
    throw new Error('Invalid chart type');
  }

}
