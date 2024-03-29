import React from "react";
import styles from "./button.module.scss";

interface IButton {
  type?: "submit" | "reset" | "button" | undefined;
  disable?: boolean;
  title?: string | JSX.Element;
  customClass?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FunctionComponent<IButton> = ({
  type,
  title,
  customClass,
  handleClick,
  disable,
}) => {
  return (
    <>
      <button
        className={[styles.button, customClass].join(" ")}
        type={type}
        onClick={(e) => {
          handleClick && handleClick(e);
        }}
        disabled={disable ?? false}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
