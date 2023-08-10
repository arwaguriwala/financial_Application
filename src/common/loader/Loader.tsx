import { FC } from "react";
import styles from "./loader.module.scss";

const Loader: FC = () => {
  return (
    <>
      <div className={styles.spinnerContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    </>
  );
};

export default Loader;
