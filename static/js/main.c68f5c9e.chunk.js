(this["webpackJsonpwho-wants-to-be-a-millionare"]=this["webpackJsonpwho-wants-to-be-a-millionare"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n(5),a=n.n(r),i=n(2),o=function(e){var t=e.changeGameState;return Object(s.jsxs)("div",{className:"menu",children:[Object(s.jsx)("img",{alt:"hand up",className:"menu__hand",src:"/assets/hand.svg"}),Object(s.jsxs)("div",{className:"menu__logic",children:[Object(s.jsx)("h1",{className:"menu__text",children:"Who wants to be a\xa0millionaire\xa0?"}),Object(s.jsx)("a",{href:"/",className:"menu__button",onClick:function(e){e.preventDefault(),t(2)},children:"Start"})]})]})},l=n(3),u=function(e){var t=e.question;return Object(s.jsx)("div",{className:"question-block",children:Object(s.jsx)("h2",{className:"question",children:t})})},j=function(e){var t=e.index,n=e.children,c=e.clickEvent;return Object(s.jsxs)("svg",{onClick:c||null,className:"game__text-container",viewBox:"0 0 389 72",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("path",{"data-index":t,d:"M23.8137 5.09773C25.9857 2.2033 29.3933 0.5 33.012 0.5H355.988C359.607 0.5 363.014 2.2033 365.186 5.09773L388.375 36L365.186 66.9023C363.014 69.7967 359.607 71.5 355.988 71.5H33.012C29.3933 71.5 25.9857 69.7967 23.8137 66.9023L0.625116 36L23.8137 5.09773Z",fill:"white",stroke:"#D0D0D8"}),n]})};var d=function(e,t){e&&(e.classList.add(t),setTimeout((function(){e.classList.remove(t)}),3e3))},h=function(e){var t=e.answers,n=e.correctAnswer,r=e.setAnswer,a=Object(c.useState)(!0),o=Object(i.a)(a,2),l=o[0],u=o[1];if(Object(c.useEffect)((function(){u(!0)}),[t]),!t)return null;var h=function(e){if(l){u(!1);var t=+e.target.parentNode.querySelector("path").dataset.index;d(e.target.parentNode,n===t?"correct":"wrong"),setTimeout((function(){e.target.parentNode.classList.remove(n===t?"correct":"wrong"),r&&r(t)}),200)}};return Object(s.jsx)("div",{className:"answer-block",children:t.map((function(e,t){return Object(s.jsxs)(j,{clickEvent:h,index:t,children:[Object(s.jsx)("text",{className:"answer-number",textAnchor:"middle",x:"50",y:"45",children:""+String.fromCharCode(65+t)}),Object(s.jsx)("text",{className:"answer-text",x:"70",y:"45",children:e})]},t)}))})},b=function(e){var t=e.question,n=e.setAnswer;return t?Object(s.jsxs)("div",{className:"game__board",children:[Object(s.jsx)(u,{question:t.title}),Object(s.jsx)(h,{answers:t.answers,correctAnswer:t.answerNumber,setAnswer:n})]}):null},m=function(e){var t=e.prices,n=e.currentLevel;return Object(s.jsx)("div",{className:"game__score",children:t.map((function(e,t,c){return Object(s.jsx)("div",{className:(c.length-1-n<t?"past":c.length-1-n===t&&"current")||"",children:Object(s.jsx)(j,{children:Object(s.jsx)("text",{textAnchor:"middle",className:"score-text",x:"50%",y:"45",children:"$"+e})})},t)}))})};function v(e){return e?e[Math.floor(Math.random()*e.length)]:null}var x=function(e){var t=e.data,n=e.changeScore,r=e.changeGameState,a=Object(c.useState)({currentLevel:0,score:0,question:null}),o=Object(i.a)(a,2),u=o[0],j=o[1];Object(c.useEffect)((function(){j((function(e){return Object(l.a)(Object(l.a)({},e),{},{question:v(t.questions[0].list)})}))}),[t]);return t?Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)(b,{question:u.question,setAnswer:function(e){var s;console.log(u.score),e!==(null===u||void 0===u||null===(s=u.question)||void 0===s?void 0:s.answerNumber)?(n(u.score),r(3)):u.currentLevel===t.questionCount-1?(n(t.questionPrices[t.questionCount-(u.currentLevel+1)]),r(3)):j((function(e){var n;return Object(l.a)(Object(l.a)({},e),{},{currentLevel:e.currentLevel+1,score:t.questionPrices[t.questionCount-(u.currentLevel+1)],question:v(null===(n=t.questions[e.currentLevel+1])||void 0===n?void 0:n.list)})}))}}),Object(s.jsx)(m,{prices:t.questionPrices,currentLevel:u.currentLevel})]}):null},O=(n(11),function(e){var t=e.score,n=e.changeGameState;return Object(s.jsxs)("div",{className:"game-over",children:[Object(s.jsx)("img",{alt:"hand up",className:"menu__hand",src:"/assets/hand.svg"}),Object(s.jsxs)("div",{className:"menu__logic",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"game-over__total",children:"Total\xa0score:"}),Object(s.jsxs)("h1",{className:"game-over__score",children:["$",t||"0","\xa0earned"]})]}),Object(s.jsx)("a",{href:"/",className:"menu__button",onClick:function(e){e.preventDefault(),n(2)},children:"Try\xa0again"})]})]})});var f=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(500),l=Object(i.a)(a,2),u=l[0],j=l[1],d=Object(c.useState)(null),h=Object(i.a)(d,2),b=h[0],m=h[1];return Object(c.useEffect)((function(){fetch("https://vkmetyk.github.io/who-wants-to-be-a-millionare/assets/data.json").then((function(e){return e.json()})).then((function(e){return m(e)}))}),[]),b?Object(s.jsxs)(s.Fragment,{children:[1===n&&Object(s.jsx)(o,{changeGameState:r}),2===n&&Object(s.jsx)(x,{data:b,score:u,changeScore:j,changeGameState:r}),3===n&&Object(s.jsx)(O,{score:u,changeGameState:r})]}):null};a.a.render(Object(s.jsx)(f,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.c68f5c9e.chunk.js.map