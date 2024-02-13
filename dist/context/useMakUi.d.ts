import React, { ReactNode } from "react";
import { MakUiFlexiblePaletteInput, MakUiInteractionStateKey, MakUiSimplePalette, MakUiSimpleTheme, MakUiStateShades, MakUiThemeKey, MakUiThemeShades, MakUiVerbosePalette, MakUiVerboseTheme, ShadeStep, MakUiComponentConfig, MakUiRootComponentConfig, GenericObject } from "../types/index";
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
};
type MakUiProviderProps = {
    children: ReactNode;
    palette?: MakUiFlexiblePaletteInput;
    paletteOverride?: MakUiVerbosePalette;
    componentConfig?: MakUiComponentConfig;
    buttonConfig?: MakUiRootComponentConfig;
    themeShades?: MakUiThemeShades;
    stateShades?: MakUiStateShades;
    enableSystem?: boolean;
    defaultTheme?: MakUiThemeKey;
    enableDarkMode?: boolean;
    enableCustomMode?: boolean;
    enabledStates?: MakUiInteractionStateKey[];
    shadeStep?: ShadeStep;
    includeBlackAndWhite?: boolean;
    paletteGenProps?: PaletteGeneratorProps;
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
    constructTailwindColorScale: ({ hex, step, includeNearAbsolutes, }: {
        hex: string;
        step?: number | undefined;
        includeNearAbsolutes?: boolean | undefined;
    }) => Record<number, string>;
}
export declare const useMakUi: () => MakUiContext;
export {};
