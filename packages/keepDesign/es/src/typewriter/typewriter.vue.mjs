import { defineComponent, openBlock, createElementBlock } from "vue";
import "./index.css";
const _hoisted_1 = { class: "k-typewriter" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "k-typewriter"
  },
  __name: "typewriter",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, "打字机");
    };
  }
});
export {
  _sfc_main as default
};
