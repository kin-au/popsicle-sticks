import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { HeaderProps } from "./types";

function Header(props: HeaderProps) {
  const { theme, setTheme } = props;

  return (
    <div className="self-center w-full mt-2 mb-4 md:relative md:my-8">
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <header className="text-center text-custom-main-text text-4xl font-bold">
        POPSICLE STICKS
      </header>
    </div>
  );
}

export default Header;
