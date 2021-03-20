import React from "react";
import { HeaderProps } from "./types";

function Header(props: HeaderProps) {
  const { theme, setTheme } = props;

  return (
    <div className="self-center relative w-full my-8 text-center text-custom-main-text text-4xl font-bold">
      <header>POPSICLE STICKS</header>
      <button
        className="absolute top-0 right-2 bg-green-500"
        onClick={() => setTheme("theme-dark")}
      >
        THEME DARK
      </button>
    </div>
  );
}

export default Header;
