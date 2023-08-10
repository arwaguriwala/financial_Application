import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { useAppSelector } from "../../../hooks";

const LineChart: FC = () => {
  const { employeeData } = useAppSelector((state) => state.chartForm);
  const [optionData, setOptionData] = useState({
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    chart: {
      id: "basic-line",
    },
    xaxis: {
      categories: [],
      title: {
        text: "Category",
        style: { color: "#66DA26", fontSize: "16px" },
      },
    },
    yaxis: {
      min: 0,
      max: 695,
      title: {
        text: "cost",
        style: { color: "#66DA26", fontSize: "16px" },
      },
    },
  });
  const [seriesData, setSeriesData] = useState([
    {
      name: "Product-Price",
      data: [],
    },
  ]);

  const productPrice = [] as any;
  const productCategory = [] as any;
  employeeData?.map((item: any) => {
    productPrice.push(item?.price);
  });
  employeeData?.map((item: any) => {
    productCategory.push(item?.category);
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
    ]);
  }, [employeeData]);
  return (
    <>
      <Chart
        options={optionData}
        series={seriesData}
        type="line"
        width="500"
        height={310}
      />
    </>
  );
};

export default LineChart;
