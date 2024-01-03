import s from "./typewriter.vue.mjs";
const a = (n) => {
  const t = n;
  return t.install = (o) => {
    const e = t.name;
    o.component(e, t);
  }, t;
}, m = a(s);
export {
  m as Typewriter,
  m as default
};
