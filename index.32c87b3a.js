const e=()=>{if(!window["tram-space"])throw new Error("\n\t\t\tTram-One: app has not started yet, but hook was called. Is it being invoked outside a component function?\n\t\t\thttps://github.com/Tram-One/tram-one/issues/178\n\t\t");return window},t=t=>({setup:r=>{const a=e();return a["tram-space"][r]=t(),a["tram-space"][r]},get:t=>e()["tram-space"][t],set:(t,r)=>{e()["tram-space"][t]=r}}),{setup:r,get:a}=t((()=>({branch:[],branchIndices:{"":0}}))),n=e=>a(e).branch.join("/"),i=e=>{a(e).branchIndices[n(e)]+=1},o=e=>{const t=a(e).branchIndices[n(e)];return`${n(e)}[${t}]`};var s=new WeakMap,l=Symbol("iteration key");function c(e,t,r){var a=t.get(r);a&&a.forEach(e.add,e)}function d(e){e.cleaners&&e.cleaners.forEach(u,e),e.cleaners=[]}function u(e){e.delete(this)}var f=[],h=!1;function g(e,t,r,a){if(e.unobserved)return Reflect.apply(t,r,a);if(-1===f.indexOf(e)){d(e);try{return f.push(e),Reflect.apply(t,r,a)}finally{f.pop()}}}function p(e){var t=f[f.length-1];t&&(b(t,e),function(e,t){var r=t.target,a=t.key;"iterate"===t.type&&(a=l);var n=s.get(r),i=n.get(a);i||(i=new Set,n.set(a,i)),i.has(e)||(i.add(e),e.cleaners.push(i))}(t,e))}function m(e){(function(e){var t=e.target,r=e.key,a=e.type,n=s.get(t),i=new Set;if("clear"===a?n.forEach((function(e,t){c(i,n,t)})):c(i,n,r),"add"===a||"delete"===a||"clear"===a){var o=Array.isArray(t)?"length":l;c(i,n,o)}return i})(e).forEach(y,e)}function y(e){b(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function b(e,t){if(e.debugger&&!h)try{h=!0,e.debugger(t)}finally{h=!1}}function v(){return f.length>0}var S=Symbol("is reaction");function w(e,t){void 0===t&&(t={});var r=e[S]?e:function t(){return g(t,e,this,arguments)};return r.scheduler=t.scheduler,r.debugger=t.debugger,r[S]=!0,t.lazy||r(),r}var k=new WeakMap,A=new WeakMap,E=Object.prototype.hasOwnProperty;function T(e){var t=A.get(e);return v()&&"object"==typeof e&&null!==e?t||W(e):t||e}function C(e,t){var r=e.next;return e.next=function(){var a=r.call(e),n=a.done,i=a.value;return n||(t?i[1]=T(i[1]):i=T(i)),{done:n,value:i}},e}var I={has:function(e){var t=k.get(this),r=Reflect.getPrototypeOf(this);return p({target:t,key:e,type:"has"}),r.has.apply(t,arguments)},get:function(e){var t=k.get(this),r=Reflect.getPrototypeOf(this);return p({target:t,key:e,type:"get"}),T(r.get.apply(t,arguments))},add:function(e){var t=k.get(this),r=Reflect.getPrototypeOf(this),a=r.has.call(t,e),n=r.add.apply(t,arguments);return a||m({target:t,key:e,value:e,type:"add"}),n},set:function(e,t){var r=k.get(this),a=Reflect.getPrototypeOf(this),n=a.has.call(r,e),i=a.get.call(r,e),o=a.set.apply(r,arguments);return n?t!==i&&m({target:r,key:e,value:t,oldValue:i,type:"set"}):m({target:r,key:e,value:t,type:"add"}),o},delete:function(e){var t=k.get(this),r=Reflect.getPrototypeOf(this),a=r.has.call(t,e),n=r.get?r.get.call(t,e):void 0,i=r.delete.apply(t,arguments);return a&&m({target:t,key:e,oldValue:n,type:"delete"}),i},clear:function(){var e=k.get(this),t=Reflect.getPrototypeOf(this),r=0!==e.size,a=e instanceof Map?new Map(e):new Set(e),n=t.clear.apply(e,arguments);return r&&m({target:e,oldTarget:a,type:"clear"}),n},forEach:function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var a=k.get(this),n=Reflect.getPrototypeOf(this);p({target:a,type:"iterate"});var i,o=function(t){for(var r=[],a=arguments.length-1;a-- >0;)r[a]=arguments[a+1];return e.apply(void 0,[T(t)].concat(r))};return(i=n.forEach).call.apply(i,[a,o].concat(t))},keys:function(){var e=k.get(this),t=Reflect.getPrototypeOf(this);return p({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=k.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var r=t.values.apply(e,arguments);return C(r,!1)},entries:function(){var e=k.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var r=t.entries.apply(e,arguments);return C(r,!0)},get size(){var e=k.get(this),t=Reflect.getPrototypeOf(this);return p({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};I[Symbol.iterator]=function(){var e=k.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var r=t[Symbol.iterator].apply(e,arguments);return C(r,e instanceof Map)};var O={get:function(e,t,r){return e=E.call(I,t)?I:e,Reflect.get(e,t,r)}},R="object"==typeof window?window:Function("return this")(),N=new Map([[Map,O],[Set,O],[WeakMap,O],[WeakSet,O],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);var P=Object.prototype.hasOwnProperty,L=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e})));var D={get:function(e,t,r){var a=Reflect.get(e,t,r);if("symbol"==typeof t&&L.has(t))return a;p({target:e,key:t,receiver:r,type:"get"});var n=A.get(a);if(v()&&"object"==typeof a&&null!==a){if(n)return n;var i=Reflect.getOwnPropertyDescriptor(e,t);if(!i||!1!==i.writable||!1!==i.configurable)return W(a)}return n||a},has:function(e,t){var r=Reflect.has(e,t);return p({target:e,key:t,type:"has"}),r},ownKeys:function(e){return p({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,r,a){"object"==typeof r&&null!==r&&(r=k.get(r)||r);var n=P.call(e,t),i=e[t],o=Reflect.set(e,t,r,a);return e!==k.get(a)||(n?r!==i&&m({target:e,key:t,value:r,oldValue:i,receiver:a,type:"set"}):m({target:e,key:t,value:r,receiver:a,type:"add"})),o},deleteProperty:function(e,t){var r=P.call(e,t),a=e[t],n=Reflect.deleteProperty(e,t);return r&&m({target:e,key:t,oldValue:a,type:"delete"}),n}};function W(e){return void 0===e&&(e={}),k.has(e)||"function"==typeof(t=e.constructor)&&t.name in R&&R[t.name]===t&&!N.has(t)?e:A.get(e)||function(e){var t=function(e){return N.get(e.constructor)}(e)||D,r=new Proxy(e,t);return A.set(e,r),k.set(r,e),function(e){s.set(e,new Map)}(e),r}(e);var t}var F=w;const M=(e,t)=>t,x=(e,t)=>{const r=(e=>t=>"tagName"in t&&t.tagName===e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)(t),a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,r),n=[a.currentNode];for(;a.nextNode();)n.push(a.currentNode);return n},U={index:-1,tagName:"",scrollLeft:0,scrollTop:0,selectionStart:null,selectionEnd:null,selectionDirection:void 0};var H=e=>{let t;const r=F((()=>{let r=t,a=U;if(r){a=U;if(r.contains(document.activeElement)){const e=document.activeElement,t=x(r,e.tagName);a.index=t.findIndex((t=>t===e)),a.tagName=e.tagName,a.scrollLeft=e.scrollLeft,a.scrollTop=e.scrollTop,a.selectionStart=e.selectionStart,a.selectionEnd=e.selectionEnd,a.selectionDirection=e.selectionDirection||void 0}const e=document.createElement("div");r.replaceWith(e),e["tram-tag-reaction"]=r["tram-tag-reaction"],e["tram-tag-new-effects"]=r["tram-tag-new-effects"],e["tram-tag-cleanup-effects"]=r["tram-tag-cleanup-effects"],r=e}if(t=e(),r){let e;if(a.index>=0){const r=x(t,a.tagName),i=r.map(M).sort((n=a.index,(e,t)=>Math.abs(e-n)-Math.abs(t-n)))[0];e=r[i];try{void 0!==e.setSelectionRange&&e.setSelectionRange(a.selectionStart,a.selectionEnd,a.selectionDirection)}catch(e){}e.scrollLeft=a.scrollLeft,e.scrollTop=a.scrollTop}t["tram-tag"]=!0,t["tram-tag-reaction"]=r["tram-tag-reaction"],t["tram-tag-new-effects"]=r["tram-tag-new-effects"],t["tram-tag-cleanup-effects"]=r["tram-tag-cleanup-effects"],r.replaceWith(t),e&&e.focus&&e.focus()}var n}));if(void 0===t)throw new Error("\n\t\t\tTram-One: tagResult was not defined after building the tag.\n\t\t\thttps://github.com/Tram-One/tram-one/issues/177\n\t\t");return t["tram-tag-reaction"]=r,t};const{setup:B,get:j,set:q}=t((()=>({}))),$=q,{setup:G,get:X,set:K}=t((()=>[])),V=e=>{const t=X(e);t.splice(0,t.length)},z=K;var _=e=>{const t={...j("tram-effect-queue")},r=[...X("tram-key-queue")];(e=>{const t=j(e);Object.keys(t).forEach((e=>delete t[e]))})("tram-effect-queue"),V("tram-key-queue"),V("tram-global-key-queue");const a=e(),n=j("tram-effect-store"),i=j("tram-effect-queue"),o=a["tram-tag-new-effects"]||[],s=Object.keys(i).filter((e=>!(e in n))).map((e=>i[e])),l=o.concat(s);a["tram-tag-new-effects"]=l;const c=a["tram-tag-store-keys"]||[],d=X("tram-key-queue"),u=c.concat(d);return a["tram-tag-store-keys"]=u,$("tram-effect-queue",t),z("tram-key-queue",r),a},Y={},Q={};const J=e=>"number"==typeof e||"boolean"==typeof e||"function"==typeof e||e instanceof Date||e instanceof RegExp?e.toString():e,Z=e=>!("string"==typeof e&&/^[\n\r\s]+$/.test(e)),ee=(e,t)=>{Array.isArray(t)&&t.map(J).filter(Z).forEach((t=>{if(Array.isArray(t))ee(e,t);else{if("string"==typeof t){if(e.lastChild&&"#text"===e.lastChild.nodeName)return void(e.lastChild.nodeValue+=t);t=document.createTextNode(t)}t&&t.nodeType&&e.appendChild(t)}}))};Q=ee;const te=e=>!/^xmlns($|:)/i.test(e),re=e=>"classname"===e.key.toLowerCase()?{key:"class",value:e.value}:e,ae=e=>"htmlFor"===e.key?{key:"for",value:e.value}:e,ne=e=>(t,r,a)=>{if("!--"===t)return document.createComment(r.comment);const n=e?document.createElementNS(e,t):document.createElement(t);return Object.keys(r).filter(te).filter((e=>t=>Object.prototype.hasOwnProperty.call(e,t))(r)).map((e=>t=>({key:t,value:e[t]}))(r)).map(re).map(ae).filter((e=>t=>"on"!==t.key.slice(0,2)||((e,t,r)=>{e[t]=r,e.events=e.events?e.events.concat(t):[t]})(e,t.key,t.value))(n)).filter((e=>t=>e.setAttributeNS(null,t.key,t.value))(n)),Q(n,a),n};(Y=ne).html=ne(),Y.svg=ne("http://www.w3.org/2000/svg");var ie;ie=function(e,t,r){const a=function(e,a,n){const i=r[e];return i?i(a,n):t(e,a,n)},n=e(a);return n.h=a,n};var oe,se={};se=function(e){return function(t,r,a){for(var n in r)n in le&&(r[le[n]]=r[n],delete r[n]);return e(t,r,a)}};var le={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};oe=function(e,t){t||(t={comments:!0});const r=t.concat||function(e,t){return String(e)+String(t)},a=e=>{switch(typeof e){case"function":case"string":case"object":case"undefined":return e;default:return r("",e)}};return!1!==t.attrToProp&&(e=se(e)),function(n){for(var i=1,o="",s=arguments.length,l=[],c=0;c<n.length;c++)if(c<s-1){var d=arguments[c+1],u=k(n[c]),f=i;switch(f){case 13:o+=d,d="";case 10:case 9:case 7:f=8;break;case 4:f=5}u.push([0,f,d]),l.push.apply(l,u)}else l.push.apply(l,k(n[c]));var h=[null,{},[]],g=[[h,-1]];for(c=0;c<l.length;c++){var p=g[g.length-1][0],m=(u=l[c])[0];if(2===m&&/^\//.test(u[1])){var y=g[g.length-1][1];g.length>1&&(g.pop(),g[g.length-1][0][2][y]=e(p[0],p[1],p[2].length?p[2]:void 0))}else if(2===m){var b=[u[1],{},[]];p[2].push(b),g.push([b,p[2].length-1])}else if(5===m||0===m&&5===u[1]){for(var v,S="";c<l.length;c++)if(5===l[c][0])S=r(S,l[c][1]);else{if(0!==l[c][0]||5!==l[c][1])break;if("object"!=typeof l[c][2]||S)S=r(S,l[c][2]);else for(v in l[c][2])l[c][2].hasOwnProperty(v)&&!p[1][v]&&(p[1][v]=l[c][2][v])}11===l[c][0]&&c++;for(var w=c;c<l.length;c++)if(8===l[c][0]||5===l[c][0])p[1][S]?""===l[c][1]||(p[1][S]=r(p[1][S],l[c][1])):p[1][S]=a(l[c][1]);else{if(0!==l[c][0]||8!==l[c][1]&&5!==l[c][1]){!S.length||p[1][S]||c!==w||3!==l[c][0]&&12!==l[c][0]||(p[1][S]=S.toLowerCase()),3===l[c][0]&&c--;break}p[1][S]?""===l[c][2]||(p[1][S]=r(p[1][S],l[c][2])):p[1][S]=a(l[c][2])}}else if(14===m){y=g[g.length-1][1];g.pop(),g[g.length-1][0][2][y]=e(p[0],p[1],p[2].length?p[2]:void 0)}else if(0===m&&1===u[1])void 0===u[2]||null===u[2]?u[2]="":u[2]||(u[2]=r("",u[2])),Array.isArray(u[2][0])?p[2].push.apply(p[2],u[2]):p[2].push(u[2]);else if(1===m)p[2].push(u[1]);else if(11!==m&&12!==m&&3!==m)throw new Error("unhandled: "+m)}if(h[2].length>1&&/^\s*$/.test(h[2][0])&&h[2].shift(),h[2].length>2||2===h[2].length&&/\S/.test(h[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(h[2][0])&&"string"==typeof h[2][0][0]&&Array.isArray(h[2][0][2])&&(h[2][0]=e(h[2][0][0],h[2][0][1],h[2][0][2])),h[2][0];function k(e){var r=[];7===i&&(i=4);for(var a=0;a<e.length;a++){var n=e.charAt(a);if(13===i){if(!/-$/.test(o)||"-"!==n){o+=n;continue}t.comments&&r.push([8,o.substr(0,o.length-1)],[3]),o="",i=1}1===i&&"<"===n?(o.length&&r.push([1,o]),o="",i=2):">"===n&&"/"===e.charAt(a-1)||">"===n&&"-"===e.charAt(a-1)&&"-"===e.charAt(a-2)?(r.push([14]),o="",i=1):">"!==n||ce(i)||13===i?2===i&&/^!--$/.test(o)?(t.comments&&r.push([2,o],[5,"comment"],[11]),o=n,i=13):1===i?o+=n:2===i&&"/"===n&&o.length?(r.push([2,o]),o="",i=1):2===i&&/\s/.test(n)?(r.push([2,o]),o="",i=4):2===i?o+=n:4===i&&/[^\s"'=/]/.test(n)?(i=5,o=n):4===i&&/\s/.test(n)?(o.length&&r.push([5,o]),r.push([12])):5===i&&/\s/.test(n)?(r.push([5,o]),o="",i=6):5===i&&"="===n?(r.push([5,o],[11]),o="",i=7):5===i?o+=n:6!==i&&4!==i||"="!==n?6!==i&&4!==i||/\s/.test(n)?7===i&&'"'===n?i=10:7===i&&"'"===n?i=9:10===i&&'"'===n||9===i&&"'"===n?(r.push([8,o],[12]),o="",i=4):7!==i||/\s/.test(n)?8===i&&/\s/.test(n)?(r.push([8,o],[12]),o="",i=4):8!==i&&9!==i&&10!==i||(o+=n):(i=8,a--):(r.push([12]),/[\w-]/.test(n)?(o+=n,i=5):i=4):(r.push([11]),i=7):(2===i?r.push([2,o]):5===i?r.push([5,o]):8===i&&o.length&&r.push([8,o]),r.push([3]),o="",i=1)}if(o.length)switch(i){case 1:r.push([1,o]),o="";break;case 8:case 10:case 9:r.push([8,o]),o=""}return 5===i&&(r.push([5,o]),o=""),r}}};const ce=e=>9===e||10===e,de=(e,t={})=>{const r=Object.keys(t).reduce(((e,r)=>{const o=t[r];return{...e,[r]:(e,t)=>{const s=JSON.stringify(e);((e,t)=>{const r=a(e);r.branch.push(t),r.branchIndices[n(e)]||(r.branchIndices[n(e)]=0)})("tram-hook-key",`${r}[${s}]`),i("tram-hook-key");const l=(e=>{const t=a(e);return{branch:[...t.branch],branchIndices:{...t.branchIndices}}})("tram-hook-key"),c=()=>{((e,t)=>{const r=a(e),n=r.branchIndices;r.branch=[...t.branch],Object.keys(r.branchIndices).forEach((e=>{n[e]=t.branchIndices[e]||0}))})("tram-hook-key",l);const r=t?.map((e=>e instanceof Element?e:`${e}`));return o(e,r)},d=H((()=>_(c)));return a("tram-hook-key").branch.pop(),d["tram-tag"]=!0,d["tram-tag-new-effects"]=d["tram-tag-new-effects"]||[],d["tram-tag-cleanup-effects"]=[],d}}}),{});return ie(oe,Y(e),r)};var ue=e=>{const t=j("tram-effect-queue"),r=o("tram-hook-key");i("tram-hook-key");t[`${r}()`]=e};const fe=de(null),he=(e,t)=>(ue((e=>{(t||[]).forEach((t=>{"string"==typeof t?e.insertAdjacentText("beforebegin",t):e.insertAdjacentElement("beforebegin",t)})),e.remove()})),fe`<tram-fragment>${t}</tram-fragment>`),ge=e=>de(null,{"":he,...e});var pe=W;const{setup:me,get:ye}=t((()=>pe({})));var be,ve,Se,we,ke,Ae={};we=function(){return function(e,t){var r={},a=decodeURIComponent;return function(){for(var e in t)s(e,t[e])}(),function(t,o){var s=function(e){var t=function(e){return~e.indexOf("/?")&&(e=e.replace("/?","?")),"/"==e[0]&&(e=e.slice(1)),"/"==e[e.length-1]&&(e=e.slice(0,-1)),e}(e).split("?"),o=~e.indexOf("%")?a:n;return function(e,t,r){if(e&&t.cb)for(var a=e.indexOf("#"),n=(a<0?e:e.slice(0,a)).split("&"),i=0;i<n.length;++i){var o=n[i].split("=");t.params[o[0]]=r(o[1])}return t}(t[1],i(t[0].split("/"),o,0,r,[])||{},o)}(t);return(s.cb||e)(s.params,o,t)};function n(e){return e}function i(e,t,r,a,n){if(a){if(r>=e.length){var s=a["@"];return s&&{cb:s,params:n.reduce((function(e,t){return e[t[0]]=t[1],e}),{})}}var l=t(e[r]),c=n.length;return i(e,t,r+1,a[l.toLowerCase()],n)||o(e,t,r+1,a,":",l,n,c)||o(e,t,e.length,a,"*",e.slice(r).join("/"),n,c)}}function o(e,t,r,a,n,o,s,l){s.length=l;var c=a[n];return c&&s.push([c["~"],o]),i(e,t,r,c,s)}function s(e,t){for(var a=e.split("/"),n=r,i=+("/"===e[0]);i<a.length;++i){var o=a[i],s=":"==o[0]?":":"*"==o[0]?"*":o.toLowerCase();n=n[s]||(n[s]={}),(":"==s||"*"==s)&&(n["~"]=o.slice(1))}n["@"]=t}}},(ke=(Se=Ae)&&Se.define)&&ke.amd?ke("rlite",[],we):Ae?Ae=we():Se.Rlite=we();const Ee=()=>({matches:!1}),Te=e=>({matches:!0,...e});be=ve=e=>(t="*")=>Ae(Ee,{[t]:Te})(e());var Ce={};Ce=ve((()=>{const e=window.location.href.replace(window.location.origin,""),[t,r]=e.split("#"),a=t.includes("?");return`${t}${void 0!==r?a?`&hash=${r}`:`?hash=${r}`:""}`})),Ce.setupUrlParams=be,Ce.useUrlParams=Ce;var Ie=e=>{const t=(e=>{if("string"==typeof e){const t=document.querySelector(e);if(null===t)throw new Error("\n\t\t\t\tTram-One: could not find target, is the element on the page yet?\n\t\t\t\thttps://github.com/Tram-One/tram-one/issues/179\n\t\t\t");return t}return e})(e);if(!t.firstElementChild){const e=document.createElement("div");t.appendChild(e)}return t};const{setup:Oe,get:Re,set:Ne}=t((()=>({})));var Pe=w,Le=function(e){e.unobserved||(e.unobserved=!0,d(e)),"object"==typeof e.scheduler&&e.scheduler.delete(e)};const De=e=>{if(!("tram-tag"in e))return;e["tram-tag-store-keys"]&&e["tram-tag-store-keys"].forEach((e=>{((e,t)=>{const r=Re(e);r[t]=r[t]+1||1})("tram-key-store",e)}));e["tram-tag-new-effects"]&&(e["tram-tag-cleanup-effects"]=[],e["tram-tag-new-effects"].forEach((t=>{let r;const a=Pe((()=>{"function"==typeof r&&r(),r=t(e)}));e["tram-tag-cleanup-effects"].push((()=>{"function"==typeof r&&r(),Le(a)}))})),e["tram-tag-new-effects"]=[])},We=e=>{e.forEach((e=>{var t;t=e,Re("tram-key-store")[t]--}))},Fe=e=>{"tram-tag"in e&&(Le(e["tram-tag-reaction"]),e["tram-tag-cleanup-effects"].forEach((e=>e())),We(e["tram-tag-store-keys"]))},Me=e=>"tram-tag"in e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP,xe=e=>{const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,Me),r=[];for(;t.nextNode();)r.push(t.currentNode);return r},{setup:Ue,get:He}=t((()=>new MutationObserver((e=>{e.flatMap((e=>[...e.removedNodes])).flatMap(xe).forEach(Fe);e.flatMap((e=>[...e.addedNodes])).flatMap(xe).forEach(De),(()=>{const e=ye("tram-observable-store"),t=Re("tram-key-store");Object.entries(t).forEach((([r,a])=>{0===a&&(delete e[r],delete t[r])}))})()}))));const Be=ge();var je=({id:e,title:t},r)=>Be`
    <h2>
      <input
        class="selection-card"
        type="radio"
        id=${e}
        name="selection"
        value=${e}
      />
      <label for=${e}>${t}</label>
    </h2>
  `;const qe=ge();var $e=()=>qe` <section class="blank-page" /> `;const Ge=ge();var Xe=({title:e,selection:t},r)=>Ge`
    <section class="page" page-color="grey" page-selection=${t}>
      <h2>${e}</h2>
      ${r}
    </section>
  `;const Ke=ge({page:Xe,"blank-page":$e});const Ve=ge({"selection-card":je,"page-scroller":(e,t)=>(ue((e=>{const t=e.querySelector(".page-scroller-flex");t.addEventListener("focusin",(()=>(e=>{const t=e.scrollLeft,r=document.querySelector(".page:focus-within");e.scrollLeft=0;const a=r.offsetLeft-window.innerWidth/4,n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({left:t}),e.scrollTo({left:a,behavior:n?"auto":"smooth"})})(t)))})),Ke` <section class="page-scroller">
    <section class="page-scroller-flex">${t} <blank-page /></section>
  </section>`),page:Xe});((e,t)=>{const a=Ie(t);var n;window["tram-space"]={},B("tram-effect-store"),B("tram-effect-queue"),r("tram-hook-key"),me("tram-observable-store"),Oe("tram-key-store"),G("tram-key-queue"),G("tram-global-key-queue"),Ue("tram-mutation-observer"),n=a,He("tram-mutation-observer").observe(n,{childList:!0,subtree:!0}),((e,t)=>{const r=ge({app:e})`<tram-one><app /></tram-one>`;t.replaceChild(r,t.firstElementChild)})(e,a)})((()=>Ve`
    <main class="app">
      <page-scroller>
        <page title="Character Guide" selection="character-guide">
          Use this web-app to guide you through creating a D&D Character. This
          includes the latest playtest rules for One D&D.
        </page>
        <page title="Choose a Race" selection="race">
          Details can be found in the Unearthed Arcana - Origins (page 3-10)
          <ol>
            <li>Write your race in the "RACE" field in the header</li>
            <li>
              Write your movement speed in the "SPEED" box
              <i>(this should be 30ft, unless otherwise stated)</i>
            </li>
            <li>
              Write special traits in the "FEATURES & TRAITS" box
              <i
                >(while these are listed below, be sure to check what they do
                and how they might affect other sections of the character
                sheet)</i
              >
            </li>
          </ol>
          <fieldset>
            <legend>Races</legend>
            <table>
              <tr>
                <th>Race</th>
                <th>Special Traits</th>
              </tr>
              <tr>
                <td><b>Human</b></td>
                <td>Resourceful, Skillful, Versatile</td>
              </tr>
              <tr>
                <td><b>Ardling</b></td>
                <td>
                  Angelic Flight, Celestial Legacy, Damage Resistance (Radiant)
                </td>
              </tr>
              <tr>
                <td><b>Dragonborn</b></td>
                <td>
                  Draconic Ancestry, Breath Weapon, Damage Resistance,
                  Darkvision, Draconic Language
                </td>
              </tr>
              <tr>
                <td><b>Dwarf</b></td>
                <td>
                  Darkvision, Dwarven Resilience, Forge Wise, Stonecunning
                </td>
              </tr>
              <tr>
                <td><b>Elf</b></td>
                <td>
                  Darkvision, Elven Lineage, Fey Ancestry, Keen Senses, Trance
                </td>
              </tr>
              <tr>
                <td><b>Gnome</b></td>
                <td>Darkvision, Gnomish Cunning, Gnomish Lineage</td>
              </tr>
              <tr>
                <td><b>Halfling</b></td>
                <td>Brave, Halfling Nimbleness, Luck, Naturally Stealthy</td>
              </tr>
              <tr>
                <td><b>Orc</b></td>
                <td>
                  Adrenaline Rush, Darkvision, Powerful Build, Relentless
                  Endurance
                </td>
              </tr>
              <tr>
                <td><b>Tiefling</b></td>
                <td>Darkvision, Fiendish Legacy, Otherwordly Presence</td>
              </tr>
            </table>
          </fieldset>
        </page>
        <page title="Choose a Class" selection="class">
          Read the Classes in the PHB (page XXX)
          <ol>
            <li>
              Set your "HIT DICE" to whatever value dice roll for your class
              write "1 of 1" for your "Total"
              <i>(Table Below)</i>
            </li>
            <li>
              Write your armor, weapon, and tool proficiencies in the bottom
              left box under "OTHER PROFICIENCIES & LANGUAGES"
              <i>(Table Below)</i>
            </li>
            <li>
              Mark your 2 chosen skill proficiencies by filling in the circle in
              the "SKILLS" box
            </li>
            <li>
              Mark your 2 Saving Throw Proficiencies by filling in the circles
              in the "SAVING THROWS" box <i>(Table Below)</i>
            </li>
            <li>
              Select your starting equipment and add any weapons in "ATTACKS &
              SPELLCASTING" (Ignore ATK BONUS for now)
            </li>
            <li>Add any 1st level features to the "FEATURES & TRAITS" box</li>
            <li>
              If you get spellcasting as part of your 1st level features, add
              damage spells to the "ATTACKS & SPELLCASTING" section (Ignore ATK
              BONUS for now), and list spells in the dedicated Spellcasting
              sheet
            </li>
          </ol>

          <fieldset>
            <legend>Classes</legend>
            <table>
              <tr>
                <th>Class</th>
                <th>Hit Dice</th>
                <th>Saving Throw Proficiencies</th>
                <th>Armor & Weapon Proficiences</th>
              </tr>
              <tr>
                <td><b>Barbarian</b></td>
                <td>1d12</td>
                <td>STR & CON</td>
                <td>
                  Light and medium armor, shields, simple and martial weapons
                </td>
              </tr>

              <tr>
                <td><b>Bard</b></td>
                <td>1d8</td>
                <td>DEX & CHA</td>
                <td>
                  Light armor, simple weapons, hand crossbows, longswords,
                  rapiers, shortswords
                </td>
              </tr>
              <tr>
                <td><b>Cleric</b></td>
                <td>1d8</td>
                <td>WIS & CHA</td>
                <td>Light and medium armor, shields, simple weapons</td>
              </tr>
              <tr>
                <td><b>Druid</b></td>
                <td>1d8</td>
                <td>INT & WIS</td>
                <td>
                  Light and medium armor (nonmetal), shields (nonmetal), clubs,
                  daggers, darts, javelins, maces, quarterstaffs, scimitars,
                  sickles, slings, spears
                </td>
              </tr>
              <tr>
                <td><b>Fighter</b></td>
                <td>1d10</td>
                <td>STR & CON</td>
                <td>All armor, shields, simple and martial weapons</td>
              </tr>
              <tr>
                <td><b>Monk</b></td>
                <td>1d8</td>
                <td>STR & DEX</td>
                <td>Simple weapons, shortswords</td>
              </tr>
              <tr>
                <td><b>Palidin</b></td>
                <td>1d10</td>
                <td>WIS & CHA</td>
                <td>All armor, shields, simmple and martial weapons</td>
              </tr>
              <tr>
                <td><b>Ranger</b></td>
                <td>1d10</td>
                <td>STR & DEX</td>
                <td>
                  Light and medium armor, shields, simple and martial weapons
                </td>
              </tr>
              <tr>
                <td><b>Rogue</b></td>
                <td>1d8</td>
                <td>DEX & INT</td>
                <td>
                  Light armor, simple weapons, hand crossbows, longswords,
                  rapiers, shortswords
                </td>
              </tr>
              <tr>
                <td><b>Sorcerer</b></td>
                <td>1d6</td>
                <td>CON & CHA</td>
                <td>Daggers, darts, sligngs, quarterstaffs, light crossbows</td>
              </tr>
              <tr>
                <td><b>Warlock</b></td>
                <td>1d8</td>
                <td>WIS & CHA</td>
                <td>Light armor, simple weapons</td>
              </tr>
              <tr>
                <td><b>Wizard</b></td>
                <td>1d6</td>
                <td>INT & WIS</td>
                <td>Daggers, darts, slings, quarterstaffs, light crossbows</td>
              </tr>
            </table>
          </fieldset>
        </page>
        <page title="Choose a Background" selection="background">
          Read the UA Origins (page 11-15) Ignore Ability Scores for now
          <ol>
            <li>Mark the 2 skill proficiencies in the "SKILLS" section</li>
            <li>
              Add the tool and language proficiencies in the "OTHER
              PROFICIENCIES & LANGUAGES" section
            </li>
            <li>Add the Feat in the "FEATURES & TRAITS" box</li>
            <li>Write the equipment in the "EQUIPMENT" section</li>
            <li>Add any additional GP to the "EQUIPMENT" section</li>
          </ol>
        </page>
        <page title="Add a Language" selection="language">
          Your character should start with Common, a language provided by the
          character background, and an additional starting language listed below
          (UA Origins, pg 16)
          <fieldset>
            <legend>Standard Languages</legend>
            <li>Common</li>
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
            <li>Druidic</li>
            <li>Infernal</li>
            <li>
              Primordial (includes the Aquan, Auran, Ignan, and Terran dialects)
            </li>
            <li>Sylvan</li>
            <li>Thieves' Cant</li>
            <li>Undercommon</li>
          </fieldset>
        </page>
        <page title="Set Stat Blocks" selection="stat-block">
          Set your stats using the standard array - 15, 14, 13, 12, 10, 8
          <p style="font-size: small">
            <i>
              Look at the Class Priorities section below for recommendation as
              far as distrubuting stats in the standard array
            </i>
          </p>
          <ol>
            <li>
              Add an additional +2 and +1 to any two stats based on your
              background
              <ul>
                <li>You may choose any stats, as long as they are thematic</li>
                <li>
                  <i>
                    Note: you benefit from even number values, so use these to
                    get to 16, 14, etc
                  </i>
                </li>
              </ul>
            </li>
            <li>
              Set Proficiency Modifier
              <i>
                (All level 1 characters, regardless of class or race, get a +2
                proficiency bonus)
              </i>
            </li>
            <li>
              Based on your class, set your "HIT POINTS" based on a starting
              value + CON modifier
            </li>
            <li>
              Based on the armor you recieved from your class, and relevant
              stats from that armor, set your "ARMOR CLASS"
            </li>
            <li>Set your "INITIATIVE" to your DEX modifier</li>
            <li>
              Set your "PASSIVE WISDOM (PERCEPTION)" to 10 + Perception skill
              modifier
            </li>
          </ol>
          <fieldset>
            <legend>Class Priorities</legend>
            <li>Barbarian: STR, CON, DEX</li>
            <li>Bard: CHA, DEX</li>
            <li>Cleric: WIS, STR or CON</li>
            <li>Druid: WIS, CON</li>
            <li>Fighter: STR (or DEX for ranged weapons), CON</li>
            <li>Monk: DEX, WIS</li>
            <li>Paladin: STR, CHA</li>
            <li>Ranger: DEX, WIS</li>
            <li>Rogue: DEX, INT or CHA</li>
            <li>Sorcerer: CHA, CON</li>
            <li>Warlock: CHA, CON</li>
            <li>Wizard: INT, CON or DEX</li>
          </fieldset>
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
            <p style="font-size:small">
              <i>
                If you got spellcasting from "MAGIC INITIATE" feat, choose
                either INT, WIS, or CHA
              </i>
            </p>
          </fieldset>
        </page>
        <page title="Add Unarmed Strike" selection="unarmed-strike">
          Add Unarmed Strike as an option in the "ATTACKS & SPELLCASTING"
          section. For the damage, write 1 + your STR Mod "Bludgeoning".

          <i>
            Note: On a successful stike, you may alternatively grapple or shove
            instead of damaging with Unarmed Strike, see UA Origins - page 20.
          </i>
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
  `),"#root");
//# sourceMappingURL=index.32c87b3a.js.map
