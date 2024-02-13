import { GenericObject } from "..";
import React from "react";
declare const StyledComponent: React.ForwardRefExoticComponent<Omit<{
    as: keyof JSX.IntrinsicElements;
    styleObject: GenericObject;
    className?: string | undefined;
    makClassName?: string | undefined;
    ref?: React.Ref<any> | undefined;
}, "ref"> & React.RefAttributes<unknown>>;
export default StyledComponent;
