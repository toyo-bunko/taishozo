(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{10431:function(e,t,r){"use strict";r.r(t);r(58);var n=r(16),c=r(25),o=r(30),l=r(27),f=r(17),d=r(7),v=(r(11),r(61)),h=r(407),m=r(441);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var O=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},j=function(e){Object(o.a)(r,e);var t=y(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).baseUrl="https://static.toyobunko-lab.jp/taishozo",e}return Object(c.a)(r,[{key:"title",get:function(){return this.$t("news")}},{key:"head",value:function(){return{title:this.title}}},{key:"bh",get:function(){return[{text:this.$t("top"),disabled:!1,to:this.localePath({name:"index"}),exact:!0},{text:this.title}]}}]),r}(v.Vue),x=j=O([Object(v.Component)({components:{Breadcrumbs:h.a,News:m.a}})],j),_=(r(502),r(52)),w=r(81),R=r.n(w),P=r(405),component=Object(_.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Breadcrumbs",{attrs:{items:e.bh}}),e._v(" "),r("v-container",{staticClass:"my-5"},[r("h2",{staticClass:"mb-5"},[e._v(e._s(e.title))]),e._v(" "),r("News")],1)],1)}),[],!1,null,null,null);t.default=component.exports;R()(component,{VContainer:P.a})},407:function(e,t,r){"use strict";r(58);var n=r(16),c=r(30),o=r(27),l=r(17),f=r(7),d=(r(11),r(61));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var h=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},m=function(e){Object(c.a)(r,e);var t=v(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return r}(d.Vue);h([Object(d.Prop)({required:!0})],m.prototype,"items",void 0);var y=m=h([d.Component],m),O=r(52),j=r(81),x=r.n(j),_=r(414),w=r(405),R=r(171),P=r(49),component=Object(O.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",{attrs:{color:"grey lighten-2"}},[r("v-container",{staticClass:"py-2 px-0 mx-0",attrs:{fluid:""}},[r("v-breadcrumbs",{staticClass:"py-0",attrs:{items:e.items},scopedSlots:e._u([{key:"divider",fn:function(){return[r("v-icon",[e._v("mdi-chevron-right")])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.a=component.exports;x()(component,{VBreadcrumbs:_.a,VContainer:w.a,VIcon:R.a,VSheet:P.a})},408:function(e,t,r){var content=r(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("b1bed018",content,!0,{sourceMap:!1})},409:function(e,t,r){var n=r(18)(!1);n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=n},414:function(e,t,r){"use strict";r(8),r(5),r(6),r(11),r(13);var n=r(2),c=(r(408),r(76)),o=r(9);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,f(f({},data),{},{attrs:f(f({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(1),h=Object(v.h)("v-breadcrumbs__divider","li"),m=r(29);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(d,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},441:function(e,t,r){"use strict";r(58);var n=r(14),c=r(16),o=r(25),l=r(30),f=r(27),d=r(17),v=r(7),h=(r(53),r(11),r(61));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(e,t,r,desc){var n,c=arguments.length,o=c<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(c<3?n(o):c>3?n(t,r,o):n(t,r))||o);return c>3&&o&&Object.defineProperty(t,r,o),o},O=function(e){Object(l.a)(f,e);var t,r=m(f);function f(){var e;return Object(c.a)(this,f),(e=r.apply(this,arguments)).items=[],e}return Object(o.a)(f,[{key:"created",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"ja"===(t=this.$i18n.locale)?t="":t+="/",e.prev=2,e.next=5,this.$content(t+"news").sortBy("date","desc").limit(this.size||"").fetch();case 5:r=e.sent,this.items=r,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log({e:e.t0});case 12:case"end":return e.stop()}}),e,this,[[2,9]])}))),function(){return t.apply(this,arguments)})}]),f}(h.Vue);y([Object(h.Prop)({})],O.prototype,"size",void 0);var j=O=y([Object(h.Component)({components:{}})],O),x=r(52),component=Object(x.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.items.length>0?[r("ul",e._l(e.items,(function(t,n){return r("li",{key:n,staticClass:"mb-2"},[e._v("\n        "+e._s(t.date.split("T")[0])+"\n\n        "),r("nuxt-link",{staticClass:"ml-2",attrs:{to:e.localePath({name:"news-slug",params:{slug:t.slug}})}},[e._v(e._s(t.title))])],1)})),0)]:[e._v("\n    "+e._s("no news.")+"\n  ")]],2)}),[],!1,null,null,null);t.a=component.exports},457:function(e,t,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("195fb849",content,!0,{sourceMap:!1})},502:function(e,t,r){"use strict";r(457)},503:function(e,t,r){var n=r(18)(!1);n.push([e.i,".nuxt-content h2,.nuxt-content h3,.nuxt-content h4{margin-top:12px;margin-bottom:8px}",""]),e.exports=n}}]);