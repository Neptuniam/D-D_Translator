(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],h=0,d=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/D-D_Translator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"App"},[t._m(0),r("div",{staticClass:"Forwards row around-xs middle-xs fullWidth"},[r("div",{staticClass:"col-xs-12 col-md-5 limitReadable"},[r("b",[t._v("English")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.english,expression:"english"}],staticClass:"uk-textarea fullWidth",attrs:{rows:"4",placeholder:"Enter some text here"},domProps:{value:t.english},on:{input:function(e){e.target.composing||(t.english=e.target.value)}}})]),r("div",{staticClass:"col-xs-1 center-xs"},[r("button",{staticClass:"uk-button-primary",attrs:{type:"button","uk-icon":"icon: chevron-right; ratio: 2"},on:{click:function(e){return t.translate("af")}}})]),r("div",{staticClass:"col-xs-12 col-md-5 limitReadable"},[r("b",[t._v("BOAA")]),t.translated?r("span",{directives:[{name:"clipboard",rawName:"v-clipboard",value:function(){return t.translated},expression:"() => translated"}],staticClass:"copyToClip clickable",attrs:{"uk-icon":"icon: move; ratio:0.75;","uk-tooltip":"Copy to Clipboard"}}):t._e(),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.translated,expression:"translated"}],staticClass:"uk-textarea fullWidth",attrs:{rows:"4",placeholder:"Bou translated text will appear here"},domProps:{value:t.translated},on:{input:function(e){e.target.composing||(t.translated=e.target.value)}}})])]),t.history&&t.history.length?r("div",{staticClass:"row fullWidth center-xs "},[r("div",{staticClass:"col-xs-6 start-xs history"},[r("b",[t._v("Recent Translations")]),r("ul",t._l(t.history,(function(e){return r("li",{key:e.english+e.timestamp.getHours()},[t._v(" ("),r("b",[t._v(t._s(e.timestamp.getHours())+": "+t._s(e.timestamp.getMinutes()))]),t._v(") "+t._s(e.english)+" - "+t._s(e.bou)+" ")])})),0)])]):t._e()])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"center-xs Intro"},[r("h1",[t._v("English to BOAA Translator")]),r("h3",[t._v("Built By: Liam Jones")])])}],i=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("c975"),r("a15b"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("3ca3"),r("5319"),r("1276"),r("ddb0"),r("96cf"),r("1da1")),o={data:function(){return{url:"https://translation.googleapis.com/language/translate/v2?key=AIzaSyBfBIucwY9Ho4csB3doxTabceqor52-B0c",english:null,translated:null,history:[],vowels:"aeiouyw",replaceChars:{w:"z",g:"l",v:"f",i:"e",n:"y",u:"a"}}},watch:{translated:function(){this.translated&&this.history.push({english:this.english,timestamp:new Date,bou:this.translated})}},methods:{isVowel:function(t,e){return e.indexOf(t.toLowerCase())>-1},reverseStr:function(t){return t.split("").reverse().join("")},toAfrican:function(t){return this.axios.get("".concat(this.url,"&q=").concat(t,"&target=afr"))},toEnglish:function(){return this.axios.get("".concat(this.url,"&q=").concat(this.translated,"&target=en"))},processWord:function(t,e){if(t.length%2==0)return t;for(var r=this.reverseStr(t),n=0;n<r.length;n++)if(this.isVowel(r[n],e)){if(n<r.length-1&&r[n]==r[n+1]){var a=e.indexOf(r[n]);e=e.substring(0,a)+e.substring(a+1,e.length);continue}var s=r.length-n;return t.substring(0,s)+r[n]+t.substring(s,t.length)}return t},forwards:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,n,a,s,i,o,l,c,u,h,d,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.toAfrican(e);case 2:for(a in r=t.sent,n=r.data.data.translations[0].translatedText,this.replaceChars)n=n.replace(new RegExp(a,"g"),this.replaceChars[a]);for(s=[],i=!0,o=!1,l=void 0,t.prev=9,c=n.split(" ")[Symbol.iterator]();!(i=(u=c.next()).done);i=!0)h=u.value,s.push(this.processWord(h,this.vowels));t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](9),o=!0,l=t.t0;case 17:t.prev=17,t.prev=18,i||null==c.return||c.return();case 20:if(t.prev=20,!o){t.next=23;break}throw l;case 23:return t.finish(20);case 24:return t.finish(17);case 25:for(this.translated="",d=0,p=s;d<p.length;d++)f=p[d],this.translated+=f.toUpperCase()+" ";case 27:case"end":return t.stop()}}),t,this,[[9,13,17,25],[18,,20,24]])})));function e(e){return t.apply(this,arguments)}return e}(),translate:function(t){"af"==t&&this.english?this.forwards(this.english):this.toEnglish()}}},l=o,c=(r("034f"),r("2877")),u=Object(c["a"])(l,a,s,!1,null,null,null),h=u.exports,d=r("bc3a"),p=r.n(d),f=r("a7fe"),v=r.n(f),g=r("4ae6"),b=r.n(g);n["a"].use(v.a,p.a),n["a"].use(b.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.fbed7417.js.map