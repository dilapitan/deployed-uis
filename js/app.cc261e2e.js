(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f54ff9c5"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"6c198921"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],m.parentNode.removeChild(m),n(i)},m.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/deployed-uis/",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"201e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes[t.theme].background}},[t.isLoggedIn?r("v-navigation-drawer",{style:{background:t.$vuetify.theme.themes[t.theme].navBackground},attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{dense:""}},[r("v-img",{staticClass:"ml-3 mt-2",attrs:{src:n("b13a"),"max-height":"40","max-width":"40"}}),r("v-list-item",{staticClass:"mt-2",attrs:{color:"primary",to:"/dashboard"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-file-chart")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" Dashboard ")])],1)],1),r("v-list-item",{attrs:{color:"primary",to:"/member-management"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-account-group")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" Management ")])],1)],1),r("v-list-item",{attrs:{color:"primary",to:"/account"}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-cog")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" Settings ")])],1)],1),r("v-list-item",{attrs:{color:"primary"},on:{click:function(e){return t.logout()}}},[r("v-list-item-action",[r("v-icon",[t._v("mdi-logout")])],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-subtitle-1"},[t._v(" Logout ")])],1)],1),r("v-divider"),r("br"),r("v-list-item",[r("v-switch",{attrs:{inset:""},on:{click:function(e){return t.toggleTheme()}}}),t.$vuetify.theme.dark?r("v-icon",[t._v("mdi-lightbulb-outline")]):r("v-icon",[t._v("mdi-lightbulb-on-outline")])],1)],1)],1):t._e(),r("v-app-bar",{staticClass:"white--text",attrs:{app:"",color:"primary"}},[t.isLoggedIn?r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),r("v-toolbar-title",{attrs:{color:"white"}},[r("strong",[t._v("LAMI Membership Tracking Tool")])])],1),r("v-main",[r("v-container",{attrs:{fluid:""}},[t.isDataLoaded?r("router-view"):r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{staticClass:"mt-16",attrs:{color:"blue",indeterminate:"",size:"50"}})],1)],1)],1)],1)},a=[],i=(n("d3b7"),n("25f0"),{name:"Home",data:function(){return{drawer:null,isDataLoaded:!0,width:100}},created:function(){this.auth()},computed:{isLoggedIn:function(){return this.$store.state.isLoggedIn},theme:function(){return this.$vuetify.theme.dark?"dark":"light"}},mounted:function(){var t=localStorage.getItem("dark_theme");t&&(this.$vuetify.theme.dark="true"==t)},methods:{auth:function(){var t=localStorage.getItem("token");if(console.log("storedToken:",t),t){var e={isLoggedIn:!0,token:t};this.$store.dispatch("setLoginUser",e),this.$router.push("/dashboard")}},logout:function(){var t={isLoggedIn:!1,token:null};localStorage.removeItem("token"),this.$store.dispatch("setLoginUser",t),this.$router.push("/")},toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("dark_theme",this.$vuetify.theme.dark.toString())}}}),s=i,u=(n("e62b"),n("2877")),c=n("6544"),l=n.n(c),d=n("7496"),m=n("40dc"),f=n("5bc1"),v=n("a523"),p=n("ce7e"),h=n("132d"),g=n("adda"),b=n("8860"),y=n("da13"),k=n("1800"),w=n("5d23"),_=n("f6c4"),L=n("f774"),I=n("490a"),C=n("0fd9"),S=n("b73d"),T=n("2a7f"),V=Object(u["a"])(s,o,a,!1,null,"80f3474a",null),x=V.exports;l()(V,{VApp:d["a"],VAppBar:m["a"],VAppBarNavIcon:f["a"],VContainer:v["a"],VDivider:p["a"],VIcon:h["a"],VImg:g["a"],VList:b["a"],VListItem:y["a"],VListItemAction:k["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VMain:_["a"],VNavigationDrawer:L["a"],VProgressCircular:I["a"],VRow:C["a"],VSwitch:S["a"],VToolbarTitle:T["a"]});n("3ca3"),n("ddb0");var E=n("8c4f"),O=n("ade3"),B=n("2f62"),$="SET_LOGIN_USER";r["a"].use(B["a"]);var j=new B["a"].Store({state:{isLoggedIn:!1,token:null},mutations:Object(O["a"])({},$,(function(t,e){t.isLoggedIn=e.isLoggedIn,t.token=e.token})),actions:{setLoginUser:function(t,e){var n=t.commit;n("SET_LOGIN_USER",e)}}});function F(t,e,n){j.state.token?n():n("/")}r["a"].use(E["a"]);var P=[{path:"/",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("about").then(n.bind(null,"7277"))},beforeEnter:F},{path:"/member-management",name:"MemberManagement",component:function(){return n.e("about").then(n.bind(null,"22a0"))},beforeEnter:F},{path:"/account",name:"Account",component:function(){return n.e("about").then(n.bind(null,"77be"))},beforeEnter:F},{path:"*",name:"PageNotFound",component:function(){return n.e("about").then(n.bind(null,"a5b5"))}}],A=new E["a"]({mode:"history",base:"/deployed-uis/",routes:P}),D=A,M=n("f309");r["a"].use(M["a"]);var N=new M["a"]({theme:{themes:{light:{primary:"#0052CC",secondary:"#182B4D",error:"#BF2600",background:"#F8F8FB",navBackground:"#FFFFFF"},dark:{primary:"#0052CC",secondary:"#182B4D",error:"#BF2600",background:"#16212B",navBackground:"#16212B"}}}});r["a"].config.productionTip=!1,new r["a"]({router:D,store:j,vuetify:N,render:function(t){return t(x)}}).$mount("#app")},b13a:function(t,e,n){t.exports=n.p+"img/lami-logo.879575ae.png"},e62b:function(t,e,n){"use strict";n("201e")}});
//# sourceMappingURL=app.cc261e2e.js.map