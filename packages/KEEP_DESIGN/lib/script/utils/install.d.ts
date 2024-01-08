import type { App, Plugin } from 'vue';
export declare type SFCWithInstall<T> = T & Plugin;
/**
 * 自动注册组件
 * @param main 组件
 * @param extra
 * @returns
 */
export declare const withInstall: <T, E extends Record<string, any>>(main: T, extra?: E | undefined) => SFCWithInstall<T> & E;
/**
 * 组件安装
 * @param components
 * @returns
 */
export declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App) => void;
};
