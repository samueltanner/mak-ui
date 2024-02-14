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
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import React, { forwardRef, useMemo } from "react";
import { formatJsonToHtmlString } from "../functions/helpers";
const BaseStyledComponent = styled.div(({ styleObject }) => (Object.assign({}, styleObject)));
const StyledMotionComponent = forwardRef((_a, ref) => {
    var { as: Component = "div", styleObject, motionProps } = _a, props = __rest(_a, ["as", "styleObject", "motionProps"]);
    const { makClassName, componentTheme, componentBorder, componentText, componentColor, fullComponentTheme, componentThemeMode, globalThemeMode, globalTheme, globalPalette } = props, restProps = __rest(props, ["makClassName", "componentTheme", "componentBorder", "componentText", "componentColor", "fullComponentTheme", "componentThemeMode", "globalThemeMode", "globalTheme", "globalPalette"]);
    const MotionComponent = motion[Component];
    const memoizedMotionProps = useMemo(() => motionProps, [motionProps]);
    const formattedStyleString = formatJsonToHtmlString(styleObject);
    return (<BaseStyledComponent as={MotionComponent} styleObject={styleObject} className={props.makTwClassName} data-class={props.twClassName} data-mak-class={props.makClassName} data-mak-style={formattedStyleString} ref={ref} {...memoizedMotionProps} {...restProps}/>);
});
StyledMotionComponent.displayName = "StyledMotionComponent";
export default StyledMotionComponent;
