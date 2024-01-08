export declare const KButton: import("../../script/utils/install").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
    };
}, {
    buttonProps: any;
    emit: (event: "click", ...args: any[]) => void;
    buttonClass: import("vue").ComputedRef<{
        [x: string]: any;
    }>;
    handleClick: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>> & Record<string, any>;
export default KButton;
