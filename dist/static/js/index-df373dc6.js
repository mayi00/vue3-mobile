import{V as e}from"./vconsole-106eaa0e.js";import"./vue-8f808dd4.js";import{k as t,o as r,l as o,q as n}from"./@vue-e4b88812.js";import{c as i,a as s}from"./vue-router-480b4e45.js";/* empty css                      */import"./amfe-flexible-1f7bb7f4.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const c=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r};const l=c({},[["render",function(e,n){const i=t("router-view");return r(),o(i)}],["__file","E:/06-前端学习资料/02-自己的项目/vue3-demo/src/App.vue"]]),a={},m=function(e,t,r){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=function(e){return"/vue3-demo/"+e}(e))in a)return;a[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()},u=[{path:"/quickEntry",name:"QuickEntry",component:()=>m((()=>import("./index-3e062dff.js")),["static/js/index-3e062dff.js","static/css/index-1c7af5fd.css","static/css/normalize-0619723e.css","static/js/vue-8f808dd4.js","static/js/@vue-e4b88812.js","static/js/vue-router-480b4e45.js","static/js/vconsole-106eaa0e.js","static/js/amfe-flexible-1f7bb7f4.js"]),meta:{title:"快捷入口列表"}},{path:"/",redirect:"quickEntry",meta:{title:"重定向"}},{path:"/home",name:"Home",component:()=>m((()=>import("./index-6cdc4d13.js")),["static/js/index-6cdc4d13.js","static/css/index-06382927.css","static/css/normalize-0619723e.css","static/js/vue-8f808dd4.js","static/js/@vue-e4b88812.js","static/js/vant-3e785c6e.js","static/css/vant-d180ca3d.css","static/js/@vant-fb9adb05.js","static/js/vue-router-480b4e45.js","static/js/vconsole-106eaa0e.js","static/js/amfe-flexible-1f7bb7f4.js"]),meta:{title:"首页"}}],d=i({history:s(),routes:u,scrollBehavior:()=>({left:0,top:0})});d.beforeEach(((e,t,r)=>{e.meta.title?document.title=e.meta.title:document.title||(document.title="vue3-demo"),r()}));new e({maxLogNumber:1e3,theme:"light"});const f={VITE_NODE_ENV:"test",BASE_URL:"/vue3-demo/",MODE:"test",DEV:!0,PROD:!1};console.log("当前环境变量==>",f),"test"===f.VITE_NODE_ENV&&new e;const p=n(l);p.use(d),p.mount("#app");export{c as _,u as r};
