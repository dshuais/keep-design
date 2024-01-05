/*
 * @Author: dushuai
 * @Date: 2024-01-02 16:36:19
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-05 12:02:33
 * @description: 组件导出文件
 */
import _Typewriter from './typewriter.vue';
import type { App, Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;

/**
 * 自动注册组件
 * @param component
 * @returns
 */
const withInstall = <T>(component: T) => {
  const comp: SFCWithInstall<T> = component as SFCWithInstall<T>;
  comp.install = (app: App) => {
    const name: string = (comp as any).name;
    // 注册组件
    app.component(name, comp);
  };
  return comp;
};

export const KTypewriter = withInstall(_Typewriter);
export default KTypewriter;
