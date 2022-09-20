// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"17ZdQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _tramOne = require("tram-one");
var _app = require("./app");
var _appDefault = parcelHelpers.interopDefault(_app);
var _indexCss = require("./index.css");
(0, _tramOne.start)((0, _appDefault.default), "#root");

},{"tram-one":"6M5Af","./app":"kuM8f","./index.css":"irmnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6M5Af":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "registerHtml", ()=>registerHtml);
parcelHelpers.export(exports, "registerSvg", ()=>registerSvg);
parcelHelpers.export(exports, "start", ()=>start);
parcelHelpers.export(exports, "useEffect", ()=>useEffect);
parcelHelpers.export(exports, "useGlobalStore", ()=>useGlobalStore);
parcelHelpers.export(exports, "useStore", ()=>useStore);
parcelHelpers.export(exports, "useUrlParams", ()=>useUrlParams$1);
/*
 * This file is a collection of strings used to store values
 * in the tram-one global space. If you ever need to debug Tram-One's
 * internal state, you can inspect these on the window.
 *
 * e.g. `window['tram-space']['tram-hook-key']`
 */ const TRAM_HOOK_KEY = "tram-hook-key";
const TRAM_EFFECT_STORE = "tram-effect-store";
const TRAM_EFFECT_QUEUE = "tram-effect-queue";
const TRAM_KEY_STORE = "tram-key-store";
const TRAM_KEY_QUEUE = "tram-key-queue";
const TRAM_GLOBAL_KEY_QUEUE = "tram-global-key-queue";
const TRAM_OBSERVABLE_STORE = "tram-observable-store";
const TRAM_MUTATION_OBSERVER = "tram-mutation-observer";
/*
 * namespace is a generic interface for global tram-one state that needs
 * to be persisted in the app container. It exposes a setup and get function.
 */ const getTramWindow = ()=>{
    // if tram-one is setup it will have a defined value in the 'tram-space'
    const tramOneIsSetup = window["tram-space"];
    // otherwise, we should warn
    // this usually happens when calling a hook outside of a component function
    // but this could be potentially triggered other ways - if we find those, we should broaden the message then
    if (!tramOneIsSetup) throw new Error(`
			Tram-One: app has not started yet, but hook was called. Is it being invoked outside a component function?
			https://github.com/Tram-One/tram-one/issues/178
		`);
    return window;
};
const setupTramOneSpace = ()=>{
    window["tram-space"] = {};
};
const buildNamespace = (constructor)=>{
    const setup = (namespace)=>{
        const tramWindow = getTramWindow();
        tramWindow["tram-space"][namespace] = constructor();
        return tramWindow["tram-space"][namespace];
    };
    const get = (namespace)=>{
        const tramWindow = getTramWindow();
        return tramWindow["tram-space"][namespace];
    };
    const set = (namespace, value)=>{
        const tramWindow = getTramWindow();
        tramWindow["tram-space"][namespace] = value;
    };
    return {
        setup,
        get,
        set
    };
};
/*
 * This file defines all the functions required to interact with
 * a working-key object. This working-key object is used to help
 * hooks understand where in the mounting process we are, and what
 * values or effects to pull / trigger.
 */ const defaultWorkingKey = ()=>({
        // list of custom tags that we've stepped into
        branch: [],
        // map of branches to index value (used as a cursor for hooks)
        branchIndices: {
            "": 0
        }
    });
const { setup: setupWorkingKey , get: getWorkingKey  } = buildNamespace(defaultWorkingKey);
const getWorkingBranch = (keyName)=>{
    const workingkeyObject = getWorkingKey(keyName);
    return workingkeyObject.branch.join("/");
};
/**
 * push a new branch value, usually when we step into a new
 * custom component when mounting.
 */ const pushWorkingKeyBranch = (keyName, branch)=>{
    const workingKey = getWorkingKey(keyName);
    workingKey.branch.push(branch);
    if (!workingKey.branchIndices[getWorkingBranch(keyName)]) workingKey.branchIndices[getWorkingBranch(keyName)] = 0;
};
/**
 * pops the current branch value, usually when we are done mounting
 * a single child component.
 */ const popWorkingKeyBranch = (keyName)=>{
    const workingKey = getWorkingKey(keyName);
    workingKey.branch.pop();
};
/**
 * increments the value for the current branch.
 * These values are used to pull the correct hook value on re-renders.
 */ const incrementWorkingKeyBranch = (keyName)=>{
    const workingKey = getWorkingKey(keyName);
    workingKey.branchIndices[getWorkingBranch(keyName)] += 1;
};
/**
 * used to get a unique string that will be used as a key for observables and effects.
 * This unique string _should_ be consistent over many re-renders.
 */ const getWorkingKeyValue = (keyName)=>{
    const workingKey = getWorkingKey(keyName);
    const index = workingKey.branchIndices[getWorkingBranch(keyName)];
    return `${getWorkingBranch(keyName)}[${index}]`;
};
/**
 * returns a deep copy of the existing key, usually used as a restore point later
 */ const copyWorkingKey = (keyName)=>{
    const key = getWorkingKey(keyName);
    return {
        branch: [
            ...key.branch
        ],
        branchIndices: {
            ...key.branchIndices
        }
    };
};
/**
 * if we needed to reset pre-emptively, use this to get back
 * to where the branches were before
 */ const restoreWorkingKey = (keyName, restoreKey)=>{
    const key = getWorkingKey(keyName);
    const branches = key.branchIndices;
    key.branch = [
        ...restoreKey.branch
    ];
    const resetBranchValue = (branch)=>{
        branches[branch] = restoreKey.branchIndices[branch] || 0;
    };
    Object.keys(key.branchIndices).forEach(resetBranchValue);
};
/*
 * This file is a collection of strings used to store values
 * in custom elements. If you ever need to debug Tram-One's
 * internal state, you can inspect these on individual elements.
 *
 * e.g. `$0['tram-hook-key']`
 */ const TRAM_TAG = "tram-tag";
const TRAM_TAG_REACTION = "tram-tag-reaction";
const TRAM_TAG_STORE_KEYS = "tram-tag-store-keys";
const TRAM_TAG_NEW_EFFECTS = "tram-tag-new-effects";
const TRAM_TAG_CLEANUP_EFFECTS = "tram-tag-cleanup-effects";
// Debug properties used for tram-one dev tools
const TRAM_TAG_NAME = "tram-tag-name";
const TRAM_TAG_PROPS = "tram-tag-props";
const TRAM_TAG_CHILDREN = "tram-tag-children";
const TRAM_TAG_GLOBAL_STORE_KEYS = "tram-tag-global-store-keys";
const { observe: observe$1  } = require("@nx-js/observer-util");
// functions to go to nodes or indices (made for .map)
const toIndices = (node, index)=>index;
// sorting function that prioritizes indices that are closest to a target
// e.g. target = 3, [1, 2, 3, 4, 5] => [3, 2, 4, 1, 5]
const byDistanceFromIndex = (targetIndex)=>(indexA, indexB)=>{
        const diffFromTargetA = Math.abs(indexA - targetIndex);
        const diffFromTargetB = Math.abs(indexB - targetIndex);
        return diffFromTargetA - diffFromTargetB;
    };
const hasMatchingTagName = (tagName)=>(node)=>{
        const nodeHasMatchingTagName = "tagName" in node && node.tagName === tagName;
        // if the tagName matches, we want to process the node, otherwise skip it
        return nodeHasMatchingTagName ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    };
