(this.webpackJsonpcriptomonedas=this.webpackJsonpcriptomonedas||[]).push([[0],{49:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var a,c,o,r,s,i,l,d,j,b,u,p,f=t(1),m=t.n(f),O=t(19),x=t.n(O),h=t(6),g=t.n(h),v=t(7),k=t(4),y=t(2),w=t(3),S=t(8),E=t.n(S),C=(t(49),t(0)),z=w.a.label(a||(a=Object(y.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n']))),D=w.a.select(c||(c=Object(y.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]))),A=w.a.label(o||(o=Object(y.a)(['\n  font-family: "Bebas Neue", cursive;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.4rem;\n  margin-top: 2rem;\n  display: block;\n']))),I=w.a.select(r||(r=Object(y.a)(["\n  width: 100%;\n  display: block;\n  padding: 1rem;\n  border-radius: 10px;\n  border: none;\n  font-size: 1.2rem;\n"]))),N=w.a.p(s||(s=Object(y.a)(['\n  background-color: #b7322c;\n  padding: 1rem;\n  color: #fff;\n  font-size: 30px;\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: center;\n  font-family: "Bebas Neue", cursive;\n']))),U=function(e){var n=e.mensaje;return Object(C.jsxs)(N,{children:[" ",n]})},B=w.a.input(i||(i=Object(y.a)(["\n  margin-top: 20px;\n  font-weight: bold;\n  font-size: 20px;\n  padding: 10px;\n  background-color: #66a2fe;\n  border: none;\n  width: 100%;\n  border-radius: 10px;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #326ac0;\n    cursor: pointer;\n  }\n"]))),P=function(e){var n=e.setMoneda,t=e.setCriptomoneda,a=Object(f.useState)([]),c=Object(k.a)(a,2),o=c[0],r=c[1],s=Object(f.useState)(!1),i=Object(k.a)(s,2),l=i[0],d=i[1],j=function(e,n,t){var a=Object(f.useState)(n),c=Object(k.a)(a,2),o=c[0],r=c[1];return[o,function(){return Object(C.jsxs)(f.Fragment,{children:[Object(C.jsx)(z,{children:e}),Object(C.jsxs)(D,{onChange:function(e){return r(e.target.value)},value:o,children:[Object(C.jsx)("option",{value:"",children:"-- Seleccione --"}),t.map((function(e){return Object(C.jsx)("option",{value:e.codigo,children:e.nombre},e.codigo)}))]})]})},r]}("Elige tu moneda","",[{codigo:"USD",nombre:"Dolar Estadounidense"},{codigo:"MXN",nombre:"Peso Mexicano"},{codigo:"EUR",nombre:"Euro"},{codigo:"GBP",nombre:"Libra Esterlina"}]),b=Object(k.a)(j,2),u=b[0],p=b[1],m=function(e,n,t){var a=Object(f.useState)(n),c=Object(k.a)(a,2),o=c[0],r=c[1];return[o,function(){return Object(C.jsxs)(f.Fragment,{children:[Object(C.jsx)(A,{children:e}),Object(C.jsxs)(I,{onChange:function(e){return r(e.target.value)},value:o,children:[Object(C.jsx)("option",{value:"",children:"-- Seleccione --"}),t.map((function(e){return Object(C.jsx)("option",{value:e.CoinInfo.Name,children:e.CoinInfo.FullName},e.CoinInfo.Id)}))]})]})},r]}("Elige tu Criptomonedas","",o),O=Object(k.a)(m,2),x=O[0],h=O[1];Object(f.useEffect)((function(){var e=function(){var e=Object(v.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD",e.next=3,E.a.get("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD");case 3:n=e.sent,r(n.data.Data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(C.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==u&&""!==x?(d(!1),n(u),t(x)):d(!0)},children:[l?Object(C.jsx)(U,{mensaje:"Todos los campos son obligatorios"}):null,Object(C.jsx)(p,{}),Object(C.jsx)(h,{}),Object(C.jsx)(B,{type:"submit",value:"Calcular"})]})},H=w.a.div(l||(l=Object(y.a)(["\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n"]))),M=w.a.p(d||(d=Object(y.a)(["\n  font-size: 18px;\n  span {\n    font-weight: bold;\n  }\n"]))),T=w.a.p(j||(j=Object(y.a)(["\n  font-size: 30px;\n  span {\n    font-weight: bold;\n  }\n"]))),L=function(e){var n=e.resultado;return 0===Object.keys(n).length?null:Object(C.jsxs)(H,{children:[Object(C.jsxs)(T,{children:["El precio es: ",Object(C.jsx)("span",{children:n.PRICE})," "]}),Object(C.jsxs)(M,{children:["El precio mas alto del d\xeda: ",Object(C.jsx)("span",{children:n.HIGHDAY})," "]}),Object(C.jsxs)(M,{children:["El precio bajo del d\xeda: ",Object(C.jsx)("span",{children:n.LOWDAY})," "]}),Object(C.jsxs)(M,{children:["VAriaci\xf3n ultimas 24 horas: ",Object(C.jsx)("span",{children:n.CHANGEPCT24HOUR})," "]}),Object(C.jsxs)(M,{children:["Ultima Actualizaci\xf3n: ",Object(C.jsx)("span",{children:n.LASTUPDATE})," "]})]})},F=(t(51),function(){return Object(C.jsxs)("div",{class:"sk-chase",children:[Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"}),Object(C.jsx)("div",{class:"sk-chase-dot"})]})}),G=w.a.div(b||(b=Object(y.a)(["\n  max-width: 900px;\n  margin: 0 auto;\n\n  @media (min-width: 992px) {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    column-gap: 2rem;\n  }\n"]))),R=w.a.img(u||(u=Object(y.a)(["\n  max-width: 100%;\n  margin-top: 5rem;\n"]))),Y=w.a.h1(p||(p=Object(y.a)(['\n  font-size: 50px;\n  font-size: "Bebas Neue", cursive;\n  color: #fff;\n  text-align: left;\n  font-weight: 700;\n  margin-bottom: 50px;\n  margin-top: 80px;\n\n  &::after {\n    content: "";\n    width: 100px;\n    height: 6px;\n    background-color: #66a2fe;\n    display: block;\n  }\n']))),J=function(){var e=Object(f.useState)(""),n=Object(k.a)(e,2),t=n[0],a=n[1],c=Object(f.useState)(""),o=Object(k.a)(c,2),r=o[0],s=o[1],i=Object(f.useState)({}),l=Object(k.a)(i,2),d=l[0],j=l[1],b=Object(f.useState)(!1),u=Object(k.a)(b,2),p=u[0],m=u[1];Object(f.useEffect)((function(){var e=function(){var e=Object(v.a)(g.a.mark((function e(){var n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=2;break}return e.abrupt("return");case 2:return n="https://min-api.cryptocompare.com/data/pricemultifull?fsyms=".concat(r,"&tsyms=").concat(t),e.next=5,E.a.get(n);case 5:a=e.sent,m(!0),setTimeout((function(){m(!1),j(a.data.DISPLAY[r][t])}),1e3);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,r]);var O=p?Object(C.jsx)(F,{}):Object(C.jsx)(L,{resultado:d});return Object(C.jsxs)(G,{children:[Object(C.jsx)("div",{children:Object(C.jsx)(R,{src:"https://res.cloudinary.com/dcxto1nnl/image/upload/v1642526621/imagenes-paginas/cryptomonedas_s1i5ix.png",alt:"imagen cripto"})}),Object(C.jsxs)("div",{children:[Object(C.jsx)(Y,{children:"Cotiza Criptomonedas"}),Object(C.jsx)(P,{setMoneda:a,setCriptomoneda:s}),O]})]})};t(52);x.a.render(Object(C.jsx)(m.a.StrictMode,{children:Object(C.jsx)(J,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.ef55b288.chunk.js.map