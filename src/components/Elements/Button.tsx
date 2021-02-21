import React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { type, disabled, onClick, text } = props;
  return (
    <button type={type} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
