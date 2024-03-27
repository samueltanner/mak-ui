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
import React, { forwardRef, useMemo, memo, useEffect } from "react";
import { useMakUi } from "../context/useMakUi";
import { componentWrapperLogic } from "../functions/componentWrapperLogic";
import StyledComponent from "./StyledComponent";
import { isEmptyObject } from "../functions/helpers";
import StyledMotionComponent from "./StyledMotionComponent";
import { mergeDefaultConfig } from "../functions/helpers";
const MakComponent = memo(forwardRef((_a, ref) => {
    var { component, motion, useConfig, logComputedClasses } = _a, props = __rest(_a, ["component", "motion", "useConfig", "logComputedClasses"]);
    const makUi = useMakUi();
    const { setStyleSheet, styleSheet } = makUi;
    let { resolvedClassName, resolvedMakClassName, componentConfig } = mergeDefaultConfig({
        makUi,
        useConfig,
        component,
        className: props === null || props === void 0 ? void 0 : props.className,
        makClassName: props === null || props === void 0 ? void 0 : props.makClassName,
    });
    const response = useMemo(() => {
        return componentWrapperLogic({
            props: props,
            makUi,
        });
    }, [props, makUi]);
    const { makCSSObject, twClassName, makClassName } = response, responseRest = __rest(response, ["makCSSObject", "twClassName", "makClassName"]);
    useEffect(() => {
        if (((resolvedMakClassName === null || resolvedMakClassName === void 0 ? void 0 : resolvedMakClassName.includes("group-")) ||
            (resolvedMakClassName === null || resolvedMakClassName === void 0 ? void 0 : resolvedMakClassName.includes("peer-"))) &&
            styleSheet) {
            const updatedStyleSheet = Object.assign({}, styleSheet);
            Object.entries(makCSSObject || {}).forEach(([key, value]) => {
                if (key.match(/(group)|(peer)/g) && !styleSheet[key]) {
                    updatedStyleSheet[key] = value;
                    setStyleSheet(updatedStyleSheet);
                }
            });
        }
    }, [setStyleSheet, makCSSObject]);
    const resolvedCombinedClassName = [
        resolvedClassName || "",
        resolvedMakClassName || "",
        makClassName || "",
    ]
        .join(" ")
        .trim();
    const allProps = Object.assign({ makTwClassName: resolvedCombinedClassName, twClassName: resolvedClassName, makClassName: resolvedMakClassName, component, defaultConfig: componentConfig }, responseRest);
    const inlineStyles = Object.assign({}, makCSSObject);
    if (logComputedClasses) {
        console.log(`MakUi computed props for component: ${component}`, {
            makTwClassName: resolvedCombinedClassName,
            twClassName: resolvedClassName,
            makClassName: resolvedMakClassName,
            makCSSObject: inlineStyles,
        });
    }
    const isMotionObject = motion && !isEmptyObject(motion);
    if (isMotionObject) {
        return (<StyledMotionComponent ref={ref} styleObject={inlineStyles} as={component} motionProps={motion} {...allProps}/>);
    }
    return (<StyledComponent ref={ref} styleObject={inlineStyles} as={component} {...allProps}/>);
}));
MakComponent.displayName = "MakComponent";
export { MakComponent };
