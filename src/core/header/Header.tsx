import { FC } from "react";
import styles from "./header.module.scss";
import { DatabaseIcon, NotifyIcon } from "../../common/svg-component";

const Header: FC = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.leftSideContainer}>
          <p className={styles.title}>B2C SaaS Finance</p>
        </div>
        <div className={styles.headerIconContainer}>
          <NotifyIcon customClass={styles.notifyIcon} />
          <DatabaseIcon customClass={styles.databaseIcon} />
        </div>
      </div>
    </>
  );
};

export default Header;
