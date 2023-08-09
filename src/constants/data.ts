import BarChart from "../core/charts/bar-chart/BarChart";
// import DonutChart from "../core/charts/donut-chart/DonutChart";
import LineChart from "../core/charts/line-chart/LineChart";

export const chartData = [
  { id: 1, title: "Bar chart", element: BarChart },
  { id: 2, title: "Line chart", element: LineChart },
  // { id: 3, title: "Donut chart", element: DonutChart },
];

// barChartData
export const barChartData = {
  options: {
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    // plotOptions: {
    //   bar: {
    //     horizontal: true,
    //   },
    // },
    // yaxis: {
    //   reversed: true,
    // },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [3, 60, 35, 80, 49, 70, 20, 81],
    },
  ],
};

// lineChartData
export const lineChartData = {
  options: {
    colors: ["#E91E63", "#FF9800"],
    chart: {
      id: "basic-line",
      // background: "#000000",
      // animations: {
      //   enabled: true,
      //   easing: "easeinout",
      //   speed: 800,
      //   animateGradually: {
      //     enabled: true,
      //     delay: 150,
      //   },
      //   dynamicAnimation: {
      //     enabled: true,
      //     speed: 350,
      //   },
      // },
    },
    xaxis: {
      categories: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
    },

    legend: {
      labels: {
        color: undefined,
        useSeriesColors: true,
      },
    },

    fill: {
      colors: ["#2E93fA", "#66DA26", "#546E7A"],
    },

    yaxis: {
      reversed: false,
    },
  },
  series: [
    {
      type: "line",
      name: "Growth",
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
    {
      type: "bar",
      name: "Sales",
      data: [32, 13, 15, 50, 77, 6, 70, 91, 25],
    },
  ],
};

// donutChartData
// export const donutChartData = {};
