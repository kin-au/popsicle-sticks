import React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { type, disabled, onClick, text } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-blue-900 hover:opacity-75 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-100 rounded text-gray-50 font-semibold p-2 m-2"
    >
      {text}
    </button>
  );
};

export default Button;
