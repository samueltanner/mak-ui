import React, { forwardRef, ReactNode, useMemo, memo, useEffect } from "react"
import { useMakUi } from "../context/useMakUi"
import { MakUiElementProps } from "../types/index"
import { componentWrapperLogic } from "../functions/componentWrapperLogic"
import StyledComponent from "./StyledComponent"
import { isEmptyObject } from "@/functions/helpers"
import StyledMotionComponent from "./StyledMotionComponent"
import { mergeDefaultConfig } from "../functions/helpers"

type HTMLMakComponentProps<K extends keyof JSX.IntrinsicElements> =
  MakUiElementProps & {
    component: K
    children?: ReactNode
  } & JSX.IntrinsicElements[K]

const MakComponent = memo(
  forwardRef<HTMLElement, HTMLMakComponentProps<keyof JSX.IntrinsicElements>>(
    ({ component, motion, useConfig, ...props }, ref) => {
      const makUi = useMakUi()
      const { setStyleSheet, styleSheet } = makUi

      let { resolvedClassName, resolvedMakClassName, componentConfig } =
        mergeDefaultConfig({
          makUi,
          useConfig,
          component,
          className: props?.className,
          makClassName: props?.makClassName,
        })

      const response = useMemo(() => {
        return componentWrapperLogic({
          props: props,
          makUi,
        })
      }, [props, makUi])

      const { styleObject, twClassName, makClassName, ...responseRest } =
        response

      const { baseClassObject = {}, pseudoClassObject = {} } = styleObject

      useEffect(() => {
        if (
          (resolvedMakClassName?.includes("group-") ||
            resolvedMakClassName?.includes("peer-")) &&
          styleSheet
        ) {
          const updatedStyleSheet = {
            ...styleSheet,
          }
          Object.entries(pseudoClassObject).forEach(([key, value]) => {
            if (!styleSheet[key]) {
              updatedStyleSheet[key] = value
              setStyleSheet(updatedStyleSheet)
            }
          })
        }
      }, [setStyleSheet, pseudoClassObject])

      const resolvedCombinedClassName = [
        resolvedClassName,
        resolvedMakClassName,
      ]
        .join(" ")
        .trim()

      const allProps = {
        makTwClassName: resolvedCombinedClassName,
        twClassName: resolvedClassName,
        makClassName: resolvedMakClassName,
        component,
        defaultConfig: componentConfig,
        ...responseRest,
      }

      const inlineStyles = {
        ...baseClassObject,
        ...pseudoClassObject,
      }

      const isMotionObject = motion && !isEmptyObject(motion)

      if (isMotionObject) {
        return (
          <StyledMotionComponent
            ref={ref}
            styleObject={inlineStyles}
            as={component}
            motionProps={motion}
            {...allProps}
          />
        )
      }

      return (
        <StyledComponent
          ref={ref}
          styleObject={inlineStyles}
          as={component}
          {...allProps}
        />
      )
    }
  )
)

MakComponent.displayName = "MakComponent"
export { MakComponent }
