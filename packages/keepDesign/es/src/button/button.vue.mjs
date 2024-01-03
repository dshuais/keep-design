import { defineComponent as r, computed as s, openBlock as u, createElementBlock as a, normalizeClass as p, renderSlot as l } from "vue";
import "./index.css";
const d = /* @__PURE__ */ r({
  name: "k-button",
  __name: "button",
  props: {
    type: {}
  },
  setup(e) {
    const t = e, o = s(() => ({ [`k-button--${t.type}`]: t.type }));
    return (n, c) => (u(), a("button", {
      class: p(["k-button", o.value])
    }, [
      l(n.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
