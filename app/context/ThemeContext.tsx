'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the color structure
interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

// Theme object structure
interface Theme {
  colors: ThemeColors;
}

// Theme context type
interface ThemeContextType {
  theme: Theme;       // theme object with colors
  isDark: boolean;
  toggleTheme: () => void;
}

// Default theme (light)
const defaultTheme: Theme = {
  colors: {
    primary: '#e8d6c7',
    secondary: '#3c3837',
    accent: '#a68835',
    background: '#FFFFFF',
  },
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  isDark: false,
  toggleTheme: () => {},
});

// Provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// ThemeProvider
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const lightTheme: Theme = {
    colors: {
      primary: '#e8d6c7',
      secondary: '#3c3837',
      accent: '#a68835',
      background: '#FFFFFF',
    },
  };

  const darkTheme: Theme = {
    colors: {
      primary: '#3c3837',
      secondary: '#e8d6c7',
      accent: '#a68835',
      background: '#1a1a1a',
    },
  };

  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme
export const useTheme = (): ThemeContextType => useContext(ThemeContext);
