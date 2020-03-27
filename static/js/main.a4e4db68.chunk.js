(this["webpackJsonpjtw-s-cart"]=this["webpackJsonpjtw-s-cart"]||[]).push([[0],{31:function(e,t,a){e.exports=a(60)},36:function(e,t,a){},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),r=a.n(c),i=(a(36),a(37),a(2)),s=a(3),o=function(){return l.a.createElement("header",null,l.a.createElement(i.a,{className:"fa__star",icon:s.f}),l.a.createElement("aside",null,l.a.createElement(i.a,{className:"fa--white",icon:s.c}),l.a.createElement(i.a,{className:"fa--white",icon:s.d})))},m=function(){return l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement(i.a,{className:"",icon:s.e}),"Sort"),l.a.createElement("li",null,l.a.createElement(i.a,{className:"",icon:s.a}),"Filter"))},u=a(8),d=a(9),E=a(11),p=a(12),f=function(e){return l.a.createElement("div",null,l.a.createElement("img",{src:"https://fakeimg.pl/300/",alt:"fake"}),l.a.createElement("div",null,e.prodName),l.a.createElement("div",{className:"offers"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(i.a,{className:"fa--white",icon:s.b})," ",e.prodPrice),e.discount?l.a.createElement("span",null,e.prodPrice*e.discount/100):null),e.discount?l.a.createElement("div",{className:"discount"},e.discount,"% off"):l.a.createElement("div",{className:"discount"},"Best price")),l.a.createElement("button",{onClick:e.itemClickHandler,"data-id":e.prodId},"Add to Cart"))},v=a(10),N=a(28),h=a.n(N).a.create({baseURL:"https://api.myjson.com/bins/qzuzi"}),_=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return l.a.createElement(f,{key:t.id,itemClickHandler:e.props.addToCart,prodName:t.name,prodId:t.id,prodPrice:t.price,discount:t.discount})}));return l.a.createElement("section",{className:"product__wrapper"},t)}}]),a}(n.Component),b=Object(v.b)((function(e){return{products:e.products}}),(function(e){return{addToCart:function(t){e({type:"UPDATE_CART",elem:t.target.getAttribute("data-id")})},fetchItems:function(){return e((function(e){h.get("/").then((function(t){t.data?(console.log("data"),e({type:"GET_DATAA",payload:t.data,spinner:!1})):(console.log("no data"),e({type:"NO_DATA",spinner:!1,dataError:!0,dataState:"No Data"}))}))}))}}}))(_),w=function(){return l.a.createElement("div",{className:"selected__item"},l.a.createElement("img",{src:"https://fakeimg.pl/300/",alt:"fake"}),l.a.createElement("div",{className:"item__details"},l.a.createElement("div",null,"Item 1"),l.a.createElement("div",{className:"offers"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement(i.a,{className:"fa--white",icon:s.b})," 319"),l.a.createElement("span",null,"900")),l.a.createElement("div",{className:"discount"},"64%")),l.a.createElement("div",{className:"item-qty"},l.a.createElement("span",null,"-"),l.a.createElement("input",{value:"1",disabled:!0}),l.a.createElement("span",null,"+")),l.a.createElement("div",{className:"remove--item upper--case"},"Remove")))},y=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"cart__item__wrapper"},l.a.createElement(w,null),l.a.createElement(w,null))}}]),a}(n.Component),g=function(){return l.a.createElement("section",{className:"price__details border--wrap"},l.a.createElement("div",{className:"item__name upper--case"},"Price details"),l.a.createElement("ul",{className:"details--row"},l.a.createElement("li",null,"Price (1 item)"),l.a.createElement("li",null,l.a.createElement(i.a,{className:"fa--white",icon:s.b})," 900")),l.a.createElement("ul",{className:"details--row"},l.a.createElement("li",null,"Discount"),l.a.createElement("li",null,l.a.createElement(i.a,{className:"fa--white",icon:s.b})," 900")),l.a.createElement("div",{className:"total__payable details--row"},l.a.createElement("div",{className:"upper--case"},"Total Payable"),l.a.createElement("div",null,l.a.createElement(i.a,{className:"fa--white",icon:s.b})," 319")))},O=function(){return l.a.createElement("footer",null,"\xa9 Copyright")};var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(o,null),l.a.createElement(m,null),l.a.createElement(b,null),l.a.createElement(g,null),l.a.createElement(y,null),l.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(5),A=a(30),T={products:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return"GET_DATAA"===t.type?Object(A.a)({},e,{products:t.payload.filter((function(e){return null!=e}))}):("UPDATE_CART"===t.type&&console.log(t.elem),e)},D=a(29),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c,I=Object(k.d)(C,P(Object(k.a)(D.a)));r.a.render(l.a.createElement(v.a,{store:I},l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a4e4db68.chunk.js.map