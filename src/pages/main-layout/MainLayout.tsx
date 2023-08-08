import Header from "../../core/header/Header";
import Sidebar from "../../core/side-bar/Sidebar";
import styles from "./mainLayout.module.scss";
import { Outlet } from "react-router-dom";

interface IMainLayout {
  children: any;
}

const MainLayout: React.FunctionComponent<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftSideContainer}>
        <Sidebar />
      </div>
      <div className={styles.rightSideContainer}>
        <div className={styles.headerContainer}>
          <Header />
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
