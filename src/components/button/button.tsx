import React, { FC, PropsWithChildren } from "react";
import cn from "classnames";
import styles from "./button.module.scss";

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? styles["button--primary"]
    : styles["button--secondary"];
  // cn('foo', { bar: true }); // => 'foo bar'
  return (
    <button
      type="button"
      className={cn(styles["button"], styles[`button--${size}`], mode)}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}
