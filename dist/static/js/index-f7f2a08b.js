import{V as e}from"./vconsole-68fe7f32.js";import"./vue-3085f2d2.js";import{j as t,o,k as r,l as n}from"./@vue-4d2ccc69.js";import{c as s,a as i}from"./vue-router-deb675cb.js";import{c}from"./vuex-2f8932f5.js";import{a as l}from"./vuex-persistedstate-1d34ce44.js";import"./lib-flexible-29152b4f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var u=(e,t)=>{const o=e.__vccOpts||e;for(const[r,n]of t)o[r]=n;return o};var a=u({},[["render",function(e,n){const s=t("router-view");return o(),r(s)}],["__file","E:/06-前端学习资料/02-自己的项目/vue3-demo/src/App.vue"]]);const m={},d=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/vue3-demo/${e}`)in m)return;m[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((t,o)=>{r.addEventListener("load",t),r.addEventListener("error",(()=>o(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},f=[{path:"/quickEntry",name:"QuickEntry",component:()=>d((()=>import("./index-50fc4ddc.js")),["static/js/index-50fc4ddc.js","static/css/index-ea9f8cba.css","static/js/vue-3085f2d2.js","static/js/@vue-4d2ccc69.js","static/js/vue-router-deb675cb.js","static/js/vconsole-68fe7f32.js","static/js/vuex-2f8932f5.js","static/js/vuex-persistedstate-1d34ce44.js","static/js/lib-flexible-29152b4f.js"]),meta:{title:"快捷入口列表页面",icon:""}},{path:"/",redirect:"home",meta:{title:"重定向",icon:""}},{path:"/home",name:"Home",component:()=>d((()=>import("./index-17b0032f.js")),["static/js/index-17b0032f.js","static/css/index-881cf755.css","static/js/vue-3085f2d2.js","static/js/@vue-4d2ccc69.js","static/js/vue-router-deb675cb.js","static/js/vuex-2f8932f5.js","static/js/vconsole-68fe7f32.js","static/js/vuex-persistedstate-1d34ce44.js","static/js/lib-flexible-29152b4f.js"]),meta:{title:"首页",icon:""}}],p=s({history:i(),routes:f,scrollBehavior:()=>({left:0,top:0})});p.beforeEach(((e,t,o)=>{e.meta.title?document.title=e.meta.title:document.title||(document.title="vue3-demo"),o()}));const v=c({state:{userInfo:{id:"",name:"张三",sex:"男"}},mutations:{setUserInfo(e,t){e.userInfo=t}},actions:{},plugins:[l({key:"vue3-demo"})]});new e({maxLogNumber:1e3});console.log("当前环境变量==>",{VITE_NODE_ENV:"test",BASE_URL:"/vue3-demo/",MODE:"test",DEV:!0,PROD:!1});n(a).use(p).use(v).mount("#app");export{u as _,f as r};