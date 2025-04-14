import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggleTheme = () =>
    mode === "dark" ? setMode("light") : setMode("dark");
  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
