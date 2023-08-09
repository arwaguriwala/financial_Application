import React, { FC } from "react";
import styles from "./dashboard.module.scss";
import { chartData } from "../../constants/data";

const Dashboard: FC = () => {
  return (
    <>
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
