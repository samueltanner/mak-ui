import { allowFalsyFallback } from "../functions/helpers";
export const typeProps = {
    //theme
    useConfig: true,
    darkMode: false,
    lightMode: false,
    customMode: false,
    themeMode: "light",
    //themeVariant
    themeWhite: false,
    themeBlack: false,
    themeLight: false,
    themeDark: false,
    themePrimary: false,
    themeSecondary: false,
    themeTertiary: false,
    themeCustom: false,
    themeVariant: undefined,
    themeOpacity: 100,
    primary: false,
    secondary: false,
    tertiary: false,
    success: false,
    error: false,
    warning: false,
    danger: false,
    info: false,
    custom: false,
    dark: false,
    light: false,
    variant: undefined,
    variantShade: 500,
    variantOpacity: 100,
    textPrimary: false,
    textSecondary: false,
    textTertiary: false,
    textSuccess: false,
    textError: false,
    textWarning: false,
    textDanger: false,
    textInfo: false,
    textCustom: false,
    textLight: false,
    textDark: false,
    text: undefined,
    textShade: 500,
    textOpacity: 100,
    bgPrimary: false,
    bgSecondary: false,
    bgTertiary: false,
    bgSuccess: false,
    bgError: false,
    bgWarning: false,
    bgDanger: false,
    bgInfo: false,
    bgCustom: false,
    bgLight: false,
    bgDark: false,
    bg: undefined,
    bgShade: undefined,
    bgOpacity: undefined,
    borderPrimary: false,
    borderSecondary: false,
    borderTertiary: false,
    borderSuccess: false,
    borderError: false,
    borderWarning: false,
    borderDanger: false,
    borderInfo: false,
    borderCustom: false,
    borderLight: false,
    borderDark: false,
    border: undefined,
    borderShade: 500,
    borderOpacity: 100,
    textSize: undefined,
    borderPx: undefined,
    className: undefined,
    makClassName: undefined,
    height: undefined,
    width: undefined,
};
const getThemeModeValue = (props) => {
    if (props.themeMode)
        return props.themeMode;
    if (props.lightMode)
        return "light";
    if (props.darkMode)
        return "dark";
    if (props.customMode)
        return "custom";
    return undefined;
};
const propValue = (props, variant) => {
    if (!props)
        return undefined;
    if (props === true)
        return variant;
    if (props === false)
        return undefined;
    if (typeof props !== "boolean")
        return `${variant}-${props}`;
};
const getThemeVariantValue = (props) => {
    if (props.themeVariant)
        return props.themeVariant;
    if (props.themePrimary)
        return propValue(props.themePrimary, "primary");
    if (props.themeSecondary)
        return propValue(props.themeSecondary, "secondary");
    if (props.themeTertiary)
        return propValue(props.themeTertiary, "tertiary");
    if (props.themeCustom)
        return propValue(props.themeCustom, "custom");
    if (props.themeLight)
        return propValue(props.themeLight, "light");
    if (props.themeDark)
        return propValue(props.themeDark, "dark");
    if (props.themeWhite)
        return propValue(props.themeWhite, "white");
    if (props.themeBlack)
        return propValue(props.themeBlack, "black");
    return undefined;
};
const getColorValue = (props) => {
    if (props.variant)
        return props.variant;
    if (props.primary)
        return propValue(props.primary, "primary");
    if (props.secondary)
        return propValue(props.secondary, "secondary");
    if (props.tertiary)
        return propValue(props.tertiary, "tertiary");
    if (props.success)
        return propValue(props.success, "success");
    if (props.error)
        return propValue(props.error, "error");
    if (props.warning)
        return propValue(props.warning, "warning");
    if (props.danger)
        return propValue(props.danger, "danger");
    if (props.info)
        return propValue(props.info, "info");
    if (props.custom)
        return propValue(props.custom, "custom");
    if (props.light)
        return propValue(props.light, "light");
    if (props.dark)
        return propValue(props.dark, "dark");
    return undefined;
};
const getBorderValue = (props) => {
    if (props.border)
        return props.border;
    if (props.borderPrimary)
        return propValue(props.borderPrimary, "primary");
    if (props.borderSecondary)
        return propValue(props.borderSecondary, "secondary");
    if (props.borderTertiary)
        return propValue(props.borderTertiary, "tertiary");
    if (props.borderSuccess)
        return propValue(props.borderSuccess, "success");
    if (props.borderError)
        return propValue(props.borderError, "error");
    if (props.borderWarning)
        return propValue(props.borderWarning, "warning");
    if (props.borderDanger)
        return propValue(props.borderDanger, "danger");
    if (props.borderInfo)
        return propValue(props.borderInfo, "info");
    if (props.borderCustom)
        return propValue(props.borderCustom, "custom");
    if (props.borderLight)
        return propValue(props.borderLight, "light");
    if (props.borderDark)
        return propValue(props.borderDark, "dark");
    return undefined;
};
const getTextValue = (props) => {
    if (props.text)
        return props.text;
    if (props.textPrimary)
        return propValue(props.textPrimary, "primary");
    if (props.textSecondary)
        return propValue(props.textSecondary, "secondary");
    if (props.textTertiary)
        return propValue(props.textTertiary, "tertiary");
    if (props.textSuccess)
        return propValue(props.textSuccess, "success");
    if (props.textError)
        return propValue(props.textError, "error");
    if (props.textWarning)
        return propValue(props.textWarning, "warning");
    if (props.textDanger)
        return propValue(props.textDanger, "danger");
    if (props.textInfo)
        return propValue(props.textInfo, "info");
    if (props.textCustom)
        return propValue(props.textCustom, "custom");
    if (props.textLight)
        return propValue(props.textLight, "light");
    if (props.textDark)
        return propValue(props.textDark, "dark");
    return undefined;
};
const getBgValue = (props) => {
    if (props.bg)
        return props.bg;
    if (props.bgPrimary)
        return propValue(props.bgPrimary, "primary");
    if (props.bgSecondary)
        return propValue(props.bgSecondary, "secondary");
    if (props.bgTertiary)
        return propValue(props.bgTertiary, "tertiary");
    if (props.bgSuccess)
        return propValue(props.bgSuccess, "success");
    if (props.bgError)
        return propValue(props.bgError, "error");
    if (props.bgWarning)
        return propValue(props.bgWarning, "warning");
    if (props.bgDanger)
        return propValue(props.bgDanger, "danger");
    if (props.bgInfo)
        return propValue(props.bgInfo, "info");
    if (props.bgCustom)
        return propValue(props.bgCustom, "custom");
    if (props.bgLight)
        return propValue(props.bgLight, "light");
    if (props.bgDark)
        return propValue(props.bgDark, "dark");
    return undefined;
};
export const withComputedProps = (props) => {
    const computedModeProps = getThemeModeValue(props);
    const computedThemeProps = getThemeVariantValue(props);
    const computedColorProps = getColorValue(props);
    const computedBorderProps = getBorderValue(props);
    const computedTextProps = getTextValue(props);
    const hasBgProps = getBgValue(props);
    return Object.assign(Object.assign({}, props), { useConfig: props.useConfig === undefined ? typeProps.useConfig : props.useConfig, mode: computedModeProps, hasModeProps: !!computedModeProps, theme: computedThemeProps, hasThemeProps: !!computedThemeProps, color: computedColorProps, hasColorProps: !!computedColorProps, border: computedBorderProps, hasBorderProps: !!computedBorderProps, text: computedTextProps, hasTextProps: !!computedTextProps, bg: hasBgProps, hasBgProps: !!hasBgProps, themeOpacity: allowFalsyFallback(props.themeOpacity, typeProps.themeOpacity), textOpacity: allowFalsyFallback(props.textOpacity, typeProps.textOpacity), bgOpacity: allowFalsyFallback(props.bgOpacity, typeProps.bgOpacity), variantOpacity: allowFalsyFallback(props.variantOpacity, typeProps.variantOpacity), borderOpacity: allowFalsyFallback(props.borderOpacity, typeProps.borderOpacity), textShade: allowFalsyFallback(props.textShade, typeProps.textShade), bgShade: allowFalsyFallback(props.bgShade, typeProps.bgShade), variantShade: allowFalsyFallback(props.variantShade, typeProps.variantShade), borderShade: allowFalsyFallback(props.borderShade, typeProps.borderShade), borderPx: allowFalsyFallback(props.borderPx, typeProps.borderPx), className: props.className, makClassName: props.makClassName, height: props.height, width: props.width });
};
