// import fs from "fs"
// import path from "path"
import chroma from "chroma-js"
import {
  DefaultColors,
  GenericObject,
  MakUiDefaultColors,
  MakUiDefaultStateColors,
  MakUiFlexiblePaletteInput,
  MakUiPaletteInput,
  MakUiPaletteKey,
  MakUiState,
  MakUiStateKey,
  MakUiStateShades,
  MakUiThemeShades,
  MakUiThemeShadesInput,
  MakUiThemeVariantShades,
  MakUiVariantKey,
  MakUiVerbosePalette,
  MakUiVerboseShades,
  MakUiVerboseTheme,
  NestedObject,
  Shade,
  TailwindCustomColors,
  MakUiThemeKey,
  MakUiVerboseThemeVariant,
  TWColorHelperResponse,
  ObjectToClassNameObjectProp,
  ClassObject,
  MakUiRootComponentConfig,
} from "../types/index"
import colors from "tailwindcss/colors"
import { twColors } from "../constants/tailwind-colors"

import {
  makUiDefaultColors,
  makUiDefaultStateShades,
  makUiDefaultThemeShades,
  makUiPalettes,
  makUiShadesSet,
  makUiThemesSet,
  makUiVariants,
  mediaQueries,
  tailwindToCssModifierObject,
  twModifierSet,
  twToCssKeyMap,
} from "../constants/ui-constants"

import { useMakUi } from "../context/useMakUi"

export const setLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") return
  if (typeof value === "object") {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const getLocalStorage = (key: string): string | null | undefined => {
  if (typeof window === "undefined") return
  return window.localStorage.getItem(key)
}

export const removeLocalStorage = (key: string) => {
  if (typeof window === "undefined") return
  window.localStorage.removeItem(key)
}

export const mergeWithFallback = (
  primary: Record<string, any>,
  ...fallbacks: Array<Record<string, any> | undefined>
): Record<string, any> => {
  let result: Record<string, any> = {}

  fallbacks.forEach((fallback) => {
    if (isObject(fallback) && !isEmptyObject(fallback))
      Object.keys(fallback).forEach((key) => {
        if (result[key] === undefined) {
          result[key] = fallback[key]
        }
      })
  })

  return { ...result, ...primary }
}

export const nearestMultiple = (
  num: number,
  multiple: number,
  roundDir: "up" | "down" | "nearest" = "nearest"
) => {
  const delta =
    roundDir === "up" ? multiple : roundDir === "down" ? -multiple : 0
  const remainder = num % multiple
  return remainder === 0 ? num + delta : num + multiple - remainder + delta
}

export const ensureNestedObject = <T>({
  parent,
  keys,
  value,
}: {
  parent: T
  keys?: (keyof T | string | number | undefined)[]
  value?: any
}) => {
  keys = keys ? keys.filter((k) => k) : []
  let current: any = parent

  if (!keys || keys.length === 0) return current

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]

    if (i === keys.length - 1 && value !== undefined) {
      current[key] = value
    } else {
      current[key] = current[key] || {}
    }
    current = current[key]
  }

  return current
}

export const allowFalsyFallback = <T>(value: T, fallback: T) => {
  return value ||
    value === 0 ||
    value === false ||
    value === null ||
    value === undefined
    ? value
    : fallback
}

export const isEmptyObject = (obj: GenericObject | undefined) => {
  if (obj === undefined) return false

  return isObject(obj) && Object.keys(obj).length === 0
}

export const isNestedObject = (obj: GenericObject) =>
  isObject(obj) && Object.values(obj).some(isObject)

export const isObject = (v: any): v is GenericObject =>
  v !== null &&
  typeof v === "object" &&
  !Array.isArray(v) &&
  typeof v !== "string"

export const deepMerge = (...objects: (GenericObject | undefined)[]) => {
  const result = {}

  const merge = (target: GenericObject, source: GenericObject) => {
    Object.keys(source).forEach((key) => {
      if (source[key] && typeof source[key] === "object") {
        target[key] = target[key] || {}
        merge(target[key], source[key])
      } else {
        target[key] = source[key]
      }
    })
  }

  for (const obj of objects) {
    if (!isObject(obj)) continue
    merge(result, obj)
  }

  return result
}

export const constructTailwindObject = ({
  hex,
  step = 100,
  includeNearAbsolutes = true,
  hexPosition = 500,
  includeBlackAndWhite = true,
  blackHex = "#000000",
  whiteHex = "#FFFFFF",
  tailwindConfig,
}: {
  hex: string
  step?: number
  includeNearAbsolutes?: boolean
  hexPosition?: number
  includeBlackAndWhite?: boolean
  blackHex?: string
  whiteHex?: string
  tailwindConfig: any
}): MakUiVerboseShades => {
  if (hex.includes("-") || hex.charAt(0) !== "#") {
    hex = twColorHelper({ colorString: hex, tailwindConfig }).hex
  }
  if (hex.includes("#white") || hex === "white") {
    hex = "#ffffff"
  }
  if (hex.includes("#black") || hex === "black") {
    hex = "#000000"
  }

  const tailwindColors = {} as MakUiVerboseShades

  const scale2Start = Math.max(0, hexPosition)

  const scale1 = chroma
    .scale([whiteHex, hex])
    .mode("rgb")
    .domain([0, hexPosition])
  const scale2 = chroma
    .scale([hex, blackHex])
    .mode("rgb")
    .domain([scale2Start, 1000])

  const getColor = (i: number) => {
    return i <= hexPosition ? scale1(i).hex() : scale2(i).hex()
  }

  for (let i = 0; i <= 1000; i += step) {
    tailwindColors[i] = getColor(i)
  }

  if (includeNearAbsolutes) {
    tailwindColors[50] = getColor(50)
    tailwindColors[950] = getColor(950)
  }

  if (includeBlackAndWhite) {
    tailwindColors[0] = whiteHex
    tailwindColors[1000] = blackHex
  }

  return tailwindColors
}

