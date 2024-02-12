import useMakUi from "../context/useMakUi"
import {
  mergeDefaultConfig,
  parseClassNameToStyleObject,
} from "../functions/helpers"
import {
  TypeProps,
  ComponentWrapperResponse,
  ThemeVariantWithOpacity,
  VariantWithShade,
  VariantWithShadeAndOpacity,
  FalsyValue,
} from "../types/component-types"
import { MakUiThemeVariantKey, MakUiVariantKey } from "../types/ui-types"
import { withComputedProps } from "../functions/componentPropsFunction"

export const componentWrapperLogic = ({
  props,
  makUi,
  type,
}: {
  props: TypeProps
  makUi: ReturnType<typeof useMakUi>
  type?: string
}) => {
  const {
    theme: makTheme,
    verbosePalette: makVerbosePalette,
    verboseTheme: makVerboseTheme,
  } = makUi

  let {
    mode: themeMode,
    theme: themeProps,
    color: colorProps,
    text: textProps,
    border: borderProps,
    bg: bgProps,
    hasModeProps,
    hasThemeProps,
    hasColorProps,
    hasTextProps,
    hasBorderProps,
    hasBgProps,
    className,
    makClassName,
    useConfig,
    ...restWithComputedProps
  } = withComputedProps(props)

  let { resolvedClassName, resolvedMakClassName } = mergeDefaultConfig({
    makUi,
    useConfig,
    component: type,
    className,
    makClassName,
  })

  const activeThemeMode = themeMode
    ? themeMode
    : makTheme
    ? makTheme
    : undefined

  const activeTheme = activeThemeMode
    ? makVerbosePalette[activeThemeMode]
    : makVerboseTheme

  const {
    text: textPalette,
    color: colorPalette,
    border: borderPalette,
    theme: themePalette,
  } = activeTheme

  if (themeProps) {
    const themeClassName = `theme-${themeProps}`
    resolvedMakClassName = resolvedMakClassName
      ? `${resolvedMakClassName} ${themeClassName}`
      : themeClassName
  }

  if (colorProps) {
    const colorClassName = `bg-${colorProps}`
    resolvedMakClassName = resolvedMakClassName
      ? `${resolvedMakClassName} ${colorClassName}`
      : colorClassName
  }

  if (textProps) {
    const textClassName = `text-${textProps}`
    resolvedMakClassName = resolvedMakClassName
      ? `${resolvedMakClassName} ${textClassName}`
      : textClassName
  }

  if (borderProps) {
    const borderClassName = `border-${borderProps}`

    resolvedMakClassName = resolvedMakClassName
      ? `${resolvedMakClassName} ${borderClassName}`
      : borderClassName
  }

  if (bgProps) {
    const bgClassName = `bg-${bgProps}`
    resolvedMakClassName = resolvedMakClassName
      ? `${resolvedMakClassName} ${bgClassName}`
      : bgClassName
  }

  const {
    styleObject,
    twClassName,
    makClassName: makClassNames,
  } = parseClassNameToStyleObject({
    className: resolvedClassName,
    makClassName: resolvedMakClassName,
    activeTheme,
    currentThemeMode: makUi.theme,
  })

  const response: ComponentWrapperResponse & TypeProps = {
    styleObject,
    componentTheme: themePalette,
    componentText: textPalette,
    componentColor: colorPalette,
    componentBorder: borderPalette,
    fullComponentTheme: activeTheme,
    componentThemeMode: activeThemeMode,
    globalThemeMode: makTheme,
    globalTheme: makVerboseTheme,
    globalPalette: makVerbosePalette,
    twClassName,
    makClassName: makClassNames,
    modeVariant: themeMode,
    hasModeProps,
    hasThemeProps,
    hasColorProps,
    hasTextProps,
    hasBorderProps,
    hasBgProps,
    themeVariant: themeProps as
      | MakUiThemeVariantKey
      | ThemeVariantWithOpacity
      | FalsyValue,
    colorVariant: colorProps as
      | MakUiVariantKey
      | VariantWithShade
      | VariantWithShadeAndOpacity
      | FalsyValue,
    textVariant: textProps as
      | MakUiVariantKey
      | VariantWithShade
      | VariantWithShadeAndOpacity
      | FalsyValue,
    borderVariant: borderProps as
      | MakUiVariantKey
      | VariantWithShade
      | VariantWithShadeAndOpacity
      | FalsyValue,
    bgVariant: bgProps as
      | MakUiVariantKey
      | VariantWithShade
      | VariantWithShadeAndOpacity
      | FalsyValue,
    _className: twClassName,
    _makClassName: makClassNames,
    children: restWithComputedProps.children,
    ...restWithComputedProps,
  }
  return response
}
