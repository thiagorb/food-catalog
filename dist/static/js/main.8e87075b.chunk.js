(this["webpackJsonpfood-catalog"]=this["webpackJsonpfood-catalog"]||[]).push([[0],[,function(e,t,a){e.exports={product:"Product_product__l3EVN",text:"Product_text__2Mzz2",name:"Product_name__37Rc9",description:"Product_description__MFt-a",more:"Product_more__3Ds2F",caret:"Product_caret__rorNN"}},function(e,t,a){e.exports={filter:"Filter_filter__2AQ0O",options:"Filter_options__3Mnll",option:"Filter_option__5X_Bk",checkbox:"Filter_checkbox__69kfX","is-checked":"Filter_is-checked__2bnjJ"}},function(e,t,a){e.exports={nav:"Nav_nav__2k3D9",item:"Nav_item__18bSP"}},function(e,t,a){e.exports={grid:"Grid_grid__3qlQJ",item:"Grid_item__2B44c"}},,,function(e,t,a){e.exports={brand:"BrandName_brand__3Da0d"}},function(e,t,a){e.exports={header:"Header_header__3mObx"}},function(e,t,a){e.exports={tag:"Tag_tag__1_pzz"}},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(6),c=a.n(n),u=(a(16),a(10)),o=(a(17),a(7)),l=a.n(o),s=function(e){var t=e.brandName;return i.a.createElement("div",{className:l.a.brand},t)},m=a(3),p=a.n(m),d=function(e){var t=e.children;return i.a.createElement("nav",{className:p.a.nav},i.a.Children.map(t,(function(e){return i.a.createElement("div",{className:p.a.item},e)})))},f="Brandname",v=a(8),_=a.n(v),g=function(e){e.children;return i.a.createElement("header",{className:_.a.header},i.a.createElement(s,{brandName:f}),i.a.createElement(d,null,i.a.createElement("a",{href:"/"},"Menu Item 1"),i.a.createElement("a",{href:"/"},"Menu Item 2"),i.a.createElement("a",{href:"/"},"Menu Item 3"),i.a.createElement("a",{href:"/"},"Menu Item 4"),i.a.createElement("a",{href:"/"},"Menu Item 5"),i.a.createElement("a",{href:"/"},"Menu Item 6")))},h=a(2),b=a.n(h),E=a(9),N=a.n(E),y=function(e){return i.a.createElement("div",Object.assign({},e,{color:void 0,className:"".concat(e.className||""," ").concat(N.a.tag),style:{backgroundColor:e.color}}))},k=a(1),x=a.n(k),M={Meat:"#e73c01",Fruit:"#f39200",Vegetable:"#2b9030"},V=function(e){var t=e.product;return i.a.createElement("a",{href:t.url,className:x.a.product},i.a.createElement("img",{src:t.imageUrl}),i.a.createElement("div",{className:x.a.text},i.a.createElement("div",{className:x.a.name},t.name),i.a.createElement("div",{className:x.a.type},i.a.createElement(y,{color:M[t.type]},t.type)),i.a.createElement("div",{className:x.a.description},t.description),i.a.createElement("div",{className:x.a.more},i.a.createElement("div",{className:x.a.caret,style:{borderColor:M[t.type]}}),"More info")))},A=function(e){var t=[b.a.checkbox];return e.selected&&t.push(b.a["is-checked"]),t.join(" ")},F=function(e){var t=e.options,a=e.onClickOption;return i.a.createElement("div",{className:b.a.filter},i.a.createElement("div",null,"Filter:"),i.a.createElement("ul",{className:b.a.options},t.map((function(e){return i.a.createElement("li",{className:b.a.option,key:e.label,onClick:function(){return a(e.label)}},i.a.createElement(y,{color:M[e.label]},i.a.createElement("div",{className:A(e)}),e.label))}))))},D=a(4),O=a.n(D),q=function(e){var t=e.children;return i.a.createElement("div",{className:O.a.grid},i.a.Children.map(t,(function(e){return i.a.createElement("div",{className:O.a.item},e)})))},B=[{name:"Apple",imageUrl:"https://picsum.photos/300/200?random=1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/apple",type:"Fruit"},{name:"Eggplants",imageUrl:"https://picsum.photos/300/200?random=2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/eggplants",type:"Vegetable"},{name:"Banana",imageUrl:"https://picsum.photos/300/200?random=3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/banana",type:"Fruit"},{name:"Broccoli",imageUrl:"https://picsum.photos/300/200?random=4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/broccoli",type:"Vegetable"},{name:"Chicken",imageUrl:"https://picsum.photos/300/200?random=5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/chicken",type:"Meat"},{name:"Orange",imageUrl:"https://picsum.photos/300/200?random=6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/orange",type:"Fruit"},{name:"Beef",imageUrl:"https://picsum.photos/300/200?random=7",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/Beef",type:"Meat"},{name:"Zucchini",imageUrl:"https://picsum.photos/300/200?random=8",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper libero nisi. Aliquam porttitor ipsum vel condimentum rutrum. Donec dui ligula, cursus a varius sit amet, faucibus id nulla.",url:"/Zucchini",type:"Vegetable"}],C=Array.from(new Set(B.map((function(e){return e.type}))).values()),U={products:B,filterOptions:C},L=function(){var e=Object(r.useState)(new Set),t=Object(u.a)(e,2),a=t[0],n=t[1],c=U.filterOptions.map((function(e){return{label:e,selected:a.has(e)}})),o=a.size>0?U.products.filter((function(e){return a.has(e.type)})):U.products,l=Object(r.useCallback)((function(e){var t=new Set(Array.from(a.values()));t.has(e)?t.delete(e):t.add(e),console.log(a,t),n(t)}),[a]);return i.a.createElement("div",{className:"container"},i.a.createElement(g,null),i.a.createElement(F,{options:c,onClickOption:l}),i.a.createElement(q,null,o.map((function(e,t){return i.a.createElement(V,{key:t,product:e})}))))};c.a.render(i.a.createElement(L,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.8e87075b.chunk.js.map