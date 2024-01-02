import * as components from "./index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    KButton: typeof components.Button;
  }
}
export { };

console.log(components);
