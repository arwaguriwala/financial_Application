import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks";
import styles from "./eventChart.module.scss";
import Chart from "react-apexcharts";
import Button from "../../../common/button/Button";
import Loader from "../../../common/loader/Loader";

const EventChart: FC = () => {
  const { userData } = useAppSelector((state) => state.chartForm);

  const [optionData, setOptionData] = useState({
    colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [],
      title: {
        text: "user name",
        style: { color: "#66DA26", fontSize: "16px" },
      },
    },
    yaxis: {
      min: 0,
      max: 50,
      title: {
        text: "lant range",
        style: { color: "#66DA26", fontSize: "16px" },
      },
    },
    dataLabels: {
      formatter: (val: any) => {
        return `lant ${val}`;
      },
      style: { fontSize: "14px", colors: ["#ffffff"] },
    },
  });
  const [seriesData, setSeriesData] = useState([
    {
      name: "Product-Price",
      data: [],
    },
  ]);

  const userName = [] as any;
  userData?.map((item: any) => {
    userName.push(item?.username);
  });

  const [nameData, setNameData] = useState<any>([]);
  const [gLocationData, setGLocationData] = useState<any>([]);

  const handleAddData = () => {
    setOptionData({
      ...optionData,
      xaxis: {
        ...optionData.xaxis,
        categories: nameData,
      },
    });
    setSeriesData([
      {
        name: "g-location",
        data: gLocationData,
      },
    ]);
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.selectionContainer}>
          {/* username */}
          <div className={styles.userSelectionContainer}>
            <p className={styles.title}>Select username :</p>
            <select
              className={styles.selectInput}
              onChange={(e: any) => setNameData([...nameData, e.target.value])}
            >
              <option hidden>Select user name</option>
              {userData?.map((item: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <option>{item?.username}</option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>
          {/* geoLocation */}
          <div className={styles.userSelectionContainer}>
            <p className={styles.title}>Select g-location :</p>
            <select
              className={styles.selectInput}
              onChange={(e: any) =>
                setGLocationData([...gLocationData, e.target.value])
              }
            >
              <option hidden>Select g-location</option>
              {userData?.map((item: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <option>
                      {parseFloat(item?.address?.geolocation?.lat).toFixed(3)}
                    </option>
                  </React.Fragment>
                );
              })}
            </select>
          </div>

          <Button
            title="add"
            customClass={styles.addButtonStyle}
            handleClick={handleAddData}
          />
        </div>
        <Chart
          options={optionData}
          series={seriesData}
          type="bar"
          width="500"
          height={220}
        />
      </div>
    </>
  );
};

export default EventChart;
