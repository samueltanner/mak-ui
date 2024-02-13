var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { mergeDefaultConfig, parseClassNameToStyleObject, } from "../functions/helpers";
import { withComputedProps } from "../functions/componentPropsFunction";
export const componentWrapperLogic = ({ props, makUi, type, }) => {
    const { theme: makTheme, verbosePalette: makVerbosePalette, verboseTheme: makVerboseTheme, } = makUi;
    let _a = withComputedProps(props), { mode: themeMode, theme: themeProps, color: colorProps, text: textProps, border: borderProps, bg: bgProps, hasModeProps, hasThemeProps, hasColorProps, hasTextProps, hasBorderProps, hasBgProps, className, makClassName, useConfig } = _a, restWithComputedProps = __rest(_a, ["mode", "theme", "color", "text", "border", "bg", "hasModeProps", "hasThemeProps", "hasColorProps", "hasTextProps", "hasBorderProps", "hasBgProps", "className", "makClassName", "useConfig"]);
    let { resolvedClassName, resolvedMakClassName } = mergeDefaultConfig({
        makUi,
        useConfig,
        component: type,
        className,
        makClassName,
    });
    const activeThemeMode = themeMode
        ? themeMode
        : makTheme
            ? makTheme
            : undefined;
    const activeTheme = activeThemeMode
        ? makVerbosePalette[activeThemeMode]
        : makVerboseTheme;
    const { text: textPalette, color: colorPalette, border: borderPalette, theme: themePalette, } = activeTheme;
    if (themeProps) {
        const themeClassName = `theme-${themeProps}`;
        resolvedMakClassName = resolvedMakClassName
            ? `${resolvedMakClassName} ${themeClassName}`
            : themeClassName;
    }
    if (colorProps) {
        const colorClassName = `bg-${colorProps}`;
        resolvedMakClassName = resolvedMakClassName
            ? `${resolvedMakClassName} ${colorClassName}`
            : colorClassName;
    }
    if (textProps) {
        const textClassName = `text-${textProps}`;
        resolvedMakClassName = resolvedMakClassName
            ? `${resolvedMakClassName} ${textClassName}`
            : textClassName;
    }
    if (borderProps) {
        const borderClassName = `border-${borderProps}`;
        resolvedMakClassName = resolvedMakClassName
            ? `${resolvedMakClassName} ${borderClassName}`
            : borderClassName;
    }
    if (bgProps) {
        const bgClassName = `bg-${bgProps}`;
        resolvedMakClassName = resolvedMakClassName
            ? `${resolvedMakClassName} ${bgClassName}`
            : bgClassName;
    }
    const { styleObject, twClassName, makClassName: makClassNames, } = parseClassNameToStyleObject({
        className: resolvedClassName,
        makClassName: resolvedMakClassName,
        activeTheme,
        currentThemeMode: makUi.theme,
    });
    const response = Object.assign({ styleObject, componentTheme: themePalette, componentText: textPalette, componentColor: colorPalette, componentBorder: borderPalette, fullComponentTheme: activeTheme, componentThemeMode: activeThemeMode, globalThemeMode: makTheme, globalTheme: makVerboseTheme, globalPalette: makVerbosePalette, twClassName, makClassName: makClassNames, modeVariant: themeMode, hasModeProps,
        hasThemeProps,
        hasColorProps,
        hasTextProps,
        hasBorderProps,
        hasBgProps, themeVariant: themeProps, colorVariant: colorProps, textVariant: textProps, borderVariant: borderProps, bgVariant: bgProps, _className: twClassName, _makClassName: makClassNames, children: restWithComputedProps.children }, restWithComputedProps);
    return response;
};
