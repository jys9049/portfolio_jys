'use client';

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

const LIGHT_MODE = 'light-mode';
const DARK_MODE = 'dark-mode';

const ThemeContext = createContext({
  theme: LIGHT_MODE,
  handleThemeChange: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('light-mode');

  const handleThemeChange = () => {
    const themeCheck = localStorage.getItem('theme');
    if (themeCheck === LIGHT_MODE) {
      setTheme(DARK_MODE);
      document.body.setAttribute('data-theme', DARK_MODE);
    } else {
      setTheme(LIGHT_MODE);
      document.body.setAttribute('data-theme', LIGHT_MODE);
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};