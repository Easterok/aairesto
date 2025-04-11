import{ax as Oe,r as w,ay as be,w as M,N as K,m as U,f as Re,b as h,i as p,az as Ee,aA as we,A as J,$ as Q,aB as k,af as je}from"./index-6367d8ff.js";function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?X(Object(t),!0).forEach(function(r){Ce(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ce(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ee(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return Object.keys(e).reduce((t,r)=>(n.includes(r)||(t[r]=p(e[r])),t),{})}function G(e){return typeof e=="function"}function Pe(e){return Ee(e)||we(e)}function oe(e,n,t){let r=e;const s=n.split(".");for(let o=0;o<s.length;o++){if(!r[s[o]])return t;r=r[s[o]]}return r}function z(e,n,t){return h(()=>e.some(r=>oe(n,r,{[t]:!1})[t]))}function te(e,n,t){return h(()=>e.reduce((r,s)=>{const o=oe(n,s,{[t]:!1})[t]||[];return r.concat(o)},[]))}function ie(e,n,t,r){return e.call(r,p(n),p(t),r)}function ue(e){return e.$valid!==void 0?!e.$valid:!e}function xe(e,n,t,r,s,o,g){let{$lazy:d,$rewardEarly:f}=s,u=arguments.length>7&&arguments[7]!==void 0?arguments[7]:[],m=arguments.length>8?arguments[8]:void 0,i=arguments.length>9?arguments[9]:void 0,c=arguments.length>10?arguments[10]:void 0;const v=w(!!r.value),a=w(0);t.value=!1;const l=M([n,r].concat(u,c),()=>{if(d&&!r.value||f&&!i.value&&!t.value)return;let $;try{$=ie(e,n,m,g)}catch(y){$=Promise.reject(y)}a.value++,t.value=!!a.value,v.value=!1,Promise.resolve($).then(y=>{a.value--,t.value=!!a.value,o.value=y,v.value=ue(y)}).catch(y=>{a.value--,t.value=!!a.value,o.value=y,v.value=!0})},{immediate:!0,deep:typeof n=="object"});return{$invalid:v,$unwatch:l}}function Ae(e,n,t,r,s,o,g,d){let{$lazy:f,$rewardEarly:u}=r;const m=()=>({}),i=h(()=>{if(f&&!t.value||u&&!d.value)return!1;let c=!0;try{const v=ie(e,n,g,o);s.value=v,c=ue(v)}catch(v){s.value=v}return c});return{$unwatch:m,$invalid:i}}function Ve(e,n,t,r,s,o,g,d,f,u,m){const i=w(!1),c=e.$params||{},v=w(null);let a,l;e.$async?{$invalid:a,$unwatch:l}=xe(e.$validator,n,i,t,r,v,s,e.$watchTargets,f,u,m):{$invalid:a,$unwatch:l}=Ae(e.$validator,n,t,r,v,s,f,u);const $=e.$message;return{$message:G($)?h(()=>$(ee({$pending:i,$invalid:a,$params:ee(c),$model:n,$response:v,$validator:o,$propertyPath:d,$property:g}))):$||"",$params:c,$pending:i,$invalid:a,$response:v,$unwatch:l}}function Me(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=p(e),t=Object.keys(n),r={},s={},o={};let g=null;return t.forEach(d=>{const f=n[d];switch(!0){case G(f.$validator):r[d]=f;break;case G(f):r[d]={$validator:f};break;case d==="$validationGroups":g=f;break;case d.startsWith("$"):o[d]=f;break;default:s[d]=f}}),{rules:r,nestedValidators:s,config:o,validationGroups:g}}const Se="__root";function Te(e,n,t,r,s,o,g,d,f){const u=Object.keys(e),m=r.get(s,e),i=w(!1),c=w(!1),v=w(0);if(m){if(!m.$partial)return m;m.$unwatch(),i.value=m.$dirty.value}const a={$dirty:i,$path:s,$touch:()=>{i.value||(i.value=!0)},$reset:()=>{i.value&&(i.value=!1)},$commit:()=>{}};return u.length?(u.forEach(l=>{a[l]=Ve(e[l],n,a.$dirty,o,g,l,t,s,f,c,v)}),a.$externalResults=h(()=>d.value?[].concat(d.value).map((l,$)=>({$propertyPath:s,$property:t,$validator:"$externalResults",$uid:`${s}-externalResult-${$}`,$message:l,$params:{},$response:null,$pending:!1})):[]),a.$invalid=h(()=>{const l=u.some($=>p(a[$].$invalid));return c.value=l,!!a.$externalResults.value.length||l}),a.$pending=h(()=>u.some(l=>p(a[l].$pending))),a.$error=h(()=>a.$dirty.value?a.$pending.value||a.$invalid.value:!1),a.$silentErrors=h(()=>u.filter(l=>p(a[l].$invalid)).map(l=>{const $=a[l];return U({$propertyPath:s,$property:t,$validator:l,$uid:`${s}-${l}`,$message:$.$message,$params:$.$params,$response:$.$response,$pending:$.$pending})}).concat(a.$externalResults.value)),a.$errors=h(()=>a.$dirty.value?a.$silentErrors.value:[]),a.$unwatch=()=>u.forEach(l=>{a[l].$unwatch()}),a.$commit=()=>{c.value=!0,v.value=Date.now()},r.set(s,e,a),a):(m&&r.set(s,e,a),a)}function Le(e,n,t,r,s,o,g){const d=Object.keys(e);return d.length?d.reduce((f,u)=>(f[u]=Z({validations:e[u],state:n,key:u,parentKey:t,resultsCache:r,globalConfig:s,instance:o,externalResults:g}),f),{}):{}}function Ge(e,n,t){const r=h(()=>[n,t].filter(a=>a).reduce((a,l)=>a.concat(Object.values(p(l))),[])),s=h({get(){return e.$dirty.value||(r.value.length?r.value.every(a=>a.$dirty):!1)},set(a){e.$dirty.value=a}}),o=h(()=>{const a=p(e.$silentErrors)||[],l=r.value.filter($=>(p($).$silentErrors||[]).length).reduce(($,y)=>$.concat(...y.$silentErrors),[]);return a.concat(l)}),g=h(()=>{const a=p(e.$errors)||[],l=r.value.filter($=>(p($).$errors||[]).length).reduce(($,y)=>$.concat(...y.$errors),[]);return a.concat(l)}),d=h(()=>r.value.some(a=>a.$invalid)||p(e.$invalid)||!1),f=h(()=>r.value.some(a=>p(a.$pending))||p(e.$pending)||!1),u=h(()=>r.value.some(a=>a.$dirty)||r.value.some(a=>a.$anyDirty)||s.value),m=h(()=>s.value?f.value||d.value:!1),i=()=>{e.$touch(),r.value.forEach(a=>{a.$touch()})},c=()=>{e.$commit(),r.value.forEach(a=>{a.$commit()})},v=()=>{e.$reset(),r.value.forEach(a=>{a.$reset()})};return r.value.length&&r.value.every(a=>a.$dirty)&&i(),{$dirty:s,$errors:g,$invalid:d,$anyDirty:u,$error:m,$pending:f,$touch:i,$reset:v,$silentErrors:o,$commit:c}}function Z(e){let{validations:n,state:t,key:r,parentKey:s,childResults:o,resultsCache:g,globalConfig:d={},instance:f,externalResults:u}=e;const m=s?`${s}.${r}`:r,{rules:i,nestedValidators:c,config:v,validationGroups:a}=Me(n),l=x(x({},d),v),$=r?h(()=>{const b=p(t);return b?p(b[r]):void 0}):t,y=x({},p(u)||{}),j=h(()=>{const b=p(u);return r?b?p(b[r]):void 0:b}),R=Te(i,$,r,g,m,l,f,j,t),O=Le(c,$,m,g,l,f,j),E={};a&&Object.entries(a).forEach(b=>{let[V,P]=b;E[V]={$invalid:z(P,O,"$invalid"),$error:z(P,O,"$error"),$pending:z(P,O,"$pending"),$errors:te(P,O,"$errors"),$silentErrors:te(P,O,"$silentErrors")}});const{$dirty:C,$errors:T,$invalid:B,$anyDirty:$e,$error:fe,$pending:_,$touch:F,$reset:ve,$silentErrors:ge,$commit:q}=Ge(R,O,o),me=r?h({get:()=>p($),set:b=>{C.value=!0;const V=p(t),P=p(u);P&&(P[r]=y[r]),K(V[r])?V[r].value=b:V[r]=b}}):null;r&&l.$autoDirty&&M($,()=>{C.value||F();const b=p(u);b&&(b[r]=y[r])},{flush:"sync"});async function pe(){return F(),l.$rewardEarly&&(q(),await k()),await k(),new Promise(b=>{if(!_.value)return b(!B.value);const V=M(_,()=>{b(!B.value),V()})})}function he(b){return(o.value||{})[b]}function ye(){K(u)?u.value=y:Object.keys(y).length===0?Object.keys(u).forEach(b=>{delete u[b]}):Object.assign(u,y)}return U(x(x(x({},R),{},{$model:me,$dirty:C,$error:fe,$errors:T,$invalid:B,$anyDirty:$e,$pending:_,$touch:F,$reset:ve,$path:m||Se,$silentErrors:ge,$validate:pe,$commit:q},o&&{$getResultsForChild:he,$clearExternalResults:ye,$validationGroups:E}),O))}class Ne{constructor(){this.storage=new Map}set(n,t,r){this.storage.set(n,{rules:t,result:r})}checkRulesValidity(n,t,r){const s=Object.keys(r),o=Object.keys(t);return o.length!==s.length||!o.every(d=>s.includes(d))?!1:o.every(d=>t[d].$params?Object.keys(t[d].$params).every(f=>p(r[d].$params[f])===p(t[d].$params[f])):!0)}get(n,t){const r=this.storage.get(n);if(!r)return;const{rules:s,result:o}=r,g=this.checkRulesValidity(n,t,s),d=o.$unwatch?o.$unwatch:()=>({});return g?o:{$dirty:o.$dirty,$partial:!0,$unwatch:d}}}const L={COLLECT_ALL:!0,COLLECT_NONE:!1},re=Symbol("vuelidate#injectChildResults"),ne=Symbol("vuelidate#removeChildResults");function Ie(e){let{$scope:n,instance:t}=e;const r={},s=w([]),o=h(()=>s.value.reduce((m,i)=>(m[i]=p(r[i]),m),{}));function g(m,i){let{$registerAs:c,$scope:v,$stopPropagation:a}=i;a||n===L.COLLECT_NONE||v===L.COLLECT_NONE||n!==L.COLLECT_ALL&&n!==v||(r[c]=m,s.value.push(c))}t.__vuelidateInjectInstances=[].concat(t.__vuelidateInjectInstances||[],g);function d(m){s.value=s.value.filter(i=>i!==m),delete r[m]}t.__vuelidateRemoveInstances=[].concat(t.__vuelidateRemoveInstances||[],d);const f=J(re,[]);Q(re,t.__vuelidateInjectInstances);const u=J(ne,[]);return Q(ne,t.__vuelidateRemoveInstances),{childResults:o,sendValidationResultsToParent:f,removeValidationResultsFromParent:u}}function le(e){return new Proxy(e,{get(n,t){return typeof n[t]=="object"?le(n[t]):h(()=>n[t])}})}let ae=0;function De(e,n){var t;let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};arguments.length===1&&(r=e,e=void 0,n=void 0);let{$registerAs:s,$scope:o=L.COLLECT_ALL,$stopPropagation:g,$externalResults:d,currentVueInstance:f}=r;const u=f||((t=Oe())===null||t===void 0?void 0:t.proxy),m=u?u.$options:{};s||(ae+=1,s=`_vuelidate_${ae}`);const i=w({}),c=new Ne,{childResults:v,sendValidationResultsToParent:a,removeValidationResultsFromParent:l}=u?Ie({$scope:o,instance:u}):{childResults:w({})};if(!e&&m.validations){const $=m.validations;n=w({}),be(()=>{n.value=u,M(()=>G($)?$.call(n.value,new le(n.value)):$,y=>{i.value=Z({validations:y,state:n,childResults:v,resultsCache:c,globalConfig:r,instance:u,externalResults:d||u.vuelidateExternalResults})},{immediate:!0})}),r=m.validationsConfig||r}else{const $=K(e)||Pe(e)?e:U(e||{});M($,y=>{i.value=Z({validations:y,state:n,childResults:v,resultsCache:c,globalConfig:r,instance:u??{},externalResults:d})},{immediate:!0})}return u&&(a.forEach($=>$(i,{$registerAs:s,$scope:o,$stopPropagation:g})),Re(()=>l.forEach($=>$(s)))),h(()=>x(x({},p(i.value)),v.value))}function Be(e,n,t,r){const s=n.value,o=w(!1),g=w({}),d=h(()=>{const R=t.value[e].$errors;return o.value||R.length===0?{}:R.reduce((O,E)=>({...O,[E.$validator]:typeof E.$message=="string"?E.$message:E.$message.value}),{...g.value})}),f=h(()=>{const R=Object.keys(g.value);return R.length===0?null:{[R[0]]:g.value[R[0]]}}),u=h(()=>{const R=f.value,O=t.value[e].$errors[0];return o.value||!O&&!R?null:O?{[O.$validator]:typeof O.$message=="string"?O.$message:O.$message.value}:R}),m=h(()=>o.value?!1:!!u.value),i=h(()=>!m.value),c=R=>{n.value=R},v=()=>{o.value||t.value[e].$touch()},a=()=>{o.value=!0},l=()=>{o.value=!1},$=()=>{c(s),t.value[e].$reset()},y=R=>{g.value=R},j=R=>{g.value=Object.keys(g.value).reduce((O,E)=>R.includes(E)?O:{...O,[E]:g.value[E]},{})};return r.validateOn==="valueChange"&&M(n,()=>{v()}),{error:u,errors:d,value:n,setValue:c,invalid:m,valid:i,reset:$,disabled:o,disable:a,enable:l,markAsTouch:v,setErrors:y,removeErrors:j,configuration:r}}function rt(e){const n=Object.keys(e).reduce((i,c)=>{const[v,a]=e[c];return{...i,[c]:a||{}}},{}),t=Object.keys(e).reduce((i,c)=>{const[v]=e[c];return{...i,[c]:w(v)}},{}),r=De(n,t),s=Object.keys(t).reduce((i,c)=>{const v=e[c][2]||{validateOn:"blur"};return{...i,[c]:Be(c,t[c],r,v)}},{}),o=h(()=>Object.keys(s).some(i=>s[i].invalid.value)),g=h(()=>!o.value),d=h(()=>o.value?Object.keys(s).filter(i=>s[i].invalid.value).reduce((i,c)=>({...i,[c]:s[c].errors.value}),{}):{}),f=()=>{Object.keys(s).forEach(i=>s[i].markAsTouch())};return{invalid:o,valid:g,markAsTouch:f,errors:d,validate:()=>{f()},value:t,getCurrentValue:()=>Object.keys(t).reduce((i,c)=>({...i,[c]:t[c].value}),{}),...s}}const _e={AD:"+376###-###",AE:"+971-##-###-####",AF:"+93##-###-####",AG:"+1(268) ###-####",AI:"+1(264) ###-####",AL:"+355(###) ###-###",AM:"+374##-###-###",AO:"+244(###) ###-###",AR:"+54(###) ####-####",AT:"+43(###) ###-####",AU:"+61#-####-####",AW:"+297###-####",AZ:"+994##-###-##-##",BA:"+387 ###-####-##",BB:"+1(246) ###-####",BD:"+880##-###-###",BE:"+32(###) ###-###",BF:"+226##-##-####",BG:"+359(###) ###-###",BH:"+973####-####",BI:"+257##-##-####",BJ:"+229##-##-####",BL:"+590 ## ## ## ## ##",BM:"+1(441) ###-####",BN:"+673###-####",BO:"+591#-###-####",BQ:"+599-###-####",BR:"+55(##) ####-####",BS:"+1(242) ###-####",BT:"+975#-###-###",BW:"+267##-###-###",BY:"+375(##) ###-##-##",BZ:"+501###-####",CA:"+1(###) ###-####",CD:"+243(###) ###-###",CF:"+236-##-##-####",CG:"+242##-###-####",CH:"+41##-###-####",CI:"+225##-##-###-###",CL:"+56#-####-####",CM:"+237#####-####",CN:"+86(###) ####-####",CO:"+57(###) ###-####",CR:"+506####-####",CU:"+53#-###-####",CV:"+238(###) ##-##",CW:"+5999-###-####",CY:"+357##-###-###",CZ:"+420(###) ###-###",DE:"+49(###) ###-###-##",DJ:"+253##-##-##-##",DK:"+45##-##-##-##",DM:"+1(767) ###-####",DO:"+1(###) ###-####",DZ:"+213##-###-####",EC:"+593##-###-####",EE:"+372####-####",EG:"+20(###) ###-####",ER:"+291#-###-###",ES:"+34(###) ###-###",ET:"+251##-###-####",FI:"+358(###) ###-##-##",FJ:"+679##-#####",FK:"+500#####",FM:"+691###-####",FR:"+33 ## ## ## ## ##",GA:"+241##-##-##-##",GB:"+44##-####-####",GD:"+1(473) ###-####",GE:"+995(###) ###-###",GF:"+594 ## ## ## ## ##",GH:"+233(###) ###-###",GI:"+350###-#####",GL:"+299##-##-##",GM:"+220(###) ##-##",GN:"+224##-###-###",GP:"+590 ## ## ## ## ##",GQ:"+240##-###-####",GR:"+30(###) ###-####",GT:"+502#-###-####",GW:"+245#-######",GY:"+592###-####",HK:"+852####-####",HN:"+504####-####",HR:"+385##-###-####",HT:"+509##-##-####",HU:"+36(###) ###-###",ID:"+62(###) ###-##-###",IE:"+353(###) ###-###",IL:"+972##-###-####",IN:"+91(####) ###-###",IQ:"+964(###) ###-####",IR:"+98(###) ###-####",IS:"+354###-####",IT:"+39(###) ####-###",JM:"+1(876) ###-####",JO:"+962#-####-####",JP:"+81-##-####-####",KE:"+254###-######",KG:"+996(###) ###-###",KH:"+855##-###-###",KM:"+269##-#####",KN:"+1(869) ###-####",KP:"+850####-#############",KR:"+82##-###-####",KW:"+965####-####",KY:"+1(345) ###-####",KZ:"+7(###) ###-##-##",LA:"+856##-##-###-###",LB:"+961##-###-###",LC:"+1(758) ###-####",LI:"+423(###) ###-####",LK:"+94##-###-####",LR:"+231##-###-###",LS:"+266#-###-####",LT:"+370(###) ##-###",LU:"+352(###) ###-###",LV:"+371##-###-###",LY:"+218##-###-####",MA:"+212##-####-###",MC:"+377###-###-###",MD:"+373####-####",ME:"+382##-###-###",MF:"+590 ## ## ## ## ##",MG:"+261##-##-#####",MK:"+389##-###-###",ML:"+223##-##-####",MM:"+95##-###-###",MN:"+976##-##-####",MO:"+853####-####",MQ:"+596 ## ## ## ## ##",MR:"+222##-##-####",MS:"+1(664) ###-####",MT:"+356####-####",MU:"+230####-####",MV:"+960###-####",MW:"+265#-####-####",MX:"+52(###) ###-####",MY:"+60(###) ###-###",MZ:"+258##-###-###",NA:"+264##-###-####",NC:"+687 ### ###",NE:"+227##-##-####",NG:"+234(###) ###-####",NI:"+505####-####",NL:"+31##-###-####",NO:"+47(###) ##-###",NP:"+977##-###-###",NZ:"+64(###) ###-####",OM:"+968##-###-###",PA:"+507###-####",PE:"+51(###) ###-###",PF:"+689 ## ## ## ##",PG:"+675(###) ##-###",PH:"+63(###) ###-####",PK:"+92(###) ###-####",PL:"+48(###) ###-###",PT:"+351##-###-####",PW:"+680###-####",PY:"+595(###) ###-###",QA:"+974####-####",RE:"+262 ## ## ## ## ##",RO:"+40##-###-####",RS:"+381##-###-####",RU:"+7### ###-##-##",RW:"+250(###) ###-###",SA:"+966#-####-####",SB:"+677###-####",SC:"+248#-###-###",SD:"+249##-###-####",SE:"+46##-###-####",SG:"+65####-####",SH:"+290####",SI:"+386##-###-###",SK:"+421(###) ###-###",SL:"+232##-######",SM:"+378####-######",SN:"+221##-###-####",SO:"+252##-###-###",SR:"+597###-####",ST:"+239##-#####",SV:"+503##-##-####",SX:"+1(721) ###-####",SY:"+963##-####-###",SZ:"+268##-##-####",TC:"+1(649) ###-####",TD:"+235##-##-##-##",TG:"+228##-###-###",TH:"+66##-###-####",TJ:"+992##-###-####",TL:"+670###-#####",TM:"+993#-###-####",TN:"+216##-###-###",TO:"+676#####",TR:"+90(###) ###-####",TT:"+1(868) ###-####",TW:"+886#-####-####",TZ:"+255##-###-####",UA:"+380(##) ###-##-##",UG:"+256(###) ###-###",US:"+1(###) ###-####",UY:"+598#-###-##-##",UZ:"+998##-###-####",VC:"+1(784) ###-####",VE:"+58(###) ###-####",VG:"+1(284)###-####",VN:"+84(###) ####-###",VU:"+678##-#####",WS:"+685##-####",XK:"+383##-###-###",YE:"+967###-###-###",YT:"+262 ## ## ## ## ##",ZA:"+27##-###-####",ZM:"+260##-###-####",ZW:"+263#-######"},W=Object.values(_e).reduce((e,n)=>{const t=n.replace(/\([#]+\)|[#\- ]/g,"").replace(/[()]/g,"");return e[t]=n.replace(/[^+#\d]+/g,"").length,e},{}),Fe=Object.keys(W);function ze(e,n=!1){if(e==="+")return!1;const t=`+${je(e)}`,r=Fe.find(o=>t.startsWith(o)),s=t.length;return r?n?s===W[r]:r.length===t.length||s===W[r]:!1}function se(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?se(Object(t),!0).forEach(function(r){Ke(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Ke(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(e){return typeof e=="function"}function H(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function I(e){return N(e.$validator)?S({},e):{$validator:e}}function ce(e){return typeof e=="object"?e.$valid:e}function de(e){return e.$validator||e}function Ze(e,n){if(!H(e))throw new Error(`[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ${typeof e}`);if(!H(n)&&!N(n))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=I(n);return t.$params=S(S({},t.$params||{}),e),t}function We(e,n){if(!N(e)&&typeof p(e)!="string")throw new Error(`[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ${typeof e}`);if(!H(n)&&!N(n))throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");const t=I(n);return t.$message=e,t}function He(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];const t=I(e);return S(S({},t),{},{$async:!0,$watchTargets:n})}function Ue(e){return{$validator(n){for(var t=arguments.length,r=new Array(t>1?t-1:0),s=1;s<t;s++)r[s-1]=arguments[s];return p(n).reduce((o,g,d)=>{const f=Object.entries(g).reduce((u,m)=>{let[i,c]=m;const v=e[i]||{},a=Object.entries(v).reduce((l,$)=>{let[y,j]=$;const O=de(j).call(this,c,g,d,...r),E=ce(O);if(l.$data[y]=O,l.$data.$invalid=!E||!!l.$data.$invalid,l.$data.$error=l.$data.$invalid,!E){let C=j.$message||"";const T=j.$params||{};typeof C=="function"&&(C=C({$pending:!1,$invalid:!E,$params:T,$model:c,$response:O})),l.$errors.push({$property:i,$message:C,$params:T,$response:O,$model:c,$pending:!1,$validator:y})}return{$valid:l.$valid&&E,$data:l.$data,$errors:l.$errors}},{$valid:!0,$data:{},$errors:[]});return u.$data[i]=a.$data,u.$errors[i]=a.$errors,{$valid:u.$valid&&a.$valid,$data:u.$data,$errors:u.$errors}},{$valid:!0,$data:{},$errors:{}});return{$valid:o.$valid&&f.$valid,$data:o.$data.concat(f.$data),$errors:o.$errors.concat(f.$errors)}},{$valid:!0,$data:[],$errors:[]})},$message:n=>{let{$response:t}=n;return t?t.$errors.map(r=>Object.values(r).map(s=>s.map(o=>o.$message)).reduce((s,o)=>s.concat(o),[])):[]}}}const Y=e=>{if(e=p(e),Array.isArray(e))return!!e.length;if(e==null)return!1;if(e===!1)return!0;if(e instanceof Date)return!isNaN(e.getTime());if(typeof e=="object"){for(let n in e)return!0;return!1}return!!String(e).length},Ye=e=>(e=p(e),Array.isArray(e)?e.length:typeof e=="object"?Object.keys(e).length:String(e).length);function A(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r=>(r=p(r),!Y(r)||n.every(s=>(s.lastIndex=0,s.test(r))))}var D=Object.freeze({__proto__:null,forEach:Ue,len:Ye,normalizeValidatorObject:I,regex:A,req:Y,unwrap:p,unwrapNormalizedValidator:de,unwrapValidatorResponse:ce,withAsync:He,withMessage:We,withParams:Ze});A(/^[a-zA-Z]*$/);A(/^[a-zA-Z0-9]*$/);A(/^\d*(\.\d+)?$/);const qe=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;var Je=A(qe),Qe={$validator:Je,$message:"Value is not a valid email address",$params:{type:"email"}};function ke(e){return typeof e=="string"&&(e=e.trim()),Y(e)}var Xe={$validator:ke,$message:"Value is required",$params:{type:"required"}};const et=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;A(et);A(/(^[0-9]*$)|(^-[0-9]+$)/);A(/^[-]?\d*(\.\d+)?$/);const nt=D.withMessage("validator.required",Xe);D.withMessage("validator.required",e=>e===!0);const at=D.withMessage("validator.email",Qe),st=e=>D.withMessage("validator.phone",n=>n?ze(n,e):!e);export{D as a,rt as c,at as e,nt as r,st as s};
