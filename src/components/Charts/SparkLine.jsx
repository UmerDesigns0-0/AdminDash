import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, data, color, border, type, xName = "x", yName = "y" }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: border, width: 2 }}
      dataSource={data}    
      xName={xName}
      yName={yName}
      type={type}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: { visible: true },
      }}
      markerSettings={{
        visible: ["All"],
        size: 2.5,
        fill: color,
        border: { color: border, width: 2 },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
