(this["webpackJsonpchat-firebase"]=this["webpackJsonpchat-firebase"]||[]).push([[0],{40:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var c=t(4),n=t(33),s=t.n(n),r=(t(40),t(15)),i=t(35),o=t(9),u=t(21),b=t(18),j=t(19),l=t(30);l.a.initializeApp({apiKey:"AIzaSyAqc8FxCuzyGy_ZorwUCyEmKo0X1SyOPys",authDomain:"chatapp-1b94b.firebaseapp.com",databaseURL:"https://chatapp-1b94b-default-rtdb.firebaseio.com",projectId:"chatapp-1b94b",storageBucket:"chatapp-1b94b.appspot.com",messagingSenderId:"1005508683128",appId:"1:1005508683128:web:6dec9616968f95cda0d48d"});var m=l.a,h=t(5);function p(){var e=Object(o.g)(),a=Object(c.useState)({nickname:""}),t=Object(j.a)(a,2),n=t[0],s=t[1],i=m.database().ref("users/");return Object(h.jsxs)("section",{className:"login",children:[Object(h.jsx)("p",{className:"login__descriptions",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u0447\u0430\u0442\u0430:"}),Object(h.jsxs)("form",{onSubmit:function(a){a.preventDefault(),i.orderByChild("nickname").equalTo(n.nickname).once("value",(function(a){a.exists()?(localStorage.setItem("nickname",n.nickname),e.push("/chat")):(m.database().ref("users/").push().set(n),localStorage.setItem("nickname",n.nickname),e.push("/chat"))}))},className:"login__form",children:[Object(h.jsx)("input",{className:"login__input",type:"text",name:"nickname",id:"nickname",placeholder:"Name",onChange:function(e){s(Object(r.a)(Object(r.a)({},n),{},Object(b.a)({},e.target.name,e.target.value)))},value:n.nickname}),Object(h.jsx)("button",{className:"login__btn",children:"Join"})]})]})}var f=t(22),d=t.n(f),O=t(29);function g(){var e=Object(c.useState)([]),a=Object(j.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),o=i[0],u=i[1],l=Object(c.useState)({nickname:"",message:""}),p=Object(j.a)(l,2),f=p[0],g=p[1],x=function(e){var a=[];return e.forEach((function(e){var t=e.val();t.key=e.key,a.push(t)})),a};Object(c.useEffect)((function(){(function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(localStorage.getItem("nickname")),m.database().ref("chat/").on("value",(function(e){n([]),n(x(e))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){(function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(localStorage.getItem("nickname"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(h.jsxs)("section",{className:"chat",children:[Object(h.jsx)("ul",{className:"chat__list",children:t.map((function(e){return e.nickname===o?Object(h.jsxs)("li",{className:"chat__msg chat__mymsg",children:[Object(h.jsx)("span",{className:"chat__nick",children:"Me"}),e.message]},e.key):Object(h.jsxs)("li",{className:"chat__msg chat__anymsg",children:[Object(h.jsx)("span",{className:"chat__nick",children:e.nickname}),e.message]},e.key)}))}),Object(h.jsxs)("form",{className:"chat__form",onSubmit:function(e){if(e.preventDefault(),f.message){var a=f;a.nickname=o,m.database().ref("chat/").push().set(a),g({nickname:"",message:""})}},children:[Object(h.jsx)("input",{className:"chat__input",type:"text",name:"message",id:"message",value:f.message,onChange:function(e){e.persist(),g(Object(r.a)(Object(r.a)({},f),{},Object(b.a)({},e.target.name,e.target.value)))},placeholder:"Message"}),Object(h.jsx)("button",{className:"chat__btn",children:"Send"})]})]})}var x=["children"];var k=function(){var e=Object(o.h)();return Object(h.jsx)(u.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(o.a,{to:{pathname:"/chat",state:{from:e}}}),Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{path:"/login",children:Object(h.jsx)(p,{})}),Object(h.jsx)(_,{path:"/chat",children:Object(h.jsx)(g,{})})]})]})})};function _(e){var a=e.children,t=Object(i.a)(e,x);return Object(h.jsx)(o.b,Object(r.a)(Object(r.a)({},t),{},{render:function(e){var t=e.location;return localStorage.getItem("nickname")?a:Object(h.jsx)(o.a,{to:{pathname:"/login",state:{from:t}}})}}))}s.a.render(Object(h.jsx)(u.a,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e7539a62.chunk.js.map