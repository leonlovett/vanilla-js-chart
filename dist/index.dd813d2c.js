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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"5tD9r":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "32b2fb09dd813d2c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
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
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"d9j9x":[function(require,module,exports) {
var _ibmJson = require("../data/ibm.json");
var _chart = require("./chart");
const data = Object.assign([], _ibmJson);
transformData();
const chart = new _chart.Chart(data);
chart.drawChart();
window.addEventListener('resize', ()=>{
    chart.drawChart();
});
function transformData() {
    data = data.map((price)=>{
        price.sortDate = new Date(price.Date);
        return price;
    });
    data = data.sort((a, b)=>b.sortDate - a.sortDate
    );
    calculateAverages();
}
function calculateAverages() {
    data.forEach((day, idx)=>{
        const start = idx <= 19 ? 0 : idx - 20;
        const dayRange = data.slice(start, idx).map((x)=>x.Close
        );
        let total;
        if (dayRange.length > 0) total = dayRange.reduce((prev, curr)=>prev + curr
        );
        day.movingAvg = total / dayRange.length;
    });
    data.splice(0, 1);
}

},{"../data/ibm.json":"2uZNu","./chart":"dBXnG"}],"2uZNu":[function(require,module,exports) {
module.exports = JSON.parse("[{\"Date\":\"2020-11-30\",\"Open\":118.642448,\"High\":119.502869,\"Low\":117.676865,\"Close\":118.087952,\"Adj Close\":112.43116,\"Volume\":6263448},{\"Date\":\"2020-12-01\",\"Open\":118.451241,\"High\":120.296364,\"Low\":117.667305,\"Close\":117.74379,\"Adj Close\":112.103485,\"Volume\":5553319},{\"Date\":\"2020-12-02\",\"Open\":117.447418,\"High\":119.158699,\"Low\":117.026772,\"Close\":119.13958,\"Adj Close\":113.432404,\"Volume\":3860472},{\"Date\":\"2020-12-03\",\"Open\":118.699806,\"High\":119.369026,\"Low\":117.868073,\"Close\":118.173996,\"Adj Close\":112.513084,\"Volume\":4757417},{\"Date\":\"2020-12-04\",\"Open\":118.518166,\"High\":121.778206,\"Low\":118.202675,\"Close\":121.606117,\"Adj Close\":115.780792,\"Volume\":5776849},{\"Date\":\"2020-12-07\",\"Open\":120.927345,\"High\":121.38623,\"Low\":119.091782,\"Close\":119.216064,\"Adj Close\":113.505226,\"Volume\":8701151},{\"Date\":\"2020-12-08\",\"Open\":119.808792,\"High\":120.774376,\"Low\":119.158699,\"Close\":120.181641,\"Adj Close\":114.424561,\"Volume\":5643170},{\"Date\":\"2020-12-09\",\"Open\":120.267685,\"High\":122.07457,\"Low\":120.172081,\"Close\":121.214149,\"Adj Close\":115.4076,\"Volume\":6813121},{\"Date\":\"2020-12-10\",\"Open\":120.793503,\"High\":121.347992,\"Low\":119.445503,\"Close\":119.46463,\"Adj Close\":113.74189,\"Volume\":5024147},{\"Date\":\"2020-12-11\",\"Open\":118.623329,\"High\":119.99044,\"Low\":118.173996,\"Close\":118.80497,\"Adj Close\":113.113831,\"Volume\":4687544},{\"Date\":\"2020-12-14\",\"Open\":119.808792,\"High\":120.688339,\"Low\":118.040154,\"Close\":118.097511,\"Adj Close\":112.440254,\"Volume\":5282300},{\"Date\":\"2020-12-15\",\"Open\":118.919693,\"High\":120.391968,\"Low\":118.011475,\"Close\":120.391968,\"Adj Close\":114.624809,\"Volume\":4556585},{\"Date\":\"2020-12-16\",\"Open\":120.391968,\"High\":121.003822,\"Low\":119.780113,\"Close\":120.028679,\"Adj Close\":114.278923,\"Volume\":4738485},{\"Date\":\"2020-12-17\",\"Open\":120.53537,\"High\":120.54493,\"Low\":119.416824,\"Close\":120.028679,\"Adj Close\":114.278923,\"Volume\":3962248},{\"Date\":\"2020-12-18\",\"Open\":120.066925,\"High\":120.841301,\"Low\":119.47419,\"Close\":120.315491,\"Adj Close\":114.551994,\"Volume\":7900229},{\"Date\":\"2020-12-21\",\"Open\":118.518166,\"High\":118.718925,\"Low\":116.367111,\"Close\":117.963669,\"Adj Close\":112.312836,\"Volume\":6397022},{\"Date\":\"2020-12-22\",\"Open\":117.887192,\"High\":118.757172,\"Low\":117.026772,\"Close\":118.173996,\"Adj Close\":112.513084,\"Volume\":4535561},{\"Date\":\"2020-12-23\",\"Open\":118.432121,\"High\":119.703636,\"Low\":118.298279,\"Close\":118.451241,\"Adj Close\":112.777039,\"Volume\":2817819},{\"Date\":\"2020-12-24\",\"Open\":119.502869,\"High\":119.598473,\"Low\":118.747612,\"Close\":119.206497,\"Adj Close\":113.496124,\"Volume\":1842111},{\"Date\":\"2020-12-28\",\"Open\":119.598473,\"High\":121.032501,\"Low\":118.986618,\"Close\":119.330788,\"Adj Close\":113.614464,\"Volume\":3781499},{\"Date\":\"2020-12-29\",\"Open\":119.837479,\"High\":119.961761,\"Low\":117.820267,\"Close\":118.355644,\"Adj Close\":112.686028,\"Volume\":3647402},{\"Date\":\"2020-12-30\",\"Open\":118.355644,\"High\":119.359467,\"Low\":118.193115,\"Close\":118.871895,\"Adj Close\":113.177551,\"Volume\":3535794},{\"Date\":\"2020-12-31\",\"Open\":118.757172,\"High\":120.487572,\"Low\":118.537285,\"Close\":120.34417,\"Adj Close\":114.579292,\"Volume\":3738822},{\"Date\":\"2021-01-04\",\"Open\":120.315491,\"High\":120.382408,\"Low\":117.629066,\"Close\":118.489487,\"Adj Close\":112.813454,\"Volume\":5417443},{\"Date\":\"2021-01-05\",\"Open\":119.512428,\"High\":121.108986,\"Low\":119.13002,\"Close\":120.592735,\"Adj Close\":114.815948,\"Volume\":6395872},{\"Date\":\"2021-01-06\",\"Open\":121.319313,\"High\":126.080307,\"Low\":121.147224,\"Close\":123.60421,\"Adj Close\":117.683167,\"Volume\":8322708},{\"Date\":\"2021-01-07\",\"Open\":124.32122,\"High\":124.722755,\"Low\":122.619499,\"Close\":123.317398,\"Adj Close\":117.410095,\"Volume\":4714740},{\"Date\":\"2021-01-08\",\"Open\":122.915871,\"High\":123.632889,\"Low\":121.39579,\"Close\":122.877632,\"Adj Close\":116.991394,\"Volume\":4891305},{\"Date\":\"2021-01-11\",\"Open\":122.323135,\"High\":123.977058,\"Low\":122.045891,\"Close\":122.92543,\"Adj Close\":117.036911,\"Volume\":5859587},{\"Date\":\"2021-01-12\",\"Open\":123.413002,\"High\":124.13958,\"Low\":122.313576,\"Close\":123.527725,\"Adj Close\":117.610344,\"Volume\":3921663},{\"Date\":\"2021-01-13\",\"Open\":123.47036,\"High\":124.043976,\"Low\":120.898659,\"Close\":121.338432,\"Adj Close\":115.525932,\"Volume\":8030874},{\"Date\":\"2021-01-14\",\"Open\":122.39006,\"High\":124.435944,\"Low\":121.940727,\"Close\":123.298279,\"Adj Close\":117.391891,\"Volume\":7848347},{\"Date\":\"2021-01-15\",\"Open\":122.638626,\"High\":123.556404,\"Low\":122.05545,\"Close\":122.74379,\"Adj Close\":116.863968,\"Volume\":5131153},{\"Date\":\"2021-01-19\",\"Open\":123.594643,\"High\":123.891014,\"Low\":122.456978,\"Close\":123.346077,\"Adj Close\":117.437401,\"Volume\":5646308},{\"Date\":\"2021-01-20\",\"Open\":123.996178,\"High\":125.296364,\"Low\":122.906311,\"Close\":124.359467,\"Adj Close\":118.402252,\"Volume\":5856240},{\"Date\":\"2021-01-21\",\"Open\":124.397705,\"High\":126.424477,\"Low\":124.330788,\"Close\":125.86042,\"Adj Close\":119.831299,\"Volume\":13116003},{\"Date\":\"2021-01-22\",\"Open\":115.391968,\"High\":115.391968,\"Low\":112.198853,\"Close\":113.393883,\"Adj Close\":107.961945,\"Volume\":39814421},{\"Date\":\"2021-01-25\",\"Open\":113.537285,\"High\":114.282982,\"Low\":112.284897,\"Close\":113.365204,\"Adj Close\":107.934639,\"Volume\":14315974},{\"Date\":\"2021-01-26\",\"Open\":113.938812,\"High\":117.198853,\"Low\":113.212234,\"Close\":117.103249,\"Adj Close\":111.493622,\"Volume\":11186656},{\"Date\":\"2021-01-27\",\"Open\":116.711281,\"High\":119.302101,\"Low\":116.271507,\"Close\":117.084129,\"Adj Close\":111.475418,\"Volume\":12705239},{\"Date\":\"2021-01-28\",\"Open\":117.39962,\"High\":117.782028,\"Low\":114.789673,\"Close\":114.799232,\"Adj Close\":109.29998,\"Volume\":8455969},{\"Date\":\"2021-01-29\",\"Open\":114.933075,\"High\":115.965584,\"Low\":113.671127,\"Close\":113.871895,\"Adj Close\":108.417061,\"Volume\":12369473},{\"Date\":\"2021-02-01\",\"Open\":114.627151,\"High\":115.630974,\"Low\":113.508606,\"Close\":115.239006,\"Adj Close\":109.718689,\"Volume\":6538023},{\"Date\":\"2021-02-02\",\"Open\":114.110901,\"High\":115.67878,\"Low\":114.034416,\"Close\":114.187378,\"Adj Close\":108.717438,\"Volume\":6633627},{\"Date\":\"2021-02-03\",\"Open\":113.80497,\"High\":114.531548,\"Low\":112.92543,\"Close\":113.881454,\"Adj Close\":108.426163,\"Volume\":7024308},{\"Date\":\"2021-02-04\",\"Open\":114.636711,\"High\":115.774376,\"Low\":113.642448,\"Close\":115.697899,\"Adj Close\":110.155594,\"Volume\":4771957},{\"Date\":\"2021-02-05\",\"Open\":115.67878,\"High\":116.453156,\"Low\":115.219887,\"Close\":116.434036,\"Adj Close\":110.856468,\"Volume\":4775722},{\"Date\":\"2021-02-08\",\"Open\":117.227531,\"High\":118.527725,\"Low\":117.017204,\"Close\":118.173996,\"Adj Close\":112.513084,\"Volume\":6158848},{\"Date\":\"2021-02-09\",\"Open\":116.5392,\"High\":117.208412,\"Low\":115.726578,\"Close\":116.7304,\"Adj Close\":112.623764,\"Volume\":4933982},{\"Date\":\"2021-02-10\",\"Open\":117.619499,\"High\":117.982796,\"Low\":115.879539,\"Close\":116.864243,\"Adj Close\":112.752899,\"Volume\":5090673},{\"Date\":\"2021-02-11\",\"Open\":116.634796,\"High\":116.835564,\"Low\":115.32505,\"Close\":115.592735,\"Adj Close\":111.526123,\"Volume\":5629154},{\"Date\":\"2021-02-12\",\"Open\":115.67878,\"High\":116.022942,\"Low\":114.808792,\"Close\":115.487572,\"Adj Close\":111.42466,\"Volume\":4049275},{\"Date\":\"2021-02-16\",\"Open\":114.866158,\"High\":115.296364,\"Low\":114.110901,\"Close\":114.789673,\"Adj Close\":110.751312,\"Volume\":6945231},{\"Date\":\"2021-02-17\",\"Open\":114.024857,\"High\":115.258125,\"Low\":113.785851,\"Close\":114.694077,\"Adj Close\":110.659081,\"Volume\":4141219},{\"Date\":\"2021-02-18\",\"Open\":115.200768,\"High\":115.621414,\"Low\":114.435944,\"Close\":115.420647,\"Adj Close\":111.360085,\"Volume\":5646413},{\"Date\":\"2021-02-19\",\"Open\":115.439774,\"High\":115.449333,\"Low\":113.173996,\"Close\":113.757172,\"Adj Close\":109.755135,\"Volume\":6881320},{\"Date\":\"2021-02-22\",\"Open\":113.288719,\"High\":115.803062,\"Low\":113.231361,\"Close\":115.54493,\"Adj Close\":111.480003,\"Volume\":6149643},{\"Date\":\"2021-02-23\",\"Open\":115.602295,\"High\":116.013382,\"Low\":114.531548,\"Close\":115.401527,\"Adj Close\":111.341637,\"Volume\":4739740},{\"Date\":\"2021-02-24\",\"Open\":115.487572,\"High\":118.059273,\"Low\":115.219887,\"Close\":117.791588,\"Adj Close\":113.647614,\"Volume\":6087720},{\"Date\":\"2021-02-25\",\"Open\":117.94455,\"High\":118.881454,\"Low\":116.959846,\"Close\":117.084129,\"Adj Close\":112.96505,\"Volume\":5953623},{\"Date\":\"2021-02-26\",\"Open\":116.873802,\"High\":116.873802,\"Low\":113.652008,\"Close\":113.699806,\"Adj Close\":109.699791,\"Volume\":9467346},{\"Date\":\"2021-03-01\",\"Open\":115.057358,\"High\":116.940727,\"Low\":114.588913,\"Close\":115.430206,\"Adj Close\":111.369308,\"Volume\":5977367},{\"Date\":\"2021-03-02\",\"Open\":115.430206,\"High\":116.5392,\"Low\":114.971321,\"Close\":115.038239,\"Adj Close\":110.991135,\"Volume\":4732418},{\"Date\":\"2021-03-03\",\"Open\":115.200768,\"High\":117.237091,\"Low\":114.703636,\"Close\":116.978966,\"Adj Close\":112.863586,\"Volume\":7744898},{\"Date\":\"2021-03-04\",\"Open\":116.634796,\"High\":117.801147,\"Low\":113.537285,\"Close\":114.827919,\"Adj Close\":110.788208,\"Volume\":8439651},{\"Date\":\"2021-03-05\",\"Open\":115.33461,\"High\":118.307838,\"Low\":114.961761,\"Close\":117.428299,\"Adj Close\":113.297112,\"Volume\":7268968},{\"Date\":\"2021-03-08\",\"Open\":117.581261,\"High\":121.271507,\"Low\":117.476097,\"Close\":119.32122,\"Adj Close\":115.123436,\"Volume\":7572203},{\"Date\":\"2021-03-09\",\"Open\":119.885277,\"High\":120.86998,\"Low\":118.699806,\"Close\":118.718925,\"Adj Close\":114.542328,\"Volume\":5867014},{\"Date\":\"2021-03-10\",\"Open\":119.550667,\"High\":122.60038,\"Low\":119.13002,\"Close\":122.246651,\"Adj Close\":117.945946,\"Volume\":7581199},{\"Date\":\"2021-03-11\",\"Open\":122.456978,\"High\":122.982796,\"Low\":121.20459,\"Close\":121.548759,\"Adj Close\":117.272614,\"Volume\":5383657},{\"Date\":\"2021-03-12\",\"Open\":121.596558,\"High\":122.06501,\"Low\":121.042068,\"Close\":121.998085,\"Adj Close\":117.706123,\"Volume\":4194565},{\"Date\":\"2021-03-15\",\"Open\":122.151054,\"High\":123.087952,\"Low\":121.931168,\"Close\":122.92543,\"Adj Close\":118.600853,\"Volume\":3577948},{\"Date\":\"2021-03-16\",\"Open\":122.638626,\"High\":122.868073,\"Low\":121.73996,\"Close\":122.60038,\"Adj Close\":118.287239,\"Volume\":4867247},{\"Date\":\"2021-03-17\",\"Open\":122.810707,\"High\":123.79541,\"Low\":121.883362,\"Close\":123.355644,\"Adj Close\":119.01593,\"Volume\":4488804},{\"Date\":\"2021-03-18\",\"Open\":123.2696,\"High\":125.239006,\"Low\":122.170174,\"Close\":124.340347,\"Adj Close\":119.965996,\"Volume\":6104142},{\"Date\":\"2021-03-19\",\"Open\":124.302101,\"High\":124.703636,\"Low\":122.877632,\"Close\":123.231361,\"Adj Close\":118.896027,\"Volume\":10297870},{\"Date\":\"2021-03-22\",\"Open\":122.848946,\"High\":124.971321,\"Low\":122.265778,\"Close\":124.808792,\"Adj Close\":120.417953,\"Volume\":4356485},{\"Date\":\"2021-03-23\",\"Open\":124.703636,\"High\":125.774376,\"Low\":124.091782,\"Close\":124.722755,\"Adj Close\":120.334946,\"Volume\":4556794},{\"Date\":\"2021-03-24\",\"Open\":125.191208,\"High\":126.300194,\"Low\":124.827919,\"Close\":124.875717,\"Adj Close\":120.482536,\"Volume\":4189230},{\"Date\":\"2021-03-25\",\"Open\":124.598473,\"High\":127.380501,\"Low\":124.063095,\"Close\":127.217972,\"Adj Close\":122.742378,\"Volume\":5809484},{\"Date\":\"2021-03-26\",\"Open\":127.428299,\"High\":130.478012,\"Low\":127.265778,\"Close\":130.382416,\"Adj Close\":125.795494,\"Volume\":5823710},{\"Date\":\"2021-03-29\",\"Open\":130,\"High\":131.042068,\"Low\":129.550674,\"Close\":129.885284,\"Adj Close\":125.315857,\"Volume\":4835344},{\"Date\":\"2021-03-30\",\"Open\":129.885284,\"High\":130.277252,\"Low\":128.12619,\"Close\":128.79541,\"Adj Close\":124.26432,\"Volume\":5010758},{\"Date\":\"2021-03-31\",\"Open\":128.623322,\"High\":128.785858,\"Low\":126.873802,\"Close\":127.39962,\"Adj Close\":122.917633,\"Volume\":5172575},{\"Date\":\"2021-04-01\",\"Open\":127.877632,\"High\":128.040146,\"Low\":126.453156,\"Close\":127.370934,\"Adj Close\":122.889961,\"Volume\":4261404},{\"Date\":\"2021-04-05\",\"Open\":127.762909,\"High\":130.678772,\"Low\":127.533463,\"Close\":129.952194,\"Adj Close\":125.380409,\"Volume\":5722980},{\"Date\":\"2021-04-06\",\"Open\":129.617584,\"High\":129.674957,\"Low\":128.193115,\"Close\":128.317398,\"Adj Close\":123.803131,\"Volume\":3787566},{\"Date\":\"2021-04-07\",\"Open\":127.954109,\"High\":129.005737,\"Low\":127.896751,\"Close\":128.99617,\"Adj Close\":124.458015,\"Volume\":3112896},{\"Date\":\"2021-04-08\",\"Open\":128.652008,\"High\":129.66539,\"Low\":128.26004,\"Close\":129.177826,\"Adj Close\":124.633286,\"Volume\":4275211},{\"Date\":\"2021-04-09\",\"Open\":128.938812,\"High\":129.770554,\"Low\":128.785858,\"Close\":129.761002,\"Adj Close\":125.195938,\"Volume\":3162999},{\"Date\":\"2021-04-12\",\"Open\":129.082214,\"High\":129.416824,\"Low\":127.963669,\"Close\":128.671127,\"Adj Close\":124.144417,\"Volume\":3926684},{\"Date\":\"2021-04-13\",\"Open\":127.151054,\"High\":127.74379,\"Low\":124.646271,\"Close\":125.411087,\"Adj Close\":120.999062,\"Volume\":8403041},{\"Date\":\"2021-04-14\",\"Open\":125.53537,\"High\":126.940727,\"Low\":124.780113,\"Close\":126.797325,\"Adj Close\":122.336533,\"Volume\":6137928},{\"Date\":\"2021-04-15\",\"Open\":127.418739,\"High\":127.982796,\"Low\":126.405357,\"Close\":126.749519,\"Adj Close\":122.290398,\"Volume\":4062664},{\"Date\":\"2021-04-16\",\"Open\":127.151054,\"High\":128.202682,\"Low\":127.103249,\"Close\":127.715103,\"Adj Close\":123.222023,\"Volume\":5535223},{\"Date\":\"2021-04-19\",\"Open\":127.724663,\"High\":127.93499,\"Low\":126.749519,\"Close\":127.265778,\"Adj Close\":122.788506,\"Volume\":8575736},{\"Date\":\"2021-04-20\",\"Open\":131.042068,\"High\":133.623322,\"Low\":130.688339,\"Close\":132.084137,\"Adj Close\":127.437347,\"Volume\":16192708},{\"Date\":\"2021-04-21\",\"Open\":131.988525,\"High\":137.40918,\"Low\":131.653915,\"Close\":137.237091,\"Adj Close\":132.409027,\"Volume\":12456814},{\"Date\":\"2021-04-22\",\"Open\":137.380493,\"High\":138.374756,\"Low\":134.79924,\"Close\":135.066925,\"Adj Close\":130.315186,\"Volume\":7428064},{\"Date\":\"2021-04-23\",\"Open\":135.095596,\"High\":137.294449,\"Low\":134.751434,\"Close\":136.166351,\"Adj Close\":131.375946,\"Volume\":4765576},{\"Date\":\"2021-04-26\",\"Open\":136.156784,\"High\":137.313583,\"Low\":135.258133,\"Close\":135.344162,\"Adj Close\":130.582687,\"Volume\":4927497},{\"Date\":\"2021-04-27\",\"Open\":135.458893,\"High\":136.290634,\"Low\":134.560226,\"Close\":135.764816,\"Adj Close\":130.988541,\"Volume\":4062664},{\"Date\":\"2021-04-28\",\"Open\":136.634796,\"High\":137.093689,\"Low\":135.850861,\"Close\":136.711288,\"Adj Close\":131.901703,\"Volume\":3941433},{\"Date\":\"2021-04-29\",\"Open\":137.79158,\"High\":142.198853,\"Low\":136.692154,\"Close\":137.896744,\"Adj Close\":133.045456,\"Volume\":4554179},{\"Date\":\"2021-04-30\",\"Open\":137.380493,\"High\":137.504776,\"Low\":134.369019,\"Close\":135.640533,\"Adj Close\":130.868637,\"Volume\":9280321},{\"Date\":\"2021-05-03\",\"Open\":137.485657,\"High\":139.340347,\"Low\":137.237091,\"Close\":138.384323,\"Adj Close\":133.5159,\"Volume\":5997241},{\"Date\":\"2021-05-04\",\"Open\":138.05928,\"High\":140.143402,\"Low\":137.982788,\"Close\":139.340347,\"Adj Close\":134.438293,\"Volume\":6642623},{\"Date\":\"2021-05-05\",\"Open\":139.521988,\"High\":139.521988,\"Low\":138.59465,\"Close\":138.833649,\"Adj Close\":133.949402,\"Volume\":5229895},{\"Date\":\"2021-05-06\",\"Open\":138.871887,\"High\":141.978973,\"Low\":138.79541,\"Close\":141.892929,\"Adj Close\":136.901047,\"Volume\":7848661},{\"Date\":\"2021-05-07\",\"Open\":139.502869,\"High\":139.713196,\"Low\":138.212234,\"Close\":139.063095,\"Adj Close\":135.669891,\"Volume\":7325661},{\"Date\":\"2021-05-10\",\"Open\":139.388138,\"High\":141.854691,\"Low\":139.388138,\"Close\":139.741867,\"Adj Close\":136.332123,\"Volume\":7304636},{\"Date\":\"2021-05-11\",\"Open\":138.61377,\"High\":138.804977,\"Low\":136.615677,\"Close\":137.877625,\"Adj Close\":134.513367,\"Volume\":7454214},{\"Date\":\"2021-05-12\",\"Open\":137.514343,\"High\":137.810699,\"Low\":134.933075,\"Close\":135.086044,\"Adj Close\":131.789902,\"Volume\":6233742},{\"Date\":\"2021-05-13\",\"Open\":135.229446,\"High\":138.527725,\"Low\":135.066925,\"Close\":137.829834,\"Adj Close\":134.466736,\"Volume\":4807207},{\"Date\":\"2021-05-14\",\"Open\":138.728485,\"High\":139.28299,\"Low\":137.629059,\"Close\":138.317398,\"Adj Close\":134.942398,\"Volume\":2873780},{\"Date\":\"2021-05-17\",\"Open\":138.087952,\"High\":139.388138,\"Low\":137.982788,\"Close\":138.728485,\"Adj Close\":135.34346,\"Volume\":4471755},{\"Date\":\"2021-05-18\",\"Open\":138.412994,\"High\":138.910141,\"Low\":136.931168,\"Close\":137.581268,\"Adj Close\":134.224228,\"Volume\":4000009},{\"Date\":\"2021-05-19\",\"Open\":136.061188,\"High\":136.902481,\"Low\":134.722748,\"Close\":136.892929,\"Adj Close\":133.552689,\"Volume\":4498532},{\"Date\":\"2021-05-20\",\"Open\":136.826004,\"High\":138.537292,\"Low\":135.908218,\"Close\":137.552582,\"Adj Close\":134.196243,\"Volume\":4301675},{\"Date\":\"2021-05-21\",\"Open\":137.934998,\"High\":139.292542,\"Low\":137.934998,\"Close\":138.374756,\"Adj Close\":134.998367,\"Volume\":4219041},{\"Date\":\"2021-05-24\",\"Open\":138.680695,\"High\":138.99617,\"Low\":137.839386,\"Close\":138.355637,\"Adj Close\":134.979706,\"Volume\":3449290},{\"Date\":\"2021-05-25\",\"Open\":138.546844,\"High\":138.623322,\"Low\":136.902481,\"Close\":137.466537,\"Adj Close\":134.112305,\"Volume\":4118311},{\"Date\":\"2021-05-26\",\"Open\":137.189301,\"High\":137.657745,\"Low\":136.749527,\"Close\":137.07457,\"Adj Close\":133.729904,\"Volume\":3225655},{\"Date\":\"2021-05-27\",\"Open\":137.495224,\"High\":138.403442,\"Low\":137.313583,\"Close\":137.495224,\"Adj Close\":134.140289,\"Volume\":5889294},{\"Date\":\"2021-05-28\",\"Open\":137.868073,\"High\":137.982788,\"Low\":137.179733,\"Close\":137.418732,\"Adj Close\":134.065674,\"Volume\":2651192},{\"Date\":\"2021-06-01\",\"Open\":138.623322,\"High\":139.416824,\"Low\":137.428299,\"Close\":137.848953,\"Adj Close\":134.485382,\"Volume\":2528705},{\"Date\":\"2021-06-02\",\"Open\":138.26004,\"High\":139.340347,\"Low\":137.772461,\"Close\":139.311661,\"Adj Close\":135.912399,\"Volume\":2915097},{\"Date\":\"2021-06-03\",\"Open\":138.537292,\"High\":139.46463,\"Low\":137.705551,\"Close\":139.149139,\"Adj Close\":135.753845,\"Volume\":4320608},{\"Date\":\"2021-06-04\",\"Open\":139.579346,\"High\":141.061188,\"Low\":139.349899,\"Close\":140.936905,\"Adj Close\":137.497986,\"Volume\":3261323},{\"Date\":\"2021-06-07\",\"Open\":141.061188,\"High\":142.198853,\"Low\":140.697891,\"Close\":141.510513,\"Adj Close\":138.057602,\"Volume\":3621984},{\"Date\":\"2021-06-08\",\"Open\":141.606125,\"High\":143.59465,\"Low\":141.606125,\"Close\":142.514343,\"Adj Close\":139.036942,\"Volume\":5313785},{\"Date\":\"2021-06-09\",\"Open\":142.476105,\"High\":144.426392,\"Low\":142.27533,\"Close\":144.043976,\"Adj Close\":140.529251,\"Volume\":5547252},{\"Date\":\"2021-06-10\",\"Open\":144.808792,\"High\":146.118546,\"Low\":143.173996,\"Close\":143.919693,\"Adj Close\":140.40799,\"Volume\":4977391},{\"Date\":\"2021-06-11\",\"Open\":143.814529,\"High\":145.172089,\"Low\":143.757172,\"Close\":144.627151,\"Adj Close\":141.098206,\"Volume\":3596462},{\"Date\":\"2021-06-14\",\"Open\":144.082214,\"High\":144.388138,\"Low\":142.122375,\"Close\":143.432129,\"Adj Close\":139.932327,\"Volume\":3498661},{\"Date\":\"2021-06-15\",\"Open\":143.26004,\"High\":143.317398,\"Low\":142.065002,\"Close\":142.79158,\"Adj Close\":139.307419,\"Volume\":2628912},{\"Date\":\"2021-06-16\",\"Open\":143.173996,\"High\":143.173996,\"Low\":140.745697,\"Close\":141.328873,\"Adj Close\":137.880386,\"Volume\":4057329},{\"Date\":\"2021-06-17\",\"Open\":141.061188,\"High\":141.548752,\"Low\":138.891006,\"Close\":139.196945,\"Adj Close\":135.800491,\"Volume\":4568300},{\"Date\":\"2021-06-18\",\"Open\":138.12619,\"High\":138.317398,\"Low\":136.749527,\"Close\":136.826004,\"Adj Close\":133.487396,\"Volume\":9577699},{\"Date\":\"2021-06-21\",\"Open\":137.772461,\"High\":140.602295,\"Low\":137.72467,\"Close\":140.20076,\"Adj Close\":136.779816,\"Volume\":4482633},{\"Date\":\"2021-06-22\",\"Open\":140.076477,\"High\":140.353729,\"Low\":138.957932,\"Close\":139.923523,\"Adj Close\":136.509338,\"Volume\":2549102},{\"Date\":\"2021-06-23\",\"Open\":139.990433,\"High\":140.057358,\"Low\":138.212234,\"Close\":138.250473,\"Adj Close\":134.877106,\"Volume\":3349920},{\"Date\":\"2021-06-24\",\"Open\":139.388138,\"High\":139.761002,\"Low\":138.326965,\"Close\":139.043976,\"Adj Close\":135.651245,\"Volume\":3775746},{\"Date\":\"2021-06-25\",\"Open\":138.986618,\"High\":140.468445,\"Low\":138.575531,\"Close\":140.382416,\"Adj Close\":136.957031,\"Volume\":3759533},{\"Date\":\"2021-06-28\",\"Open\":140.544937,\"High\":140.822174,\"Low\":138.537292,\"Close\":138.900574,\"Adj Close\":135.511353,\"Volume\":4067789},{\"Date\":\"2021-06-29\",\"Open\":138.871887,\"High\":140.286804,\"Low\":138.718933,\"Close\":139.149139,\"Adj Close\":135.753845,\"Volume\":2540211},{\"Date\":\"2021-06-30\",\"Open\":138.747604,\"High\":140.468445,\"Low\":138.346085,\"Close\":140.143402,\"Adj Close\":136.723846,\"Volume\":3394375},{\"Date\":\"2021-07-01\",\"Open\":140.497131,\"High\":141.013382,\"Low\":140.124283,\"Close\":140.382416,\"Adj Close\":136.957031,\"Volume\":2809661},{\"Date\":\"2021-07-02\",\"Open\":140.449326,\"High\":140.487579,\"Low\":133.326965,\"Close\":133.862335,\"Adj Close\":130.596054,\"Volume\":17584515},{\"Date\":\"2021-07-06\",\"Open\":133.833649,\"High\":134.244736,\"Low\":131.07074,\"Close\":132.676865,\"Adj Close\":129.439499,\"Volume\":8466010},{\"Date\":\"2021-07-07\",\"Open\":132.657745,\"High\":134.158707,\"Low\":132.657745,\"Close\":133.671127,\"Adj Close\":130.4095,\"Volume\":4246446},{\"Date\":\"2021-07-08\",\"Open\":131.72084,\"High\":135.095596,\"Low\":131.606125,\"Close\":134.550674,\"Adj Close\":131.267593,\"Volume\":5739820},{\"Date\":\"2021-07-09\",\"Open\":135.229446,\"High\":135.736145,\"Low\":134.646271,\"Close\":135.296371,\"Adj Close\":131.995087,\"Volume\":4083689},{\"Date\":\"2021-07-12\",\"Open\":135.210327,\"High\":135.71701,\"Low\":133.957932,\"Close\":134.722748,\"Adj Close\":131.435455,\"Volume\":3496360},{\"Date\":\"2021-07-13\",\"Open\":134.722748,\"High\":134.722748,\"Low\":133.489487,\"Close\":134.110901,\"Adj Close\":130.838547,\"Volume\":3309858},{\"Date\":\"2021-07-14\",\"Open\":134.531555,\"High\":134.560226,\"Low\":132.820267,\"Close\":133.671127,\"Adj Close\":130.4095,\"Volume\":4606061},{\"Date\":\"2021-07-15\",\"Open\":133.193115,\"High\":134.28299,\"Low\":132.695984,\"Close\":134.273422,\"Adj Close\":130.997101,\"Volume\":3807126},{\"Date\":\"2021-07-16\",\"Open\":134.79924,\"High\":134.79924,\"Low\":132.495224,\"Close\":132.79158,\"Adj Close\":129.551422,\"Volume\":4298328},{\"Date\":\"2021-07-19\",\"Open\":130.449326,\"High\":132.399612,\"Low\":130.219879,\"Close\":131.854691,\"Adj Close\":128.637375,\"Volume\":8977086},{\"Date\":\"2021-07-20\",\"Open\":136.711288,\"High\":138.546844,\"Low\":132.600388,\"Close\":133.814529,\"Adj Close\":130.549408,\"Volume\":14237838},{\"Date\":\"2021-07-21\",\"Open\":133.814529,\"High\":135.172089,\"Low\":133.508606,\"Close\":135.086044,\"Adj Close\":131.789902,\"Volume\":5024984},{\"Date\":\"2021-07-22\",\"Open\":135.430206,\"High\":135.573608,\"Low\":134.235184,\"Close\":134.521988,\"Adj Close\":131.239594,\"Volume\":3466653},{\"Date\":\"2021-07-23\",\"Open\":134.761002,\"High\":135.468445,\"Low\":134.158707,\"Close\":135.124283,\"Adj Close\":131.827209,\"Volume\":4680013},{\"Date\":\"2021-07-26\",\"Open\":135.172089,\"High\":136.711288,\"Low\":134.923523,\"Close\":136.491394,\"Adj Close\":133.16095,\"Volume\":4441630},{\"Date\":\"2021-07-27\",\"Open\":136.261948,\"High\":137.323135,\"Low\":135.372849,\"Close\":136.472275,\"Adj Close\":133.142288,\"Volume\":3281302},{\"Date\":\"2021-07-28\",\"Open\":136.72084,\"High\":136.806885,\"Low\":135.411087,\"Close\":135.53537,\"Adj Close\":132.228256,\"Volume\":2660815},{\"Date\":\"2021-07-29\",\"Open\":136.07074,\"High\":136.673035,\"Low\":135.372849,\"Close\":135.688339,\"Adj Close\":132.377487,\"Volume\":2793761},{\"Date\":\"2021-07-30\",\"Open\":135.296371,\"High\":135.611862,\"Low\":134.598465,\"Close\":134.761002,\"Adj Close\":131.472778,\"Volume\":3698238},{\"Date\":\"2021-08-02\",\"Open\":135.229446,\"High\":136.768646,\"Low\":134.827911,\"Close\":135.20076,\"Adj Close\":131.90181,\"Volume\":3064257},{\"Date\":\"2021-08-03\",\"Open\":135.659653,\"High\":138.336517,\"Low\":135.420654,\"Close\":137.734222,\"Adj Close\":134.373444,\"Volume\":4272596},{\"Date\":\"2021-08-04\",\"Open\":137.476105,\"High\":137.839386,\"Low\":136.20459,\"Close\":136.481842,\"Adj Close\":133.151627,\"Volume\":2960285},{\"Date\":\"2021-08-05\",\"Open\":136.73996,\"High\":137.103256,\"Low\":135.965576,\"Close\":136.491394,\"Adj Close\":133.16095,\"Volume\":2884240},{\"Date\":\"2021-08-06\",\"Open\":136.711288,\"High\":138.040146,\"Low\":136.606125,\"Close\":137.753342,\"Adj Close\":134.392105,\"Volume\":4002833},{\"Date\":\"2021-08-09\",\"Open\":135.946457,\"High\":136.233276,\"Low\":134.770554,\"Close\":135.038239,\"Adj Close\":133.259995,\"Volume\":5129689},{\"Date\":\"2021-08-10\",\"Open\":135,\"High\":135.573608,\"Low\":134.168259,\"Close\":135.162521,\"Adj Close\":133.382645,\"Volume\":5543695},{\"Date\":\"2021-08-11\",\"Open\":135.544937,\"High\":136.491394,\"Low\":135.277252,\"Close\":135.879547,\"Adj Close\":134.090225,\"Volume\":4455960},{\"Date\":\"2021-08-12\",\"Open\":136.00383,\"High\":136.854691,\"Low\":135.831741,\"Close\":136.778198,\"Adj Close\":134.977036,\"Volume\":2184780},{\"Date\":\"2021-08-13\",\"Open\":136.367111,\"High\":137.265778,\"Low\":136.175903,\"Close\":136.883362,\"Adj Close\":135.080826,\"Volume\":1997965},{\"Date\":\"2021-08-16\",\"Open\":136.931168,\"High\":137.418732,\"Low\":135.975143,\"Close\":137.27533,\"Adj Close\":135.467621,\"Volume\":2913319},{\"Date\":\"2021-08-17\",\"Open\":136.711288,\"High\":136.864243,\"Low\":134.885284,\"Close\":136.156784,\"Adj Close\":134.363815,\"Volume\":3215195},{\"Date\":\"2021-08-18\",\"Open\":135.439774,\"High\":135.678772,\"Low\":133.26004,\"Close\":133.336517,\"Adj Close\":131.580688,\"Volume\":3672192},{\"Date\":\"2021-08-19\",\"Open\":132.59082,\"High\":133.317398,\"Low\":131.175903,\"Close\":131.950287,\"Adj Close\":130.212708,\"Volume\":4351465},{\"Date\":\"2021-08-20\",\"Open\":131.682602,\"High\":133.250473,\"Low\":131.233276,\"Close\":132.992355,\"Adj Close\":131.241058,\"Volume\":2780059},{\"Date\":\"2021-08-23\",\"Open\":133.479919,\"High\":133.986618,\"Low\":132.695984,\"Close\":133.479919,\"Adj Close\":131.722198,\"Volume\":3179422},{\"Date\":\"2021-08-24\",\"Open\":133.632889,\"High\":134.063095,\"Low\":133.193115,\"Close\":133.690247,\"Adj Close\":131.929749,\"Volume\":2474418},{\"Date\":\"2021-08-25\",\"Open\":133.766724,\"High\":134.608032,\"Low\":133.326965,\"Close\":133.709366,\"Adj Close\":131.948624,\"Volume\":2105389},{\"Date\":\"2021-08-26\",\"Open\":133.814529,\"High\":134.608032,\"Low\":132.60994,\"Close\":132.676865,\"Adj Close\":130.929718,\"Volume\":2613640},{\"Date\":\"2021-08-27\",\"Open\":132.60994,\"High\":133.451248,\"Low\":132.313583,\"Close\":133.27916,\"Adj Close\":131.524078,\"Volume\":2572637},{\"Date\":\"2021-08-30\",\"Open\":133.365204,\"High\":133.728485,\"Low\":132.715103,\"Close\":132.858505,\"Adj Close\":131.108963,\"Volume\":2087293},{\"Date\":\"2021-08-31\",\"Open\":133.403442,\"High\":134.741867,\"Low\":132.839386,\"Close\":134.168259,\"Adj Close\":132.401474,\"Volume\":4429915},{\"Date\":\"2021-09-01\",\"Open\":133.824097,\"High\":133.910141,\"Low\":133.068832,\"Close\":133.173996,\"Adj Close\":131.420303,\"Volume\":2588327},{\"Date\":\"2021-09-02\",\"Open\":133.575531,\"High\":133.891006,\"Low\":132.915863,\"Close\":133.852768,\"Adj Close\":132.090134,\"Volume\":2840413},{\"Date\":\"2021-09-03\",\"Open\":133.537292,\"High\":134.292542,\"Low\":133.173996,\"Close\":133.441681,\"Adj Close\":131.684464,\"Volume\":2009575},{\"Date\":\"2021-09-07\",\"Open\":133.508606,\"High\":133.642441,\"Low\":131.701721,\"Close\":131.988525,\"Adj Close\":130.250443,\"Volume\":3436110},{\"Date\":\"2021-09-08\",\"Open\":132.065002,\"High\":132.973236,\"Low\":131.548752,\"Close\":132.571701,\"Adj Close\":130.825943,\"Volume\":3122728},{\"Date\":\"2021-09-09\",\"Open\":131.787766,\"High\":132.848953,\"Low\":131.510513,\"Close\":131.682602,\"Adj Close\":129.948547,\"Volume\":3669682},{\"Date\":\"2021-09-10\",\"Open\":132.715103,\"High\":133.240921,\"Low\":130.975143,\"Close\":130.994263,\"Adj Close\":129.269272,\"Volume\":4157955},{\"Date\":\"2021-09-13\",\"Open\":132.313583,\"High\":132.877625,\"Low\":131.462708,\"Close\":132.07457,\"Adj Close\":130.335358,\"Volume\":4334729},{\"Date\":\"2021-09-14\",\"Open\":132.313583,\"High\":132.476105,\"Low\":129.388138,\"Close\":130.229446,\"Adj Close\":128.514526,\"Volume\":4659198},{\"Date\":\"2021-09-15\",\"Open\":130.229446,\"High\":131.73996,\"Low\":129.703629,\"Close\":131.166351,\"Adj Close\":129.439087,\"Volume\":3403579},{\"Date\":\"2021-09-16\",\"Open\":131.242828,\"High\":131.883362,\"Low\":129.741867,\"Close\":130.430206,\"Adj Close\":128.712646,\"Volume\":2765624},{\"Date\":\"2021-09-17\",\"Open\":129.780121,\"High\":129.942642,\"Low\":129.110901,\"Close\":129.28299,\"Adj Close\":127.580536,\"Volume\":5890340},{\"Date\":\"2021-09-20\",\"Open\":128.011475,\"High\":129.235184,\"Low\":126.940727,\"Close\":128.403442,\"Adj Close\":126.71257,\"Volume\":4990152},{\"Date\":\"2021-09-21\",\"Open\":129.168259,\"High\":129.684509,\"Low\":127.093689,\"Close\":127.122368,\"Adj Close\":125.448364,\"Volume\":4261927},{\"Date\":\"2021-09-22\",\"Open\":127.839386,\"High\":129.416824,\"Low\":127.60038,\"Close\":128.709366,\"Adj Close\":127.014465,\"Volume\":3767901},{\"Date\":\"2021-09-23\",\"Open\":129.302109,\"High\":131.376678,\"Low\":129.091782,\"Close\":130.71701,\"Adj Close\":128.995667,\"Volume\":3151807},{\"Date\":\"2021-09-24\",\"Open\":131.00383,\"High\":132.39006,\"Low\":130.736145,\"Close\":131.443588,\"Adj Close\":129.712677,\"Volume\":3100762},{\"Date\":\"2021-09-27\",\"Open\":131.892929,\"High\":132.954117,\"Low\":131.434036,\"Close\":132.466537,\"Adj Close\":130.722153,\"Volume\":3459017},{\"Date\":\"2021-09-28\",\"Open\":133.049713,\"High\":133.546844,\"Low\":131.175903,\"Close\":131.424469,\"Adj Close\":129.693817,\"Volume\":4513072},{\"Date\":\"2021-09-29\",\"Open\":131.673035,\"High\":133.776291,\"Low\":130.439774,\"Close\":133.05928,\"Adj Close\":131.307098,\"Volume\":3947499},{\"Date\":\"2021-09-30\",\"Open\":133.843216,\"High\":134.388138,\"Low\":132.40918,\"Close\":132.820267,\"Adj Close\":131.071228,\"Volume\":6090230},{\"Date\":\"2021-10-01\",\"Open\":134.79924,\"High\":137.638626,\"Low\":134.196945,\"Close\":137.017212,\"Adj Close\":135.212906,\"Volume\":6907889},{\"Date\":\"2021-10-04\",\"Open\":136.462708,\"High\":139.579346,\"Low\":136.089859,\"Close\":137.772461,\"Adj Close\":135.958206,\"Volume\":7689251},{\"Date\":\"2021-10-05\",\"Open\":138.384323,\"High\":138.623322,\"Low\":136.367111,\"Close\":136.854691,\"Adj Close\":135.052521,\"Volume\":7297524},{\"Date\":\"2021-10-06\",\"Open\":136.214142,\"High\":137.065002,\"Low\":134.694077,\"Close\":136.099426,\"Adj Close\":134.307205,\"Volume\":5573506},{\"Date\":\"2021-10-07\",\"Open\":136.453156,\"High\":137.093689,\"Low\":135.305923,\"Close\":135.573608,\"Adj Close\":133.788315,\"Volume\":3999695},{\"Date\":\"2021-10-08\",\"Open\":135.573608,\"High\":137.332703,\"Low\":134.847031,\"Close\":136.9216,\"Adj Close\":135.118561,\"Volume\":3902940},{\"Date\":\"2021-10-11\",\"Open\":137.189301,\"High\":137.74379,\"Low\":136.137665,\"Close\":136.166351,\"Adj Close\":134.373245,\"Volume\":2921792},{\"Date\":\"2021-10-12\",\"Open\":135.956024,\"High\":136.042068,\"Low\":134.13002,\"Close\":134.292542,\"Adj Close\":132.524109,\"Volume\":3293436},{\"Date\":\"2021-10-13\",\"Open\":134.340347,\"High\":135.191208,\"Low\":133.518158,\"Close\":134.569794,\"Adj Close\":132.797714,\"Volume\":3013003},{\"Date\":\"2021-10-14\",\"Open\":134.837479,\"High\":137.59082,\"Low\":134.808792,\"Close\":137.084137,\"Adj Close\":135.278946,\"Volume\":4410668},{\"Date\":\"2021-10-15\",\"Open\":137.084137,\"High\":138.479919,\"Low\":136.510513,\"Close\":138.250473,\"Adj Close\":136.429932,\"Volume\":3371049},{\"Date\":\"2021-10-18\",\"Open\":137.667297,\"High\":138.565964,\"Low\":135.525818,\"Close\":136.061188,\"Adj Close\":134.26947,\"Volume\":6437189},{\"Date\":\"2021-10-19\",\"Open\":134.875717,\"High\":136.653915,\"Low\":134.340347,\"Close\":135.736145,\"Adj Close\":133.948715,\"Volume\":4539117},{\"Date\":\"2021-10-20\",\"Open\":135.449326,\"High\":135.946457,\"Low\":134.512421,\"Close\":135.659653,\"Adj Close\":133.87323,\"Volume\":6474008},{\"Date\":\"2021-10-21\",\"Open\":127.638626,\"High\":127.839386,\"Low\":122.466537,\"Close\":122.686424,\"Adj Close\":121.070831,\"Volume\":32913959},{\"Date\":\"2021-10-22\",\"Open\":122.418739,\"High\":124.521988,\"Low\":121.042068,\"Close\":122.25621,\"Adj Close\":120.646286,\"Volume\":12114981},{\"Date\":\"2021-10-25\",\"Open\":121.921608,\"High\":122.992355,\"Low\":121.357552,\"Close\":122.026772,\"Adj Close\":120.419868,\"Volume\":6667204},{\"Date\":\"2021-10-26\",\"Open\":121.912048,\"High\":122.657745,\"Low\":121.185471,\"Close\":121.5392,\"Adj Close\":119.938713,\"Volume\":8912861},{\"Date\":\"2021-10-27\",\"Open\":121.835564,\"High\":122.25621,\"Low\":119.512428,\"Close\":119.66539,\"Adj Close\":118.089584,\"Volume\":7294176},{\"Date\":\"2021-10-28\",\"Open\":119.66539,\"High\":120.755257,\"Low\":119.13958,\"Close\":120.305923,\"Adj Close\":118.72168,\"Volume\":6802138},{\"Date\":\"2021-10-29\",\"Open\":119.913956,\"High\":120.764816,\"Low\":119.416824,\"Close\":119.598473,\"Adj Close\":118.023544,\"Volume\":6188973},{\"Date\":\"2021-11-01\",\"Open\":119.550667,\"High\":120.755257,\"Low\":118.393883,\"Close\":120.726578,\"Adj Close\":119.136795,\"Volume\":6177153},{\"Date\":\"2021-11-02\",\"Open\":120.745697,\"High\":121.577438,\"Low\":119.416824,\"Close\":120.630974,\"Adj Close\":119.04245,\"Volume\":4722062},{\"Date\":\"2021-11-03\",\"Open\":120.67878,\"High\":121.692162,\"Low\":120.152962,\"Close\":121.5392,\"Adj Close\":119.938713,\"Volume\":5670784},{\"Date\":\"2021-11-04\",\"Open\":123.050003,\"High\":123.339996,\"Low\":119.900002,\"Close\":120.849998,\"Adj Close\":119.258591,\"Volume\":7208700},{\"Date\":\"2021-11-05\",\"Open\":121.43,\"High\":123.769997,\"Low\":121.43,\"Close\":123.610001,\"Adj Close\":121.982246,\"Volume\":6786500},{\"Date\":\"2021-11-08\",\"Open\":123.989998,\"High\":124.779999,\"Low\":123.529999,\"Close\":124.540001,\"Adj Close\":122.900002,\"Volume\":5625300},{\"Date\":\"2021-11-09\",\"Open\":122.559998,\"High\":122.900002,\"Low\":120.260002,\"Close\":120.849998,\"Adj Close\":120.849998,\"Volume\":7236600},{\"Date\":\"2021-11-10\",\"Open\":121,\"High\":122.43,\"Low\":119.93,\"Close\":120.220001,\"Adj Close\":120.220001,\"Volume\":6270300},{\"Date\":\"2021-11-11\",\"Open\":120.900002,\"High\":121.790001,\"Low\":120.080002,\"Close\":120.269997,\"Adj Close\":120.269997,\"Volume\":4643300},{\"Date\":\"2021-11-12\",\"Open\":120,\"High\":120.639999,\"Low\":118.779999,\"Close\":118.959999,\"Adj Close\":118.959999,\"Volume\":5414800},{\"Date\":\"2021-11-15\",\"Open\":119.540001,\"High\":120.160004,\"Low\":118.309998,\"Close\":118.870003,\"Adj Close\":118.870003,\"Volume\":5046300},{\"Date\":\"2021-11-16\",\"Open\":118.919998,\"High\":119.900002,\"Low\":118.419998,\"Close\":118.459999,\"Adj Close\":118.459999,\"Volume\":4750800},{\"Date\":\"2021-11-17\",\"Open\":118.379997,\"High\":119.330002,\"Low\":117.779999,\"Close\":118.059998,\"Adj Close\":118.059998,\"Volume\":4043300},{\"Date\":\"2021-11-18\",\"Open\":118.360001,\"High\":118.360001,\"Low\":116.309998,\"Close\":116.660004,\"Adj Close\":116.660004,\"Volume\":5046900},{\"Date\":\"2021-11-19\",\"Open\":116.489998,\"High\":116.559998,\"Low\":115.269997,\"Close\":116.050003,\"Adj Close\":116.050003,\"Volume\":5380200},{\"Date\":\"2021-11-22\",\"Open\":116,\"High\":118.809998,\"Low\":115.190002,\"Close\":116.470001,\"Adj Close\":116.470001,\"Volume\":6416200},{\"Date\":\"2021-11-23\",\"Open\":116.790001,\"High\":117.940002,\"Low\":116.040001,\"Close\":116.790001,\"Adj Close\":116.790001,\"Volume\":4912800},{\"Date\":\"2021-11-24\",\"Open\":116.160004,\"High\":117.269997,\"Low\":116.080002,\"Close\":116.730003,\"Adj Close\":116.730003,\"Volume\":3220800},{\"Date\":\"2021-11-26\",\"Open\":115,\"High\":116.339996,\"Low\":114.559998,\"Close\":115.809998,\"Adj Close\":115.809998,\"Volume\":3322000}]");

},{}],"dBXnG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Chart", ()=>Chart
);
var _constants = require("../models/constants");
var _point = require("./point");
class Chart {
    canvas = document.querySelector('#chart');
    ctx = this.canvas.getContext('2d');
    margins = _constants.MARGINS;
    constructor(data){
        this.data = data;
    }
    drawChart() {
        this.setCanvasSize();
        this.drawXAxis();
        this.drawYAxis();
        this.drawPoints();
    }
    setCanvasSize() {
        this.canvas.width = window.innerWidth - 3;
        this.canvas.height = window.innerHeight - 3;
    }
    drawXAxis() {
        this.ctx.beginPath();
        this.ctx.moveTo(100, this.canvas.height - this.margins.top);
        this.ctx.lineTo(this.canvas.width, this.canvas.height - this.margins.bottom);
        this.ctx.stroke();
    }
    drawYAxis() {
        this.ctx.beginPath();
        this.ctx.moveTo(100, this.canvas.height - this.margins.bottom);
        this.ctx.lineTo(100, 50);
        this.ctx.stroke();
        const closingValues = this.data.map((x)=>x.movingAvg
        );
        const max = Math.round(Math.max(...closingValues));
        this.ctx.font = '18px serif';
        this.ctx.fillText(0, 80, this.canvas.height - this.margins.top / 2);
        this.ctx.fillText(max, 60, 55);
    }
    drawPoints() {
        const factor = (this.canvas.width - 100) / this.data.length;
        this.data.forEach((day, idx)=>{
            const x = idx * factor + this.margins.left;
            const point = new _point.Point(this.ctx, this.canvas, x, day, this.data);
            point.drawPoint();
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../models/constants":"hTtwU","./point":"10XmT"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}],"hTtwU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MARGINS", ()=>MARGINS
);
const MARGINS = {
    left: 100,
    top: 50,
    right: 100,
    bottom: 50
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"10XmT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point", ()=>Point
);
var _constants = require("../models/constants");
class Point {
    margins = _constants.MARGINS;
    constructor(ctx, canvas, x1, value, data){
        this.ctx = ctx;
        this.canvas = canvas;
        this.x = x1;
        this.value = value;
        this.data = data;
    }
    drawPoint() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.getYPoint(this.value.movingAvg), 2, 0, Math.PI * 2);
        this.ctx.fill();
    }
    getYPoint(value1) {
        const closingValues = this.data.map((x)=>x.movingAvg
        );
        const max = Math.round(Math.max(...closingValues));
        const chartHeight = this.canvas.height - this.margins.top - this.margins.bottom;
        const factor = value1 / max;
        return this.canvas.height - chartHeight * factor;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../models/constants":"hTtwU"}]},["5tD9r","d9j9x"], "d9j9x", "parcelRequirec86a")

//# sourceMappingURL=index.dd813d2c.js.map
