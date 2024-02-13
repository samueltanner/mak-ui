"use strict";
// import {
//   GenericObject,
//   MakUiInteractionStateKey,
//   MakUiStateKey,
//   MakUiThemeKey,
//   MakUiThemeVariantKey,
//   MakUiVariantKey,
//   MakUiVerbosePalette,
//   MakUiVerboseTheme,
//   MakUiVerboseThemeVariant,
//   MakUiVerboseVariant,
//   Shade,
//   TailwindModifier,
// } from "./ui-types"
// export type MakUiRootComponentConfig = {
//   className?: string
//   makClassName?: string
// }
// export type MakUiComponentConfig = {
//   [key: string]: MakUiRootComponentConfig | undefined
// }
// export type ButtonVariants = {
//   [key: string]: ButtonStates
//   primary: ButtonStates
//   secondary: ButtonStates
//   tertiary: ButtonStates
//   success: ButtonStates
//   danger: ButtonStates
//   warning: ButtonStates
//   info: ButtonStates
//   custom: ButtonStates
// }
// export type ButtonStates = {
//   [key: string]: ButtonSubStates
//   default: ButtonSubStates
//   active: ButtonSubStates
//   disabled: ButtonSubStates
// }
// export type ButtonSubStates = {
//   [key: string]: string
//   normal: string
//   hover: string
//   focus: string
//   clicked: string
//   normalBorder: string
//   hoverBorder: string
//   focusBorder: string
//   clickedBorder: string
// }
// export type ShadeWithOpacity = `${Shade}/${number}`
// export type VariantWithShade = `${MakUiVariantKey}-${Shade}`
// export type VariantWithShadeAndOpacity = `${MakUiVariantKey}-${Shade}/${number}`
// export type ThemeVariantWithOpacity = `${MakUiThemeVariantKey}-${number}`
// export type FalsyValue = false | null | undefined
// export type TypeProps = {
//   type?: string
//   useConfig?: boolean
//   //theme
//   darkMode?: boolean
//   lightMode?: boolean
//   customMode?: boolean
//   themeMode?: MakUiThemeKey | FalsyValue
//   //theme variant
//   themeWhite?: boolean | Shade | ShadeWithOpacity
//   themeBlack?: boolean | Shade | ShadeWithOpacity
//   themeLight?: boolean | Shade | ShadeWithOpacity
//   themeDark?: boolean | Shade | ShadeWithOpacity
//   themeCustom?: boolean | Shade | ShadeWithOpacity
//   themePrimary?: boolean | Shade | ShadeWithOpacity
//   themeSecondary?: boolean | Shade | ShadeWithOpacity
//   themeTertiary?: boolean | Shade | ShadeWithOpacity
//   themeVariant?: MakUiThemeVariantKey | ThemeVariantWithOpacity | FalsyValue
//   themeOpacity?: number | FalsyValue
//   //variant
//   primary?: boolean | Shade | ShadeWithOpacity
//   secondary?: boolean | Shade | ShadeWithOpacity
//   tertiary?: boolean | Shade | ShadeWithOpacity
//   success?: boolean | Shade | ShadeWithOpacity
//   error?: boolean | Shade | ShadeWithOpacity
//   warning?: boolean | Shade | ShadeWithOpacity
//   danger?: boolean | Shade | ShadeWithOpacity
//   info?: boolean | Shade | ShadeWithOpacity
//   custom?: boolean | Shade | ShadeWithOpacity
//   light?: boolean | Shade | ShadeWithOpacity
//   dark?: boolean | Shade | ShadeWithOpacity
//   variant?:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   variantShade?: Shade | FalsyValue
//   variantOpacity?: number | FalsyValue
//   //text
//   textPrimary?: boolean | Shade | ShadeWithOpacity
//   textSecondary?: boolean | Shade | ShadeWithOpacity
//   textTertiary?: boolean | Shade | ShadeWithOpacity
//   textSuccess?: boolean | Shade | ShadeWithOpacity
//   textError?: boolean | Shade | ShadeWithOpacity
//   textWarning?: boolean | Shade | ShadeWithOpacity
//   textDanger?: boolean | Shade | ShadeWithOpacity
//   textInfo?: boolean | Shade | ShadeWithOpacity
//   textCustom?: boolean | Shade | ShadeWithOpacity
//   textLight?: boolean | Shade | ShadeWithOpacity
//   textDark?: boolean | Shade | ShadeWithOpacity
//   text?:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   textShade?: Shade | FalsyValue
//   textOpacity?: number | FalsyValue
//   //bg
//   bgPrimary?: boolean | Shade | ShadeWithOpacity
//   bgSecondary?: boolean | Shade | ShadeWithOpacity
//   bgTertiary?: boolean | Shade | ShadeWithOpacity
//   bgSuccess?: boolean | Shade | ShadeWithOpacity
//   bgError?: boolean | Shade | ShadeWithOpacity
//   bgWarning?: boolean | Shade | ShadeWithOpacity
//   bgDanger?: boolean | Shade | ShadeWithOpacity
//   bgInfo?: boolean | Shade | ShadeWithOpacity
//   bgCustom?: boolean | Shade | ShadeWithOpacity
//   bgLight?: boolean | Shade | ShadeWithOpacity
//   bgDark?: boolean | Shade | ShadeWithOpacity
//   bg?:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   bgShade?: Shade | FalsyValue
//   bgOpacity?: number | FalsyValue
//   //border
//   borderPrimary?: boolean | Shade | ShadeWithOpacity
//   borderSecondary?: boolean | Shade | ShadeWithOpacity
//   borderTertiary?: boolean | Shade | ShadeWithOpacity
//   borderSuccess?: boolean | Shade | ShadeWithOpacity
//   borderError?: boolean | Shade | ShadeWithOpacity
//   borderWarning?: boolean | Shade | ShadeWithOpacity
//   borderDanger?: boolean | Shade | ShadeWithOpacity
//   borderInfo?: boolean | Shade | ShadeWithOpacity
//   borderCustom?: boolean | Shade | ShadeWithOpacity
//   borderLight?: boolean | Shade | ShadeWithOpacity
//   borderDark?: boolean | Shade | ShadeWithOpacity
//   border?:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   borderShade?: Shade | FalsyValue
//   borderOpacity?: number | FalsyValue
//   textSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
//   borderPx?: number
//   className?: string
//   makClassName?: string
//   height?: string
//   width?: string
// }
// export type WithComponentPropsResponse = {
//   mode: MakUiThemeKey | FalsyValue
//   hasModeProps: boolean
//   theme: MakUiThemeVariantKey | ThemeVariantWithOpacity | FalsyValue
//   hasThemeProps: boolean
//   color:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   hasColorProps: boolean
//   border:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   hasBorderProps: boolean
//   text:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   hasTextProps: boolean
//   bg:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   hasBgProps: boolean
//   themeOpacity: number | FalsyValue
//   textOpacity: number | FalsyValue
//   bgOpacity: number | FalsyValue
//   variantOpacity: number | FalsyValue
//   borderOpacity: number | FalsyValue
//   textShade: Shade | FalsyValue
//   bgShade: Shade | FalsyValue
//   variantShade: Shade | FalsyValue
//   borderShade: Shade | FalsyValue
//   borderPx: number | FalsyValue
//   className: string | FalsyValue
//   makClassName: string | FalsyValue
//   height: string | FalsyValue
//   width: string | FalsyValue
//   children?: React.ReactNode
// }
// export type ObjectToClassNameObjectProp = {
//   object: GenericObject
//   variant: MakUiVariantKey | string
//   allowedStates?: Set<string>
//   allowedModifiers?: Set<string>
// }
// export type ClassObject =
//   | {
//       [k: string]: string | GenericObject
//     }
//   | undefined
// export type ComponentWrapperResponse = {
//   styleObject: {
//     baseClassObject: ClassObject
//     pseudoClassObject: ClassObject
//   }
//   componentTheme: MakUiVerboseThemeVariant
//   componentText: MakUiVerboseVariant
//   componentColor: MakUiVerboseVariant
//   componentBorder: MakUiVerboseVariant
//   fullComponentTheme: MakUiVerboseTheme
//   componentThemeMode: MakUiThemeKey | undefined
//   globalThemeMode: MakUiThemeKey
//   globalPalette: MakUiVerbosePalette
//   globalTheme: MakUiVerboseTheme
//   twClassName: string | undefined
//   makClassName: string | undefined
//   modeVariant: MakUiThemeKey | FalsyValue
//   themeVariant: MakUiThemeVariantKey | ThemeVariantWithOpacity | FalsyValue
//   colorVariant:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   borderVariant:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   textVariant:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   bgVariant:
//     | MakUiVariantKey
//     | VariantWithShade
//     | VariantWithShadeAndOpacity
//     | FalsyValue
//   hasModeProps: boolean
//   hasThemeProps: boolean
//   hasColorProps: boolean
//   hasTextProps: boolean
//   hasBorderProps: boolean
//   hasBgProps: boolean
//   children?: React.ReactNode
//   _makClassName: string | undefined
//   _className: string | undefined
// }
