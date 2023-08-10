import React, { FC, useEffect } from "react";
import styles from "./dashboard.module.scss";
import { chartData } from "../../constants/data";

import Loader from "../../common/loader/Loader";
import {
  getEmployee,
  getUser,
} from "../../redux/feature/bar-chart/barChartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.chartForm);

  // api call
  useEffect(() => {
    dispatch(getEmployee());
    dispatch(getUser());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      <div className={styles.mainContainer}>
        {chartData?.map((item: any) => {
          return (
            <React.Fragment key={item?.id}>
              <div className={styles.chartBoxContainer}>
                <p className={styles.chartTitle}>{item?.title}</p>
                <div className={styles.chartBox}>{<item.element />}</div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
