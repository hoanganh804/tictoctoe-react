(this["webpackJsonptictoctoe-react"]=this["webpackJsonptictoctoe-react"]||[]).push([[0],[,,,,,,,,,,,,function(n,t,c){},function(n,t,c){},function(n,t,c){},,function(n,t,c){},function(n,t,c){"use strict";c.r(t);var e=c(1),u=c.n(e),r=c(6),a=c.n(r),o=(c(12),c(13),c(7)),i=c(3),l=(c(14),c(0));function s(n){var t=n.handleClickSquare,c=n.idRow,e=n.idCol,u=n.square;return Object(l.jsx)("button",{className:"square",onClick:function(){return t(c,e)},children:u})}c(16);function f(n){var t=n.rows,c=n.handleClickSquare,e=n.idRow;return Object(l.jsx)("div",{className:"rows",children:t&&t.map((function(n,t){return Object(l.jsx)(s,{idCol:t,idRow:e,square:n,handleClickSquare:c},t)}))})}function j(){var n=Object(e.useState)([]),t=Object(i.a)(n,2),c=t[0],u=t[1],r=Object(e.useState)(1),a=Object(i.a)(r,2),s=a[0],j=a[1],d=Object(e.useState)(0),b=Object(i.a)(d,2),O=b[0],v=b[1],h=Object(e.useState)(!0),p=Object(i.a)(h,2),m=p[0],x=p[1];Object(e.useEffect)((function(){if(m){var n=[null,null,null,null,null,null,null,null,null,null],t=[[].concat(n),[].concat(n),[].concat(n),[].concat(n),[].concat(n),[].concat(n),[].concat(n),[].concat(n),[].concat(n),[].concat(n)];u(t),x(!1)}}),[m]),Object(e.useEffect)((function(){O&&(alert("".concat(O," thang cuoc")),x(!0))}),[O]);var C=function(n,t){var e=Object(o.a)(c);e[n][t]||(1===s?(e[n][t]="X",j(2),S(n,t)):(e[n][t]="O",j(1),S(n,t)),u(e))},S=function(n,t){v(0);var e=c[n],u=c.map((function(n){return n[t]}));var r=c.map((function(c,e){return function(c,e){return e===n?c[t]:e<n||e>n?c[e+t-n]:void 0}(c,e)})),a=c.map((function(c,e){return function(c,e){return e===n?c[t]:e<n||e>n?c[t+n-e]:void 0}(c,e)}));w(e),w(u),w(r),w(a),g(e),g(u),g(r),g(a)},w=function(n){var t=n.map((function(n,t){return"X"===n?t:null}));k(t,"X")},g=function(n){var t=n.map((function(n,t){return"O"===n?t:null}));k(t,"O")},k=function(n,t){for(var c=1,e=0;e<10;e++)for(var u=e;u<e+5;u++)c<5&&(n[u]===n[u+1]-1?c+=1:c=0);5===c&&v(t)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"hello"}),c.map((function(n,t){return Object(l.jsx)(f,{idRow:t,rows:n,handleClickSquare:C},t)}))]})}var d=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(j,{})})},b=function(n){n&&n instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,e=t.getFID,u=t.getFCP,r=t.getLCP,a=t.getTTFB;c(n),e(n),u(n),r(n),a(n)}))};a.a.render(Object(l.jsx)(u.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),b()}],[[17,1,2]]]);
//# sourceMappingURL=main.1cc352a9.chunk.js.map