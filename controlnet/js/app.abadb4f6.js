(function(e){function t(t){for(var o,r,c=t[0],u=t[1],l=t[2],s=0,d=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={3:0},a={3:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{1:"6d4549e7",2:"845dfcb7",4:"2b5c7f3b",5:"9a03d9dc",6:"bda87507",7:"27ef149d",8:"44054f7a",9:"82d5f96b",10:"a86a29c5",11:"69300fdc",12:"4dd837ca",13:"cc490999"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={4:1,5:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{1:"31d6cfe0",2:"31d6cfe0",4:"5f0574e8",5:"ae169515",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0",11:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0"}[e]+".css",a=u.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===o||s===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===o||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"getToken",(function(){return k})),n.d(o,"isAuth",(function(){return O}));var r={};n.r(r),n.d(r,"setAuthentication",(function(){return $})),n.d(r,"removeAuthentication",(function(){return S}));var a={};n.r(a);var i={};n.r(i),n.d(i,"getToken",(function(){return q}));var c={};n.r(c),n.d(c,"authorize",(function(){return U})),n.d(c,"remove_authorization",(function(){return V}));var u={};n.r(u),n.d(u,"setUavLocation",(function(){return F})),n.d(u,"setHeading",(function(){return I})),n.d(u,"setMissionState",(function(){return K}));n("5319"),n("7d6e"),n("e54f"),n("985d"),n("0047");var l=n("2b0e"),s=n("1f91"),d=n("42d2"),f=n("b05d"),p=n("2a19");l["a"].use(f["a"],{config:{notify:{}},lang:s["a"],iconSet:d["a"],plugins:{Notify:p["a"]}});var h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},m=[],b={name:"App"},v=b,g=n("2877"),y=Object(g["a"])(v,h,m,!1,null,null,null),w=y.exports,P=n("2f62"),j=n("0e44"),A=function(){return{token:"",isAuthenticated:!1,videoSources:[]}};const k=e=>()=>e.token,O=e=>()=>e.isAuthenticated,$=(e,t)=>{e.token=t.token,e.isAuthenticated=!0},S=e=>{e.token="",e.isAuthenticated=!1};var x=n("bc3a"),_=n.n(x),E={namespaced:!0,state:A,getters:o,mutations:r,actions:a},L=function(){return{}},T=n("83a1"),C=n("3c55"),N=n("9481"),B={namespaced:!0,state:L,getters:T,mutations:C,actions:N},M=function(){return{jwt:"",isAuthenticated:!1}};const q=e=>()=>e.jwt,U=(e,t)=>{e.isAuthenticated=!0,e.jwt=t.jwt},V=e=>{e.isAuthenticated=!1,e.jwt=""};var z=n("4ce5"),D={namespaced:!0,state:M,getters:i,mutations:c,actions:z},H=n("e11e"),J=function(){return{uavLocation:Object(H["latLng"])(),heading:0,missionState:null}},W=n("8c0f");const F=(e,t)=>{e.uavLocation=t},I=(e,t)=>{e.heading=t},K=(e,t)=>{e.missionState=t};var Q=n("7b95"),G={namespaced:!0,state:J,getters:W,mutations:u,actions:Q};l["a"].use(P["a"]);var R=null,X=function(){const e=new P["a"].Store({modules:{global:E,ior:B,stream:D,uav:G},plugins:[Object(j["a"])()],strict:!1});return R=e,e},Y=n("8c4f");n("ddb0");const Z=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"8b24"))}]},{path:"/stream",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"a0d6"))},{path:"meet",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"c8c7"))}]},{path:"/auth",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"6881"))},{path:"dashboard",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"6881"))},{path:"devices",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"4553"))},{path:"settings",component:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"21ef"))},{path:"connections",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"ff0f"))},{path:"video",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e23b"))},{path:"editdevice",component:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"602f"))},{path:"droneNavigation",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"f724"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}];var ee=Z;l["a"].use(Y["a"]);var te=function(){const e=new Y["a"]({scrollBehavior:()=>({x:0,y:0}),routes:ee,mode:"hash",base:""});return e.beforeEach(((e,t,n)=>"/"==e.path&&R.state.global.isAuthenticated?n({path:"/auth/"}):e.path.startsWith("/logout")?(R.commit("global/removeAuthentication"),n({path:"/"})):e.path.startsWith("/auth")&&!R.state.global.isAuthenticated?n({path:"/"}):void n())),e},ne=async function(){const e="function"===typeof X?await X({Vue:l["a"]}):X,t="function"===typeof te?await te({Vue:l["a"],store:e}):te;e.$router=t;const n={router:t,store:e,render:e=>e(w),el:"#q-app"};return{app:n,store:e,router:t}},oe=n("8972");l["a"].prototype.$axios=_.a;var re=n("2699"),ae=n("a40a"),ie=n("4e2b"),ce=n("635f"),ue=n("fbba"),le=(n("6cc5"),n("6ab4")),se=n.n(le);l["a"].component("l-map",re["a"]),l["a"].component("l-tile-layer",ae["a"]),l["a"].component("l-marker",ie["a"]),l["a"].component("l-polyline",ce["a"]),l["a"].component("l-icon",ue["a"]),l["a"].component("v-rotated-marker",se.a);const de="";async function fe(){const{app:e,store:t,router:n}=await ne();let o=!1;const r=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},a=window.location.href.replace(window.location.origin,""),i=[oe["default"],void 0,void 0];for(let u=0;!1===o&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:n,store:t,Vue:l["a"],ssrContext:null,redirect:r,urlPath:a,publicPath:de})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new l["a"](e)}fe()},"3c55":function(e,t){},"4ce5":function(e,t){},"7b95":function(e,t){},"83a1":function(e,t){},8972:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a}));var o=n("2b0e");const r="localhost";const a=(e,t=!1)=>{`${e}:8081/media`,o["a"].prototype.$videoBackend=`${t?"https":"http"}://${e}:${t?"443":"8081"}/media`,o["a"].prototype.$backendUrl=`${t?"https":"http"}://${e}:${t?"443":"8080"}/backend`,o["a"].prototype.$tunnelServer=`${t?"https":"http"}://${e}:${t?"443":"5001"}/tunnel`};o["a"].prototype.$indexOf=(e,t)=>{for(var n in e)if(e[n].id==t)return n;return-1},a(r,!1)},"8c0f":function(e,t){},9481:function(e,t){}});