import React from "react";
import { HeaderProps } from "./types";

function Header(props: HeaderProps) {
  const { theme, setTheme } = props;

  return (
    <div className="self-center relative w-full mt-2 mb-4 md:my-8">
      <div className="w-full pr-4 py-2 flex justify-end md:absolute md:top-0 md:py-0">
        <button
          role="img"
          aria-label="light theme"
          className={`text-lg px-2 ${
            theme === "theme-light"
              ? "pb-2 border-b-8 rounded border-custom-main-text"
              : ""
          }`}
          onClick={() => setTheme("theme-light")}
        >
          🌔
        </button>
        <button
          role="img"
          aria-label="dark theme"
          className={`text-lg px-2 ${
            theme === "theme-dark"
              ? "pb-2 border-b-8 rounded border-custom-main-text"
              : ""
          }`}
          onClick={() => setTheme("theme-dark")}
        >
          🌒
        </button>
        <button
          role="img"
          aria-label="rainbow theme"
          className={`text-lg px-2 ${
            theme === "theme-rainbow"
              ? "pb-2 border-b-8 rounded border-custom-main-text"
              : ""
          }`}
          onClick={() => setTheme("theme-rainbow")}
        >
          🌈
        </button>
      </div>
      <header className="text-center text-custom-main-text text-4xl font-bold">
        POPSICLE STICKS
      </header>
    </div>
  );
}

export default Header;
