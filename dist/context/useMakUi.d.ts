import React from "react";
import { MakUiFlexiblePaletteInput, MakUiSimplePalette, MakUiSimpleTheme, MakUiThemeKey, MakUiThemeShades, MakUiVerbosePalette, MakUiVerboseTheme, ShadeStep, MakUiComponentConfig, GenericObject } from "../types/index";
type PaletteGeneratorProps = {
    palette?: MakUiFlexiblePaletteInput;
    paletteOverride?: MakUiVerbosePalette | Partial<MakUiVerbosePalette>;
    themeShades?: MakUiThemeShades;
    enableLightMode?: boolean;
    enableDarkMode?: boolean;
    enableCustomMode?: boolean;
    shadeStep?: ShadeStep;
    includeBlackAndWhite?: boolean;
    includeNearAbsolutes?: boolean;
    altBlack?: string;
    altWhite?: string;
    tailwindConfig?: any;
};
type MakUiProviderProps = {
    children: React.ReactNode;
    palette?: MakUiFlexiblePaletteInput;
    componentConfig?: MakUiComponentConfig;
    enableSystem?: boolean;
    defaultTheme?: MakUiThemeKey;
    paletteGenProps?: PaletteGeneratorProps;
    tailwindConfig?: any;
};
declare const MakUiContext: React.Context<MakUiContext | undefined>;
export declare const MakUiProvider: (props: MakUiProviderProps) => React.JSX.Element;
interface MakUiContext {
    componentConfig: MakUiComponentConfig;
    theme: MakUiThemeKey;
    setTheme: (themeMode: MakUiThemeKey) => void;
    formattingThemes: boolean;
    isDark: boolean;
    isLight: boolean;
    isCustom: boolean;
    enabledThemeModes: MakUiThemeKey[];
    simplePalette: MakUiSimplePalette;
    verbosePalette: MakUiVerbosePalette;
    simpleTheme: MakUiSimpleTheme;
    verboseTheme: MakUiVerboseTheme;
    styleSheet: GenericObject;
    setStyleSheet: (styleSheet: GenericObject) => void;
    constructTailwindColorScale: ({ hex, step, includeNearAbsolutes, tailwindConfig, }: {
        hex: string;
        step?: number | undefined;
        includeNearAbsolutes?: boolean | undefined;
        tailwindConfig: any;
    }) => Record<number, string>;
}
export declare const useMakUi: () => MakUiContext;
export {};
