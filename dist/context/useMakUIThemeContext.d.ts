import React, { ReactNode } from "react";
import { MakUiThemeKey } from "..";
type ThemeContextType = {
    theme: MakUiThemeKey;
    toggleTheme: () => void;
    enableSystem: boolean;
    themes: MakUiThemeKey[];
    toggleUseSystemTheme: () => void;
    setTheme: (theme: MakUiThemeKey) => void;
};
type MakUiThemeProviderProps = {
    storageKey?: string;
    children: ReactNode;
    themes: MakUiThemeKey[];
    defaultTheme?: MakUiThemeKey;
};
export declare const MakUiThemeProvider: ({ storageKey, children, themes, defaultTheme, }: MakUiThemeProviderProps) => React.JSX.Element;
export declare const useMakUiTheme: () => ThemeContextType;
export {};
