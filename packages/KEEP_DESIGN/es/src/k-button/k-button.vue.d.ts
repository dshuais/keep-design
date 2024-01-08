import _Button from './k-button.vue';
/**
 * 定义instance类型
 */
export declare type KButtonInstance = InstanceType<typeof _Button>;
/**
 * 定义props类型
 */
export declare type KButtonProps = {
    type?: string;
};
/**
 * 定义emit类型
 */
export declare type KButtonEmits = {
    (e: 'click'): void;
};
declare const _sfc_main: import("vue").DefineComponent<{
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
}, {}, {}>;
export default _sfc_main;
