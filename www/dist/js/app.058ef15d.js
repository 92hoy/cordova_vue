(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],f=0,m=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},o={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1),a("v-bottom-navigation",{attrs:{"input-value":t.active,color:"indigo"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.footer_btn,(function(e,r){return a("v-btn",{key:r,staticClass:"mx-4",attrs:{icon:"",to:e[1]}},[a("span",[t._v(t._s(r))]),a("v-icon",{attrs:{size:"30px"}},[t._v(" "+t._s(e[0])+" ")])],1)})),1)],1)},n=[],s={data:function(){return{footer_btn:{"홈":["mdi-home","/main"],"차트의 창":["mdi-chart-line","/test"],"모의투자":["mdi-gamepad","/api"],"더보기":["mdi-android","/main"]}}},name:"LoginKakao",shareStoryWeb:function(){this.$kakao.Story.share({url:"https://github.com/eggplantiny/vue-kakao-sdk",text:"Test story share with vue-kakao-sdk"})},loginWithKakao:function(){this.$kakao.Auth.login({success:function(t){alert(JSON.stringify(t))},fail:function(t){alert(JSON.stringify(t))}})}},i=s,l=a("2877"),c=a("6544"),u=a.n(c),f=a("7496"),m=a("b81c"),d=a("8336"),p=a("132d"),v=a("f6c4"),h=Object(l["a"])(i,o,n,!1,null,null,null),g=h.exports;u()(h,{VApp:f["a"],VBottomNavigation:m["a"],VBtn:d["a"],VIcon:p["a"],VMain:v["a"]});var b=a("f309");r["a"].use(b["a"]);var y=new b["a"]({}),x=a("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col")],1),r("v-card",{staticClass:"mx-auto text-center",attrs:{color:"green",dark:"","max-width":"600"}},[r("v-card-text",[r("v-sheet",{attrs:{color:"rgba(0, 0, 0, .12)"}},[r("v-sparkline",{attrs:{value:t.value,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}}])})],1)],1),r("v-card-text",[r("div",{staticClass:"display-1 font-weight-thin"},[t._v(" Sales Last 24h ")])]),r("v-divider"),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{block:"",text:""}},[t._v(" Go to Report ")])],1)],1)],1)},w=[],_={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}},methods:{testing:function(){alert(333)}}},j=_,C=a("b0af"),V=a("99d9"),O=a("62ad"),q=a("a523"),S=a("ce7e"),$=a("adda"),T=a("0fd9"),A=a("8dd9"),E=a("7f2e"),L=Object(l["a"])(j,k,w,!1,null,null,null),P=L.exports;u()(L,{VBtn:d["a"],VCard:C["a"],VCardActions:V["a"],VCardText:V["b"],VCol:O["a"],VContainer:q["a"],VDivider:S["a"],VImg:$["a"],VRow:T["a"],VSheet:A["a"],VSparkline:E["a"]});var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" This is Test.vue ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},I=[],K={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},M=K,W=Object(l["a"])(M,F,I,!1,null,null,null),N=W.exports;u()(W,{VCol:O["a"],VContainer:q["a"],VImg:$["a"],VRow:T["a"]});var R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"100"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" This is API.vue ")])]),r("v-form",{ref:"form",attrs:{id:"api_app"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{attrs:{id:"apgb",color:"purple darken-2",label:"apgb",required:""},model:{value:t.form.apgb,callback:function(e){t.$set(t.form,"apgb",e)},expression:"form.apgb"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{attrs:{id:"userid",color:"blue darken-2",label:"userid",required:""},model:{value:t.form.userid,callback:function(e){t.$set(t.form,"userid",e)},expression:"form.userid"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{attrs:{id:"gamedt",color:"blue darken-2",label:"gamedt",required:""},model:{value:t.form.gamedt,callback:function(e){t.$set(t.form,"gamedt",e)},expression:"form.gamedt"}})],1),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-text-field",{attrs:{id:"gameseq",color:"blue darken-2",label:"gameseq",required:""},model:{value:t.form.gameseq,callback:function(e){t.$set(t.form,"gameseq",e)},expression:"form.gameseq"}})],1)],1)],1),r("button",{staticClass:"ma-2 v-btn v-btn--fab v-btn--outlined v-btn--round theme--light v-size--large indigo--text",attrs:{type:"button"},on:{click:t.submitbtn}},[r("span",{staticClass:"v-btn__content"},[r("i",{staticClass:"v-icon notranslate mdi mdi-pencil theme--light",attrs:{"aria-hidden":"true"}})])]),r("v-container",{attrs:{fluid:""}},[r("v-textarea",{attrs:{id:"result",name:"input-7-1",filled:"",label:"Label","auto-grow":""},model:{value:t.form.result,callback:function(e){t.$set(t.form,"result",e)},expression:"form.result"}})],1)],1)],1)],1)},D=[],J=a("1da1"),z=(a("96cf"),a("dca8"),a("bc3a")),B=a.n(z),H="http://211.240.103.78:8081";function Q(t){var e=B.a.post(H,t,{headers:{"Content-Type":"multipart/form-data"}}),a=e.then((function(t){return t.data}));return console.log("=",a),a}var G={name:"HelloWorld",data:function(){var t=Object.freeze({apgb:"gameresult",userid:"1564049716",gamedt:"20210310",gameseq:"1",result:""});return{form:Object.assign({},t),defaultForm:t}},computed:{formIsValid:function(){return this.form.apgb&&this.form.userid&&this.form.gamedt&&this.form.gameseq&&this.form.result}},methods:{submitbtn:function(){var t=this;return Object(J["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new FormData,a.append("apgb",t.form.apgb),a.append("userid",t.form.userid),a.append("gamedt",t.form.gamedt),a.append("gameseq",t.form.gameseq),e.next=7,Q(a);case 7:r=e.sent,r=JSON.stringify(r),t.form.result=r;case 10:case"end":return e.stop()}}),e)})))()}}},U=G,X=a("4bd4"),Y=a("8654"),Z=a("a844"),tt=Object(l["a"])(U,R,D,!1,null,null,null),et=tt.exports;u()(tt,{VCol:O["a"],VContainer:q["a"],VForm:X["a"],VImg:$["a"],VRow:T["a"],VTextField:Y["a"],VTextarea:Z["a"]});var at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{staticClass:"kakao_btn",attrs:{src:a("cf05")},on:{click:t.loginWithKakao}})},rt=[],ot={name:"LoginKakao",methods:{loginWithKakao:function(){var t={redirectUri:"http://localhost:8080/account/kakaologin"};window.Kakao.Auth.authorize(t)}}},nt=ot,st=Object(l["a"])(nt,at,rt,!1,null,null,null),it=st.exports;r["a"].use(x["a"]);var lt=new x["a"]({mode:"history",routes:[{path:"/test",name:"test",component:N},{path:"/main",name:"main",component:P},{path:"/api",name:"api",component:et},{path:"/accout/kakaologin",name:"kakao_login",component:it}]}),ct=a("8861"),ut=a.n(ct);r["a"].config.productionTip=!1;var ft="552a59f80241b02bd345ca0ecd8ced93";r["a"].use(ut.a,{apiKey:ft}),new r["a"]({vuetify:y,router:lt,render:function(t){return t(g)}}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.058ef15d.js.map