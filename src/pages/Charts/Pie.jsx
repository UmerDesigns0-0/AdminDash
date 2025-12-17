import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationLegend,
  AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";

import { Header } from "../../components";

const Pie = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-6 md:p-10 w-auto bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Charts" title="Pie" />
      <AccumulationChartComponent
        id="charts"
        legendSettings={{ background: "white" }}
      >
        <Inject
          services={[PieSeries, AccumulationLegend, AccumulationDataLabel]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName="x"
            yName="y"
            type="Pie"
            // innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              name: "text",
              position: "Inside",
              font: {
                fontWeight: "600",
                color: "#ffffff",
              },
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
