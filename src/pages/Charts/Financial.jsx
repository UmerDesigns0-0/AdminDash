import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Legend,
  Inject,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";

import { Header } from "../../components";

const date1 = new Date("2017, 1, 1");

function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}

const returnValue = financialChartData.filter(filterValue);

const Financial = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Financial" />
      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            Legend,
            HiloSeries,
            Tooltip,
            DateTime,
            Zoom,
            Logarithmic,
            Crosshair,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={returnValue}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
