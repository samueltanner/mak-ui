import React, { createContext, useContext, useState, useEffect, } from "react";
import { setLocalStorage } from "../functions/helpers";
const ThemeContext = createContext(undefined);
export const MakUiThemeProvider = ({ storageKey = "mak-ui-theme", children, themes, defaultTheme = "light", }) => {
    const [theme, setTheme] = useState(defaultTheme);
    const [systemTheme, setSystemTheme] = useState("light");
    const [enableSystem, setEnableSystem] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleMediaChange = () => {
            setSystemTheme(mediaQuery.matches ? "dark" : "light");
        };
        mediaQuery.addEventListener("change", handleMediaChange);
        handleMediaChange(); // Initial check
        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);
    useEffect(() => {
        if (enableSystem) {
            setTheme(systemTheme);
        }
    }, [enableSystem, systemTheme]);
    const toggleTheme = () => {
        if (enableSystem) {
            setEnableSystem(false);
        }
        else {
            const nextThemeIndex = (themes.indexOf(theme) + 1) % themes.length;
            setTheme(themes[nextThemeIndex]);
        }
    };
    const toggleUseSystemTheme = () => {
        setEnableSystem(!enableSystem);
    };
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        if (theme) {
            setLocalStorage(storageKey, theme);
        }
    }, [theme]);
    return (<ThemeContext.Provider value={{
            theme,
            toggleTheme,
            enableSystem,
            toggleUseSystemTheme,
            themes,
            setTheme,
        }}>
      {children}
    </ThemeContext.Provider>);
};
export const useMakUiTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error("useMakUiTheme must be used within a MakUiThemeProvider");
    }
    return context;
};
