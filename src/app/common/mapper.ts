import {AggregatedExpense} from "../model/api/aggregated.expense";
import {ChartData} from "../model/chart/chart.data";

export class Mapper {

  static toChartData(expenses: AggregatedExpense[]): ChartData {
    const data = new ChartData();
    data.labels = expenses.map(expense => expense.title);
    data.dataset.data = expenses.map(expense => expense.item);
    data.dataset.label = 'Expenses';

    return data;
  }

}
