(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"0874":function(t,e,n){t.exports=n.p+"img/banner3.3b68ce8e.jpg"},1642:function(t,e,n){t.exports=n.p+"img/codeCard.077f387b.jpg"},2097:function(t,e,n){t.exports=n.p+"img/banner1.09d27359.jpg"},4942:function(t,e){(function(){function t(){var t=window.innerWidth;t>450&&(document.documentElement.style.fontSize=t/1920*100+"px")}var e;t(),window.addEventListener("resize",(function(){clearTimeout(e),e=setTimeout(t,200)}))})()},5199:function(t,e,n){t.exports=n.p+"img/banner2.53a408cb.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("99af");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("navigation-bar",{staticClass:"navBar"}),n("router-view"),n("copyright-bt")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigationBar"},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav-left"},[n("img",{attrs:{src:t.logo,alt:""},on:{click:t.toHome}})]),n("dl",{staticClass:"nav-right"},t._l(t.navList,(function(e,a){return n("dd",{key:e+a},[n("div",{staticClass:"part",class:{selectCor:t.selectIndex==a},on:{mouseleave:function(e){return t.leaveMenu(a)},mouseenter:function(e){return t.sonMenu(a)},click:function(e){return t.navClick(a)}}},[n("div",{staticClass:"cont"},[t._v(" "+t._s(e)+" ")])])])})),0)]),n("div",{staticClass:"pro-nav",class:[t.isPro?"show":"hidden"],on:{mouseleave:function(e){return t.leaveMenu()},mouseenter:function(e){return t.enter()}}},[n("dl",{staticClass:"cashier"},[n("dt",[t._v("收银产品")]),t._l(t.proList,(function(e,a){return n("dd",{key:e+a,class:{selectCor:t.proIndex==a},on:{click:function(e){return t.handClick(a)}}},[t._v(" "+t._s(e)+" ")])}))],2),n("dl",{staticClass:"Marketing"},[n("dt",[t._v("管理/营销产品")]),n("dd",{class:{selectCor:3==t.proIndex},on:{click:t.onMarke}},[t._v(" 盈收收展业版APP ")])])])])},r=[],o=(n("ac1f"),n("5319"),n("d8ad")),l={name:"",data:function(){return{logo:n("81a5"),navList:["首页","产品中心","合作加盟","关于我们","服务商登录"],selectIndex:0,proList:["盈收收APP","聚合码收款","智能POS"],proIndex:-1,isMarke:!1,isPro:!1,time:null}},created:function(){var t=this;o["a"].$on("pro",(function(){t.selectIndex=2}));var e=window.location.href;e.indexOf("productCenter")>0?this.selectIndex=1:e.indexOf("joinIn")>0?this.selectIndex=2:e.indexOf("aboutUs")>0&&(this.selectIndex=3)},methods:{navClick:function(t){switch(1!=t&&(this.selectIndex=t),t){case 0:this.$router.push({path:"/"});break;case 1:break;case 2:this.$router.push({path:"joinIn"});break;case 3:this.$router.push({path:"/aboutUs"});break;case 4:window.location.href="https://sps.yoliinfo.com/";break}document.body.scrollTop=0,document.documentElement.scrollTop=0},sonMenu:function(t){var e=this;1==t&&(clearTimeout(this.time),this.$nextTick((function(){e.isPro=!0})))},enter:function(){clearTimeout(this.time)},leaveMenu:function(){var t=this;this.time=setTimeout((function(){t.isPro=!1}),100)},handClick:function(t){this.proIndex=t,this.$router.replace({path:"/productCenter",query:{index:t}}),this.isPro=!1,this.selectIndex=1},onMarke:function(){this.proIndex=3,this.$router.push({path:"/productCenter",query:{index:3}}),this.isPro=!1,this.selectIndex=1},toHome:function(){this.$router.push("/"),this.selectIndex=0}}},u=l,d=(n("e891"),n("2877")),p=Object(d["a"])(u,c,r,!1,null,"7db25381",null),f=p.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("div",{staticClass:"copyright-top"},[n("div",{staticClass:"logo-wra"},[n("div",{staticClass:"logo"}),n("div",{staticClass:"oa"}),n("div",{staticClass:"spr"}),n("div",{staticClass:"mch"})]),n("div",{staticClass:"tel"},[n("div",{staticClass:"tel-img"},[n("div",{staticClass:"tel-img-left"}),n("div",{staticClass:"tel-img-right"},[t._v("服务热线")])]),n("p",[t._v("400 000 8807")]),n("p",[t._v("7x24小时全年无休")])]),n("div",{staticClass:"adress"},[n("div",{staticClass:"adress-img"},[n("div",{staticClass:"adress-img-left"}),n("div",{staticClass:"adress-img-right"},[t._v("联系我们")])]),n("p",[t._v("杭州市江干区杭海路601号三堡产业大厦A幢1939室")]),n("p",[t._v("企业邮箱：pay@yoliinfo.com")]),n("p",[t._v("客服QQ：352815551")])])]),n("div",{staticClass:"copyright-bottom"},[t._v(" Copyright © 2014-2022 优粒 版权所有 All Rights Reserved. 浙ICP备2022003452号-1 ")])])}],h={},g=h,C=(n("9895"),Object(d["a"])(g,v,m,!1,null,"2eb91928",null)),b=C.exports,_={components:{navigationBar:f,copyrightBt:b},data:function(){return{}}},x=_,k=(n("7c55"),Object(d["a"])(x,s,i,!1,null,null,null)),w=k.exports,y=n("a18c"),I=(n("1951"),n("450d"),n("eedf")),j=n.n(I),$=(n("96dc"),n("9cea")),P=n.n($),E=(n("186a"),n("301f")),z=n.n(E),L=(n("425f"),n("4105")),M=n.n(L),O=(n("10cb"),n("f3ad")),T=n.n(O),U=(n("acb6"),n("c673")),H=n.n(U),A=(n("eca7"),n("3787")),S=n.n(A);a["default"].use(j.a).use(P.a).use(z.a).use(M.a).use(T.a).use(H.a).use(S.a);n("4942");var q=n("bc3a"),B=n.n(q);a["default"].prototype.$axios=B.a,a["default"].config.productionTip=!1,new a["default"]({router:y["a"],mounted:function(){var t=new Date,e=t.getHours(),n=t.getMinutes(),a=t.getSeconds();console.log("预渲染1","".concat(e,":").concat(n,":").concat(a)),document.dispatchEvent(new Event("render-event"));t=new Date;var s=t.getHours(),i=t.getMinutes(),c=t.getSeconds();console.log("预渲染2","".concat(s,":").concat(i,":").concat(c))},render:function(t){return t(w)}}).$mount("#app")},5830:function(t,e,n){},"68cd":function(t,e,n){t.exports=n.p+"img/img_zs04.d2f44e4c.jpg"},"6cb6":function(t,e,n){t.exports=n.p+"img/img_zs02.b9568235.jpg"},"704a":function(t,e,n){t.exports=n.p+"img/partner4.2ff7dd3b.png"},"70c9":function(t,e,n){t.exports=n.p+"img/img_zs03.d55bc6da.jpg"},"792a":function(t,e,n){t.exports=n.p+"img/partner5.56a5948c.png"},"7c55":function(t,e,n){"use strict";n("dcc4")},"81a5":function(t,e,n){t.exports=n.p+"img/logo.e4f64b2d.png"},9895:function(t,e,n){"use strict";n("d486")},9999:function(t,e,n){t.exports=n.p+"img/partner1.9ae430de.png"},a18c:function(t,e,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("2b0e"),s=n("8c4f"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"carousel"},[n("el-carousel",{attrs:{height:"5.6rem",interval:5e3}},t._l(t.bannerList,(function(t,e){return n("el-carousel-item",{key:e},[n("el-image",{staticClass:"banner",attrs:{src:t.url,alt:""}})],1)})),1)],1),n("div",{staticClass:"codeCard"},[t._m(0),n("el-image",{staticClass:"codeCard-right",attrs:{lazy:"",src:t.codeCard,alt:""}})],1),n("div",{staticClass:"app"},[n("el-image",{staticClass:"app-left",attrs:{lazy:"",src:t.appUrl,alt:""}}),t._m(1)],1),n("div",{staticClass:"pos"},[t._m(2),n("el-image",{staticClass:"pos-right",attrs:{lazy:"",src:t.posUrl,alt:""}})],1),n("div",{staticClass:"achievement"}),n("div",{staticClass:"qualifications"},[n("h6",[t._v("企业资质")]),n("div",{staticClass:"qualifications-background"},[n("dl",t._l(t.blList,(function(t,e){return n("dd",{key:e},[n("el-image",{attrs:{lazy:"",src:t.url,alt:""}})],1)})),0)])]),n("div",{staticClass:"partner"},[n("h6",[t._v("合作伙伴")]),n("dl",{staticClass:"wrp"},t._l(t.partnerList,(function(t,e){return n("dd",{key:t+e,staticClass:"inside"},[n("el-image",{attrs:{lazy:"",src:t.url,alt:""}})],1)})),0)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"codeCard-left"},[n("h6",[t._v("聚合码牌收款")]),n("p",[t._v("聚合主流收款方式")]),n("p",[t._v("实现线上、线下全交易场景覆盖，让您的收款即简单又方便")]),n("p",{},[t._v("产品适用：便利店、小吃店、水果店、菜市场等")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-right"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-img"}),n("div",{staticClass:"title-word"},[t._v("盈收收APP")])]),n("p",[t._v("不只是收款、在线交易、对账、门店员工管理")]),n("p",[t._v("产品适用：服装店、餐饮店等各种店铺、商铺")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pos-left"},[n("h6",[t._v("智能POS")]),n("p",[t._v("全渠道收款，支持支付宝、微信等主流移动支付收款")]),n("p",[t._v("同时支持储蓄卡、信用卡收款")]),n("p",[t._v("产品适用：百货商场、超市、服装行业、医疗行业等")])])}],r={name:"Home",data:function(){return{bannerList:[{url:n("5199")},{url:n("0874")},{url:n("2097")}],codeCard:n("1642"),appUrl:n("fa44"),posUrl:n("c3df"),achievement:n("ba8a"),blList:[{url:n("ea56")},{url:n("6cb6")},{url:n("70c9")},{url:n("68cd")}],partnerList:[{url:n("9999")},{url:n("a42e")},{url:n("d4f0")},{url:n("704a")},{url:n("792a")},{url:n("b26b")}]}},methods:{}},o=r,l=(n("cedb"),n("2877")),u=Object(l["a"])(o,i,c,!1,null,"f201e0a6",null),d=u.exports;a["default"].use(s["a"]);var p=s["a"].prototype.push;s["a"].prototype.push=function(t){return p.call(this,t).catch((function(t){return t}))};var f=[{path:"/",name:"HomePage",component:d},{path:"/productCenter",name:"productCenter",component:function(){return n.e("chunk-78f2ce19").then(n.bind(null,"3032"))}},{path:"/joinIn",name:"joinIn",component:function(){return n.e("chunk-25007833").then(n.bind(null,"35ad"))}},{path:"/information",name:"information",component:function(){return n.e("chunk-a65a23a0").then(n.bind(null,"b684"))}},{path:"/aboutUs",name:"aboutUs",component:function(){return n.e("chunk-00a57b5c").then(n.bind(null,"16ab"))}}],v=new s["a"]({routes:f});e["a"]=v},a316:function(t,e,n){},a42e:function(t,e,n){t.exports=n.p+"img/partner2.5fd11259.png"},b26b:function(t,e,n){t.exports=n.p+"img/partner6.c3786d24.png"},ba8a:function(t,e,n){t.exports=n.p+"img/achievement.5abf653f.jpg"},c3df:function(t,e,n){t.exports=n.p+"img/img_pos.dd3f1354.jpg"},cedb:function(t,e,n){"use strict";n("a316")},d486:function(t,e,n){},d4f0:function(t,e,n){t.exports=n.p+"img/partner3.0299bc67.png"},d8ad:function(t,e,n){"use strict";var a=n("2b0e");e["a"]=new a["default"]},dcc4:function(t,e,n){},e891:function(t,e,n){"use strict";n("5830")},ea56:function(t,e,n){t.exports=n.p+"img/img_zs01.144acc8f.jpg"},fa44:function(t,e,n){t.exports=n.p+"img/img_app.bd6747af.jpg"}}]);