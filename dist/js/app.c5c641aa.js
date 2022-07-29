(function(){var t={9811:function(t,e,s){"use strict";var a=s(144),r=s(998),o=s(3059),i=function(){var t=this,e=t._self._c;return e(r.Z,[e("header-component"),e(o.Z,[e("router-view")],1)],1)},n=[],d=s(6843),c=s(5550),l=s(2936),u=s(6190),p=s(2150),v=s(4324),f=s(5808),m=s(4525),h=s(2017),w=s(7941),g=s(4611),y=s(6733),b=s(1713),x=s(7808),C=s(2082),S=function(){var t=this,e=t._self._c;return e("section",{staticClass:"header-component"},[e(d.Z,{staticClass:"mb-3",attrs:{app:"",color:"primary"}},[e(c.Z,{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],staticClass:"mobileNavicon",on:{click:t.onClickNavIcon}}),e(x.Z,{staticClass:"shrink mx-4 text-input-blue",attrs:{type:t.fieldType,"hide-details":"",placeholder:"Master",filled:"",rounded:"",dense:"",dark:"","single-line":""},model:{value:t.masterPassword,callback:function(e){t.masterPassword=e},expression:"masterPassword"}}),e(u.Z,{directives:[{name:"show",rawName:"v-show",value:this.toolbarButtonState().show,expression:"this.toolbarButtonState().show"}],on:{click:t.decrypt}},[t._v(t._s(this.toolbarButtonState().text))]),t.getIsDecrypted?e(l.Z,{staticClass:"my-auto",attrs:{"hide-details":"","single-line":"",filled:"",rounded:"",dense:"",dark:"",filter:t.passwordFilter,items:t.getPasswordList,label:"Search"},scopedSlots:t._u([{key:"item",fn:function({item:s}){return[e(m.Z,[e(h.km,[e(h.V9,[t._v(t._s(s.name))]),e(h.oZ,t._l(s,(function(s,a){return e(p.Z,{directives:[{name:"show",rawName:"v-show",value:t.isNotKey(["uid","name"],a),expression:"isNotKey(['uid','name'],keyName)"}],key:a,staticClass:"password-detail"},[e(b.Z,{attrs:{"no-gutters":""}},[e("p",{staticClass:"col-3 pt-2 ma-0 px-0 text-end text--secondary text-capitalize"},[t._v(t._s(a))]),e("p",{class:["col-7 sensitive  pt-2 ma-0 px-0 ml-1 mr-auto",{"blured-text":t.isNotKey(["email","url"],a)}]},[t._v(" "+t._s(s)+" ")]),e(v.Z,{staticClass:"ml-2",attrs:{medium:""},on:{click:function(e){return t.toClipboard(s)}}},[t._v(" mdi-content-copy ")])],1)],1)})),1)],1)],1)]}}],null,!1,1433210688)}):t._e()],1),e(y.Z,{attrs:{temporary:t.isMobile,permanent:t.isDesktop,"expand-on-hover":t.expandOnHover,"mini-variant":t.isMiniNav,app:""},on:{"update:miniVariant":function(e){t.isMiniNav=e},"update:mini-variant":function(e){t.isMiniNav=e}},scopedSlots:t._u([{key:"prepend",fn:function(){return["decrypted"===t.getDataStatus?e(C.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("div",t._g(t._b({staticClass:"d-flex align-center justify-center pa-2 mx-auto"},"div",a,!1),s),[e("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"green",d:"M12 1L3 5V11C3 16.5 6.8 21.7 12 23C17.2 21.7 21 16.5 21 11V5L12 1M16 15.8C16 16.4 15.4 17 14.7 17H9.2C8.6 17 8 16.4 8 15.7V12.2C8 11.6 8.6 11 9.2 11V8.5C9.2 7.1 10.6 6 12 6S14.8 7.1 14.8 8.5V9H13.5V8.5C13.5 7.7 12.8 7.2 12 7.2S10.5 7.7 10.5 8.5V11H14.8C15.4 11 16 11.6 16 12.3V15.8Z"}})])])]}}],null,!1,794571705)},[e("span",[t._v("Data has been Decrypted")])]):t._e(),"encrypted"===t.getDataStatus?e(C.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("div",t._g(t._b({staticClass:"d-flex align-center justify-center pa-2 mx-auto"},"div",a,!1),s),[e("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"red",d:"M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.1 14.8,9.5V11C15.4,11 16,11.6 16,12.3V15.8C16,16.4 15.4,17 14.7,17H9.2C8.6,17 8,16.4 8,15.7V12.2C8,11.6 8.6,11 9.2,11V9.5C9.2,8.1 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V11H13.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z"}})])])]}}],null,!1,1913386754)},[e("span",[t._v("Encrypted Data was found enter your master password")])]):t._e(),"no-data"===t.getDataStatus?e(C.Z,{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function({on:s,attrs:a}){return[e("div",t._g(t._b({staticClass:"d-flex align-center justify-center pa-2 mx-auto"},"div",a,!1),s),[e("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"orange",d:"M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 6.95C14.7 7.06 15.87 9.78 14.28 11.81C13.86 12.31 13.19 12.64 12.85 13.07C12.5 13.5 12.5 14 12.5 14.5H11C11 13.65 11 12.94 11.35 12.44C11.68 11.94 12.35 11.64 12.77 11.31C14 10.18 13.68 8.59 12 8.46C11.18 8.46 10.5 9.13 10.5 9.97H9C9 8.3 10.35 6.95 12 6.95M11 15.5H12.5V17H11V15.5Z"}})])])]}}],null,!1,3916785415)},[e("span",[t._v("No Data Was found")])]):t._e()]},proxy:!0},{key:"append",fn:function(){return[t.getIsDecrypted?e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMiniNav,expression:"!isMiniNav"}],staticClass:"ma-2 pa-2"},[e("qrcode-vue",{staticClass:"mx-auto text-center",attrs:{value:t.webHash,size:200,level:"H"}}),e("p",{staticClass:"px-3 overflow-hidden text-wrap"},[t._v(t._s(t.webHash))])],1):t._e(),e(m.Z,{staticClass:"mt-auto",attrs:{to:"/settings"}},[e(g.Z,[e(v.Z,[t._v("mdi-cog")])],1),e(h.V9,[t._v(" Settings ")])],1)]},proxy:!0}]),model:{value:t.isDrawerActive,callback:function(e){t.isDrawerActive=e},expression:"isDrawerActive"}},[e(f.Z,[e(w.Z,[e(m.Z,{attrs:{to:"/"}},[e(g.Z,[e(v.Z,[t._v("mdi-view-list")])],1),e(h.V9,[t._v(" Passwords ")])],1),e(m.Z,{attrs:{to:"/new-password"}},[e(g.Z,[e(v.Z,[t._v("mdi-plus")])],1),e(h.V9,[t._v(" New Password ")])],1),e(m.Z,{attrs:{to:"/sync-passwords"}},[e(g.Z,[e(v.Z,[t._v("mdi-autorenew")])],1),e(h.V9,[t._v(" Sync Passwords ")])],1)],1)],1)],1)],1)},D=[],_=(s(6699),s(629)),P=s(9574),k={name:"header-component",props:[],components:{QrcodeVue:P.Z},data:()=>({masterPassword:"",passwords:[],isMobile:!1,isDesktop:!1,isMiniNav:!0,isDrawerActive:!1,expandOnHover:!1}),mounted(){this.hasPreviousData(),this.getDeviceTypeIsMobile()?(this.isMobile=!0,this.isDesktop=!1):(this.isMobile=!1,this.isDesktop=!0),this.isMobile&&(this.expandOnHover=!1,this.isMiniNav=!1,this.isDrawerActive=!1),this.isDesktop&&(this.expandOnHover=!0,this.isMiniNav=!0)},methods:{...(0,_.OI)({setMasterPassword:"setMasterPassword",decryptStorage:"decrypt",hasPreviousData:"getPreviousDataExistence"}),...(0,_.Se)({getDeviceTypeIsMobile:"getDeviceTypeIsMobile"}),isNotKey(t,e){if(Array.isArray(t)){let s=t.map((t=>t===e));return!s.includes(!0)}return t!==e},toClipboard(t){navigator.clipboard.writeText(t)},onClickNavIcon(){console.log("nav.ico"),this.isDrawerActive=!0},decrypt(){this.setMasterPassword(this.masterPassword),this.decryptStorage()},passwordFilter(t,e){const s=Object.keys(t).map((t=>t.toLowerCase())),a=Object.values(t).map((t=>t.toString().toLowerCase())),r=e.toLowerCase();return s.findIndex((t=>t.indexOf(r)>-1))>-1||a.findIndex((t=>t.indexOf(r)>-1))>-1},toolbarButtonState(){let t={};return"no-data"===this.getDataStatus?t={show:!0,text:"Set Master Password"}:"encrypted"===this.getDataStatus?t={show:!0,text:"Enter Master Password"}:"decrypted"===this.getDataStatus&&(t={show:!1,text:"Set Master Password"}),t}},computed:{...(0,_.Se)({getDataStatus:"getDataStatus",getIsDecrypted:"getIsDecrypted",getPasswordList:"getPasswordList"}),webHash(){if(this.getIsDecrypted){let t=localStorage.getItem("Passlist");return`${location.protocol}//${location.host}/#/?data=${t}`}return""},fieldType(){return this.getIsDecrypted?"password":"text"}}},Z=k,N=s(1001),M=(0,N.Z)(Z,S,D,!1,null,"5bb2e5d6",null),E=M.exports,L={name:"App",components:{HeaderComponent:E},beforeMount(){void 0!==this.$route.query.data&&""!==this.$route.query.data&&(console.log(this.$route.query.data),localStorage.setItem("Passlist",this.$route.query.data),location.replace(`${location.protocol}//${location.host}/#/`))},data:()=>({}),methods:{},computed:{}},O=L,I=(0,N.Z)(O,i,n,!1,null,"6880f3ed",null),A=I.exports,V=s(8345),H=function(){var t=this,e=t._self._c;return e("list-passwords")},T=[],j=s(9582),B=s(4886),F=s(266),K=function(){var t=this,e=t._self._c;return e("section",{staticClass:"src-components-list-passwords"},[e(p.Z,[e(b.Z,[e(F.Z,{attrs:{cols:"12 no-gutters"}},["decrypted"===t.getDataStatus?e("div",[t._l(t.getPasswordList,(function(s){return e("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasNoPasswords,expression:"!hasNoPasswords"}],key:s.uid},[e(j.Z,{staticClass:"mx-1 my-3 pa-2",attrs:{disabled:!t.getIsDecrypted,elevation:"6"}},t._l(s,(function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.isNotKey("uid",a),expression:"isNotKey('uid',keyName)"}],key:a,staticClass:"password-detail pa-1"},[e("div",{staticClass:"d-flex align-content-center"},[e("p",{staticClass:"col-3 pt-2 ma-0 px-0 text-end text--secondary text-capitalize"},[t._v(t._s(a))]),e("p",{class:["col-7  pt-2 ma-0 sensitive ml-1 mr-auto",{"blured-text":t.isNotKey(["email","name"],a)}],on:{click:function(e){return t.toClipboard(s)}}},[t._v(" "+t._s(s))]),e(v.Z,{staticClass:"ml-2",attrs:{medium:""},on:{click:function(e){return t.toClipboard(s)}}},[t._v(" mdi-content-copy ")])],1)])})),0)],1)})),e(j.Z,{directives:[{name:"show",rawName:"v-show",value:t.hasNoPasswords,expression:"hasNoPasswords"}],attrs:{color:"amber  lighten-3 "}},[e(B.EB,{staticClass:"text--white"},[t._v("No Passwords")])],1)],2):"encrypted"===t.getDataStatus?e("div",[e(j.Z,{attrs:{dark:"",color:"red"}},[e(B.EB,{staticClass:"text--white"},[t._v("You Need to Decrypt First")]),e(B.Qq,[t._v("You can reset your storage from the "),e(u.Z,{attrs:{dark:"",outlined:"",color:"gray",small:"",text:"",to:"/settings"}},[t._v("settings page")])],1)],1)],1):"no-data"===t.getDataStatus?e("div",[e(j.Z,{attrs:{dark:"",color:"blue darken-4"}},[e(B.EB,{staticClass:"text--white"},[t._v("No data found")]),e(B.Qq,[t._v("You can start by setting a master Password Above")])],1)],1):t._e()])],1)],1)],1)},$=[],q={name:"src-components-list-passwords",props:[],data(){return{isDecrypted:!1}},methods:{isNotKey(t,e){if(Array.isArray(t)){let s=t.map((t=>t===e));return!s.includes(!0)}return t!==e},toClipboard(t){navigator.clipboard.writeText(t)}},computed:{hasNoPasswords(){return 0===this.getPasswordList.length},...(0,_.Se)({getPasswordList:"getPasswordList",getIsDecrypted:"getIsDecrypted",getPreviousDataExistence:"getPreviousDataExistence",getDataStatus:"getDataStatus"})},watch:{}},Y=q,z=(0,N.Z)(Y,K,$,!1,null,"0640cd07",null),J=z.exports,Q={name:"HomeView",components:{ListPasswords:J}},U=Q,W=(0,N.Z)(U,H,T,!1,null,null,null),G=W.exports;a["default"].use(V.Z);const R=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:()=>s.e(443).then(s.bind(s,1272))},{path:"/edit-password",name:"edit-password",component:()=>s.e(922).then(s.bind(s,7390))},{path:"/new-password",name:"new-password",component:()=>s.e(536).then(s.bind(s,8976))},{path:"/sync-passwords",name:"sync-passwords",component:()=>s.e(31).then(s.bind(s,5787))},{path:"/settings",name:"settings",component:()=>s.e(571).then(s.bind(s,7697))}],X=new V.Z({routes:R});var tt=X,et=s(1354);a["default"].use(_.ZP);const st=new _.ZP.Store({state(){return{dataStatus:"",isMobile:!1,isDecrypted:!1,masterPassword:"",PasswordList:[],EmailList:[],previousDataExist:!1}},getters:{getDataStatus(t){return!1===t.isDecrypted&&!0===t.previousDataExist&&(t.dataStatus="encrypted"),!0===t.isDecrypted&&!0===t.previousDataExist&&(t.dataStatus="decrypted"),!1===t.isDecrypted&&!1===t.previousDataExist&&(t.dataStatus="no-data"),t.dataStatus},getPasswordList(t){return t.PasswordList},getEmailList(t){return t.EmailList},getIsDecrypted(t){return t.isDecrypted},getDeviceTypeIsMobile(t){const e=navigator.userAgent;return(/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e)||/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e))&&(t.isMobile=!0),t.isMobile}},mutations:{getPreviousDataExistence(t){return null!==localStorage.getItem("Passlist")?(console.log("data Found"),t.previousDataExist=!0,t.isDecrypted=!1,t.previousDataExist):(console.log("no data Found"),t.previousDataExist=!1,t.isDecrypted=!1,t.previousDataExist)},savePassword(t,e){if(t.isDecrypted){let s=t.PasswordList;s.push(e)}},saveEmail(t,e){if(t.isDecrypted){let s=t.EmailList;s.push(e)}},savePasswordsList(t){if(t.isDecrypted){var e=et.AES.encrypt(JSON.stringify(t.PasswordList),t.masterPassword).toString();localStorage.setItem("Passlist",e),console.log("Encrypted Data Saved")}else window.alert("You MUST set a master password")},setMasterPassword(t,e){e=e.toString(),null!==e||""!==e?(t.masterPassword=e,t.dataStatus="encrypted"):window.alert("Your master password causes an error")},decrypt(t){let e;if(null==localStorage.getItem("Passlist")){const s=[],a=JSON.stringify(s);e=et.AES.encrypt(a,t.masterPassword).toString(),console.log("starting Fresh"),localStorage.setItem("Passlist",e)}e=localStorage.getItem("Passlist");try{var s=et.AES.decrypt(e,t.masterPassword),a=s.toString(et.enc.Utf8);let r=JSON.parse(a);t.PasswordList=r,t.isDecrypted=!0,t.previousDataExist=!0,t.dataStatus="decrypted"}catch(r){console.error(r.message),window.alert("incorrect Master Pass re enter"),window.location.reload()}}}});var at=st,rt=s(707),ot=s.n(rt);s(8556);a["default"].use(ot());const it={};var nt=new(ot())(it);a["default"].config.productionTip=!1,new a["default"]({store:at,router:tt,vuetify:nt,render:t=>t(A)}).$mount("#app")},2480:function(){}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,r,o){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],o=t[l][2];for(var n=!0,d=0;d<a.length;d++)(!1&o||i>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[d])}))?a.splice(d--,1):(n=!1,o<i&&(i=o));if(n){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,r,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+{31:"sync",443:"about",536:"new",571:"settings",922:"edit"}[t]+"."+{31:"840fbd60",443:"5d72b771",536:"798e7886",571:"13e5f62c",922:"0e48c124"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+{31:"sync",536:"new",571:"settings",922:"edit"}[t]+"."+{31:"4f034e44",536:"124b309f",571:"4f034e44",922:"4f034e44"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="web-pass:";s.l=function(a,r,o,i){if(t[a])t[a].push(r);else{var n,d;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+o){n=u;break}}n||(d=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",e+o),n.src=a),t[a]=[r];var p=function(e,s){n.onerror=n.onload=null,clearTimeout(v);var r=t[a];if(delete t[a],n.parentNode&&n.parentNode.removeChild(n),r&&r.forEach((function(t){return t(s)})),e)return e(s)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),d&&document.head.appendChild(n)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/web-pass/"}(),function(){var t=function(t,e,s,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)s();else{var i=o&&("load"===o.type?"missing":o.type),n=o&&o.target&&o.target.href||e,d=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=n,r.parentNode.removeChild(r),a(d)}};return r.onerror=r.onload=o,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var r=s[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===t||o===e))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===t||o===e)return r}},a=function(a){return new Promise((function(r,o){var i=s.miniCssF(a),n=s.p+i;if(e(i,n))return r();t(a,n,r,o)}))},r={143:0};s.f.miniCss=function(t,e){var s={31:1,536:1,571:1,922:1};r[t]?e.push(r[t]):0!==r[t]&&s[t]&&e.push(r[t]=a(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,a){var r=s.o(t,e)?t[e]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(s,a){r=t[e]=[s,a]}));a.push(r[2]=o);var i=s.p+s.u(e),n=new Error,d=function(a){if(s.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;n.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",n.name="ChunkLoadError",n.type=o,n.request=i,r[1](n)}};s.l(i,d,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,o,i=a[0],n=a[1],d=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in n)s.o(n,r)&&(s.m[r]=n[r]);if(d)var l=d(s)}for(e&&e(a);c<i.length;c++)o=i[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(l)},a=self["webpackChunkweb_pass"]=self["webpackChunkweb_pass"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(9811)}));a=s.O(a)})();
//# sourceMappingURL=app.c5c641aa.js.map