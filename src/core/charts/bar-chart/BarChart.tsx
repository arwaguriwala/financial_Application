import { FC, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { barChartData } from "../../../constants/data";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getEmployee } from "../../../redux/feature/bar-chart/barChartSlice";

const BarChart: FC = () => {
  const dispatch = useAppDispatch();
  const { employeeData } = useAppSelector((state) => state.chartForm);
  console.log("employeeData>>>???", employeeData);
  const [optionData, setOptionData] = useState({
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      min: 0,
      max: 50,
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

  console.log("product", productCategory, productPrice, productRating);
  useEffect(() => {
    dispatch(getEmployee());
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
  }, [dispatch]);

  return (
    <>
      <Chart options={optionData} series={seriesData} type="bar" width="500" />
    </>
  );
};

export default BarChart;
