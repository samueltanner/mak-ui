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
// import fs from "fs"
// import path from "path"
import chroma from "chroma-js";
import colors from "tailwindcss/colors";
import { twColors } from "../constants/tailwind-colors";
import { makUiDefaultColors, makUiDefaultStateShades, makUiDefaultThemeShades, makUiPalettes, makUiShadesSet, makUiThemesSet, makUiVariants, mediaQueries, tailwindToCssModifierObject, } from "../constants/ui-constants";
export const setLocalStorage = (key, value) => {
    if (typeof window === "undefined")
        return;
    if (typeof value === "object") {
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key, value);
};
export const getLocalStorage = (key) => {
    if (typeof window === "undefined")
        return;
    return window.localStorage.getItem(key);
};
export const removeLocalStorage = (key) => {
    if (typeof window === "undefined")
        return;
    window.localStorage.removeItem(key);
};
export const mergeWithFallback = (primary, ...fallbacks) => {
    let result = {};
    fallbacks.forEach((fallback) => {
        if (isObject(fallback) && !isEmptyObject(fallback))
            Object.keys(fallback).forEach((key) => {
                if (result[key] === undefined) {
                    result[key] = fallback[key];
                }
            });
    });
    return Object.assign(Object.assign({}, result), primary);
};
export const nearestMultiple = (num, multiple, roundDir = "nearest") => {
    const delta = roundDir === "up" ? multiple : roundDir === "down" ? -multiple : 0;
    const remainder = num % multiple;
    return remainder === 0 ? num + delta : num + multiple - remainder + delta;
};
export const ensureNestedObject = ({ parent, keys, value, }) => {
    keys = keys ? keys.filter((k) => k) : [];
    let current = parent;
    if (!keys || keys.length === 0)
        return current;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === keys.length - 1 && value !== undefined) {
            current[key] = value;
        }
        else {
            current[key] = current[key] || {};
        }
        current = current[key];
    }
    return current;
};
export const allowFalsyFallback = (value, fallback) => {
    return value ||
        value === 0 ||
        value === false ||
        value === null ||
        value === undefined
        ? value
        : fallback;
};
export const isEmptyObject = (obj) => {
    if (obj === undefined)
        return false;
    return isObject(obj) && Object.keys(obj).length === 0;
};
export const isNestedObject = (obj) => isObject(obj) && Object.values(obj).some(isObject);
export const isObject = (v) => v !== null &&
    typeof v === "object" &&
    !Array.isArray(v) &&
    typeof v !== "string";
