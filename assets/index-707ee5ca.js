import{d as L,a3 as ee,b as i,o as l,c as _,h as m,k as o,A as H,F as D,g as A,q as P,i as k,j as W,t as B,al as X,_ as E,I as re,B as ue,r as V,am as ie,a5 as de,w as Z,a7 as U,S as Y,n as M,a,l as G,s as oe,an as ce,G as te,z as pe,ah as me,a0 as ae,m as ve,P as _e,ao as fe,ap as ye,u as he,U as ke}from"./index-45eddc23.js";import{M as ge,I as ze,O as be}from"./index-118a0edc.js";import{D as $e,T as we}from"./index-8f7dc1f1.js";import{R as se}from"./index-ee4a8297.js";import{a as Se}from"./index-affaf93a.js";import{D as Q}from"./index-52237709.js";import"./index-4b73aacf.js";const Ce={class:"ark-page"},xe=["data-size"],Ie=1,Pe=1,De=L({__name:"Page",props:{index:{},length:{},activePadding:{default:1},sidePadding:{default:1},uisize:{default:"s"}},emits:["update:index"],setup(b,{emit:$}){const w=b,C=$,{index:d,length:y,sidePadding:u,activePadding:c}=ee(w),f=i(()=>u.value+c.value+Pe),v=i(()=>f.value*2+Ie),x=i(()=>y.value<=v.value),t=i(()=>x.value?y.value:v.value),n=i(()=>t.value-1),p=i(()=>y.value-1),I=i(()=>p.value-d.value),g=i(()=>!x.value&&d.value>f.value),T=i(()=>!x.value&&I.value>f.value),j=i(()=>{const z=t.value,S=u.value,e=f.value,r=n.value,h=d.value,s=p.value,K=g.value,ne=T.value;return new Array(z).fill(null).map((dt,O)=>{if(O<S)return O;if(O===S&&K)return null;const F=r-O;if(F===S&&ne)return null;if(F<S)return s-F;const le=h-e+O;return X(le,O,s-F)})}),R=i(()=>d.value===0),N=i(()=>I.value===0),J=z=>{q(X(d.value+z,0,p.value))},q=z=>{C("update:index",z)};return(z,S)=>(l(),_("div",Ce,[m(o(H),{appearance:"page-icon",shape:"square",icon:"arrow-left",size:z.uisize,disabled:R.value,onClick:S[0]||(S[0]=e=>J(-1))},null,8,["size","disabled"]),(l(!0),_(D,null,A(j.value,(e,r)=>(l(),_(D,{key:r},[e!==null?(l(),P(o(H),{key:0,shape:"square",size:z.uisize,appearance:o(d)===e?"primary":"table-page-page",onClick:h=>q(e)},{default:k(()=>[W(B(e+1),1)]),_:2},1032,["size","appearance","onClick"])):(l(),_("div",{key:1,class:"ark-page__dots","data-size":z.uisize},null,8,xe))],64))),128)),m(o(H),{appearance:"page-icon",shape:"square",icon:"arrow-right",size:z.uisize,disabled:N.value,onClick:S[1]||(S[1]=e=>J(1))},null,8,["size","disabled"])]))}});const Be=E(De,[["__scopeId","data-v-a21c0783"]]),Me=(b,$)=>b===$,Oe={...re,hasCleaner:!1,editable:!1,dropdownProps:()=>({}),items:()=>[],identityMatcher:Me},Ue=["data-active","onClick"],Ve=L({name:"BaseSelect",__name:"Select",props:ue({modelValue:{},placeholder:{},type:{},maskOptions:{},autocomplete:{},name:{},modelModifiers:{},size:{},label:{},required:{type:Boolean},inputmode:{},pseudoFocused:{type:Boolean},hasCleaner:{type:Boolean},editable:{type:Boolean},disabled:{type:Boolean},invalid:{type:Boolean},decoratorPostfix:{},readonly:{type:Boolean},focusOnClear:{type:Boolean},items:{},dropdownProps:{},identityMatcher:{type:Function}},Oe),emits:["update:modelValue"],setup(b,{emit:$}){const w=b,C=$,{modelValue:d,invalid:y}=ee(w),u=V(!1),c=V(null),f=ie(null),v=de(y);Z(d,()=>{u.value&&(u.value=!1)}),Z(u,t=>{!t&&f&&f.markAsTouch()});const x=t=>{var n;C("update:modelValue",t),(n=c.value)==null||n.focus()};return(t,n)=>(l(),P(o(me),te(t.dropdownProps,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=p=>u.value=p),class:t.$style.host}),{dropdown:k(()=>[U(t.$slots,"dropdown",{},()=>[m(o($e),{style:{"overflow-y":"initial"}},{default:k(()=>[t.items===null?(l(),_("div",{key:0,class:M(t.$style.button)},[m(o(Y),{name:"spinner",class:"ark-space_auto",style:{color:"var(--ark-text-color-64)"}})],2)):(l(!0),_(D,{key:1},A(t.items,(p,I)=>(l(),P(o(ge),{key:I,active:t.identityMatcher(o(d),p)},{default:k(({active:g})=>[a("button",{type:"button","data-ark-data-list-item":"",role:"option",class:M(t.$style.button),"data-active":g,onClick:oe(T=>x(p),["stop","prevent"])},[U(t.$slots,"itemContent",{item:p,active:g},()=>[W(B(p),1)]),g?(l(),P(o(Y),{key:0,class:"ark-space_left-auto",name:"check"})):G("",!0)],10,Ue)]),_:2},1032,["active"]))),128)),U(t.$slots,"action")]),_:3})])]),default:k(()=>[m(o(pe),te(w,{ref_key:"baseInputExposed",ref:c,"model-value":o(d),invalid:o(v),"pseudo-focused":u.value}),ce({right:k(()=>[a("div",{class:M(t.$style.icon)},[m(o(Y),{name:"arrow-down",rotate:u.value},null,8,["rotate"])],2)]),_:2},[t.$slots.left?{name:"left",fn:k(()=>[U(t.$slots,"left")]),key:"0"}:void 0,t.$slots.value?{name:"value",fn:k(({value:p})=>[U(t.$slots,"value",{value:p})]),key:"1"}:void 0]),1040,["model-value","invalid","pseudo-focused"])]),_:3},16,["modelValue","class"]))}}),Te="_host_dkfek_1",Ae="_icon_dkfek_5",Le="_button_dkfek_14",Ee={host:Te,icon:Ae,button:Le},Re={$style:Ee},Ne=E(Ve,[["__cssModules",Re]]),qe={class:"ark-size"},Fe=["data-size"],He=L({__name:"Size",props:{size:{},total:{default:null},items:{default:()=>[10,20,50,100]},uisize:{default:"s"}},emits:["update:size"],setup(b,{emit:$}){const w=b,C=$,d=i(()=>w.items.reduce((f,v)=>Math.max(f,v),0)),y=i(()=>({minHeight:w.items.length*44,minWidth:`${d.value}`.length*36})),u=c=>{c!==null&&C("update:size",c)};return(c,f)=>(l(),_("div",qe,[a("div",null,[a("p",{class:"ark-size__hidden","data-size":c.uisize},B(d.value),9,Fe),m(o(Ne),{size:c.uisize,"model-value":c.size,items:c.items,"has-cleaner":!1,"dropdown-props":y.value,"onUpdate:modelValue":u},null,8,["size","model-value","items","dropdown-props"])])]))}});const Ge=E(He,[["__scopeId","data-v-9f58b2ea"]]),We={class:"ark-pagination"},je=L({__name:"Pagination",props:{pagination:{},sizeOptions:{},total:{default:null},uisize:{default:"s"}},emits:["update:pagination"],setup(b,{emit:$}){const w={xs:"s",s:"m"},C=b,d=$,{pagination:y,total:u}=ee(C),c=i(()=>{const{page:t}=y.value;return t-1}),f=i(()=>{const t=u.value;if(!t)return 1;const{size:n}=y.value;return X(Math.ceil(t/n),1,1/0)}),v=t=>{const n=y.value;d("update:pagination",{...n,page:t+1})},x=t=>{d("update:pagination",{...C.pagination,page:1,size:t})};return(t,n)=>(l(),_("div",We,[m(Be,{uisize:t.uisize,index:c.value,length:f.value,"onUpdate:index":v},null,8,["uisize","index","length"]),U(t.$slots,"default",{},void 0,!0),m(Ge,{size:o(y).size,total:o(u),items:t.sizeOptions,uisize:w[t.uisize],"onUpdate:size":x},null,8,["size","total","items","uisize"])]))}});const Je=E(je,[["__scopeId","data-v-f14a5094"]]),Ke=a("p",{class:"ark-text_body-s ark-space_bottom-1 ark-text_64"},"Заказы",-1),Ye={style:{"white-space":"nowrap"}},Qe={key:0},Xe=a("p",{class:"ark-text_body-s ark-space_left-2 ark-space_bottom-1 ark-text_64"}," Дата заказа ",-1),Ze=a("p",{class:"ark-text_body-s ark-space_bottom-1 ark-text_64"}," Статус заказа ",-1),et={class:"ark-table"},tt=a("thead",null,[a("th",null,"Стол"),a("th",null,"Гостей"),a("th",null,"Позиций в заказе"),a("th",null,"Время заказа"),a("th",null,"Ожидаемое время ухода"),a("th",null,"Фактическое время ухода"),a("th",null,"Статус")],-1),at={key:1},st=a("td",{colspan:"7"},"Нет данных",-1),ot=[st],nt=L({__name:"Orders",props:{id:{}},setup(b){const $=b,w=ae.currentLocal(),C=he(),d=ve(),u=_e().computedSmallerThen("mobile"),c={New:"Новые",Closed:"Закрытые",Deleted:"Удаленные",Bill:"Пречек",Banquet:"Банкет"},f=Object.keys(c);class v{constructor(r,h){this.day=r,this.name=h}toString(){return this.name}}function x(){const e=ae.currentLocal(),r=e.append({day:-1}),h=e.append({day:-e.dayOfWeek()}),s=e.append({day:1-e.day}),K=s.append({month:-1});return[new v(ye,"За все время"),new v(e,"За сегодня"),new v(r,"Со вчера"),new v(h,"С понедельника"),new v(s,"За текущий месяц"),new v(K,"С прошлого месяца")]}const t=x(),n=V({from:t[1].day,status:"New",size:20,page:1}),p=V(!1),I=V(null),g=V(!1),T=i(()=>{var e;return p.value?Se:((e=I.value)==null?void 0:e.results)||[]}),j=i(()=>{const e=R.value;return t.every(r=>!N(e,r))}),R=i(()=>{const{from:e}=n.value;return e||null}),N=(e,r)=>!!e&&e.daySame(r.day);Z(n,e=>{var r;p.value=!0,C.loadOrders.execute({restaurant_id:$.id,start_time:(r=e.from)==null?void 0:r.toJSON(),status:e.status,page_size:e.size,page:e.page}).then(h=>{h&&(I.value=h,p.value=!1)}).catch(([h,s])=>{s!==403&&(d.show("Не удалось загрузить заказы",{type:"error",label:"Ошибка"}),p.value=!1)})},{immediate:!0});const q=e=>{n.value={...n.value,from:e.day,page:1},g.value=!1},z=e=>{n.value={...n.value,status:e,page:1}},S=e=>{n.value={...n.value,from:e,page:1}};return(e,r)=>{var h;return l(),_(D,null,[a("form",{class:M(["ark-space_bottom-6",e.$style.form]),onSubmit:r[1]||(r[1]=oe(()=>{},["prevent"]))},[a("div",null,[Ke,a("div",{class:M(e.$style.radioitems)},[(l(!0),_(D,null,A(o(t),s=>(l(),P(o(se),{key:s.toString(),"hide-radio":"",size:o(u)?"xs":"s",name:"ReportPeriods","model-value":R.value,item:s,"identity-matcher":N,style:{"--ark-background-color":"var(--ark-text-color-08)"},"onUpdate:modelValue":q},{default:k(()=>[a("span",Ye,B(s),1)]),_:2},1032,["size","model-value","item"]))),128))],2)]),a("div",null,[m(o(H),{size:o(u)?"xs":"s","icon-right":"arrow-down",type:"button",appearance:g.value||j.value?"primary":"neutral","right-rotate":g.value,onClick:r[0]||(r[0]=s=>g.value=!g.value)},{default:k(()=>[W(" Другая дата ")]),_:1},8,["size","appearance","right-rotate"])]),m(fe,{name:"fade"},{default:k(()=>[g.value?(l(),_("div",Qe,[Xe,m(o(ze),{placeholder:"дд.мм.гггг","model-value":n.value.from,max:o(w),"onUpdate:modelValue":S},null,8,["model-value","max"])])):G("",!0)]),_:1}),a("div",null,[Ze,a("div",{class:M(e.$style.radioitems)},[(l(!0),_(D,null,A(o(f),s=>(l(),P(o(se),{key:s,"model-value":n.value.status,"hide-radio":"",size:o(u)?"xs":"s",style:{"--ark-background-color":"var(--ark-text-color-08)"},name:"OrderStatus",item:s,"onUpdate:modelValue":z},{default:k(()=>[W(B(c[s]||s),1)]),_:2},1032,["model-value","size","item"]))),128))],2)])],34),m(o(Je),{pagination:n.value,"onUpdate:pagination":r[2]||(r[2]=s=>n.value=s),class:"ark-space_bottom-4",total:((h=I.value)==null?void 0:h.count)||0},null,8,["pagination","total"]),a("div",et,[m(o(ke),null,{default:k(()=>[a("table",null,[tt,a("tbody",null,[T.value.length>0?(l(!0),_(D,{key:0},A(T.value,s=>(l(),_("tr",{key:s.id,class:M(p.value&&"ark-skeleton")},[a("td",null,[m(o(we),{ids:s.tables||s.table},null,8,["ids"])]),a("td",null,B(s.num_people),1),a("td",null,B(s.item_count),1),a("td",null,[m(Q,{date:s.start_time},null,8,["date"])]),a("td",null,[s.prediction_time?(l(),P(Q,{key:0,date:s.prediction_time},null,8,["date"])):G("",!0)]),a("td",null,[s.end_time?(l(),P(Q,{key:0,date:s.end_time},null,8,["date"])):G("",!0)]),a("td",null,[m(o(be),{status:s.status},null,8,["status"])])],2))),128)):(l(),_("tr",at,ot))])])]),_:1})])],64)}}}),lt="_form_1e77q_1",rt="_radioitems_1e77q_7",ut={form:lt,radioitems:rt},it={$style:ut},ht=E(nt,[["__cssModules",it]]);export{ht as default};
