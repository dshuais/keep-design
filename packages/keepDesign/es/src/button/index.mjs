import a from "./button.vue.mjs";
const c = (n) => {
  const t = n;
  return t.install = (o) => {
    const s = t.name;
    o.component(s, t);
  }, t;
}, e = c(a);
export {
  e as KButton,
  e as default
};
