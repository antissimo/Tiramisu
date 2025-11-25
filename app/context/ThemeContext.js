"use client"
import { createContext, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    colors: {
      primary: "#e8d6c7",  // tvoja theme boja
      secondary: "#3c3837",
      accent: "#a68835",
      background: "#FFFFFF",
    },
    spacing: {
      small: "4px",
      medium: "12px",
      large: "24px",
    },
    borderRadius: "12px",
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook za lakši pristup
export const useTheme = () => useContext(ThemeContext);
