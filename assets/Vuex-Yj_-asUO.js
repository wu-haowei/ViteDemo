import{_ as x,x as n,w as I,r as u,o as g,a as v,b as c,t as k,f as y,j as r,k as C,D as a,q as N,s as V}from"./index-OHs0j8ym.js";import{_ as p}from"./AppFormFieId-A3Bgz3Ec.js";const w=s=>(N("data-v-996fd309"),s=s(),V(),s),S=w(()=>c("button",{type:"submit"},"登入",-1)),A={__name:"Vuex",setup(s){const i=n(!1);n(""),n("");const _=()=>{a.commit("increment")},d=()=>{a.dispatch("asyncIncrement")},f=e=>{console.log(e),a.dispatch("logIn",{token:b(),account:e.Account,userName:e.Name})},h=e=>{f(e),l.value.resetForm()},b=()=>{for(var e=[],o="0123456789abcdef",t=0;t<36;t++)e[t]=o.substr(Math.floor(Math.random()*16),1);e[14]="4",e[19]=o.substr(e[19]&3|8,1),e[8]=e[13]=e[18]=e[23]="-";var m=e.join("");return m};I(i,(e,o)=>{console.log(o),console.log(e)});const l=n(null);return(e,o)=>{const t=u("ErrorMessage"),m=u("VForm");return g(),v("div",null,[c("p",null,"Count: "+k(y(a).state.count),1),c("button",{onClick:_},"Increment"),c("button",{onClick:d},"Async Increment"),r(m,{ref_key:"formRef1",ref:l,onSubmit:h},{default:C(({errors:D,meta:F,resetForm:M})=>[r(p,{name:"Account",lable:"Account",rules:"required",placeholder:"任意輸入"}),r(p,{name:"Name",lable:"Name",rules:"required",placeholder:"任意輸入"}),r(t,{name:"password"}),S]),_:1},512)])}}},E=x(A,[["__scopeId","data-v-996fd309"]]);export{E as default};