export const getThemeShadesObj = (shades?: MakUiThemeShadesInput) => {
  const lightPrimary = shades?.light?.primary || getNormalizedShadeNumber(50)
  const lightSecondary =
    shades?.light?.secondary || getNormalizedShadeNumber(lightPrimary + 50)
  const lightTertiary =
    shades?.light?.tertiary || getNormalizedShadeNumber(lightSecondary + 100)
  const lightCustom = shades?.light?.custom || getNormalizedShadeNumber(950)

  const darkPrimary = shades?.dark?.primary || getNormalizedShadeNumber(950)
  const darkSecondary =
    shades?.dark?.secondary || getNormalizedShadeNumber(darkPrimary - 50)
  const darkTertiary =
    shades?.dark?.tertiary || getNormalizedShadeNumber(darkSecondary - 100)
  const darkCustom = shades?.dark?.custom || getNormalizedShadeNumber(50)

  const customPrimary = shades?.custom?.primary || getNormalizedShadeNumber(500)
  const customSecondary =
    shades?.custom?.secondary || getNormalizedShadeNumber(customPrimary + 100)
  const customTertiary =
    shades?.custom?.tertiary || getNormalizedShadeNumber(customPrimary + 200)
  const customCustom =
    shades?.custom?.custom || getNormalizedShadeNumber(customPrimary + 300)

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
  }
  return responseObj
}

const includesShade = (string: string) => {
  if (!string) return false
  const splitString = string.split("-")
  const shade = splitString[splitString.length - 1]
  return !!parseInt(shade)
}

const getNormalizedShadeNumber = (num: number) => {
  if (num !== 0 && (!num || typeof num !== "number")) return 500
  return num <= 50 ? 50 : num >= 950 ? 950 : Math.round(num / 100) * 100
}

export const getConstructedTheme = ({
  providedVariants,
  theme,
  defaultShades,
  altBlack,
  altWhite,
  tailwindConfig,
}: {
  providedVariants: MakUiVerboseThemeVariant
  theme: MakUiThemeKey
  defaultShades: MakUiThemeShades
  altBlack: string
  altWhite: string
  tailwindConfig: any
}) => {
  const { primary, secondary, tertiary, custom, light, dark } = providedVariants
  const blackHex = twColorHelper({ colorString: altBlack, tailwindConfig }).hex
  const whiteHex = twColorHelper({ colorString: altWhite, tailwindConfig }).hex
  const {
    shade: primaryShade,
    color: primaryColor,
    hex: primaryHex,
  } = twColorHelper({
    colorString: primary || makUiDefaultColors.primary,
    shade: includesShade(primary) ? undefined : defaultShades[theme].primary,
    useDefaults: false,
    tailwindConfig,
  })
  const {
    shade: secondaryShade,
    color: secondaryColor,
    hex: secondaryHex,
  } = twColorHelper({
    colorString: secondary,
    useDefaults: false,
    tailwindConfig,
  })
  const {
    shade: tertiaryShade,
    color: tertiaryColor,
    hex: tertiaryHex,
  } = twColorHelper({
    colorString: tertiary,
    useDefaults: false,
    tailwindConfig,
  })
  const {
    shade: customShade,
    color: customColor,
    hex: customHex,
  } = twColorHelper({
    colorString: custom,
    useDefaults: false,
    tailwindConfig,
  })

  const {
    shade: lightShade,
    color: lightColor,
    hex: lightHex,
  } = twColorHelper({
    colorString: light || "white",
    useDefaults: false,
    tailwindConfig,
  })
  const {
    shade: darkShade,
    color: darkColor,
    hex: darkHex,
  } = twColorHelper({
    colorString: dark || "black",
    useDefaults: false,
    tailwindConfig,
  })

  const defaultShadesObj = makUiDefaultThemeShades[theme]
  const shadeDiffs = Object.entries(defaultShadesObj).reduce(
    (acc, [variant, shade]) => {
      if (variant === "primary") {
        ;(acc as MakUiThemeVariantShades)[variant] = 0
      } else {
        let value = (shade as Shade) - defaultShadesObj["primary"]
        const isNeg = value < 0 ? -1 : 1
        const absValue = Math.abs(value)
        value = Math.round(absValue / 100) * 100 * isNeg
        ;(acc as MakUiThemeVariantShades)[
          variant as keyof MakUiThemeVariantShades
        ] = value
      }
      return acc
    },
    {}
  ) as MakUiThemeVariantShades
  const resolvedPrimaryShade = includesShade(primary)
    ? primaryShade
    : defaultShades[theme].primary
  const resolvedShadesObject = {
    primary: resolvedPrimaryShade,
    secondary: includesShade(secondary)
      ? secondaryShade
      : getNormalizedShadeNumber(resolvedPrimaryShade! + shadeDiffs.secondary),
    tertiary: includesShade(tertiary)
      ? tertiaryShade
      : getNormalizedShadeNumber(resolvedPrimaryShade! + shadeDiffs.tertiary),
    custom: includesShade(custom)
      ? customShade
      : getNormalizedShadeNumber(resolvedPrimaryShade! + shadeDiffs.custom),
    light: includesShade(light)
      ? lightShade
      : getNormalizedShadeNumber(resolvedPrimaryShade! + shadeDiffs.light),
    dark: includesShade(dark)
      ? darkShade
      : getNormalizedShadeNumber(resolvedPrimaryShade! + shadeDiffs.dark),
  }

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
  }

  const themeResponse = {
    primary: primaryHex || resolvedThemeObject.primary.hex,
    secondary: secondaryHex || resolvedThemeObject.secondary.hex,
    tertiary: tertiaryHex || resolvedThemeObject.tertiary.hex,
    custom: customHex || resolvedThemeObject.custom.hex,
    light: lightHex || resolvedThemeObject.light.hex,
    dark: darkHex || resolvedThemeObject.dark.hex,
    black: resolvedThemeObject.blackHex,
    white: resolvedThemeObject.whiteHex,
  }

  return themeResponse
}

