"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const typewriter_vue_vue_type_script_setup_true_lang = require("./typewriter.vue.js");
const withInstall = (component) => {
  const comp = component;
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Typewriter = withInstall(typewriter_vue_vue_type_script_setup_true_lang.default);
exports.Typewriter = Typewriter;
exports.default = Typewriter;
