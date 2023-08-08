import ApexCharts from "apexcharts";

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
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

const chart = new ApexCharts(document.querySelector("#chart"), chartOptions);
chart.render();
