import { createContext, useEffect, useLayoutEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ThemeContextType {
  theme: string;
  setTheme: (str: string) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  setTheme: (str: string) => {},
});

export const ThemeContextProvider = ({ children }: Props) => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme != "dark" ? "light" : "dark");

  const removeTheme = theme === "dark" ? "light" : "dark";

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(removeTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