export const getConstructedShades = ({
  defaultColor,
  middleHex,
  providedShades,
  steps = 50,
  variant,
  includeBlackAndWhite = true,
  includeNearAbsolutes = true,
  altBlack = "#000000",
  altWhite = "#FFFFFF",
  hexPosition,
  tailwindConfig,
}: {
  defaultColor?: string
  middleHex?: string
  providedShades?: Record<string, string>
  steps?: number
  variant: MakUiVariantKey
  includeBlackAndWhite?: boolean
  includeNearAbsolutes?: boolean
  altBlack?: string
  altWhite?: string
  hexPosition?: number
  tailwindConfig: any
}): MakUiVerboseShades => {
  const finalShades = {} as MakUiVerboseShades
  let shadeHex: string
  const blackHex = twColorHelper({ colorString: altBlack, tailwindConfig }).hex
  const whiteHex = twColorHelper({ colorString: altWhite, tailwindConfig }).hex

  if (!middleHex) {
    let fallbackPosition = Object.keys(providedShades || {})?.[0]
    const fallBackProvidedColor = Object.values(providedShades || {})?.[0]
    const fallBack =
      fallBackProvidedColor || defaultColor || makUiDefaultColors[variant]
    const resolvedFallBackObject = twColorHelper({
      colorString: fallBack,
      tailwindConfig,
    })

    const resolvedTailwindColors = constructTailwindObject({
      hex: resolvedFallBackObject.hex,
      step: steps,
      includeBlackAndWhite,
      includeNearAbsolutes,
      blackHex,
      whiteHex,
      hexPosition: Number(fallbackPosition),
      tailwindConfig,
    })

    for (const [shade, color] of Object.entries(resolvedTailwindColors)) {
      if (providedShades && providedShades[shade]) {
        const twObj = twColorHelper({
          colorString: providedShades[shade],
          tailwindConfig,
        })
        shadeHex = twObj.hex
      } else {
        shadeHex = color
      }
      const shadeNumber = Number(shade)
      finalShades[shadeNumber] = shadeHex
    }
    return finalShades
  } else {
    const tailwindColors = constructTailwindObject({
      hex: middleHex,
      step: steps,
      includeBlackAndWhite,
      includeNearAbsolutes,
      blackHex,
      whiteHex,
      hexPosition,
      tailwindConfig,
    })
    for (const [shade, color] of Object.entries(tailwindColors)) {
      if (providedShades && providedShades[shade]) {
        const twObj = twColorHelper({
          colorString: providedShades[shade],
          tailwindConfig,
        })
        shadeHex = twObj.hex
      } else {
        shadeHex = color
      }
      const shadeNumber = Number(shade)
      finalShades[shadeNumber] = shadeHex
    }
    return finalShades
  }
}

export const getOpacity = ({
  opacityValue,
  override,
}: {
  opacityValue?: string | number | null | undefined
  override?: string | number | null | undefined
}): {
  string: string
  value: number
} => {
  if (override !== undefined) {
    return {
      string: `/${nearestMultiple(Number(override), 5)}`,
      value: Number(override),
    }
  }

  let opacityNum = 100

  if (typeof opacityValue === "string") {
    opacityNum = Number(opacityValue)
  } else if (opacityValue === undefined || opacityValue === null) {
    opacityNum = 100
  } else if (opacityValue === 0) {
    opacityNum = 0
  } else {
    opacityNum = Number(opacityValue) || 100
  }
  const opacityString = `/${nearestMultiple(opacityNum, 5)}`
  return {
    string: opacityString,
    value: opacityNum,
  }
}

export const generateDefaultShadesDiffOject = ({
  defaultShades = makUiDefaultStateShades,
}: {
  defaultShades?: MakUiStateShades
}) => {
  let defaultShadesDiffObject = {} as MakUiStateShades
  const baseShade = defaultShades.base
  Object.entries(defaultShades).forEach(([state, shade]) => {
    const shadeDiff = shade - baseShade
    defaultShadesDiffObject[state as MakUiStateKey] = shadeDiff
  })
  return defaultShadesDiffObject
}

export const generateDefaultStatesObject = ({
  defaultShades = makUiDefaultStateShades,
  defaultColor = "zinc",
  baseShade = 500,
  multiplier = 1,
}: {
  defaultShades?: MakUiStateShades
  defaultColor?: string
  baseShade?: number
  multiplier?: number
}) => {
  const shadesDiff = generateDefaultShadesDiffOject({ defaultShades })
  const isAbsoluteColor = defaultColor === "white" || defaultColor === "black"

  let defaultStatesObject = {} as MakUiState
  for (const [state, diff] of Object.entries(shadesDiff)) {
    const shade = baseShade + diff * multiplier
    if (isAbsoluteColor) {
      defaultStatesObject[state as MakUiStateKey] = defaultColor
    } else {
      defaultStatesObject[
        state as MakUiStateKey
      ] = `${defaultColor}-${getNormalizedShadeNumber(shade)}`
    }
  }

  return defaultStatesObject
}

export const twColorHelper = ({
  colorString,
  opacity,
  shade,
  useDefaults = true,
  defaults = makUiDefaultColors,
  defaultKey = "primary",
  tailwindConfig,
}: {
  colorString?: string | undefined | null
  opacity?: number | string | undefined | null
  shade?: number | string | undefined | null
  useDefaults?: boolean
  defaults?: MakUiDefaultColors | MakUiDefaultStateColors
  defaultKey?: keyof MakUiDefaultColors | keyof MakUiDefaultStateColors
  tailwindConfig: any
}): TWColorHelperResponse => {
  if (colorString?.includes("#")) {
    const hex = colorString

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
    }
  }
  let defaultValue
  if (makUiVariants.includes(defaultKey as MakUiVariantKey)) {
    defaults as MakUiDefaultColors
    defaultValue = (defaults as MakUiDefaultColors)[
      defaultKey as keyof MakUiDefaultColors
    ]
  } else {
    defaults as MakUiDefaultStateColors
    defaultValue = (defaults as MakUiDefaultStateColors)[
      defaultKey as keyof MakUiDefaultStateColors
    ]
  }

  let autoShade = true
  if (typeof shade === "string" || typeof shade === "number") {
    autoShade = false
  }
  let autoColor = !!colorString

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
    }
  }

  const absoluteRegex =
    /^((white|black)\/\[*0*(?:[0-9][0-9]?|100)%*\]*|(white|black))$/

  const isAbsoluteColor = !colorString
    ? false
    : absoluteRegex.test(colorString) ||
      colorString === "white" ||
      colorString === "black"
  if (isAbsoluteColor && !!colorString) {
    const [absoluteColor, absoluteOpacity] = colorString.split("/")
    const { string, value } = getOpacity({
      opacityValue: absoluteOpacity,
      override: opacity,
    })

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
    }
  } else {
    if (isObject(colorString) && Object.values(colorString)[0]) {
      colorString = Object.values(colorString)[0]
      autoColor = false
    } else if (!colorString) {
      colorString = defaultValue
      autoColor = true
      autoShade = false
    }
    const colorArr = colorString!.split("-")
    autoShade = !parseInt(colorArr[colorArr.length - 1])

    const lastElement = colorArr[colorArr.length - 1]
    let shadeAndOpacity
    let color
    let variableShade
    let variableOpacity

    if (lastElement.includes("/")) {
      shadeAndOpacity = colorArr.pop()
      const shadeAndOpacityArr = shadeAndOpacity?.split("/")
      color = colorArr.join("-")
      variableShade = shade || shadeAndOpacityArr?.[0]
      variableOpacity = shadeAndOpacityArr?.[1].replace(/\D/g, "")
    } else {
      const includesShade = Number(lastElement) > 0
      const computedShade = includesShade ? colorArr.pop() : 500
      variableShade = shade || computedShade
      if (variableShade && Number(variableShade) < 50)
        variableShade = getNormalizedShadeNumber(Number(variableShade))
      variableOpacity = 100
      color = colorArr.join("-")
    }
    variableShade = Number(variableShade)
    const opacityObj = getOpacity({
      opacityValue: variableOpacity,
      override: opacity,
    })

    if (variableShade > 50 && variableShade < 950) {
      variableShade = nearestMultiple(variableShade, 100)
    }

    const hex = getTwHex({
      color,
      shade: variableShade,
      absolute: false,
      tailwindConfig,
    })

    const isTwColor = !!color && !!variableShade
    return {
      absolute: false,
      isTwColor,
      opacity: opacityObj.value,
      shade: Number(variableShade),
      autoShade,
      autoColor,
      color: color || (makUiDefaultColors.primary! as string),
      colorString: `${color}-${variableShade}${opacityObj.string}`,
      rootString: `${color}-${variableShade}`,
      hex,
    }
  }
}

