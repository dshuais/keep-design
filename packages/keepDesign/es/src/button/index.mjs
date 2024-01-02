import _sfc_main from "./button.vue.mjs";
const withInstall = (component) => {
  const comp = component;
  comp.install = (app) => {
    const name = comp.name;
    app.component(name, comp);
  };
  return comp;
};
const Button = withInstall(_sfc_main);
export {
  Button,
  Button as default
};
