(this["webpackJsonptictoctoe-react"]=this["webpackJsonptictoctoe-react"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(27),s=n.n(a),i=(n(82),n(83),n(76)),u=n(22),o=(n(84),n(75)),l=n(36),f=n(4);function j(e){var t=e.onClickReset,n=e.statusSquare,r=e.handleTimeOut,a=e.startGame,s=Object(c.useState)(60),i=Object(u.a)(s,2),j=i[0],b=i[1],O=Object(c.useState)({}),d=Object(u.a)(O,2),m=d[0],v=d[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("user-tictoctoe"),t=JSON.parse(e);e&&v(t)}),[]),Object(c.useEffect)((function(){var e=null;return a?(b(60),e=setInterval((function(){b((function(e){return e-1}))}),1e3)):b(60),function(){return clearInterval(e)}}),[n,a]),Object(c.useEffect)((function(){j<0&&r(n)}),[j,n,r]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"form_user",children:[Object(f.jsx)("div",{className:"user user1",children:m.user1}),Object(f.jsx)("div",{className:"user_status",style:1===n?{color:"rgb(152, 1, 147)"}:{color:"rgb(201, 201, 201)"},children:"X"})]}),Object(f.jsxs)("div",{className:"form_control",children:[Object(f.jsx)("span",{className:"time",children:j}),Object(f.jsx)(o.a,{onClick:t,className:"button_reset",ghost:!0,children:"Reset"}),Object(f.jsx)(l.b,{to:"/tictoctoe-react/",className:"button_exit",children:"Exit"})]}),Object(f.jsxs)("div",{className:"form_user",children:[Object(f.jsx)("div",{className:"user user2",children:m.user2}),Object(f.jsx)("div",{className:"user_status",style:2===n?{color:"rgb(152, 1, 147)"}:{color:"rgb(201, 201, 201)"},children:"O"})]})]})}n(94);function b(e){e.startGame;var t=e.handleClickSquare,n=e.idRow,c=e.idCol,r=e.square;return Object(f.jsx)("button",{className:"square",style:"X"===r?{color:"rgb(8, 109, 57)"}:{color:"rgb(140, 37, 18)"},onClick:function(){return t(n,c)},children:r})}n(95);function O(e){var t=e.startGame,n=e.rows,c=e.handleClickSquare,r=e.idRow;return Object(f.jsx)("div",{className:"rows",children:n&&n.map((function(e,n){return Object(f.jsx)(b,{startGame:t,idCol:n,idRow:r,square:e,handleClickSquare:c},n)}))})}n(96);var d=n(74);function m(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(1),s=Object(u.a)(a,2),o=s[0],l=s[1],b=Object(c.useState)(0),m=Object(u.a)(b,2),v=m[0],h=m[1],p=Object(c.useState)(!0),x=Object(u.a)(p,2),g=x[0],S=x[1],N=Object(c.useState)(!1),w=Object(u.a)(N,2),z=w[0],C=w[1],_=Object(c.useState)({size:0,win:0}),I=Object(u.a)(_,2),k=I[0],q=I[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("config"));e&&q({size:e.size,win:e.win})}),[]),Object(c.useEffect)((function(){if(g){for(var e=[],t=0;t<k.size;t++)e.push(null);for(var n=[],c=0;c<k.size;c++)n.push([].concat(e));r(n),S(!1)}for(var a=[],s=0;s<k.size;s++)a.push(null);for(var i=[],u=0;u<k.size;u++)i.push([].concat(a));r(i)}),[g,k.size]),Object(c.useEffect)((function(){var e=null;if(1===v){T("reset game after 2s",2),e=setTimeout((function(){S(!0)}),2e3)}if(v&&1!==v){var t="".concat(v," win, reset game after 5s");T(t,4.5),e=setTimeout((function(){S(!0)}),5e3)}return function(){clearTimeout(e)}}),[v]);var T=function(e,t){d.b.loading(e,t).then((function(){return d.b.info("Done!",1.5)}))},y=function(e,t){var c=Object(i.a)(n);c[e][t]||(C(!0),1===o?(c[e][t]="X",l(2),E(e,t)):(c[e][t]="O",l(1),E(e,t)),r(c))},E=function(e,t){h(0);var c=n[e],r=n.map((function(e){return e[t]}));var a=n.map((function(n,c){return function(n,c){return c===e?n[t]:c<e||c>e?n[c+t-e]:void 0}(n,c)})),s=n.map((function(n,c){return function(n,c){return c===e?n[t]:c<e||c>e?n[t+e-c]:void 0}(n,c)}));P(c),P(r),P(a),P(s),R(c),R(r),R(a),R(s)},P=function(e){var t=e.map((function(e,t){return"X"===e?t:null}));D(t,"X")},R=function(e){var t=e.map((function(e,t){return"O"===e?t:null}));D(t,"O")},D=function(e,t){for(var n=1,c=0;c<k.size;c++)for(var r=c;r<c+k.win;r++)n<k.win&&(e[r]===e[r+1]-1?n+=1:n=0);n===k.win&&(h(t),C(!1))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"main_user",children:Object(f.jsx)(j,{handleTimeOut:function(e){h(1===o?"O":"X"),C(!1)},statusSquare:o,onClickReset:function(){h(1),C(!1)},startGame:z})}),Object(f.jsx)("div",{className:"main_app",children:n.map((function(e,t){return Object(f.jsx)(O,{idRow:t,rows:e,handleClickSquare:y,startGame:z},t)}))})]})}n(99),n(100);var v=n(104),h=n(105),p=function(e){d.b.error(e)};function x(){var e=Object(c.useState)({user1:"",user2:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({size:10,win:5}),s=Object(u.a)(a,2),i=s[0],o=s[1];return Object(f.jsxs)("div",{className:"form_login",children:[Object(f.jsx)("h1",{children:"My Tictoctoe"}),Object(f.jsxs)("div",{className:"form_choice",children:[Object(f.jsx)(v.a,{onChange:function(e){var t=e.target.value;r({user2:n.user2,user1:t})},value:n.user1,className:"input_user",size:"large",placeholder:"Input User 1",prefix:Object(f.jsx)(h.a,{}),rules:[{required:!0,message:"Please input your username!"}]}),Object(f.jsx)(v.a,{onChange:function(e){var t=e.target.value;r({user1:n.user1,user2:t})},value:n.user2,className:"input_user",size:"large",placeholder:"Input User 2",prefix:Object(f.jsx)(h.a,{})}),Object(f.jsx)(v.a,{onChange:function(e){var t=parseInt(e.target.value);o({size:t,win:i.win})},className:"input_user",size:"large",placeholder:"Input size of game ... ex: 10 (10x10)"}),Object(f.jsx)(v.a,{onChange:function(e){var t=parseInt(e.target.value);o({size:i.size,win:t})},className:"input_user",size:"large",placeholder:"Input condition win ... ex: 5 (5 O to win)"})]}),Object(f.jsx)(l.b,{to:"/tictoctoe-react/tictoctoeapp",onClick:function(e){return function(e){""===n.user1&&""!==n.user2&&(e.preventDefault(),p("Please fill User 1")),""!==n.user1&&""===n.user2&&(e.preventDefault(),p("Please fill User 2")),""===n.user1&&""===n.user2&&(e.preventDefault(),p("Please fill User 1 and User 2")),(i.size>=12||i.size<3)&&(e.preventDefault(),p("Please fill size < 12 and > 2")),(i.win>6||i.win<3)&&(e.preventDefault(),p("Please fill condition < 7 and > 2")),localStorage.setItem("config",JSON.stringify(i)),localStorage.setItem("user-tictoctoe",JSON.stringify(n))}(e)},shape:"round",className:"button_start",children:"START"})]})}var g=n(14);var S=function(){return Object(f.jsx)(l.a,{children:Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(g.c,{children:[Object(f.jsx)(g.a,{exact:!0,path:"/tictoctoe-react/",component:x}),Object(f.jsx)(g.a,{exact:!0,path:"/tictoctoe-react/tictoctoeapp",component:m})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,106)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root")),N()},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.6d6995a1.chunk.js.map