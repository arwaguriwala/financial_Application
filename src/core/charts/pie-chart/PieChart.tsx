import { useEffect, FC, useRef } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart: FC = () => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  const chartOptions = {
    chart: {
      type: "bar",
    },
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  };
  return (
    <>
      <ReactApexChart
        options={options}
        series={options.series}
        type="line"
        height={350}
      />
    </>
  );
};

export default PieChart;
