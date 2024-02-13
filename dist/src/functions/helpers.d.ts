import { GenericObject, MakUiDefaultColors, MakUiDefaultStateColors, MakUiFlexiblePaletteInput, MakUiState, MakUiStateKey, MakUiStateShades, MakUiThemeShades, MakUiThemeShadesInput, MakUiVariantKey, MakUiVerbosePalette, MakUiVerboseShades, MakUiVerboseTheme, NestedObject, MakUiThemeKey, MakUiVerboseThemeVariant, TWColorHelperResponse, ObjectToClassNameObjectProp, ClassObject, MakUiRootComponentConfig } from "../types/index";
import { useMakUi } from "../context/useMakUi";
export declare const setLocalStorage: (key: string, value: any) => void;
export declare const getLocalStorage: (key: string) => string | null | undefined;
export declare const removeLocalStorage: (key: string) => void;
export declare const mergeWithFallback: (primary: Record<string, any>, ...fallbacks: Array<Record<string, any> | undefined>) => Record<string, any>;
export declare const nearestMultiple: (num: number, multiple: number, roundDir?: "up" | "down" | "nearest") => number;
export declare const ensureNestedObject: <T>({ parent, keys, value, }: {
    parent: T;
    keys?: (string | number | keyof T | undefined)[] | undefined;
    value?: any;
}) => any;
export declare const allowFalsyFallback: <T>(value: T, fallback: T) => T;
export declare const isEmptyObject: (obj: GenericObject | undefined) => boolean;
export declare const isNestedObject: (obj: GenericObject) => boolean;
export declare const isObject: (v: any) => v is GenericObject;
export declare const deepMerge: (...objects: (GenericObject | undefined)[]) => {};
export declare const constructTailwindObject: ({ hex, step, includeNearAbsolutes, hexPosition, includeBlackAndWhite, blackHex, whiteHex, tailwindConfig, }: {
    hex: string;
    step?: number | undefined;
    includeNearAbsolutes?: boolean | undefined;
    hexPosition?: number | undefined;
    includeBlackAndWhite?: boolean | undefined;
    blackHex?: string | undefined;
    whiteHex?: string | undefined;
    tailwindConfig: any;
}) => MakUiVerboseShades;
export declare const getThemeShadesObj: (shades?: MakUiThemeShadesInput) => {
    light: {
        primary: number;
        secondary: number;
        tertiary: number;
        custom: number;
    };
    dark: {
        primary: number;
        secondary: number;
        tertiary: number;
        custom: number;
    };
    custom: {
        primary: number;
        secondary: number;
        tertiary: number;
        custom: number;
    };
};
export declare const getConstructedTheme: ({ providedVariants, theme, defaultShades, altBlack, altWhite, tailwindConfig, }: {
    providedVariants: MakUiVerboseThemeVariant;
    theme: MakUiThemeKey;
    defaultShades: MakUiThemeShades;
    altBlack: string;
    altWhite: string;
    tailwindConfig: any;
}) => {
    primary: string;
    secondary: string;
    tertiary: string;
    custom: string;
    light: string;
    dark: string;
    black: string;
    white: string;
};
export declare const getConstructedShades: ({ defaultColor, middleHex, providedShades, steps, variant, includeBlackAndWhite, includeNearAbsolutes, altBlack, altWhite, hexPosition, tailwindConfig, }: {
    defaultColor?: string | undefined;
    middleHex?: string | undefined;
    providedShades?: Record<string, string> | undefined;
    steps?: number | undefined;
    variant: MakUiVariantKey;
    includeBlackAndWhite?: boolean | undefined;
    includeNearAbsolutes?: boolean | undefined;
    altBlack?: string | undefined;
    altWhite?: string | undefined;
    hexPosition?: number | undefined;
    tailwindConfig: any;
}) => MakUiVerboseShades;
export declare const getOpacity: ({ opacityValue, override, }: {
    opacityValue?: string | number | null | undefined;
    override?: string | number | null | undefined;
}) => {
    string: string;
    value: number;
};
export declare const generateDefaultShadesDiffOject: ({ defaultShades, }: {
    defaultShades?: MakUiStateShades | undefined;
}) => MakUiStateShades;
export declare const generateDefaultStatesObject: ({ defaultShades, defaultColor, baseShade, multiplier, }: {
    defaultShades?: MakUiStateShades | undefined;
    defaultColor?: string | undefined;
    baseShade?: number | undefined;
    multiplier?: number | undefined;
}) => MakUiState;
export declare const twColorHelper: ({ colorString, opacity, shade, useDefaults, defaults, defaultKey, tailwindConfig, }: {
    colorString?: string | undefined | null;
    opacity?: number | string | undefined | null;
    shade?: number | string | undefined | null;
    useDefaults?: boolean | undefined;
    defaults?: MakUiDefaultColors | MakUiDefaultStateColors | undefined;
    defaultKey?: MakUiVariantKey | MakUiStateKey | undefined;
    tailwindConfig: any;
}) => TWColorHelperResponse;
export declare const concatNestedKeys: (obj: NestedObject, prefix?: string) => NestedObject;
export declare const getTwHex: ({ colorString, color, shade, absolute, tailwindConfig, }: {
    colorString?: string | undefined;
    shade?: string | number | undefined;
    color?: string | undefined;
    absolute?: boolean | undefined;
    tailwindConfig: any;
}) => string;
export declare const detectSystemTheme: () => "light" | "dark" | undefined;
export declare const separateObjectByKey: <T extends {
    [key: string]: any;
}>({ obj, keys, fallbackKey, }: {
    obj: T;
    keys: string[];
    fallbackKey?: string | undefined;
}) => {
    [key: string]: any;
};
export declare const splitKeyAtChar: (obj: GenericObject, char: string) => {};
export declare const splitStringAtCapital: (string: string) => string[];
export declare const extractInitialPalette: ({ palette, enabledThemeModes, tailwindConfig, }: {
    palette: MakUiFlexiblePaletteInput;
    enabledThemeModes: MakUiThemeKey[];
    tailwindConfig: any;
}) => MakUiVerbosePalette;
export declare const objectToClassName: ({ ...args }: ObjectToClassNameObjectProp) => string;
export declare const parseClassNameToStyleObject: ({ className, makClassName, activeTheme, currentThemeMode, }: {
    className?: string | undefined;
    makClassName?: string | undefined;
    activeTheme: MakUiVerboseTheme;
    currentThemeMode: MakUiThemeKey;
}) => {
    styleObject: {
        baseClassObject: ClassObject;
        pseudoClassObject: ClassObject;
    };
    twClassName: string | undefined;
    makClassName: string;
};
export declare const parseMakClassNames: ({ makClassName, activeTheme, currentThemeMode, }: {
    makClassName?: string | undefined;
    activeTheme: MakUiVerboseTheme;
    currentThemeMode: MakUiThemeKey;
}) => {
    pseudoClassObject?: undefined;
    baseClassObject?: undefined;
    unresolved?: undefined;
} | {
    pseudoClassObject: {};
    baseClassObject: {
        [k: string]: string | GenericObject;
    };
    unresolved: string | undefined;
};
export declare const ensureUtilityClass: (utility: string, className: string) => string;
export declare const mergeClassNames: (...props: string[]) => string;
export declare const mergeDefaultConfig: ({ makUi, useConfig, component, className, makClassName, }: {
    makUi: ReturnType<typeof useMakUi>;
    useConfig: boolean | undefined;
    component?: string | undefined;
    className?: string | undefined;
    makClassName?: string | undefined;
}) => {
    componentConfig: MakUiRootComponentConfig | undefined;
    defaultClassName: string | undefined;
    defaultMakClassName: string | undefined;
    componentClassName: string | undefined;
    componentMakClassName: string | undefined;
    resolvedClassName: string | undefined;
    resolvedMakClassName: string | undefined;
};
export declare const formatJsonToHtmlString: (jsonObject: GenericObject) => string;
