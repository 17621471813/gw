(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],l=0,f=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={main1:0},a={main1:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00a57b5c":"100e8389","chunk-25007833":"3909b731","chunk-78f2ce19":"3efeceb8","chunk-a65a23a0":"c3d8de65"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-00a57b5c":1,"chunk-25007833":1,"chunk-78f2ce19":1,"chunk-a65a23a0":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-00a57b5c":"57c45466","chunk-25007833":"82a34d82","chunk-78f2ce19":"a5b1cc0f","chunk-a65a23a0":"d87ecd9b"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],l=s.getAttribute("data-href");if(l===n||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],d.parentNode.removeChild(d),r(c)},d.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(d)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;c.push(["47b1","chunk-vendors","chunk-common"]),r()})({"47b1":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"annexOne"},[r("nav",{staticClass:"nav"},[r("van-icon",{attrs:{size:"20",name:"arrow-left"},on:{click:e.back}}),r("h6",[e._v("附件一")])],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[r("p",[e._v("业务场景或功能对用户个人信息的采集需求说明")]),r("p",[e._v("开通账号")]),e._v(" 收集频率：仅业务触发时收集"),r("br"),e._v(" 个人信息类型：个人基本资料"),r("br"),e._v(" 个人信息字段：手机号、姓名、城市"),r("br"),e._v(" 采用信息目的说明、场景描述：收集联系方式方便业务人员进行线下注册服务 "),r("p",[e._v("账户密码登录")]),e._v(" 收集频率：仅业务触发时收集"),r("br"),e._v("个人信息类型：个人基本资料、个人常用设备信息"),r("br"),e._v("个人信息字段：登录账号"),r("br"),e._v("采用信息目的说明、场景描述：在盈收收展业版登录首页，验证账号及密码完成登录 "),r("p",[e._v("商户开通")]),e._v(" 收集频率：仅业务触发时收集"),r("br"),e._v("个人信息类型：个人基本资料、个人身份信息个人信息字段：姓名、身份证号、身份证正反面照片银行卡号、手机号、营业执照、门头照和经营场所照片"),r("br"),e._v("采用信息目的说明、场景描述：商户开通时需要进行商户信息录入、个人身份校验以及风险控制 "),r("p",[e._v("我的／修改／忘记登录密码")]),e._v(" 收集频率：仅业务触发时收集 "),r("br"),e._v("个人信息类型：个人基本资料、个人身份信息个人信息字段：手机号、动态验证码"),r("br"),e._v("采用信息目的说明、场景描述：验证用户相关信息后，我的／修改个人登录密码 "),r("p",[e._v("账户详情")]),e._v(" 收集频率：仅业务触发时收集 "),r("br"),e._v("个人信息类型：个人基本资料"),r("br"),e._v("个人信息字段：个人头像、昵称、收货地址、手机号码、姓名、身份证号"),r("br"),e._v("采用信息目的说明、场景描述：用于维护用户基本信息 ")])}],c={data:function(){return{}},methods:{back:function(){window.history.back()}}},u=c,i=(r("a160"),r("2877")),s=Object(i["a"])(u,o,a,!1,null,"11f28c92",null),l=s.exports,f=r("a18c");r("4942");n["default"].config.productionTip=!1,new n["default"]({router:f["a"],render:function(e){return e(l)}}).$mount("#app")},a160:function(e,t,r){"use strict";r("d33c")},d33c:function(e,t,r){}});