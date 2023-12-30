/*
 * @Author: dushuai
 * @Date: 2023-12-30 19:29:09
 * @LastEditors: dushuai
 * @LastEditTime: 2023-12-30 19:52:19
 * @Description: 描述
 */
import * as components from "./index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KButton: typeof components.Button;
  }
}
export {};

console.log(components);
