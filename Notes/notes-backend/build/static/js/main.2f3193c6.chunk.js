(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{22:function(t,n,e){},42:function(t,n,e){"use strict";e.r(n);var c=e(17),r=e.n(c),o=(e(22),e(8)),i=e(3),a=e(2),u=e(0),s=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},j=function(t){var n=t.note,e=t.toggleImportance,c=n.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[n.content,Object(u.jsx)("button",{onClick:e,children:c})]})},l=function(t){var n=t.message;return null===n?null:Object(u.jsx)("div",{className:"error",children:n})},f=e(6),b=e.n(f),d="/api/notes",m=function(){return b.a.get(d).then((function(t){return t.data}))},O=function(t){return b.a.post(d,t).then((function(t){return t.data}))},p=function(t,n){return b.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},h=function(){var t=Object(a.useState)([]),n=Object(i.a)(t,2),e=n[0],c=n[1],r=Object(a.useState)(!1),f=Object(i.a)(r,2),b=f[0],d=f[1],h=Object(a.useState)(""),v=Object(i.a)(h,2),x=v[0],g=v[1],S=Object(a.useState)(null),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){m().then((function(t){c(t)}))}),[]);var N=b?e:e.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(l,{message:y}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return d(!b)},children:["show ",b?"important":"all"]})}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)(j,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),r=Object(o.a)(Object(o.a)({},n),{},{important:!n.important});p(r).then((function(n){c(e.map((function(e){return e.id!==t?e:n})))})).catch((function(r){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),c(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:x,data:(new Date).toISOString(),important:Math.random()>.5};O(n).then((function(t){c(e.concat(t)),g("")}))},children:[Object(u.jsx)("input",{value:x,onChange:function(t){console.log(t.target.value),g(t.target.value)}}),Object(u.jsx)("button",{type:"summit",children:"Save"})]}),Object(u.jsx)(s,{})]})};r.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2f3193c6.chunk.js.map