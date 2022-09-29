const e=()=>{if(!window["tram-space"])throw new Error("\n\t\t\tTram-One: app has not started yet, but hook was called. Is it being invoked outside a component function?\n\t\t\thttps://github.com/Tram-One/tram-one/issues/178\n\t\t");return window},t=t=>({setup:r=>{const a=e();return a["tram-space"][r]=t(),a["tram-space"][r]},get:t=>e()["tram-space"][t],set:(t,r)=>{e()["tram-space"][t]=r}}),{setup:r,get:a}=t((()=>({branch:[],branchIndices:{"":0}}))),n=e=>a(e).branch.join("/"),i=e=>{a(e).branchIndices[n(e)]+=1},o=e=>{const t=a(e).branchIndices[n(e)];return`${n(e)}[${t}]`};var l=new WeakMap,s=Symbol("iteration key");function c(e,t,r){var a=t.get(r);a&&a.forEach(e.add,e)}function u(e){e.cleaners&&e.cleaners.forEach(d,e),e.cleaners=[]}function d(e){e.delete(this)}var f=[],h=!1;function g(e,t,r,a){if(e.unobserved)return Reflect.apply(t,r,a);if(-1===f.indexOf(e)){u(e);try{return f.push(e),Reflect.apply(t,r,a)}finally{f.pop()}}}function p(e){var t=f[f.length-1];t&&(b(t,e),function(e,t){var r=t.target,a=t.key;"iterate"===t.type&&(a=s);var n=l.get(r),i=n.get(a);i||(i=new Set,n.set(a,i)),i.has(e)||(i.add(e),e.cleaners.push(i))}(t,e))}function y(e){(function(e){var t=e.target,r=e.key,a=e.type,n=l.get(t),i=new Set;if("clear"===a?n.forEach((function(e,t){c(i,n,t)})):c(i,n,r),"add"===a||"delete"===a||"clear"===a){var o=Array.isArray(t)?"length":s;c(i,n,o)}return i})(e).forEach(m,e)}function m(e){b(e,this),"function"==typeof e.scheduler?e.scheduler(e):"object"==typeof e.scheduler?e.scheduler.add(e):e()}function b(e,t){if(e.debugger&&!h)try{h=!0,e.debugger(t)}finally{h=!1}}function v(){return f.length>0}var w=Symbol("is reaction");function k(e,t){void 0===t&&(t={});var r=e[w]?e:function t(){return g(t,e,this,arguments)};return r.scheduler=t.scheduler,r.debugger=t.debugger,r[w]=!0,t.lazy||r(),r}var S=new WeakMap,A=new WeakMap,E=Object.prototype.hasOwnProperty;function T(e){var t=A.get(e);return v()&&"object"==typeof e&&null!==e?t||B(e):t||e}function C(e,t){var r=e.next;return e.next=function(){var a=r.call(e),n=a.done,i=a.value;return n||(t?i[1]=T(i[1]):i=T(i)),{done:n,value:i}},e}var I={has:function(e){var t=S.get(this),r=Reflect.getPrototypeOf(this);return p({target:t,key:e,type:"has"}),r.has.apply(t,arguments)},get:function(e){var t=S.get(this),r=Reflect.getPrototypeOf(this);return p({target:t,key:e,type:"get"}),T(r.get.apply(t,arguments))},add:function(e){var t=S.get(this),r=Reflect.getPrototypeOf(this),a=r.has.call(t,e),n=r.add.apply(t,arguments);return a||y({target:t,key:e,value:e,type:"add"}),n},set:function(e,t){var r=S.get(this),a=Reflect.getPrototypeOf(this),n=a.has.call(r,e),i=a.get.call(r,e),o=a.set.apply(r,arguments);return n?t!==i&&y({target:r,key:e,value:t,oldValue:i,type:"set"}):y({target:r,key:e,value:t,type:"add"}),o},delete:function(e){var t=S.get(this),r=Reflect.getPrototypeOf(this),a=r.has.call(t,e),n=r.get?r.get.call(t,e):void 0,i=r.delete.apply(t,arguments);return a&&y({target:t,key:e,oldValue:n,type:"delete"}),i},clear:function(){var e=S.get(this),t=Reflect.getPrototypeOf(this),r=0!==e.size,a=e instanceof Map?new Map(e):new Set(e),n=t.clear.apply(e,arguments);return r&&y({target:e,oldTarget:a,type:"clear"}),n},forEach:function(e){for(var t=[],r=arguments.length-1;r-- >0;)t[r]=arguments[r+1];var a=S.get(this),n=Reflect.getPrototypeOf(this);p({target:a,type:"iterate"});var i,o=function(t){for(var r=[],a=arguments.length-1;a-- >0;)r[a]=arguments[a+1];return e.apply(void 0,[T(t)].concat(r))};return(i=n.forEach).call.apply(i,[a,o].concat(t))},keys:function(){var e=S.get(this),t=Reflect.getPrototypeOf(this);return p({target:e,type:"iterate"}),t.keys.apply(e,arguments)},values:function(){var e=S.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var r=t.values.apply(e,arguments);return C(r,!1)},entries:function(){var e=S.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var r=t.entries.apply(e,arguments);return C(r,!0)},get size(){var e=S.get(this),t=Reflect.getPrototypeOf(this);return p({target:e,type:"iterate"}),Reflect.get(t,"size",e)}};I[Symbol.iterator]=function(){var e=S.get(this),t=Reflect.getPrototypeOf(this);p({target:e,type:"iterate"});var r=t[Symbol.iterator].apply(e,arguments);return C(r,e instanceof Map)};var R={get:function(e,t,r){return e=E.call(I,t)?I:e,Reflect.get(e,t,r)}},O="object"==typeof window?window:Function("return this")(),P=new Map([[Map,R],[Set,R],[WeakMap,R],[WeakSet,R],[Object,!1],[Array,!1],[Int8Array,!1],[Uint8Array,!1],[Uint8ClampedArray,!1],[Int16Array,!1],[Uint16Array,!1],[Int32Array,!1],[Uint32Array,!1],[Float32Array,!1],[Float64Array,!1]]);var N=Object.prototype.hasOwnProperty,D=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e})));var L={get:function(e,t,r){var a=Reflect.get(e,t,r);if("symbol"==typeof t&&D.has(t))return a;p({target:e,key:t,receiver:r,type:"get"});var n=A.get(a);if(v()&&"object"==typeof a&&null!==a){if(n)return n;var i=Reflect.getOwnPropertyDescriptor(e,t);if(!i||!1!==i.writable||!1!==i.configurable)return B(a)}return n||a},has:function(e,t){var r=Reflect.has(e,t);return p({target:e,key:t,type:"has"}),r},ownKeys:function(e){return p({target:e,type:"iterate"}),Reflect.ownKeys(e)},set:function(e,t,r,a){"object"==typeof r&&null!==r&&(r=S.get(r)||r);var n=N.call(e,t),i=e[t],o=Reflect.set(e,t,r,a);return e!==S.get(a)||(n?r!==i&&y({target:e,key:t,value:r,oldValue:i,receiver:a,type:"set"}):y({target:e,key:t,value:r,receiver:a,type:"add"})),o},deleteProperty:function(e,t){var r=N.call(e,t),a=e[t],n=Reflect.deleteProperty(e,t);return r&&y({target:e,key:t,oldValue:a,type:"delete"}),n}};function B(e){return void 0===e&&(e={}),S.has(e)||"function"==typeof(t=e.constructor)&&t.name in O&&O[t.name]===t&&!P.has(t)?e:A.get(e)||function(e){var t=function(e){return P.get(e.constructor)}(e)||L,r=new Proxy(e,t);return A.set(e,r),S.set(r,e),function(e){l.set(e,new Map)}(e),r}(e);var t}var M=k;const F=(e,t)=>t,W=(e,t)=>{const r=(e=>t=>"tagName"in t&&t.tagName===e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)(t),a=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,r),n=[a.currentNode];for(;a.nextNode();)n.push(a.currentNode);return n},H={index:-1,tagName:"",scrollLeft:0,scrollTop:0,selectionStart:null,selectionEnd:null,selectionDirection:void 0};var U=e=>{let t;const r=M((()=>{let r=t,a=H;if(r){a=H;if(r.contains(document.activeElement)){const e=document.activeElement,t=W(r,e.tagName);a.index=t.findIndex((t=>t===e)),a.tagName=e.tagName,a.scrollLeft=e.scrollLeft,a.scrollTop=e.scrollTop,a.selectionStart=e.selectionStart,a.selectionEnd=e.selectionEnd,a.selectionDirection=e.selectionDirection||void 0}const e=document.createElement("div");r.replaceWith(e),e["tram-tag-reaction"]=r["tram-tag-reaction"],e["tram-tag-new-effects"]=r["tram-tag-new-effects"],e["tram-tag-cleanup-effects"]=r["tram-tag-cleanup-effects"],r=e}if(t=e(),r){let e;if(a.index>=0){const r=W(t,a.tagName),i=r.map(F).sort((n=a.index,(e,t)=>Math.abs(e-n)-Math.abs(t-n)))[0];e=r[i];try{void 0!==e.setSelectionRange&&e.setSelectionRange(a.selectionStart,a.selectionEnd,a.selectionDirection)}catch(e){}e.scrollLeft=a.scrollLeft,e.scrollTop=a.scrollTop}t["tram-tag"]=!0,t["tram-tag-reaction"]=r["tram-tag-reaction"],t["tram-tag-new-effects"]=r["tram-tag-new-effects"],t["tram-tag-cleanup-effects"]=r["tram-tag-cleanup-effects"],r.replaceWith(t),e&&e.focus&&e.focus()}var n}));if(void 0===t)throw new Error("\n\t\t\tTram-One: tagResult was not defined after building the tag.\n\t\t\thttps://github.com/Tram-One/tram-one/issues/177\n\t\t");return t["tram-tag-reaction"]=r,t};const{setup:x,get:$,set:q}=t((()=>({}))),j=q,{setup:_,get:G,set:K}=t((()=>[])),V=e=>{const t=G(e);t.splice(0,t.length)},X=K;var z=e=>{const t={...$("tram-effect-queue")},r=[...G("tram-key-queue")];(e=>{const t=$(e);Object.keys(t).forEach((e=>delete t[e]))})("tram-effect-queue"),V("tram-key-queue"),V("tram-global-key-queue");const a=e(),n=$("tram-effect-store"),i=$("tram-effect-queue"),o=a["tram-tag-new-effects"]||[],l=Object.keys(i).filter((e=>!(e in n))).map((e=>i[e])),s=o.concat(l);a["tram-tag-new-effects"]=s;const c=a["tram-tag-store-keys"]||[],u=G("tram-key-queue"),d=c.concat(u);return a["tram-tag-store-keys"]=d,j("tram-effect-queue",t),X("tram-key-queue",r),a},Y={},Q={};const J=e=>"number"==typeof e||"boolean"==typeof e||"function"==typeof e||e instanceof Date||e instanceof RegExp?e.toString():e,Z=e=>!("string"==typeof e&&/^[\n\r\s]+$/.test(e)),ee=(e,t)=>{Array.isArray(t)&&t.map(J).filter(Z).forEach((t=>{if(Array.isArray(t))ee(e,t);else{if("string"==typeof t){if(e.lastChild&&"#text"===e.lastChild.nodeName)return void(e.lastChild.nodeValue+=t);t=document.createTextNode(t)}t&&t.nodeType&&e.appendChild(t)}}))};Q=ee;const te=e=>!/^xmlns($|:)/i.test(e),re=e=>"classname"===e.key.toLowerCase()?{key:"class",value:e.value}:e,ae=e=>"htmlFor"===e.key?{key:"for",value:e.value}:e,ne=e=>(t,r,a)=>{if("!--"===t)return document.createComment(r.comment);const n=e?document.createElementNS(e,t):document.createElement(t);return Object.keys(r).filter(te).filter((e=>t=>Object.prototype.hasOwnProperty.call(e,t))(r)).map((e=>t=>({key:t,value:e[t]}))(r)).map(re).map(ae).filter((e=>t=>"on"!==t.key.slice(0,2)||((e,t,r)=>{e[t]=r,e.events=e.events?e.events.concat(t):[t]})(e,t.key,t.value))(n)).filter((e=>t=>e.setAttributeNS(null,t.key,t.value))(n)),Q(n,a),n};(Y=ne).html=ne(),Y.svg=ne("http://www.w3.org/2000/svg");var ie;ie=function(e,t,r){const a=function(e,a,n){const i=r[e];return i?i(a,n):t(e,a,n)},n=e(a);return n.h=a,n};var oe,le={};le=function(e){return function(t,r,a){for(var n in r)n in se&&(r[se[n]]=r[n],delete r[n]);return e(t,r,a)}};var se={class:"className",for:"htmlFor","http-equiv":"httpEquiv"};oe=function(e,t){t||(t={comments:!0});const r=t.concat||function(e,t){return String(e)+String(t)},a=e=>{switch(typeof e){case"function":case"string":case"object":case"undefined":return e;default:return r("",e)}};return!1!==t.attrToProp&&(e=le(e)),function(n){for(var i=1,o="",l=arguments.length,s=[],c=0;c<n.length;c++)if(c<l-1){var u=arguments[c+1],d=S(n[c]),f=i;switch(f){case 13:o+=u,u="";case 10:case 9:case 7:f=8;break;case 4:f=5}d.push([0,f,u]),s.push.apply(s,d)}else s.push.apply(s,S(n[c]));var h=[null,{},[]],g=[[h,-1]];for(c=0;c<s.length;c++){var p=g[g.length-1][0],y=(d=s[c])[0];if(2===y&&/^\//.test(d[1])){var m=g[g.length-1][1];g.length>1&&(g.pop(),g[g.length-1][0][2][m]=e(p[0],p[1],p[2].length?p[2]:void 0))}else if(2===y){var b=[d[1],{},[]];p[2].push(b),g.push([b,p[2].length-1])}else if(5===y||0===y&&5===d[1]){for(var v,w="";c<s.length;c++)if(5===s[c][0])w=r(w,s[c][1]);else{if(0!==s[c][0]||5!==s[c][1])break;if("object"!=typeof s[c][2]||w)w=r(w,s[c][2]);else for(v in s[c][2])s[c][2].hasOwnProperty(v)&&!p[1][v]&&(p[1][v]=s[c][2][v])}11===s[c][0]&&c++;for(var k=c;c<s.length;c++)if(8===s[c][0]||5===s[c][0])p[1][w]?""===s[c][1]||(p[1][w]=r(p[1][w],s[c][1])):p[1][w]=a(s[c][1]);else{if(0!==s[c][0]||8!==s[c][1]&&5!==s[c][1]){!w.length||p[1][w]||c!==k||3!==s[c][0]&&12!==s[c][0]||(p[1][w]=w.toLowerCase()),3===s[c][0]&&c--;break}p[1][w]?""===s[c][2]||(p[1][w]=r(p[1][w],s[c][2])):p[1][w]=a(s[c][2])}}else if(14===y){m=g[g.length-1][1];g.pop(),g[g.length-1][0][2][m]=e(p[0],p[1],p[2].length?p[2]:void 0)}else if(0===y&&1===d[1])void 0===d[2]||null===d[2]?d[2]="":d[2]||(d[2]=r("",d[2])),Array.isArray(d[2][0])?p[2].push.apply(p[2],d[2]):p[2].push(d[2]);else if(1===y)p[2].push(d[1]);else if(11!==y&&12!==y&&3!==y)throw new Error("unhandled: "+y)}if(h[2].length>1&&/^\s*$/.test(h[2][0])&&h[2].shift(),h[2].length>2||2===h[2].length&&/\S/.test(h[2][1]))throw new Error("multiple root elements must be wrapped in an enclosing tag");return Array.isArray(h[2][0])&&"string"==typeof h[2][0][0]&&Array.isArray(h[2][0][2])&&(h[2][0]=e(h[2][0][0],h[2][0][1],h[2][0][2])),h[2][0];function S(e){var r=[];7===i&&(i=4);for(var a=0;a<e.length;a++){var n=e.charAt(a);if(13===i){if(!/-$/.test(o)||"-"!==n){o+=n;continue}t.comments&&r.push([8,o.substr(0,o.length-1)],[3]),o="",i=1}1===i&&"<"===n?(o.length&&r.push([1,o]),o="",i=2):">"===n&&"/"===e.charAt(a-1)||">"===n&&"-"===e.charAt(a-1)&&"-"===e.charAt(a-2)?(r.push([14]),o="",i=1):">"!==n||ce(i)||13===i?2===i&&/^!--$/.test(o)?(t.comments&&r.push([2,o],[5,"comment"],[11]),o=n,i=13):1===i?o+=n:2===i&&"/"===n&&o.length?(r.push([2,o]),o="",i=1):2===i&&/\s/.test(n)?(r.push([2,o]),o="",i=4):2===i?o+=n:4===i&&/[^\s"'=/]/.test(n)?(i=5,o=n):4===i&&/\s/.test(n)?(o.length&&r.push([5,o]),r.push([12])):5===i&&/\s/.test(n)?(r.push([5,o]),o="",i=6):5===i&&"="===n?(r.push([5,o],[11]),o="",i=7):5===i?o+=n:6!==i&&4!==i||"="!==n?6!==i&&4!==i||/\s/.test(n)?7===i&&'"'===n?i=10:7===i&&"'"===n?i=9:10===i&&'"'===n||9===i&&"'"===n?(r.push([8,o],[12]),o="",i=4):7!==i||/\s/.test(n)?8===i&&/\s/.test(n)?(r.push([8,o],[12]),o="",i=4):8!==i&&9!==i&&10!==i||(o+=n):(i=8,a--):(r.push([12]),/[\w-]/.test(n)?(o+=n,i=5):i=4):(r.push([11]),i=7):(2===i?r.push([2,o]):5===i?r.push([5,o]):8===i&&o.length&&r.push([8,o]),r.push([3]),o="",i=1)}if(o.length)switch(i){case 1:r.push([1,o]),o="";break;case 8:case 10:case 9:r.push([8,o]),o=""}return 5===i&&(r.push([5,o]),o=""),r}}};const ce=e=>9===e||10===e,ue=(e,t={})=>{const r=Object.keys(t).reduce(((e,r)=>{const o=t[r];return{...e,[r]:(e,t)=>{const l=JSON.stringify(e);((e,t)=>{const r=a(e);r.branch.push(t),r.branchIndices[n(e)]||(r.branchIndices[n(e)]=0)})("tram-hook-key",`${r}[${l}]`),i("tram-hook-key");const s=(e=>{const t=a(e);return{branch:[...t.branch],branchIndices:{...t.branchIndices}}})("tram-hook-key"),c=()=>{((e,t)=>{const r=a(e),n=r.branchIndices;r.branch=[...t.branch],Object.keys(r.branchIndices).forEach((e=>{n[e]=t.branchIndices[e]||0}))})("tram-hook-key",s);const r=t?.map((e=>e instanceof Element?e:`${e}`));return o(e,r)},u=U((()=>z(c)));return a("tram-hook-key").branch.pop(),u["tram-tag"]=!0,u["tram-tag-new-effects"]=u["tram-tag-new-effects"]||[],u["tram-tag-cleanup-effects"]=[],u}}}),{});return ie(oe,Y(e),r)};var de=e=>{const t=$("tram-effect-queue"),r=o("tram-hook-key");i("tram-hook-key");t[`${r}()`]=e};const fe=ue(null),he=(e,t)=>(de((e=>{(t||[]).forEach((t=>{"string"==typeof t?e.insertAdjacentText("beforebegin",t):e.insertAdjacentElement("beforebegin",t)})),e.remove()})),fe`<tram-fragment>${t}</tram-fragment>`),ge=e=>ue(null,{"":he,...e});var pe=B;const{setup:ye,get:me}=t((()=>pe({})));var be,ve,we,ke,Se,Ae={};ke=function(){return function(e,t){var r={},a=decodeURIComponent;return function(){for(var e in t)l(e,t[e])}(),function(t,o){var l=function(e){var t=function(e){return~e.indexOf("/?")&&(e=e.replace("/?","?")),"/"==e[0]&&(e=e.slice(1)),"/"==e[e.length-1]&&(e=e.slice(0,-1)),e}(e).split("?"),o=~e.indexOf("%")?a:n;return function(e,t,r){if(e&&t.cb)for(var a=e.indexOf("#"),n=(a<0?e:e.slice(0,a)).split("&"),i=0;i<n.length;++i){var o=n[i].split("=");t.params[o[0]]=r(o[1])}return t}(t[1],i(t[0].split("/"),o,0,r,[])||{},o)}(t);return(l.cb||e)(l.params,o,t)};function n(e){return e}function i(e,t,r,a,n){if(a){if(r>=e.length){var l=a["@"];return l&&{cb:l,params:n.reduce((function(e,t){return e[t[0]]=t[1],e}),{})}}var s=t(e[r]),c=n.length;return i(e,t,r+1,a[s.toLowerCase()],n)||o(e,t,r+1,a,":",s,n,c)||o(e,t,e.length,a,"*",e.slice(r).join("/"),n,c)}}function o(e,t,r,a,n,o,l,s){l.length=s;var c=a[n];return c&&l.push([c["~"],o]),i(e,t,r,c,l)}function l(e,t){for(var a=e.split("/"),n=r,i=+("/"===e[0]);i<a.length;++i){var o=a[i],l=":"==o[0]?":":"*"==o[0]?"*":o.toLowerCase();n=n[l]||(n[l]={}),(":"==l||"*"==l)&&(n["~"]=o.slice(1))}n["@"]=t}}},(Se=(we=Ae)&&we.define)&&Se.amd?Se("rlite",[],ke):Ae?Ae=ke():we.Rlite=ke();const Ee=()=>({matches:!1}),Te=e=>({matches:!0,...e});be=ve=e=>(t="*")=>Ae(Ee,{[t]:Te})(e());var Ce={};Ce=ve((()=>{const e=window.location.href.replace(window.location.origin,""),[t,r]=e.split("#"),a=t.includes("?");return`${t}${void 0!==r?a?`&hash=${r}`:`?hash=${r}`:""}`})),Ce.setupUrlParams=be,Ce.useUrlParams=Ce;var Ie=e=>{const t=(e=>{if("string"==typeof e){const t=document.querySelector(e);if(null===t)throw new Error("\n\t\t\t\tTram-One: could not find target, is the element on the page yet?\n\t\t\t\thttps://github.com/Tram-One/tram-one/issues/179\n\t\t\t");return t}return e})(e);if(!t.firstElementChild){const e=document.createElement("div");t.appendChild(e)}return t};const{setup:Re,get:Oe,set:Pe}=t((()=>({})));var Ne=k,De=function(e){e.unobserved||(e.unobserved=!0,u(e)),"object"==typeof e.scheduler&&e.scheduler.delete(e)};const Le=e=>{if(!("tram-tag"in e))return;e["tram-tag-store-keys"]&&e["tram-tag-store-keys"].forEach((e=>{((e,t)=>{const r=Oe(e);r[t]=r[t]+1||1})("tram-key-store",e)}));e["tram-tag-new-effects"]&&(e["tram-tag-cleanup-effects"]=[],e["tram-tag-new-effects"].forEach((t=>{let r;const a=Ne((()=>{"function"==typeof r&&r(),r=t(e)}));e["tram-tag-cleanup-effects"].push((()=>{"function"==typeof r&&r(),De(a)}))})),e["tram-tag-new-effects"]=[])},Be=e=>{e.forEach((e=>{var t;t=e,Oe("tram-key-store")[t]--}))},Me=e=>{"tram-tag"in e&&(De(e["tram-tag-reaction"]),e["tram-tag-cleanup-effects"].forEach((e=>e())),Be(e["tram-tag-store-keys"]))},Fe=e=>"tram-tag"in e?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP,We=e=>{const t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,Fe),r=[];for(;t.nextNode();)r.push(t.currentNode);return r},{setup:He,get:Ue}=t((()=>new MutationObserver((e=>{e.flatMap((e=>[...e.removedNodes])).flatMap(We).forEach(Me);e.flatMap((e=>[...e.addedNodes])).flatMap(We).forEach(Le),(()=>{const e=me("tram-observable-store"),t=Oe("tram-key-store");Object.entries(t).forEach((([r,a])=>{0===a&&(delete e[r],delete t[r])}))})()}))));const xe=ge();var $e=({id:e,title:t},r)=>xe`
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
  `;const qe=ge();var je=()=>qe` <section class="blank-page" /> `;const _e=ge();var Ge=({title:e,selection:t},r)=>_e`
    <section class="page" page-color="grey" page-selection=${t}>
      <h2>${e}</h2>
      ${r}
    </section>
  `;const Ke=ge({page:Ge,"blank-page":je});var Ve=(e,t)=>(de((e=>{const t=e.querySelector(".page-scroller-flex");t.addEventListener("focusin",(()=>(e=>{const t=e.scrollLeft,r=document.querySelector(".page:focus-within");e.scrollLeft=0;const a=r.offsetLeft-window.innerWidth/4,n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;e.scrollTo({left:t}),e.scrollTo({left:a,behavior:n?"auto":"smooth"})})(t)))})),Ke` <section class="page-scroller">
    <section class="page-scroller-flex">${t} <blank-page /></section>
  </section>`);const Xe=ge();const ze=ge({"selection-card":$e,"page-scroller":Ve,annotation:(e,t)=>Xe`
    <fieldset class="annotation">
      <i>${t}</i>
    </fieldset>
  `,page:Ge});((e,t)=>{const a=Ie(t);var n;window["tram-space"]={},x("tram-effect-store"),x("tram-effect-queue"),r("tram-hook-key"),ye("tram-observable-store"),Re("tram-key-store"),_("tram-key-queue"),_("tram-global-key-queue"),He("tram-mutation-observer"),n=a,Ue("tram-mutation-observer").observe(n,{childList:!0,subtree:!0}),((e,t)=>{const r=ge({app:e})`<tram-one><app /></tram-one>`;t.replaceChild(r,t.firstElementChild)})(e,a)})((()=>ze`
    <main class="app">
      <page-scroller>
        <page title="Character Guide" selection="character-guide">
          Use this web-app to guide you through creating a D&D Character. This
          includes the latest playtest rules for One D&D.
          <fieldset>
            <legend>Useful links</legend>
            <ul>
              <li>
                D&D Beyond
                <ul>
                  <li>
                    <a target="_blank" href="https://www.dndbeyond.com/spells"
                      >D&D Beyond Spells</a
                    >
                  </li>
                  <li>
                    <a target="_blank" href="https://www.dndbeyond.com/classes"
                      >D&D Beyond Classes</a
                    >
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.dndbeyond.com/sources/basic-rules/equipment"
                      >D&D Beyond Equipment</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                5e Tools
                <ul>
                  <li>
                    <a target="_blank" href="https://5e.tools/spells.html"
                      >5e Tools Spells</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Choose a Race" selection="race">
          Details can be found in the Unearthed Arcana - Origins (page 2-10)
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
                <td>Resourceful, Skillful, Versatile - page 2</td>
              </tr>
              <tr>
                <td><b>Ardling</b></td>
                <td>
                  Angelic Flight, Celestial Legacy, Damage Resistance (Radiant)
                  - page 3
                </td>
              </tr>
              <tr>
                <td><b>Dragonborn</b></td>
                <td>
                  Draconic Ancestry, Breath Weapon, Damage Resistance,
                  Darkvision, Draconic Language - page 4
                </td>
              </tr>
              <tr>
                <td><b>Dwarf</b></td>
                <td>
                  Darkvision, Dwarven Resilience, Forge Wise, Stonecunning -
                  page 5
                </td>
              </tr>
              <tr>
                <td><b>Elf</b></td>
                <td>
                  Darkvision, Elven Lineage, Fey Ancestry, Keen Senses, Trance -
                  page 6
                </td>
              </tr>
              <tr>
                <td><b>Gnome</b></td>
                <td>Darkvision, Gnomish Cunning, Gnomish Lineage - page 7</td>
              </tr>
              <tr>
                <td><b>Halfling</b></td>
                <td>
                  Brave, Halfling Nimbleness, Luck, Naturally Stealthy - page 8
                </td>
              </tr>
              <tr>
                <td><b>Orc</b></td>
                <td>
                  Adrenaline Rush, Darkvision, Powerful Build, Relentless
                  Endurance - page 9
                </td>
              </tr>
              <tr>
                <td><b>Tiefling</b></td>
                <td>
                  Darkvision, Fiendish Legacy, Otherwordly Presence - page 9
                </td>
              </tr>
            </table>
          </fieldset>
        </page>
        <page title="Choose a Class" selection="class">
          Read the Classes in the PHB or go to the D&D Beyond links (listed
          below)
          <ol>
            <li>
              Choose a class and write the class name and "1" under "CLASS &
              LEVEL" in the top header (e.g. "Fighter 1")
            </li>
            <li>
              Set your "HIT DICE" to whatever value dice roll for your class
              (e.g. 1d8), write "1 of 1" for your "Total"
            </li>
            <li>
              Write your armor, weapon, and tool proficiencies in the bottom
              left box under "OTHER PROFICIENCIES & LANGUAGES"
            </li>
            <li>
              Mark your 2 Saving Throw Proficiencies by filling in the circles
              in the "SAVING THROWS" box
            </li>
            <li>
              Mark your 2 chosen skill proficiencies by filling in the circle in
              the "SKILLS" box
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
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Barbarian"
                >
                  Barbarian</a
                >, (PHB 46)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Bard"
                >
                  Bard</a
                >, (PHB 51)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Cleric"
                >
                  Cleric</a
                >, (PHB 56)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Druid"
                >
                  Druid</a
                >, (PHB 64)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Fighter"
                >
                  Fighter</a
                >, (PHB 70)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Monk"
                >
                  Monk</a
                >, (PHB 76)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Paladin"
                >
                  Paladin</a
                >, (PHB 82)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Ranger"
                >
                  Ranger</a
                >, (PHB 89)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Rogue"
                >
                  Rogue</a
                >, (PHB 94)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Sorcerer"
                >
                  Sorcerer</a
                >, (PHB 99)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Warlock"
                >
                  Warlock</a
                >, (PHB 105)
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.dndbeyond.com/classes/Wizard"
                >
                  Wizard</a
                >, (PHB 112)
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Choose a Background" selection="background">
          Read the UA Origins (page 11-15) Ignore Ability Scores for now
          <ol>
            <li>
              Choose a background and write the name under "BACKGROUND" in the
              top header
            </li>
            <li>
              Mark any 2 skill proficiencies in the "SKILLS" section
              <annotation>
                You may treat the 2 skills listed in your selected background as
                recommendations, but you can choose any 2, as long as they are
                thematic
              </annotation>
            </li>
            <li>
              Add the tool and language proficiencies in the "OTHER
              PROFICIENCIES & LANGUAGES" section
            </li>
            <li>
              Add the Feat in the "FEATURES & TRAITS" box
              <i>(Feats are detailed starting on page 16 of UA Origins)</i>
            </li>
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
        <page title="Set Ability Scores" selection="stat-block">
          <ol>
            <li>
              Using the standard array (15, 14, 13, 12, 10, 8), assign each
              value into the Ability Scores listed on the left of your character
              sheet, writing them in the tiny area under each option
              <fieldset>
                <legend>Class Priorities</legend>
                <ul>
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
            <li>Set your "PROFICIENCY BONUS" to +2</li>
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
        <page title="Finishing Touches" selection="finishing-touches">
          <ul>
            <li>Write your name in header under "PLAYER NAME"</li>
            <li>
              Write your character's name in the top left header under
              "CHARACTER NAME"
            </li>
          </ul>
        </page>
      </page-scroller>
    </main>
  `),"#root");
//# sourceMappingURL=index.50aa1a22.js.map
