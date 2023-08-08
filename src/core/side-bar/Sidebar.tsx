import React, { FC } from "react";
import styles from "./sidebar.module.scss";
import { navBarData } from "../../app/routes/rootRouteData";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/finance-logo.png";
interface ISidebar {}

const Sidebar: FC<ISidebar> = () => {
  return (
    <>
      <div className={styles.sidebarContainer}>
        <div className={styles.logo}>
          <img src={logo} className={styles.imgStyle} alt="error" />
        </div>
        <div className={styles.navbarContainer}>
          {navBarData.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <NavLink
                  to={item?.path}
                  state={{ name: item?.header }}
                  className={styles.sidebarContentStyle}
                >
                  {item.name}
                </NavLink>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
