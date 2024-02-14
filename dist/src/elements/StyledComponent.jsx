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
import styled from "@emotion/styled";
import React, { forwardRef } from "react";
import { formatJsonToHtmlString } from "../functions/helpers";
const BaseStyledComponent = styled.div(({ styleObject }) => (Object.assign({}, styleObject)));
const StyledComponent = forwardRef((_a, ref) => {
    var { as: Component = "div", styleObject } = _a, props = __rest(_a, ["as", "styleObject"]);
    const formattedStyleString = formatJsonToHtmlString(styleObject);
    return (<BaseStyledComponent as={Component} styleObject={styleObject} className={props.makTwClassName} data-class={props.twClassName} data-mak-class={props.makClassName} data-mak-style={formattedStyleString} ref={ref} {...props}/>);
});
StyledComponent.displayName = "StyledComponent";
export default StyledComponent;
