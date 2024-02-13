import React, { createContext, useContext, useEffect, useMemo, useRef, useState, } from "react";
import { paletteFactory } from "../factories/paletteFactory";
// import { ThemeProvider, useTheme } from "next-themes"
import { constructTailwindObject, deepMerge, isEmptyObject, } from "../functions/helpers";
import { makUiDefaultThemeShades, defaultComponentConfig, } from "../constants/ui-constants";
import styled from "@emotion/styled";
const MakUiContext = createContext(undefined);
export const MakUiProvider = (props) => {
    return (
    // <ThemeProvider
    //   storageKey="mak-ui-theme"
    //   enableSystem={true}
    //   themes={makUiThemes}
    // >
    <MakUiProviderChild {...props}>{props.children}</MakUiProviderChild>
    // </ThemeProvider>
    );
};
const GlobalStyleSheetWrapper = styled.div(({ styleSheet }) => (Object.assign({}, styleSheet)));
const defaultPaletteGenProps = {
    palette: {},
    themeShades: makUiDefaultThemeShades,
    enableLightMode: true,
    enableDarkMode: true,
    enableCustomMode: false,
    shadeStep: 50,
    includeBlackAndWhite: true,
    includeNearAbsolutes: true,
    altBlack: "#000000",
    altWhite: "#ffffff",
};
const MakUiProviderChild = ({ children, componentConfig: componentConfigInput, palette: paletteInput, enableSystem = true, defaultTheme = "light", paletteGenProps = defaultPaletteGenProps, }) => {
    const [styleSheet, setStyleSheet] = useState({});
    const [themeMode, setThemeMode] = useState(defaultTheme);
    const paletteInputRef = useRef();
    useEffect(() => {
        if (paletteInputRef.current !== JSON.stringify(paletteInput)) {
            paletteInputRef.current = JSON.stringify(paletteInput);
        }
        return;
    }, [JSON.stringify(paletteInput)]);
    // let { theme: themeMode, setTheme: setThemeMode } = useTheme()
    const mergedPaletteGenProps = deepMerge(defaultPaletteGenProps, paletteGenProps);
    const { palette: paletteGenInput, paletteOverride, themeShades, enableLightMode, enableDarkMode, enableCustomMode, shadeStep, includeBlackAndWhite, includeNearAbsolutes, altBlack, altWhite, } = mergedPaletteGenProps;
    paletteInput = paletteOverride
        ? paletteOverride
        : !isEmptyObject(paletteGenInput)
            ? paletteGenInput
            : paletteInput
                ? paletteInput
                : {};
    const stringifiedPalette = JSON.stringify(paletteInput);
    const darkModeInPalette = stringifiedPalette.includes("dark:");
    const customModeInPalette = stringifiedPalette.includes("custom:");
    const lightModeInPalette = !paletteOverride &&
        (stringifiedPalette.includes("light:") ||
            Object.values(paletteInput || {}).some((val) => !val.includes(":")));
    const enabledThemeModes = [
        enableLightMode || lightModeInPalette ? "light" : null,
        enableDarkMode || darkModeInPalette ? "dark" : null,
        enableCustomMode || customModeInPalette ? "custom" : null,
    ].filter((mode) => mode !== null);
    useEffect(() => {
        const localStorageTheme = localStorage.getItem("mak-ui-theme");
        if (defaultTheme && !localStorageTheme) {
            setThemeMode(defaultTheme);
        }
    }, []);
    useEffect(() => {
        if (!enableSystem)
            return;
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleDarkModeChange = (e) => {
            if (e.matches) {
                setThemeMode("dark");
            }
            else {
                setThemeMode("light");
            }
        };
        darkModeMediaQuery.addEventListener("change", handleDarkModeChange);
        handleDarkModeChange({
            matches: darkModeMediaQuery.matches,
        });
        return () => {
            darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
        };
    }, []);
    let currentTheme = themeMode || defaultTheme;
    const componentConfig = useMemo(() => {
        const configObject = {
            button: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.button) ||
                defaultComponentConfig.button,
            input: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.input) ||
                defaultComponentConfig.input,
            text: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.text) ||
                defaultComponentConfig.text,
            select: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.select) ||
                defaultComponentConfig.select,
            form: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.form) ||
                defaultComponentConfig.form,
            dialog: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.dialog) ||
                defaultComponentConfig.dialog,
            textarea: (componentConfigInput === null || componentConfigInput === void 0 ? void 0 : componentConfigInput.textarea) ||
                defaultComponentConfig.textarea,
        };
        return configObject;
    }, [JSON.stringify(componentConfigInput)]);
    const palettesMemo = useMemo(() => {
        if (paletteOverride)
            return {
                simplePalette: paletteOverride,
                verbosePalette: paletteOverride,
            };
        console.log("generating palette");
        const { verbose, simple } = paletteFactory({
            paletteInput: paletteInput,
            enabledThemeModes,
            defaultShades: themeShades,
            shadeStep: shadeStep,
            includeBlackAndWhite: includeBlackAndWhite,
            includeNearAbsolutes: includeNearAbsolutes,
            altBlack: altBlack,
            altWhite: altWhite,
        }) || {};
        return {
            simplePalette: simple,
            verbosePalette: verbose,
        };
    }, [paletteInputRef, paletteOverride]);
    const [simpleTheme, setSimpleTheme] = useState({});
    const [verboseTheme, setVerboseTheme] = useState({});
    const [theme, setTheme] = useState(themeMode || defaultTheme || "light");
    useEffect(() => {
        setTheme(themeMode);
    }, [themeMode]);
    const formattingThemes = isEmptyObject(simpleTheme) ||
        isEmptyObject(verboseTheme) ||
        !simpleTheme ||
        !verboseTheme
        ? true
        : false;
    useEffect(() => {
        setVerboseTheme(palettesMemo.verbosePalette[currentTheme]);
        setSimpleTheme(palettesMemo.simplePalette[currentTheme]);
    }, [themeMode, currentTheme]);
    const { simplePalette, verbosePalette } = palettesMemo;
    const value = {
        simplePalette,
        verbosePalette,
        simpleTheme,
        verboseTheme,
        componentConfig,
        setTheme: setThemeMode,
        theme,
        formattingThemes,
        isDark: theme === "dark",
        isLight: theme === "light",
        isCustom: theme === "custom",
        enabledThemeModes,
        styleSheet,
        setStyleSheet,
        constructTailwindColorScale: constructTailwindObject,
    };
    return (<MakUiContext.Provider value={value}>
      <GlobalStyleSheetWrapper styleSheet={styleSheet}>
        {formattingThemes ? <></> : <>{children}</>}
      </GlobalStyleSheetWrapper>
    </MakUiContext.Provider>);
};
export const useMakUi = () => {
    const context = useContext(MakUiContext);
    if (context === undefined) {
        throw new Error("useMakUi must be used within a MakUiProvider");
    }
    return context;
};
