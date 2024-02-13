import { MotionProps, motion } from "framer-motion"
import styled from "@emotion/styled"
import React, { ComponentType, Ref, forwardRef, useMemo } from "react"
import { GenericObject, ComponentWrapperResponse } from "../types/index"

import { formatJsonToHtmlString } from "../functions/helpers"

const BaseStyledComponent = styled.div<any>(({ styleObject }) => ({
  ...styleObject,
}))

const StyledMotionComponent = forwardRef(
  (
    {
      as: Component = "div",
      styleObject,
      motionProps,
      ...props
    }: {
      as: string
      styleObject: GenericObject
      ref?: Ref<any>
      motionProps?: MotionProps
      className?: string
      makClassName?: string
      componentTheme?: ComponentWrapperResponse["componentTheme"]
      componentBorder?: ComponentWrapperResponse["componentBorder"]
      componentText?: ComponentWrapperResponse["componentText"]
      componentColor?: ComponentWrapperResponse["componentColor"]
      fullComponentTheme?: ComponentWrapperResponse["fullComponentTheme"]
      componentThemeMode?: ComponentWrapperResponse["componentThemeMode"]
      globalThemeMode?: ComponentWrapperResponse["globalThemeMode"]
      globalTheme?: ComponentWrapperResponse["globalTheme"]
      globalPalette?: ComponentWrapperResponse["globalPalette"]
    },
    ref
  ) => {
    const {
      makClassName,
      componentTheme,
      componentBorder,
      componentText,
      componentColor,
      fullComponentTheme,
      componentThemeMode,
      globalThemeMode,
      globalTheme,
      globalPalette,
      ...restProps
    } = props
    const MotionComponent = motion[
      Component as keyof typeof motion
    ] as ComponentType<any>

    const memoizedMotionProps = useMemo(() => motionProps, [motionProps])

    const formattedStyleString = formatJsonToHtmlString(styleObject)

    return (
      <BaseStyledComponent
        as={MotionComponent}
        styleObject={styleObject}
        className={props.className}
        data-mak-class={props.makClassName}
        data-mak-style={formattedStyleString}
        ref={ref}
        {...memoizedMotionProps}
        {...restProps}
      />
    )
  }
)

StyledMotionComponent.displayName = "StyledMotionComponent"
export default StyledMotionComponent
