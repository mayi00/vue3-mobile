import{_ as a,y as e,K as l,c as u,h as s,t,u as v,B as n,L as i,a as o,w as c,n as m,d as r,G as p,o as d,H as f}from"./.pnpm-C5MItbDN.js";import{g as w}from"./utils-La5l4_bj.js";const T={class:"title"},_={class:"tip"},j=r({name:"ReactionTime"}),y=a(Object.assign(j,{setup(a){const r=e(!0),j=e(!1),y=e(!1),b=e("反应时间测试"),g=e("当背景颜色从红色变成绿色时，请点击。"),h=e(""),k=e("");let x;function C(){h.value||(r.value?(b.value="请等待...",g.value="",r.value=!1,j.value=!0,y.value=!1,function(){clearTimeout(x);const a=w(1e3,6e3);x=setTimeout((()=>{r.value=!1,j.value=!1,y.value=!0,b.value="请点击！",k.value=new Date}),a)}()):y.value&&(h.value=new Date-k.value,k.value="",b.value="".concat(h.value," ms"),r.value=!0,j.value=!1,y.value=!1,h.value<100?g.value="你确定没有作弊吗？":h.value<150?g.value="苏炳添在比赛时反应时间最短的一次为124ms":h.value<200?g.value="博尔特在北京奥运会决赛时的反应时间为165ms":h.value<500?g.value="一般人反应时间在300ms左右":h.value<1e3?g.value="这个反应时间有点慢呀":h.value<2e3?g.value="你是不是喝多了啊？":g.value="你睡着了吗？"))}function D(){h.value="",C()}return l((()=>{clearTimeout(x)})),(a,e)=>{const l=p;return d(),u("main",{class:m(["reaction-time-main",{start:v(r),wait:v(j),end:v(y)}])},[s("div",{class:"reaction-time-box",onClick:C},[s("h3",T,t(v(b)),1),s("p",_,t(v(g)),1),n(o(l,{plain:"",type:"primary",onClick:D},{default:c((()=>[f("再测一次")])),_:1},512),[[i,v(h)]])])],2)}}}),[["__scopeId","data-v-73d20f82"]]);export{y as default};