import{d as h,b as a,o,c as m,h as D,n as u,k as d,aq as i,q as f,l as b,a0 as p,_ as B}from"./index-45eddc23.js";const N=["data-inline","data-comma"],C=["title"],M=h({__name:"DateTimeCell",props:{date:{},inline:{type:Boolean},hidetoday:{type:Boolean},comma:{type:Boolean}},setup(y){const n=y,l=a(()=>n.date.split("+")[0]),_=a(()=>n.date.split("+")[1]),k=a(()=>{const[e,s]=_.value.split(":"),t=new Date;return t.setHours(t.getHours()+Number(e)),t.setMinutes(t.getMinutes()+Number(s)),t}),c=a(()=>k.value.toJSON()),v=a(()=>p.jsonParse(c.value)),r=a(()=>{const e=l.value;return p.fromLocalNativeDate(new Date(e)).daySame(v.value)?"сегодня":"[day:numeric] [month:long]"});return(e,s)=>(o(),m("div",{class:u(e.$style.cell),"data-inline":e.inline,"data-comma":e.comma},[D(d(i),{mask:`[hour:numeric]:[minute:numeric]${e.comma?",":""}`,class:u(!e.comma&&"ark-text_semibold"),date:l.value},null,8,["mask","class","date"]),r.value!=="сегодня"?(o(),f(d(i),{key:0,class:"ark-text_64 ark-text_body-s-2",mask:r.value,date:e.date},null,8,["mask","date"])):e.hidetoday?b("",!0):(o(),m("p",{key:1,class:"ark-text_64 ark-text_body-s-2",title:c.value}," сегодня ",8,C))],10,N))}}),w="_cell_pssch_1",$={cell:w},g={$style:$},j=B(M,[["__cssModules",g]]);export{j as D};
