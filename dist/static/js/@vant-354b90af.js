import"./vue-22a14526.js";import{i as n,o as e,c as i,r as t,g as r,u as o}from"./@vue-1f0ad867.js";var a,d,s="undefined"!=typeof window,u=(n,e)=>({top:0,left:0,right:n,bottom:e,width:n,height:e}),l=n=>{const e=o(n);if(e===window){const n=e.innerWidth,i=e.innerHeight;return u(n,i)}return(null==e?void 0:e.getBoundingClientRect)?e.getBoundingClientRect():u(0,0)};function w(o){const a=n(o,null);if(a){const n=r(),{link:t,unlink:o,internalChildren:d}=a;t(n),e((()=>o(n)));return{parent:a,index:i((()=>d.indexOf(n)))}}return{parent:null,index:t(-1)}}function h(){if(!a&&(a=t(0),d=t(0),s)){const n=()=>{a.value=window.innerWidth,d.value=window.innerHeight};n(),window.addEventListener("resize",n,{passive:!0}),window.addEventListener("orientationchange",n,{passive:!0})}return{width:a,height:d}}var f=Symbol("van-field");export{f as C,l as a,w as b,h as u};