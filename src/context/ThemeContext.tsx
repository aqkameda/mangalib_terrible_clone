import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({ dark: false, toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
  }, [dark]);
  const toggleTheme = () => setDark(d => !d);
  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
} 