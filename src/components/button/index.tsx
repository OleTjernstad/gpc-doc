import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  label: string;
  loading?: boolean;
}

export function Button({ label, onClick, type, loading }: ButtonProps) {
  return (
    <div className={styles["input-container"]}>
      <button type={type}>
        {loading ? <div className={styles.loader}></div> : label}
      </button>
    </div>
  );
}
