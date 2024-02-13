import { MakComponent } from "./MakComponent"
import { MakUiElementProps } from "../types/index"
import React, { ComponentType, Ref, forwardRef, useMemo } from "react"

type ExtendedHTMLElement<K extends keyof JSX.IntrinsicElements> = ComponentType<
  JSX.IntrinsicElements[K] & MakUiElementProps & { ref?: Ref<any> }
>

type Mak = {
  [K in keyof JSX.IntrinsicElements]: ExtendedHTMLElement<K>
}

const componentCache = {} as Record<keyof JSX.IntrinsicElements, any>

const handler: ProxyHandler<{}> = {
  get(_: any, tag: keyof JSX.IntrinsicElements) {
    if (!componentCache[tag]) {
      const ForwardedComponent = forwardRef((props: any, ref) => {
        const memoizedProps = useMemo(() => {
          return { ...props }
        }, [props])

        return <MakComponent component={tag} {...memoizedProps} ref={ref} />
      })

      ForwardedComponent.displayName = `Mak${
        tag.charAt(0).toUpperCase() + tag.slice(1)
      }`

      componentCache[tag] = ForwardedComponent
    }
    return componentCache[tag]
  },
}

const mak = new Proxy({}, handler) as Mak

export default mak
