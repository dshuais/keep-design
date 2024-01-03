/*
 * @Author: dushuai
 * @Date: 2023-12-30 18:02:53
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-03 15:45:19
 * @Description: 组件导出文件
 */
import _Button from "./button.vue";
import type { App, Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;

/**
 * 自动注册组件
 * @param component 
 * @returns 
 */
const withInstall = <T>(component: T) => {
  const comp = component as SFCWithInstall<T>;
  comp.install = (app: App) => {
    const name = (comp as any).name;
    // 注册组件
    app.component(name, comp);
  };
  return comp;
};

export const KButton = withInstall(_Button);
export default KButton;
