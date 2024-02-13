// // Generic Types

// import colors from "tailwindcss/colors"

// export type GenericObject = Record<string, any>
// export type NestedObject = { [key: string]: any }
// export type DefaultColors = typeof colors
// export type TailwindCustomColors = NestedObject | GenericObject | undefined

// // KEYS

// export type TailwindUtilityClass =
//   | "bg"
//   | "text"
//   | "border"
//   | "ring"
//   | "outline"
//   | "ring-offset"
//   | "fill"
//   | "stroke"
//   | "divide"
//   | "placeholder"
//   | "decoration"
//   | "accent"
//   | "caret"
//   | "shadow"

// export type TailwindModifier =
//   | "peer"
//   | "group"
//   | "has"
//   | "*"
//   | "group-has"
//   | "peer-has"

// export type TailwindModifierState =
//   `${TailwindModifier}-${MakUiInteractionStateKey}`
// export type TailwindPseudoState =
//   | TailwindModifierState
//   | MakUiInteractionStateKey

// export type HtmlElementKey =
//   | "button"
//   | "input"
//   | "text"
//   | "form"
//   | "dialog"
//   | "select"
//   | "textarea"

// export type MakUiThemeKeySH = "drk" | "lgt" | "cst"

// export type MakUiPaletteKeySH = "col" | "txt" | "bor" | "thm"

// export type MakUiThemeVariantKeySH = "pri" | "sec" | "ter" | "cst"

// export type MakUiVariantKeySH =
//   | MakUiThemeVariantKeySH
//   | "suc"
//   | "err"
//   | "dng"
//   | "war"
//   | "inf"

// export type MakUiThemeKey = "dark" | "light" | "custom"

// export type MakUiPaletteKey = "color" | "text" | "border" | "theme" | "bg"

// export type MakUiThemeVariantKey =
//   | "primary"
//   | "secondary"
//   | "tertiary"
//   | "custom"
//   | "light"
//   | "dark"
//   | "white"
//   | "black"

// export type MakUiVariantRootKey =
//   | "primaryRoot"
//   | "secondaryRoot"
//   | "tertiaryRoot"
//   | "customRoot"

// export type MakUiVariantKey =
//   | "primary"
//   | "secondary"
//   | "tertiary"
//   | "custom"
//   | "light"
//   | "dark"
//   | "success"
//   | "error"
//   | "danger"
//   | "warning"
//   | "info"
// // | "white"
// // | "black"

// export type MakUiCustomInteractionStateKey = "base" | "click"

// export type MakUiInteractionStateKey =
//   | "active"
//   | "autofill"
//   | "checked"
//   | "closed"
//   | "default"
//   | "disabled"
//   | "empty"
//   | "enabled"
//   | "focus"
//   | "focus-visible"
//   | "focus-within"
//   | "hover"
//   | "in-range"
//   | "indeterminate"
//   | "invalid"
//   | "open"
//   | "out-of-range"
//   | "placeholder-shown"
//   | "read-only"
//   | "required"
//   | "selected"
//   | "selection"
//   | "target"
//   | "valid"
//   | "visited"

// export type MakUiStateKey =
//   | MakUiInteractionStateKey
//   | MakUiCustomInteractionStateKey

// export type MakUiRootStateKey =
//   | "openRoot"
//   | "closedRoot"
//   | "defaultRoot"
//   | "emptyRoot"
//   | "disabledRoot"
//   | "enabledRoot"
//   | "checkedRoot"
//   | "indeterminateRoot"
//   | "requiredRoot"
//   | "invalidRoot"
//   | "validRoot"
//   | "in-rangeRoot"
//   | "out-of-rangeRoot"
//   | "placeholder-shownRoot"
//   | "read-onlyRoot"
//   | "autofillRoot"
//   | "hoverRoot"
//   | "focusRoot"
//   | "activeRoot"
//   | "visitedRoot"
//   | "selectionRoot"
//   | "selectedRoot"

// // VERBOSE OUTPUT TYPES

// export type MakUiVerbosePalette = {
//   [Key in MakUiThemeKey]: MakUiVerboseTheme
// }

// export type MakUiVerboseTheme = {
//   color: MakUiVerboseVariant
//   bg: MakUiVerboseVariant
//   text: MakUiVerboseVariant
//   border: MakUiVerboseVariant
//   theme: MakUiVerboseThemeVariant
// }

// export type MakUiVerboseVariant = {
//   [Key in MakUiVariantKey]: MakUiVerboseShades
// }

// export type MakUiVerboseThemeVariant = {
//   [Key in MakUiThemeVariantKey]: string
// }

// export type MakUiState = {
//   [Key in MakUiStateKey]: string
// }

// export type ShadeStep = 50 | 100

// export type Shade =
//   | 0
//   | 50
//   | 100
//   | 150
//   | 200
//   | 250
//   | 300
//   | 350
//   | 400
//   | 450
//   | 500
//   | 550
//   | 600
//   | 650
//   | 700
//   | 750
//   | 800
//   | 850
//   | 900
//   | 950
//   | 1000

