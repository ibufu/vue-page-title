(function(e){function t(t){for(var r,o,u=t[0],c=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={7:0},a={7:0},i=[];function u(e){return c.p+"js/"+({0:"page-about~page-project",1:"page-404",2:"page-project",3:"page-about",4:"page-home",5:"hero"}[e]||e)+"-legacy."+{0:"0f07a2ad",1:"fee03bb8",2:"8c175255",3:"eb743ce7",4:"9517b9af",5:"7beab56d"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1,5:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({0:"page-about~page-project",1:"page-404",2:"page-project",3:"page-about",4:"page-home",5:"hero"}[e]||e)+"."+{0:"31d6cfe0",1:"31d6cfe0",2:"2edbbaae",3:"2725f542",4:"31d6cfe0",5:"47cd81bd"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var u=a[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){u=s[i],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var l,s=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=u(e),l=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,s.appendChild(f)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-page-title/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;i.push([3,6]),n()})({"04eY":function(e,t,n){"use strict";var r=n("Ylea"),o=n.n(r);o.a},3:function(e,t,n){e.exports=n("Vtdi")},CS1o:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);var r=n("yT7P"),o=(n("VRzm"),n("Kw5r")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Hero",[n("GithubCorner"),n("router-view"),n("Navigation",{attrs:{slot:"foot"},slot:"foot"})],1)],1)},i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"tabs is-boxed is-fullwidth is-black"},[n("div",{staticClass:"container"},[n("ul",[e._m(0),n("router-link",{attrs:{to:{name:"home"},tag:"li"}},[n("a",[e._v("Home")])]),n("router-link",{attrs:{to:{name:"about"},tag:"li"}},[n("a",[e._v("About me")])])],1)])])},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"https://github.com/vinicius73/vue-page-title",target:"_blank"}},[e._v("Get Started")])])}],l={name:"page-navigation"},s=l,f=(n("wzCF"),n("KHd+")),p=Object(f["a"])(s,u,c,!1,null,"b882c2ba",null),d=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"github-corner",attrs:{href:"https://github.com/vinicius73/vue-page-title",target:"_blank","aria-label":"View source on Github"}},[n("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},h=[],v={name:"github-corner"},b=v,m=(n("d1gh"),Object(f["a"])(b,g,h,!1,null,null,null)),C=m.exports,w=function(){return n.e(5).then(n.bind(null,"Jjsl"))},y={name:"demo-root",components:{Hero:w,Navigation:d,GithubCorner:C},created:function(){var e="vue-page-title",t="@vinicius73",n="1.1.3-47xos2",r=navigator.serviceWorker&&navigator.serviceWorker.controller,o=window.matchMedia("(display-mode: standalone)").matches?"standalone":"web",a=r?"sw-on":"sw-off";console.log("%c ".concat(t,"/").concat(e," %c v").concat(n," %c ").concat(o,"/").concat(a," %c"),"background:#000 ; padding: 3px; border-radius: 3px 0 0 3px;  color: #fff","background:#0a88c2 ; padding: 3px; border-radius: 0 0 0 0;  color: #fff","background:#".concat(r?"21ba45":"db2828"," ; padding: 3px; border-radius: 0 3px 3px 0;  color: #fff"),"background:transparent")}},j=y,x=(n("04eY"),Object(f["a"])(j,a,i,!1,null,null,null)),k=x.exports,L=n("InTe"),E=n("jE9Z"),_=function(){return n.e(4).then(n.bind(null,"7qb8"))},M=function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"gbKQ"))},O=function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"D+WD"))},S=function(){return n.e(1).then(n.bind(null,"7l0S"))},T=[{path:"/",name:"home",component:_},{path:"/about",name:"about",component:M},{path:"/project/:id",name:"project",component:O},{path:"*",component:S}],N=T;o["a"].use(E["a"]);var P=new E["a"]({routes:N,linkExactActiveClass:"is-active"}),A=P,Y=n("Ui0k"),z=(n("KKXr"),n("J7Bk")),B=n("hEyz"),V=n("cfNM"),K=atob("==QMuQjL24CMuIjLy4SYuUjL54CNuQjL24CMuUjL44SMuYmL24CZuMmLz4SNugjL24iMuEmL44iZuUmLx4COuMjLi5CMuAjLz4iYugjLh5iY".split("").reverse().join("")).split(".").reverse().join(""),Z=new B["a"]({uri:"https://api.github.com/graphql",headers:{Authorization:"bearer ".concat(K)}}),$=new z["a"]({link:Z,cache:new V["a"],connectToDevTools:!0}),q=$,D=new Y["a"]({defaultClient:q}),G=D;o["a"].use(Y["a"]),n("v3N2"),o["a"].use(L["a"],{suffix:"- @vinicius73/vue-page-title"}),o["a"].config.productionTip=!1,new o["a"](Object(r["a"])({router:A,provide:G.provide()},k)).$mount("#app")},XVEg:function(e,t,n){},Ylea:function(e,t,n){},d1gh:function(e,t,n){"use strict";var r=n("XVEg"),o=n.n(r);o.a},v3N2:function(e,t,n){"use strict";n.r(t);var r=n("lIOY"),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8e3;setTimeout(function(){document.dispatchEvent(new Event(e))},t)};window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),e.prompt(),e.userChoice.then(function(e){o("install:".concat(e.outcome))})}),Object(r["a"])("service-worker.js",{ready:function(){},registered:function(e){e.update()},cached:function(e){},updated:function(e){o("sw:update"),o("sw:update",4e4)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){o("sw:error"),console.error("Error during service worker registration:",e)}})},wzCF:function(e,t,n){"use strict";var r=n("CS1o"),o=n.n(r);o.a}});
//# sourceMappingURL=app-legacy.aec2e3bf.js.map