import React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { type, disabled, onClick, text } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="p-2 m-2 bg-custom-button text-custom-button-text font-semibold rounded hover:opacity-75 transition-all duration-100 disabled:bg-custom-disabled-input disabled:text-custom-disabled-text disabled:cursor-not-allowed disabled:opacity-100"
    >
      {text}
    </button>
  );
};

export default Button;
