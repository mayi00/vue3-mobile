import{a as e,B as s}from"./vant-f88d159d.js";import"./vue-c3c0c013.js";import{_ as t}from"./index-fa3282d1.js";import{q as a,J as o,K as r,O as c,Q as n,p as i,r as l,d as p,w as u,U as m,F as g,P as v,z as d,W as b,X as f,M as j,n as h,S as y,R as _}from"./@vue-1f59a116.js";import{a as k}from"./axios-f09ad530.js";import"./@vant-b2847f69.js";import"./vconsole-1b502f12.js";import"./vue-router-8cf868d2.js";import"./pinia-7c4a415b.js";import"./vue-demi-5c635832.js";import"./pinia-plugin-persistedstate-4761f546.js";/* empty css                      */import"./lib-flexible-29152b4f.js";const x={class:"chat-right-container"},w={class:"chat-box"},q={class:"chat"},O=a({name:"ChatRight"}),C=t(Object.assign(O,{props:{chat:{type:Object,required:!0}},setup:s=>(t,a)=>{const l=e;return o(),r("div",x,[c("div",w,[c("p",q,n(s.chat.content),1)]),i(l,{class:"avatar-box",fit:"cover",round:"",src:(p="user.jpg",new URL(Object.assign({"/src/assets/images/qingyunke.jpg":"/vue-mobile/static/jpg/qingyunke-677372e9.jpg","/src/assets/images/robot.jpg":"/vue-mobile/static/jpg/robot-0cc365fd.jpg","/src/assets/images/user.jpg":"/vue-mobile/static/jpg/user-b6ba143b.jpg"})[`/src/assets/images/${p}`],self.location).href)},null,8,["src"])]);var p}}),[["__scopeId","data-v-55def404"],["__file","D:/Code/vue-mobile/src/views/robot/components/chat-right.vue"]]),L={class:"chat-left-container"},R={class:"chat-box"},P=["innerHTML"],U=a({name:"ChatLeft"}),T=t(Object.assign(U,{props:{chat:{type:Object,required:!0}},setup:s=>(t,a)=>{const n=e;return o(),r("div",L,[i(n,{class:"avatar-box",fit:"cover",round:"",src:(l="qingyunke.jpg",new URL(Object.assign({"/src/assets/images/qingyunke.jpg":"/vue-mobile/static/jpg/qingyunke-677372e9.jpg","/src/assets/images/robot.jpg":"/vue-mobile/static/jpg/robot-0cc365fd.jpg","/src/assets/images/user.jpg":"/vue-mobile/static/jpg/user-b6ba143b.jpg"})[`/src/assets/images/${l}`],self.location).href)},null,8,["src"]),c("div",R,[c("p",{class:"chat",innerHTML:s.chat.content},null,8,P)])]);var l}}),[["__scopeId","data-v-6ca478e8"],["__file","D:/Code/vue-mobile/src/views/robot/components/chat-left.vue"]]),z=k.create({baseURL:"http://api.qingyunke.com/",timeout:1e4});z.interceptors.request.use((e=>e),(e=>(console.log("请求错误==>",e),Promise.reject(e)))),z.interceptors.response.use((e=>200===e.status?Promise.resolve(e.data):Promise.reject(e)),(e=>(console.log("响应错误==>",e),Promise.reject(e))));const D={class:"common-container"},H={class:"chat-list"},I={class:"common-footer input-wrapper"},K=["onKeydown"],M=_("发送"),B=a({name:"Robot"}),E=t(Object.assign(B,{setup(e){const t=l(""),a=l(null),n=p([]),_=l(null);function k(e){13===e.keyCode&&w()}function x(){}function w(){if(t.value){!function(e){const s={role:"robot",type:"text",content:""};(function(e){return z({url:"/api.php",method:"get",params:e})})({key:"free",appid:"0",msg:e}).then((e=>{0===e.result&&(s.content=e.content.replace(/{br}/g,"</br>").replace(/\[/g,"【").replace(/\]/g,"】"),n.push(s))})).catch((()=>{s.content="正在学习中~",n.push(s)}))}(t.value);const e={role:"user",type:"text",content:t.value};n.push(e),setTimeout((()=>{t.value=""}),0),a.value.focus()}}return u(n,(()=>{h((()=>{_.value.scrollTo({top:_.value.scrollHeight,behavior:"smooth"})}))})),(e,l)=>{const p=s;return o(),r("div",D,[m(" 聊天内容 "),c("div",{ref_key:"chatEl",ref:_,class:"common-wrapper chat-wrapper"},[c("ul",H,[(o(!0),r(g,null,v(n,((e,s)=>(o(),r("li",{class:"chat-item",key:s},["user"===e.role?(o(),y(C,{key:0,chat:e},null,8,["chat"])):(o(),y(T,{key:1,chat:e},null,8,["chat"]))])))),128))])],512),m(" 输入区域 "),c("div",I,[d(c("textarea",{ref_key:"inputEl",ref:a,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),class:"textarea",placeholder:"请输入...",maxlength:"100",onKeydown:f(k,["enter"]),onBlur:x},null,40,K),[[b,t.value,void 0,{trim:!0}]]),i(p,{type:"primary",size:"small",round:"",class:"send-btn",onClick:w},{default:j((()=>[M])),_:1})])])}}}),[["__scopeId","data-v-a083618e"],["__file","D:/Code/vue-mobile/src/views/robot/index.vue"]]);export{E as default};
