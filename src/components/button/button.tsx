import React, { FC, PropsWithChildren } from "react";
import styles from "./button.module.scss";

export const Button: FC<PropsWithChildren<Props>> = ({ children }) => {
  return <button className={styles["button"]}>{children}</button>;
};

export interface Props {
  children: React.ReactNode;
  className?: string;
  fontSize?: string;
}
