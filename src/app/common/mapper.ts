import { AggregatedExpense } from '@app/model/api/aggregated.expense';
import { ChartData } from '@app/model/chart/chart.data';

export class Mapper {
  static toChartData(expenses: AggregatedExpense[]): ChartData {
    const data = new ChartData();
    data.labels = expenses.map(expense => expense.title);
    data.dataset.data = expenses.map(expense => expense.item);

    return data;
  }
}
