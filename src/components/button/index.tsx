import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  label: string;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  label,
  onClick,
  type,
  loading,
  disabled,
}: ButtonProps) {
  return (
    <div className={styles["input-container"]}>
      <button type={type} disabled={disabled}>
        {loading ? <div className={styles.loader}></div> : label}
      </button>
    </div>
  );
}
