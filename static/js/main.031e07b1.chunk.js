(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),s=n(5),i=n.n(s),a=(n(10),n(2)),r=n(4),u=(n(11),n(0)),d=function(){return Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("input",{className:"form__input",autofocus:!0,placeholder:"Co jest do zrobienia?"}),Object(u.jsx)("button",{className:"form__button",children:" Dodaj zadanie"})]})},j=(n(13),function(t){var e=t.tasks,n=t.hideDone,c=t.removeTask,o=t.toggleTaskDone;return Object(u.jsx)("ul",{className:"tasks",children:e.map((function(t){return Object(u.jsxs)("li",{className:"tasks__item".concat(t.done&&n?" tasks__item--hidden":""),children:[Object(u.jsx)("button",{className:"tasks__button tasks__button--toggleDone",onClick:function(){return o(t.id)},children:t.done?"\u2714":" "}),Object(u.jsx)("span",{className:"tasks__content".concat(t.done?"tasks__content--done":""),children:t.content}),Object(u.jsx)("button",{className:"tasks__button tasks__button--remove",onClick:function(){return c(t.id)},children:"\ud83d\uddd1"})]},t.id)}))})}),l=(n(14),function(t){var e=t.tasks,n=t.hideDone,c=t.toggleHideDone,o=t.setAllDone;return e.length>0&&Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsxs)("button",{onClick:c,className:"buttons__button",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(u.jsx)("button",{onClick:o,className:"buttons__button",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})}),b=(n(15),function(t){var e=t.title,n=t.body,c=t.extraHeaderContent;return Object(u.jsxs)("section",{className:"section",children:[Object(u.jsxs)("header",{className:"section__header",children:[Object(u.jsx)("h2",{children:e}),c]}),Object(u.jsx)("div",{className:"section__body"}),n]})}),f=function(t){var e=t.title;return Object(u.jsx)("header",{children:Object(u.jsx)("h1",{className:"container__header",children:e})})},h=(n(16),function(t){var e=t.children;return Object(u.jsx)("main",{className:"container",children:e})});var O=function(){var t=Object(c.useState)(!1),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(c.useState)([{id:1,content:"Zje\u015b\u0107",done:!0},{id:2,content:"Umy\u0107 si\u0119",done:!1}]),i=Object(r.a)(s,2),O=i[0],m=i[1];return Object(u.jsx)("div",{children:Object(u.jsxs)(h,{children:[Object(u.jsx)(f,{title:"Lista zada\u0144"}),Object(u.jsx)(b,{title:"Dodaj nowe zadanie",body:Object(u.jsx)(d,{})}),Object(u.jsx)(b,{title:"Lista zada\u0144",body:Object(u.jsx)(j,{tasks:O,hideDone:n,removeTask:function(t){m((function(e){return e.filter((function(e){return e.id!==t}))}))},toggleTaskDone:function(t){m((function(e){return e.map((function(e){return e.id===t?Object(a.a)(Object(a.a)({},e),{},{done:!e.done}):e}))}))}}),extraHeaderContent:Object(u.jsx)(l,{tasks:O,hideDone:n,toggleHideDone:function(){o((function(t){return!t}))},setAllDone:function(){m((function(t){return t.map((function(t){return Object(a.a)(Object(a.a)({},t),{},{done:!0})}))}))}})})]})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),s(t),i(t)}))};i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.031e07b1.chunk.js.map