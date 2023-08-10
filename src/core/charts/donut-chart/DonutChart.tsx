import { FC, useState } from "react";
import Chart from "react-apexcharts";

const DonutChart: FC = () => {
  const [optionData, setOptionData] = useState({
    colors: ["#2E93fA", "#66DA26", "#FF9800"],

    labels: ["USA", "CANADA", "UK", "AUSTRALIA", "CHINA", "RUSSIA"],
    // title: {
    //   text: "Medal Country Name",
    //   align: "center",
    // },

    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              // showAlways: true,
              color: "#2E93fA",
              fontSize: "22px",
              fontWeight: 500,
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
    },
  });

  const [seriesData, setSeriesData] = useState([40, 32, 11, 30, 25, 7]);

  return (
    <>
      <Chart
        type="donut"
        width="450"
        height={450}
        options={optionData}
        series={seriesData}
      />
    </>
  );
};

export default DonutChart;
