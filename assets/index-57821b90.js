import{I as c,d as i,C as m,r as d,o as f,q as x,H as y,i as _,B}from"./index-6367d8ff.js";const P=/\d/,k=n=>n.split("").map(t=>t==="x"?P:t),h=["+","7",...k(" (xxx) xxx-xx-xx")];function v(){const n=o=>o.replace(/^(\+?7?\s?8?)\s?/,""),t=o=>o.replace(/\D/g,"").length,l=(o,e)=>o?e:e==="8"?"7":e;return({elementState:o,data:e})=>{const{value:s,selection:r}=o;return{elementState:{selection:r,value:t(s)>11?n(s):s},data:t(e)>=11?n(e):l(s,e)}}}const D={mask:h,preprocessors:[v()]},I={...c,autocomplete:"tel",type:"tel",name:"tel",placeholder:"+7",maskOptions:()=>D},V=i({name:"InputPhone",__name:"InputPhone",props:m({modelValue:{},placeholder:{},type:{},maskOptions:{},autocomplete:{},name:{},modelModifiers:{},size:{},label:{},required:{type:Boolean},inputmode:{},pseudoFocused:{type:Boolean},hasCleaner:{type:Boolean},editable:{type:Boolean},disabled:{type:Boolean},invalid:{type:Boolean},decoratorPostfix:{},readonly:{type:Boolean},focusOnClear:{type:Boolean}},I),emits:["update:modelValue","focused"],setup(n,{expose:t,emit:l}){const o=n,e=l,s=d(null),r=a=>{e("update:modelValue",a||"")};return t({focus:()=>{var a;(a=s.value)==null||a.focus()}}),(a,p)=>(f(),x(_(B),y(o,{ref_key:"inputTextRef",ref:s,inputmode:"numeric","model-value":a.modelValue,"onUpdate:modelValue":r,onFocused:p[0]||(p[0]=u=>e("focused",u))}),null,16,["model-value"]))}});export{V as _};
