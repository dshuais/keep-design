import * as t from "./src/index.mjs";
import { KButton as f } from "./src/button/index.mjs";
import { KTypewriter as s } from "./src/typewriter/index.mjs";
const r = {
  install: (e) => {
    for (let o in t)
      e.use(t[o]);
  }
};
export {
  f as KButton,
  s as KTypewriter,
  r as default
};