export const concatNestedKeys = (
  obj: NestedObject,
  prefix: string = ""
): NestedObject => {
  let result: NestedObject = {}

  Object.keys(obj).forEach((key) => {
    const newKey = prefix ? `${prefix}-${key}` : key

    if (
      typeof obj[key] === "object" &&
      obj[key] !== null &&
      !Array.isArray(obj[key])
    ) {
      Object.assign(result, concatNestedKeys(obj[key], newKey))
    } else {
      result[newKey] = obj[key]
    }
  })

  return result
}

export const getTwHex = ({
  colorString,
  color,
  shade,
  absolute,
  tailwindConfig,
}: {
  colorString?: string
  shade?: number | string
  color?: string
  absolute?: boolean
  tailwindConfig: any
}): string => {
  const black = colors["black"]
  const white = colors["white"]
  const handleAbsolute = (absoluteColor: string) => {
    return absoluteColor === "white" ? white : black
  }

  const getParsedShade = (shade: number) => {
    if (!shade) return 500
    if (shade <= 50) return 50
    if (shade >= 950) return 950
    const nearestMultipleOfShade = nearestMultiple(shade, 100)
    return nearestMultipleOfShade
  }

  const getDefaultColorGroup = (color: keyof DefaultColors) => {
    const defaultColorGroup = colors[color as keyof DefaultColors] as
      | Record<string, string>
      | undefined
    return defaultColorGroup
  }

  const getHex = (
    defaultColorGroup: GenericObject | undefined,
    parsedShade: number,
    rootColor: string,
    rootShade: number
  ): string => {
    if (defaultColorGroup && typeof defaultColorGroup === "object") {
      const defaultHex = defaultColorGroup[parsedShade]
      if (defaultHex) return defaultHex
      return black
    } else {
      let twConfig = tailwindConfig

      const tailwindCustomColors =
        twConfig?.theme?.extend?.colors || ({} as TailwindCustomColors)

      const [colorGroup, colorSubGroup] = rootColor.split("-")
      const customColorHex =
        tailwindCustomColors?.[rootColor]?.[rootShade!] ||
        tailwindCustomColors?.[colorGroup]?.[colorSubGroup]?.[rootShade!] ||
        black

      return customColorHex
    }
  }

  if (!colorString && !color) return black

  if (
    absolute ||
    colorString === "white" ||
    (colorString === "black" && typeof colorString === "string")
  ) {
    return handleAbsolute(colorString as string)
  }

  if (shade && typeof shade === "string") shade = Number(shade)

  if (!colorString && color && shade) {
    const parsedShade = getParsedShade(shade as number)
    const defaultColorGroup = getDefaultColorGroup(color as keyof DefaultColors)
    const hex = getHex(defaultColorGroup, parsedShade, color, shade as number)
    return hex
  }

  if (colorString) {
    const { color, shade, absolute } = twColorHelper({
      colorString,
      tailwindConfig,
    })

    if (absolute && typeof color === "string") return handleAbsolute(color)

    if (!color || !shade) return black

    const parsedShade = getParsedShade(shade)
    const defaultColorGroup = getDefaultColorGroup(color as keyof DefaultColors)
    const hex = getHex(defaultColorGroup, parsedShade, color, shade)
    return hex
  }

  return black
}

export const detectSystemTheme = () => {
  if (typeof window === "undefined") return
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
  const detectedTheme = systemTheme.matches ? "dark" : "light"
  return detectedTheme
}

export const separateObjectByKey = <T extends { [key: string]: any }>({
  obj,
  keys,
  fallbackKey = "default",
}: {
  obj: T
  keys: string[]
  fallbackKey?: string
}) => {
  const responseObj = {} as { [key: string]: any }
  const defaultObj = { ...obj }

  Object.entries(obj).forEach(([k, v]) => {
    for (const key of keys) {
      if (k.includes(key)) {
        if (!responseObj[key.toLowerCase()]) {
          responseObj[key.toLowerCase()] = {}
        }
        responseObj[key.toLowerCase()][k] = v
        delete defaultObj[k]
      }
    }
  })

  responseObj[fallbackKey.toLocaleLowerCase()] = defaultObj

  return responseObj
}

export const splitKeyAtChar = (obj: GenericObject, char: string) => {
  if (!isObject(obj)) return obj
  if (!char) return obj
  return Object.entries(obj).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key.split(char)[0]]: value,
    }
  }, {})
}

export const splitStringAtCapital = (string: string) => {
  return string.split(/(?=[A-Z])/)
}

