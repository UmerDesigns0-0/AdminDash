import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  DataLabel,
  ColumnSeries,
  Inject,
  Legend,
  Category,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const Bar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Bar" />
      <ChartComponent
        id="bar-chart"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ background: "white" }}
        height="420px"
        width="auto"
        tooltip={{ enable: true }}
      >
        <Inject
          services={[ColumnSeries, DataLabel, Legend, Tooltip, Category]}
        />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;
