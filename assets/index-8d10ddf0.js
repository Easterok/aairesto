import{d as h,b as a,ab as m,o,c as u,h as D,n as i,i as d,av as p,q as b,k as f,_ as B}from"./index-6367d8ff.js";const N=["data-inline","data-comma"],C=["title"],M=h({__name:"DateTimeCell",props:{date:{},inline:{type:Boolean},hidetoday:{type:Boolean},comma:{type:Boolean}},setup(y){const n=y,l=a(()=>n.date.split("+")[0]),_=a(()=>n.date.split("+")[1]),k=a(()=>{const[e,s]=_.value.split(":"),t=new Date;return t.setHours(t.getHours()+Number(e)),t.setMinutes(t.getMinutes()+Number(s)),t}),c=a(()=>k.value.toJSON()),v=a(()=>m.jsonParse(c.value)),r=a(()=>{const e=l.value;return m.fromLocalNativeDate(new Date(e)).daySame(v.value)?"сегодня":"[day:numeric] [month:long]"});return(e,s)=>(o(),u("div",{class:i(e.$style.cell),"data-inline":e.inline,"data-comma":e.comma},[D(d(p),{mask:`[hour:numeric]:[minute:numeric]${e.comma?",":""}`,class:i(!e.comma&&"ark-text_semibold"),date:l.value},null,8,["mask","class","date"]),r.value!=="сегодня"?(o(),b(d(p),{key:0,class:"ark-text_64 ark-text_body-s-2",mask:r.value,date:e.date},null,8,["mask","date"])):e.hidetoday?f("",!0):(o(),u("p",{key:1,class:"ark-text_64 ark-text_body-s-2",title:c.value}," сегодня ",8,C))],10,N))}}),w="_cell_pssch_1",$={cell:w},g={$style:$},j=B(M,[["__cssModules",g]]);export{j as D};
