(this["webpackJsonpjtw-s-cart"]=this["webpackJsonpjtw-s-cart"]||[]).push([[0],{46:function(e,t,a){e.exports=a(76)},51:function(e,t,a){},72:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(51),a(45)),i=a(9),s=a(13),u=a(12),m=a(42),d=a.n(m).a.create({baseURL:"https://api.myjson.com/bins/qzuzi"}),p=(a(72),a(3)),E=a(4),f=function(e){return r.a.createElement("header",null,r.a.createElement(s.b,{to:"/cart"},r.a.createElement(p.a,{className:"fa__star",icon:E.g}),e.total),r.a.createElement("aside",null,r.a.createElement("div",{className:"search__bar"},r.a.createElement(p.a,{className:"fa--white",icon:E.d}),r.a.createElement("input",null)),r.a.createElement(s.b,{to:"/cart-items"},r.a.createElement(p.a,{className:"fa--white",icon:E.e})),r.a.createElement("div",{className:"counter"},e.count)))},_=function(e){return r.a.createElement("ul",{className:"filters"},r.a.createElement("li",null,r.a.createElement(p.a,{className:"display--none",icon:E.f}),r.a.createElement("span",{className:"font--bold"},"Sort"),r.a.createElement("span",{className:"sort__by only--desk--display font--bold"},"By"),r.a.createElement("span",{onClick:e.highToLow,className:"price__filter active only--desk--display"},"Price -- High Low"),r.a.createElement("span",{onClick:e.lowToHigh,className:"price__filter only--desk--display"},"Price -- Low High"),r.a.createElement("span",{onClick:e.sortByDiscount,className:"price__filter only--desk--display"},"Price -- Discount")),r.a.createElement("li",null,r.a.createElement(p.a,{className:"display--none",icon:E.b}),r.a.createElement("span",{className:"filter__label font--bold"},"Filter"),r.a.createElement("div",{className:"filer__details text--center"},r.a.createElement("div",{class:"price-field"},r.a.createElement("input",{type:"range",min:"100",max:"500",defaultValue:"100",id:"lower"}),r.a.createElement("input",{type:"range",min:"100",max:"500",defaultValue:"500",id:"upper"})),r.a.createElement("div",{className:"price--label"},"Price"),r.a.createElement("button",{className:"btn__apply"},"Apply"))))},y=a(21),b=a(22),N=a(23),h=a(24),v=function(e){return r.a.createElement("div",{className:"prod__Wrap"},r.a.createElement("img",{src:e.prodImg,alt:"fake"}),r.a.createElement("div",null,e.prodName),r.a.createElement("div",{className:"offers"},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(p.a,{className:"fa--white",icon:E.c})," ",Math.round(e.prodPrice-e.prodPrice*e.discount/100)),e.discount?r.a.createElement("span",null,e.prodPrice):null),e.discount?r.a.createElement("div",{className:"discount"},e.discount,"% off"):r.a.createElement("div",{className:"discount"},"Best price")),r.a.createElement("button",{onClick:e.itemClickHandler,"data-id":e.prodId},"Add to Cart"))},O=function(e){Object(h.a)(a,e);var t=Object(N.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchItems()}},{key:"render",value:function(){var e,t=this;return this.props.products.length&&(e=this.props.products.map((function(e){return r.a.createElement(v,{key:e.id,itemClickHandler:t.props.addToCart,prodName:e.name,prodImg:e.img_url,prodId:e.id,prodPrice:e.price,discount:e.discount})}))),r.a.createElement("section",{className:"product__wrapper"},this.props.error?r.a.createElement("div",{className:"error__msg text--center"},r.a.createElement("div",null),r.a.createElement(p.a,{className:"fa--white",icon:E.a}),r.a.createElement("div",null),this.props.error):e)}}]),a}(n.Component),g=Object(i.b)((function(e){return{products:e.products,error:e.error}}),(function(e){return{addToCart:function(t){e({type:"UPDATE_CART",elem:t.target.getAttribute("data-id")})},fetchItems:function(){return e((function(e){d.get("/").then((function(t){t.data?e({type:"GET_DATAA",payload:t.data,spinner:!1}):(console.log("no data"),e({type:"NO_DATA",spinner:!1,dataError:!0,dataState:"No Data"}))})).catch((function(t){console.log("Something went wrong..."),e({type:"ERROR_LOADING_DATA",spinner:!1,dataError:!0,dataState:"Something went wrong"})}))}))}}}))(O),I=function(e){return r.a.createElement("div",{className:"selected__item"},r.a.createElement("img",{src:"https://fakeimg.pl/300/",alt:"fake"}),r.a.createElement("div",{className:"item__details"},r.a.createElement("div",null,e.prodName),r.a.createElement("div",{className:"offers"},r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(p.a,{className:"fa--white",icon:E.c})," ",Math.round(e.prodPrice-e.prodPrice*e.discount/100)),r.a.createElement("span",null,e.prodPrice)),r.a.createElement("div",{className:"discount"},e.discount," % off")),r.a.createElement("div",{className:"item-qty"},e.qty>1?r.a.createElement("span",{onClick:e.decrementHandler,"data-id":e.prodId},"-"):r.a.createElement("span",{className:"diable__action"},"-"),r.a.createElement("input",{value:e.qty,disabled:!0}),r.a.createElement("span",{onClick:e.incrementHandler,"data-id":e.prodId},"+")),r.a.createElement("div",{className:"remove--item upper--case",onClick:e.itemDeleteHandler,"data-id":e.prodId,"data-qty":e.qty,"data-price":e.prodPrice,"data-discount":e.discount},"Remove")))},D=function(e){Object(h.a)(a,e);var t=Object(N.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){var e=this,t=this.props.selectedItems.map((function(t){return r.a.createElement(I,{key:t.id,itemDeleteHandler:e.props.deleteItem,incrementHandler:e.props.incrementQty,decrementHandler:e.props.decrementQty,prodName:t.name,prodId:t.id,prodPrice:t.price,qty:t.productQty,discount:t.discount})}));return r.a.createElement("section",{className:"cart__item__wrapper"},t)}}]),a}(n.Component),T=Object(i.b)((function(e){return{selectedItems:e.selectedItems}}),(function(e){return{deleteItem:function(t){e({type:"DELETE_ITEM",elem:t.target.getAttribute("data-id"),elemQty:t.target.getAttribute("data-qty"),elemPrice:t.target.getAttribute("data-price"),elemDiscount:t.target.getAttribute("data-discount")})},incrementQty:function(t){e({type:"QTY_INCREMENT",elem:t.target.getAttribute("data-id")})},decrementQty:function(t){e({type:"QTY_DECREMENT",elem:t.target.getAttribute("data-id")})}}}))(D),w=function(e){return r.a.createElement("section",{className:"price__details border--wrap"},r.a.createElement("div",{className:"item__name upper--case"},"Price details"),r.a.createElement("ul",{className:"details--row"},e.count>1?r.a.createElement("li",null,"Price (",e.count," items)"):r.a.createElement("li",null,"Price (",e.count," item)"),r.a.createElement("li",null,r.a.createElement(p.a,{className:"fa--white",icon:E.c})," ",e.total)),r.a.createElement("ul",{className:"details--row"},r.a.createElement("li",null,"Discount"),r.a.createElement("li",null,r.a.createElement(p.a,{className:"fa--white",icon:E.c})," ",Math.round(e.totalDiscount))),r.a.createElement("div",{className:"total__payable details--row"},r.a.createElement("div",{className:"upper--case"},"Total Payable"),r.a.createElement("div",null,r.a.createElement(p.a,{className:"fa--white",icon:E.c})," ",Math.round(e.total-e.totalDiscount))))},j=function(){return r.a.createElement("footer",null,"\xa9 Copyright")};var A=function(){var e=Object(i.d)((function(e){return e.selectedItems.length})),t=Object(i.d)((function(e){return e.total})),a=Object(i.d)((function(e){return e.totalDiscount})),c=Object(i.c)(),l=Object(n.useState)("a"),m=Object(o.a)(l,2);return m[0],m[1],r.a.createElement(s.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,{count:e}),r.a.createElement(u.a,{path:"/cart",exact:!0},r.a.createElement(_,{lowToHigh:function(){return c((function(e){e({type:"LOW_TO_HIGH"})}))},highToLow:function(){return c((function(e){e({type:"HIGH_TO_LOW"})}))},sortByDiscount:function(){return c((function(e){e({type:"SORT_BY_DISCOUNT"})}))}})),r.a.createElement(u.a,{path:"/cart",exact:!0,component:g}),t?r.a.createElement("div",{className:"cart__wrapper"},r.a.createElement(u.a,{path:"/cart-items",exact:!0,component:T}),r.a.createElement(u.a,{path:"/cart-items",exact:!0,component:function(){return r.a.createElement(w,{count:e,total:t,totalDiscount:a})}})):r.a.createElement(u.a,{path:"/cart-items",exact:!0,render:function(){return r.a.createElement("div",{className:"cart__empty text--center upper--case"},"Cart is Empty")}}),r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(14),C=a(25),P=a(10),H={products:[],selectedItems:[],error:null,total:0,totalDiscount:0},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;if("GET_DATAA"===t.type&&0===e.selectedItems.length)return Object(P.a)({},e,{products:t.payload.filter((function(e){return null!=e}))});if("ERROR_LOADING_DATA"===t.type)return Object(P.a)({},e,{error:t.dataState});if("UPDATE_CART"===t.type){var a=e.products.find((function(e){return e.id===parseInt(t.elem)})),n=e.selectedItems.find((function(e){return e.id===parseInt(t.elem)}));return n?(console.log("if block"),a.productQty+=1,console.log(a.productQty),Object(P.a)({},e,{total:e.total+a.price,totalDiscount:e.totalDiscount+a.price*a.discount/100})):(console.log("else block"),a.productQty=1,Object(P.a)({},e,{total:e.total+a.price,totalDiscount:e.totalDiscount+a.price*a.discount/100,selectedItems:e.selectedItems.concat(e.products.filter((function(e){return e.id===parseInt(t.elem)})))}))}if("QTY_INCREMENT"===t.type){console.log(t.elem);var r=e.products.find((function(e){return e.id===parseInt(t.elem)}));return r.productQty+=1,Object(P.a)({},e,{total:e.total+r.price,totalDiscount:e.totalDiscount+r.price*r.discount/100})}if("QTY_DECREMENT"===t.type){var c=e.products.find((function(e){return e.id===parseInt(t.elem)}));return c.productQty-=1,Object(P.a)({},e,{total:e.total-c.price,totalDiscount:e.totalDiscount-c.price*c.discount/100})}return"DELETE_ITEM"===t.type?Object(P.a)({},e,{selectedItems:e.selectedItems.filter((function(e){return e.id!==parseInt(t.elem)})),total:e.total-t.elemQty*t.elemPrice,totalDiscount:e.totalDiscount-t.elemPrice*t.elemDiscount/100*t.elemQty}):"LOW_TO_HIGH"===t.type?Object(P.a)({},e,{products:Object(C.a)(e.products).sort((function(e,t){return parseFloat(e.price)-parseFloat(t.price)}))}):"HIGH_TO_LOW"===t.type?Object(P.a)({},e,{products:Object(C.a)(e.products).sort((function(e,t){return parseFloat(t.price)-parseFloat(e.price)}))}):"SORT_BY_DISCOUNT"===t.type?Object(P.a)({},e,{products:Object(C.a)(e.products).sort((function(e,t){return parseFloat(t.discount)-parseFloat(e.discount)}))}):e},R=a(44),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.c,S=Object(k.d)(Q,L(Object(k.a)(R.a)));l.a.render(r.a.createElement(i.a,{store:S},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.85cc9f51.chunk.js.map