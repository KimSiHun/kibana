import VislibVisualizationsColumnChartProvider from './column_chart';
import VislibVisualizationsLineChartProvider from './line_chart';
import VislibVisualizationsAreaChartProvider from './area_chart';

export default function SeriesTypeFactory(Private) {

  return {
    histogram: Private(VislibVisualizationsColumnChartProvider),
    line: Private(VislibVisualizationsLineChartProvider),
    area: Private(VislibVisualizationsAreaChartProvider)
  };
}
