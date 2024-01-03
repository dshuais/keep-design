import * as t from "./src/index.mjs";
import { Button as f } from "./src/button/index.mjs";
import { Typewriter as s } from "./src/typewriter/index.mjs";
const r = {
  install: (e) => {
    for (let o in t)
      e.use(t[o]);
  }
};
export {
  f as Button,
  s as Typewriter,
  r as default
};
