import{B as a}from"./vant-fa75a88c.js";import"./vue-22a14526.js";import{_ as e}from"./index-a58a9e20.js";import{l,r as s,F as u,K as v,O as i,P as t,H as o,Q as n,R as m,E as r,v as c}from"./@vue-1f0ad867.js";import"./@vant-354b90af.js";import"./vconsole-1b502f12.js";import"./axios-f09ad530.js";import"./vue-router-b11a0b14.js";import"./pinia-9710ccab.js";import"./vue-demi-e447ba8a.js";import"./pinia-plugin-persistedstate-4761f546.js";/* empty css                      */import"./lib-flexible-29152b4f.js";const p={class:"common-container"},f={class:"desc"},d={class:"tip"},b=c("再测一次"),j=l({name:"ReactionTime"}),x=e(Object.assign(j,{setup(e){const l=s(!0),c=s(!1),j=s(!1),x=s("反应时间测试"),_=s("当背景颜色从红色变成绿色时，请点击。"),w=s("");function h(){w.value||(l.value?(x.value="请等待...",_.value="",l.value=!1,c.value=!0,j.value=!1,function(){clearTimeout(k);const a=(e=1e3,s=5e3,e=Number(e),s=Number(s),Math.floor(Math.random()*(s-e+1))+e);var e,s;k.value=setTimeout((()=>{l.value=!1,c.value=!1,j.value=!0,x.value="请点击！",y.value=new Date}),a)}()):c.value||j.value&&(w.value=new Date-y.value,y.value="",x.value=`${w.value} ms`,l.value=!0,c.value=!1,j.value=!1,w.value<100?_.value="你确定没有作弊吗？":w.value<150?_.value="苏炳添反应时间最快一次为124ms":w.value<200?_.value="博尔特在北京奥运会决赛时的反应时间为165ms":w.value<400?_.value="一般人反应时间在300ms左右":w.value<1e3?_.value="这个反应时间有点慢呀":_.value="你睡着了吗？"))}const k=s(null);const y=s("");function C(){w.value="",h()}return(e,s)=>{const k=a;return r(),u("div",p,[v("div",{class:m(["common-main reaction-time-main",{start:l.value,wait:c.value,end:j.value}])},[v("div",{class:"reaction-time-box",onClick:h},[v("h3",f,i(x.value),1),v("p",d,i(_.value),1),w.value?(r(),t(k,{key:0,plain:"",type:"primary",onClick:C},{default:o((()=>[b])),_:1})):n("v-if",!0)])],2)])}}}),[["__scopeId","data-v-9a038f7d"],["__file","D:/Code/vue-mobile/src/views/reaction-time/index.vue"]]);export{x as default};
