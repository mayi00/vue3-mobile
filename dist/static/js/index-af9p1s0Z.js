import{_ as e,o as t,c as a,h as s,t as n,a as c,u as o,d as r,v as l,x as u,y as i,z as p,A as h,F as m,q as g,B as d,C as v,D as y,E as f,w as b,G as j,f as k,H as x,J as _}from"./.pnpm-C5MItbDN.js";const q=e=>new URL(Object.assign({"/src/assets/images/qingyunke.jpg":"/h5-vue3/static/jpg/qingyunke-FvKMLN3H.jpg","/src/assets/images/user.jpg":"/h5-vue3/static/jpg/user-ctTJ_jMZ.jpg"})["/src/assets/images/".concat(e)],import.meta.url).href,w={class:"chat-user-container"},C={class:"chat-box"},O={class:"chat"},H=r({name:"ChatUser"}),L=e(Object.assign(H,{props:{chat:{type:Object,required:!0}},setup:e=>(r,u)=>{const i=l;return t(),a("div",w,[s("div",C,[s("p",O,n(e.chat.content),1)]),c(i,{class:"avatar-box",fit:"cover",round:"",src:o(q)("user.jpg")},null,8,["src"])])}}),[["__scopeId","data-v-93b53f80"]]),M={class:"chat-robot-container"},I={class:"chat-box"},T=["innerHTML"],U=r({name:"ChatRobot"}),P=e(Object.assign(U,{props:{chat:{type:Object,required:!0}},setup:e=>(n,r)=>{const u=l;return t(),a("div",M,[c(u,{class:"avatar-box",fit:"cover",round:"",src:o(q)("qingyunke.jpg")},null,8,["src"]),s("div",I,[s("p",{class:"chat",innerHTML:e.chat.content},null,8,T)])])}}),[["__scopeId","data-v-c8ae163f"]]),Q=u.create({baseURL:"/proxy-qingyunke"});Q.interceptors.request.use((e=>(e.timeout||(e.timeout=1e4),e)),(e=>new Promise(((t,a)=>{console.log("请求错误==>",e),a(e)})))),Q.interceptors.response.use((e=>new Promise(((t,a)=>{200===e.status?t(e.data):a(e)}))),(e=>new Promise(((t,a)=>{console.log("响应错误==>",e),a(e)}))));const R={getQingyunke:e=>(async({url:e,method:t,params:a,data:s,timeout:n})=>await Q({url:e,method:t,params:a,data:s,timeout:n}))({url:"/api.php",method:"get",params:e,timeout:12e3})},z={class:"chat-container"},F={class:"chat-list"},J={class:"footer"},K=r({name:"Qingyunke"}),A=e(Object.assign(K,{setup(e){const n=i(""),r=i(null),l=p([]),u=i(null);function q(){if(n.value){const e={role:"user",type:"text",content:n.value};l.push(e),function(e){const t={role:"robot",type:"text",content:""},a={key:"free",appid:"0",msg:e};R.getQingyunke(a).then((e=>{0===e.result?t.content=e.content.replace(/{br}/g,"</br>").replace(/\[/g,"【").replace(/\]/g,"】"):t.content="正在学习中~"})).catch((()=>{t.content="出错了~"})).finally((()=>{l.push(t)}))}(n.value),n.value="",r.value.focus()}}function w(e){13===e.keyCode&&q()}return h(l,(()=>{_((()=>{u.value.scrollTo({top:u.value.scrollHeight,behavior:"smooth"})}))})),l.push({role:"robot",type:"text",content:"你好，我是菲菲智能聊天机器人。"}),(e,i)=>{const p=j;return t(),a("div",z,[s("main",{ref_key:"refChatMain",ref:u,class:"main"},[s("ul",F,[(t(!0),a(m,null,g(o(l),((e,s)=>(t(),a("li",{key:s,class:"chat-item"},["user"===e.role?(t(),k(L,{key:0,chat:e},null,8,["chat"])):(t(),k(P,{key:1,chat:e},null,8,["chat"]))])))),128))])],512),s("footer",J,[d(s("textarea",{ref_key:"refInput",ref:r,"onUpdate:modelValue":i[0]||(i[0]=e=>y(n)?n.value=e:null),class:"textarea",placeholder:"请输入...",maxlength:"1000",onKeydown:f(w,["enter"])},null,544),[[v,o(n),void 0,{trim:!0}]]),c(p,{type:"primary",size:"small",class:"send-btn",onClick:q},{default:b((()=>[x("发送")])),_:1})])])}}}),[["__scopeId","data-v-ee777b78"]]);export{A as default};
