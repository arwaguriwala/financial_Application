import { FC } from "react";
import styles from "./dashboard.module.scss";
import PieChart from "../../core/charts/pie-chart/PieChart";

interface IDashboard {}

const Dashboard: FC<IDashboard> = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.chartBox}>
          <PieChart />
        </div>
        <div className={styles.chartBox}>bar chart</div>
      </div>
    </>
  );
};

export default Dashboard;
