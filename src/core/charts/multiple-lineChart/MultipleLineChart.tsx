import { FC, useState } from "react";
import Chart from "react-apexcharts";

const MultipleLineChart: FC = () => {
  const [optionData, setOptionData] = useState({
    colors: ["#2E93fA", "#66DA26", "#E91E63", "#FF9800"],
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["aug", "sept", "oct", "nov", "dec"],
      title: { text: "Product", style: { color: "#66DA26" } },
    },
    yaxis: {
      title: {
        text: "Price",
        style: { color: "#66DA26", fontSize: "16px" },
      },
      labels: {
        align: "left" as const,
        style: { fontSize: "14px", color: ["#66DA26"] },
      },
    },
  });
  const [seriesData, setSeriesData] = useState([
    {
      name: "Tshirt",
      data: [21, 34, 57, 43, 98],
    },
    {
      name: "Formal-shirt",
      data: [78, 56, 89, 65, 33],
    },
    {
      name: "Footwear",
      data: [90, 11, 39, 76, 48],
    },
    {
      name: "Jewellery",
      data: [80, 27, 19, 71, 93],
    },
  ]);
  return (
    <>
      <Chart
        type="line"
        options={optionData}
        series={seriesData}
        width="500"
        height={310}
      />
    </>
  );
};

export default MultipleLineChart;
