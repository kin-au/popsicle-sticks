import React from "react";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => {
  const { type, disabled, onClick, text } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-blue-900 hover:bg-opacity-75 disabled:bg-opacity-25 rounded text-gray-50 font-semibold p-2 m-1"
    >
      {text}
    </button>
  );
};

export default Button;
