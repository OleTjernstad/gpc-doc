import React from "react";
import styles from "./input.module.scss";

interface TextInputProps {
  type?: "email" | "number" | "password" | "tel" | "text";
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
}

export function TextInput({
  name,
  type = "text",
  label,
  required,
  disabled,
}: TextInputProps) {
  return (
    <div className={styles["input-container"]}>
      <label className="label" htmlFor={name} id={`label-${name}`}>
        <div className="text">{label}</div>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        aria-labelledby={`label-${name}`}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}

interface TextAreaProps {
  name: string;

  label: string;
  required?: boolean;
}

export function TextArea({
  name,

  label,
  required,
}: TextAreaProps) {
  return (
    <div className={styles["input-container"]}>
      <label className="label" htmlFor={name} id={`label-${name}`}>
        <div className="text">{label}</div>
      </label>
      <textarea
        id={name}
        name={name}
        aria-labelledby={`label-${name}`}
        required={required}
      ></textarea>
    </div>
  );
}
