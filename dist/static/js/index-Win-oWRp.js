import{_ as e,y as t,K as n,c as a,h as o,u as l,f as s,D as i,g as r,M as c,d,o as u,O as g,P as p,Q as h}from"./.pnpm-C5MItbDN.js";import{d as v}from"./utils-La5l4_bj.js";const f=e=>(p("data-v-2e79f9aa"),e=e(),h(),e),b={class:"esign-container"},m={class:"esign-warpper"},C={class:"btn-warpper"},w=[f((()=>o("span",{class:"btn-text"},"清空",-1)))],y=[f((()=>o("span",{class:"btn-text"},"保存签名",-1)))],E=d({name:"ESignature"}),k=e(Object.assign(E,{setup(e){const d=t(null),p=t("#fff"),h=t(300),f=t(800),E=t("portrait");function k(){const e=document.documentElement.clientWidth||document.body.clientWidth,t=document.documentElement.clientHeight||document.body.clientHeight;console.log("屏幕的宽：",e),console.log("屏幕的高：",t),e<t?(h.value=.88*e,f.value=t,E.value="portrait"):(h.value=e,f.value=.88*t,E.value="landscape")}function _(){d.value.reset()}function W(){d.value.generate().then((e=>{v(e,"您的签名")})).catch((e=>{console.warn(e)}))}return n((()=>{window.removeEventListener("resize",k)})),window.addEventListener("resize",k),k(),(e,t)=>(u(),a("div",b,[o("div",m,["portrait"===l(E)?(u(),s(l(g),{key:0,ref_key:"refEsign",ref:d,bgColor:l(p),"onUpdate:bgColor":t[0]||(t[0]=e=>i(p)?p.value=e:null),lineWidth:5,lineColor:"#000000",width:l(h),height:l(f),isClearBgColor:!1},null,8,["bgColor","width","height"])):r("",!0),"landscape"===l(E)?(u(),s(l(g),{key:1,ref_key:"refEsign",ref:d,bgColor:l(p),"onUpdate:bgColor":t[1]||(t[1]=e=>i(p)?p.value=e:null),lineWidth:4,lineColor:"#000000",width:l(h),height:l(f),isClearBgColor:!1},null,8,["bgColor","width","height"])):r("",!0)]),o("div",C,[o("div",{class:"btn clear-btn",onClick:c(_,["stop"])},w),o("div",{class:"btn confirm-btn",onClick:c(W,["stop"])},y)])]))}}),[["__scopeId","data-v-2e79f9aa"]]);export{k as default};