const getNestedClassNameObjects = ({
  key,
  value,
  enabledThemeModes,
}: {
  key: string
  value: GenericObject
  enabledThemeModes: MakUiThemeKey[]
}) => {
  const classNamesArray = [] as {
    variant: string
    theme: string | undefined
    shade: Shade | undefined
    paletteVariant: string
    className: string
  }[]

  let [variant, paletteVariant = "color"] = splitStringAtCapital(key)

  paletteVariant = paletteVariant.toLowerCase()
  let shades: [state: string, classNames: string][] = Object.entries(value)

  shades.forEach(([shade, classNames]) => {
    const shadeNumber = Number(shade) as Shade
    classNames.split(" ").forEach((className) => {
      const splitClassName = className.split(":")

      let altThemes: MakUiThemeKey[] = []
      className = splitClassName[splitClassName.length - 1]
      if (makUiThemesSet.has(splitClassName[0] as MakUiThemeKey)) {
        altThemes.push(splitClassName[0] as MakUiThemeKey)
      } else {
        altThemes.push(...enabledThemeModes)
      }

      for (const t of altThemes) {
        classNamesArray.push({
          variant,
          theme: t,
          shade: shadeNumber,
          paletteVariant,
          className,
        })
      }
    })
  })

  return classNamesArray
}

const getClassNameAsObject = ({
  key,
  value,
  enabledThemeModes,
}: {
  key: string
  value: string
  enabledThemeModes: MakUiThemeKey[]
}) => {
  const variant =
    makUiVariants.find((v) => {
      if (key.toLowerCase().includes(v)) {
        return v
      }
    }) || "primary"
  const paletteVariant =
    makUiPalettes.find((v) => {
      if (key.toLowerCase().includes(v)) {
        return v
      }
    }) || "color"

  let className

  const classNamesArray = [] as {
    variant: string
    theme: string | undefined
    shade: Shade
    paletteVariant: string
    className: string
  }[]

  const splitClassName = value.split(":")

  const shade: Shade = (() => {
    for (let el of splitClassName) {
      let num = Number(el)
      if (makUiShadesSet.has(num as Shade)) {
        return num as Shade
      }
    }
    return 500 as Shade
  })()
  let altThemes: MakUiThemeKey[] = []
  let altShades: Shade[] = []
  className = splitClassName[splitClassName.length - 1]
  if (makUiThemesSet.has(splitClassName[0] as MakUiThemeKey)) {
    altThemes.push(splitClassName[0] as MakUiThemeKey)
  } else {
    altThemes.push(...enabledThemeModes)
  }
  splitClassName.forEach((cn) => {
    if (makUiShadesSet.has(Number(cn) as Shade)) {
      altShades.push(Number(cn) as Shade)
    }
  })

  for (const t of altThemes) {
    for (const s of altShades) {
      classNamesArray.push({
        variant,
        theme: t,
        shade: s,
        paletteVariant,
        className,
      })
    }

    classNamesArray.push({
      variant,
      theme: t,
      shade,
      paletteVariant,
      className,
    })
  }

  return classNamesArray
}

export const extractInitialPalette = ({
  palette,
  enabledThemeModes,
  tailwindConfig,
}: {
  palette: MakUiFlexiblePaletteInput
  enabledThemeModes: MakUiThemeKey[]
  tailwindConfig: any
}) => {
  let themePalette = {} as MakUiVerbosePalette

  for (const theme of enabledThemeModes) {
    themePalette[theme] = {} as MakUiVerboseTheme
  }

  let paletteObject = {} as MakUiPaletteInput

  for (const [key, value] of Object.entries(palette)) {
    if (key === "theme") {
      if (typeof value === "string") {
        const classNamesArray = value.split(" ")
        let themeObject = {} as { [Key in MakUiThemeKey]: string | undefined }
        for (const theme of enabledThemeModes) {
          themeObject[theme] = undefined
        }

        classNamesArray.forEach((className: string) => {
          if (className.includes("dark:")) {
            themeObject.dark = className.split(":")[1]
          } else if (className.includes("custom:")) {
            themeObject.custom = className.split(":")[1]
          } else if (className.includes("light:")) {
            themeObject.light = className.split(":")[1]
          } else {
            for (const theme of enabledThemeModes) {
              themeObject[theme] = className
            }
          }
        })

        for (const [theme, classNames] of Object.entries(themeObject)) {
          ensureNestedObject({
            parent: paletteObject,
            keys: [theme, "theme", "primary"],
            value: classNames,
          })
        }

        continue
      }

      const themes = Object.entries(value)

      themes.forEach(([variant, classNames]) => {
        if (typeof classNames === "string") {
          const splitClassNames = classNames.split(" ")
          splitClassNames.forEach((className) => {
            const splitClassName = className.split(":")
            const color = splitClassName[splitClassName.length - 1]
            const hex = twColorHelper({
              colorString: color,
              tailwindConfig,
            }).hex

            const altThemes: MakUiThemeKey[] = []
            makUiThemesSet.has(splitClassName[0] as MakUiThemeKey)
              ? altThemes.push(splitClassName[0] as MakUiThemeKey)
              : altThemes.push(...enabledThemeModes)

            for (const t of altThemes) {
              ensureNestedObject({
                parent: themePalette,
                keys: [t, variant],
                value: hex,
              })
            }
          })
        }
      })

      continue
    }
    if (isObject(value)) {
      const classNamesArray = getNestedClassNameObjects({
        key,
        value,
        enabledThemeModes,
      })

      for (const obj of classNamesArray) {
        const { variant, theme, paletteVariant, shade, className } = obj

        const nestedObj = {}
        ensureNestedObject({
          parent: nestedObj,
          keys: [theme, paletteVariant, variant, shade?.toString()],
          value: className,
        })

        paletteObject = deepMerge(nestedObj, paletteObject)
      }
    } else {
      for (const classNameString of value.split(" ")) {
        const classNamesArray = getClassNameAsObject({
          key,
          value: classNameString,
          enabledThemeModes,
        })

        for (const obj of classNamesArray) {
          const { variant, theme, paletteVariant, shade, className } = obj
          const shadeNumber = Number(shade)
          const nestedObj = {}
          ensureNestedObject({
            parent: nestedObj,
            keys: [theme, paletteVariant, variant, shadeNumber.toString()],
            value: className,
          })

          paletteObject = deepMerge(nestedObj, paletteObject)
        }
      }
    }
  }
  if (!isEmptyObject(themePalette.light)) {
    ensureNestedObject({
      parent: paletteObject,
      keys: ["light", "theme"],
      value: themePalette.light,
    })
  }
  if (!isEmptyObject(themePalette.dark)) {
    ensureNestedObject({
      parent: paletteObject,
      keys: ["dark", "theme"],
      value: themePalette.dark,
    })
  }
  if (!isEmptyObject(themePalette.custom)) {
    ensureNestedObject({
      parent: paletteObject,
      keys: ["custom", "theme"],
      value: themePalette.custom,
    })
  }

  return paletteObject as MakUiVerbosePalette
}

