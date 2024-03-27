import { MakComponent } from "./MakComponent";
import React, { forwardRef, useMemo } from "react";
const componentCache = {};
const handler = {
    get(_, tag) {
        if (!componentCache[tag]) {
            const ForwardedComponent = forwardRef((props, ref) => {
                const memoizedProps = useMemo(() => {
                    return Object.assign({}, props);
                }, [props]);
                return <MakComponent component={tag} {...memoizedProps} ref={ref}/>;
            });
            ForwardedComponent.displayName = `Mak${tag.charAt(0).toUpperCase() + tag.slice(1)}`;
            componentCache[tag] = ForwardedComponent;
        }
        return componentCache[tag];
    },
};
const mak = new Proxy({}, handler);
export { mak };
