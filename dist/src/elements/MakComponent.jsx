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
import { isEmptyObject } from "@/functions/helpers";
import StyledMotionComponent from "./StyledMotionComponent";
import { mergeDefaultConfig } from "../functions/helpers";
const MakComponent = memo(forwardRef((_a, ref) => {
    var { component, motion, useConfig } = _a, props = __rest(_a, ["component", "motion", "useConfig"]);
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
    const { styleObject, twClassName, makClassName } = response, responseRest = __rest(response, ["styleObject", "twClassName", "makClassName"]);
    const { baseClassObject = {}, pseudoClassObject = {} } = styleObject;
    useEffect(() => {
        if (((resolvedMakClassName === null || resolvedMakClassName === void 0 ? void 0 : resolvedMakClassName.includes("group-")) ||
            (resolvedMakClassName === null || resolvedMakClassName === void 0 ? void 0 : resolvedMakClassName.includes("peer-"))) &&
            styleSheet) {
            const updatedStyleSheet = Object.assign({}, styleSheet);
            Object.entries(pseudoClassObject).forEach(([key, value]) => {
                if (!styleSheet[key]) {
                    updatedStyleSheet[key] = value;
                    setStyleSheet(updatedStyleSheet);
                }
            });
        }
    }, [setStyleSheet, pseudoClassObject]);
    resolvedClassName = [resolvedClassName, resolvedMakClassName]
        .join(" ")
        .trim();
    const allProps = Object.assign({ className: resolvedClassName, makClassName: resolvedMakClassName, component, defaultConfig: componentConfig }, responseRest);
    const inlineStyles = Object.assign(Object.assign({}, baseClassObject), pseudoClassObject);
    const isMotionObject = motion && !isEmptyObject(motion);
    if (isMotionObject) {
        return (<StyledMotionComponent ref={ref} styleObject={inlineStyles} as={component} motionProps={motion} {...allProps}/>);
    }
    return (<StyledComponent ref={ref} styleObject={inlineStyles} as={component} {...allProps}/>);
}));
MakComponent.displayName = "MakComponent";
export { MakComponent };