// get an array including the element and all it's children
const parentAndChildrenElements = (node, tagName)=>{
    const matchesTagName = hasMatchingTagName(tagName);
    const componentWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, matchesTagName);
    const parentAndChildren = [
        componentWalker.currentNode
    ];
    while(componentWalker.nextNode())parentAndChildren.push(componentWalker.currentNode);
    // since we are looking for elements (things with tagNames)
    // we can safely declare this as an array of Elements
    return parentAndChildren;
};
const defaultRemovedElementWithFocusData = {
    index: -1,
    tagName: "",
    scrollLeft: 0,
    scrollTop: 0,
    selectionStart: null,
    selectionEnd: null,
    selectionDirection: undefined
};
/**
 * This is a helper function for the dom creation.
 * This function observes any state values used when making the tag, and allow it to update
 * independently when one of those state values updates.
 *
 * The mutation-observer will unobserve any reactions here when the node is removed.
 *
 * The parameter tagFunction is almost a TramOneComponent, but it already has the props and children prepopulated,
 * and so has no parameters, but returns a TramOneElement
 */ var observeTag = (tagFunction)=>{
    let tagResult;
    const buildAndReplaceTag = ()=>{
        // if there is an existing tagResult, it is the last rendering, and so we want to re-render over it
        let oldTag = tagResult;
        let removedElementWithFocusData = defaultRemovedElementWithFocusData;
        // remove oldTag first so that we unobserve before we re-observe
        if (oldTag) {
            // we need to blow away any old focus data we had
            removedElementWithFocusData = defaultRemovedElementWithFocusData;
            // determine if this element (or any element under it) had focus
            const oldTagHasFocusedElement = oldTag.contains(document.activeElement);
            // if an element had focus, copy over all the selection data (so we can copy it back later)
            if (oldTagHasFocusedElement) {
                // we'll assume that the element is an HTMLInputElement, in reality other kinds of elements will be caught here,
                // but that's fine, since they have null as selection attributes, and setting them to null is fine
                const activeElement = document.activeElement;
                // first, we need to get all the elements that are similar (we'll use tagName)
                // this way, when we rerender, we can search for those tagNames, and just use the index we got here
                const allActiveLikeElements = parentAndChildrenElements(oldTag, activeElement.tagName);
                removedElementWithFocusData.index = allActiveLikeElements.findIndex((element)=>element === activeElement);
                // copy over the data
                removedElementWithFocusData.tagName = activeElement.tagName;
                removedElementWithFocusData.scrollLeft = activeElement.scrollLeft;
                removedElementWithFocusData.scrollTop = activeElement.scrollTop;
                removedElementWithFocusData.selectionStart = activeElement.selectionStart;
                removedElementWithFocusData.selectionEnd = activeElement.selectionEnd;
                removedElementWithFocusData.selectionDirection = activeElement.selectionDirection || undefined;
            }
            const emptyDiv = document.createElement("div");
            oldTag.replaceWith(emptyDiv);
            // copy the reaction and effects from the old tag to the empty div so we don't lose them
            emptyDiv[TRAM_TAG_REACTION] = oldTag[TRAM_TAG_REACTION];
            emptyDiv[TRAM_TAG_NEW_EFFECTS] = oldTag[TRAM_TAG_NEW_EFFECTS];
            emptyDiv[TRAM_TAG_CLEANUP_EFFECTS] = oldTag[TRAM_TAG_CLEANUP_EFFECTS];
            emptyDiv[TRAM_TAG_NAME] = oldTag[TRAM_TAG_NAME];
            emptyDiv[TRAM_TAG_PROPS] = oldTag[TRAM_TAG_PROPS];
            emptyDiv[TRAM_TAG_GLOBAL_STORE_KEYS] = oldTag[TRAM_TAG_GLOBAL_STORE_KEYS];
            // set oldTag to emptyDiv, so we can replace it later
            oldTag = emptyDiv;
        }
        // build the component
        tagResult = tagFunction();
        // if oldTag was defined, then we need to replace it with the new result
        if (oldTag) {
            // if an element had focus, reapply it
            let elementToGiveFocus;
            if (removedElementWithFocusData.index >= 0) {
                const allActiveLikeElements = parentAndChildrenElements(tagResult, removedElementWithFocusData.tagName);
                // we'll look through the elements (in order of nodes closest to original index) and find a tag that matches.
                // this means if it didn't move, we'll get it right away,
                // if it did, we'll look at the elements closest to the original position
                const elementIndexToGiveFocus = allActiveLikeElements.map(toIndices).sort(byDistanceFromIndex(removedElementWithFocusData.index))[0];
                elementToGiveFocus = allActiveLikeElements[elementIndexToGiveFocus];
                // also try to set the selection, if there is a selection for this element
                try {
                    if (elementToGiveFocus.setSelectionRange !== undefined) elementToGiveFocus.setSelectionRange(removedElementWithFocusData.selectionStart, removedElementWithFocusData.selectionEnd, removedElementWithFocusData.selectionDirection);
                } catch (exception) {
                // don't worry if we fail
                // this can happen if the element has a `setSelectionRange` but it isn't supported
                // e.g. input with type="range"
                }
                elementToGiveFocus.scrollLeft = removedElementWithFocusData.scrollLeft;
                elementToGiveFocus.scrollTop = removedElementWithFocusData.scrollTop;
            }
            // don't lose track that this is still a tram-one element
            tagResult[TRAM_TAG] = true;
            // copy the reaction and effects from the old tag to the new one
            tagResult[TRAM_TAG_REACTION] = oldTag[TRAM_TAG_REACTION];
            tagResult[TRAM_TAG_NEW_EFFECTS] = oldTag[TRAM_TAG_NEW_EFFECTS];
            tagResult[TRAM_TAG_CLEANUP_EFFECTS] = oldTag[TRAM_TAG_CLEANUP_EFFECTS];
            tagResult[TRAM_TAG_NAME] = oldTag[TRAM_TAG_NAME];
            tagResult[TRAM_TAG_PROPS] = oldTag[TRAM_TAG_PROPS];
            tagResult[TRAM_TAG_GLOBAL_STORE_KEYS] = oldTag[TRAM_TAG_GLOBAL_STORE_KEYS];
            // both these actions cause forced reflow, and can be performance issues
            oldTag.replaceWith(tagResult);
            if (elementToGiveFocus && elementToGiveFocus.focus) elementToGiveFocus.focus();
        }
    };
    const tagReaction = observe$1(buildAndReplaceTag);
    // tagResult is always assigned as an artifact of the observe() call above
    // if it isn't, we want to know about it
    if (tagResult === undefined) throw new Error(`
			Tram-One: tagResult was not defined after building the tag.
			https://github.com/Tram-One/tram-one/issues/177
		`);
    // save the reaction to the node, so that the mutation-observer can unobserve it later
    tagResult[TRAM_TAG_REACTION] = tagReaction;
    return tagResult;
};
/*
 * EffectStores in Tram-One are used for basic key-value object mappings that need
 * to be persisted in the globalSpace.
 *
 * Currently this is used with useEffect to keep track of what
 * new effects should be triggered or cleaned up
 */ const newDefaultEffectStore = ()=>{
    return {};
};
const { setup: setupEffectStore , get: getEffectStore , set: setEffectStore ,  } = buildNamespace(newDefaultEffectStore);
/**
 * clear the effect store
 * usually called when we want to empty the effect store
 */ const clearEffectStore = (effectStoreName)=>{
    const effectStore = getEffectStore(effectStoreName);
    Object.keys(effectStore).forEach((key)=>delete effectStore[key]);
};
/**
 * restore the effect store to a previous value
 * usually used when we had to interrupt the processing of effects
 */ const restoreEffectStore = setEffectStore;
/*
 * The KeyQueue in Tram-One is a basic list of keys
 * that needs to be persisted in the globalSpace.
 *
 * Currently this is used with useStore to keep track of what
 * stores need to be associated with generated elements
 */ const newDefaultKeyQueue = ()=>{
    return [];
};
const { setup: setupKeyQueue , get: getKeyQueue , set: setKeyQueue  } = buildNamespace(newDefaultKeyQueue);
/**
 * clear the key queue
 * usually called when we want to empty the key queue
 */ const clearKeyQueue = (keyQueueName)=>{
    const keyQueue = getKeyQueue(keyQueueName);
    keyQueue.splice(0, keyQueue.length);
};
/**
 * restore the key queue to a previous value
 * usually used when we had to interrupt the processing of keys
 */ const restoreKeyQueue = setKeyQueue;
/**
 * This is a helper function for the dom creation.
 * This function stores any keys generated when building a tag in the resulting node that is generated.
 *
 * These are later processed by the mutation-observer, and cleaned up when the node is removed by the mutation-observer.
 *
 * This function is called every time state changes in an observable store
 */ var processHooks = (tagFunction)=>{
    // save the existing effect queue and key queue for any components we are in the middle of building
    const existingQueuedEffects = {
        ...getEffectStore(TRAM_EFFECT_QUEUE)
    };
    const existingQueuedKeys = [
        ...getKeyQueue(TRAM_KEY_QUEUE)
    ];
    // clear the queues (so we can get just new effects and keys)
    clearEffectStore(TRAM_EFFECT_QUEUE);
    clearKeyQueue(TRAM_KEY_QUEUE);
    clearKeyQueue(TRAM_GLOBAL_KEY_QUEUE);
    // create the component, which will save new effects to the effect queue
    const tagResult = tagFunction();
    // see if there are any brand new effects
    const existingEffects = getEffectStore(TRAM_EFFECT_STORE);
    const queuedEffects = getEffectStore(TRAM_EFFECT_QUEUE);
    // pull new effects that have yet to be processed from the tag
    // these can appear when a component re-exposes another component at its root
    const existingNewEffects = tagResult[TRAM_TAG_NEW_EFFECTS] || [];
    // store new effects (and the existing new effects) in the node we just built
    const newEffects = Object.keys(queuedEffects).filter((effect)=>!(effect in existingEffects));
    const newEffectFunctions = newEffects.map((newEffectKey)=>queuedEffects[newEffectKey]);
    const existingNewAndBrandNewEffects = existingNewEffects.concat(newEffectFunctions);
    tagResult[TRAM_TAG_NEW_EFFECTS] = existingNewAndBrandNewEffects;
    // same as the existingNewEffects, but for state values
    const existingNewKeys = tagResult[TRAM_TAG_STORE_KEYS] || [];
    // get all new keys
    const newKeys = getKeyQueue(TRAM_KEY_QUEUE);
    // store keys in the node we just built
    const existingNewAndBrandNewKeys = existingNewKeys.concat(newKeys);
    tagResult[TRAM_TAG_STORE_KEYS] = existingNewAndBrandNewKeys;
    {
        const existingNewGlobalKeys = tagResult[TRAM_TAG_GLOBAL_STORE_KEYS] || [];
        const newGlobalKeys = getKeyQueue(TRAM_GLOBAL_KEY_QUEUE);
        // store global store keys in the node we just built
        const existingNewAndBrandNewGlobalKeys = existingNewGlobalKeys.concat(newGlobalKeys);
        tagResult[TRAM_TAG_GLOBAL_STORE_KEYS] = existingNewAndBrandNewGlobalKeys;
    }
    // restore the effect and key queues to what they were before we started
    restoreEffectStore(TRAM_EFFECT_QUEUE, existingQueuedEffects);
    restoreKeyQueue(TRAM_KEY_QUEUE, existingQueuedKeys);
    return tagResult;
};
const nanohtml = require("@tram-one/nanohtml");
const rbel = require("@tram-one/rbel");
const hyperx = require("@tram-one/hyperx");
/**
 * This function takes in a namespace and registry of custom components,
 * and builds a `dom` template tag function that can take in a template XML string.
 *
 * This function shouldn't need to be called directly, instead, you can use `registerHtml` or `registerSvg`
 *
 * @param registry mapping of tag names to component functions
 * @param namespace namespace to create nodes in (by default XHTML namespace)
 */ const registerDom = (namespace, registry = {})=>{
    // modify the registry so that each component function updates the hook working key
    const hookedRegistry = Object.keys(registry).reduce((newRegistry, tagName)=>{
        const tagFunction = registry[tagName];
        const hookedTagFunction = (props, children)=>{
            // push a new branch onto the working key so any values that need to be unique among components
            // but consistent across renders can be read
            const stringifiedProps = JSON.stringify(props);
            const newBranch = `${tagName}[${stringifiedProps}]`;
            pushWorkingKeyBranch(TRAM_HOOK_KEY, newBranch);
            // increment branch so that we have a unique value (in case we are rendering a list of components)
            incrementWorkingKeyBranch(TRAM_HOOK_KEY);
            const uniqueBranch = copyWorkingKey(TRAM_HOOK_KEY);
            // create a tag function that has the args passed in
            const populatedTagFunction = ()=>{
                // reset working key so we have the correct place when starting a new component
                restoreWorkingKey(TRAM_HOOK_KEY, uniqueBranch);
                const processedChildren = children?.map((child)=>{
                    if (child instanceof Element) return child;
                    return `${child}`;
                });
                return tagFunction(props, processedChildren);
            };
            // observe store usage and process any new effects that were called when building the component
            const processHooksAndBuildTagResult = ()=>processHooks(populatedTagFunction);
            const tagResult = observeTag(processHooksAndBuildTagResult);
            // pop the branch off (since we are done rendering this component)
            popWorkingKeyBranch(TRAM_HOOK_KEY);
            // decorate the properties expected on TramOneElements (see node-names.ts)
            tagResult[TRAM_TAG] = true;
            // we won't decorate TRAM_TAG_REACTION, that needs to be done later when we observe the tag
            tagResult[TRAM_TAG_NEW_EFFECTS] = tagResult[TRAM_TAG_NEW_EFFECTS] || [];
            // cleanup effects will be populated when new effects are processed
            tagResult[TRAM_TAG_CLEANUP_EFFECTS] = [];
            tagResult[TRAM_TAG_NAME] = tagName;
            tagResult[TRAM_TAG_PROPS] = props;
            tagResult[TRAM_TAG_CHILDREN] = children;
            return tagResult;
        };
        return {
            ...newRegistry,
            [tagName]: hookedTagFunction
        };
    }, {});
    return rbel(hyperx, nanohtml(namespace), hookedRegistry);
};
/**
 * @name useEffect
 * @link https://tram-one.io/#use-effect
 * @description
 * Hook that triggers component start, update, and cleanup effects.
 * If the return of effect is another function, then that function is called on when the component is removed.
 * If the effect is dependent on a observable, it will automatically trigger again if that value updates.
 *
 * @param effect function to run on component mount
 */ var useEffect = (effect)=>{
    // get the store of effects
    const effectQueue = getEffectStore(TRAM_EFFECT_QUEUE);
    // get the key value from working-key
    const key = getWorkingKeyValue(TRAM_HOOK_KEY);
    // increment the working key branch value
    // this makes successive useEffects calls unique (until we reset the key)
    incrementWorkingKeyBranch(TRAM_HOOK_KEY);
    // append () so that it's easier to debug effects from components
    const callLikeKey = `${key}()`;
    // add the effect to the effect queue, so it can be processed later
    effectQueue[callLikeKey] = effect;
};
const xml = registerDom(null);
const fragment = (props, children)=>{
    useEffect((ref)=>{
        (children || []).forEach((child)=>{
            if (typeof child === "string") ref.insertAdjacentText("beforebegin", child);
            else ref.insertAdjacentElement("beforebegin", child);
        });
        ref.remove();
    });
    return xml`<tram-fragment>${children}</tram-fragment>`;
};
/**
 * @name registerHtml
 * @link https://tram-one.io/#register-html
 * @description
 * Function to generate a tagged template function for XHTML / HTML.
 * Takes in a registry that allows you to import other tag functions and use them in your template string.
 *
 * @param registry map of tag names to functions, use this to use custom elements built in tram-one
 * @return tagged template function that builds HTML components
 */ const registerHtml = (registry)=>{
    return registerDom(null, {
        "": fragment,
        ...registry
    });
};
/**
 * @name registerSvg
 * @link https://tram-one.io/#register-svg
 * @description
 * Function to generate a tagged template function for SVG.
 *
 * @param registry map of tag names to functions, use this to use custom elements built in tram-one
 * @return tagged template function that builds SVG components
 */ const registerSvg = (registry)=>{
    return registerDom("http://www.w3.org/2000/svg", {
        "": fragment,
        ...registry
    });
};
const { observable  } = require("@nx-js/observer-util");
/*
 * Observable Stores in Tram-One are used for objects whose properties need to be observed.
 * This stores the values in the useStore and useGlobalStore hooks, internally tracking
 * them as proxies, and making observed functions respond to their changes.
 */ const { setup: setupObservableStore , get: getObservableStore  } = buildNamespace(()=>observable({}));
