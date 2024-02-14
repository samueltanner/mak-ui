import styled from "@emotion/styled"
import { GenericObject } from ".."
import React, { forwardRef } from "react"
import { formatJsonToHtmlString } from "../functions/helpers"

const BaseStyledComponent = styled.div<any>(({ styleObject }) => ({
  ...styleObject,
}))

const StyledComponent = forwardRef(
  (
    {
      as: Component = "div",
      styleObject,
      ...props
    }: {
      as: keyof JSX.IntrinsicElements
      styleObject: GenericObject
      makTwClassName?: string
      makClassName?: string
      twClassName?: string
      ref?: React.Ref<any>
    },
    ref
  ) => {
    const formattedStyleString = formatJsonToHtmlString(styleObject)

    return (
      <BaseStyledComponent
        as={Component}
        styleObject={styleObject}
        className={props.makTwClassName}
        data-class={props.twClassName}
        data-mak-class={props.makClassName}
        data-mak-style={formattedStyleString}
        ref={ref}
        {...props}
      />
    )
  }
)

StyledComponent.displayName = "StyledComponent"
export default StyledComponent
