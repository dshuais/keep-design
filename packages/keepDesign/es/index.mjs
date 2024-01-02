import * as index$1 from "./src/index.mjs";
import { Button } from "./src/button/index.mjs";
import { Typewriter } from "./src/typewriter/index.mjs";
const index = {
  install: (app) => {
    for (let c in index$1) {
      app.use(index$1[c]);
    }
  }
};
export {
  Button,
  Typewriter,
  index as default
};
