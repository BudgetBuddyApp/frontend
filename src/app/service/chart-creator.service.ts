import {Injectable} from '@angular/core';
import {ChartType} from "../model/chart/chart.type";
import {ChartCreator} from "../common/chart.creator";
import {AggregatedExpense} from "../model/api/aggregated.expense";
import {ListResult} from "../model/api/list.result";
import {Mapper} from "../common/mapper";
import {Chart} from "chart.js/auto";

@Injectable({
  providedIn: 'root'
})
export class ChartCreatorService {

  // TODO: replace with builder
  public create(chartId: string, type: ChartType, listResult: ListResult<AggregatedExpense>): Chart {
    const data = Mapper.toChartData(listResult.data);
    if (type === ChartType.Line) {
      return ChartCreator.create(chartId, ChartType.Line, data);
    }

    throw new Error('Invalid chart type');
  }
}
