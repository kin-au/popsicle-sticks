import React from "react";
import { CloseButtonProps } from "./types";

const CloseButton = (props: CloseButtonProps) => {
  const { disabled, onClick } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="p-auto m-1 h-6 w-6 bg-custom-popsicle-text text-custom-popsicle font-bold text-xs rounded-full hover:opacity-90 transition-all duration-100 disabled:bg-custom-disabled-input disabled:cursor-not-allowed disabled:opacity-100"
    >
      &times;
    </button>
  );
};

export default CloseButton;
