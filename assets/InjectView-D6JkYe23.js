import{I as m,o as r,a as u,e as d,v as p,f as s,b as a,J as v,p as _,t as c,F as f,j as l,_ as x,x as V,c as g,L as C,r as h}from"./index-MKLqaeYq.js";const j=a("br",null,null,-1),I={__name:"GrandChild",setup(i){const e=m("money",-2);return(t,n)=>(r(),u(f,null,[j,d(a("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=o=>v(e)?e.value=o:null)},null,512),[[p,s(e),void 0,{number:!0}]]),_(" 孫層："+c(s(e)),1)],64))}},w={__name:"Child",setup(i){const e=m("money",-1);return(t,n)=>(r(),u(f,null,[d(a("input",{type:"number","onUpdate:modelValue":n[0]||(n[0]=o=>v(e)?e.value=o:null)},null,512),[[p,s(e),void 0,{number:!0}]]),_(" 子層："+c(s(e))+" ",1),l(I)],64))}},B={class:"about"},G={__name:"InjectView",setup(i){const e=V(0),t=g({get(){return e.value},set(n){n<50?e.value=n:(e.value=49,console.log("超過數量"))}});return C("money",t),(n,o)=>{const y=h("GrandChild");return r(),u("div",B,[d(a("input",{type:"number","onUpdate:modelValue":o[0]||(o[0]=b=>t.value=b)},null,512),[[p,t.value,void 0,{number:!0}]]),_(" 父層："+c(t.value)+" ",1),l(y),l(w)])}}},U=x(G,[["__scopeId","data-v-11fef78d"]]);export{U as default};
