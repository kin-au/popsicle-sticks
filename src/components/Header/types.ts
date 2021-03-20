import { ThemeType } from "../../types";

export interface HeaderProps {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}
