import { extractInitialPalette, getConstructedTheme, getConstructedShades, ensureNestedObject, } from "../functions/helpers";
import { makUiDefaultColors, makUiDefaultPalette, makUiPalettes, makUiVariants, } from "../constants/ui-constants";
export const paletteFactory = ({ paletteInput, enabledThemeModes, defaultShades, shadeStep, includeBlackAndWhite, includeNearAbsolutes, altBlack, altWhite, tailwindConfig, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const initialVerbosePalette = extractInitialPalette({
        palette: paletteInput,
        enabledThemeModes,
        tailwindConfig,
    });
    let finalVerbosePalette = {};
    let finalSimplePalette = {};
    for (const theme of enabledThemeModes) {
        for (const paletteVariant of makUiPalettes) {
            if (paletteVariant === "theme") {
                if ((_a = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _a === void 0 ? void 0 : _a["theme"]) {
                    const providedVariants = initialVerbosePalette[theme].theme;
                    const constructedTheme = getConstructedTheme({
                        providedVariants,
                        theme,
                        defaultShades: defaultShades,
                        altBlack,
                        altWhite,
                        tailwindConfig,
                    });
                    ensureNestedObject({
                        parent: finalVerbosePalette,
                        keys: [theme, paletteVariant],
                        value: constructedTheme,
                    });
                    ensureNestedObject({
                        parent: finalSimplePalette,
                        keys: [theme, paletteVariant],
                        value: constructedTheme,
                    });
                }
                else {
                    const defaultVariant = makUiDefaultPalette[theme].theme;
                    const constructedTheme = getConstructedTheme({
                        providedVariants: defaultVariant,
                        theme,
                        defaultShades: defaultShades,
                        altBlack,
                        altWhite,
                        tailwindConfig,
                    });
                    ensureNestedObject({
                        parent: finalVerbosePalette,
                        keys: [theme, paletteVariant],
                        value: constructedTheme,
                    });
                    ensureNestedObject({
                        parent: finalSimplePalette,
                        keys: [theme, paletteVariant],
                        value: constructedTheme,
                    });
                }
                continue;
            }
            for (const variant of makUiVariants) {
                if ((_c = (_b = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _b === void 0 ? void 0 : _b[paletteVariant]) === null || _c === void 0 ? void 0 : _c[variant]) {
                    const providedShades = initialVerbosePalette[theme][paletteVariant][variant];
                    const constructedShades = getConstructedShades({
                        defaultColor: makUiDefaultColors[variant],
                        middleHex: providedShades === null || providedShades === void 0 ? void 0 : providedShades["500"],
                        providedShades,
                        variant: variant,
                        steps: shadeStep,
                        includeBlackAndWhite,
                        includeNearAbsolutes,
                        altBlack,
                        altWhite,
                        tailwindConfig,
                    });
                    ensureNestedObject({
                        parent: finalVerbosePalette,
                        keys: [theme, paletteVariant, variant],
                        value: constructedShades,
                    });
                    ensureNestedObject({
                        parent: finalSimplePalette,
                        keys: [theme, paletteVariant, variant],
                        value: {
                            "0": constructedShades["0"],
                            "50": constructedShades["50"],
                            "100": constructedShades["100"],
                            "200": constructedShades["200"],
                            "300": constructedShades["300"],
                            "400": constructedShades["400"],
                            "500": constructedShades["500"],
                            "600": constructedShades["600"],
                            "700": constructedShades["700"],
                            "800": constructedShades["800"],
                            "900": constructedShades["900"],
                            "950": constructedShades["950"],
                            "1000": constructedShades["1000"],
                        },
                    });
                    if (paletteVariant === "color" &&
                        !((_e = (_d = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _d === void 0 ? void 0 : _d.border) === null || _e === void 0 ? void 0 : _e[variant])) {
                        ensureNestedObject({
                            parent: finalVerbosePalette,
                            keys: [theme, "border", variant],
                            value: constructedShades,
                        });
                        ensureNestedObject({
                            parent: finalSimplePalette,
                            keys: [theme, "border", variant],
                            value: {
                                "0": constructedShades["0"],
                                "50": constructedShades["50"],
                                "100": constructedShades["100"],
                                "200": constructedShades["200"],
                                "300": constructedShades["300"],
                                "400": constructedShades["400"],
                                "500": constructedShades["500"],
                                "600": constructedShades["600"],
                                "700": constructedShades["700"],
                                "800": constructedShades["800"],
                                "900": constructedShades["900"],
                                "950": constructedShades["950"],
                                "1000": constructedShades["1000"],
                            },
                        });
                    }
                }
                else if (!((_g = (_f = initialVerbosePalette === null || initialVerbosePalette === void 0 ? void 0 : initialVerbosePalette[theme]) === null || _f === void 0 ? void 0 : _f[paletteVariant]) === null || _g === void 0 ? void 0 : _g[variant]) &&
                    !((_j = (_h = finalVerbosePalette === null || finalVerbosePalette === void 0 ? void 0 : finalVerbosePalette[theme]) === null || _h === void 0 ? void 0 : _h[paletteVariant]) === null || _j === void 0 ? void 0 : _j[variant])) {
                    const constructedShades = getConstructedShades({
                        middleHex: makUiDefaultColors === null || makUiDefaultColors === void 0 ? void 0 : makUiDefaultColors[variant],
                        variant: variant,
                        steps: shadeStep,
                        includeBlackAndWhite,
                        includeNearAbsolutes,
                        altBlack,
                        altWhite,
                        hexPosition: variant === "dark" ? 1000 : variant === "light" ? 0 : 500,
                        tailwindConfig,
                    });
                    ensureNestedObject({
                        parent: finalVerbosePalette,
                        keys: [theme, paletteVariant, variant],
                        value: constructedShades,
                    });
                    ensureNestedObject({
                        parent: finalSimplePalette,
                        keys: [theme, paletteVariant, variant],
                        value: {
                            "0": constructedShades["0"],
                            "50": constructedShades["50"],
                            "100": constructedShades["100"],
                            "200": constructedShades["200"],
                            "300": constructedShades["300"],
                            "400": constructedShades["400"],
                            "500": constructedShades["500"],
                            "600": constructedShades["600"],
                            "700": constructedShades["700"],
                            "800": constructedShades["800"],
                            "900": constructedShades["900"],
                            "950": constructedShades["950"],
                            "1000": constructedShades["1000"],
                        },
                    });
                }
            }
        }
    }
    Object.defineProperties(finalVerbosePalette.dark, {
        bg: {
            get() {
                return finalVerbosePalette.dark.color;
            },
        },
        divide: {
            get() {
                return finalVerbosePalette.dark.border;
            },
        },
        // ring: {
        //   get() {
        //     return finalVerbosePalette.dark.border
        //   },
        // },
        // outline: {
        //   get() {
        //     return finalVerbosePalette.dark.border
        //   },
        // },
        // "ring-offset": {
        //   get() {
        //     return finalVerbosePalette.dark.border
        //   },
        // },
    });
    Object.defineProperties(finalVerbosePalette.light, {
        bg: {
            get() {
                return finalVerbosePalette.light.color;
            },
        },
        // ring: {
        //   get() {
        //     return finalVerbosePalette.dark.border
        //   },
        // },
        // outline: {
        //   get() {
        //     return finalVerbosePalette.dark.border
        //   },
        // },
        // "ring-offset": {
        //   get() {
        //     return finalVerbosePalette.dark.border
        //   },
        // },
    });
    return {
        verbose: finalVerbosePalette,
        simple: finalSimplePalette,
    };
};
