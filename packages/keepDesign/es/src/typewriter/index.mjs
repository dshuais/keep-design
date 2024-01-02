import _sfc_main from "./typewriter.vue.mjs";
const withInstall = (component) => {
  const comp = component;
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Typewriter = withInstall(_sfc_main);
export {
  Typewriter,
  Typewriter as default
};
