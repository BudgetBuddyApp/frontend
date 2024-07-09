import { ChartType } from 'chart.js';
import { Chart } from 'chart.js/auto';

interface Builder {
  label(value: string): this;

  labels(values: string[]): this;

  dataset(value: { label: string; data: number[] }, label?: string): this;

  aspectRatio(value: number): this;

  backgroundColor(value: string): this;
}

export class ChartBuilder implements Builder {
  private readonly chart: Chart;

  private constructor(chartId: string, type: ChartType) {
    this.chart = new Chart(chartId, {
      type: type,
      data: {
        labels: [],
        datasets: [],
      },
      options: {},
    });
  }

  static newBuilder(id: string, type: ChartType): ChartBuilder {
    return new ChartBuilder(id, type);
  }

  backgroundColor(value: string): this {
    this.chart.options.backgroundColor = value;
    return this;
  }

  aspectRatio(value: number): this {
    this.chart.options.aspectRatio = value;
    return this;
  }

  labels(values: string[]): this {
    this.chart.data.labels = values;
    return this;
  }

  dataset(value: { label: string; data: number[] }, label?: string): this {
    const length = this.chart?.data?.datasets.push(value);
    if (label) {
      this.chart.data.datasets[length - 1].label = label;
    }

    return this;
  }

  label(value: string): this {
    this.chart.data.labels?.push(value);
    return this;
  }

  build() {
    return this.chart;
  }
}
