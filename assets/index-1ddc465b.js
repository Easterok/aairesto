import{d as p,B as r,aN as d,r as l,o as c,c as u,a as i,a7 as _,l as m,n as s,_ as f}from"./index-45eddc23.js";const x={opened:null,duration:"0.2s"},y=["data-opened"],E=p({name:"Expand",__name:"Expand",props:r({opened:{type:[Boolean,null]},duration:{}},x),setup(n){d(e=>({"2e93722e":e.duration}));const o=n,a=l(!1),t=({propertyName:e})=>{e==="grid-template-rows"&&(a.value=!!o.opened)};return(e,$)=>(c(),u("div",{class:s(e.$style.expand),"data-opened":e.opened,onTransitionend:t},[i("div",{class:s(e.$style.wrapper)},[e.opened||a.value?_(e.$slots,"default",{key:0}):m("",!0)],2)],42,y))}}),w="_expand_1te0n_1",B="_wrapper_1te0n_10",v={expand:w,wrapper:B},C={$style:v},k=f(E,[["__cssModules",C]]);export{k as E};
