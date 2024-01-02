import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import "./index.css";
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "k-button"
  },
  __name: "button",
  props: {
    type: {}
  },
  setup(__props) {
    const buttonProps = __props;
    const buttonClass = computed(() => {
      return { [`k-button--${buttonProps.type}`]: buttonProps.type };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["k-button", buttonClass.value])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