/**
 * Shared source code for both observable hooks, useStore, and useGlobalStore.
 * This hook exposes a globally stored value (in either case), that can cause the component
 * to update when a subfield of that value is updated.
 *
 * It has a similar interface to React's useState
 */ var observableHook = (key, value)=>{
    // get the store of effects
    const observableStore = getObservableStore(TRAM_OBSERVABLE_STORE);
    // increment the working key branch value
    // this makes successive hooks unique (until we reset the key)
    incrementWorkingKeyBranch(TRAM_HOOK_KEY);
    // if a key was passed in, use that, otherwise, generate a key
    const resolvedKey = key || getWorkingKeyValue(TRAM_HOOK_KEY);
    // saves value into the store if it doesn't exist in the observableStore yet
    // and if the value we are writing is defined
    if (!Object.prototype.hasOwnProperty.call(observableStore, resolvedKey) && value !== undefined) // save the value as a shallow copy of the parameter passed in
    observableStore[resolvedKey] = Array.isArray(value) ? [
        ...value
    ] : {
        ...value
    };
    // get value for key
    const keyValue = observableStore[resolvedKey];
    // if we weren't passed in a key, this is a local obserable (not global),
    const isLocalStore = !key;
    if (isLocalStore) // if this is local, we should associate it with the element by putting it in the keyQueue
    getKeyQueue(TRAM_KEY_QUEUE).push(resolvedKey);
    // if this is a development environment, save the global store key to the element
    if (!isLocalStore && true) getKeyQueue(TRAM_GLOBAL_KEY_QUEUE).push(resolvedKey);
    // return value
    return keyValue;
};
/**
 * @name useStore
 * @link https://tram-one.io/#use-store
 * @description
 * Hook that stores local component state.
 *
 * If the subfield of an object, or element of an array is updated
 * it will cause only the components that are dependent on that value to update.
 *
 * @param defaultValue the default value to start the store at
 *
 * @returns the store to interact with.
 */ var useStore = (defaultValue)=>observableHook(undefined, defaultValue);
const urlListener = require("url-listener");
const useUrlParams = require("use-url-params");
/**
 * @name useUrlParams
 * @link https://tram-one.io/#use-url-params
 * @description
 * Hook that returns path variables based on the route.
 * Can return path parameters, query params, and more.
 * It's internal functionality is powered by the package
 * {@link https://www.npmjs.com/package/rlite-router rlite}
 *
 * @param pattern path to match on (can include path variables)
 *
 * @returns object with a `matches` key, and (if it matched) path and query parameters
 */ var useUrlParams$1 = (pattern)=>{
    // save and update results in an observable, so that we can update
    // components and effects in a reactive way
    const initialParams = useUrlParams(pattern);
    const observedUrlParams = useStore(initialParams);
    // urlListener can re-read the route and save the new results to the observable
    urlListener(()=>{
        const updatedParams = useUrlParams(pattern);
        // get all keys so we can override new and old ones (without having to override the whole object)
        const allParamKeys = [
            ...Object.keys(initialParams),
            ...Object.keys(updatedParams)
        ];
        allParamKeys.forEach((paramKey)=>{
            observedUrlParams[paramKey] = updatedParams[paramKey];
        });
    });
    return observedUrlParams;
};
/** Implementation of the two function definitions */ function useGlobalStore(key, defaultValue) {
    return observableHook(key, defaultValue);
}
/**
 * Updates a container with an initial component for the first render.
 * @param component the tram-one component to render
 * @param container an element to render the component on
 */ var mount = (component, container)=>{
    const html = registerHtml({
        app: component
    });
    // this sadly needs to be wrapped in some element so we can process effects
    // otherwise the root node will not have effects applied on it
    const renderedApp = html`<tram-one><app /></tram-one>`;
    container.replaceChild(renderedApp, container.firstElementChild);
};
/**
 * Helper function for getting an element when given a string or element
 * @param target either a CSS selector, or Element to attach the component to.
 * @returns the container that we can mount on
 */ const getContainerElement = (target)=>{
    // if the selector is a string, try to find the element,
    // otherwise it's probably DOM that we should write directly to
    if (typeof target === "string") {
        const selectedElement = document.querySelector(target);
        if (selectedElement === null) throw new Error(`
				Tram-One: could not find target, is the element on the page yet?
				https://github.com/Tram-One/tram-one/issues/179
			`);
        return selectedElement;
    } else return target;
};
/**
 * Function to determine (or create) the element that we will mount our tram-one app onto
 * @param target either a CSS selector, or Element to attach the component to.
 * This elememnt should be initially empty.
 *
 * @returns the container, now with a div that tram-one can manage
 */ var buildContainer = (target)=>{
    const container = getContainerElement(target);
    // build a div to render the app on
    // - if it doesn't exist as a child of the selector, create one first
    if (!container.firstElementChild) {
        const containerChild = document.createElement("div");
        container.appendChild(containerChild);
    }
    return container;
};
/*
 * The KeyStore in Tram-One is a basic key-value object
 * that needs to be persisted in the globalSpace.
 *
 * Currently this is used with useStore and useGlobalStore to keep
 * track of what stores need to be cleaned up when removing elements
 */ const newDefaultKeyStore = ()=>{
    return {};
};
const { setup: setupKeyStore , get: getKeyStore , set: setKeyStore  } = buildNamespace(newDefaultKeyStore);
/**
 * increment (or set initial value) for the keyStore
 */ const incrementKeyStoreValue = (keyStoreName, key)=>{
    const keyStore = getKeyStore(keyStoreName);
    keyStore[key] = keyStore[key] + 1 || 1;
};
/**
 * decrement a value in the keyStore
 */ const decrementKeyStoreValue = (keyStoreName, key)=>{
    const keyStore = getKeyStore(keyStoreName);
    keyStore[key]--;
};
/*
 * The mutation-observer is a global instance of browsers MutationObserver
 * which tracks when nodes are added or removed.
 *
 * When nodes are added we process their effects. When nodes are removed we process any cleanup,
 * and stop observers that would trigger for that node.
 */ const { observe , unobserve  } = require("@nx-js/observer-util");
