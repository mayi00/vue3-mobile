System.register(["./.pnpm-legacy-pplLCRMT.js"],(function(e,t){"use strict";var a,r,o,n,s,i,c,l,d,u,m,h,p,f,b,g,v,y,x,k,j,w,_,q;return{setters:[e=>{a=e._,r=e.o,o=e.c,n=e.h,s=e.t,i=e.a,c=e.u,l=e.d,d=e.v,u=e.x,m=e.y,h=e.z,p=e.A,f=e.F,b=e.q,g=e.B,v=e.C,y=e.D,x=e.E,k=e.w,j=e.G,w=e.f,_=e.H,q=e.J}],execute:function(){var C=document.createElement("style");C.textContent='.chat-user-container[data-v-93b53f80]{display:flex;justify-content:flex-end}.chat-box[data-v-93b53f80]{position:relative;flex:1;display:flex;justify-content:flex-end;padding-left:1.386667rem}.chat-box .chat[data-v-93b53f80]{position:relative;padding:.213333rem .426667rem;min-height:1.066667rem;background-color:#c2d9ea;line-height:.64rem;border-radius:.213333rem;word-break:break-all}.chat-box .chat[data-v-93b53f80]:after{content:"";position:absolute;top:.373333rem;right:-.16rem;border-top:.16rem solid transparent;border-right:none;border-bottom:.16rem solid transparent;border-left:.16rem solid #c2d9ea}.avatar-box[data-v-93b53f80]{width:1.066667rem;height:1.066667rem;margin-left:.213333rem}.chat-robot-container[data-v-c8ae163f]{display:flex}.chat-box[data-v-c8ae163f]{position:relative;flex:1;display:flex;padding-right:1.386667rem}.chat-box .chat[data-v-c8ae163f]{position:relative;padding:.213333rem .426667rem;min-height:1.066667rem;background-color:#fff;line-height:.64rem;border-radius:.213333rem;word-break:break-all}.chat-box .chat[data-v-c8ae163f]:before{content:"";position:absolute;top:.373333rem;left:-.16rem;border-top:.16rem solid transparent;border-right:.16rem solid #fff;border-bottom:.16rem solid transparent;border-left:none}.avatar-box[data-v-c8ae163f]{width:1.066667rem;height:1.066667rem;margin-right:.213333rem}.chat-container[data-v-ee777b78]{display:flex;flex-direction:column;height:100%;background-color:#f1f1f1}.main[data-v-ee777b78]{flex:1;padding:.213333rem;overflow-y:auto}.main .chat-list[data-v-ee777b78]{min-height:100%}.main .chat-list .chat-item[data-v-ee777b78]{padding:.213333rem 0}.footer[data-v-ee777b78]{display:flex;align-items:center;padding:.213333rem .426667rem;height:1.493333rem;background-color:#f3f3f3;box-shadow:0 0 .32rem rgba(0,0,0,.12)}.footer .textarea[data-v-ee777b78]{flex:1;padding:.106667rem .213333rem;height:1.066667rem;resize:none;line-height:.533333rem;border:0;border-radius:.213333rem}.footer .textarea[data-v-ee777b78]::-webkit-scrollbar{display:none}.footer .send-btn[data-v-ee777b78]{margin-left:.213333rem;width:1.333333rem}\n',document.head.appendChild(C);const O=e=>new URL(Object.assign({"/src/assets/images/qingyunke.jpg":"/h5-vue3/static/jpg/qingyunke-FvKMLN3H.jpg","/src/assets/images/user.jpg":"/h5-vue3/static/jpg/user-ctTJ_jMZ.jpg"})[`/src/assets/images/${e}`],t.meta.url).href,H={class:"chat-user-container"},L={class:"chat-box"},M={class:"chat"},I=l({name:"ChatUser"}),T=a(Object.assign(I,{props:{chat:{type:Object,required:!0}},setup:e=>(t,a)=>{const l=d;return r(),o("div",H,[n("div",L,[n("p",M,s(e.chat.content),1)]),i(l,{class:"avatar-box",fit:"cover",round:"",src:c(O)("user.jpg")},null,8,["src"])])}}),[["__scopeId","data-v-93b53f80"]]),U={class:"chat-robot-container"},z={class:"chat-box"},P=["innerHTML"],Q=l({name:"ChatRobot"}),R=a(Object.assign(Q,{props:{chat:{type:Object,required:!0}},setup:e=>(t,a)=>{const s=d;return r(),o("div",U,[i(s,{class:"avatar-box",fit:"cover",round:"",src:c(O)("qingyunke.jpg")},null,8,["src"]),n("div",z,[n("p",{class:"chat",innerHTML:e.chat.content},null,8,P)])])}}),[["__scopeId","data-v-c8ae163f"]]),E=u.create({baseURL:"/proxy-qingyunke"});E.interceptors.request.use((e=>(e.timeout||(e.timeout=1e4),e)),(e=>new Promise(((t,a)=>{console.log("请求错误==>",e),a(e)})))),E.interceptors.response.use((e=>new Promise(((t,a)=>{200===e.status?t(e.data):a(e)}))),(e=>new Promise(((t,a)=>{console.log("响应错误==>",e),a(e)}))));const F={getQingyunke:e=>(async({url:e,method:t,params:a,data:r,timeout:o})=>await E({url:e,method:t,params:a,data:r,timeout:o}))({url:"/api.php",method:"get",params:e,timeout:12e3})},J={class:"chat-container"},K={class:"chat-list"},A={class:"footer"},B=l({name:"Qingyunke"}),D=Object.assign(B,{setup(e){const t=m(""),a=m(null),s=h([]),l=m(null);function d(){if(t.value){const e={role:"user",type:"text",content:t.value};s.push(e),function(e){const t={role:"robot",type:"text",content:""},a={key:"free",appid:"0",msg:e};F.getQingyunke(a).then((e=>{0===e.result?t.content=e.content.replace(/{br}/g,"</br>").replace(/\[/g,"【").replace(/\]/g,"】"):t.content="正在学习中~"})).catch((()=>{t.content="出错了~"})).finally((()=>{s.push(t)}))}(t.value),t.value="",a.value.focus()}}function u(e){13===e.keyCode&&d()}return p(s,(()=>{q((()=>{l.value.scrollTo({top:l.value.scrollHeight,behavior:"smooth"})}))})),s.push({role:"robot",type:"text",content:"你好，我是菲菲智能聊天机器人。"}),(e,m)=>{const h=j;return r(),o("div",J,[n("main",{ref_key:"refChatMain",ref:l,class:"main"},[n("ul",K,[(r(!0),o(f,null,b(c(s),((e,t)=>(r(),o("li",{key:t,class:"chat-item"},["user"===e.role?(r(),w(T,{key:0,chat:e},null,8,["chat"])):(r(),w(R,{key:1,chat:e},null,8,["chat"]))])))),128))])],512),n("footer",A,[g(n("textarea",{ref_key:"refInput",ref:a,"onUpdate:modelValue":m[0]||(m[0]=e=>y(t)?t.value=e:null),class:"textarea",placeholder:"请输入...",maxlength:"1000",onKeydown:x(u,["enter"])},null,544),[[v,c(t),void 0,{trim:!0}]]),i(h,{type:"primary",size:"small",class:"send-btn",onClick:d},{default:k((()=>[_("发送")])),_:1})])])}}});e("default",a(D,[["__scopeId","data-v-ee777b78"]]))}}}));
