const e=()=>{if(!window["tram-space"])throw new Error("\n\t\t\tTram-One: app has not started yet, but hook was called. Is it being invoked outside a component function?\n\t\t\thttps://github.com/Tram-One/tram-one/issues/178\n\t\t");return window},t=t=>({setup:a=>{const n=e();return n["tram-space"][a]=t(),n["tram-space"][a]},get:t=>e()["tram-space"][t],set:(t,a)=>{e()["tram-space"][t]=a}}),{setup:a,get:n}=t((()=>({branch:[],branchIndices:{"":0}}))),o=e=>n(e).branch.join("/"),i=e=>{n(e).branchIndices[o(e)]+=1},r=e=>{const t=n(e).branchIndices[o(e)];return`${o(e)}[${t}]`};var s=new WeakMap,l=Symbol("iteration key");function c(e,t,a){var n=t.get(a);n&&n.forEach(e.add,e)}function h(e){e.cleaners&&e.cleaners.forEach(d,e),e.cleaners=[]}function d(e){e.delete(this)}var u=[],b=!1;function g(e,t,a,n){if(e.unobserved)return Reflect.apply(t,a,n);if(-1===u.indexOf(e)){h(e);try{return u.push(e),Reflect.apply(t,a,n)}finally{u.pop()}}}function p(e){var t=u[u.length-1];t&&(m(t,e),function(e,t){var a=t.target,n=t.key;"iterate"===t.type&&(n=l);var o=s.get(a),i=o.get(n);i||(i=new Set,o.set(n,i)),i.has(e)||(i.add(e),e.cleaners.push(i))}(t,e))}function f(e){(function(e){var t=e.target,a=e.key,n=e.type,o=s.get(t),i=new Set;if("clear"===n?o.forEach((function(e,t){c(i,o,t)})):c(i,o,a),"add"===n||"delete"===n||"clear"===n){var r=Array.isArray(t)?"length":l;c(i,o,r)}return i})(e).forEach(y,e)}function y(e){m(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function m(e,t){if(e.debugger&&!b)try{b=!0,e.debugger(t)}finally{b=!1}}function A(){return u.length>0}var S=Symbol("is reaction");function E(e,t){void 0===t&&(t={});var a=e[S]?e:function t(){return g(t,e,this,arguments)};return a.scheduler=t.scheduler,a.debugger=t.debugger,a[S]=!0,t.lazy||a(),a}var v=new WeakMap,k=new WeakMap,T=Object.prototype.hasOwnProperty;function w(e){var t=k.get(e);return A()&&"object"==typeof e&&null!==e?t||F(e):t||e}function I(e,t){var a=e.next;return e.next=function(){var n=a.call(e),o=n.done,i=n.value;return o||(t?i[1]=w(i[1]):i=w(i)),{done:o,value:i}},e}var P={has:function(e){var t=v.get(this),a=Reflect.getPrototypeOf(this);return p({target:t,key:e,type:"has"}),a.has.apply(t,arguments)},get:function(e){var t=v.get(this),a=Reflect.getPrototypeOf(this);return p({target:t,key:e,type:"get"}),w(a.get.apply(t,arguments))},add:function(e){var t=v.get(this),a=Reflect.getPrototypeOf(this),n=a.has.call(t,e),o=a.add.apply(t,arguments);return n||f({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var a=v.get(this),n=Reflect.getPrototypeOf(this),o=n.has.call(a,e),i=n.get.call(a,e),r=n.set.apply(a,arguments);return o?t!==i&&f({target:a,key:e,value:t,oldValue:i,type:"set"}):f({target:a,key:e,value:t,type:"add"}),r},delete:function(e){var t=v.get(this),a=Reflect.getPrototypeOf(this),n=a.has.call(t,e),o=a.get?a.get.call(t,e):void 0,i=a.delete.apply(t,arguments);return n&&f({target:t,key:e,oldValue:o,type:"delete"}),i},clear:function(){var e=v.get(this),t=Reflect.getPrototypeOf(this),a=0!==e.size,n=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return a&&f({target:e,oldTarget:n,type:"clear"}),o},forEach:function(e){for(var t=[],a=arguments.length-1;a-- >0;)t[a]=arguments[a+1];var n=v.get(this),o=Reflect.getPrototypeOf(this);p({target:n,type:"iterate"});var i,r=function(t){for(var a=[],n=arguments.length-1;n-- >0;)a[n]=arguments[n+1];return e.apply(void 0,[w(t)].concat(a))};return(i=o.forEach).call.apply(i,[n,r].concat(t))},keys:function(){var e=v.get(this),t=Reflect.getPrototypeOf(this);return p({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=v.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var a=t.values.apply(e,arguments);return I(a,!1)},entries:function(){var e=v.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var a=t.entries.apply(e,arguments);return I(a,!0)},get size(){var e=v.get(this),t=Reflect.getPrototypeOf(this);return p({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};P[Symbol.iterator]=function(){var e=v.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var a=t[Symbol.iterator].apply(e,arguments);return I(a,e instanceof Map)};var R={get:function(e,t,a){return e=T.call(P,t)?P:e,Reflect.get(e,t,a)}},C="object"==typeof window?window:Function("return this")(),L=new Map([[Map,R],[Set,R],[WeakMap,R],[WeakSet,R],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);var N=Object.prototype.hasOwnProperty,D=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e})));var O={get:function(e,t,a){var n=Reflect.get(e,t,a);if("symbol"==typeof t&&D.has(t))return n;p({target:e,key:t,receiver:a,type:"get"});var o=k.get(n);if(A()&&"object"==typeof n&&null!==n){if(o)return o;var i=Reflect.getOwnPropertyDescriptor(e,t);if(!i||!1!==i.writable||!1!==i.configurable)return F(n)}return o||n},has:function(e,t){var a=Reflect.has(e,t);return p({target:e,key:t,type:"has"}),a},ownKeys:function(e){return p({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,a,n){"object"==typeof a&&null!==a&&(a=v.get(a)||a);var o=N.call(e,t),i=e[t],r=Reflect.set(e,t,a,n);return e!==v.get(n)||(o?a!==i&&f({target:e,key:t,value:a,oldValue:i,receiver:n,type:"set"}):f({target:e,key:t,value:a,receiver:n,type:"add"})),r},deleteProperty:function(e,t){var a=N.call(e,t),n=e[t],o=Reflect.deleteProperty(e,t);return a&&f({target:e,key:t,oldValue:n,type:"delete"}),o}};function F(e){return void 0===e&&(e={}),v.has(e)||"function"==typeof(t=e.constructor)&&t.name in C&&C[t.name]===t&&!L.has(t)?e:k.get(e)||function(e){var t=function(e){return L.get(e.constructor)}(e)||O,a=new Proxy(e,t);return k.set(e,a),v.set(a,e),function(e){s.set(e,new Map)}(e),a}(e);var t}var M=E;const U=(e,t)=>t,W=(e,t)=>{const a=(e=>t=>"tagName"in t&&t.tagName===e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)(t),n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,a),o=[n.currentNode];for(;n.nextNode();)o.push(n.currentNode);return o},x={index:-1,tagName:"",scrollLeft:0,scrollTop:0,selectionStart:null,selectionEnd:null,selectionDirection:void 0};var G=e=>{let t;const a=M((()=>{let a=t,n=x;if(a){n=x;if(a.contains(document.activeElement)){const e=document.activeElement,t=W(a,e.tagName);n.index=t.findIndex((t=>t===e)),n.tagName=e.tagName,n.scrollLeft=e.scrollLeft,n.scrollTop=e.scrollTop,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,n.selectionDirection=e.selectionDirection||void 0}const e=document.createElement("div");a.replaceWith(e),e["tram-tag-reaction"]=a["tram-tag-reaction"],e["tram-tag-new-effects"]=a["tram-tag-new-effects"],e["tram-tag-cleanup-effects"]=a["tram-tag-cleanup-effects"],a=e}if(t=e(),a){let e;if(n.index>=0){const a=W(t,n.tagName),i=a.map(U).sort((o=n.index,(e,t)=>Math.abs(e-o)-Math.abs(t-o)))[0];e=a[i];try{void 0!==e.setSelectionRange&&e.setSelectionRange(n.selectionStart,n.selectionEnd,n.selectionDirection)}catch(e){}e.scrollLeft=n.scrollLeft,e.scrollTop=n.scrollTop}t["tram-tag"]=!0,t["tram-tag-reaction"]=a["tram-tag-reaction"],t["tram-tag-new-effects"]=a["tram-tag-new-effects"],t["tram-tag-cleanup-effects"]=a["tram-tag-cleanup-effects"],a.replaceWith(t),e&&e.focus&&e.focus()}var o}));if(void 0===t)throw new Error("\n\t\t\tTram-One: tagResult was not defined after building the tag.\n\t\t\thttps://github.com/Tram-One/tram-one/issues/177\n\t\t");return t["tram-tag-reaction"]=a,t};const{setup:Y,get:_,set:B}=t((()=>({}))),q=B,{setup:H,get:$,set:j}=t((()=>[])),K=e=>{const t=$(e);t.splice(0,t.length)},Q=j;var V=e=>{const t={..._("tram-effect-queue")},a=[...$("tram-key-queue")];(e=>{const t=_(e);Object.keys(t).forEach((e=>delete t[e]))})("tram-effect-queue"),K("tram-key-queue"),K("tram-global-key-queue");const n=e(),o=_("tram-effect-store"),i=_("tram-effect-queue"),r=n["tram-tag-new-effects"]||[],s=Object.keys(i).filter((e=>!(e in o))).map((e=>i[e])),l=r.concat(s);n["tram-tag-new-effects"]=l;const c=n["tram-tag-store-keys"]||[],h=$("tram-key-queue"),d=c.concat(h);return n["tram-tag-store-keys"]=d,q("tram-effect-queue",t),Q("tram-key-queue",a),n},X={},z={};const J=e=>"number"==typeof e||"boolean"==typeof e||"function"==typeof e||e instanceof Date||e instanceof RegExp?e.toString():e,Z=e=>!("string"==typeof e&&/^[\n\r\s]+$/.test(e)),ee=(e,t)=>{Array.isArray(t)&&t.map(J).filter(Z).forEach((t=>{if(Array.isArray(t))ee(e,t);else{if("string"==typeof t){if(e.lastChild&&"#text"===e.lastChild.nodeName)return void(e.lastChild.nodeValue+=t);t=document.createTextNode(t)}t&&t.nodeType&&e.appendChild(t)}}))};z=ee;const te=e=>!/^xmlns($|:)/i.test(e),ae=e=>"classname"===e.key.toLowerCase()?{key:"class",value:e.value}:e,ne=e=>"htmlFor"===e.key?{key:"for",value:e.value}:e,oe=e=>(t,a,n)=>{if("!--"===t)return document.createComment(a.comment);const o=e?document.createElementNS(e,t):document.createElement(t);return Object.keys(a).filter(te).filter((e=>t=>Object.prototype.hasOwnProperty.call(e,t))(a)).map((e=>t=>({key:t,value:e[t]}))(a)).map(ae).map(ne).filter((e=>t=>"on"!==t.key.slice(0,2)||((e,t,a)=>{e[t]=a,e.events=e.events?e.events.concat(t):[t]})(e,t.key,t.value))(o)).filter((e=>t=>e.setAttributeNS(null,t.key,t.value))(o)),z(o,n),o};(X=oe).html=oe(),X.svg=oe("http://www.w3.org/2000/svg");var ie;ie=function(e,t,a){const n=function(e,n,o){const i=a[e];return i?i(n,o):t(e,n,o)},o=e(n);return o.h=n,o};var re,se={};se=function(e){return function(t,a,n){for(var o in a)o in le&&(a[le[o]]=a[o],delete a[o]);return e(t,a,n)}};var le={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};re=function(e,t){t||(t={comments:!0});const a=t.concat||function(e,t){return String(e)+String(t)},n=e=>{switch(typeof e){case"function":case"string":case"object":case"undefined":return e;default:return a("",e)}};return!1!==t.attrToProp&&(e=se(e)),function(o){for(var i=1,r="",s=arguments.length,l=[],c=0;c<o.length;c++)if(c<s-1){var h=arguments[c+1],d=v(o[c]),u=i;switch(u){case 13:r+=h,h="";case 10:case 9:case 7:u=8;break;case 4:u=5}d.push([0,u,h]),l.push.apply(l,d)}else l.push.apply(l,v(o[c]));var b=[null,{},[]],g=[[b,-1]];for(c=0;c<l.length;c++){var p=g[g.length-1][0],f=(d=l[c])[0];if(2===f&&/^\//.test(d[1])){var y=g[g.length-1][1];g.length>1&&(g.pop(),g[g.length-1][0][2][y]=e(p[0],p[1],p[2].length?p[2]:void 0))}else if(2===f){var m=[d[1],{},[]];p[2].push(m),g.push([m,p[2].length-1])}else if(5===f||0===f&&5===d[1]){for(var A,S="";c<l.length;c++)if(5===l[c][0])S=a(S,l[c][1]);else{if(0!==l[c][0]||5!==l[c][1])break;if("object"!=typeof l[c][2]||S)S=a(S,l[c][2]);else for(A in l[c][2])l[c][2].hasOwnProperty(A)&&!p[1][A]&&(p[1][A]=l[c][2][A])}11===l[c][0]&&c++;for(var E=c;c<l.length;c++)if(8===l[c][0]||5===l[c][0])p[1][S]?""===l[c][1]||(p[1][S]=a(p[1][S],l[c][1])):p[1][S]=n(l[c][1]);else{if(0!==l[c][0]||8!==l[c][1]&&5!==l[c][1]){!S.length||p[1][S]||c!==E||3!==l[c][0]&&12!==l[c][0]||(p[1][S]=S.toLowerCase()),3===l[c][0]&&c--;break}p[1][S]?""===l[c][2]||(p[1][S]=a(p[1][S],l[c][2])):p[1][S]=n(l[c][2])}}else if(14===f){y=g[g.length-1][1];g.pop(),g[g.length-1][0][2][y]=e(p[0],p[1],p[2].length?p[2]:void 0)}else if(0===f&&1===d[1])void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=a("",d[2])),Array.isArray(d[2][0])?p[2].push.apply(p[2],d[2]):p[2].push(d[2]);else if(1===f)p[2].push(d[1]);else if(11!==f&&12!==f&&3!==f)throw new Error("unhandled: "+f)}if(b[2].length>1&&/^\s*$/.test(b[2][0])&&b[2].shift(),b[2].length>2||2===b[2].length&&/\S/.test(b[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(b[2][0])&&"string"==typeof b[2][0][0]&&Array.isArray(b[2][0][2])&&(b[2][0]=e(b[2][0][0],b[2][0][1],b[2][0][2])),b[2][0];function v(e){var a=[];7===i&&(i=4);for(var n=0;n<e.length;n++){var o=e.charAt(n);if(13===i){if(!/-$/.test(r)||"-"!==o){r+=o;continue}t.comments&&a.push([8,r.substr(0,r.length-1)],[3]),r="",i=1}1===i&&"<"===o?(r.length&&a.push([1,r]),r="",i=2):">"===o&&"/"===e.charAt(n-1)||">"===o&&"-"===e.charAt(n-1)&&"-"===e.charAt(n-2)?(a.push([14]),r="",i=1):">"!==o||ce(i)||13===i?2===i&&/^!--$/.test(r)?(t.comments&&a.push([2,r],[5,"comment"],[11]),r=o,i=13):1===i?r+=o:2===i&&"/"===o&&r.length?(a.push([2,r]),r="",i=1):2===i&&/\s/.test(o)?(a.push([2,r]),r="",i=4):2===i?r+=o:4===i&&/[^\s"'=/]/.test(o)?(i=5,r=o):4===i&&/\s/.test(o)?(r.length&&a.push([5,r]),a.push([12])):5===i&&/\s/.test(o)?(a.push([5,r]),r="",i=6):5===i&&"="===o?(a.push([5,r],[11]),r="",i=7):5===i?r+=o:6!==i&&4!==i||"="!==o?6!==i&&4!==i||/\s/.test(o)?7===i&&'"'===o?i=10:7===i&&"'"===o?i=9:10===i&&'"'===o||9===i&&"'"===o?(a.push([8,r],[12]),r="",i=4):7!==i||/\s/.test(o)?8===i&&/\s/.test(o)?(a.push([8,r],[12]),r="",i=4):8!==i&&9!==i&&10!==i||(r+=o):(i=8,n--):(a.push([12]),/[\w-]/.test(o)?(r+=o,i=5):i=4):(a.push([11]),i=7):(2===i?a.push([2,r]):5===i?a.push([5,r]):8===i&&r.length&&a.push([8,r]),a.push([3]),r="",i=1)}if(r.length)switch(i){case 1:a.push([1,r]),r="";break;case 8:case 10:case 9:a.push([8,r]),r=""}return 5===i&&(a.push([5,r]),r=""),a}}};const ce=e=>9===e||10===e,he=(e,t={})=>{const a=Object.keys(t).reduce(((e,a)=>{const r=t[a];return{...e,[a]:(e,t)=>{const s=JSON.stringify(e);((e,t)=>{const a=n(e);a.branch.push(t),a.branchIndices[o(e)]||(a.branchIndices[o(e)]=0)})("tram-hook-key",`${a}[${s}]`),i("tram-hook-key");const l=(e=>{const t=n(e);return{branch:[...t.branch],branchIndices:{...t.branchIndices}}})("tram-hook-key"),c=()=>{((e,t)=>{const a=n(e),o=a.branchIndices;a.branch=[...t.branch],Object.keys(a.branchIndices).forEach((e=>{o[e]=t.branchIndices[e]||0}))})("tram-hook-key",l);const a=t?.map((e=>e instanceof Element?e:`${e}`));return r(e,a)},h=G((()=>V(c)));return n("tram-hook-key").branch.pop(),h["tram-tag"]=!0,h["tram-tag-new-effects"]=h["tram-tag-new-effects"]||[],h["tram-tag-cleanup-effects"]=[],h}}}),{});return ie(re,X(e),a)};var de=e=>{const t=_("tram-effect-queue"),a=r("tram-hook-key");i("tram-hook-key");t[`${a}()`]=e};const ue=he(null),be=(e,t)=>(de((e=>{(t||[]).forEach((t=>{"string"==typeof t?e.insertAdjacentText("beforebegin",t):e.insertAdjacentElement("beforebegin",t)})),e.remove()})),ue`<tram-fragment>${t}</tram-fragment>`),ge=e=>he(null,{"":be,...e});var pe=F;const{setup:fe,get:ye}=t((()=>pe({})));var me=(e,t)=>{const a=ye("tram-observable-store");i("tram-hook-key");const n=e||r("tram-hook-key");Object.prototype.hasOwnProperty.call(a,n)||void 0===t||(a[n]=Array.isArray(t)?[...t]:{...t});const o=a[n];return!e&&$("tram-key-queue").push(n),o},Ae=e=>me(void 0,e);var Se,Ee,ve,ke,Te,we={};ke=function(){return function(e,t){var a={},n=decodeURIComponent;return function(){for(var e in t)s(e,t[e])}(),function(t,r){var s=function(e){var t=function(e){return~e.indexOf("/?")&&(e=e.replace("/?","?")),"/"==e[0]&&(e=e.slice(1)),"/"==e[e.length-1]&&(e=e.slice(0,-1)),e}(e).split("?"),r=~e.indexOf("%")?n:o;return function(e,t,a){if(e&&t.cb)for(var n=e.indexOf("#"),o=(n<0?e:e.slice(0,n)).split("&"),i=0;i<o.length;++i){var r=o[i].split("=");t.params[r[0]]=a(r[1])}return t}(t[1],i(t[0].split("/"),r,0,a,[])||{},r)}(t);return(s.cb||e)(s.params,r,t)};function o(e){return e}function i(e,t,a,n,o){if(n){if(a>=e.length){var s=n["@"];return s&&{cb:s,params:o.reduce((function(e,t){return e[t[0]]=t[1],e}),{})}}var l=t(e[a]),c=o.length;return i(e,t,a+1,n[l.toLowerCase()],o)||r(e,t,a+1,n,":",l,o,c)||r(e,t,e.length,n,"*",e.slice(a).join("/"),o,c)}}function r(e,t,a,n,o,r,s,l){s.length=l;var c=n[o];return c&&s.push([c["~"],r]),i(e,t,a,c,s)}function s(e,t){for(var n=e.split("/"),o=a,i=+("/"===e[0]);i<n.length;++i){var r=n[i],s=":"==r[0]?":":"*"==r[0]?"*":r.toLowerCase();o=o[s]||(o[s]={}),(":"==s||"*"==s)&&(o["~"]=r.slice(1))}o["@"]=t}}},(Te=(ve=we)&&ve.define)&&Te.amd?Te("rlite",[],ke):we?we=ke():ve.Rlite=ke();const Ie=()=>({matches:!1}),Pe=e=>({matches:!0,...e});Se=Ee=e=>(t="*")=>we(Ie,{[t]:Pe})(e());var Re={};Re=Ee((()=>{const e=window.location.href.replace(window.location.origin,""),[t,a]=e.split("#"),n=t.includes("?");return`${t}${void 0!==a?n?`&hash=${a}`:`?hash=${a}`:""}`})),Re.setupUrlParams=Se,Re.useUrlParams=Re;function Ce(e,t){return me(e,t)}var Le=e=>{const t=(e=>{if("string"==typeof e){const t=document.querySelector(e);if(null===t)throw new Error("\n\t\t\t\tTram-One: could not find target, is the element on the page yet?\n\t\t\t\thttps://github.com/Tram-One/tram-one/issues/179\n\t\t\t");return t}return e})(e);if(!t.firstElementChild){const e=document.createElement("div");t.appendChild(e)}return t};const{setup:Ne,get:De,set:Oe}=t((()=>({})));var Fe=E,Me=function(e){e.unobserved||(e.unobserved=!0,h(e)),"object"==typeof e.scheduler&&e.scheduler.delete(e)};const Ue=e=>{if(!("tram-tag"in e))return;e["tram-tag-store-keys"]&&e["tram-tag-store-keys"].forEach((e=>{((e,t)=>{const a=De(e);a[t]=a[t]+1||1})("tram-key-store",e)}));e["tram-tag-new-effects"]&&(e["tram-tag-cleanup-effects"]=[],e["tram-tag-new-effects"].forEach((t=>{let a;const n=Fe((()=>{"function"==typeof a&&a(),a=t(e)}));e["tram-tag-cleanup-effects"].push((()=>{"function"==typeof a&&a(),Me(n)}))})),e["tram-tag-new-effects"]=[])},We=e=>{e.forEach((e=>{var t;t=e,De("tram-key-store")[t]--}))},xe=e=>{"tram-tag"in e&&(Me(e["tram-tag-reaction"]),e["tram-tag-cleanup-effects"].forEach((e=>e())),We(e["tram-tag-store-keys"]))},Ge=e=>"tram-tag"in e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP,Ye=e=>{const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,Ge),a=[];for(;t.nextNode();)a.push(t.currentNode);return a},{setup:_e,get:Be}=t((()=>new MutationObserver((e=>{e.flatMap((e=>[...e.removedNodes])).flatMap(Ye).forEach(xe);e.flatMap((e=>[...e.addedNodes])).flatMap(Ye).forEach(Ue),(()=>{const e=ye("tram-observable-store"),t=De("tram-key-store");Object.entries(t).forEach((([a,n])=>{0===n&&(delete e[a],delete t[a])}))})()}))));const qe=ge();var He=()=>qe` <section class="blank-page" /> `;const $e=ge();var je=({title:e,group:t,selection:a,source:n},o)=>$e`
    <section
      class="page"
      page-color="grey"
      page-group=${t}
      page-selection=${a}
    >
      <h2 class="header">
        <span class="title">${e}</span>
        <span class="source">${n}</span>
      </h2>
      ${o}
    </section>
  `;const Ke=ge({page:je,"blank-page":He});var Qe=(e,t)=>(de((e=>{const t=e.querySelector(".page-scroller-flex");t.addEventListener("focusin",(()=>(e=>{const t=e.scrollLeft,a=document.querySelector(".page:focus-within");e.scrollLeft=0;const n=a.offsetLeft-window.innerWidth/4,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({left:t}),e.scrollTo({left:n,behavior:o?"auto":"smooth"})})(t)))})),Ke` <section class="page-scroller">
    <section class="page-scroller-flex">${t} <blank-page /></section>
  </section>`);const Ve=ge();var Xe=(e,t)=>Ve`
    <fieldset class="annotation">
      <i>${t}</i>
    </fieldset>
  `;const ze=ge({annotation:Xe,page:je});var Je=()=>{const e=Ce("PAGE_FILTERS",{race:""}),t=t=>e.race=t;return ze`
		<>
			<page title="Race" selection="race" source="UA-Origins, Pg 2">
				Details can be found in the Unearthed Arcana - Origins (page 2-10).
				Select one of the following races to see instructions for writing in
				the details in your character sheet.
				<button onclick=${()=>t("human")}>Human</button>
				<button onclick=${()=>t("ardling")}>Ardling</button>
				<button onclick=${()=>t("dragonborn")}>Dragonborn</button>
				<button onclick=${()=>t("dwarf")}>Dwarf</button>
				<button onclick=${()=>t("elf")}>Elf</button>
				<button onclick=${()=>t("gnome")}>Gnome</button>
				<button onclick=${()=>t("halfling")}>Halfling</button>
				<button onclick=${()=>t("orc")}>Orc</button>
				<button onclick=${()=>t("tiefling")}>Tiefling</button>
			</page>
			<page title="Human" group="race" selection="human" source="UA-Origins, Pg 2">
				<ol>
					<li>Write <b>Human</b> in the <b>RACE</b> field in the header</li>
					<li>
						Add the <b>Resourceful</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Resourceful.</b> You gain Inspiration whenever you finish a
							Long Rest.
						</annotation>
					</li>
					<li>
						Add the <b>Skillful</b> trait to your <b>FEATS & TRAITS</b>, and
						fill in the circle next to any one skill in the
						<b>SKILLS</b> section.
						<annotation>
							<b>Skillful.</b> You gain Proficiency in one Skill of your
							choice.
						</annotation>
					</li>
					<li>
						Add the <b>Versatile</b> trait to your <b>FEATS & TRAITS</b>, and
						add the <b>Skilled</b> feat - then fill in the circles for three
						skills.
						<annotation>
							<b>Versatile.</b> You gain the Skilled Feat or another 1st-level
							Feat of your choice.
						</annotation>
						<annotation>
							<b>Skilled.</b> You have exceptionally broad learning. Choose
							three Skills in which you lack Proficiency. You gain Proficiency
							in those Skills.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Ardling" group="race" selection="ardling" source="UA-Origins, Pg 3">
				<ol>
					<li>Write <b>Ardling</b> in the <b>RACE</b> field in the header</li>
					<li>
						Add the <b>Angelic Flight</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Angelic Flight.</b> As a Bonus Action, you sprout spectral
							wings for a moment and fly up to a number of feet equal to your
							Speed. If you are in the air at the end of this movement, you
							fall if nothing is holding you aloft. You can use this Bonus
							Action a number of times equal to your Proficiency Bonus, and
							you regain all expended uses when you finish a Long Rest.
						</annotation>
					</li>
					<li>
						Add the <b>Celestial Legacy</b> trait to your
						<b>FEATS & TRAITS</b>, and select a Celestial Legacy from the
						<b>CELESTIAL LEGECIES</b> table. Add this in the <b>RACE</b> field
						in the header
						<annotation>
							<table>
								<thead>
									<tr>
										<th>Legacy</th>
										<th>Suggested Animals</th>
										<th>1st Level</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Exalted</td>
										<td>Cat, Eagle, Goat, Mule</td>
										<td>
											<a
												href="https://5e.tools/spells.html#thaumaturgy_phb"
												target="_blank"
											>
												Thaumaturgy
											</a>
										</td>
									</tr>
									<tr>
										<td>Heavenly</td>
										<td>Elephant, Owl, Pig, Stork</td>
										<td>
											<a
												href="https://5e.tools/spells.html#light_phb"
												target="_blank"
											>
												Light
											</a>
										</td>
									</tr>
									<tr>
										<td>Idyllic</td>
										<td>Bear, Dog, Raven, Toad</td>
										<td>Guidance (see UA - Expert Classes, pg 32)</td>
									</tr>
								</tbody>
							</table>
						</annotation>
					</li>
					<li>
						Write the <b>Damage Resistance</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation
							><b>Damage Resistance.</b> You have Resistance to Radiant
							Damage.</annotation
						>
					</li>
				</ol>
			</page>
			<page
				title="Dragonborn"
				group="race"
				selection="dragonborn"
				source="UA-Origins, Pg 4"
			>
				<ol>
					<li>
						Write <b>Dragonborn</b> in the <b>RACE</b> field in the header
					</li>
					<li>
						Add the <b>Draconic Ancestry</b> trait to your
						<b>FEATS & TRAITS</b>, and select a Draconic Ancestor from the
						<b>DRACONIC ANCESTOR</b> table. Add this in the <b>RACE</b> field
						in the header
						<annotation>
							<table>
								<thead>
									<tr>
										<th>Dragon</th>
										<th>Damage Type</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Black</td>
										<td>Acid</td>
									</tr>
									<tr>
										<td>Blue</td>
										<td>Lightning</td>
									</tr>
									<tr>
										<td>Brass</td>
										<td>Fire</td>
									</tr>
									<tr>
										<td>Bronze</td>
										<td>Lightning</td>
									</tr>
									<tr>
										<td>Copper</td>
										<td>Acid</td>
									</tr>
									<tr>
										<td>Gold</td>
										<td>Fire</td>
									</tr>
									<tr>
										<td>Green</td>
										<td>Poison</td>
									</tr>
									<tr>
										<td>Red</td>
										<td>Fire</td>
									</tr>
									<tr>
										<td>Silver</td>
										<td>Cold</td>
									</tr>
									<tr>
										<td>White</td>
										<td>Cold</td>
									</tr>
								</tbody>
							</table>
						</annotation>
					</li>
					<li>
						Add the <b>Breath Weapon</b> trait to the
						<b>FEATS & TRAITS</b> and add a <b>Breath Weapon</b> attack to the
						<b>ATTACKS & SPELLCASTING</b> table. Write <b>1d10 + 1</b> and the
						damage type from your Draconic Ancestry in the
						<b>DAMAGE / TYPE</b> field. Ignore <b>ATK BONUS</b> for now.
						<annotation>
							<b>Breath Weapon.</b> As an Action, you exhale destructive
							energy in a 15-foot cone. Each creature in that area must make a
							Dexterity saving throw against a DC equal to 8 + your
							Constitution modifier + your Proficiency Bonus. On a failed
							save, a creature takes 1d10 + your character level in damage of
							the type determined by your Draconic Ancestry trait. On a
							successful save, a creature takes half as much damage.You can
							use this Breath Weapon a number of times equal to your
							Proficiency Bonus, and you regain all expended uses when you
							finish a Long Rest.
						</annotation>
					</li>
					<li>
						Add the <b>Damage Resistance</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Damage Resistance.</b> You have Resistance to the damage type
							determined by your Draconic Ancestry trait.
						</annotation>
					</li>
					<li>
						Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Darkvision.</b> You have Darkvision with a range of 60 feet.
						</annotation>
					</li>
					<li>
						Add <b>Draconic</b> to <b>PROFICIENCIES & LANGUAGES</b>
						<annotation>
							<b>Draconic Language.</b> You instinctively know the language of
							dragons. You can therefore speak, read, and write Draconic.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Dwarf" group="race" selection="dwarf" source="UA-Origins, Pg 5">
				<ol>
					<li>Write <b>Dwarf</b> in the <b>RACE</b> field in the header</li>
					<li>
						Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Darkvision.</b> You have Darkvision with a range of 60 feet.
						</annotation>
					</li>
					<li>
						Add the <b>Dwarven Resilience</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Dwarven Resilience.</b> You have Resistance to Poison Damage.
							You also have Advantage on saving throws you make to avoid or
							end the Poisoned Condition on yourself.
						</annotation>
					</li>
					<li>
						Add the <b>Dwarven Toughness</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Dwarven Toughness.</b>
							Your Hit Point Maximum increases by 1, and it increases by 1
							again whenever you gain a level.
						</annotation>
					</li>
					<li>
						Add the <b>Forge Wise</b> trait to your <b>FEATS & TRAITS</b> and
						add two of the listed tool proficiencies in the
						<b>LANGUAGES & PROFICIENCIES</b> section
						<annotation>
							<b>Forge Wise.</b>
							Your divine creator gave you an uncanny affinity for working
							with stone or metal. You gain Tool Proficiency with two of the
							following options of your choice: Jeweler's Tools, Mason's
							Tools, Smith's Tools, or Tinker's Tools.
						</annotation>
					</li>
					<li>
						Add the <b>Stonecunning</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Stonecunning.</b>
							As a Bonus Action, you gain Tremorsense with a range of 60 feet
							for 10 minutes. You must be on a stone surface or touching such
							a surface to use this Tremorsense. The stone can be natural or
							worked. You can use this Bonus Action a number of times equal to
							your Proficiency Bonus, and you regain all expended uses when
							you finish a Long Rest.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Elf" group="race" selection="elf" source="UA-Origins, Pg 6">
				<ol>
					<li>Write <b>Elf</b> in the <b>RACE</b> field in the header</li>
					<li>
						Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Darkvision.</b> You have Darkvision with a range of 60 feet.
						</annotation>
					</li>
					<li>
						Add the <b>Elven Lineage</b> trait to your <b>FEATS & TRAITS</b>,
						and select a Lineage from the <b>ELVEN LINEAGES</b> table. Add
						this in the <b>RACE</b> field in the header
						<annotation>
							<table>
								<thead>
									<tr>
										<th>Lineage</th>
										<th>1st Level</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Drow</td>
										<td>
											The range of your Darkvision increases to 120 feet. You
											also know the
											<a
												href="https://5e.tools/spells.html#dancing%20lights_phb"
												target="_blank"
											>
												Dancing Lights
											</a>
											cantrip.
										</td>
									</tr>
									<tr>
										<td>High Elf</td>
										<td>
											You know the
											<a
												href="https://5e.tools/spells.html#prestidigitation_phb"
												target="_blank"
											>
												Prestidigitation
											</a>
											cantrip. Whenever you finish a Long Rest, you can
											replace that cantrip with a different cantrip from the
											Arcane Spell List.
										</td>
									</tr>
									<tr>
										<td>Wood Elf</td>
										<td>
											Your Speed increases to 35 feet. You also know the
											<a
												href="https://5e.tools/spells.html#druidcraft_phb"
												target="_blank"
											>
												Druidcraft
											</a>
											cantrip.
										</td>
									</tr>
								</tbody>
							</table>
						</annotation>
					</li>
					<li>
						Add the <b>Fey Ancestry</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Fey Ancestry.</b> You have Advantage on saving throws you
							make to avoid or end the Charmed Condition on yourself.
						</annotation>
					</li>
					<li>
						Add the <b>Keen senses</b> trait to your <b>FEATS & TRAITS</b> and
						fill in the circle next to the <b>Perception</b> skill in the
						<b>SKILLS</b> section
						<annotation>
							<b>Keen senses.</b> You have Proficiency in the Perception
							Skill.
						</annotation>
					</li>
					<li>
						Add the <b>Trance</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Trance.</b> You don't need to sleep, and magic can't put you
							to sleep. You can finish a Long Rest in 4 hours if you spend
							those hours in a trancelike meditation, during which you retain
							consciousness.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Gnome" group="race" selection="gnome" source="UA-Origins, Pg 7">
				<ol>
					<li>Write <b>Gnome</b> in the <b>RACE</b> field in the header</li>
					<li>
						Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Darkvision.</b> You have Darkvision with a range of 60 feet.
						</annotation>
					</li>
					<li>
						Add the <b>Gnomish Cunning</b> trait to your <b>FEATS & TRAITS</b>
					</li>
					<li>
						Add the <b>Gnomish Lineage</b> trait to your
						<b>FEATS & TRAITS</b>, and select a Lineage from the
						<b>GNOMISH LINEAGES</b> table. Add this in the <b>RACE</b> field
						in the header
						<annotation>
							<table>
								<thead>
									<tr>
										<th>Lineage</th>
										<th>Benefit</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Forest Gnome</td>
										<td>
											You know the
											<a
												href="https://5e.tools/spells.html#minor%20illusion_phb"
												target="_blank"
											>
												Minor Illusion
											</a>
											cantrip. You can also cast the
											<a
												href="https://5e.tools/spells.html#speak%20with%20animals_phb"
												target="_blank"
											>
												Speak with Animals
											</a>
											Spell with this trait. You can cast it with the trait a
											number of times equal to your Proficiency Bonus, and you
											regain all expended uses when you finish a Long Rest.
											You can also use any Spell Slots you have to cast the
											Spell.
										</td>
									</tr>
									<tr>
										<td>Rock Gnome</td>
										<td>
											You know the
											<a
												href="https://5e.tools/spells.html#mending_phb"
												target="_blank"
											>
												Mending
											</a>
											and
											<a
												href="https://5e.tools/spells.html#prestidigitation_phb"
												target="_blank"
											>
												Prestidigitation
											</a>
											cantrips. In addition, you can spend 10 minutes casting
											Prestidigitation to create a Tiny clockwork device (AC
											5, 1 HP), such as a toy, a fire starter, or a music box.
											Casting the Spell in this way consumes 10GP worth of raw
											material (string, gears, and the like), which you
											provide during the casting. When you create the device,
											you determine its function by choosing one effect from
											Prestidigitation; the device produces that effect
											whenever you or another creature takes a Bonus Action to
											touch the device and activate it. If the chosen effect
											has options within it, you choose one of those options
											for the device when you create it. For example, if you
											choose the spell's ignite-extinguish effect, you
											determine whether the device ignites or extinguishes
											fire; the device doesn't do both. You can have three
											such devices in existence at a time, and each one
											dismantles itself 8 hours after its creation. You can
											also touch one of your devices and dismantle it as an
											Action. After a device is dismantled, the 10 GP of
											materials used to create it can be reclaimed.
										</td>
									</tr>
								</tbody>
							</table>
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Halfling" group="race" selection="halfling" source="UA-Origins, Pg 8">
				<ol>
					<li>
						Write <b>Halfling</b> in the <b>RACE</b> field in the header
					</li>
					<li>
						Add the <b>Brave</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Brave.</b> You have Advantage on saving throws you make to
							avoid or end the Frightened Condition on yourself.
						</annotation>
					</li>
					<li>
						Add the <b>Halfling Nimbleness</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Halfling Nimbleness.</b> You can move through the space of
							any creature that is of a Size larger than yours, but you can't
							stop there.
						</annotation>
					</li>
					<li>
						Add the <b>Luck</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Luck.</b> When you roll a 1 on the d20 of a d20 Test, you can
							reroll the die, and you must use the new roll.
						</annotation>
					</li>
					<li>
						Add the <b>Naturally Stealthy</b> trait to your
						<b>FEATS & TRAITS</b> and fill in the circle for <b>Stealth</b> in
						the <b>SKILLS</b> section.
						<annotation>
							<b>Naturally Stealthy.</b> You have Proficiency in the Stealth
							Skill.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Orc" group="race" selection="orc" source="UA-Origins, Pg 9">
				<ol>
					<li>Write <b>Orc</b> in the <b>RACE</b> field in the header</li>
					<li>
						Add the <b>Adrenaline Rush</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Adrenaline Rush.</b> You can take the Dash Action as a Bonus
							Action. When you do so, you gain a number of Temporary Hit
							Points equal to your Proficiency Bonus. You can use this trait a
							number of times equal to your Proficiency Bonus, and you regain
							all expended uses when you finish a Long Rest.
						</annotation>
					</li>
					<li>
						Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Darkvision.</b> You have Darkvision with a range of 60 feet.
						</annotation>
					</li>
					<li>
						Add the <b>Powerful Build</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Powerful Build.</b> You count as one Size larger when
							determining your carrying capacity and the weight you can push,
							drag, or lift.
						</annotation>
					</li>
					<li>
						Add the <b>Relentless Endurance</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Relentless Endurance.</b> When you are reduced to 0 Hit
							Points but not killed outright, you can drop to 1 Hit Point
							instead. Once you use this trait, you can't do so again until
							you finish a Long Rest.
						</annotation>
					</li>
				</ol>
			</page>
			<page title="Tiefling" group="race" selection="tiefling" source="UA-Origins, Pg 9">
				<ol>
					<li>
						Write <b>Tiefling</b> in the <b>RACE</b> field in the header
					</li>
					<li>
						Add the <b>Darkvision</b> trait to your <b>FEATS & TRAITS</b>
						<annotation>
							<b>Darkvision.</b> You have Darkvision with a range of 60 feet.
						</annotation>
					</li>
					<li>
						Add the <b>Fiendish Legacy</b> trait to your
						<b>FEATS & TRAITS</b>, and select a Legacy from the
						<b>Fiendish Legacies</b> table. Add this in the <b>RACE</b> field
						in the header. Add the cantrip you recieve to your
						<b>ATTACKS & SPELLCASTING</b> section, ignoring <b>ATK BONUS</b>,
						and add this spell to the <b>SPELLCASTING</b> page.
						<annotation>
							<table>
								<thead>
									<tr>
										<th>Legacy</th>
										<th>1st Level</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Abyssal</td>
										<td>
											You have Resistance to Poison Damage. You also know the
											<a
												href="https://5e.tools/spells.html#poison%20spray_phb"
												target="_blank"
											>
												Poison Spray
											</a>
											cantrip.
										</td>
									</tr>
									<tr>
										<td>Chthonic</td>
										<td>
											You have Resistance to Necrotic Damage.You also know the
											<a
												href="https://5e.tools/spells.html#chill%20touch_phb"
												target="_blank"
											>
												Chill Touch
											</a>
											cantrip.
										</td>
									</tr>
									<tr>
										<td>Infernal</td>
										<td>
											You have Resistance to Fire Damage.You also know the
											<a
												href="https://5e.tools/spells.html#fire%20bolt_phb"
												target="_blank"
											>
												Fire Bolt
											</a>
											cantrip.
										</td>
									</tr>
								</tbody>
							</table>
						</annotation>
					</li>
					<li>
						Add the <b>Otherworldly Presence</b> trait to your
						<b>FEATS & TRAITS</b>
						<annotation>
							<b>Otherworldly Presence.</b> You know the
							<a
								href="https://5e.tools/spells.html#thaumaturgy_phb"
								target="_blank"
							>
								Thaumaturgy
							</a>
							cantrip. When you cast it with this trait, the Spell
							uses the same spellcasting ability you use for your Fiendish
							Legacy trait.
						</annotation>
					</li>
				</ol>
			</page>
		</>
  `};const Ze=ge({annotation:Xe,page:je});var et=()=>{const e=Ce("PAGE_FILTERS",{race:"human",selectedClass:"bard"});return Ze`
    <style>
      .page[page-group="race"] {
        display: none;
      }
      .page[page-selection="${e.race}"] {
        display: inherit;
      }
      .page[page-group="classes"] {
        display: none;
      }
      .page[page-selection="${e.selectedClass}"] {
        display: inherit;
      }
    </style>
  `};const tt=ge({annotation:Xe,page:je});const at=ge({"page-scroller":Qe,"races-content":Je,"page-filters":et,"classes-content":()=>{const e=Ce("PAGE_FILTERS",{selectedClass:"bard"}),t=t=>e.selectedClass=t;return tt`
    <>
      <page title="Class" selection="class" source="UA-Expert-Classes, Pg 3">
        Details can be found in the Unearthed Arcana - Expert Classes (page
        3-15). Select one of the following classes to see instructions for
        writing in the details in your character sheet.
        <annotation>
          Note, only the Expert Classes are available for now. More will be
          added as the UA expands.
        </annotation>
        <button onclick=${()=>t("bard")}>Bard</button>
        <button onclick=${()=>t("ranger")}>Ranger</button>
        <button onclick=${()=>t("rogue")}>Rogue</button>
      </page>
      <page
        title="Bard"
        group="classes"
        selection="bard"
        source="UA-Expert-Classes, Pg 3"
      >
        <ol>
          <li>
            Write <b>Bard 1</b> in the <b>CLASS & LEVEL</b> field in the header
          </li>
          <li>
            Write <b>1d8</b> in the <b>HIT DICE</b> section, and write
            <b>1</b> for the <b>Current</b> value. This is the amount you can
            heal on a short rest
          </li>
          <li>
            Mark the circles next to the <b>SAVING THROW</b> for both
            <b>Dexterity</b> and <b>Charisma</b>. You will add your proficiency
            bonus to saving throws against these skills
          </li>
          <li>
            Mark the circles next to the <b>Deception</b>, <b>Performance</b>,
            and <b>Persuasion</b> skills in the <b>SKILLS</b> section. If you
            already have proficiencies in these skills, feel free to pick any
            other skills as substitutes
          </li>
          <li>
            Add <b>Simple Weapons</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add three
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
              target="_blank"
            >
              Musical Instruments
            </a>
            in the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Light Armor</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Dagger</b> in the <b>EQUIPMENT</b> section.
          </li>
          <li>
            Add <b>Entertainer's Pack</b> in the <b>EQUIPMENT</b> section. This
            includes
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
              target="_blank"
            >
              the following:
            </a>
            a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a
            waterskin, and a disguise kit.
          </li>
          <li>Add <b>Leather Armor</b> in the <b>EQUIPMENT</b> section</li>
          <li>
            Add a single musical instrument for which you have proficiency in
            the <b>EQUIPMENT</b> section
          </li>
          <li>
            Add <b>Shortsword</b> in the <b>EQUIPMENT</b> section.
          </li>
          <li>
            Write in <b>18</b> under <b>GP</b> in the <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Bard cont."
        group="classes"
        selection="bard"
        source="UA-Expert-Classes, Pg 3"
      >
        <ol>
          <li>
            Add <b>Bardic Inspiration</b> to the
            <b>FEATURES & TRAITS</b> section. Your bardic inspiration die is a
            <b>d6</b>
            <annotation>
              <b>Using Bardic Inspiration.</b> You can use your Bardic
              Inspiration die in the following ways:<br />
              <b>Boost a d20 Test.</b> When another creature within 60 feet of
              you that you can see or hear fails a d20 Test, you can use your
              Reaction to give the creature a Bardic Inspiration die. The
              creature rolls that die and adds the number rolled to the d20,
              potentially turning the failure into a success.<br />
              <b>Heal.</b> Immediately after another creature within 60 feet of
              you that you can see or hear takes damage, you can use your
              Reaction to roll your Bardic Inspiration die and restorea number
              of Hit Points to the creature equal to the number rolled.<br />
              <b>Number of Uses.</b> A Bardic Inspiration die is expended when
              it's rolled. You can confer a Bardic Inspiration die a number of
              times equal to your Proficiency Bonus, and you regain all expended
              uses when you finish a Long Rest.
            </annotation>
          </li>
          <li>
            Add <b>Spellcasting</b> to the <b>FEATURES & TRAITS</b> section. On
            the spellcasting page, set the total slots for
            <b>SPELL LEVEL 1</b> to <b>2</b>. Add
            <a
              href="https://5e.tools/spells.html#vicious%20mockery_phb"
              target="_blank"
              >Vicious Mockery</a
            >
            and
            <a
              href="https://5e.tools/spells.html#prestidigitation_phb"
              target="_blank"
              >Prestidigitation</a
            >
            under cantrips. Add
            <a
              href="https://5e.tools/spells.html#color%20spray_phb"
              target="_blank"
              >Color Spray</a
            >
            and
            <a
              href="https://5e.tools/spells.html#disguise%20self_phb"
              target="_blank"
              >Disguise Self</a
            >
            under level 1 spells.<br />
            Add Vicious Mockery to the <b>ATTACKS & SPELLCASTING</b> section.
            <annotation>
              <b>Prepared Spells.</b> Whenever you finish a Long Rest, you can
              practice your bardic arts and replace any Spell you have prepared
              for this Class with another Spell of the same level. Any Spell you
              prepare for this Class must be an Arcane Spell, and it must be
              from one of the following Schools of Magic: Divination,
              Enchantment, Illusion, or Transmutation (for a full listing, see
              UA - Expert Classes, pg 24)
            </annotation>
          </li>
          <li>
            In the spellcasting sheet, write <b>Charisma</b> as your
            <b>SPELLCASTING ABILITY</b>
          </li>
          <li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with these rows.
            <thead>
              <th>NAME</th>
              <th>ATK BONUS</th>
              <th>DAMAGE/TYPE</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleMeleeWeapons"
                    target="_blank"
                    >Dagger</a
                  >
                </td>
                <td>DEX + 2</td>
                <td>1d4 Piercing</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                    target="_blank"
                    >Shortsword</a
                  >
                </td>
                <td>DEX + 2</td>
                <td>1d6 Piercing</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://5e.tools/spells.html#vicious%20mockery_phb"
                    target="_blank"
                    >Vicious Mockery</a
                  >
                </td>
                <td>DC 10 + WIS</td>
                <td>1d4 Psychic</td>
              </tr>
            </tbody>
          </li>
        </ol>
      </page>
      <page
        title="Ranger"
        group="classes"
        selection="ranger"
        source="UA-Expert-Classes, Pg 8"
      >
        <ol>
          <li>
            Write <b>Ranger 1</b> in the <b>CLASS & LEVEL</b> field in the
            header
          </li>
          <li>
            Write <b>1d10</b> in the <b>HIT DICE</b> section, and write
            <b>1</b> for the <b>Current</b> value. This is the amount you can
            heal on a short rest
          </li>
          <li>
            Mark the circles next to the <b>SAVING THROW</b> for both
            <b>Strength</b> and <b>Dexterity</b>. You will add your proficiency
            bonus to saving throws against these skills
          </li>
          <li>
            Mark the circles next to the <b>Athletics</b>, <b>Stealth</b>, and
            <b>Survival</b> skills in the <b>SKILLS</b> section. If you already
            have proficiencies in these skills, you may substitute with any from
            the following list: Animal Handling, Insight, Investigation, Nature,
            and Perception
          </li>
          <li>
            Add <b>Simple Weapons</b> and <b>Martial Weapons</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Light Armor</b>, <b>Medium Armor</b>, and <b>Shields</b> in
            the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Arrows (20)</b> and a <b>Quiver</b> in the
            <b>EQUIPMENT</b> section
          </li>
          <li>Add <b>Longbow</b> in the <b>EQUIPMENT</b> section.</li>
          <li>
            Add <b>Explorer's Pack</b> in the <b>EQUIPMENT</b> section. This
            includes
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
              target="_blank"
            >
              the following:
            </a>
            a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days
            of rations, and a waterskin. The pack also has 50 feet of hempen
            rope strapped to the side of it.
          </li>
          <li>
            Add <b>Studded Leather Armor</b> in the <b>EQUIPMENT</b> section
          </li>
          <li>
            Add <b>Shortsword</b> in the <b>EQUIPMENT</b> section.
          </li>
          <li>
            Add <b>Scimitar</b> in the <b>EQUIPMENT</b> section.
          </li>
          <li>
            Write in <b>8</b> under <b>GP</b> in the <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Ranger cont."
        group="classes"
        selection="ranger"
        source="UA-Expert-Classes, Pg 8"
      >
        <ol>
          <li>
            Choose two skills for which you have proficiency, and mark these for
            you as having <b>Expertise</b> (you can mark this by adding another
            circle on the character sheet, or annotating in some other way). For
            these skills you'll add your proficiency bonus twice
            <annotation>
              Stealth and Survival are iconic choices for a Ranger if you have
              Proficiency in them.
            </annotation>
          </li>
          <li>
            Add <b>Favored Enemy</b> to the <b>FEATURES & TRAITS</b> section,
            and add
            <a
              href="https://5e.tools/spells.html#hunter's%20mark_phb"
              target="_blank"
            >
              Hunter's Mark
            </a>
            to the spellcasting page under 1st level spells
            <annotation>
              You are adept at focusing your ire on a single foe. You always
              have the Hunter's Mark Spell prepared, and it doesn't count
              against the number of Spells you can prepare. Moreover, you don't
              have to concentrate on the Spellonce you cast it; it lasts for
              itsfull duration, until you end it as a Bonus Action, or until you
              are Incapacitated.
            </annotation>
          </li>
          <li>
            Add <b>Spellcasting</b> to the <b>FEATURES & TRAITS</b> section. On
            the spellcasting page, set the total slots for
            <b>SPELL LEVEL 1</b> to <b>2</b>. Add Guidance (see UA - Expert
            Classes, pg 32) and
            <a
              href="https://5e.tools/spells.html#thorn%20whip_phb"
              target="_blank"
              >Thorn Whip</a
            >
            under cantrips. Add
            <a
              href="https://5e.tools/spells.html#cure%20wounds_phb"
              target="_blank"
              >Cure Wounds</a
            >
            and
            <a
              href="https://5e.tools/spells.html#speak%20with%20animals_phb"
              target="_blank"
              >Speak with Animals</a
            >
            under level 1 spells.<br />
            Add Thorn Whip to the <b>ATTACKS & SPELLCASTING</b> section.
            <annotation>
              <b>Prepared Spells.</b> Whenever you finish a Long Rest, you can
              commune with nature and replace any Spell you have prepared for
              this Class with another Spell of the same level. Any Spell you
              prepare for this Class must be an Primal Spell, and it can be from
              any School of Magic except Evocation (for a full listing, see UA -
              Expert Classes, pg 28)
            </annotation>
          </li>
          <li>
            In the spellcasting sheet, write <b>Wisdom</b> as your
            <b>SPELLCASTING ABILITY</b>
          </li>
          <li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with these rows.
            <thead>
              <th>NAME</th>
              <th>ATK BONUS</th>
              <th>DAMAGE/TYPE</th>
            </thead>
            <tbody>
              <tr>
                <td>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialRangedWeapons"
                  target="_blank"
                >Longbow</a>
                </td>
                <td>DEX + 2</td>
                <td>1d8 Piercing</td>
              </tr>
              <tr>
                <td>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                  target="_blank"
                >Shortsword</a>
                </td>
                <td>DEX + 2</td>
                <td>1d6 Piercing</td>
              </tr>
              <tr>
                <td>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                  target="_blank"
                >Scimitar</a>
                </td>
                <td>DEX + 2</td>
                <td>1d6 Slashing</td>
              </tr>
              <tr>
                <td>
                <a
                  href="https://5e.tools/spells.html#thorn%20whip_phb"
                  target="_blank"
                >Thorn whip</a>
                </td>
                <td>WIS + 2</td>
                <td>1d6 Piercing</td>
              </tr>
            </tbody>
          </li>
        </ol>
      </page>
      <page
        title="Rogue"
        group="classes"
        selection="rogue"
        source="UA-Expert-Classes, Pg 12"
      >
        <ol>
          <li>
            Write <b>Rogue 1</b> in the <b>CLASS & LEVEL</b> field in the header
          </li>
          <li>
            Write <b>1d8</b> in the <b>HIT DICE</b> section, and write
            <b>1</b> for the <b>Current</b> value. This is the amount you can
            heal on a short rest
          </li>
          <li>
            Mark the circles next to the <b>SAVING THROW</b> for both
            <b>Dexterity</b> and <b>Intelligence</b>. You will add your
            proficiency bonus to saving throws against these skills
          </li>
          <li>
            Mark the circles next to the <b>Acrobatics</b>,
            <b>Investigation</b>, <b>Sleight of Hand</b>, and
            <b>Stealth</b> skills in the <b>SKILLS</b> section. If you already
            have proficiencies in these skills, you may substitute with any from
            the following list: Athletics, Deception, Insight, Intimidation,
            Perception, Persuasion
          </li>
          <li>
            Add <b>Simple Weapons</b> and
            <b>Martial Weapons (finess only)</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Thieves' Tools</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Light Armor</b> in the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Arrows (20)</b> and a <b>Quiver</b> in the
            <b>EQUIPMENT</b> section
          </li>
          <li>Add <b>Shortbow</b> in the <b>EQUIPMENT</b> section.</li>
          <li>Add <b>Shortsword</b> in the <b>EQUIPMENT</b> section.</li>
          <li>Add <b>Dagger (2)</b> in the <b>EQUIPMENT</b> section</li>
          <li>
            Add <b>Burglar's Pack</b> in the <b>EQUIPMENT</b> section. This
            includes
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
              target="_blank"
            >
              the following:
            </a>
            a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell,
            5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2
            flasks of oil, 5 days rations, a tinderbox, and a waterskin. The
            pack also has 50 feet of hempen rope strapped to the side of it.
          </li>
          <li>Add <b>Leather Armor</b> in the <b>EQUIPMENT</b> section</li>
          <li>Add <b>Theives' Tools</b> in the <b>EQUIPMENT</b> section</li>
          <li>
            Write in <b>18</b> under <b>GP</b> in the <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Rogue cont."
        group="classes"
        selection="rogue"
        source="UA-Expert-Classes, Pg 12"
      >
        <ol>
          <li>
            Choose two skills for which you have proficiency, and mark these for
            you as having <b>Expertise</b> (you can mark this by adding another
            circle on the character sheet, or annotating in some other way). For
            these skills you'll add your proficiency bonus twice
            <annotation>
              Sleight and Stealth are iconic choices for a Rogue if you have
              Proficiency in them.
            </annotation>
          </li>
          <li>
            Add <b>Sneak Attack</b> to the <b>FEATURES & TRAITS</b> section. The
            sneak attack damage for level 1 is <b>1d6</b>
            <annotation>
              <b>Sneak Attack</b>. Once on each of your turns when you take the
              Attack Action, you can deal extra damage to one creature you hit
              with an Attack Roll if you're attacking with a Finesse Weapon or a
              Ranged Weapon and if at least one of the following requirements is
              met:<br />
              <b>Advantage.</b> You have Advantage on the Attack Roll.<br />
              <b>Ally Adjacent to Target.</b> At least one of your allies is
              within 5 feet of the target, the ally isn't Incapacitated, and you
              don't have Disadvantage on the Attack Roll.
            </annotation>
          </li>
          <li>
            Add <b>Theives' Cant</b> and one other language to the
            <b>PROFICIENCIES & LANGUAGES</b> section. You can ses a listing of
            available languages in UA-Origins, Pg 16 or <b>Languages</b> later
            in this guide
          </li>
          <li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with these rows.
            <thead>
              <th>NAME</th>
              <th>ATK BONUS</th>
              <th>DAMAGE/TYPE</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleMeleeWeapons"
                    target="_blank"
                    >Dagger</a
                  >
                </td>
                <td>DEX + 2</td>
                <td>1d4 Piercing</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.dndbeyond.com/sources/basic-rules/equipment#SimpleRangedWeapons"
                    target="_blank"
                    >Shortbow</a
                  >
                </td>
                <td>DEX + 2</td>
                <td>1d6 Piercing</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                    target="_blank"
                    >Shortsword</a
                  >
                </td>
                <td>DEX + 2</td>
                <td>1d6 Piercing</td>
              </tr>
            </tbody>
          </li>
        </ol>
      </page>
    </>
  `},annotation:Xe,page:je});((e,t)=>{const n=Le(t);var o;window["tram-space"]={},Y("tram-effect-store"),Y("tram-effect-queue"),a("tram-hook-key"),fe("tram-observable-store"),Ne("tram-key-store"),H("tram-key-queue"),H("tram-global-key-queue"),_e("tram-mutation-observer"),o=n,Be("tram-mutation-observer").observe(o,{childList:!0,subtree:!0}),((e,t)=>{const a=ge({app:e})`<tram-one><app /></tram-one>`;t.replaceChild(a,t.firstElementChild)})(e,n)})((()=>{Ae({race:"",class:""});return at`
    <main class="app">
      <page-scroller>
        <page title="Character Guide" selection="character-guide">
          <p>
            Use this web-app to guide you through creating a D&D Character. This
            includes the latest playtest rules for One D&D.
            <br /><br />
            This guide assumes players are starting at level 1, and may not
            reflect the exact rules-as-written, but attempts to simplify and
            guide new players through the process of making a new character.
            <br /><br />
            To start, scroll right and follow the pages in order. If there are
            any issues, feel free to post them here:
            <a href="https://github.com/jrjurman/ua-character-guide/issues"
              >https://github.com/jrjurman/ua-character-guide/issues</a
            >
          </p>
          <br />
          <fieldset>
            <legend>Useful links</legend>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment"
                >
                  D&D Beyond Equipment
                </a>
              </li>
              <li>
                <a target="_blank" href="https://5e.tools/spells.html">
                  5e Tools Spells
                </a>
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Starting Off" selection="starting">
          <ol>
            <li>Write your name in the header under <b>PLAYER NAME</b></li>
            <li>Write in <b>30</b> for your <b>SPEED</b></li>
            <li>
              Write <b>Common</b> as an initial language in
              <b>PROFICIENCIES & LANGUAGES</b>
            </li>
            <li>Write in <b>+2</b> for your <b>PROFICIENCY BONUS</b></li>
          </ol>
        </page>
        <page-filters />
        <races-content />
        <classes-content />
        <page
          title="Background"
          selection="background"
          source="UA-Origins, Pg 11"
        >
          Read the UA Origins (page 11-15) to see the list of sample
          backgrounds, ignoring Ability Scores for now
          <ol>
            <li>
              Choose a background and write the name under <b>BACKGROUND</b> in
              the top header
            </li>
            <li>
              Fill in the circles for any two skill proficiencies in the
              <b>SKILLS</b> section
              <annotation>
                You may treat the two skills listed in your selected background
                as recommendations, but you can choose any two, as long as they
                are thematic
              </annotation>
            </li>
            <li>
              Add the tool and language proficiencies in the
              <b>PROFICIENCIES & LANGUAGES</b> section
            </li>
            <li>
              Add the Feat in the "FEATURES & TRAITS" box
              <i>(Feats are detailed starting on page 16 of UA Origins)</i>
            </li>
            <li>Write the equipment in the "EQUIPMENT" section</li>
            <li>Add any additional GP to the "EQUIPMENT" section</li>
          </ol>
        </page>
        <page title="Languages" selection="language" source="UA-Origins, Pg 16">
          Your character should start with Common, a language provided by the
          character background, and an additional starting language listed below
          <fieldset>
            <legend>Standard Languages</legend>
            <li>Common Sign Language</li>
            <li>Dwarvish</li>
            <li>Giant</li>
            <li>Gnomish</li>
            <li>Goblin</li>
            <li>Halfling</li>
            <li>Orc</li>
          </fieldset>

          <fieldset>
            <legend>Rare Languages</legend>
            <li>Abyssal</li>
            <li>Celestial</li>
            <li>Deep Speech</li>
            <li>Draconic</li>
            <li>Infernal</li>
            <li>Primordial</li>
            <li>Sylvan</li>
            <li>Undercommon</li>
          </fieldset>
        </page>
        <page title="Ability Scores" selection="stat-block">
          <ol>
            <li>
              Using the standard array (15, 14, 13, 12, 10, 8), assign each
              value into the Ability Scores listed on the left of your character
              sheet, writing them in the tiny box adjacent to each option
              <fieldset>
                <legend>Primary Abilities</legend>
                <ul>
                  <li>Bard: Charisma</li>
                  <li>Ranger: Dexterity, Wisdom</li>
                  <li>Rogue: Dexterity</li>
                </ul>
              </fieldset>
            </li>
            <li>
              Add an additional +2 and +1 to any two ability scores based on
              your background
              <annotation>
                You may treat the 2 ability scores listed in your selected
                background as recommendations, but you can choose any 2 in any
                order, as long as they are thematic
              </annotation>
            </li>
            <li>
              Fill in the large box above each score the modifier for that value
              <annotation>
                <table>
                  <tr>
                    <th>Score</th>
                    <th>Modifier</th>
                  </tr>
                  <tr>
                    <td>8, 9</td>
                    <td>-1</td>
                  </tr>
                  <tr>
                    <td>10, 11</td>
                    <td>+0</td>
                  </tr>
                  <tr>
                    <td>12, 13</td>
                    <td>+1</td>
                  </tr>
                  <tr>
                    <td>14, 15</td>
                    <td>+2</td>
                  </tr>
                  <tr>
                    <td>16, 17</td>
                    <td>+3</td>
                  </tr>
                </table>
              </annotation>
            </li>
            <li>Set your "INITIATIVE" to your DEX modifier</li>
            <li>
              Set your "PASSIVE WISDOM (PERCEPTION)" to 10 + WIS Modifier (and
              add +2 if you have proficiency in the Perception skill)
            </li>
            <li>
              Set your "HIT POINT MAXIMUM" and "CURRENT HIT POINTS" to your max
              hit dice value (e.g. 8 for 1d8) + your CON Modifier
            </li>
            <li>
              Based on the armor you recieved from your class, and relevant
              ability score from that armor, set your "ARMOR CLASS" (
              <a
                href="https://www.dndbeyond.com/sources/basic-rules/equipment#ArmorandShields"
                target="_blank"
              >
                D&D Beyond - Armor and Shields
              </a>
              )
            </li>
          </ol>
        </page>
        <page title="Set Spellcasting Details" selection="spellcasting">
          If you have spells as part of your class or background, do the
          following on the Spellcasting Sheet

          <ol>
            <li>
              Set your "SPELLCASTING ABILITY" based on your class or background
              <i>(table below)</i>
            </li>

            <li>
              Set your "SPELL SAVE DC" to 8 + Proficiency Bonus + Spellcasting
              Ability Modifier
            </li>
            <li>
              Set your "SPELL ATTACK BONUS" to Proficiency Bonus + Spellcasting
              Ability Modifier
            </li>
          </ol>

          <fieldset>
            <legend>Class Spellcasting Ability</legend>
            <ul>
              <li>Bard: CHA</li>
              <li>Cleric: WIS</li>
              <li>Druid: WIS</li>
              <li>Sorcerer: CHA</li>
              <li>Warlock: CHA</li>
              <li>Wizard: INT</li>
            </ul>
            <annotation>
              If you got spellcasting from "MAGIC INITIATE" feat, choose either
              INT, WIS, or CHA
            </annotation>
          </fieldset>
        </page>
        <page title="Fill in Attack Bonus" selection="atk-bonus">
          Fill in "ATK BONUS" in the "ATTACKS & SPELLCASTING" section
          <ul>
            <li>
              For finess weapons, add either your STR or DEX modifier +
              Proficiency bonus
            </li>
            <li>
              For melee weapon attacks and unarmed strike, add your STR modifier
              + Proficiency bonus
            </li>
            <li>
              For ranged weapons, add your DEX modifier + Proficiency bonus
            </li>
            <li>
              For spells (that ask for an attack roll, not a DC check) use your
              "SPELL ATTACK BONUS"
            </li>
            <li>
              For spells that have a Spell Save DC check use your "SPELL SAVE
              DC"
            </li>
          </ul>
        </page>
      </page-scroller>
    </main>
  `}),"#root");
//# sourceMappingURL=index.69912049.js.map
