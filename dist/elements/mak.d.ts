import { MakUiElementProps } from "../types/index";
import { ComponentType, Ref } from "react";
type ExtendedHTMLElement<K extends keyof JSX.IntrinsicElements> = ComponentType<JSX.IntrinsicElements[K] & MakUiElementProps & {
    ref?: Ref<any>;
}>;
type Mak = {
    [K in keyof JSX.IntrinsicElements]: ExtendedHTMLElement<K>;
};
declare const mak: Mak;
export default mak;
