function t(t,e){const n=Number(t),r=Number(e);return Math.floor(Math.random()*(r-n+1))+n}function e(t,e){const n=document.createElement("a"),r=function(t){const e=t.split(";base64,"),n=e[0].split(":")[1],r=window.atob(e[1]),o=new ArrayBuffer(r.length),c=new Uint8Array(o);for(let a=0;a<r.length;a++)c[a]=r.charCodeAt(a);return new Blob([c],{type:n})}(t),o=document.createEvent("HTMLEvents");n.download=e,o.initEvent("click",!0,!0),n.href=URL.createObjectURL(r),n.click()}export{e as d,t as g};