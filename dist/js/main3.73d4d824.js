(function(e){function t(t){for(var r,o,u=t[0],i=t[1],s=t[2],f=0,l=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={main3:0,main:0},a={main3:0,main:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-00a57b5c":"c7506b69","chunk-25007833":"3937e234","chunk-78f2ce19":"44a6050d","chunk-a65a23a0":"e6e47bb1"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-00a57b5c":1,"chunk-25007833":1,"chunk-78f2ce19":1,"chunk-a65a23a0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-00a57b5c":"57c45466","chunk-25007833":"82a34d82","chunk-78f2ce19":"a5b1cc0f","chunk-a65a23a0":"d87ecd9b"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;c.push(["8d93","chunk-vendors","chunk-common"]),n()})({"1f0f":function(e,t,n){"use strict";n("4501")},4501:function(e,t,n){},"8bbf":function(e,t){e.exports=Vue},"8d93":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("8bbf"),o=n.n(r),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"annexThree"},[n("nav",{staticClass:"nav"},[n("van-icon",{attrs:{size:"20",name:"arrow-left"},on:{click:e.back}}),n("h6",[e._v("附件三")])],1),e._m(0)])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[n("p",[e._v("获取用户手机权限的场景和频率（ Android )")]),n("p",[e._v("读写手机存储权限")]),e._v(" 应用场景：涉及读写文件系统业务，比如应用信息数据文件缓存、读取"),n("br"),e._v(" 使用频率：触发相关业务时获取 "),n("p",[e._v("访问手机相册权限")]),e._v(" 应用场景：开通商户时上传商户照片资料"),n("br"),e._v(" 使用频率：触发相关业务时获取 "),n("p",[e._v("使用照相设备权限")]),e._v(" 应用场景：开通商户时上传商户照片资料"),n("br"),e._v(" 使用频率：触发相关业务时获取 "),n("p",[e._v("允许通知权限")]),e._v(" 应用场景：动账通知、消息推送"),n("br"),e._v(" 使用频率：触发相关务时获取 "),n("p",{staticClass:"ios"},[e._v("获取用户手机权限的场景和频率（ iOS )")]),n("p",[e._v("访问手机相册权限")]),e._v(" 应用场景：开通商户时上传商户照片资料"),n("br"),e._v(" 使用频率：触发相关业务时获取 "),n("p",[e._v("使用照相设备权限")]),e._v(" 应用场景：开通商户时上传商户照片资料"),n("br"),e._v(" 使用频率：触发相关业务时获取 "),n("p",[e._v("使用照相设备权限")]),e._v(" 应用场景：开通商户时上传商户照片资料"),n("br"),e._v(" 使用频率：触发相关业务时获取 "),n("p",[e._v("允许通知权限")]),e._v(" 应用场景：动账通知、消息推送"),n("br"),e._v(" 使用频率：触发相关业务时获取 ")])}],u={data:function(){return{}},methods:{back:function(){window.history.back()}}},i=u,s=(n("1f0f"),n("2877")),f=Object(s["a"])(i,a,c,!1,null,"a9c001fa",null),l=f.exports,p=n("a18c");n("4942");o.a.config.productionTip=!1,new o.a({router:p["a"],render:function(e){return e(l)}}).$mount("#app")}});