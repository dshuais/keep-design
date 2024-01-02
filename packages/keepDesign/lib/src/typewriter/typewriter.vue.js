"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./index.less.js");
const _hoisted_1 = { class: "k-typewriter" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "k-typewriter"
  },
  __name: "typewriter",
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, "打字机");
    };
  }
});
exports.default = _sfc_main;
