import { ThemeType } from "../../types";

export interface ThemeSwitcherProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
