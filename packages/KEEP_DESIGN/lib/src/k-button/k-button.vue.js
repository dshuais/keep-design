"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const r=e.defineComponent({name:"k-button",__name:"k-button",props:{type:{}},emits:["click"],setup(n,{emit:o}){const t=n,u=o,c=e.computed(()=>({[`k-button--${t.type}`]:t.type}));function l(){u("click")}return(s,i)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["k-button",c.value]),onClick:l},[e.renderSlot(s.$slots,"default")],2))}});exports.default=r;