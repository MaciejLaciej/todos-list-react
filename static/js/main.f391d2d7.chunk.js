(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],[,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),a=n(3),o=n.n(a),i=(n(8),n(9),n(0)),r=function(){return Object(i.jsxs)("form",{className:"form",children:[Object(i.jsx)("input",{className:"form__input",autofocus:!0,placeholder:"Co jest do zrobienia?"}),Object(i.jsx)("button",{className:"form__button",children:" Dodaj zadanie"})]})},d=(n(11),function(t){return Object(i.jsx)("ul",{className:"tasks",children:t.tasks.map((function(t){return Object(i.jsxs)("li",{className:'tasks__item {task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""}',children:[Object(i.jsx)("button",{className:"tasks__button tasks__button--toggleDone",children:t.done?"\u2714":" "}),Object(i.jsx)("span",{className:"tasks__content".concat(t.done?"tasks__content--done":""),children:t.content}),Object(i.jsx)("button",{className:"tasks__button tasks__button--remove",children:"\ud83d\uddd1"})]},t.id)}))})}),j=(n(12),function(t){var e=t.tasks,n=t.hideDoneTasks;return e.length>0&&Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsxs)("button",{className:"buttons__button",children:[n?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(i.jsx)("button",{className:"buttons__button",disabled:e.every((function(t){return t.done})),children:"Uko\u0144cz wszystkie"})]})}),u=(n(13),function(t){var e=t.title,n=t.body,s=t.extraHeaderContent;return Object(i.jsxs)("section",{className:"section",children:[Object(i.jsxs)("header",{className:"section__header",children:[Object(i.jsx)("h2",{children:e}),s]}),Object(i.jsx)("div",{className:"section__body"}),n]})}),l=function(t){var e=t.title;return Object(i.jsx)("header",{children:Object(i.jsx)("h1",{className:"container__header",children:e})})},b=(n(14),function(t){var e=t.children;return Object(i.jsx)("main",{className:"container",children:e})}),h=[{id:1,content:"Zje\u015b\u0107",done:!0},{id:2,content:"Umy\u0107 si\u0119",done:!1}];var x=function(){return Object(i.jsx)("div",{children:Object(i.jsxs)(b,{children:[Object(i.jsx)(l,{title:"Lista zada\u0144"}),Object(i.jsx)(u,{title:"Dodaj nowe zadanie",body:Object(i.jsx)(r,{})}),Object(i.jsx)(u,{title:"Lista zada\u0144",body:Object(i.jsx)(d,{tasks:h,hideDoneTasks:true}),extraHeaderContent:Object(i.jsx)(j,{tasks:h,hideDoneTasks:true})})]})})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),a(t),o(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root")),_()}],[[15,1,2]]]);
//# sourceMappingURL=main.f391d2d7.chunk.js.map