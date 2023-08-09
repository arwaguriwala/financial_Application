import { FC, useState } from "react";
import { lineChartData } from "../../../constants/data";
import Chart from "react-apexcharts";

const LineChart: FC = () => {
  const [chartData, setChartData] = useState(lineChartData);
  return (
    <>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="480"
      />
    </>
  );
};

export default LineChart;