export const objectToClassName = ({
  ...args
}: ObjectToClassNameObjectProp): string => {
  return parseProps({ ...args })
  function parseProps({
    object,
    variant,
    allowedStates,
    allowedModifiers,
  }: ObjectToClassNameObjectProp): string {
    if (!isObject(object)) return ""
    let parsedStringArray: string[] = []

    if (!allowedStates || !allowedStates.has("not-base")) {
      allowedStates = new Set([...(allowedStates || []), "base"])
    }

    let allowedObject = {} as GenericObject
    if (allowedStates?.size) {
      ;[...allowedStates].forEach((state) => {
        allowedObject[state] = object[state]
      })
    }

    Object.entries(allowedObject).forEach(([key, value]) => {
      if (key === "not-base") return
      if (key === "base") {
        parsedStringArray.push(`${variant}-${value}`)
        return
      } else {
        parsedStringArray.push(`${key}:${variant}-${value}`)
        if (allowedModifiers?.size) {
          ;[...allowedModifiers].forEach((modifier) => {
            parsedStringArray.push(`${modifier}-${key}:${variant}-${value}`)
          })
        }
      }
    })

    return parsedStringArray.join(" ")
  }
}

export const parseClassNameToStyleObject = ({
  className = "",
  makClassName = undefined,
  activeTheme,
}: {
  className?: string
  makClassName?: string
  activeTheme: MakUiVerboseTheme
}) => {
  const makRegex = /mak\((.*?)\)/g
  const whiteSpaceRegex = /[ \t\r\n]+/
  const makClassNamesArray = []
  const twClassNamesArray = []

  if (makClassName) {
    makClassNamesArray.push(...makClassName.split(" "))
  }
  if (className && className.includes("mak(")) {
    className = className.replace(/mak\(\)/g, "")
    let match
    while ((match = makRegex.exec(className)) !== null) {
      makClassNamesArray.push(...match[1].split(" "))
    }

    const outside = className
      .replace(makRegex, "")
      .replace(whiteSpaceRegex, " ")
      .trim()
      .split(" ")
    if (outside.length) {
      twClassNamesArray.push(...outside)
    }
  } else if (className && !className.includes("mak(")) {
    twClassNamesArray.push(...className.split(" "))
  }

  makClassName = makClassNamesArray.join(" ")
  let twClassName = twClassNamesArray.length
    ? twClassNamesArray.join(" ")
    : undefined

  const makCSSObject = parseMakClassNames({
    makClassName,
    activeTheme,
  })

  return { makCSSObject, twClassName, makClassName }
}

const separateTwModifiers = (className: string | undefined) => {
  if (!className || typeof className !== "string")
    return {
      modifiers: "",
      modifiersArray: [],
      mediaQueriesArray: [],
      relationalModifiersArray: [],
      className,
    }

  const hasSet = new Set<string>()

  if (className.includes("has-")) {
    const hasMatch = className.match(`^${"has-"}\\[(.+?)\\]`)
    if (hasMatch) {
      const pseudoClass = `has(${hasMatch[1]})`
      hasSet.add(pseudoClass)
    }
  }

  const regex = /^(.*?):([^:]+)$/
  const match = className.match(regex)
  const relationalModifiers = ["group-", "peer-", "parent-"]

  if (match) {
    const modifiers = match[1]
    const finalClassName = match[2]
    const modifiersSet = new Set(modifiers.split(/(?<!\[[^\]]*):/))
    const mediaQueriesSet = new Set()
    const relationalModifiersSet = new Set()

    modifiersSet.forEach((m) => {
      !twModifierSet.has(m) && modifiersSet.delete(m)
      mediaQueries?.[m] && modifiersSet.delete(m)
      mediaQueries?.[m] && mediaQueriesSet.add(m)

      if (relationalModifiers.some((rm) => m.includes(rm))) {
        modifiersSet.delete(m)

        let relation = findSubstring({
          string: m,
          substrings: relationalModifiers,
        })
        const modifier = m.split(relation || " ")[1]
        relation = relation?.replace("-", "")
        const hasMatch = modifier.match(`^${"has-"}\\[(.+?)\\]`)
        const peerTilde = relation === "peer" ? " ~ " : " "
        let parsedModifier = ""
        if (hasMatch) {
          parsedModifier = `.${relation}:has(${hasMatch[1]})${peerTilde}`
        } else {
          parsedModifier = `.${relation}:${modifier.replace(
            /[\[\]\:]/g,
            ""
          )}${peerTilde}`
        }
        relationalModifiersSet.add(parsedModifier)
      }
    })

    const modifiersArray = [...modifiersSet.values(), ...hasSet.values()]
    const mediaQueriesArray = [...mediaQueriesSet.values()]
    const relationalModifiersArray = [...relationalModifiersSet.values()]

    return {
      modifiers,
      modifiersArray,
      mediaQueriesArray,
      relationalModifiersArray,
      className: finalClassName,
    }
  } else {
    return {
      modifiers: "",
      modifiersArray: [...hasSet.values()],
      mediaQueriesArray: [],
      relationalModifiersArray: [],
      className,
    }
  }
}

