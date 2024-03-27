import { MotionProps } from "framer-motion";
import { ReactNode } from "react";
import colors from "tailwindcss/colors";
export type MakUiElementProps = TypeProps & {
    motion?: MotionProps;
    logComputedClasses?: boolean;
};
export type MakUiRootComponentConfig = {
    className?: string;
    makClassName?: string;
};
export type MakUiComponentConfig = {
    [key: string]: MakUiRootComponentConfig | undefined;
};
export type ButtonVariants = {
    [key: string]: ButtonStates;
    primary: ButtonStates;
    secondary: ButtonStates;
    tertiary: ButtonStates;
    success: ButtonStates;
    danger: ButtonStates;
    warning: ButtonStates;
    info: ButtonStates;
    custom: ButtonStates;
};
export type ButtonStates = {
    [key: string]: ButtonSubStates;
    default: ButtonSubStates;
    active: ButtonSubStates;
    disabled: ButtonSubStates;
};
export type ButtonSubStates = {
    [key: string]: string;
    normal: string;
    hover: string;
    focus: string;
    clicked: string;
    normalBorder: string;
    hoverBorder: string;
    focusBorder: string;
    clickedBorder: string;
};
export type ShadeWithOpacity = `${Shade}/${number}`;
export type VariantWithShade = `${MakUiVariantKey}-${Shade}`;
export type VariantWithShadeAndOpacity = `${MakUiVariantKey}-${Shade}/${number}`;
export type ThemeVariantWithOpacity = `${MakUiThemeVariantKey}-${number}`;
export type FalsyValue = false | null | undefined;
export type TypeProps = {
    type?: string;
    useConfig?: boolean;
    darkMode?: boolean;
    lightMode?: boolean;
    customMode?: boolean;
    themeMode?: MakUiThemeKey | FalsyValue;
    themeWhite?: boolean | Shade | ShadeWithOpacity;
    themeBlack?: boolean | Shade | ShadeWithOpacity;
    themeLight?: boolean | Shade | ShadeWithOpacity;
    themeDark?: boolean | Shade | ShadeWithOpacity;
    themeCustom?: boolean | Shade | ShadeWithOpacity;
    themePrimary?: boolean | Shade | ShadeWithOpacity;
    themeSecondary?: boolean | Shade | ShadeWithOpacity;
    themeTertiary?: boolean | Shade | ShadeWithOpacity;
    themeVariant?: MakUiThemeVariantKey | ThemeVariantWithOpacity | FalsyValue;
    themeOpacity?: number | FalsyValue;
    primary?: boolean | Shade | ShadeWithOpacity;
    secondary?: boolean | Shade | ShadeWithOpacity;
    tertiary?: boolean | Shade | ShadeWithOpacity;
    success?: boolean | Shade | ShadeWithOpacity;
    error?: boolean | Shade | ShadeWithOpacity;
    warning?: boolean | Shade | ShadeWithOpacity;
    danger?: boolean | Shade | ShadeWithOpacity;
    info?: boolean | Shade | ShadeWithOpacity;
    custom?: boolean | Shade | ShadeWithOpacity;
    light?: boolean | Shade | ShadeWithOpacity;
    dark?: boolean | Shade | ShadeWithOpacity;
    variant?: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    variantShade?: Shade | FalsyValue;
    variantOpacity?: number | FalsyValue;
    textPrimary?: boolean | Shade | ShadeWithOpacity;
    textSecondary?: boolean | Shade | ShadeWithOpacity;
    textTertiary?: boolean | Shade | ShadeWithOpacity;
    textSuccess?: boolean | Shade | ShadeWithOpacity;
    textError?: boolean | Shade | ShadeWithOpacity;
    textWarning?: boolean | Shade | ShadeWithOpacity;
    textDanger?: boolean | Shade | ShadeWithOpacity;
    textInfo?: boolean | Shade | ShadeWithOpacity;
    textCustom?: boolean | Shade | ShadeWithOpacity;
    textLight?: boolean | Shade | ShadeWithOpacity;
    textDark?: boolean | Shade | ShadeWithOpacity;
    text?: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    textShade?: Shade | FalsyValue;
    textOpacity?: number | FalsyValue;
    bgPrimary?: boolean | Shade | ShadeWithOpacity;
    bgSecondary?: boolean | Shade | ShadeWithOpacity;
    bgTertiary?: boolean | Shade | ShadeWithOpacity;
    bgSuccess?: boolean | Shade | ShadeWithOpacity;
    bgError?: boolean | Shade | ShadeWithOpacity;
    bgWarning?: boolean | Shade | ShadeWithOpacity;
    bgDanger?: boolean | Shade | ShadeWithOpacity;
    bgInfo?: boolean | Shade | ShadeWithOpacity;
    bgCustom?: boolean | Shade | ShadeWithOpacity;
    bgLight?: boolean | Shade | ShadeWithOpacity;
    bgDark?: boolean | Shade | ShadeWithOpacity;
    bg?: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    bgShade?: Shade | FalsyValue;
    bgOpacity?: number | FalsyValue;
    borderPrimary?: boolean | Shade | ShadeWithOpacity;
    borderSecondary?: boolean | Shade | ShadeWithOpacity;
    borderTertiary?: boolean | Shade | ShadeWithOpacity;
    borderSuccess?: boolean | Shade | ShadeWithOpacity;
    borderError?: boolean | Shade | ShadeWithOpacity;
    borderWarning?: boolean | Shade | ShadeWithOpacity;
    borderDanger?: boolean | Shade | ShadeWithOpacity;
    borderInfo?: boolean | Shade | ShadeWithOpacity;
    borderCustom?: boolean | Shade | ShadeWithOpacity;
    borderLight?: boolean | Shade | ShadeWithOpacity;
    borderDark?: boolean | Shade | ShadeWithOpacity;
    border?: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    borderShade?: Shade | FalsyValue;
    borderOpacity?: number | FalsyValue;
    textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    borderPx?: number;
    className?: string;
    makClassName?: string;
    height?: string;
    width?: string;
};
export type WithComponentPropsResponse = {
    mode: MakUiThemeKey | FalsyValue;
    hasModeProps: boolean;
    theme: MakUiThemeVariantKey | ThemeVariantWithOpacity | FalsyValue;
    hasThemeProps: boolean;
    color: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    hasColorProps: boolean;
    border: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    hasBorderProps: boolean;
    text: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    hasTextProps: boolean;
    bg: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    hasBgProps: boolean;
    themeOpacity: number | FalsyValue;
    textOpacity: number | FalsyValue;
    bgOpacity: number | FalsyValue;
    variantOpacity: number | FalsyValue;
    borderOpacity: number | FalsyValue;
    textShade: Shade | FalsyValue;
    bgShade: Shade | FalsyValue;
    variantShade: Shade | FalsyValue;
    borderShade: Shade | FalsyValue;
    borderPx: number | FalsyValue;
    className: string | FalsyValue;
    makClassName: string | FalsyValue;
    height: string | FalsyValue;
    width: string | FalsyValue;
    children?: ReactNode;
};
export type ObjectToClassNameObjectProp = {
    object: GenericObject;
    variant: MakUiVariantKey | string;
    allowedStates?: Set<string>;
    allowedModifiers?: Set<string>;
};
export type ClassObject = {
    [k: string]: string | GenericObject;
} | undefined;
export type ComponentWrapperResponse = {
    makCSSObject: ClassObject;
    componentTheme: MakUiVerboseThemeVariant;
    componentText: MakUiVerboseVariant;
    componentColor: MakUiVerboseVariant;
    componentBorder: MakUiVerboseVariant;
    fullComponentTheme: MakUiVerboseTheme;
    componentThemeMode: MakUiThemeKey | undefined;
    globalThemeMode: MakUiThemeKey;
    globalPalette: MakUiVerbosePalette;
    globalTheme: MakUiVerboseTheme;
    twClassName: string | undefined;
    makClassName: string | undefined;
    modeVariant: MakUiThemeKey | FalsyValue;
    themeVariant: MakUiThemeVariantKey | ThemeVariantWithOpacity | FalsyValue;
    colorVariant: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    borderVariant: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    textVariant: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    bgVariant: MakUiVariantKey | VariantWithShade | VariantWithShadeAndOpacity | FalsyValue;
    hasModeProps: boolean;
    hasThemeProps: boolean;
    hasColorProps: boolean;
    hasTextProps: boolean;
    hasBorderProps: boolean;
    hasBgProps: boolean;
    children?: ReactNode;
    _makClassName: string | undefined;
    _className: string | undefined;
};
export type GenericObject = Record<string, any>;
export type NestedObject = {
    [key: string]: any;
};
export type DefaultColors = typeof colors;
export type TailwindCustomColors = NestedObject | GenericObject | undefined;
export type TailwindUtilityClass = "bg" | "text" | "border" | "ring" | "outline" | "ring-offset" | "fill" | "stroke" | "divide" | "placeholder" | "decoration" | "accent" | "caret" | "shadow";
export type TailwindModifier = "peer" | "group" | "has" | "*" | "group-has" | "peer-has";
export type TailwindModifierState = `${TailwindModifier}-${MakUiInteractionStateKey}`;
export type TailwindPseudoState = TailwindModifierState | MakUiInteractionStateKey;
export type HtmlElementKey = "button" | "input" | "text" | "form" | "dialog" | "select" | "textarea";
export type MakUiThemeKeySH = "drk" | "lgt" | "cst";
export type MakUiPaletteKeySH = "col" | "txt" | "bor" | "thm";
export type MakUiThemeVariantKeySH = "pri" | "sec" | "ter" | "cst";
export type MakUiVariantKeySH = MakUiThemeVariantKeySH | "suc" | "err" | "dng" | "war" | "inf";
export type MakUiThemeKey = "dark" | "light" | "custom";
export type MakUiPaletteKey = "color" | "text" | "border" | "theme" | "bg" | "divide";
export type MakUiThemeVariantKey = "primary" | "secondary" | "tertiary" | "custom" | "light" | "dark" | "white" | "black";
export type MakUiVariantRootKey = "primaryRoot" | "secondaryRoot" | "tertiaryRoot" | "customRoot";
export type MakUiVariantKey = "primary" | "secondary" | "tertiary" | "custom" | "light" | "dark" | "success" | "error" | "danger" | "warning" | "info";
export type MakUiCustomInteractionStateKey = "base" | "click";
export type MakUiInteractionStateKey = "active" | "autofill" | "checked" | "closed" | "default" | "disabled" | "empty" | "enabled" | "focus" | "focus-visible" | "focus-within" | "hover" | "in-range" | "indeterminate" | "invalid" | "open" | "out-of-range" | "placeholder-shown" | "read-only" | "required" | "selected" | "selection" | "target" | "valid" | "visited";
export type MakUiStateKey = MakUiInteractionStateKey | MakUiCustomInteractionStateKey;
export type MakUiRootStateKey = "openRoot" | "closedRoot" | "defaultRoot" | "emptyRoot" | "disabledRoot" | "enabledRoot" | "checkedRoot" | "indeterminateRoot" | "requiredRoot" | "invalidRoot" | "validRoot" | "in-rangeRoot" | "out-of-rangeRoot" | "placeholder-shownRoot" | "read-onlyRoot" | "autofillRoot" | "hoverRoot" | "focusRoot" | "activeRoot" | "visitedRoot" | "selectionRoot" | "selectedRoot";
export type MakUiVerbosePalette = {
    [Key in MakUiThemeKey]: MakUiVerboseTheme;
};
export type MakUiVerboseTheme = {
    color: MakUiVerboseVariant;
    bg: MakUiVerboseVariant;
    text: MakUiVerboseVariant;
    border: MakUiVerboseVariant;
    theme: MakUiVerboseThemeVariant;
    divide: MakUiVerboseVariant;
};
export type MakUiVerboseVariant = {
    [Key in MakUiVariantKey]: MakUiVerboseShades;
};
export type MakUiVerboseThemeVariant = {
    [Key in MakUiThemeVariantKey]: string;
};
export type MakUiState = {
    [Key in MakUiStateKey]: string;
};
export type ShadeStep = 50 | 100;
export type Shade = 0 | 50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950 | 1000;
export type MakUiAbsoluteShades = {
    0: string;
    1000: string;
};
export type MakUiSimpleShades = MakUiAbsoluteShades & {
    [key: number]: string;
    50: string;
    150: string;
    250: string;
    350: string;
    450: string;
    500: string;
    550: string;
    650: string;
    750: string;
    850: string;
    950: string;
};
export type MakUiVerboseShades = MakUiSimpleShades & MakUiAbsoluteShades & {
    [key: number]: string;
    50: string;
    150: string;
    250: string;
    350: string;
    450: string;
    500: string;
    550: string;
    650: string;
    750: string;
    850: string;
    950: string;
};
export type MakUiShadesInput = {
    [Key in Shade]?: string;
};
export type MakUiSimplePalette = {
    [Key in MakUiThemeKey]: MakUiSimpleTheme;
};
export type MakUiSimpleTheme = {
    color: MakUiSimpleVariant;
    text: MakUiSimpleVariant;
    border: MakUiSimpleVariant;
    theme: MakUiSimpleThemeVariant;
};
export type MakUiSimpleVariant = {
    [Key in MakUiVariantKey]: MakUiSimpleShades;
};
export type MakUiSimpleThemeVariant = {
    [Key in MakUiThemeVariantKey]: string;
};
export type MakUiSimpleState = {
    [Key in MakUiStateKey]: string;
};
export type MakUiPaletteInput = {
    [Key in MakUiThemeKey]?: MakUiThemeInput;
};
export type MakUiThemePaletteInput = {
    color?: string | MakUiVariantInput;
    text?: string | MakUiVariantInput;
    border?: string | MakUiVariantInput;
    theme?: string | MakUiThemeVariantInput;
};
export type MakUiVariantPaletteInput = {
    [Key in MakUiVariantKey]?: string | MakUiShadesInput;
};
export type MakUiFlexiblePaletteInput = MakUiPaletteInput | MakUiThemePaletteInput | MakUiVariantPaletteInput;
export type MakUiThemeInput = {
    color?: MakUiVariantInput;
    text?: MakUiVariantInput;
    border?: MakUiVariantInput;
    theme?: MakUiThemeVariantInput;
};
export type MakUiVariantInput = string | {
    [Key in MakUiVariantKey]?: string | MakUiShadesInput;
};
export type MakUiThemeVariantInput = string | {
    [Key in MakUiThemeVariantKey]?: string;
};
export type MakUiStateInput = {
    [Key in MakUiStateKey]?: string;
};
export type MakUiThemeShadesInput = {
    [Key in MakUiThemeKey]?: {
        [Key in MakUiThemeVariantKey]?: number;
    };
};
export type MakUiThemeVariantShades = {
    [Key in MakUiThemeVariantKey]: number;
};
export type MakUiThemeShades = {
    [Key in MakUiThemeKey]: MakUiThemeVariantShades;
};
export type MakUiStateShades = {
    [Key in MakUiStateKey]: number;
};
export type MakUiThemeColors = {
    [Key in MakUiThemeKey]: {
        [Key in MakUiThemeVariantKey]: string;
    };
};
export type MakUiDefaultColors = {
    [Key in MakUiVariantKey]: string;
};
export type MakUiDefaultStateColors = {
    [Key in MakUiStateKey]: string;
};
export type MakUiDefaultPalette = {
    [Key in MakUiThemeKey]: {
        color: {
            [Key in MakUiVariantKey]: string;
        };
        text: string;
        border: string;
        theme: {
            primary: string;
            secondary: string;
            tertiary: string;
            custom: string;
            light: string;
            white: string;
            dark: string;
            black: string;
        };
    };
};
export type TWColorHelperResponse = {
    absolute: boolean;
    isTwColor: boolean;
    color: string | undefined;
    shade: number | undefined;
    autoShade: boolean;
    autoColor: boolean;
    opacity: number;
    colorString: string | undefined;
    rootString: string | undefined;
    hex: string;
};
export type ParsedClassNameResponse = {
    theme: MakUiThemeKey | undefined;
    palette: MakUiPaletteKey;
    variant: MakUiVariantKey;
    themeVariant: MakUiThemeVariantKey;
    state: MakUiStateKey | undefined;
    twVariant: TailwindUtilityClass;
    opacity: string | undefined;
    string: string;
};
export type MakClassNameObject = {
    utility: TailwindUtilityClass | undefined;
    modifier: TailwindModifier | undefined;
    paletteVariant: MakUiPaletteKey;
    variant: MakUiVariantKey;
    shade: Shade;
    opacity: number | string | undefined;
};
