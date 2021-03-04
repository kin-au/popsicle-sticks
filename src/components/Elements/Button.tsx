import React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { type, disabled, onClick, text } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="p-2 m-2 bg-blue-900 text-gray-50 font-semibold hover:opacity-75 transition-all duration-100 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-100 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