export const extractMakVars = ({
  className,
  activeTheme,
}: {
  className?: string
  activeTheme: MakUiVerboseTheme
}) => {
  let paletteVariant: MakUiPaletteKey | undefined = undefined
  let variant: MakUiVariantKey = "primary"
  let shade: Shade | undefined = undefined
  let mcn: string | undefined
  let opacity = undefined
  let color
  let altPaletteVariant: MakUiPaletteKey | undefined = undefined
  mcn = className
  opacity = mcn?.split("/")[1]
  mcn = mcn?.split("/")[0]

  variant =
    (mcn?.split(`${paletteVariant}-`)?.[1] as MakUiVariantKey) || "primary"
  paletteVariant =
    (mcn?.split("-")[0] as MakUiPaletteKey) || ("bg" as MakUiPaletteKey)
  variant =
    (mcn?.split("-")[1] as MakUiVariantKey) || ("primary" as MakUiVariantKey)

  if (variant.includes("|")) {
    const splitVariant = variant.split("|")
    variant = splitVariant[1] as MakUiVariantKey
    altPaletteVariant = splitVariant[0] as MakUiPaletteKey
  }

  let shadeString = mcn?.split("-")[2]
  if (!shadeString) {
    if (variant === "light") {
      shadeString = "100"
    } else if (variant === "dark") {
      shadeString = "900"
    } else {
      shadeString = "500"
    }
  }
  shade = Number(shadeString) as Shade

  let resolvedVariant = altPaletteVariant || paletteVariant

  if (resolvedVariant !== "theme") {
    color = activeTheme?.[resolvedVariant]?.[variant]?.[shade]
    if (!color) {
      let twKey = mcn
      twKey = twKey!.split("-").slice(1).join("-")
      if (twKey.charAt(0) === "#") {
        color = twKey
      } else {
        const twColor = twColors[twKey]
        color = twColor
      }
    }
  } else {
    color = activeTheme.theme?.[variant as keyof MakUiVerboseThemeVariant]
  }

  if (opacity && color) {
    color = chroma(color)
      .alpha(Number(opacity) / 100)
      .css()
  }

  return {
    paletteVariant,
    mcn,
    opacity,
    shade,
    color,
    altPaletteVariant,
  }
}

const findSubstring = ({
  string,
  substrings,
}: {
  string?: string
  substrings: string[]
}): string | undefined => {
  if (!string) return undefined

  for (let substring of substrings) {
    if (string.includes(substring)) {
      return substring
    }
  }
  return undefined
}

const constructCSSClassNameObject = ({
  makClassName,
  activeTheme,
  rootClassObject,
  returnAllVars,
}: {
  makClassName: string
  activeTheme: MakUiVerboseTheme
  rootClassObject?: GenericObject
  returnAllVars?: boolean
}) => {
  let {
    className,
    modifiersArray,
    mediaQueriesArray,
    relationalModifiersArray,
  } = separateTwModifiers(makClassName)
  let { paletteVariant, color } = extractMakVars({ className, activeTheme })

  let joinedRelationalModifiers = relationalModifiersArray.length
    ? relationalModifiersArray.join(" ")
    : "&"
  let joinedModifiers = modifiersArray.length
    ? `:${modifiersArray.join(":")}`
    : ""

  const escapedClassName = makClassName.replace(
    /([:\|\[\]{}()+>~!@#$%^&*=/"'`;,\\])/g,
    "\\$&"
  )

   let classNameString = `${joinedRelationalModifiers}.${escapedClassName}${joinedModifiers}`

   if (paletteVariant === "divide") {
     classNameString = classNameString + " > * + *"
   }

  const mediaQueryKeys: string[] = []

  mediaQueriesArray.forEach((mq) => {
    mediaQueryKeys.push(mediaQueries[mq as string])
  })

  const cssKey = twToCssKeyMap?.[paletteVariant] || "backgroundColor"

  const classNameObject = {}

  ensureNestedObject({
    parent: classNameObject,
    keys: [
      ...mediaQueryKeys,
      classNameString,
      rootClassObject ? undefined : cssKey,
    ],
    value: rootClassObject || color,
  })

  if (returnAllVars) {
    return {
      className,
      modifiersArray,
      mediaQueriesArray,
      relationalModifiersArray,
      paletteVariant,
      color,
      classNameObject,
    }
  }
  return classNameObject
}

const parseGradientClassNames = ({
  makClassName,
  activeTheme,
}: {
  makClassName: string
  activeTheme: MakUiVerboseTheme
}) => {
  const gradientModifiers =
    makClassName.match(
      /([^ ]+:)?(bg-((linear-)|(conic-)|(radial-))?gradient-?[^ ]*)|(([^ ]+:)?((from)|(to)|(via))-[^ ]+)/g
    ) || []

  const linearGradientDirections: { [key: string]: string } = {
    "to-t": "to top",
    "to-tr": "to top right",
    "to-r": "to right",
    "to-br": "to bottom right",
    "to-b": "to bottom",
    "to-bl": "to bottom left",
    "to-l": "to left",
    "to-tl": "to top left",
  }

  const gradientModifierObject: {
    [key: string]: string[]
  } = {
    instructions:
      makClassName?.match(
        /([^ ]+:)?(bg-((linear-)|(conic-)|(radial-))?gradient-?[^ ]*)/g
      ) || [],
    fromPositions:
      makClassName?.match(/([^ ]+:)?((from))-\[?[^\s\]]+((%)|(deg)){1}\]?/g) ||
      [],
    fromColors:
      makClassName?.match(
        /(?<=^|\s)(?![^ ]*bg-gradient-)([^ ]+:)?(?:from)-[a-z0-9-]+(?:\/[0-9]+)?(?=\s|$)/g
      ) || [],
    viaPositions:
      makClassName?.match(/([^ ]+:)?via-\[?[^\s\]]+((%)|(deg)){1}\]?/g) || [],
    viaColors:
      makClassName?.match(
        /(?<=^|\s)(?![^ ]*bg-gradient-)([^ ]+:)?(?:via)-[a-z0-9-]+(?:\/[0-9]+)?(?=\s|$)/g
      ) || [],
    toPositions:
      makClassName?.match(/([^ ]+:)?to-\[?[^\s\]]+((%)|(deg)){1}\]?/g) || [],
    toColors:
      makClassName?.match(
        /(?<=^|\s)(?![^ ]*bg-gradient-)([^ ]+:)?(?:to)-[a-z0-9-]+(?:\/[0-9]+)?(?=\s|$)/g
      ) || [],
  }

  for (const gm of gradientModifiers) {
    makClassName = makClassName?.replace(gm, "").trim()
  }

  const gradientClassSet = new Set<GenericObject>()

  for (let instruction of gradientModifierObject.instructions) {
    const gradientType =
      instruction.match(/(linear|conic|radial)/)?.[0] || "linear"
    const direction =
      instruction.match(
        /((to-t)|(to-tr)|(to-r)|(to-br)|(to-b)|(to-bl)|(to-l)|(to-tl))/g
      )?.[0] || "to-b"
    const gradientDirection =
      gradientType === "linear"
        ? `${linearGradientDirections?.[direction]}, `
        : gradientType === "radial, "
        ? "circle, "
        : ""
    const gradientInstruction = `${gradientType}-gradient(${gradientDirection}var(--gradient-stops))`

    const instructionClassObject = constructCSSClassNameObject({
      makClassName: instruction,
      activeTheme,
      rootClassObject: {
        backgroundImage: gradientInstruction,
      },
    })

    gradientClassSet.add(instructionClassObject)
  }

  const hasViaValues =
    gradientModifierObject.viaColors.length > 0 ||
    gradientModifierObject.viaPositions.length > 0

  for (let terminus of ["from", "via", "to"]) {
    for (let twPosition of gradientModifierObject[`${terminus}Positions`]) {
      if (!gradientModifierObject[`${terminus}Positions`].length) continue
      const positionLocation = twPosition
        .replace(/[\[\]]/g, "")
        .replace("to-", "")
      const positionClassObject = constructCSSClassNameObject({
        makClassName: twPosition,
        activeTheme,
        rootClassObject: {
          [`--gradient-${terminus}-position`]: positionLocation,
        },
      })

      gradientClassSet.add(positionClassObject)
    }
  }

  for (let terminus of ["from", "via", "to"]) {
    for (let twColor of gradientModifierObject[`${terminus}Colors`]) {
      let { className } = separateTwModifiers(twColor)
      className = className?.replace(terminus, "bg")
      const { color } = extractMakVars({ className, activeTheme })
      let rootClassObject: GenericObject = {}
      if (terminus === "from") {
        rootClassObject = {
          "--gradient-stops": `var(--gradient-${terminus}),${
            hasViaValues ? " var(--gradient-via)," : ""
          } var(--gradient-to)`,
          "--gradient-from": `${color} var(--gradient-from-position, 0%)`,
          "--gradient-to": `var(--gradient-to-color, rgb(0,0,0,0)) var(--gradient-to-position, 100%)`,
        }

        if (hasViaValues) {
          rootClassObject = {
            ...rootClassObject,
            "--gradient-via": `var(--gradient-via-color) var(--gradient-via-position, 50%)`,
          }
        }
      } else {
        rootClassObject = {
          [`--gradient-${terminus}-color`]: color,
        }
      }
      const colorClassObject = constructCSSClassNameObject({
        makClassName: twColor,
        activeTheme,
        rootClassObject,
      })

      gradientClassSet.add(colorClassObject)
    }
  }

  return {
    gradientClassSet,
    makClassName,
  }
}

