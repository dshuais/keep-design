"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
require("./index.css");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "k-button"
  },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonClass = vue.computed(() => {
      return { [`k-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass(["k-button", buttonClass.value])
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
exports.default = _sfc_main;
