(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{10430:function(t,e,n){"use strict";n.r(e);n(58);var r=n(16),c=n(25),o=n(30),l=n(27),f=n(17),v=n(7),h=(n(11),n(61)),d=n(441);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(o.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).siteName="『大正新脩大蔵経』底本・校本データベース",t.siteDesc="『大正新脩大蔵経』底本・校本データベースへようこそ",t.slides=["https://static.toyobunko-lab.jp/taishozo/img/kandomokuroku DB_img 005.jpg","https://static.toyobunko-lab.jp/taishozo/img/kandomokuroku DB_img 001.jpg"],t}return Object(c.a)(n,[{key:"head",value:function(){return{titleTemplate:null}}}]),n}(h.Vue),j=_=y([Object(h.Component)({components:{News:d.a}})],_),O=n(52),R=n(81),k=n.n(R),w=n(189),C=n(10439),x=n(10412),P=n(405),$=n(171),B=n(49),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-sheet",{attrs:{color:"grey"}},[n("v-carousel",{attrs:{cycle:"",height:"400","show-arrows-on-hover":""}},t._l(t.slides,(function(t,i){return n("v-carousel-item",{key:i,attrs:{src:t,contain:""}})})),1)],1),t._v(" "),n("v-container",{staticClass:"my-10"},[n("div",{staticClass:"mb-5 pb-5 text-center"},[n("h2",[t._v(t._s(t.$t(t.siteName)))]),t._v(" "),n("p",{staticClass:"py-5",domProps:{innerHTML:t._s(t.$t(t.siteDesc))}}),t._v(" "),n("p",[t._v(t._s(t.$t("以下からお試しください。")))]),t._v(" "),n("v-btn",{staticClass:"ma-1",attrs:{dark:"",rounded:"",depressed:"",color:"error",to:t.localePath({name:"search"})}},[n("v-icon",{staticClass:"mr-1"},[t._v("mdi-magnify")]),t._v(" "+t._s(t.$t("search"))+"\n      ")],1)],1)]),t._v(" "),n("v-sheet",{attrs:{color:"grey lighten-3"}},[n("v-container",{staticClass:"py-10"},[n("div",[n("span",{staticClass:"text-h5 mr-2"},[t._v(t._s(t.$t("news")))]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"news"})}},[t._v(t._s(t.$t("all")))]),t._v(" "),n("News",{staticClass:"mt-4"})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VBtn:w.a,VCarousel:C.a,VCarouselItem:x.a,VContainer:P.a,VIcon:$.a,VSheet:B.a})},441:function(t,e,n){"use strict";n(58);var r=n(14),c=n(16),o=n(25),l=n(30),f=n(27),v=n(17),h=n(7),d=(n(53),n(11),n(61));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(l.a)(f,t);var e,n=m(f);function f(){var t;return Object(c.a)(this,f),(t=n.apply(this,arguments)).items=[],t}return Object(o.a)(f,[{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ja"===(e=this.$i18n.locale)?e="":e+="/",t.prev=2,t.next=5,this.$content(e+"news").sortBy("date","desc").limit(this.size||"").fetch();case 5:n=t.sent,this.items=n,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),console.log({e:t.t0});case 12:case"end":return t.stop()}}),t,this,[[2,9]])}))),function(){return e.apply(this,arguments)})}]),f}(d.Vue);y([Object(d.Prop)({})],_.prototype,"size",void 0);var j=_=y([Object(d.Component)({components:{}})],_),O=n(52),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.items.length>0?[n("ul",t._l(t.items,(function(e,r){return n("li",{key:r,staticClass:"mb-2"},[t._v("\n        "+t._s(e.date.split("T")[0])+"\n\n        "),n("nuxt-link",{staticClass:"ml-2",attrs:{to:t.localePath({name:"news-slug",params:{slug:e.slug}})}},[t._v(t._s(e.title))])],1)})),0)]:[t._v("\n    "+t._s("no news.")+"\n  ")]],2)}),[],!1,null,null,null);e.a=component.exports}}]);