export const deepMerge = (...objects) => {
    const result = {};
    const merge = (target, source) => {
        Object.keys(source).forEach((key) => {
            if (source[key] && typeof source[key] === "object") {
                target[key] = target[key] || {};
                merge(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        });
    };
    for (const obj of objects) {
        if (!isObject(obj))
            continue;
        merge(result, obj);
    }
    return result;
};
export const constructTailwindObject = ({ hex, step = 100, includeNearAbsolutes = true, hexPosition = 500, includeBlackAndWhite = true, blackHex = "#000000", whiteHex = "#FFFFFF", tailwindConfig, }) => {
    if (hex.includes("-") || hex.charAt(0) !== "#") {
        hex = twColorHelper({ colorString: hex, tailwindConfig }).hex;
    }
    if (hex.includes("#white") || hex === "white") {
        hex = "#ffffff";
    }
    if (hex.includes("#black") || hex === "black") {
        hex = "#000000";
    }
    const tailwindColors = {};
    const scale2Start = Math.max(0, hexPosition);
    const scale1 = chroma
        .scale([whiteHex, hex])
        .mode("rgb")
        .domain([0, hexPosition]);
    const scale2 = chroma
        .scale([hex, blackHex])
        .mode("rgb")
        .domain([scale2Start, 1000]);
    const getColor = (i) => {
        return i <= hexPosition ? scale1(i).hex() : scale2(i).hex();
    };
    for (let i = 0; i <= 1000; i += step) {
        tailwindColors[i] = getColor(i);
    }
    if (includeNearAbsolutes) {
        tailwindColors[50] = getColor(50);
        tailwindColors[950] = getColor(950);
    }
    if (includeBlackAndWhite) {
        tailwindColors[0] = whiteHex;
        tailwindColors[1000] = blackHex;
    }
    return tailwindColors;
};
export const getThemeShadesObj = (shades) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const lightPrimary = ((_a = shades === null || shades === void 0 ? void 0 : shades.light) === null || _a === void 0 ? void 0 : _a.primary) || getNormalizedShadeNumber(50);
    const lightSecondary = ((_b = shades === null || shades === void 0 ? void 0 : shades.light) === null || _b === void 0 ? void 0 : _b.secondary) || getNormalizedShadeNumber(lightPrimary + 50);
    const lightTertiary = ((_c = shades === null || shades === void 0 ? void 0 : shades.light) === null || _c === void 0 ? void 0 : _c.tertiary) || getNormalizedShadeNumber(lightSecondary + 100);
    const lightCustom = ((_d = shades === null || shades === void 0 ? void 0 : shades.light) === null || _d === void 0 ? void 0 : _d.custom) || getNormalizedShadeNumber(950);
    const darkPrimary = ((_e = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _e === void 0 ? void 0 : _e.primary) || getNormalizedShadeNumber(950);
    const darkSecondary = ((_f = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _f === void 0 ? void 0 : _f.secondary) || getNormalizedShadeNumber(darkPrimary - 50);
    const darkTertiary = ((_g = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _g === void 0 ? void 0 : _g.tertiary) || getNormalizedShadeNumber(darkSecondary - 100);
    const darkCustom = ((_h = shades === null || shades === void 0 ? void 0 : shades.dark) === null || _h === void 0 ? void 0 : _h.custom) || getNormalizedShadeNumber(50);
    const customPrimary = ((_j = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _j === void 0 ? void 0 : _j.primary) || getNormalizedShadeNumber(500);
    const customSecondary = ((_k = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _k === void 0 ? void 0 : _k.secondary) || getNormalizedShadeNumber(customPrimary + 100);
    const customTertiary = ((_l = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _l === void 0 ? void 0 : _l.tertiary) || getNormalizedShadeNumber(customPrimary + 200);
    const customCustom = ((_m = shades === null || shades === void 0 ? void 0 : shades.custom) === null || _m === void 0 ? void 0 : _m.custom) || getNormalizedShadeNumber(customPrimary + 300);
    const responseObj = {
        light: {
            primary: getNormalizedShadeNumber(lightPrimary),
            secondary: getNormalizedShadeNumber(lightSecondary),
            tertiary: getNormalizedShadeNumber(lightTertiary),
            custom: getNormalizedShadeNumber(lightCustom),
        },
        dark: {
            primary: getNormalizedShadeNumber(darkPrimary),
            secondary: getNormalizedShadeNumber(darkSecondary),
            tertiary: getNormalizedShadeNumber(darkTertiary),
            custom: getNormalizedShadeNumber(darkCustom),
        },
        custom: {
            primary: getNormalizedShadeNumber(customPrimary),
            secondary: getNormalizedShadeNumber(customSecondary),
            tertiary: getNormalizedShadeNumber(customTertiary),
            custom: getNormalizedShadeNumber(customCustom),
        },
    };
    return responseObj;
};
const includesShade = (string) => {
    if (!string)
        return false;
    const splitString = string.split("-");
    const shade = splitString[splitString.length - 1];
    return !!parseInt(shade);
};
const getNormalizedShadeNumber = (num) => {
    if (num !== 0 && (!num || typeof num !== "number"))
        return 500;
    return num <= 50 ? 50 : num >= 950 ? 950 : Math.round(num / 100) * 100;
};
export const getConstructedTheme = ({ providedVariants, theme, defaultShades, altBlack, altWhite, tailwindConfig, }) => {
    const { primary, secondary, tertiary, custom, light, dark } = providedVariants;
    const blackHex = twColorHelper({ colorString: altBlack, tailwindConfig }).hex;
    const whiteHex = twColorHelper({ colorString: altWhite, tailwindConfig }).hex;
    const { shade: primaryShade, color: primaryColor, hex: primaryHex, } = twColorHelper({
        colorString: primary || makUiDefaultColors.primary,
        shade: includesShade(primary) ? undefined : defaultShades[theme].primary,
        useDefaults: false,
        tailwindConfig,
    });
    const { shade: secondaryShade, color: secondaryColor, hex: secondaryHex, } = twColorHelper({
        colorString: secondary,
        useDefaults: false,
        tailwindConfig,
    });
    const { shade: tertiaryShade, color: tertiaryColor, hex: tertiaryHex, } = twColorHelper({
        colorString: tertiary,
        useDefaults: false,
        tailwindConfig,
    });
    const { shade: customShade, color: customColor, hex: customHex, } = twColorHelper({
        colorString: custom,
        useDefaults: false,
        tailwindConfig,
    });
    const { shade: lightShade, color: lightColor, hex: lightHex, } = twColorHelper({
        colorString: light || "white",
        useDefaults: false,
        tailwindConfig,
    });
    const { shade: darkShade, color: darkColor, hex: darkHex, } = twColorHelper({
        colorString: dark || "black",
        useDefaults: false,
        tailwindConfig,
    });
    const defaultShadesObj = makUiDefaultThemeShades[theme];
    const shadeDiffs = Object.entries(defaultShadesObj).reduce((acc, [variant, shade]) => {
        if (variant === "primary") {
            ;
            acc[variant] = 0;
        }
        else {
            let value = shade - defaultShadesObj["primary"];
            const isNeg = value < 0 ? -1 : 1;
            const absValue = Math.abs(value);
            value = Math.round(absValue / 100) * 100 * isNeg;
            acc[variant] = value;
        }
        return acc;
    }, {});
    const resolvedPrimaryShade = includesShade(primary)
        ? primaryShade
        : defaultShades[theme].primary;
    const resolvedShadesObject = {
        primary: resolvedPrimaryShade,
        secondary: includesShade(secondary)
            ? secondaryShade
            : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.secondary),
        tertiary: includesShade(tertiary)
            ? tertiaryShade
            : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.tertiary),
        custom: includesShade(custom)
            ? customShade
            : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.custom),
        light: includesShade(light)
            ? lightShade
            : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.light),
        dark: includesShade(dark)
            ? darkShade
            : getNormalizedShadeNumber(resolvedPrimaryShade + shadeDiffs.dark),
    };
    const resolvedThemeObject = {
        primary: twColorHelper({
            colorString: primaryColor,
            shade: includesShade(primary)
                ? primaryShade
                : defaultShades[theme].primary,
            tailwindConfig,
        }),
        secondary: twColorHelper({
            colorString: secondaryColor || primaryColor,
            shade: resolvedShadesObject.secondary,
            tailwindConfig,
        }),
        tertiary: twColorHelper({
            colorString: tertiaryColor || primaryColor,
            shade: resolvedShadesObject.tertiary,
            tailwindConfig,
        }),
        custom: twColorHelper({
            colorString: customColor || primaryColor,
            shade: resolvedShadesObject.custom,
            tailwindConfig,
        }),
        light: twColorHelper({
            colorString: lightColor,
            shade: resolvedShadesObject.light,
            tailwindConfig,
        }),
        dark: twColorHelper({
            colorString: darkColor,
            shade: resolvedShadesObject.dark,
            tailwindConfig,
        }),
        blackHex,
        whiteHex,
    };
    const themeResponse = {
        primary: primaryHex || resolvedThemeObject.primary.hex,
        secondary: secondaryHex || resolvedThemeObject.secondary.hex,
        tertiary: tertiaryHex || resolvedThemeObject.tertiary.hex,
        custom: customHex || resolvedThemeObject.custom.hex,
        light: lightHex || resolvedThemeObject.light.hex,
        dark: darkHex || resolvedThemeObject.dark.hex,
        black: resolvedThemeObject.blackHex,
        white: resolvedThemeObject.whiteHex,
    };
    return themeResponse;
};
export const getConstructedShades = ({ defaultColor, middleHex, providedShades, steps = 50, variant, includeBlackAndWhite = true, includeNearAbsolutes = true, altBlack = "#000000", altWhite = "#FFFFFF", hexPosition, tailwindConfig, }) => {
    var _a, _b;
    const finalShades = {};
    let shadeHex;
    const blackHex = twColorHelper({ colorString: altBlack, tailwindConfig }).hex;
    const whiteHex = twColorHelper({ colorString: altWhite, tailwindConfig }).hex;
    if (!middleHex) {
        let fallbackPosition = (_a = Object.keys(providedShades || {})) === null || _a === void 0 ? void 0 : _a[0];
        const fallBackProvidedColor = (_b = Object.values(providedShades || {})) === null || _b === void 0 ? void 0 : _b[0];
        const fallBack = fallBackProvidedColor || defaultColor || makUiDefaultColors[variant];
        const resolvedFallBackObject = twColorHelper({
            colorString: fallBack,
            tailwindConfig,
        });
        const resolvedTailwindColors = constructTailwindObject({
            hex: resolvedFallBackObject.hex,
            step: steps,
            includeBlackAndWhite,
            includeNearAbsolutes,
            blackHex,
            whiteHex,
            hexPosition: Number(fallbackPosition),
            tailwindConfig,
        });
        for (const [shade, color] of Object.entries(resolvedTailwindColors)) {
            if (providedShades && providedShades[shade]) {
                const twObj = twColorHelper({
                    colorString: providedShades[shade],
                    tailwindConfig,
                });
                shadeHex = twObj.hex;
            }
            else {
                shadeHex = color;
            }
            const shadeNumber = Number(shade);
            finalShades[shadeNumber] = shadeHex;
        }
        return finalShades;
    }
    else {
        const tailwindColors = constructTailwindObject({
            hex: middleHex,
            step: steps,
            includeBlackAndWhite,
            includeNearAbsolutes,
            blackHex,
            whiteHex,
            hexPosition,
            tailwindConfig,
        });
        for (const [shade, color] of Object.entries(tailwindColors)) {
            if (providedShades && providedShades[shade]) {
                const twObj = twColorHelper({
                    colorString: providedShades[shade],
                    tailwindConfig,
                });
                shadeHex = twObj.hex;
            }
            else {
                shadeHex = color;
            }
            const shadeNumber = Number(shade);
            finalShades[shadeNumber] = shadeHex;
        }
        return finalShades;
    }
};
export const getOpacity = ({ opacityValue, override, }) => {
    if (override !== undefined) {
        return {
            string: `/${nearestMultiple(Number(override), 5)}`,
            value: Number(override),
        };
    }
    let opacityNum = 100;
    if (typeof opacityValue === "string") {
        opacityNum = Number(opacityValue);
    }
    else if (opacityValue === undefined || opacityValue === null) {
        opacityNum = 100;
    }
    else if (opacityValue === 0) {
        opacityNum = 0;
    }
    else {
        opacityNum = Number(opacityValue) || 100;
    }
    const opacityString = `/${nearestMultiple(opacityNum, 5)}`;
    return {
        string: opacityString,
        value: opacityNum,
    };
};
export const generateDefaultShadesDiffOject = ({ defaultShades = makUiDefaultStateShades, }) => {
    let defaultShadesDiffObject = {};
    const baseShade = defaultShades.base;
    Object.entries(defaultShades).forEach(([state, shade]) => {
        const shadeDiff = shade - baseShade;
        defaultShadesDiffObject[state] = shadeDiff;
    });
    return defaultShadesDiffObject;
};
export const generateDefaultStatesObject = ({ defaultShades = makUiDefaultStateShades, defaultColor = "zinc", baseShade = 500, multiplier = 1, }) => {
    const shadesDiff = generateDefaultShadesDiffOject({ defaultShades });
    const isAbsoluteColor = defaultColor === "white" || defaultColor === "black";
    let defaultStatesObject = {};
    for (const [state, diff] of Object.entries(shadesDiff)) {
        const shade = baseShade + diff * multiplier;
        if (isAbsoluteColor) {
            defaultStatesObject[state] = defaultColor;
        }
        else {
            defaultStatesObject[state] = `${defaultColor}-${getNormalizedShadeNumber(shade)}`;
        }
    }
    return defaultStatesObject;
};
export const twColorHelper = ({ colorString, opacity, shade, useDefaults = true, defaults = makUiDefaultColors, defaultKey = "primary", tailwindConfig, }) => {
    if (colorString === null || colorString === void 0 ? void 0 : colorString.includes("#")) {
        const hex = colorString;
        return {
            absolute: true,
            isTwColor: false,
            color: undefined,
            shade: undefined,
            autoShade: false,
            autoColor: false,
            opacity: 100,
            colorString: undefined,
            rootString: undefined,
            hex: hex,
        };
    }
    let defaultValue;
    if (makUiVariants.includes(defaultKey)) {
        defaults;
        defaultValue = defaults[defaultKey];
    }
    else {
        defaults;
        defaultValue = defaults[defaultKey];
    }
    let autoShade = true;
    if (typeof shade === "string" || typeof shade === "number") {
        autoShade = false;
    }
    let autoColor = !!colorString;
    if (!colorString && !useDefaults) {
        return {
            absolute: false,
            isTwColor: false,
            color: undefined,
            shade: undefined,
            autoShade: false,
            autoColor,
            opacity: 0,
            colorString: "",
            rootString: "",
            hex: "#000",
        };
    }
    const absoluteRegex = /^((white|black)\/\[*0*(?:[0-9][0-9]?|100)%*\]*|(white|black))$/;
    const isAbsoluteColor = !colorString
        ? false
        : absoluteRegex.test(colorString) ||
            colorString === "white" ||
            colorString === "black";
    if (isAbsoluteColor && !!colorString) {
        const [absoluteColor, absoluteOpacity] = colorString.split("/");
        const { string, value } = getOpacity({
            opacityValue: absoluteOpacity,
            override: opacity,
        });
        return {
            absolute: true,
            isTwColor: true,
            color: absoluteColor,
            shade: undefined,
            autoShade: false,
            autoColor,
            opacity: value,
            colorString: `${absoluteColor}${string}`,
            rootString: `${absoluteColor}`,
            hex: colorString === "white" ? "#FFFFFF" : "#000000",
        };
    }
    else {
        if (isObject(colorString) && Object.values(colorString)[0]) {
            colorString = Object.values(colorString)[0];
            autoColor = false;
        }
        else if (!colorString) {
            colorString = defaultValue;
            autoColor = true;
            autoShade = false;
        }
        const colorArr = colorString.split("-");
        autoShade = !parseInt(colorArr[colorArr.length - 1]);
        const lastElement = colorArr[colorArr.length - 1];
        let shadeAndOpacity;
        let color;
        let variableShade;
        let variableOpacity;
        if (lastElement.includes("/")) {
            shadeAndOpacity = colorArr.pop();
            const shadeAndOpacityArr = shadeAndOpacity === null || shadeAndOpacity === void 0 ? void 0 : shadeAndOpacity.split("/");
            color = colorArr.join("-");
            variableShade = shade || (shadeAndOpacityArr === null || shadeAndOpacityArr === void 0 ? void 0 : shadeAndOpacityArr[0]);
            variableOpacity = shadeAndOpacityArr === null || shadeAndOpacityArr === void 0 ? void 0 : shadeAndOpacityArr[1].replace(/\D/g, "");
        }
        else {
            const includesShade = Number(lastElement) > 0;
            const computedShade = includesShade ? colorArr.pop() : 500;
            variableShade = shade || computedShade;
            if (variableShade && Number(variableShade) < 50)
                variableShade = getNormalizedShadeNumber(Number(variableShade));
            variableOpacity = 100;
            color = colorArr.join("-");
        }
        variableShade = Number(variableShade);
        const opacityObj = getOpacity({
            opacityValue: variableOpacity,
            override: opacity,
        });
        if (variableShade > 50 && variableShade < 950) {
            variableShade = nearestMultiple(variableShade, 100);
        }
        const hex = getTwHex({
            color,
            shade: variableShade,
            absolute: false,
            tailwindConfig,
        });
        const isTwColor = !!color && !!variableShade;
        return {
            absolute: false,
            isTwColor,
            opacity: opacityObj.value,
            shade: Number(variableShade),
            autoShade,
            autoColor,
            color: color || makUiDefaultColors.primary,
            colorString: `${color}-${variableShade}${opacityObj.string}`,
            rootString: `${color}-${variableShade}`,
            hex,
        };
    }
};
export const concatNestedKeys = (obj, prefix = "") => {
    let result = {};
    Object.keys(obj).forEach((key) => {
        const newKey = prefix ? `${prefix}-${key}` : key;
        if (typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])) {
            Object.assign(result, concatNestedKeys(obj[key], newKey));
        }
        else {
            result[newKey] = obj[key];
        }
    });
    return result;
};
export const getTwHex = ({ colorString, color, shade, absolute, tailwindConfig, }) => {
    const black = colors["black"];
    const white = colors["white"];
    const handleAbsolute = (absoluteColor) => {
        return absoluteColor === "white" ? white : black;
    };
    const getParsedShade = (shade) => {
        if (!shade)
            return 500;
        if (shade <= 50)
            return 50;
        if (shade >= 950)
            return 950;
        const nearestMultipleOfShade = nearestMultiple(shade, 100);
        return nearestMultipleOfShade;
    };
    const getDefaultColorGroup = (color) => {
        const defaultColorGroup = colors[color];
        return defaultColorGroup;
    };
    const getHex = (defaultColorGroup, parsedShade, rootColor, rootShade) => {
        var _a, _b, _c, _d, _e;
        if (defaultColorGroup && typeof defaultColorGroup === "object") {
            const defaultHex = defaultColorGroup[parsedShade];
            if (defaultHex)
                return defaultHex;
            return black;
        }
        else {
            let twConfig = tailwindConfig;
            const tailwindCustomColors = ((_b = (_a = twConfig === null || twConfig === void 0 ? void 0 : twConfig.theme) === null || _a === void 0 ? void 0 : _a.extend) === null || _b === void 0 ? void 0 : _b.colors) || {};
            const [colorGroup, colorSubGroup] = rootColor.split("-");
            const customColorHex = ((_c = tailwindCustomColors === null || tailwindCustomColors === void 0 ? void 0 : tailwindCustomColors[rootColor]) === null || _c === void 0 ? void 0 : _c[rootShade]) ||
                ((_e = (_d = tailwindCustomColors === null || tailwindCustomColors === void 0 ? void 0 : tailwindCustomColors[colorGroup]) === null || _d === void 0 ? void 0 : _d[colorSubGroup]) === null || _e === void 0 ? void 0 : _e[rootShade]) ||
                black;
            return customColorHex;
        }
    };
    if (!colorString && !color)
        return black;
    if (absolute ||
        colorString === "white" ||
        (colorString === "black" && typeof colorString === "string")) {
        return handleAbsolute(colorString);
    }
    if (shade && typeof shade === "string")
        shade = Number(shade);
    if (!colorString && color && shade) {
        const parsedShade = getParsedShade(shade);
        const defaultColorGroup = getDefaultColorGroup(color);
        const hex = getHex(defaultColorGroup, parsedShade, color, shade);
        return hex;
    }
    if (colorString) {
        const { color, shade, absolute } = twColorHelper({
            colorString,
            tailwindConfig,
        });
        if (absolute && typeof color === "string")
            return handleAbsolute(color);
        if (!color || !shade)
            return black;
        const parsedShade = getParsedShade(shade);
        const defaultColorGroup = getDefaultColorGroup(color);
        const hex = getHex(defaultColorGroup, parsedShade, color, shade);
        return hex;
    }
    return black;
};
export const detectSystemTheme = () => {
    if (typeof window === "undefined")
        return;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const detectedTheme = systemTheme.matches ? "dark" : "light";
    return detectedTheme;
};
export const separateObjectByKey = ({ obj, keys, fallbackKey = "default", }) => {
    const responseObj = {};
    const defaultObj = Object.assign({}, obj);
    Object.entries(obj).forEach(([k, v]) => {
        for (const key of keys) {
            if (k.includes(key)) {
                if (!responseObj[key.toLowerCase()]) {
                    responseObj[key.toLowerCase()] = {};
                }
                responseObj[key.toLowerCase()][k] = v;
                delete defaultObj[k];
            }
        }
    });
    responseObj[fallbackKey.toLocaleLowerCase()] = defaultObj;
    return responseObj;
};
export const splitKeyAtChar = (obj, char) => {
    if (!isObject(obj))
        return obj;
    if (!char)
        return obj;
    return Object.entries(obj).reduce((acc, [key, value]) => {
        return Object.assign(Object.assign({}, acc), { [key.split(char)[0]]: value });
    }, {});
};
export const splitStringAtCapital = (string) => {
    return string.split(/(?=[A-Z])/);
};
const getNestedClassNameObjects = ({ key, value, enabledThemeModes, }) => {
    const classNamesArray = [];
    let [variant, paletteVariant = "color"] = splitStringAtCapital(key);
    paletteVariant = paletteVariant.toLowerCase();
    let shades = Object.entries(value);
    shades.forEach(([shade, classNames]) => {
        const shadeNumber = Number(shade);
        classNames.split(" ").forEach((className) => {
            const splitClassName = className.split(":");
            let altThemes = [];
            className = splitClassName[splitClassName.length - 1];
            if (makUiThemesSet.has(splitClassName[0])) {
                altThemes.push(splitClassName[0]);
            }
            else {
                altThemes.push(...enabledThemeModes);
            }
            for (const t of altThemes) {
                classNamesArray.push({
                    variant,
                    theme: t,
                    shade: shadeNumber,
                    paletteVariant,
                    className,
                });
            }
        });
    });
    return classNamesArray;
};
const getClassNameAsObject = ({ key, value, enabledThemeModes, }) => {
    const variant = makUiVariants.find((v) => {
        if (key.toLowerCase().includes(v)) {
            return v;
        }
    }) || "primary";
    const paletteVariant = makUiPalettes.find((v) => {
        if (key.toLowerCase().includes(v)) {
            return v;
        }
    }) || "color";
    let className;
    const classNamesArray = [];
    const splitClassName = value.split(":");
    const shade = (() => {
        for (let el of splitClassName) {
            let num = Number(el);
            if (makUiShadesSet.has(num)) {
                return num;
            }
        }
        return 500;
    })();
    let altThemes = [];
    let altShades = [];
    className = splitClassName[splitClassName.length - 1];
    if (makUiThemesSet.has(splitClassName[0])) {
        altThemes.push(splitClassName[0]);
    }
    else {
        altThemes.push(...enabledThemeModes);
    }
    splitClassName.forEach((cn) => {
        if (makUiShadesSet.has(Number(cn))) {
            altShades.push(Number(cn));
        }
    });
    for (const t of altThemes) {
        for (const s of altShades) {
            classNamesArray.push({
                variant,
                theme: t,
                shade: s,
                paletteVariant,
                className,
            });
        }
        classNamesArray.push({
            variant,
            theme: t,
            shade,
            paletteVariant,
            className,
        });
    }
    return classNamesArray;
};
export const extractInitialPalette = ({ palette, enabledThemeModes, tailwindConfig, }) => {
    let themePalette = {};
    for (const theme of enabledThemeModes) {
        themePalette[theme] = {};
    }
    let paletteObject = {};
    for (const [key, value] of Object.entries(palette)) {
        if (key === "theme") {
            if (typeof value === "string") {
                const classNamesArray = value.split(" ");
                let themeObject = {};
                for (const theme of enabledThemeModes) {
                    themeObject[theme] = undefined;
                }
                classNamesArray.forEach((className) => {
                    if (className.includes("dark:")) {
                        themeObject.dark = className.split(":")[1];
                    }
                    else if (className.includes("custom:")) {
                        themeObject.custom = className.split(":")[1];
                    }
                    else if (className.includes("light:")) {
                        themeObject.light = className.split(":")[1];
                    }
                    else {
                        for (const theme of enabledThemeModes) {
                            themeObject[theme] = className;
                        }
                    }
                });
                for (const [theme, classNames] of Object.entries(themeObject)) {
                    ensureNestedObject({
                        parent: paletteObject,
                        keys: [theme, "theme", "primary"],
                        value: classNames,
                    });
                }
                continue;
            }
            const themes = Object.entries(value);
            themes.forEach(([variant, classNames]) => {
                if (typeof classNames === "string") {
                    const splitClassNames = classNames.split(" ");
                    splitClassNames.forEach((className) => {
                        const splitClassName = className.split(":");
                        const color = splitClassName[splitClassName.length - 1];
                        const hex = twColorHelper({
                            colorString: color,
                            tailwindConfig,
                        }).hex;
                        const altThemes = [];
                        makUiThemesSet.has(splitClassName[0])
                            ? altThemes.push(splitClassName[0])
                            : altThemes.push(...enabledThemeModes);
                        for (const t of altThemes) {
                            ensureNestedObject({
                                parent: themePalette,
                                keys: [t, variant],
                                value: hex,
                            });
                        }
                    });
                }
            });
            continue;
        }
        if (isObject(value)) {
            const classNamesArray = getNestedClassNameObjects({
                key,
                value,
                enabledThemeModes,
            });
            for (const obj of classNamesArray) {
                const { variant, theme, paletteVariant, shade, className } = obj;
                const nestedObj = {};
                ensureNestedObject({
                    parent: nestedObj,
                    keys: [theme, paletteVariant, variant, shade === null || shade === void 0 ? void 0 : shade.toString()],
                    value: className,
                });
                paletteObject = deepMerge(nestedObj, paletteObject);
            }
        }
        else {
            for (const classNameString of value.split(" ")) {
                const classNamesArray = getClassNameAsObject({
                    key,
                    value: classNameString,
                    enabledThemeModes,
                });
                for (const obj of classNamesArray) {
                    const { variant, theme, paletteVariant, shade, className } = obj;
                    const shadeNumber = Number(shade);
                    const nestedObj = {};
                    ensureNestedObject({
                        parent: nestedObj,
                        keys: [theme, paletteVariant, variant, shadeNumber.toString()],
                        value: className,
                    });
                    paletteObject = deepMerge(nestedObj, paletteObject);
                }
            }
        }
    }
    if (!isEmptyObject(themePalette.light)) {
        ensureNestedObject({
            parent: paletteObject,
            keys: ["light", "theme"],
            value: themePalette.light,
        });
    }
    if (!isEmptyObject(themePalette.dark)) {
        ensureNestedObject({
            parent: paletteObject,
            keys: ["dark", "theme"],
            value: themePalette.dark,
        });
    }
    if (!isEmptyObject(themePalette.custom)) {
        ensureNestedObject({
            parent: paletteObject,
            keys: ["custom", "theme"],
            value: themePalette.custom,
        });
    }
    return paletteObject;
};
export const objectToClassName = (_a) => {
    var args = __rest(_a, []);
    return parseProps(Object.assign({}, args));
    function parseProps({ object, variant, allowedStates, allowedModifiers, }) {
        if (!isObject(object))
            return "";
        let parsedStringArray = [];
        if (!allowedStates || !allowedStates.has("not-base")) {
            allowedStates = new Set([...(allowedStates || []), "base"]);
        }
        let allowedObject = {};
        if (allowedStates === null || allowedStates === void 0 ? void 0 : allowedStates.size) {
            ;
            [...allowedStates].forEach((state) => {
                allowedObject[state] = object[state];
            });
        }
        Object.entries(allowedObject).forEach(([key, value]) => {
            if (key === "not-base")
                return;
            if (key === "base") {
                parsedStringArray.push(`${variant}-${value}`);
                return;
            }
            else {
                parsedStringArray.push(`${key}:${variant}-${value}`);
                if (allowedModifiers === null || allowedModifiers === void 0 ? void 0 : allowedModifiers.size) {
                    ;
                    [...allowedModifiers].forEach((modifier) => {
                        parsedStringArray.push(`${modifier}-${key}:${variant}-${value}`);
                    });
                }
            }
        });
        return parsedStringArray.join(" ");
    }
};
export const parseClassNameToStyleObject = ({ className = "", makClassName = undefined, activeTheme, currentThemeMode, }) => {
    const makRegex = /mak\((.*?)\)/g;
    const whiteSpaceRegex = /[ \t\r\n]+/;
    const makClassNamesArray = [];
    const twClassNamesArray = [];
    if (makClassName) {
        makClassNamesArray.push(...makClassName.split(" "));
    }
    if (className && className.includes("mak(")) {
        className = className.replace(/mak\(\)/g, "");
        let match;
        while ((match = makRegex.exec(className)) !== null) {
            makClassNamesArray.push(...match[1].split(" "));
        }
        const outside = className
            .replace(makRegex, "")
            .replace(whiteSpaceRegex, " ")
            .trim()
            .split(" ");
        if (outside.length) {
            twClassNamesArray.push(...outside);
        }
    }
    else if (className && !className.includes("mak(")) {
        twClassNamesArray.push(...className.split(" "));
    }
    makClassName = makClassNamesArray.join(" ");
    let twClassName = twClassNamesArray.length
        ? twClassNamesArray.join(" ")
        : undefined;
    const { baseClassObject, pseudoClassObject, unresolved } = parseMakClassNames({
        makClassName,
        activeTheme,
        currentThemeMode,
    });
    const styleObject = { baseClassObject, pseudoClassObject };
    return { styleObject, twClassName, makClassName };
};
const separateTwModifiers = (className) => {
    if (!className || typeof className !== "string")
        return {
            className,
            modifiersArray: [],
            modifiers: "",
            media: undefined,
        };
    // Regex to capture the last segment after the last colon and the rest before it
    const regex = /^(.*?):([^:]+)$/;
    const match = className.match(regex);
    let media = undefined;
    if (match) {
        const modifiers = match[1];
        const finalClassName = match[2];
        // Splitting modifiers on colon, but keeping group-* and peer-* together with their /<identifier>
        const modifiersSet = new Set(modifiers.split(/(?<!\/\w+):/));
        for (const mediaQuery of Object.keys(mediaQueries)) {
            if (modifiersSet.has(mediaQuery)) {
                media = mediaQuery;
            }
        }
        const modifiersArray = [...modifiersSet.values()];
        return {
            modifiers,
            modifiersArray,
            media,
            className: finalClassName,
        };
    }
    else {
        return {
            modifiers: "",
            modifiersArray: [],
            media,
            className,
        };
    }
};
export const parseMakClassNames = ({ makClassName, activeTheme, currentThemeMode, }) => {
    var _a, _b, _c, _d;
    makClassName = makClassName === null || makClassName === void 0 ? void 0 : makClassName.replace(/\s+/g, " ").trim();
    if (!makClassName || makClassName === "")
        return {};
    const makClassNamesArray = (makClassName === null || makClassName === void 0 ? void 0 : makClassName.split(" ")) || [];
    const styleMap = new Map();
    const modifierMap = new Map();
    const modifierSet = new Set();
    const unresolvedClasses = [];
    if (makClassNamesArray.length > 0) {
        for (const makClassName of makClassNamesArray) {
            const { className, modifiers, modifiersArray, media } = separateTwModifiers(makClassName);
            const classNameObj = {};
            let key = "backgroundColor";
            let paletteVariant = undefined;
            let modifier = undefined;
            let variant = "primary";
            let shade = undefined;
            let mcn;
            let opacity = undefined;
            let color;
            let altPaletteVariant = undefined;
            const keyMap = {
                bg: "backgroundColor",
                text: "color",
                border: "borderColor",
                theme: "backgroundColor",
                color: "backgroundColor",
                outline: "outlineColor",
                ring: "outlineColor",
                "ring-offset": "boxShadow",
                divide: "borderColor",
            };
            modifier = modifiers;
            mcn = className;
            opacity = mcn === null || mcn === void 0 ? void 0 : mcn.split("/")[1];
            mcn = mcn === null || mcn === void 0 ? void 0 : mcn.split("/")[0];
            variant =
                ((_a = mcn === null || mcn === void 0 ? void 0 : mcn.split(`${paletteVariant}-`)) === null || _a === void 0 ? void 0 : _a[1]) || "primary";
            paletteVariant =
                (mcn === null || mcn === void 0 ? void 0 : mcn.split("-")[0]) || "bg";
            variant =
                (mcn === null || mcn === void 0 ? void 0 : mcn.split("-")[1]) ||
                    "primary";
            if (variant.includes("|")) {
                const splitVariant = variant.split("|");
                variant = splitVariant[1];
                altPaletteVariant = splitVariant[0];
            }
            let shadeString = mcn === null || mcn === void 0 ? void 0 : mcn.split("-")[2];
            if (!shadeString) {
                if (variant === "light") {
                    shadeString = "100";
                }
                else if (variant === "dark") {
                    shadeString = "900";
                }
                else {
                    shadeString = "500";
                }
            }
            shade = Number(shadeString);
            let resolvedVariant = altPaletteVariant || paletteVariant;
            if (resolvedVariant !== "theme") {
                color = (_c = (_b = activeTheme === null || activeTheme === void 0 ? void 0 : activeTheme[resolvedVariant]) === null || _b === void 0 ? void 0 : _b[variant]) === null || _c === void 0 ? void 0 : _c[shade];
                if (!color) {
                    let twKey = mcn;
                    twKey = twKey.split("-").slice(1).join("-");
                    if (twKey.charAt(0) === "#") {
                        color = twKey;
                    }
                    else {
                        const twColor = twColors[twKey];
                        color = twColor;
                    }
                }
            }
            else {
                color = (_d = activeTheme.theme) === null || _d === void 0 ? void 0 : _d[variant];
            }
            if (opacity && color) {
                color = chroma(color)
                    .alpha(Number(opacity) / 100)
                    .css();
            }
            if (modifiersArray.length) {
                let modifierCSSKeysArray = [];
                const utilityKey = keyMap[paletteVariant];
                const rootCSS = { [utilityKey]: color };
                modifiersArray.forEach((modifier) => {
                    let modifierKey = tailwindToCssModifierObject === null || tailwindToCssModifierObject === void 0 ? void 0 : tailwindToCssModifierObject[modifier];
                    if (typeof modifierKey === "string") {
                        modifierCSSKeysArray.push(modifierKey);
                    }
                    if (typeof modifierKey === "function") {
                        let modifierAndClassNameString = `.${modifiersArray.join(":")}:${className}`;
                        const escapedClassName = modifierAndClassNameString.replace(/([:\|\[\]{}()+>~!@#$%^&*=/"'`;,\\])/g, "\\$&");
                        const selector = `${escapedClassName}`;
                        const resolvedModifierFn = modifierKey(selector, "");
                        modifierCSSKeysArray.push(resolvedModifierFn);
                    }
                });
                ensureNestedObject({
                    parent: classNameObj,
                    keys: modifierCSSKeysArray,
                    value: rootCSS,
                });
                modifierSet.add(classNameObj);
            }
            else if (paletteVariant && color) {
                key = keyMap[paletteVariant];
                styleMap.set(key, color);
            }
            else {
                unresolvedClasses.push(makClassName);
            }
        }
    }
    const modifierArray = Array.from(modifierSet);
    const mergedModifiers = deepMerge(...modifierArray);
    const pseudoClassObject = mergedModifiers;
    const baseClassObject = Object.fromEntries(styleMap);
    const unresolved = unresolvedClasses.length
        ? unresolvedClasses.join(" ")
        : undefined;
    return {
        pseudoClassObject,
        baseClassObject,
        unresolved,
    };
};
export const ensureUtilityClass = (utility, className) => {
    if (!utility) {
        className = utility;
        utility = "bg-";
    }
    if (!utility.includes("-"))
        utility = `${utility}-`;
    if (!className.includes(utility)) {
        return `${utility}${className}`;
    }
    else {
        className = className.split(utility)[1] || className.split(utility)[0];
        className = `${utility}${className}`;
    }
    return className;
};
export const mergeClassNames = (...props) => {
    return props.join(" ");
};
export const mergeDefaultConfig = ({ makUi, useConfig, component, className, makClassName, }) => {
    var _a;
    className = className
        ? className.trim().replace(/^undefined /g, "")
        : undefined;
    makClassName = makClassName
        ? makClassName.trim().replace(/^undefined /g, "")
        : undefined;
    if (!component)
        return {
            componentConfig: undefined,
            componentClassName: className,
            componentMakClassName: makClassName,
            defaultClassName: undefined,
            defaultMakClassName: undefined,
            resolvedClassName: className,
            resolvedMakClassName: makClassName,
        };
    const componentConfig = (_a = makUi.componentConfig) === null || _a === void 0 ? void 0 : _a[component];
    const defaultClassName = componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.className;
    const defaultMakClassName = componentConfig === null || componentConfig === void 0 ? void 0 : componentConfig.makClassName;
    const componentClassName = className;
    const componentMakClassName = makClassName;
    let resolvedClassName;
    let resolvedMakClassName;
    if (useConfig) {
        resolvedClassName = [defaultClassName || "", componentClassName || ""]
            .join(" ")
            .trim();
        resolvedMakClassName = [defaultMakClassName, componentMakClassName]
            .join(" ")
            .trim();
    }
    else {
        resolvedClassName = componentClassName;
        resolvedMakClassName = componentMakClassName;
    }
    return {
        componentConfig,
        defaultClassName,
        defaultMakClassName,
        componentClassName,
        componentMakClassName,
        resolvedClassName,
        resolvedMakClassName,
    };
};
export const formatJsonToHtmlString = (jsonObject) => {
    return Object.entries(jsonObject)
        .map(([key, value]) => {
        if (typeof value === "object") {
            return `${key}: {${formatJsonToHtmlString(value)}}`;
        }
        else {
            return `${key}: ${value}`;
        }
    })
        .join("; ");
};
