import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAppSelector } from "../../../hooks";

const BarChart: FC = () => {
  const { employeeData } = useAppSelector((state) => state.chartForm);
  const [optionData, setOptionData] = useState({
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [],
      title: { text: "Category", style: { color: "#66DA26" } },
    },
    yaxis: {
      min: 0,
      max: 695,
      title: {
        text: "cost",
        style: { color: "#66DA26", fontSize: "16px" },
      },
      labels: {
        align: "left" as const,
        formatter: (val: any) => {
          return `$${val}`;
        },
        style: { fontSize: "14px", color: ["#66DA26"] },
      },
    },
  });
  const [seriesData, setSeriesData] = useState([
    {
      name: "Product-Price",
      data: [],
    },
    {
      name: "Product-Rating",
      data: [],
    },
  ]);

  const productPrice = [] as any;
  const productCategory = [] as any;
  const productRating = [] as any;
  employeeData?.map((item: any) => {
    productPrice.push(item?.price);
  });
  employeeData?.map((item: any) => {
    productCategory.push(item?.category);
  });
  employeeData?.map((item: any) => {
    productRating.push(item?.rating?.rate);
  });

  // state is being set
  useEffect(() => {
    setOptionData({
      ...optionData,
      xaxis: {
        ...optionData.xaxis,
        categories: productCategory,
      },
    });
    setSeriesData([
      {
        name: "Product-Price",
        data: productPrice,
      },
      {
        name: "Product-Rating",
        data: productRating,
      },
    ]);
  }, [employeeData]);

  return (
    <>
      <Chart
        options={optionData}
        series={seriesData}
        type="bar"
        width="500"
        height={310}
      />
    </>
  );
};

export default BarChart;
