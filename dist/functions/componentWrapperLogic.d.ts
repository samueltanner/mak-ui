import { useMakUi } from "../context/useMakUi";
import { TypeProps, ComponentWrapperResponse } from "../types/index";
export declare const componentWrapperLogic: ({ props, makUi, type, }: {
    props: TypeProps;
    makUi: ReturnType<typeof useMakUi>;
    type?: string | undefined;
}) => ComponentWrapperResponse & TypeProps;
