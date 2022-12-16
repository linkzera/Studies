import { createContext, ReactNode, useEffect, useState } from "react";
type DarkModeContextType = {
  darkMode?: boolean;
  setDarkMode?: (darkMode: boolean) => void;
  toggleDarkMode?: () => void;
};

export const DarkModeContext = createContext<DarkModeContextType>({});

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem("darkMode") as any) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode as any);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
