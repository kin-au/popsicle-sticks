// import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps {
  // type: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>;
  type: any;
  disabled?: boolean;
  onClick: any;
  text: string;
}

export interface CloseButtonProps {
  disabled?: boolean;
  onClick: any;
}