/**
 * process side-effects for new tram-one nodes
 * (this includes calling effects, and keeping track of stores)
 */ const processTramTags = (node)=>{
    // if this element doesn't have a TRAM_TAG, it's not a Tram-One Element
    if (!(TRAM_TAG in node)) return;
    const hasStoreKeys = node[TRAM_TAG_STORE_KEYS];
    if (hasStoreKeys) // for every store associated with this element, increment the count
    // - this ensures that it doesn't get blown away when we clean up old stores
    node[TRAM_TAG_STORE_KEYS].forEach((key)=>{
        incrementKeyStoreValue(TRAM_KEY_STORE, key);
    });
    const hasEffects = node[TRAM_TAG_NEW_EFFECTS];
    if (hasEffects) {
        // create an array for the cleanup effects
        node[TRAM_TAG_CLEANUP_EFFECTS] = [];
        // run all the effects, saving any cleanup functions to the node
        node[TRAM_TAG_NEW_EFFECTS].forEach((effect)=>{
            let cleanup;
            // this is called when an effect is re-triggered
            const effectReaction = observe(()=>{
                // verify that cleanup is a function before calling it (in case it was a promise)
                if (typeof cleanup === "function") cleanup();
                cleanup = effect(node);
            });
            // this is called when a component with an effect is removed
            const totalCleanup = ()=>{
                // verify that cleanup is a function before calling it (in case it was a promise)
                if (typeof cleanup === "function") cleanup();
                unobserve(effectReaction);
            };
            node[TRAM_TAG_CLEANUP_EFFECTS].push(totalCleanup);
        });
        // set new tag effects to an empty array
        node[TRAM_TAG_NEW_EFFECTS] = [];
    }
};
/**
 * call all cleanup effects on the node
 */ const cleanupEffects = (cleanupEffects1)=>{
    cleanupEffects1.forEach((cleanup)=>cleanup());
};
/**
 * remove the association of the store with this specific element
 */ const removeStoreKeyAssociation = (storeKeys)=>{
    storeKeys.forEach((storeKey)=>{
        decrementKeyStoreValue(TRAM_KEY_STORE, storeKey);
    });
};
/**
 * remove any stores that no longer have any elements associated with them
 * see removeStoreKeyAssociation above
 */ const cleanUpObservableStores = ()=>{
    const observableStore = getObservableStore(TRAM_OBSERVABLE_STORE);
    const keyStore = getKeyStore(TRAM_KEY_STORE);
    Object.entries(keyStore).forEach(([key, observers])=>{
        if (observers === 0) {
            delete observableStore[key];
            delete keyStore[key];
        }
    });
};
/**
 * unobserve the reaction tied to the node, and run all cleanup effects for the node
 */ const clearNode = (node)=>{
    // if this element doesn't have a TRAM_TAG, it's not a Tram-One Element
    if (!(TRAM_TAG in node)) return;
    unobserve(node[TRAM_TAG_REACTION]);
    cleanupEffects(node[TRAM_TAG_CLEANUP_EFFECTS]);
    removeStoreKeyAssociation(node[TRAM_TAG_STORE_KEYS]);
};
const isTramOneComponent = (node)=>{
    // a node is a component if it has `TRAM_TAG` key on it
    const nodeIsATramOneComponent = TRAM_TAG in node;
    // if it is a tram-one component, we want to process it, otherwise skip it
    return nodeIsATramOneComponent ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
};
/**
 * function to get the children (as a list) of the node passed in
 */ const childrenComponents = (node)=>{
    const componentWalker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT, isTramOneComponent);
    const children = [];
    while(componentWalker.nextNode())children.push(componentWalker.currentNode);
    return children;
};
const mutationObserverNamespaceConstructor = ()=>new MutationObserver((mutationList)=>{
        // cleanup orphaned nodes that are no longer on the DOM
        const removedNodesInMutation = (mutation)=>[
                ...mutation.removedNodes
            ];
        const removedNodes = mutationList.flatMap(removedNodesInMutation);
        const removedChildNodes = removedNodes.flatMap(childrenComponents);
        removedChildNodes.forEach(clearNode);
        // call new effects on any new nodes
        const addedNodesInMutation = (mutation)=>[
                ...mutation.addedNodes
            ];
        const newNodes = mutationList.flatMap(addedNodesInMutation);
        const newChildNodes = newNodes.flatMap(childrenComponents);
        newChildNodes.forEach(processTramTags);
        // clean up all local observable stores that have no observers
        cleanUpObservableStores();
    });
