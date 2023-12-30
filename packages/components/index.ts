/*
 * @Author: dushuai
 * @Date: 2023-12-30 18:02:57
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-30 18:33:24
 * @Description: 导出组件index入口
 */
import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c as keyof typeof components]);
    }
  },
};
