import React from "react";
import { ThemeSwitcherProps } from "./types";

function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { theme, setTheme } = props;

  return (
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
  );
}

export default ThemeSwitcher;