const { setup: setupMutationObserver , get: getMutationObserver  } = buildNamespace(mutationObserverNamespaceConstructor);
// tell the mutation observer to watch the given node for changes
const startWatcher = (observerName, node)=>{
    const observerStore = getMutationObserver(observerName);
    observerStore.observe(node, {
        childList: true,
        subtree: true
    });
};
/**
 * @name start
 * @link https://tram-one.io/#start
 * @description
 * Function to attach a component to an existing element on the page.
 * This function also starts all the listeners and allows the basic hooks to function.
 *
 * This should only be called for the initial render / building of the app.
 *
 * @param component top-level component to attach to the page.
 * @param target either a CSS selector, or Node to attach the component to
 */ var start = (component, target)=>{
    /* setup all the internal engines required for tram-one to work */ // get the container to mount the app on
    const container = buildContainer(target);
    // setup the window object to hold stores and queues
    // in the future, we may allow this to be customized
    // for multiple, sandboxed, instances of Tram-One
    setupTramOneSpace();
    // setup store for effects
    setupEffectStore(TRAM_EFFECT_STORE);
    // setup queue for new effects when resolving mounts
    setupEffectStore(TRAM_EFFECT_QUEUE);
    // setup working key for hooks
    setupWorkingKey(TRAM_HOOK_KEY);
    // setup observable store for the useStore and useGlobalStore hooks
    setupObservableStore(TRAM_OBSERVABLE_STORE);
    // setup key store for keeping track of stores to clean up
    setupKeyStore(TRAM_KEY_STORE);
    // setup key queue for new observable stores when resolving mounts
    setupKeyQueue(TRAM_KEY_QUEUE);
    // setup key queue for global observable stores when resolving mounts
    setupKeyQueue(TRAM_GLOBAL_KEY_QUEUE);
    // setup a mutation observer for cleaning up removed elements and triggering effects
    setupMutationObserver(TRAM_MUTATION_OBSERVER);
    // watch for changes on the target so that we can process node changes
    startWatcher(TRAM_MUTATION_OBSERVER, container);
    // trigger an initial mount
    mount(component, container);
};

},{"@nx-js/observer-util":"buegN","@tram-one/nanohtml":"6DutT","@tram-one/rbel":"8PTya","@tram-one/hyperx":"cQ0tn","url-listener":"kDHfu","use-url-params":"3ANBp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"buegN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observe", ()=>observe);
parcelHelpers.export(exports, "unobserve", ()=>unobserve);
parcelHelpers.export(exports, "observable", ()=>observable);
parcelHelpers.export(exports, "isObservable", ()=>isObservable);
parcelHelpers.export(exports, "raw", ()=>raw);
var connectionStore = new WeakMap();
var ITERATION_KEY = Symbol("iteration key");
function storeObservable(obj) {
    // this will be used to save (obj.key -> reaction) connections later
    connectionStore.set(obj, new Map());
}
function registerReactionForOperation(reaction, ref) {
    var target1 = ref.target;
    var key = ref.key;
    var type = ref.type;
    if (type === "iterate") key = ITERATION_KEY;
    var reactionsForObj = connectionStore.get(target1);
    var reactionsForKey = reactionsForObj.get(key);
    if (!reactionsForKey) {
        reactionsForKey = new Set();
        reactionsForObj.set(key, reactionsForKey);
    }
    // save the fact that the key is used by the reaction during its current run
    if (!reactionsForKey.has(reaction)) {
        reactionsForKey.add(reaction);
        reaction.cleaners.push(reactionsForKey);
    }
}
function getReactionsForOperation(ref) {
    var target2 = ref.target;
    var key1 = ref.key;
    var type = ref.type;
    var reactionsForTarget = connectionStore.get(target2);
    var reactionsForKey = new Set();
    if (type === "clear") reactionsForTarget.forEach(function(_, key) {
        addReactionsForKey(reactionsForKey, reactionsForTarget, key);
    });
    else addReactionsForKey(reactionsForKey, reactionsForTarget, key1);
    if (type === "add" || type === "delete" || type === "clear") {
        var iterationKey = Array.isArray(target2) ? "length" : ITERATION_KEY;
        addReactionsForKey(reactionsForKey, reactionsForTarget, iterationKey);
    }
    return reactionsForKey;
}
function addReactionsForKey(reactionsForKey, reactionsForTarget, key) {
    var reactions = reactionsForTarget.get(key);
    reactions && reactions.forEach(reactionsForKey.add, reactionsForKey);
}
function releaseReaction(reaction) {
    if (reaction.cleaners) reaction.cleaners.forEach(releaseReactionKeyConnection, reaction);
    reaction.cleaners = [];
}
function releaseReactionKeyConnection(reactionsForKey) {
    reactionsForKey.delete(this);
}
// reactions can call each other and form a call stack
var reactionStack = [];
var isDebugging = false;
function runAsReaction(reaction, fn, context, args) {
    // do not build reactive relations, if the reaction is unobserved
    if (reaction.unobserved) return Reflect.apply(fn, context, args);
    // only run the reaction if it is not already in the reaction stack
    // TODO: improve this to allow explicitly recursive reactions
    if (reactionStack.indexOf(reaction) === -1) {
        // release the (obj -> key -> reactions) connections
        // and reset the cleaner connections
        releaseReaction(reaction);
        try {
            // set the reaction as the currently running one
            // this is required so that we can create (observable.prop -> reaction) pairs in the get trap
            reactionStack.push(reaction);
            return Reflect.apply(fn, context, args);
        } finally{
            // always remove the currently running flag from the reaction when it stops execution
            reactionStack.pop();
        }
    }
}
// register the currently running reaction to be queued again on obj.key mutations
function registerRunningReactionForOperation(operation) {
    // get the current reaction from the top of the stack
    var runningReaction = reactionStack[reactionStack.length - 1];
    if (runningReaction) {
        debugOperation(runningReaction, operation);
        registerReactionForOperation(runningReaction, operation);
    }
}
function queueReactionsForOperation(operation) {
    // iterate and queue every reaction, which is triggered by obj.key mutation
    getReactionsForOperation(operation).forEach(queueReaction, operation);
}
function queueReaction(reaction) {
    debugOperation(reaction, this);
    // queue the reaction for later execution or run it immediately
    if (typeof reaction.scheduler === "function") reaction.scheduler(reaction);
    else if (typeof reaction.scheduler === "object") reaction.scheduler.add(reaction);
    else reaction();
}
function debugOperation(reaction, operation) {
    if (reaction.debugger && !isDebugging) try {
        isDebugging = true;
        reaction.debugger(operation);
    } finally{
        isDebugging = false;
    }
}
function hasRunningReaction() {
    return reactionStack.length > 0;
}
var IS_REACTION = Symbol("is reaction");
function observe(fn, options) {
    if (options === void 0) options = {};
    // wrap the passed function in a reaction, if it is not already one
    var reaction1 = fn[IS_REACTION] ? fn : function reaction() {
        return runAsReaction(reaction, fn, this, arguments);
    };
    // save the scheduler and debugger on the reaction
    reaction1.scheduler = options.scheduler;
    reaction1.debugger = options.debugger;
    // save the fact that this is a reaction
    reaction1[IS_REACTION] = true;
    // run the reaction once if it is not a lazy one
    if (!options.lazy) reaction1();
    return reaction1;
}
function unobserve(reaction) {
    // do nothing, if the reaction is already unobserved
    if (!reaction.unobserved) {
        // indicate that the reaction should not be triggered any more
        reaction.unobserved = true;
        // release (obj -> key -> reaction) connections
        releaseReaction(reaction);
    }
    // unschedule the reaction, if it is scheduled
    if (typeof reaction.scheduler === "object") reaction.scheduler.delete(reaction);
}
var proxyToRaw = new WeakMap();
var rawToProxy = new WeakMap();
var hasOwnProperty = Object.prototype.hasOwnProperty;
function findObservable(obj) {
    var observableObj = rawToProxy.get(obj);
    if (hasRunningReaction() && typeof obj === "object" && obj !== null) {
        if (observableObj) return observableObj;
        return observable(obj);
    }
    return observableObj || obj;
}
function patchIterator(iterator, isEntries) {
    var originalNext = iterator.next;
    iterator.next = function() {
        var ref = originalNext.call(iterator);
        var done = ref.done;
        var value = ref.value;
        if (!done) {
            if (isEntries) value[1] = findObservable(value[1]);
            else value = findObservable(value);
        }
        return {
            done: done,
            value: value
        };
    };
    return iterator;
}
var instrumentations = {
    has: function has(key) {
        var target3 = proxyToRaw.get(this);
        var proto1 = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target3,
            key: key,
            type: "has"
        });
        return proto1.has.apply(target3, arguments);
    },
    get: function get(key) {
        var target4 = proxyToRaw.get(this);
        var proto2 = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target4,
            key: key,
            type: "get"
        });
        return findObservable(proto2.get.apply(target4, arguments));
    },
    add: function add(key) {
        var target5 = proxyToRaw.get(this);
        var proto3 = Reflect.getPrototypeOf(this);
        var hadKey = proto3.has.call(target5, key);
        // forward the operation before queueing reactions
        var result = proto3.add.apply(target5, arguments);
        if (!hadKey) queueReactionsForOperation({
            target: target5,
            key: key,
            value: key,
            type: "add"
        });
        return result;
    },
    set: function set(key, value) {
        var target6 = proxyToRaw.get(this);
        var proto4 = Reflect.getPrototypeOf(this);
        var hadKey = proto4.has.call(target6, key);
        var oldValue = proto4.get.call(target6, key);
        // forward the operation before queueing reactions
        var result = proto4.set.apply(target6, arguments);
        if (!hadKey) queueReactionsForOperation({
            target: target6,
            key: key,
            value: value,
            type: "add"
        });
        else if (value !== oldValue) queueReactionsForOperation({
            target: target6,
            key: key,
            value: value,
            oldValue: oldValue,
            type: "set"
        });
        return result;
    },
    delete: function delete$1(key) {
        var target7 = proxyToRaw.get(this);
        var proto5 = Reflect.getPrototypeOf(this);
        var hadKey = proto5.has.call(target7, key);
        var oldValue = proto5.get ? proto5.get.call(target7, key) : undefined;
        // forward the operation before queueing reactions
        var result = proto5.delete.apply(target7, arguments);
        if (hadKey) queueReactionsForOperation({
            target: target7,
            key: key,
            oldValue: oldValue,
            type: "delete"
        });
        return result;
    },
    clear: function clear() {
        var target8 = proxyToRaw.get(this);
        var proto6 = Reflect.getPrototypeOf(this);
        var hadItems = target8.size !== 0;
        var oldTarget = target8 instanceof Map ? new Map(target8) : new Set(target8);
        // forward the operation before queueing reactions
        var result = proto6.clear.apply(target8, arguments);
        if (hadItems) queueReactionsForOperation({
            target: target8,
            oldTarget: oldTarget,
            type: "clear"
        });
        return result;
    },
    forEach: function forEach(cb) {
        var args = [], len1 = arguments.length - 1;
        while(len1-- > 0)args[len1] = arguments[len1 + 1];
        var target9 = proxyToRaw.get(this);
        var proto7 = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target9,
            type: "iterate"
        });
        // swap out the raw values with their observable pairs
        // before passing them to the callback
        var wrappedCb = function(value) {
            var rest = [], len = arguments.length - 1;
            while(len-- > 0)rest[len] = arguments[len + 1];
            return cb.apply(void 0, [
                findObservable(value)
            ].concat(rest));
        };
        var ref;
        return (ref = proto7.forEach).call.apply(ref, [
            target9,
            wrappedCb
        ].concat(args));
    },
    keys: function keys() {
        var target10 = proxyToRaw.get(this);
        var proto8 = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target10,
            type: "iterate"
        });
        return proto8.keys.apply(target10, arguments);
    },
    values: function values() {
        var target11 = proxyToRaw.get(this);
        var proto9 = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target11,
            type: "iterate"
        });
        var iterator = proto9.values.apply(target11, arguments);
        return patchIterator(iterator, false);
    },
    entries: function entries() {
        var target12 = proxyToRaw.get(this);
        var proto10 = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target12,
            type: "iterate"
        });
        var iterator = proto10.entries.apply(target12, arguments);
        return patchIterator(iterator, true);
    },
    get size () {
        var target = proxyToRaw.get(this);
        var proto = Reflect.getPrototypeOf(this);
        registerRunningReactionForOperation({
            target: target,
            type: "iterate"
        });
        return Reflect.get(proto, "size", target);
    }
};
instrumentations[Symbol.iterator] = function() {
    var target = proxyToRaw.get(this);
    var proto = Reflect.getPrototypeOf(this);
    registerRunningReactionForOperation({
        target: target,
        type: "iterate"
    });
    var iterator = proto[Symbol.iterator].apply(target, arguments);
    return patchIterator(iterator, target instanceof Map);
};
var collectionHandlers = {
    get: function get(target, key, receiver) {
        // instrument methods and property accessors to be reactive
        target = hasOwnProperty.call(instrumentations, key) ? instrumentations : target;
        return Reflect.get(target, key, receiver);
    }
};
// eslint-disable-next-line
var globalObj = typeof window === "object" ? window : Function("return this")();
// built-in object can not be wrapped by Proxies
// their methods expect the object instance as the 'this' instead of the Proxy wrapper
// complex objects are wrapped with a Proxy of instrumented methods
// which switch the proxy to the raw object and to add reactive wiring
var handlers = new Map([
    [
        Map,
        collectionHandlers
    ],
    [
        Set,
        collectionHandlers
    ],
    [
        WeakMap,
        collectionHandlers
    ],
    [
        WeakSet,
        collectionHandlers
    ],
    [
        Object,
        false
    ],
    [
        Array,
        false
    ],
    [
        Int8Array,
        false
    ],
    [
        Uint8Array,
        false
    ],
    [
        Uint8ClampedArray,
        false
    ],
    [
        Int16Array,
        false
    ],
    [
        Uint16Array,
        false
    ],
    [
        Int32Array,
        false
    ],
    [
        Uint32Array,
        false
    ],
    [
        Float32Array,
        false
    ],
    [
        Float64Array,
        false
    ]
]);
function shouldInstrument(ref) {
    var constructor = ref.constructor;
    var isBuiltIn = typeof constructor === "function" && constructor.name in globalObj && globalObj[constructor.name] === constructor;
    return !isBuiltIn || handlers.has(constructor);
}
function getHandlers(obj) {
    return handlers.get(obj.constructor);
}
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var wellKnownSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function(key) {
    return Symbol[key];
}).filter(function(value) {
    return typeof value === "symbol";
}));
// intercept get operations on observables to know which reaction uses their properties
function get(target, key, receiver) {
    var result = Reflect.get(target, key, receiver);
    // do not register (observable.prop -> reaction) pairs for well known symbols
    // these symbols are frequently retrieved in low level JavaScript under the hood
    if (typeof key === "symbol" && wellKnownSymbols.has(key)) return result;
    // register and save (observable.prop -> runningReaction)
    registerRunningReactionForOperation({
        target: target,
        key: key,
        receiver: receiver,
        type: "get"
    });
    // if we are inside a reaction and observable.prop is an object wrap it in an observable too
    // this is needed to intercept property access on that object too (dynamic observable tree)
    var observableResult = rawToProxy.get(result);
    if (hasRunningReaction() && typeof result === "object" && result !== null) {
        if (observableResult) return observableResult;
        // do not violate the none-configurable none-writable prop get handler invariant
        // fall back to none reactive mode in this case, instead of letting the Proxy throw a TypeError
        var descriptor = Reflect.getOwnPropertyDescriptor(target, key);
        if (!descriptor || !(descriptor.writable === false && descriptor.configurable === false)) return observable(result);
    }
    // otherwise return the observable wrapper if it is already created and cached or the raw object
    return observableResult || result;
}
function has(target, key) {
    var result = Reflect.has(target, key);
    // register and save (observable.prop -> runningReaction)
    registerRunningReactionForOperation({
        target: target,
        key: key,
        type: "has"
    });
    return result;
}
function ownKeys(target) {
    registerRunningReactionForOperation({
        target: target,
        type: "iterate"
    });
    return Reflect.ownKeys(target);
}
// intercept set operations on observables to know when to trigger reactions
function set(target, key, value, receiver) {
    // make sure to do not pollute the raw object with observables
    if (typeof value === "object" && value !== null) value = proxyToRaw.get(value) || value;
    // save if the object had a descriptor for this key
    var hadKey = hasOwnProperty$1.call(target, key);
    // save if the value changed because of this set operation
    var oldValue = target[key];
    // execute the set operation before running any reaction
    var result = Reflect.set(target, key, value, receiver);
    // do not queue reactions if the target of the operation is not the raw receiver
    // (possible because of prototypal inheritance)
    if (target !== proxyToRaw.get(receiver)) return result;
    // queue a reaction if it's a new property or its value changed
    if (!hadKey) queueReactionsForOperation({
        target: target,
        key: key,
        value: value,
        receiver: receiver,
        type: "add"
    });
    else if (value !== oldValue) queueReactionsForOperation({
        target: target,
        key: key,
        value: value,
        oldValue: oldValue,
        receiver: receiver,
        type: "set"
    });
    return result;
}
function deleteProperty(target, key) {
    // save if the object had the key
    var hadKey = hasOwnProperty$1.call(target, key);
    var oldValue = target[key];
    // execute the delete operation before running any reaction
    var result = Reflect.deleteProperty(target, key);
    // only queue reactions for delete operations which resulted in an actual change
    if (hadKey) queueReactionsForOperation({
        target: target,
        key: key,
        oldValue: oldValue,
        type: "delete"
    });
    return result;
}
var baseHandlers = {
    get: get,
    has: has,
    ownKeys: ownKeys,
    set: set,
    deleteProperty: deleteProperty
};
function observable(obj) {
    if (obj === void 0) obj = {};
    // if it is already an observable or it should not be wrapped, return it
    if (proxyToRaw.has(obj) || !shouldInstrument(obj)) return obj;
    // if it already has a cached observable wrapper, return it
    // otherwise create a new observable
    return rawToProxy.get(obj) || createObservable(obj);
}
function createObservable(obj) {
    // if it is a complex built-in object or a normal object, wrap it
    var handlers1 = getHandlers(obj) || baseHandlers;
    var observable1 = new Proxy(obj, handlers1);
    // save these to switch between the raw object and the wrapped object with ease later
    rawToProxy.set(obj, observable1);
    proxyToRaw.set(observable1, obj);
    // init basic data structures to save and cleanup later (observable.prop -> reaction) connections
    storeObservable(obj);
    return observable1;
}
function isObservable(obj) {
    return proxyToRaw.has(obj);
}
function raw(obj) {
    return proxyToRaw.get(obj) || obj;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"6DutT":[function(require,module,exports) {
const appendChild = require("./appendChild");
const COMMENT_TAG = "!--";
// filters for attributes
const isNotXMLNSprop = (prop)=>!/^xmlns($|:)/i.test(prop);
const containsOwnProp = (props)=>(prop)=>Object.prototype.hasOwnProperty.call(props, prop);
// map to objects so we know their value
const toObjectList = (props)=>(prop)=>({
            key: prop,
            value: props[prop]
        });
// transformations for attributes
const normalizeClassName = (prop)=>prop.key.toLowerCase() === "classname" ? {
        key: "class",
        value: prop.value
    } : prop;
const htmlForToFor = (prop)=>prop.key === "htmlFor" ? {
        key: "for",
        value: prop.value
    } : prop;
const addEventToElement = (element, eventKey, eventValue)=>{
    element[eventKey] = eventValue;
    // add event to element list of events
    element.events = element.events ? element.events.concat(eventKey) : [
        eventKey
    ];
};
// handlers that can be filtered on
// if something gets processed, we return false
// otherwise, it returns true, indicating that this thing needs to be processed
const handleEventSetter = (element)=>(prop)=>prop.key.slice(0, 2) === "on" ? addEventToElement(element, prop.key, prop.value) : true;
const handleAttrSetter = (element)=>(prop)=>element.setAttributeNS(null, prop.key, prop.value);
const nanoCreateElement = (namespace)=>(tag, props, children)=>{
        // if the tag is a comment
        if (tag === COMMENT_TAG) return document.createComment(props.comment);
        // create the element
        const element = namespace ? document.createElementNS(namespace, tag) : document.createElement(tag);
        // attach the properties
        Object.keys(props).filter(isNotXMLNSprop).filter(containsOwnProp(props)).map(toObjectList(props)).map(normalizeClassName).map(htmlForToFor).filter(handleEventSetter(element)).filter(handleAttrSetter(element));
        appendChild(element, children);
        return element;
    };
module.exports = nanoCreateElement;
module.exports.html = nanoCreateElement();
module.exports.svg = nanoCreateElement("http://www.w3.org/2000/svg");

},{"./appendChild":"j9lGN"}],"j9lGN":[function(require,module,exports) {
const parseNodeAsString = (node)=>typeof node === "number" || typeof node === "boolean" || typeof node === "function" || node instanceof Date || node instanceof RegExp ? node.toString() : node;
const isNotWhitespace = (node)=>!(typeof node === "string" && /^[\n\r\s]+$/.test(node));
const appendChild = (element, childs)=>{
    if (!Array.isArray(childs)) return;
    childs.map(parseNodeAsString).filter(isNotWhitespace).forEach((node)=>{
        if (Array.isArray(node)) {
            appendChild(element, node);
            return;
        }
        if (typeof node === "string") {
            if (element.lastChild && element.lastChild.nodeName === "#text") {
                element.lastChild.nodeValue += node;
                return;
            }
            node = document.createTextNode(node);
        }
        if (node && node.nodeType) element.appendChild(node);
    });
};
module.exports = appendChild;

},{}],"8PTya":[function(require,module,exports) {
module.exports = function(domBuilder, h, components) {
    const eh = function(tagName, attrs, children) {
        const component = components[tagName];
        const node = component ? component(attrs, children) : h(tagName, attrs, children);
        return node;
    };
    const hx = domBuilder(eh);
    hx.h = eh;
    return hx;
};

},{}],"cQ0tn":[function(require,module,exports) {
const attrToProp = require("hyperscript-attribute-to-property");
const VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4, ATTR_KEY = 5, ATTR_KEY_W = 6, ATTR_VALUE_W = 7, ATTR_VALUE = 8, ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10, ATTR_EQ = 11, ATTR_BREAK = 12, COMMENT = 13, SELF_CLOSE = 14;
module.exports = function(h, opts) {
    if (!opts) opts = {
        comments: true
    };
    const concat = opts.concat || function(a, b) {
        return String(a) + String(b);
    };
    const strfn = (x)=>{
        switch(typeof x){
            case "function":
            case "string":
            case "object":
            case "undefined":
                return x;
            default:
                return concat("", x);
        }
    };
    if (opts.attrToProp !== false) h = attrToProp(h);
    return function(strings) {
        var state = TEXT, reg = "";
        var arglen = arguments.length;
        var parts = [];
        for(var i1 = 0; i1 < strings.length; i1++)if (i1 < arglen - 1) {
            var arg = arguments[i1 + 1];
            var p = parse(strings[i1]);
            var xstate = state;
            switch(xstate){
                case COMMENT:
                    reg += arg;
                    arg = "";
                case ATTR_VALUE_DQ:
                case ATTR_VALUE_SQ:
                case ATTR_VALUE_W:
                    xstate = ATTR_VALUE;
                    break;
                case ATTR:
                    xstate = ATTR_KEY;
                    break;
            }
            p.push([
                VAR,
                xstate,
                arg
            ]);
            parts.push.apply(parts, p);
        } else parts.push.apply(parts, parse(strings[i1]));
        var tree = [
            null,
            {},
            []
        ];
        var stack = [
            [
                tree,
                -1
            ]
        ];
        for(var i1 = 0; i1 < parts.length; i1++){
            var cur = stack[stack.length - 1][0];
            var p = parts[i1], s = p[0];
            if (s === OPEN && /^\//.test(p[1])) {
                var ix = stack[stack.length - 1][1];
                if (stack.length > 1) {
                    stack.pop();
                    stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
                }
            } else if (s === OPEN) {
                var c = [
                    p[1],
                    {},
                    []
                ];
                cur[2].push(c);
                stack.push([
                    c,
                    cur[2].length - 1
                ]);
            } else if (s === ATTR_KEY || s === VAR && p[1] === ATTR_KEY) {
                var key = "";
                var copyKey;
                for(; i1 < parts.length; i1++){
                    if (parts[i1][0] === ATTR_KEY) key = concat(key, parts[i1][1]);
                    else if (parts[i1][0] === VAR && parts[i1][1] === ATTR_KEY) {
                        if (typeof parts[i1][2] === "object" && !key) {
                            for(copyKey in parts[i1][2])if (parts[i1][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) cur[1][copyKey] = parts[i1][2][copyKey];
                        } else key = concat(key, parts[i1][2]);
                    } else break;
                }
                if (parts[i1][0] === ATTR_EQ) i1++;
                var j = i1;
                for(; i1 < parts.length; i1++){
                    if (parts[i1][0] === ATTR_VALUE || parts[i1][0] === ATTR_KEY) {
                        if (!cur[1][key]) cur[1][key] = strfn(parts[i1][1]);
                        else parts[i1][1] === "" || (cur[1][key] = concat(cur[1][key], parts[i1][1]));
                    } else if (parts[i1][0] === VAR && (parts[i1][1] === ATTR_VALUE || parts[i1][1] === ATTR_KEY)) {
                        if (!cur[1][key]) cur[1][key] = strfn(parts[i1][2]);
                        else parts[i1][2] === "" || (cur[1][key] = concat(cur[1][key], parts[i1][2]));
                    } else {
                        if (key.length && !cur[1][key] && i1 === j && (parts[i1][0] === CLOSE || parts[i1][0] === ATTR_BREAK)) // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
                        // empty string is falsy, not well behaved value in browser
                        cur[1][key] = key.toLowerCase();
                        if (parts[i1][0] === CLOSE) i1--;
                        break;
                    }
                }
            } else if (s === SELF_CLOSE) {
                var ix = stack[stack.length - 1][1];
                stack.pop();
                stack[stack.length - 1][0][2][ix] = h(cur[0], cur[1], cur[2].length ? cur[2] : undefined);
            } else if (s === VAR && p[1] === TEXT) {
                if (p[2] === undefined || p[2] === null) p[2] = "";
                else if (!p[2]) p[2] = concat("", p[2]);
                if (Array.isArray(p[2][0])) cur[2].push.apply(cur[2], p[2]);
                else cur[2].push(p[2]);
            } else if (s === TEXT) cur[2].push(p[1]);
            else if (s === ATTR_EQ || s === ATTR_BREAK || s === CLOSE) ;
            else throw new Error("unhandled: " + s);
        }
        if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) tree[2].shift();
        if (tree[2].length > 2 || tree[2].length === 2 && /\S/.test(tree[2][1])) throw new Error("multiple root elements must be wrapped in an enclosing tag");
        if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === "string" && Array.isArray(tree[2][0][2])) tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2]);
        return tree[2][0];
        function parse(str) {
            var res = [];
            if (state === ATTR_VALUE_W) state = ATTR;
            for(var i = 0; i < str.length; i++){
                var c = str.charAt(i);
                if (state === COMMENT) {
                    // ignore until we get to close comment
                    if (/-$/.test(reg) && c === "-") {
                        if (opts.comments) {
                            res.push([
                                ATTR_VALUE,
                                reg.substr(0, reg.length - 1)
                            ], [
                                CLOSE
                            ]);
                        }
                        reg = "";
                        state = TEXT;
                    } else {
                        reg += c;
                        continue;
                    }
                }
                if (state === TEXT && c === "<") {
                    if (reg.length) res.push([
                        TEXT,
                        reg
                    ]);
                    reg = "";
                    state = OPEN;
                } else if (c === ">" && str.charAt(i - 1) === "/") {
                    res.push([
                        SELF_CLOSE
                    ]);
                    reg = "";
                    state = TEXT;
                } else if (c === ">" && str.charAt(i - 1) === "-" && str.charAt(i - 2) === "-") {
                    res.push([
                        SELF_CLOSE
                    ]);
                    reg = "";
                    state = TEXT;
                } else if (c === ">" && !quot(state) && state !== COMMENT) {
                    if (state === OPEN) {
                        res.push([
                            OPEN,
                            reg
                        ]);
                    } else if (state === ATTR_KEY) {
                        res.push([
                            ATTR_KEY,
                            reg
                        ]);
                    } else if (state === ATTR_VALUE && reg.length) {
                        res.push([
                            ATTR_VALUE,
                            reg
                        ]);
                    }
                    res.push([
                        CLOSE
                    ]);
                    reg = "";
                    state = TEXT;
                } else if (state === OPEN && /^!--$/.test(reg)) {
                    if (opts.comments) {
                        res.push([
                            OPEN,
                            reg
                        ], [
                            ATTR_KEY,
                            "comment"
                        ], [
                            ATTR_EQ
                        ]);
                    }
                    reg = c;
                    state = COMMENT;
                } else if (state === TEXT) {
                    reg += c;
                } else if (state === OPEN && c === "/" && reg.length) {
                    res.push([
                        OPEN,
                        reg
                    ]);
                    reg = "";
                    state = TEXT;
                } else if (state === OPEN && /\s/.test(c)) {
                    res.push([
                        OPEN,
                        reg
                    ]);
                    reg = "";
                    state = ATTR;
                } else if (state === OPEN) {
                    reg += c;
                } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
                    state = ATTR_KEY;
                    reg = c;
                } else if (state === ATTR && /\s/.test(c)) {
                    if (reg.length) res.push([
                        ATTR_KEY,
                        reg
                    ]);
                    res.push([
                        ATTR_BREAK
                    ]);
                } else if (state === ATTR_KEY && /\s/.test(c)) {
                    res.push([
                        ATTR_KEY,
                        reg
                    ]);
                    reg = "";
                    state = ATTR_KEY_W;
                } else if (state === ATTR_KEY && c === "=") {
                    res.push([
                        ATTR_KEY,
                        reg
                    ], [
                        ATTR_EQ
                    ]);
                    reg = "";
                    state = ATTR_VALUE_W;
                } else if (state === ATTR_KEY) {
                    reg += c;
                } else if ((state === ATTR_KEY_W || state === ATTR) && c === "=") {
                    res.push([
                        ATTR_EQ
                    ]);
                    state = ATTR_VALUE_W;
                } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
                    res.push([
                        ATTR_BREAK
                    ]);
                    if (/[\w-]/.test(c)) {
                        reg += c;
                        state = ATTR_KEY;
                    } else state = ATTR;
                } else if (state === ATTR_VALUE_W && c === '"') {
                    state = ATTR_VALUE_DQ;
                } else if (state === ATTR_VALUE_W && c === "'") {
                    state = ATTR_VALUE_SQ;
                } else if (state === ATTR_VALUE_DQ && c === '"') {
                    res.push([
                        ATTR_VALUE,
                        reg
                    ], [
                        ATTR_BREAK
                    ]);
                    reg = "";
                    state = ATTR;
                } else if (state === ATTR_VALUE_SQ && c === "'") {
                    res.push([
                        ATTR_VALUE,
                        reg
                    ], [
                        ATTR_BREAK
                    ]);
                    reg = "";
                    state = ATTR;
                } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
                    state = ATTR_VALUE;
                    i--;
                } else if (state === ATTR_VALUE && /\s/.test(c)) {
                    res.push([
                        ATTR_VALUE,
                        reg
                    ], [
                        ATTR_BREAK
                    ]);
                    reg = "";
                    state = ATTR;
                } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
                    reg += c;
                }
            }
            if (reg.length) {
                switch(state){
                    case TEXT:
                        res.push([
                            TEXT,
                            reg
                        ]);
                        reg = "";
                        break;
                    case ATTR_VALUE:
                    case ATTR_VALUE_DQ:
                    case ATTR_VALUE_SQ:
                        res.push([
                            ATTR_VALUE,
                            reg
                        ]);
                        reg = "";
                        break;
                }
            }
            if (state === ATTR_KEY) {
                res.push([
                    ATTR_KEY,
                    reg
                ]);
                reg = "";
            }
            return res;
        }
    };
};
const quot = (state)=>state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ;

},{"hyperscript-attribute-to-property":"4Uyvk"}],"4Uyvk":[function(require,module,exports) {
module.exports = attributeToProperty;
var transform = {
    "class": "className",
    "for": "htmlFor",
    "http-equiv": "httpEquiv"
};
function attributeToProperty(h) {
    return function(tagName, attrs, children) {
        for(var attr in attrs)if (attr in transform) {
            attrs[transform[attr]] = attrs[attr];
            delete attrs[attr];
        }
        return h(tagName, attrs, children);
    };
}

},{}],"kDHfu":[function(require,module,exports) {
module.exports = (callback)=>{
    window.addEventListener("hashchange", callback, false);
    window.addEventListener("popstate", callback, false);
    const pushState = window.history.pushState;
    window.history.pushState = (state, ...args)=>{
        const returnValue = pushState.apply(history, [
            state
        ].concat(args));
        callback({
            state
        });
        return returnValue;
    };
};

},{}],"3ANBp":[function(require,module,exports) {
const setupUrlParams = require("./setupUrlParams");
const useUrlParams = require("./useUrlParams");
module.exports = useUrlParams;
useUrlParams.setupUrlParams = setupUrlParams;
useUrlParams.useUrlParams = useUrlParams;

},{"./setupUrlParams":"ja17x","./useUrlParams":"1RHGP"}],"ja17x":[function(require,module,exports) {
const urlParamHook = require("./urlParamHook");
/**
 * @see https://tram-one.io/api/#Tram-One#useUrlParams
 * @name useUrlParams
 *
 * @param {function} [getPath] - function to return the current path, defaults to reading window.location.href
 * @returns the useUrlParams hook
 */ module.exports = urlParamHook;

},{"./urlParamHook":"ioOUq"}],"ioOUq":[function(require,module,exports) {
const rlite = require("rlite-router");
const onNonMatchingPath = ()=>({
        matches: false
    });
const returnParams = (params)=>({
        matches: true,
        ...params
    });
module.exports = (getPath)=>(pattern = "*")=>rlite(onNonMatchingPath, {
            [pattern]: returnParams
        })(getPath());

},{"rlite-router":"L6h77"}],"L6h77":[function(require,module,exports) {
// This library started as an experiment to see how small I could make
// a functional router. It has since been optimized (and thus grown).
// The redundancy and inelegance here is for the sake of either size
// or speed.
//
// That's why router params are marked with a single char: `~` and named params are denoted `:`
(function(root, factory) {
    var define = root && root.define;
    if (define && define.amd) define("rlite", [], factory);
    else if (module.exports) module.exports = factory();
    else root.Rlite = factory();
})(this, function() {
    return function(notFound, routeDefinitions) {
        var routes = {};
        var decode = decodeURIComponent;
        init();
        return run;
        function init() {
            for(var key in routeDefinitions){
                add(key, routeDefinitions[key]);
            }
        }
        function noop(s) {
            return s;
        }
        function sanitize(url) {
            ~url.indexOf("/?") && (url = url.replace("/?", "?"));
            url[0] == "/" && (url = url.slice(1));
            url[url.length - 1] == "/" && (url = url.slice(0, -1));
            return url;
        }
        // Recursively searches the route tree for a matching route
        // pieces: an array of url parts, ['users', '1', 'edit']
        // esc: the function used to url escape values
        // i: the index of the piece being processed
        // rules: the route tree
        // params: the computed route parameters (this is mutated), and is a stack since we don't have fast immutable datatypes
        //
        // This attempts to match the most specific route, but may end int a dead-end. We then attempt a less specific
        // route, following named route parameters. In searching this secondary branch, we need to make sure to clear
        // any route params that were generated during the search of the dead-end branch.
        function recurseUrl(pieces, esc, i, rules, params) {
            if (!rules) {
                return;
            }
            if (i >= pieces.length) {
                var cb = rules["@"];
                return cb && {
                    cb: cb,
                    params: params.reduce(function(h, kv) {
                        h[kv[0]] = kv[1];
                        return h;
                    }, {})
                };
            }
            var piece = esc(pieces[i]);
            var paramLen = params.length;
            return recurseUrl(pieces, esc, i + 1, rules[piece.toLowerCase()], params) || recurseNamedUrl(pieces, esc, i + 1, rules, ":", piece, params, paramLen) || recurseNamedUrl(pieces, esc, pieces.length, rules, "*", pieces.slice(i).join("/"), params, paramLen);
        }
        // Recurses for a named route, where the name is looked up via key and associated with val
        function recurseNamedUrl(pieces, esc, i, rules, key, val, params, paramLen) {
            params.length = paramLen; // Reset any params generated in the unsuccessful search branch
            var subRules = rules[key];
            subRules && params.push([
                subRules["~"],
                val
            ]);
            return recurseUrl(pieces, esc, i, subRules, params);
        }
        function processQuery(url, ctx, esc) {
            if (url && ctx.cb) {
                var hash = url.indexOf("#"), query = (hash < 0 ? url : url.slice(0, hash)).split("&");
                for(var i = 0; i < query.length; ++i){
                    var nameValue = query[i].split("=");
                    ctx.params[nameValue[0]] = esc(nameValue[1]);
                }
            }
            return ctx;
        }
        function lookup(url) {
            var querySplit = sanitize(url).split("?");
            var esc = ~url.indexOf("%") ? decode : noop;
            return processQuery(querySplit[1], recurseUrl(querySplit[0].split("/"), esc, 0, routes, []) || {}, esc);
        }
        function add(route, handler) {
            var pieces = route.split("/");
            var rules = routes;
            for(var i = +(route[0] === "/"); i < pieces.length; ++i){
                var piece = pieces[i];
                var name = piece[0] == ":" ? ":" : piece[0] == "*" ? "*" : piece.toLowerCase();
                rules = rules[name] || (rules[name] = {});
                (name == ":" || name == "*") && (rules["~"] = piece.slice(1));
            }
            rules["@"] = handler;
        }
        function run(url, arg) {
            var result = lookup(url);
            return (result.cb || notFound)(result.params, arg, url);
        }
    };
});

},{}],"1RHGP":[function(require,module,exports) {
const urlParamHook = require("./urlParamHook");
const defaultGetPath = ()=>{
    // strip origin from url
    const fullUrl = window.location.href;
    const urlPath = fullUrl.replace(window.location.origin, "");
    const [urlWithoutHash, hash] = urlPath.split("#");
    // check if the url has a parameter (so we can determine how to re-add the hash)
    const urlHasParam = urlWithoutHash.includes("?");
    const hashParameter = hash !== undefined ? urlHasParam ? `&hash=${hash}` : `?hash=${hash}` : "";
    // return the complete url with hash-fragment as query param
    // e.g. tram-one.io#features => tram-one.io?hash=features
    const urlWithHashAsParam = `${urlWithoutHash}${hashParameter}`;
    return urlWithHashAsParam;
};
/**
 * @see https://tram-one.io/#use-url-params
 *
 * @description
 * Hook that returns path variables based on the route.
 * Can return path parameters, query params, and more.
 * It's internal functionality is powered by the package
 * {@link https://www.npmjs.com/package/rlite-router | rlite}
 *
 * Rather than using XML templates to define routes, this method enables
 * routing in javascript.https://github.com/Tram-One/useUrlParams/pull/9
 *
 * @param {String} [pattern] path for resolving path parameters (not required for query params)
 *
 * @returns {Object} object with a `matches` key, and (if it matched) path and query parameters
 */ module.exports = urlParamHook(defaultGetPath);

},{"./urlParamHook":"ioOUq"}],"kuM8f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tramOne = require("tram-one");
var _selectionCard = require("./selection-card");
var _selectionCardDefault = parcelHelpers.interopDefault(_selectionCard);
var _appCss = require("./app.css");
var _pageScroller = require("./page-scroller");
var _pageScrollerDefault = parcelHelpers.interopDefault(_pageScroller);
var _page = require("./page");
var _pageDefault = parcelHelpers.interopDefault(_page);
const html = (0, _tramOne.registerHtml)({
    "selection-card": (0, _selectionCardDefault.default),
    "page-scroller": (0, _pageScrollerDefault.default),
    page: (0, _pageDefault.default)
});
const app = ()=>{
    return html`
    <main class="app">
      <page-scroller>
        <page title="Character Guide" selection="character-guide">
          <selection-card id="race" title="Choose a Race" />
          <selection-card id="class" title="Choose a Class" />
          <selection-card id="background" title="Choose a Background" />
          <selection-card id="language" title="Additional Language" />
          <selection-card id="unarmed-strike" title="Add Unarmed Strike" />
          <selection-card id="stat-block" title="Set Stat Blocks" />
          <selection-card id="spellcasting" title="Set Spellcasting Details" />
          <selection-card id="atk-bonus" title="Fill in Attack Bonus" />
        </page>
        <page title="Choose a Race" selection="race">
          Details can be found in the Unearthed Arcana - Origins (page 3-10)
          <ol>
            <li>Write your race (and sub-race) in the "RACE" in the header</li>
            <li>Write your movement speed in the "SPEED" box</li>
            <li>Write special traits in the "FEATURES & TRAITS" box</li>
          </ol>
        </page>
        <page title="Choose a Class" selection="class">
          Read the Classes in the PHB (page XXX)
          <ol>
            <li>
              Set your "HIT DICE" to whatever value dice roll for your class
              (e.g. 1d8) and write "1 of 1" for your "Total"
            </li>
            <li>
              Write your armor, weapon, and tool proficiencies in the bottom
              right box under "OTHER PROFICIENCIES & LANGUAGES"
            </li>
            <li>
              Mark your 2 chosen skill proficiencies by filling in the circle in
              the "SKILLS" box
            </li>
            <li>
              Select your starting equipment and add any damage options in
              "ATTACKS & SPELLCASTING" (Ignore ATK BONUS for now)
            </li>
            <li>Add any 1st level features to the "FEATURES & TRAITS" box</li>
            <li>
              If you get spellcasting as part of your 1st level features, add
              damage spells to the "ATTACKS & SPELLCASTING" section (Ignore ATK
              BONUS for now), and list spells in the dedicated Spellcasting
              sheet.
            </li>
          </ol>
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
        <page title="Additional Language" selection="language">
          Add an additional starting language (UA Origins, pg 16)
        </page>
        <page title="Add Unarmed Strike" selection="unarmed-strike">
          (UA Origins, pg 20) to the "ATTACKS & SPELLCASTING" section
        </page>
        <page title="Set Stat Blocks" selection="stat-block">
          Set your stats using the standard array - 15, 14, 13, 12, 10, 8

          <ol>
            <li>
              Add an additional +2 and +1 to any two stats based on your
              background
              <ul>
                <li>You may choose any stats, as long as they are thematic.</li>
                <li>
                  Note: you benefit from even number values, so use these to get
                  to 16, 14, etc
                </li>
              </ul>
            </li>
            <li>Set Proficiency Modifier (+2)</li>
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
              <br />
              <li>
                If you got spellcasting from "MAGIC INITIATE" feat, choose one
                from INT, WIS, CHA
              </li>
            </ul>
          </fieldset>
        </page>
        <page title="Fill in Attack Bonus" selection="atk-bonus">
          Fill in "ATK BONUS" in the "ATTACKS & SPELLCASTING" section.
          <ul>
            <ol>
              For melee weapon attacks, add your STR modifier + Proficiency
              bonus
            </ol>
            <ol>
              For finess weapons, add either your STR or DEX modifier +
              Proficiency bonus
            </ol>
            <ol>
              For ranged weapons, add either your DEX modifier + Proficiency
              bonus
            </ol>
            <ol>
              For spells (that ask for an attack roll, not a DC check) use your
              "SPELL ATTACK BONUS"
            </ol>
            <ol>
              For spells that have a Spell Save DC check use your "SPELL SAVE
              DC"
            </ol>
          </ul>
        </page>
      </page-scroller>
    </main>
  `;
};
exports.default = app;

},{"tram-one":"6M5Af","./selection-card":"6ylXT","./app.css":"j7YWT","./page-scroller":"1vmnf","./page":"4GSC5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ylXT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _selectionCardDefault.default));
var _selectionCard = require("./selection-card");
var _selectionCardDefault = parcelHelpers.interopDefault(_selectionCard);

},{"./selection-card":"8pitB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pitB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tramOne = require("tram-one");
var _selectionCardCss = require("./selection-card.css");
const html = (0, _tramOne.registerHtml)();
const selectionCard = ({ id , title  }, children)=>{
    return html`
    <h2>
      <input
        class="selection-card"
        type="radio"
        id=${id}
        name="selection"
        value=${id}
      />
      <label for=${id}>${title}</label>
    </h2>
  `;
};
exports.default = selectionCard;

},{"tram-one":"6M5Af","./selection-card.css":"9QuUT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9QuUT":[function() {},{}],"j7YWT":[function() {},{}],"1vmnf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _pageScrollerDefault.default));
var _pageScroller = require("./page-scroller");
var _pageScrollerDefault = parcelHelpers.interopDefault(_pageScroller);

},{"./page-scroller":"eSrcT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSrcT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tramOne = require("tram-one");
var _page = require("../page");
var _pageDefault = parcelHelpers.interopDefault(_page);
var _pageScrollerCss = require("./page-scroller.css");
const html = (0, _tramOne.registerHtml)({
    page: (0, _pageDefault.default),
    "blank-page": (0, _page.blankPage)
});
const pageScroller = (props, pages)=>{
    const scrollToPage = (pageScrollerElement)=>{
        // get the current scroll position (we'll go back here later before moving)
        const currentScrollPosition = pageScrollerElement.scrollLeft;
        // determine what page was given focus
        const focusedPage = document.querySelector(".page:focus-within");
        // put all the elements at their original offset
        pageScrollerElement.scrollLeft = 0;
        // get the location of the page now
        const pageOffset = focusedPage.offsetLeft;
        // we don't need the page to be right along the left side
        const pagePreOffset = window.innerWidth / 4;
        // build the new position to scroll to based on the where the page is, and the preoffset
        const newScrollPosition = pageOffset - pagePreOffset;
        // check if the user has preferred reduced motion (in that case we won't do a smooth transiiton)
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        // reset the scroll to what it was before we started,
        // and then smooth transition to the new location
        pageScrollerElement.scrollTo({
            left: currentScrollPosition
        });
        pageScrollerElement.scrollTo({
            left: newScrollPosition,
            behavior: prefersReducedMotion ? "auto" : "smooth"
        });
    };
    (0, _tramOne.useEffect)((pageScroller1)=>{
        // get the page-scroller-flex (this is the element which actually scrolls)
        const pageScrollerElement = pageScroller1.querySelector(`.page-scroller-flex`);
        // for some reason, it's not possible to set onfocusin direclty with JS
        // this is documented in w3schools
        pageScrollerElement.addEventListener("focusin", ()=>scrollToPage(pageScrollerElement));
    });
    return html` <section class="page-scroller">
    <section class="page-scroller-flex">${pages} <blank-page /></section>
  </section>`;
};
exports.default = pageScroller;

},{"tram-one":"6M5Af","../page":"4GSC5","./page-scroller.css":"1WvbW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4GSC5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "blankPage", ()=>(0, _blankPageDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _pageDefault.default));
var _blankPage = require("./blank-page");
var _blankPageDefault = parcelHelpers.interopDefault(_blankPage);
var _page = require("./page");
var _pageDefault = parcelHelpers.interopDefault(_page);

},{"./blank-page":"fBpDT","./page":"1i2N1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBpDT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tramOne = require("tram-one");
var _blankPageCss = require("./blank-page.css");
const html = (0, _tramOne.registerHtml)();
const blankPage = ()=>{
    return html` <section class="blank-page" /> `;
};
exports.default = blankPage;

},{"tram-one":"6M5Af","./blank-page.css":"5Dihe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Dihe":[function() {},{}],"1i2N1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tramOne = require("tram-one");
var _expandedPageCss = require("./expanded-page.css");
var _pageColorsCss = require("./page-colors.css");
const html = (0, _tramOne.registerHtml)();
const page = ({ title , selection  }, children)=>{
    return html`
    <section class="page" page-color="grey" page-selection=${selection}>
      <h2>${title}</h2>
      ${children}
    </section>
  `;
};
exports.default = page;

},{"tram-one":"6M5Af","./expanded-page.css":"6hQ31","./page-colors.css":"aHRUX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6hQ31":[function() {},{}],"aHRUX":[function() {},{}],"1WvbW":[function() {},{}],"irmnC":[function() {},{}]},["17ZdQ","h7u1C"], "h7u1C", "parcelRequire14ce")

//# sourceMappingURL=index.b71e74eb.js.map