// export type MakUiAbsoluteShades = {
//   0: string
//   1000: string
// }

// export type MakUiSimpleShades = MakUiAbsoluteShades & {
//   [key: number]: string
//   50: string
//   150: string
//   250: string
//   350: string
//   450: string
//   500: string
//   550: string
//   650: string
//   750: string
//   850: string
//   950: string
// }

// export type MakUiVerboseShades = MakUiSimpleShades &
//   MakUiAbsoluteShades & {
//     [key: number]: string
//     50: string
//     150: string
//     250: string
//     350: string
//     450: string
//     500: string
//     550: string
//     650: string
//     750: string
//     850: string
//     950: string
//   }

// export type MakUiShadesInput = {
//   [Key in Shade]?: string
// }
// // SIMPLE OUTPUT TYPES

// export type MakUiSimplePalette = {
//   [Key in MakUiThemeKey]: MakUiSimpleTheme
// }

// export type MakUiSimpleTheme = {
//   color: MakUiSimpleVariant
//   text: MakUiSimpleVariant
//   border: MakUiSimpleVariant
//   theme: MakUiSimpleThemeVariant

//   // col: MakUiSimpleVariant
//   // txt: MakUiSimpleVariant
//   // bor: MakUiSimpleVariant
//   // thm: MakUiSimpleThemeVariant
// }

// export type MakUiSimpleVariant = {
//   [Key in MakUiVariantKey]: MakUiSimpleShades
// }

// export type MakUiSimpleThemeVariant = {
//   [Key in MakUiThemeVariantKey]: string
// }

// export type MakUiSimpleState = {
//   [Key in MakUiStateKey]: string
// }

// // INPUTS

// export type MakUiPaletteInput = {
//   [Key in MakUiThemeKey]?: MakUiThemeInput
// }

// export type MakUiThemePaletteInput = {
//   color?: string | MakUiVariantInput
//   text?: string | MakUiVariantInput
//   border?: string | MakUiVariantInput
//   theme?: string | MakUiThemeVariantInput
// }

// export type MakUiVariantPaletteInput = {
//   [Key in MakUiVariantKey]?: string | MakUiShadesInput
// }

// export type MakUiFlexiblePaletteInput =
//   | MakUiPaletteInput
//   | MakUiThemePaletteInput
//   | MakUiVariantPaletteInput

// export type MakUiThemeInput = {
//   color?: MakUiVariantInput
//   text?: MakUiVariantInput
//   border?: MakUiVariantInput
//   theme?: MakUiThemeVariantInput
// }

// export type MakUiVariantInput =
//   | string
//   | {
//       [Key in MakUiVariantKey]?: string | MakUiShadesInput
//     }

// export type MakUiThemeVariantInput =
//   | string
//   | {
//       [Key in MakUiThemeVariantKey]?: string
//     }

// export type MakUiStateInput = {
//   [Key in MakUiStateKey]?: string
// }

// export type MakUiThemeShadesInput = {
//   [Key in MakUiThemeKey]?: {
//     [Key in MakUiThemeVariantKey]?: number
//   }
// }

// // Default Types

// export type MakUiThemeVariantShades = {
//   [Key in MakUiThemeVariantKey]: number
// }
// export type MakUiThemeShades = {
//   [Key in MakUiThemeKey]: MakUiThemeVariantShades
// }

// export type MakUiStateShades = {
//   [Key in MakUiStateKey]: number
// }
// export type MakUiThemeColors = {
//   [Key in MakUiThemeKey]: {
//     [Key in MakUiThemeVariantKey]: string
//   }
// }

// export type MakUiDefaultColors = {
//   [Key in MakUiVariantKey]: string
// }

// export type MakUiDefaultStateColors = {
//   [Key in MakUiStateKey]: string
// }

// export type MakUiDefaultPalette = {
//   [Key in MakUiThemeKey]: {
//     color: {
//       [Key in MakUiVariantKey]: string
//     }
//     text: string
//     border: string
//     theme: {
//       primary: string
//       secondary: string
//       tertiary: string
//       custom: string
//       light: string
//       white: string
//       dark: string
//       black: string
//     }
//   }
// }
// // Helper Function Types

// export type TWColorHelperResponse = {
//   absolute: boolean
//   isTwColor: boolean
//   color: string | undefined
//   shade: number | undefined
//   autoShade: boolean
//   autoColor: boolean
//   opacity: number
//   colorString: string | undefined
//   rootString: string | undefined
//   hex: string
// }

// export type ParsedClassNameResponse = {
//   theme: MakUiThemeKey | undefined
//   palette: MakUiPaletteKey
//   variant: MakUiVariantKey
//   themeVariant: MakUiThemeVariantKey
//   state: MakUiStateKey | undefined
//   twVariant: TailwindUtilityClass
//   opacity: string | undefined
//   string: string
// }

// export type MakClassNameObject = {
//   utility: TailwindUtilityClass | undefined
//   modifier: TailwindModifier | undefined
//   paletteVariant: MakUiPaletteKey
//   variant: MakUiVariantKey
//   shade: Shade
//   opacity: number | string | undefined
// }
