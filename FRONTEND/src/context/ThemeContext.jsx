import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    
    function themeToggle(newTheme) {
        setTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, themeToggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