export const parseMakClassNames = ({
  makClassName,
  activeTheme,
}: {
  makClassName?: string
  activeTheme: MakUiVerboseTheme
}): ClassObject => {
  makClassName = makClassName?.replace(/\s+/g, " ").trim()
  if (!makClassName || makClassName === "") return {}

  const resp = parseGradientClassNames({ makClassName, activeTheme })
  makClassName = resp.makClassName
  const gradientClassSet = resp.gradientClassSet
  let makClassNamesArray =
    makClassName === "" ? [] : makClassName?.split(" ") || []

  let cssObjectSet = new Set<GenericObject | string>(gradientClassSet)

  if (makClassNamesArray.length > 0) {
    for (const makClassName of makClassNamesArray) {
      const classNameObj = constructCSSClassNameObject({
        makClassName,
        activeTheme,
      })
      cssObjectSet.add(classNameObj)
    }
  }

  const cssObjectArray = Array.from(cssObjectSet)

  const makCSSObject = deepMerge(...(cssObjectArray as GenericObject[]))

  return makCSSObject
}

export const ensureUtilityClass = (utility: string, className: string) => {
  if (!utility) {
    className = utility
    utility = "bg-"
  }
  if (!utility.includes("-")) utility = `${utility}-`
  if (!className.includes(utility)) {
    return `${utility}${className}`
  } else {
    className = className.split(utility)[1] || className.split(utility)[0]
    className = `${utility}${className}`
  }
  return className
}

export const mergeClassNames = (...props: string[]) => {
  return props.join(" ")
}

export const mergeDefaultConfig = ({
  makUi,
  useConfig,
  component,
  className,
  makClassName,
}: {
  makUi: ReturnType<typeof useMakUi>
  useConfig: boolean | undefined
  component?: string
  className?: string
  makClassName?: string
}): {
  componentConfig: MakUiRootComponentConfig | undefined
  defaultClassName: string | undefined
  defaultMakClassName: string | undefined
  componentClassName: string | undefined
  componentMakClassName: string | undefined
  resolvedClassName: string | undefined
  resolvedMakClassName: string | undefined
} => {
  className = className
    ? className.trim().replace(/^undefined /g, "")
    : undefined
  makClassName = makClassName
    ? makClassName.trim().replace(/^undefined /g, "")
    : undefined

  if (!component)
    return {
      componentConfig: undefined,
      componentClassName: className,
      componentMakClassName: makClassName,
      defaultClassName: undefined,
      defaultMakClassName: undefined,
      resolvedClassName: className,
      resolvedMakClassName: makClassName,
    }
  const componentConfig: MakUiRootComponentConfig | undefined =
    makUi.componentConfig?.[component]
  const defaultClassName = componentConfig?.className
  const defaultMakClassName = componentConfig?.makClassName
  const componentClassName = className
  const componentMakClassName = makClassName
  let resolvedClassName: string | undefined
  let resolvedMakClassName: string | undefined

  if (useConfig) {
    resolvedClassName = [defaultClassName || "", componentClassName || ""]
      .join(" ")
      .trim()
    resolvedMakClassName = [defaultMakClassName, componentMakClassName]
      .join(" ")
      .trim()
  } else {
    resolvedClassName = componentClassName
    resolvedMakClassName = componentMakClassName
  }

  return {
    componentConfig,
    defaultClassName,
    defaultMakClassName,
    componentClassName,
    componentMakClassName,
    resolvedClassName,
    resolvedMakClassName,
  }
}

export const formatJsonToHtmlString = (jsonObject: GenericObject): string => {
  return Object.entries(jsonObject)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return `${key}: {${formatJsonToHtmlString(value)}}`
      } else {
        return `${key}: ${value}`
      }
    })
    .join("; ")
}
