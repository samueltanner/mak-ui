import { HtmlElementKey, MakUiCustomInteractionStateKey, MakUiDefaultColors, MakUiDefaultPalette, MakUiDefaultStateColors, MakUiInteractionStateKey, MakUiPaletteKey, MakUiStateKey, MakUiStateShades, MakUiThemeKey, MakUiThemeShades, MakUiThemeVariantKey, MakUiVariantKey, Shade, TailwindUtilityClass, MakUiComponentConfig, MakUiRootComponentConfig } from "../types/index";
export declare const twModifierSet: Set<string>;
export declare const tailwindVariants: TailwindUtilityClass[];
export declare const htmlElements: HtmlElementKey[];
export declare const tailwindVariantsSet: Set<TailwindUtilityClass>;
export declare const makUiThemes: MakUiThemeKey[];
export declare const makUiThemesSet: Set<MakUiThemeKey>;
export declare const makUiPalettes: MakUiPaletteKey[];
export declare const makUiPalettesSet: Set<MakUiPaletteKey>;
export declare const makUiThemeVariants: MakUiThemeVariantKey[];
export declare const makUiThemeVariantsSet: Set<MakUiThemeVariantKey>;
export declare const makUiVariants: MakUiVariantKey[];
export declare const makUiVariantsSet: Set<MakUiVariantKey>;
export declare const makUiInteractionStates: MakUiInteractionStateKey[];
export declare const makUiCustomInteractionStates: MakUiCustomInteractionStateKey[];
export declare const makUiStates: MakUiStateKey[];
export declare const makUiShades: Shade[];
export declare const makUiShadesSet: Set<Shade>;
export declare const makUiStatesSet: Set<MakUiStateKey>;
export declare const makUiDefaultColors: MakUiDefaultColors;
export declare const makUiDefaultPalette: MakUiDefaultPalette;
export declare const makUiDefaultThemeShades: MakUiThemeShades;
export declare const makUiDefaultStateShades: MakUiStateShades;
export declare const makUiDefaultStates: MakUiDefaultStateColors;
export declare const defaultButtonConfig: MakUiRootComponentConfig;
export declare const defaultInputConfig: MakUiRootComponentConfig;
export declare const defaultComponentConfig: MakUiComponentConfig;
export declare const mediaQueries: {
    [key: string]: string;
};
export declare const twToCssKeyMap: {
    [key: string]: string;
};
export declare const tailwindToCssModifierObject: {
    [key: string]: string | ((selector: string) => string) | ((selector: string, altSelector: string) => string) | ((n: string) => string);
};
