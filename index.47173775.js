const e=()=>{if(!window["tram-space"])throw new Error("\n\t\t\tTram-One: app has not started yet, but hook was called. Is it being invoked outside a component function?\n\t\t\thttps://github.com/Tram-One/tram-one/issues/178\n\t\t");return window},t=t=>({setup:i=>{const a=e();return a["tram-space"][i]=t(),a["tram-space"][i]},get:t=>e()["tram-space"][t],set:(t,i)=>{e()["tram-space"][t]=i}}),{setup:i,get:a}=t((()=>({branch:[],branchIndices:{"":0}}))),o=e=>a(e).branch.join("/"),n=e=>{a(e).branchIndices[o(e)]+=1},r=e=>{const t=a(e).branchIndices[o(e)];return`${o(e)}[${t}]`};var l=new WeakMap,s=Symbol("iteration key");function c(e,t,i){var a=t.get(i);a&&a.forEach(e.add,e)}function h(e){e.cleaners&&e.cleaners.forEach(d,e),e.cleaners=[]}function d(e){e.delete(this)}var b=[],u=!1;function g(e,t,i,a){if(e.unobserved)return Reflect.apply(t,i,a);if(-1===b.indexOf(e)){h(e);try{return b.push(e),Reflect.apply(t,i,a)}finally{b.pop()}}}function f(e){var t=b[b.length-1];t&&(m(t,e),function(e,t){var i=t.target,a=t.key;"iterate"===t.type&&(a=s);var o=l.get(i),n=o.get(a);n||(n=new Set,o.set(a,n)),n.has(e)||(n.add(e),e.cleaners.push(n))}(t,e))}function p(e){(function(e){var t=e.target,i=e.key,a=e.type,o=l.get(t),n=new Set;if("clear"===a?o.forEach((function(e,t){c(n,o,t)})):c(n,o,i),"add"===a||"delete"===a||"clear"===a){var r=Array.isArray(t)?"length":s;c(n,o,r)}return n})(e).forEach(y,e)}function y(e){m(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function m(e,t){if(e.debugger&&!u)try{u=!0,e.debugger(t)}finally{u=!1}}function A(){return b.length>0}var S=Symbol("is reaction");function E(e,t){void 0===t&&(t={});var i=e[S]?e:function t(){return g(t,e,this,arguments)};return i.scheduler=t.scheduler,i.debugger=t.debugger,i[S]=!0,t.lazy||i(),i}var w=new WeakMap,v=new WeakMap,k=Object.prototype.hasOwnProperty;function T(e){var t=v.get(e);return A()&&"object"==typeof e&&null!==e?t||O(e):t||e}function I(e,t){var i=e.next;return e.next=function(){var a=i.call(e),o=a.done,n=a.value;return o||(t?n[1]=T(n[1]):n=T(n)),{done:o,value:n}},e}var P={has:function(e){var t=w.get(this),i=Reflect.getPrototypeOf(this);return f({target:t,key:e,type:"has"}),i.has.apply(t,arguments)},get:function(e){var t=w.get(this),i=Reflect.getPrototypeOf(this);return f({target:t,key:e,type:"get"}),T(i.get.apply(t,arguments))},add:function(e){var t=w.get(this),i=Reflect.getPrototypeOf(this),a=i.has.call(t,e),o=i.add.apply(t,arguments);return a||p({target:t,key:e,value:e,type:"add"}),o},set:function(e,t){var i=w.get(this),a=Reflect.getPrototypeOf(this),o=a.has.call(i,e),n=a.get.call(i,e),r=a.set.apply(i,arguments);return o?t!==n&&p({target:i,key:e,value:t,oldValue:n,type:"set"}):p({target:i,key:e,value:t,type:"add"}),r},delete:function(e){var t=w.get(this),i=Reflect.getPrototypeOf(this),a=i.has.call(t,e),o=i.get?i.get.call(t,e):void 0,n=i.delete.apply(t,arguments);return a&&p({target:t,key:e,oldValue:o,type:"delete"}),n},clear:function(){var e=w.get(this),t=Reflect.getPrototypeOf(this),i=0!==e.size,a=e instanceof Map?new Map(e):new Set(e),o=t.clear.apply(e,arguments);return i&&p({target:e,oldTarget:a,type:"clear"}),o},forEach:function(e){for(var t=[],i=arguments.length-1;i-- >0;)t[i]=arguments[i+1];var a=w.get(this),o=Reflect.getPrototypeOf(this);f({target:a,type:"iterate"});var n,r=function(t){for(var i=[],a=arguments.length-1;a-- >0;)i[a]=arguments[a+1];return e.apply(void 0,[T(t)].concat(i))};return(n=o.forEach).call.apply(n,[a,r].concat(t))},keys:function(){var e=w.get(this),t=Reflect.getPrototypeOf(this);return f({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=w.get(this),t=Reflect.getPrototypeOf(this);f({target:e,type:"iterate"});var i=t.values.apply(e,arguments);return I(i,!1)},entries:function(){var e=w.get(this),t=Reflect.getPrototypeOf(this);f({target:e,type:"iterate"});var i=t.entries.apply(e,arguments);return I(i,!0)},get size(){var e=w.get(this),t=Reflect.getPrototypeOf(this);return f({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};P[Symbol.iterator]=function(){var e=w.get(this),t=Reflect.getPrototypeOf(this);f({target:e,type:"iterate"});var i=t[Symbol.iterator].apply(e,arguments);return I(i,e instanceof Map)};var R={get:function(e,t,i){return e=k.call(P,t)?P:e,Reflect.get(e,t,i)}},C="object"==typeof window?window:Function("return this")(),L=new Map([[Map,R],[Set,R],[WeakMap,R],[WeakSet,R],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);var U=Object.prototype.hasOwnProperty,N=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e})));var G={get:function(e,t,i){var a=Reflect.get(e,t,i);if("symbol"==typeof t&&N.has(t))return a;f({target:e,key:t,receiver:i,type:"get"});var o=v.get(a);if(A()&&"object"==typeof a&&null!==a){if(o)return o;var n=Reflect.getOwnPropertyDescriptor(e,t);if(!n||!1!==n.writable||!1!==n.configurable)return O(a)}return o||a},has:function(e,t){var i=Reflect.has(e,t);return f({target:e,key:t,type:"has"}),i},ownKeys:function(e){return f({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,i,a){"object"==typeof i&&null!==i&&(i=w.get(i)||i);var o=U.call(e,t),n=e[t],r=Reflect.set(e,t,i,a);return e!==w.get(a)||(o?i!==n&&p({target:e,key:t,value:i,oldValue:n,receiver:a,type:"set"}):p({target:e,key:t,value:i,receiver:a,type:"add"})),r},deleteProperty:function(e,t){var i=U.call(e,t),a=e[t],o=Reflect.deleteProperty(e,t);return i&&p({target:e,key:t,oldValue:a,type:"delete"}),o}};function O(e){return void 0===e&&(e={}),w.has(e)||"function"==typeof(t=e.constructor)&&t.name in C&&C[t.name]===t&&!L.has(t)?e:v.get(e)||function(e){var t=function(e){return L.get(e.constructor)}(e)||G,i=new Proxy(e,t);return v.set(e,i),w.set(i,e),function(e){l.set(e,new Map)}(e),i}(e);var t}var F=E;const D=(e,t)=>t,M=(e,t)=>{const i=(e=>t=>"tagName"in t&&t.tagName===e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)(t),a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i),o=[a.currentNode];for(;a.nextNode();)o.push(a.currentNode);return o},W={index:-1,tagName:"",scrollLeft:0,scrollTop:0,selectionStart:null,selectionEnd:null,selectionDirection:void 0};var Y=e=>{let t;const i=F((()=>{let i=t,a=W;if(i){a=W;if(i.contains(document.activeElement)){const e=document.activeElement,t=M(i,e.tagName);a.index=t.findIndex((t=>t===e)),a.tagName=e.tagName,a.scrollLeft=e.scrollLeft,a.scrollTop=e.scrollTop,a.selectionStart=e.selectionStart,a.selectionEnd=e.selectionEnd,a.selectionDirection=e.selectionDirection||void 0}const e=document.createElement("div");i.replaceWith(e),e["tram-tag-reaction"]=i["tram-tag-reaction"],e["tram-tag-new-effects"]=i["tram-tag-new-effects"],e["tram-tag-cleanup-effects"]=i["tram-tag-cleanup-effects"],i=e}if(t=e(),i){let e;if(a.index>=0){const i=M(t,a.tagName),n=i.map(D).sort((o=a.index,(e,t)=>Math.abs(e-o)-Math.abs(t-o)))[0];e=i[n];try{void 0!==e.setSelectionRange&&e.setSelectionRange(a.selectionStart,a.selectionEnd,a.selectionDirection)}catch(e){}e.scrollLeft=a.scrollLeft,e.scrollTop=a.scrollTop}t["tram-tag"]=!0,t["tram-tag-reaction"]=i["tram-tag-reaction"],t["tram-tag-new-effects"]=i["tram-tag-new-effects"],t["tram-tag-cleanup-effects"]=i["tram-tag-cleanup-effects"],i.replaceWith(t),e&&e.focus&&e.focus()}var o}));if(void 0===t)throw new Error("\n\t\t\tTram-One: tagResult was not defined after building the tag.\n\t\t\thttps://github.com/Tram-One/tram-one/issues/177\n\t\t");return t["tram-tag-reaction"]=i,t};const{setup:x,get:B,set:$}=t((()=>({}))),_=$,{setup:K,get:H,set:q}=t((()=>[])),Q=e=>{const t=H(e);t.splice(0,t.length)},j=q;var V=e=>{const t={...B("tram-effect-queue")},i=[...H("tram-key-queue")];(e=>{const t=B(e);Object.keys(t).forEach((e=>delete t[e]))})("tram-effect-queue"),Q("tram-key-queue"),Q("tram-global-key-queue");const a=e(),o=B("tram-effect-store"),n=B("tram-effect-queue"),r=a["tram-tag-new-effects"]||[],l=Object.keys(n).filter((e=>!(e in o))).map((e=>n[e])),s=r.concat(l);a["tram-tag-new-effects"]=s;const c=a["tram-tag-store-keys"]||[],h=H("tram-key-queue"),d=c.concat(h);return a["tram-tag-store-keys"]=d,_("tram-effect-queue",t),j("tram-key-queue",i),a},X={},z={};const J=e=>"number"==typeof e||"boolean"==typeof e||"function"==typeof e||e instanceof Date||e instanceof RegExp?e.toString():e,Z=e=>!("string"==typeof e&&/^[\n\r\s]+$/.test(e)),ee=(e,t)=>{Array.isArray(t)&&t.map(J).filter(Z).forEach((t=>{if(Array.isArray(t))ee(e,t);else{if("string"==typeof t){if(e.lastChild&&"#text"===e.lastChild.nodeName)return void(e.lastChild.nodeValue+=t);t=document.createTextNode(t)}t&&t.nodeType&&e.appendChild(t)}}))};z=ee;const te=e=>!/^xmlns($|:)/i.test(e),ie=e=>"classname"===e.key.toLowerCase()?{key:"class",value:e.value}:e,ae=e=>"htmlFor"===e.key?{key:"for",value:e.value}:e,oe=e=>(t,i,a)=>{if("!--"===t)return document.createComment(i.comment);const o=e?document.createElementNS(e,t):document.createElement(t);return Object.keys(i).filter(te).filter((e=>t=>Object.prototype.hasOwnProperty.call(e,t))(i)).map((e=>t=>({key:t,value:e[t]}))(i)).map(ie).map(ae).filter((e=>t=>"on"!==t.key.slice(0,2)||((e,t,i)=>{e[t]=i,e.events=e.events?e.events.concat(t):[t]})(e,t.key,t.value))(o)).filter((e=>t=>e.setAttributeNS(null,t.key,t.value))(o)),z(o,a),o};(X=oe).html=oe(),X.svg=oe("http://www.w3.org/2000/svg");var ne;ne=function(e,t,i){const a=function(e,a,o){const n=i[e];return n?n(a,o):t(e,a,o)},o=e(a);return o.h=a,o};var re,le={};le=function(e){return function(t,i,a){for(var o in i)o in se&&(i[se[o]]=i[o],delete i[o]);return e(t,i,a)}};var se={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};re=function(e,t){t||(t={comments:!0});const i=t.concat||function(e,t){return String(e)+String(t)},a=e=>{switch(typeof e){case"function":case"string":case"object":case"undefined":return e;default:return i("",e)}};return!1!==t.attrToProp&&(e=le(e)),function(o){for(var n=1,r="",l=arguments.length,s=[],c=0;c<o.length;c++)if(c<l-1){var h=arguments[c+1],d=w(o[c]),b=n;switch(b){case 13:r+=h,h="";case 10:case 9:case 7:b=8;break;case 4:b=5}d.push([0,b,h]),s.push.apply(s,d)}else s.push.apply(s,w(o[c]));var u=[null,{},[]],g=[[u,-1]];for(c=0;c<s.length;c++){var f=g[g.length-1][0],p=(d=s[c])[0];if(2===p&&/^\//.test(d[1])){var y=g[g.length-1][1];g.length>1&&(g.pop(),g[g.length-1][0][2][y]=e(f[0],f[1],f[2].length?f[2]:void 0))}else if(2===p){var m=[d[1],{},[]];f[2].push(m),g.push([m,f[2].length-1])}else if(5===p||0===p&&5===d[1]){for(var A,S="";c<s.length;c++)if(5===s[c][0])S=i(S,s[c][1]);else{if(0!==s[c][0]||5!==s[c][1])break;if("object"!=typeof s[c][2]||S)S=i(S,s[c][2]);else for(A in s[c][2])s[c][2].hasOwnProperty(A)&&!f[1][A]&&(f[1][A]=s[c][2][A])}11===s[c][0]&&c++;for(var E=c;c<s.length;c++)if(8===s[c][0]||5===s[c][0])f[1][S]?""===s[c][1]||(f[1][S]=i(f[1][S],s[c][1])):f[1][S]=a(s[c][1]);else{if(0!==s[c][0]||8!==s[c][1]&&5!==s[c][1]){!S.length||f[1][S]||c!==E||3!==s[c][0]&&12!==s[c][0]||(f[1][S]=S.toLowerCase()),3===s[c][0]&&c--;break}f[1][S]?""===s[c][2]||(f[1][S]=i(f[1][S],s[c][2])):f[1][S]=a(s[c][2])}}else if(14===p){y=g[g.length-1][1];g.pop(),g[g.length-1][0][2][y]=e(f[0],f[1],f[2].length?f[2]:void 0)}else if(0===p&&1===d[1])void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=i("",d[2])),Array.isArray(d[2][0])?f[2].push.apply(f[2],d[2]):f[2].push(d[2]);else if(1===p)f[2].push(d[1]);else if(11!==p&&12!==p&&3!==p)throw new Error("unhandled: "+p)}if(u[2].length>1&&/^\s*$/.test(u[2][0])&&u[2].shift(),u[2].length>2||2===u[2].length&&/\S/.test(u[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(u[2][0])&&"string"==typeof u[2][0][0]&&Array.isArray(u[2][0][2])&&(u[2][0]=e(u[2][0][0],u[2][0][1],u[2][0][2])),u[2][0];function w(e){var i=[];7===n&&(n=4);for(var a=0;a<e.length;a++){var o=e.charAt(a);if(13===n){if(!/-$/.test(r)||"-"!==o){r+=o;continue}t.comments&&i.push([8,r.substr(0,r.length-1)],[3]),r="",n=1}1===n&&"<"===o?(r.length&&i.push([1,r]),r="",n=2):">"===o&&"/"===e.charAt(a-1)||">"===o&&"-"===e.charAt(a-1)&&"-"===e.charAt(a-2)?(i.push([14]),r="",n=1):">"!==o||ce(n)||13===n?2===n&&/^!--$/.test(r)?(t.comments&&i.push([2,r],[5,"comment"],[11]),r=o,n=13):1===n?r+=o:2===n&&"/"===o&&r.length?(i.push([2,r]),r="",n=1):2===n&&/\s/.test(o)?(i.push([2,r]),r="",n=4):2===n?r+=o:4===n&&/[^\s"'=/]/.test(o)?(n=5,r=o):4===n&&/\s/.test(o)?(r.length&&i.push([5,r]),i.push([12])):5===n&&/\s/.test(o)?(i.push([5,r]),r="",n=6):5===n&&"="===o?(i.push([5,r],[11]),r="",n=7):5===n?r+=o:6!==n&&4!==n||"="!==o?6!==n&&4!==n||/\s/.test(o)?7===n&&'"'===o?n=10:7===n&&"'"===o?n=9:10===n&&'"'===o||9===n&&"'"===o?(i.push([8,r],[12]),r="",n=4):7!==n||/\s/.test(o)?8===n&&/\s/.test(o)?(i.push([8,r],[12]),r="",n=4):8!==n&&9!==n&&10!==n||(r+=o):(n=8,a--):(i.push([12]),/[\w-]/.test(o)?(r+=o,n=5):n=4):(i.push([11]),n=7):(2===n?i.push([2,r]):5===n?i.push([5,r]):8===n&&r.length&&i.push([8,r]),i.push([3]),r="",n=1)}if(r.length)switch(n){case 1:i.push([1,r]),r="";break;case 8:case 10:case 9:i.push([8,r]),r=""}return 5===n&&(i.push([5,r]),r=""),i}}};const ce=e=>9===e||10===e,he=(e,t={})=>{const i=Object.keys(t).reduce(((e,i)=>{const r=t[i];return{...e,[i]:(e,t)=>{const l=JSON.stringify(e);((e,t)=>{const i=a(e);i.branch.push(t),i.branchIndices[o(e)]||(i.branchIndices[o(e)]=0)})("tram-hook-key",`${i}[${l}]`),n("tram-hook-key");const s=(e=>{const t=a(e);return{branch:[...t.branch],branchIndices:{...t.branchIndices}}})("tram-hook-key"),c=()=>{((e,t)=>{const i=a(e),o=i.branchIndices;i.branch=[...t.branch],Object.keys(i.branchIndices).forEach((e=>{o[e]=t.branchIndices[e]||0}))})("tram-hook-key",s);const i=t?.map((e=>e instanceof Element?e:`${e}`));return r(e,i)},h=Y((()=>V(c)));return a("tram-hook-key").branch.pop(),h["tram-tag"]=!0,h["tram-tag-new-effects"]=h["tram-tag-new-effects"]||[],h["tram-tag-cleanup-effects"]=[],h}}}),{});return ne(re,X(e),i)};var de=e=>{const t=B("tram-effect-queue"),i=r("tram-hook-key");n("tram-hook-key");t[`${i}()`]=e};const be=he(null),ue=(e,t)=>(de((e=>{(t||[]).forEach((t=>{"string"==typeof t?e.insertAdjacentText("beforebegin",t):e.insertAdjacentElement("beforebegin",t)})),e.remove()})),be`<tram-fragment>${t}</tram-fragment>`),ge=e=>he(null,{"":ue,...e});var fe=O;const{setup:pe,get:ye}=t((()=>fe({})));var me=(e,t)=>{const i=ye("tram-observable-store");n("tram-hook-key");const a=e||r("tram-hook-key");Object.prototype.hasOwnProperty.call(i,a)||void 0===t||(i[a]=Array.isArray(t)?[...t]:{...t});const o=i[a];return!e&&H("tram-key-queue").push(a),o},Ae=e=>me(void 0,e);var Se,Ee,we,ve,ke,Te={};ve=function(){return function(e,t){var i={},a=decodeURIComponent;return function(){for(var e in t)l(e,t[e])}(),function(t,r){var l=function(e){var t=function(e){return~e.indexOf("/?")&&(e=e.replace("/?","?")),"/"==e[0]&&(e=e.slice(1)),"/"==e[e.length-1]&&(e=e.slice(0,-1)),e}(e).split("?"),r=~e.indexOf("%")?a:o;return function(e,t,i){if(e&&t.cb)for(var a=e.indexOf("#"),o=(a<0?e:e.slice(0,a)).split("&"),n=0;n<o.length;++n){var r=o[n].split("=");t.params[r[0]]=i(r[1])}return t}(t[1],n(t[0].split("/"),r,0,i,[])||{},r)}(t);return(l.cb||e)(l.params,r,t)};function o(e){return e}function n(e,t,i,a,o){if(a){if(i>=e.length){var l=a["@"];return l&&{cb:l,params:o.reduce((function(e,t){return e[t[0]]=t[1],e}),{})}}var s=t(e[i]),c=o.length;return n(e,t,i+1,a[s.toLowerCase()],o)||r(e,t,i+1,a,":",s,o,c)||r(e,t,e.length,a,"*",e.slice(i).join("/"),o,c)}}function r(e,t,i,a,o,r,l,s){l.length=s;var c=a[o];return c&&l.push([c["~"],r]),n(e,t,i,c,l)}function l(e,t){for(var a=e.split("/"),o=i,n=+("/"===e[0]);n<a.length;++n){var r=a[n],l=":"==r[0]?":":"*"==r[0]?"*":r.toLowerCase();o=o[l]||(o[l]={}),(":"==l||"*"==l)&&(o["~"]=r.slice(1))}o["@"]=t}}},(ke=(we=Te)&&we.define)&&ke.amd?ke("rlite",[],ve):Te?Te=ve():we.Rlite=ve();const Ie=()=>({matches:!1}),Pe=e=>({matches:!0,...e});Se=Ee=e=>(t="*")=>Te(Ie,{[t]:Pe})(e());var Re={};Re=Ee((()=>{const e=window.location.href.replace(window.location.origin,""),[t,i]=e.split("#"),a=t.includes("?");return`${t}${void 0!==i?a?`&hash=${i}`:`?hash=${i}`:""}`})),Re.setupUrlParams=Se,Re.useUrlParams=Re;function Ce(e,t){return me(e,t)}var Le=e=>{const t=(e=>{if("string"==typeof e){const t=document.querySelector(e);if(null===t)throw new Error("\n\t\t\t\tTram-One: could not find target, is the element on the page yet?\n\t\t\t\thttps://github.com/Tram-One/tram-one/issues/179\n\t\t\t");return t}return e})(e);if(!t.firstElementChild){const e=document.createElement("div");t.appendChild(e)}return t};const{setup:Ue,get:Ne,set:Ge}=t((()=>({})));var Oe=E,Fe=function(e){e.unobserved||(e.unobserved=!0,h(e)),"object"==typeof e.scheduler&&e.scheduler.delete(e)};const De=e=>{if(!("tram-tag"in e))return;e["tram-tag-store-keys"]&&e["tram-tag-store-keys"].forEach((e=>{((e,t)=>{const i=Ne(e);i[t]=i[t]+1||1})("tram-key-store",e)}));e["tram-tag-new-effects"]&&(e["tram-tag-cleanup-effects"]=[],e["tram-tag-new-effects"].forEach((t=>{let i;const a=Oe((()=>{"function"==typeof i&&i(),i=t(e)}));e["tram-tag-cleanup-effects"].push((()=>{"function"==typeof i&&i(),Fe(a)}))})),e["tram-tag-new-effects"]=[])},Me=e=>{e.forEach((e=>{var t;t=e,Ne("tram-key-store")[t]--}))},We=e=>{"tram-tag"in e&&(Fe(e["tram-tag-reaction"]),e["tram-tag-cleanup-effects"].forEach((e=>e())),Me(e["tram-tag-store-keys"]))},Ye=e=>"tram-tag"in e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP,xe=e=>{const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,Ye),i=[];for(;t.nextNode();)i.push(t.currentNode);return i},{setup:Be,get:$e}=t((()=>new MutationObserver((e=>{e.flatMap((e=>[...e.removedNodes])).flatMap(xe).forEach(We);e.flatMap((e=>[...e.addedNodes])).flatMap(xe).forEach(De),(()=>{const e=ye("tram-observable-store"),t=Ne("tram-key-store");Object.entries(t).forEach((([i,a])=>{0===a&&(delete e[i],delete t[i])}))})()}))));const _e=ge();var Ke=()=>_e` <section class="blank-page" /> `;const He=ge();var qe=({title:e,group:t,selection:i,source:a},o)=>He`
    <section
      class="page"
      page-color="grey"
      page-group=${t}
      page-selection=${i}
    >
      <h2 class="header">
        <span class="title">${e}</span>
        <span class="source">${a}</span>
      </h2>
      ${o}
    </section>
  `;const Qe=ge({page:qe,"blank-page":Ke});var je=(e,t)=>(de((e=>{const t=e.querySelector(".page-scroller-flex");t.addEventListener("focusin",(()=>(e=>{const t=e.scrollLeft,i=document.querySelector(".page:focus-within");e.scrollLeft=0;const a=i.offsetLeft-window.innerWidth/4,o=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({left:t}),e.scrollTo({left:a,behavior:o?"auto":"smooth"})})(t)))})),Qe` <section class="page-scroller">
    <section class="page-scroller-flex">${t} <blank-page /></section>
  </section>`);const Ve=ge();var Xe=(e,t)=>Ve`
    <fieldset class="annotation">
      <i>${t}</i>
    </fieldset>
  `;const ze=ge({annotation:Xe,page:qe});const Je=ge({annotation:Xe,page:qe,"races-selector":()=>{const e=Ce("PAGE_FILTERS",{race:""}),t=t=>e.race=t,i=e.race;return ze`
		<page title="Race" selection="race" source="UA-Origins, Pg 2">
			Details can be found in the Unearthed Arcana - Origins (page 2-10).
			Select one of the following races to see instructions for writing in
			the details in your character sheet.
			<div class="three-col-wrapper">
				<button class=${"human"==i?"selected":""} onclick=${()=>t("human")}>Human</button>
				<button class=${"ardling"==i?"selected":""} onclick=${()=>t("ardling")}>Ardling</button>
			<button class=${"dragonborn"==i?"selected":""}" onclick=${()=>t("dragonborn")}>Dragonborn</button>
				<button class=${"dwarf"==i?"selected":""} onclick=${()=>t("dwarf")}>Dwarf</button>
				<button class=${"elf"==i?"selected":""} onclick=${()=>t("elf")}>Elf</button>
				<button class=${"gnome"==i?"selected":""} onclick=${()=>t("gnome")}>Gnome</button>
				<button class=${"halfling"==i?"selected":""} onclick=${()=>t("halfling")}>Halfling</button>
				<button class=${"orc"==i?"selected":""} onclick=${()=>t("orc")}>Orc</button>
				<button class=${"tiefling"==i?"selected":""} onclick=${()=>t("tiefling")}>Tiefling</button>
			</div>
		</page>
  `}});var Ze=()=>Je`
		<>
			<races-selector />
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
							Speed. You can use this Bonus Action a number of times equal
							to your Proficiency Bonus, and you regain all expended uses
							when you finish a Long Rest.
						</annotation>
					</li>
					<li>
						Add the <b>Celestial Legacy</b> trait to your
						<b>FEATS & TRAITS</b>, and select a Celestial Legacy from the
						table below. Add this in the <b>RACE</b> field
						in the header, as well as the animal you represent.
						Add the cantrip listed in the Spellcasting page
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
						<b>FEATS & TRAITS</b>
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
                    href="https://www.dndbeyond.com/races/16-dragonborn"
                    target="_blank"
                    >Breath Weapon</a
                  >
                </td>
                <td>DC 10 + CON</td>
                <td>1d10 + 1 DMG type</td>
              </tr>
            </tbody>
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
						<annotation>
							<b>Gnomish Cunning.</b> You have Advantage on Intelligence, Wisdom, and Charisma saving throws.
						</annotation>
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
						Fiendish Legacies table below. Add this in the <b>RACE</b> field
						in the header
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
					<li>
            Fill in the <b>ATTACKS & SPELLCASTING</b> table with the cantrip associated with the taken legacy.
						<table>
							<thead>
								<th>NAME</th>
								<th>ATK BONUS</th>
								<th>DAMAGE/TYPE</th>
							</thead>
							<tbody>
								<tr>
									<td>
										<a
											href="https://5e.tools/spells.html#poison%20spray_phb"
											target="_blank"
											>Poison Spray</a
										>
									</td>
									<td>SPL + 2</td>
									<td>1d12 Poison</td>
								</tr>
								<tr>
									<td>
										<a
											href="https://5e.tools/spells.html#chill%20touch_phb"
											target="_blank"
											>Chill Touch</a
										>
									</td>
									<td>SPL + 2</td>
									<td>1d8 necrotic</td>
								</tr>
								<tr>
									<td>
										<a
											href="https://5e.tools/spells.html#fire%20bolt_phb"
											target="_blank"
											>Fire bolt</a
										>
									</td>
									<td>SPL + 2</td>
									<td>1d10 fire</td>
								</tr>
							</tbody>
						</table>
						<annotation>
							<b>SPL</b> is a placeholder for the Spellcasting ability you will fill in later.
						</annotation>
          </li>
				</ol>
			</page>
		</>
  `;const et=ge({annotation:Xe,page:qe});var tt=()=>{const e=Ce("PAGE_FILTERS",{race:"human",selectedClass:"bard",background:"acolyte"});return et`
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
      .page[page-group="backgrounds"] {
        display: none;
      }
      .page[page-selection="${e.background}"] {
        display: inherit;
      }
    </style>
  `};const it=ge({annotation:Xe,page:qe});const at=ge({annotation:Xe,page:qe,"classes-selector":()=>{const e=Ce("PAGE_FILTERS",{selectedClass:"bard"}),t=t=>e.selectedClass=t,i=e.selectedClass;return it`
    <page title="Class" selection="class" source="UA-Expert-Classes, Pg 3">
      Details can be found in the Unearthed Arcana - Expert Classes (page 3-15).
      Select one of the following classes to see instructions for writing in the
      details in your character sheet.
      <annotation>
        Note, only the Expert Classes are available for now. More will be added
        as the UA expands.
      </annotation>
      <div class="three-col-wrapper">
        <button
          class=${"bard"==i?"selected":""}
          onclick=${()=>t("bard")}
        >
          Bard
        </button>
        <button
          class=${"ranger"==i?"selected":""}
          onclick=${()=>t("ranger")}
        >
          Ranger
        </button>
        <button
          class=${"rogue"==i?"selected":""}
          onclick=${()=>t("rogue")}
        >
          Rogue
        </button>
      </div>
    </page>
  `}});var ot=()=>{Ce("PAGE_FILTERS",{selectedClass:"bard"});return at`
    <>
      <classes-selector />
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
            Add the following in <b>PROFICIENCIES & LANGUAGE</b>
            <ul>
              <li>Simple Weapons</li>
              <li>
                Three
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
                  target="_blank"
                >
                  Musical Instruments
                </a>
              </li>
              <li>Light Armor</li>
            </ul>
          </li>
          <li>
            Add the following in <b>EQUIPMENT</b>
            <ul>
              <li>Leather Armor</li>
              <li>Dagger</li>
              <li>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
                  target="_blank"
                  >Entertainer's Pack</a
                ><i
                  >(a backpack, a bedroll, 2 costumes, 5 candles, 5 days of
                  rations, a waterskin, and a disguise kit)</i
                >
              </li>
              <li>Shortsword</li>
              <li>
                a single musical instrument for which you have proficiency in
              </li>
              <li>18 Gold Pieces (GP)</li>
            </ul>
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
            <table>
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
            </table>
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
            Add the following in <b>PROFICIENCIES & LANGUAGE</b>
            <ul>
              <li>Simple & Martial Weapons</li>
              <li>Light Armor, Medium Armor, and Shields</li>
            </ul>
          </li>
          <li>
            Add the following in <b>EQUIPMENT</b>
            <ul>
              <li>Studded Leather</li>
              <li>Longbow</li>
              <li>Quiver and Arrows (20)</li>
              <li>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
                  target="_blank"
                  >Explorer's Pack</a
                ><i>
                  (a backpack, a bedroll, a mess kit, a tinderbox, 10 torches,
                  10 days of rations, 50 feet of hempen rope, and a
                  waterskin)</i
                >
              </li>
              <li>Shortsword</li>
              <li>Scimitar</li>
              <li>8 Gold Pieces (GP)</li>
            </ul>
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
            circle on the character sheet, or writing "E" in the space to the left).
            For these skills you'll add your proficiency bonus twice
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
            under level 1 spells
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
            <table>
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
                      >Longbow</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d8 Piercing</td>
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
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment#MartialMeleeWeapons"
                      target="_blank"
                      >Scimitar</a
                    >
                  </td>
                  <td>DEX + 2</td>
                  <td>1d6 Slashing</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://5e.tools/spells.html#thorn%20whip_phb"
                      target="_blank"
                      >Thorn whip</a
                    >
                  </td>
                  <td>WIS + 2</td>
                  <td>1d6 Piercing</td>
                </tr>
              </tbody>
            </table>
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
            Add the following in <b>PROFICIENCIES & LANGUAGE</b>
            <ul>
              <li>Simple & Martial Weapons</li>
              <li>Light Armor</li>
              <li>Thieves' Tools</li>
            </ul>
          </li>
          <li>
            Add the following in <b>EQUIPMENT</b>
            <ul>
              <li>Leather Armor</li>
              <li>Shortbow</li>
              <li>Quiver and Arrows (20)</li>
              <li>
                <a
                  href="https://www.dndbeyond.com/sources/basic-rules/equipment#EquipmentPacks"
                  target="_blank"
                  >Burglar's Pack</a
                >
                <i
                  >(a backpack, a bag of 1,000 ball bearings, 10 feet of string,
                  a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded
                  lantern, 2 flasks of oil, 5 days rations, a tinderbox, 50 feet
                  of hempen rope, and a waterskin)</i
                >
              </li>
              <li>Shortsword</li>
              <li>Dagger (2)</li>
              <li>Theives' Tools</li>
              <li>18 Gold Pieces (GP)</li>
            </ul>
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
            <table>
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
            </table>
          </li>
        </ol>
      </page>
    </>
  `};const nt=ge({annotation:Xe,page:qe});const rt=ge({annotation:Xe,page:qe,"backgrounds-selector":()=>{const e=Ce("PAGE_FILTERS",{background:"acolyte"}),t=t=>e.background=t;return nt`
    <page title="Background" selection="background" source="UA-Origins, Pg 11">
      Details can be found in the Unearthed Arcana - Origins (page 11-15).
      Select one of the following backgrounds to see instructions for writing in
      the details in your character sheet.
      <div class="three-col-wrapper">
        <button
          class=${"acolyte"==e.background?"selected":""}
          onclick=${()=>t("acolyte")}
        >
          Acolyte
        </button>
        <button
          class=${"artisan"==e.background?"selected":""}
          onclick=${()=>t("artisan")}
        >
          Artisan
        </button>
        <button
          class=${"charlatan"==e.background?"selected":""}
          onclick=${()=>t("charlatan")}
        >
          Charlatan
        </button>
        <button
          class=${"criminal"==e.background?"selected":""}
          onclick=${()=>t("criminal")}
        >
          Criminal
        </button>
        <button
          class=${"cultist"==e.background?"selected":""}
          onclick=${()=>t("cultist")}
        >
          Cultist
        </button>
        <button
          class=${"entertainer"==e.background?"selected":""}
          onclick=${()=>t("entertainer")}
        >
          Entertainer
        </button>
        <button
          class=${"farmer"==e.background?"selected":""}
          onclick=${()=>t("farmer")}
        >
          Farmer
        </button>
        <button
          class=${"gladiator"==e.background?"selected":""}
          onclick=${()=>t("gladiator")}
        >
          Gladiator
        </button>
        <button
          class=${"guard"==e.background?"selected":""}
          onclick=${()=>t("guard")}
        >
          Guard
        </button>
        <button
          class=${"guide"==e.background?"selected":""}
          onclick=${()=>t("guide")}
        >
          Guide
        </button>
        <button
          class=${"hermit"==e.background?"selected":""}
          onclick=${()=>t("hermit")}
        >
          Hermit
        </button>
        <button
          class=${"laborer"==e.background?"selected":""}
          onclick=${()=>t("laborer")}
        >
          Laborer
        </button>
        <button
          class=${"noble"==e.background?"selected":""}
          onclick=${()=>t("noble")}
        >
          Noble
        </button>
        <button
          class=${"pilgrim"==e.background?"selected":""}
          onclick=${()=>t("pilgrim")}
        >
          Pilgrim
        </button>
        <button
          class=${"sage"==e.background?"selected":""}
          onclick=${()=>t("sage")}
        >
          Sage
        </button>
        <button
          class=${"sailor"==e.background?"selected":""}
          onclick=${()=>t("sailor")}
        >
          Sailor
        </button>
        <button
          class=${"soldier"==e.background?"selected":""}
          onclick=${()=>t("soldier")}
        >
          Soldier
        </button>
        <button
          class=${"urchin"==e.background?"selected":""}
          onclick=${()=>t("urchin")}
        >
          Urchin
        </button>
      </div>
    </page>
  `}});const lt=ge({"page-scroller":je,"races-content":Ze,"page-filters":tt,"classes-content":ot,"backgrounds-content":()=>rt`
    <>
      <backgrounds-selector />
      <page
        title="Acolyte"
        group="backgrounds"
        selection="acolyte"
        source="UA-Origins, Pg 11"
      >
        <ol>
          <li>Write in <b>Acolyte</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Insight</b> and <b>Religion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Calligrapher's Supplies</b> and <b>Celestial</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Divine)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Divine Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Divine spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Book (Prayers), Parchment (10 sheets), Calligrapher's Supplies, Holy
            Symbol, Robe
          </li>
          <li>
            Add <b>3 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Artisan"
        group="backgrounds"
        selection="artisan"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>Write in <b>Artisan</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Investigation</b> and
            <b>Persuasion</b> in the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add an
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#ArtisansTools"
              target="_blank"
            >
              <b>Artisan's Tools</b> (one of your choice)</a
            >
            and <b>Gnomish</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Crafter</b> to the <b>FEATURES & TRAITS</b> section, and add
            three more Artisan's Tools to the
            <b>PROFICIENCIES & LANGUAGES</b> section.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 16.
              You have a 20% discount on purchasing nonmagical items, and you
              craft 20% faster with tools you have proficiency in.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Abacus, Pouch (2), Traveler's Clothes, Merchant's Scale, and one
            Artisan's Tool that you have proficiency in.
          </li>
          <li>
            Add <b>25 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Charlatan"
        group="backgrounds"
        selection="charlatan"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>Write in <b>Charlatan</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Deception</b> and
            <b>Sleight of Hand</b> in the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Forgery Kit</b> and <b>Infernal</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Skilled</b> to the <b>FEATURES & TRAITS</b> section, and fill
            any three circles in your <b>SKILLS</b> for proficiency.
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Costume, Forgery Kit, Fine Clothes
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Criminal"
        group="backgrounds"
        selection="criminal"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>Write in <b>Criminal</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Sleight of Hand</b> and <b>Stealth</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Thieves' Tools</b> and <b>Thieves' Cant</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Alert</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 16.
              During Initiative calculation, you will add +2 to your Initiative
              modifier. You gain the following benefits:<br />
              <b>Initiative Swap.</b> Immediately after you roll Initiative, you
              can swap your Initiative with the Initiative of one willing ally
              in the same combat. You can't make this swap if you or the ally is
              Incapacitated.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Crowbar, Dagger (2), Pouch (2), Thieves' Tools, Traveler's Clothes
          </li>
          <li>
            Add <b>16 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Cultist"
        group="backgrounds"
        selection="cultist"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>Write in <b>Cultist</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Arcana</b> and <b>Religion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Disguise Kit</b> and <b>Abyssal</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Arcane)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Arcane Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Arcane spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bell, Lamp, Common Clothes, Robe, Dagger, Disguise Kit
          </li>
          <li>
            Add <b>19 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section.
          </li>
        </ol>
      </page>
      <page
        title="Entertainer"
        group="backgrounds"
        selection="entertainer"
        source="UA-Origins, Pg 12"
      >
        <ol>
          <li>Write in <b>Entertainer</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Acrobatics</b> and <b>Performance</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
              target="_blank"
            >
              <b>Musical Instrument</b> (one of your choice)</a
            >
            and <b>Elvish</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Musician</b> to the <b>FEATURES & TRAITS</b> section, and add
            three more Musical Instruments to the
            <b>PROFICIENCIES & LANGUAGES</b> section.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              After a short or long rest you can play on a Musical instrument
              for which you have proficiency, and give inspiration to your
              allies. The number of allies you can affect is equal to your
              Proficiency bonus.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Costume (2), Steel Mirror, Traveler's Clothes, Perfume, and one
            Musicial Instrument you have proficiency with.
          </li>
          <li>
            Add <b>8 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Farmer"
        group="backgrounds"
        selection="farmer"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>Write in <b>Farmer</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Animal</b> and <b>Nature</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Carpenter's Tools</b> and <b>Halfling</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Tough</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 18.
              During the Hit Point Calculation you will add 2 to your Hit Point
              Maximum
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Carpenter's Tools, Sickle, Healer's Kit, Traveler's Clothes, Iron
            Pot, Shovel
          </li>
          <li>
            Add <b>23 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Gladiator"
        group="backgrounds"
        selection="gladiator"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>Write in <b>Gladiator</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Performance</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Smith's Tools</b> and <b>Orc</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Savage Attacker</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Savage Attacker.</b> When you take the Attack Action and hit a
              target with a Weapon as part of that Action, you can roll the
              Weapon's damage dice twice and use either roll against the target.
              You can use this benefit only once per turn.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Chain, Costume, Healer's Kit, Javelin (6), Smith's Tools, Traveler's
            Clothes
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Guard"
        group="backgrounds"
        selection="guard"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>Write in <b>Guard</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Perception</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >
            and <b>Dwarvish</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Alert</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 16.
              During Initiative calculation, you will add +2 to your Initiative
              modifier. You gain the following benefits:<br />
              <b>Initiative Swap.</b> Immediately after you roll Initiative, you
              can swap your Initiative with the Initiative of one willing ally
              in the same combat. You can't make this swap if you or the ally is
              Incapacitated.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Crossbow Bolts (20), Quiver, Light Crossbow, Hooded Lantern, Manacles,
            Spear, Traveler's Clothes, and a Gaming Set (same as above).
          </li>
          <li>
            Add <b>12 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Guide"
        group="backgrounds"
        selection="guide"
        source="UA-Origins, Pg 13"
      >
        <ol>
          <li>Write in <b>Guide</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Stealth</b> and <b>Survival</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Cartographer's Tools</b> and <b>Giant</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Primal)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Primal Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Primal spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Arrow (20), Shortbow, Quiver, Bedroll, Tent, Cartographer's Tools,
            Traveler's Clothes, Fishing Tackle.
          </li>
          <li>
            Add <b>2 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Hermit"
        group="backgrounds"
        selection="hermit"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>Write in <b>Hermit</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Medicine</b> and <b>Religion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Herbalism Kit</b> and <b>Sylvan</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Primal)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Primal Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Primal spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bedroll, Book (Philosophy), Fishing Tackle, Herbalism Kit, Lamp, Oil
            (3 flasks), Quarterstaff, Traveler's Clothes
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Laborer"
        group="backgrounds"
        selection="laborer"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>Write in <b>Laborer</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Survival</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Mason's Tools</b> and <b>Dwarvish</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Tough</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 18.
              During the Hit Point Calculation you will add 2 to your Hit Point
              Maximum
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bullseye Lantern, Oil (1 flask), Mess Kit, Common Clothes, Handaxe,
            Shovel, Light Hammer, Waterskin, Mason's Tools.
          </li>
          <li>
            Add <b>15 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Noble"
        group="backgrounds"
        selection="noble"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>Write in <b>Noble</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>History</b> and <b>Persuasion</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >
            and <b>Draconic</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Skilled</b> to the <b>FEATURES & TRAITS</b> section, and fill
            any three circles in your <b>SKILLS</b> for proficiency.
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Fine Clothes, Gaming Set (same as above), Perfume, Signet Ring
          </li>
          <li>
            Add <b>24 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Pilgrim"
        group="backgrounds"
        selection="pilgrim"
        source="UA-Origins, Pg 14"
      >
        <ol>
          <li>Write in <b>Pilgrim</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Religion</b> and <b>Survival</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#MusicalInstrument"
              target="_blank"
            >
              <b>Musical Instrument</b> (one of your choice)</a
            >
            and <b>Halfling</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Healer</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Healer.</b> You get the following benefits: <br />
              <b>Battle Medic.</b> If you have a Healer's Kit, you can expend
              one use of it and tend to a creature within 5 feet of you as an
              Action. That creature can expend one of its Hit Dice, and you then
              roll that die. The creature regains a number of Hit Points equal
              to the roll plus your Proficiency Bonus. <br />
              <b>Healing Rerolls.</b> Whenever you roll a die to determine the
              number of Hit Points you restore with a spell or with this feat's
              Battle Medic benefit, you can reroll the die if it rolls a 1,and
              you must use the new roll.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bedroll, Rations (2 days), Healer's Kit, Holy Symbol, Traveler's
            Clothes, a Musical Instrument you have proficiency in.
          </li>
          <li>
            Add <b>16 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Sage"
        group="backgrounds"
        selection="sage"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>Write in <b>Sage</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Arcana</b> and <b>History</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Calligrapher's Supplies</b> and <b>Elvish</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Magic Initiate (Arcana)</b> to the "FEATURES & TRAITS"
            section, and add two cantrips and one 1st-level spell from the
            Arcana Spell list.
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 17.
              The Arcana spell list can be found in UA-Origins, Pg 21. You can
              cast the 1st-level spell once without a spell slot per long rest.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Book (History), Calligrapher's Supplies, Parchment (8 sheets),
            Quarterstaff, Robe
          </li>
          <li>
            Add <b>8 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Sailor"
        group="backgrounds"
        selection="sailor"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>Write in <b>Sailor</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Acrobatics</b> and <b>Perception</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add <b>Navigator's Tools</b> and <b>Primordial</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Tavern Brawler</b> to the "FEATURES & TRAITS" section
            <annotation>
              You can read more details about this feat in UA-Origins, Pg 18.
              You gain benefits to your Unarmed Strike, and can use Furniture as
              weapons.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Dagger, Fishing Tackle, Navigator's Tools, Silk Rope, Traveler's
            Clothes
          </li>
          <li>
            Add <b>10 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Soldier"
        group="backgrounds"
        selection="soldier"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>Write in <b>Soldier</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Athletics</b> and <b>Intimidation</b> in
            the <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >
            and <b>Goblin</b> to the <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Savage Attacker</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Savage Attacker.</b> When you take the Attack Action and hit a
              target with a Weapon as part of that Action, you can roll the
              Weapon's damage dice twice and use either roll against the target.
              You can use this benefit only once per turn.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Arrows (20), Quiver, Shortbow, Spear, Healer's Kit, Gaming Set (same
            as above), Traveler's Clothes
          </li>
          <li>
            Add <b>14 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
      <page
        title="Urchin"
        group="backgrounds"
        selection="urchin"
        source="UA-Origins, Pg 15"
      >
        <ol>
          <li>Write in <b>Urchin</b> for <b>BACKGROUND</b> in the header</li>
          <li>
            Fill in the circles for <b>Insight</b> and <b>Stealth</b> in the
            <b>SKILLS</b> section
            <annotation>
              If you already have proficiency in these two skills, feel free to
              select any two skills, so long as they are thematic.
            </annotation>
          </li>
          <li>
            Add the <b>Thieves' Tools</b> and <b>Common Sign Language</b> to the
            <b>PROFICIENCIES & LANGUAGES</b> section
          </li>
          <li>
            Add <b>Lucky</b> to the <b>FEATURES & TRAITS</b> section
            <annotation>
              <b>Luck Points.</b> You have a number of Luck Points equal to your
              Proficiency Bonus. You can spend the points on the benefits below,
              and you regain your expended Luck Points when you finish a Long
              Rest. <br />
              <b>Advantage.</b> Immediately after you roll a d20 for a d20 Test,
              you can spend 1 Luck Point to give yourself Advantage on the roll.
              <br />
              <b>Disadvantage.</b> When a creature rolls a d20 for an attack
              roll against you, you can spend 1 Luck Point to impose
              Disadvantage on that roll.
            </annotation>
          </li>
          <li>
            Write the following items in the <b>EQUIPMENT</b> section:<br />
            Bedroll, Common Clothes, Dagger (2), a
            <a
              href="https://www.dndbeyond.com/sources/basic-rules/equipment#GamingSet"
              target="_blank"
            >
              <b>Gaming Set</b> (one of your choice)</a
            >, Thieves' Tools, Pouch
          </li>
          <li>
            Add <b>18 GP</b> to your existing Gold Pieces in the
            <b>EQUIPMENT</b> section
          </li>
        </ol>
      </page>
    </>
  `,annotation:Xe,page:qe});((e,t)=>{const a=Le(t);var o;window["tram-space"]={},x("tram-effect-store"),x("tram-effect-queue"),i("tram-hook-key"),pe("tram-observable-store"),Ue("tram-key-store"),K("tram-key-queue"),K("tram-global-key-queue"),Be("tram-mutation-observer"),o=a,$e("tram-mutation-observer").observe(o,{childList:!0,subtree:!0}),((e,t)=>{const i=ge({app:e})`<tram-one><app /></tram-one>`;t.replaceChild(i,t.firstElementChild)})(e,a)})((()=>{Ae({race:"",class:""});return lt`
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
            <a
              href="https://github.com/jrjurman/ua-character-guide/issues"
              target="_blank"
              >https://github.com/jrjurman/ua-character-guide/issues</a
            >
          </p>
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
        <backgrounds-content />
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
              Fill in the large box next to each score the modifier for that
              value
              <fieldset>
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
              </fieldset>
            </li>
            <li>
              Set your <b>INITIATIVE</b> to your DEX modifier
              <annotation>
                If you have the <b>Alert</b> feat, add +2 to this value
              </annotation>
            </li>
            <li>
              Set your "PASSIVE WISDOM (PERCEPTION)" to 10 + WIS Modifier (and
              add +2 if you have proficiency in the Perception skill)
            </li>
            <li>
              Set your "HIT POINT MAXIMUM" and "CURRENT HIT POINTS" based on the
              table below
              <table>
                <thead>
                  <th>Class</th>
                  <th>Hit Points</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Bard, Rogue</td>
                    <td>8 + CON Modifier</td>
                  </tr>
                  <tr>
                    <td>Ranger</td>
                    <td>10 + CON Modifier</td>
                  </tr>
                </tbody>
              </table>
              <annotation>
                If you have the <b>Tough</b> feat, add +2 to this value
              </annotation>
            </li>
            <li>
              Based on the armor you recieved from your class, and relevant
              ability score from that armor, set your <b>ARMOR CLASS</b>
              <fieldset>
                <table>
                  <thead>
                    <th>Armor Name</th>
                    <th>Armor Class (AC)</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Leather</td>
                      <td>11 + DEX Modifier</td>
                    </tr>
                    <tr>
                      <td>Studded Leather</td>
                      <td>12 + DEX Modifier</td>
                    </tr>
                    <tr>
                      <td>Shield</td>
                      <td>+2</td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
            </li>
          </ol>
        </page>
        <page title="Set Spellcasting Details" selection="spellcasting">
          If you have spells as part of your race, class or background, do the
          following on the Spellcasting Sheet
          <ol>
            <li>
              Set your <b>SPELL SAVE DC</b> to 10 + Spellcasting Ability
              Modifier
            </li>
            <li>
              Set your <b>SPELL ATTACK BONUS</b> to 2 + Spellcasting Ability
              Modifier
            </li>
          </ol>
        </page>
      </page-scroller>
    </main>
  `}),"#root");
//# sourceMappingURL=index.47173775.js.map
