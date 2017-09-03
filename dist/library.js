(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("pd-sputil"));
	else if(typeof define === 'function' && define.amd)
		define(["pd-sputil"], factory);
	else if(typeof exports === 'object')
		exports["pdspserverajax"] = factory(require("pd-sputil"));
	else
		root["pdspserverajax"] = factory(root["pdsputil"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = __webpack_require__(2);
var isBuffer = __webpack_require__(12);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(14);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {/* Ignore */}
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(15);
var buildURL = __webpack_require__(17);
var parseHeaders = __webpack_require__(18);
var isURLSameOrigin = __webpack_require__(19);
var createError = __webpack_require__(5);
var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(20);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(21);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(16);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["ajaxGetContext"] = ajaxGetContext;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetData"] = ajaxGetData;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetAllListResults"] = ajaxGetAllListResults;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetBatchMetered"] = ajaxGetBatchMetered;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetBatchProfiles"] = ajaxGetBatchProfiles;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetListInfo"] = ajaxGetListInfo;
/* harmony export (immutable) */ __webpack_exports__["ajaxPeopleSearch"] = ajaxPeopleSearch;
/* harmony export (immutable) */ __webpack_exports__["ajaxEnsureUser"] = ajaxEnsureUser;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetSiteUserInfoByEmail"] = ajaxGetSiteUserInfoByEmail;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetItemsByCaml"] = ajaxGetItemsByCaml;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetUserSitePermissions"] = ajaxGetUserSitePermissions;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetUserListPermissions"] = ajaxGetUserListPermissions;
/* harmony export (immutable) */ __webpack_exports__["ajaxGetCurrentUserGroups"] = ajaxGetCurrentUserGroups;
/* harmony export (immutable) */ __webpack_exports__["ajaxCreateItem"] = ajaxCreateItem;
/* harmony export (immutable) */ __webpack_exports__["ajaxUpdateItem"] = ajaxUpdateItem;
/* harmony export (immutable) */ __webpack_exports__["ajaxDeleteItem"] = ajaxDeleteItem;
/* harmony export (immutable) */ __webpack_exports__["ajaxRecycleItem"] = ajaxRecycleItem;
/* harmony export (immutable) */ __webpack_exports__["userProfileData"] = userProfileData;
/* harmony export (immutable) */ __webpack_exports__["getListColumns"] = getListColumns;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pd_sputil__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pd_sputil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__);
/**
	pd-spservercontacts
	requires babel polyfill for object assign and promise
	needs encodeAccountName, getURLOrigin from pd-sputil
	needs all of axios - when using this library you get the response of the server from data property when a plain axios response is returned
	exposes a global pdspserverajax if used in script tag of browser
	@module pd-spserverajax
 */





var depTest = function depTest() {
	if (!Promise || !Object.assign) {
		throw new Error("Promise API is not available. Please add a polyfill as a dependency to continue.");
	}
	if (!__WEBPACK_IMPORTED_MODULE_0_axios__) {
		throw new Error("axios API is not available. Please add a axios as a dependency to continue.");
	}
	if (!__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"] || !__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["getURLOrigin"]) {
		throw new Error("pd-sputil API is not available. Please add a pd-sputil as a dependency to continue.");
	}
};
depTest();

var ajaxGetUserPermissions = function ajaxGetUserPermissions(props) {

	return ajaxGetData(props.permsLink).then(function (response) {
		return __WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* parseBasePermissions */](response.data);
	});
};
var getEntityType = function getEntityType(props) {

	var entityData;

	if (props.listName) {
		entityData = __WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* createlistitemtype */](props.listName);
		return Promise.resolve(entityData);
	}

	return ajaxGetListInfo(props).then(function (response) {
		return response.data.ListItemEntityTypeFullName;
	});
};
var nonDeleteProcess = function nonDeleteProcess(props) {

	if (!props.headerData) {
		props.headerData = {};
	}

	return getEntityType(props).then(function (type) {
		props.item = Object.assign({
			'__metadata': { 'type': type }
		}, props.infoToServer);

		return ajaxGetContext(props);
	}).then(function (context) {

		props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
		props.headerData.Accept = __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */];
		props.headerData['Content-Type'] = __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* verboseMeta */];

		__WEBPACK_IMPORTED_MODULE_1__helpers__["e" /* listItemUrlConfigure */](props);

		return __WEBPACK_IMPORTED_MODULE_0_axios__({
			url: props.listItemUrl,
			method: 'POST',
			data: JSON.stringify(props.item),
			headers: props.headerData
		});
	});
};
var deleteProcess = function deleteProcess(props) {

	if (!props.headerData) {
		props.headerData = {};
	}

	return ajaxGetContext(props).then(function (context) {

		props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
		props.headerData.Accept = __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */];
		props.headerData['Content-Type'] = __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* verboseMeta */];

		__WEBPACK_IMPORTED_MODULE_1__helpers__["e" /* listItemUrlConfigure */](props);

		if (props.urlModifier) {
			props.listItemUrl += props.urlModifier;
		}

		return __WEBPACK_IMPORTED_MODULE_0_axios__({
			url: props.listItemUrl,
			method: 'POST',
			headers: props.headerData
		});
	});
};

/**
 * Gets a context object for server requests.
 * the key from response is FormDigestValue
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @returns {promise.<object>}
 */
function ajaxGetContext(props) {

	props.endPoint = "_api/contextinfo";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	return __WEBPACK_IMPORTED_MODULE_0_axios__({
		method: "POST",
		headers: { "Accept": __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */] },
		url: props.configuredUrl
	}).then(function (response) {
		props.endPoint = null;
		props.configuredUrl = null;
		return response;
	});
}
/**
 * Get data from server using the REST endpoint
 * @param {string} url - full odata url
 * @returns {promise<object>}
 */
function ajaxGetData(url) {

	return __WEBPACK_IMPORTED_MODULE_0_axios__({
		method: 'GET',
		headers: { 'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */] },
		url: url
	});
}
/**
 * Gets all results for server requests.
 * once the promise resolves you get an array of objects that are the servers response
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.select]
 * @param {string} [props.filter]
 * @param {string} [props.expand]
 * @param {string} [props.top]
 * @param {string} [props.orderBy]
 * @returns {promise.<object[]>}
 */
function ajaxGetAllListResults(props) {

	if (!props.listGUID && !props.listTitle) {
		return Promise.reject("must pass listGUID or listTitle to ajaxGetAllListResults");
	}

	__WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* createGetAllUrl */](props);

	return ajaxGetData(props.listUrl).then(function (response) {
		var currentResults = props.allResults || [],
		    responseData = response.data;

		props.allResults = currentResults.concat(responseData.value);

		if (responseData['odata.nextLink']) {
			props.listUrl = responseData['odata.nextLink'];
			return ajaxGetAllListResults(props);
		}
		return props.allResults;
	});
}
var ajaxGetBatch = function ajaxGetBatch(props, arrayOfUrls) {

	var batchGUID = __WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* createGUID */](),
	    batchBody,
	    batchHeader,
	    batchContents = [];

	//batch (operation)
	arrayOfUrls.forEach(function (item) {
		batchContents.push('--batch_' + batchGUID);
		batchContents.push('Content-Type: application/http');
		batchContents.push('Content-Transfer-Encoding: binary');
		batchContents.push('');
		batchContents.push('GET ' + item + ' HTTP/1.1');
		batchContents.push('Accept: ' + __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */]);
		batchContents.push('');
	});

	batchContents.push('--batch_' + batchGUID + '--');

	batchBody = batchContents.join('\r\n');

	return ajaxGetContext(props).then(function (response) {

		props.endPoint = '_api/$batch';
		__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

		batchHeader = {
			'X-RequestDigest': response.data.FormDigestValue,
			'Content-Type': 'multipart/mixed; boundary="batch_' + batchGUID + '"'
		};

		return __WEBPACK_IMPORTED_MODULE_0_axios__({
			url: props.configuredUrl,
			method: 'POST',
			data: batchBody,
			headers: batchHeader
		}).then(function (response) {
			var parsedArray = [],
			    responseToArray = response.data.split('\n');

			for (var currentLine = 0; currentLine < responseToArray.length; currentLine++) {
				if (responseToArray[currentLine].charAt(0) === '{') {
					try {
						// parse the JSON response...
						var tryParseJson = JSON.parse(responseToArray[currentLine]);

						parsedArray.push(tryParseJson);
					} catch (e) {
						// don't do anything... just keep moving
					}
				}
			}

			return parsedArray;
		});
	});
};
/**
 * Gets all items requested in the getUrls property (batch request)
 * 
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - relative url of the site that contains the data
 * @param {string[]} props.getUrls - full odata urls
 * @returns {promise<object[]>}
 */
function ajaxGetBatchMetered(props) {
	var urlsForTrip = [],
	    perTripCount = 0;

	props.totalItems = props.getUrls.length;
	props.totalPerTrip = 50;
	props.allResults = [];
	props.numberToStartAt = 0;

	for (; props.numberToStartAt < props.totalItems; props.numberToStartAt++) {
		var url = props.getUrls[props.numberToStartAt];
		urlsForTrip.push(url);
		perTripCount++;

		if (perTripCount === props.totalPerTrip) {
			props.numberToStartAt++;
			break;
		}
	}

	return ajaxGetBatch({ origin: props.origin, url: props.url }, urlsForTrip).then(function (response) {
		props.allResults = props.allResults.concat(response);

		if (props.numberToStartAt < props.totalItems) {
			return ajaxGetBatchMetered(props);
		}

		return props.allResults;
	});
}
/**
 * Get user profiles from the server (batch request)
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string[]} props.profileEmails - email addresses of the users you want profile data for
 * @returns {promise<object[]>}
 */
function ajaxGetBatchProfiles(props) {
	var profileUrls = null;
	if (!props.profileEmails || props.profileEmails.length === 0) {
		throw new Error("profile emails must be provided when calling the batch profile function");
	}

	props.origin = Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["getURLOrigin"])();
	profileUrls = [];

	var urlForSite = props.origin + props.url;
	props.profileEmails.forEach(function (email) {
		var encoded = Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(email);
		profileUrls.push(urlForSite + '/_api/sp.userprofiles.peoplemanager/GetPropertiesFor(\'' + encoded + '\')?$select=UserProfileProperties');
	});

	var origin = props.origin,
	    url = props.url;


	return ajaxGetBatchMetered({
		origin: origin,
		url: url,
		getUrls: profileUrls
	});
}
/**
 * Get list or library properties from server
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - a site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @returns {promise<object>}
 */
function ajaxGetListInfo(props) {

	__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listUrlConfigure */](props);
	return ajaxGetData(props.listUrl);
}
/**
 * Get user profile info from the SharePoint search service
 * @param {object}
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.query - query that is passed to search service, ex "'" + 'Bureau="'+ divisionName + '"\''
 * @param {string} [props.sourceId] - source id for the search service to use, defaults to the out of the box people source id
 * @param {string[]} props.properties - specify which properties you want back from the request
 * @returns {promise<object[]>}
 */
function ajaxPeopleSearch(props) {

	var allResults = props.currentResults || [],
	    serverQueryData = {
		startrow: 0,
		rowlimit: 500,
		TrimDuplicates: false,
		selectproperties: '\'' + props.properties.join(',') + '\''
	};

	serverQueryData.startrow = props.startrow ? props.startrow : 0;
	serverQueryData.sourceId = props.sourceId ? '\'' + props.sourceId + '\'' : "'b09a7990-05ea-4af9-81ef-edfab16c4e31'";

	props.endPoint = "_api/search/query";
	serverQueryData.querytext = '\'' + props.query + '\'';

	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	return __WEBPACK_IMPORTED_MODULE_0_axios__({
		url: props.configuredUrl,
		method: 'GET',
		headers: { 'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */] },
		params: serverQueryData
	}).then(function (empData) {

		var relevantResults = empData.data.PrimaryQueryResult.RelevantResults;

		allResults = allResults.concat(relevantResults.Table.Rows);
		props.currentResults = allResults;

		if (relevantResults.TotalRows > serverQueryData.startrow + relevantResults.RowCount) {
			props.startrow = serverQueryData.startrow + relevantResults.RowCount;
			return ajaxPeopleSearch(props);
		} else {
			return props.currentResults;
		}
	});
}
/**
 * Checks if user is in the site collection user table
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.email - email address of the user to check
 * @returns {promise<object>}
 */
function ajaxEnsureUser(props) {

	return ajaxGetContext(props).then(function (response) {

		props.endPoint = "_api/web";
		__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);
		props.configuredUrl += '/ensureUser(\'' + Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email) + '\')';

		return __WEBPACK_IMPORTED_MODULE_0_axios__({
			url: props.configuredUrl,
			method: "POST",
			contentType: __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* verboseMeta */],
			headers: {
				"Accept": __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */],
				"X-RequestDigest": response.data.FormDigestValue
			}
		});
	});
}
/**
 * Gets user info from the site collection user table
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.email - email address of the user to retrieve
 * @returns {promise<object>}
 */
function ajaxGetSiteUserInfoByEmail(props) {

	props.endPoint = "_api/web/siteusers";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	props.configuredUrl += '?$filter=LoginName eq \'' + Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email) + '\'';

	return ajaxGetData(props.configuredUrl);
}
/**
 * Get request that uses CAML to filter results
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.query - CAML query
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @returns {promise<object>}
 */
function ajaxGetItemsByCaml(props) {

	return ajaxGetContext(props).then(function (response) {

		var query = { "query": { "__metadata": { "type": "SP.CamlQuery" },
				"ViewXml": props.caml
			}
		},
		    headerdata = {
			'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* minimalMeta */],
			'Content-Type': __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* verboseMeta */],
			'X-RequestDigest': response.data.FormDigestValue
		};

		__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listUrlConfigure */](props);
		props.listUrl += '/getitems';

		return __WEBPACK_IMPORTED_MODULE_0_axios__({
			url: props.listUrl,
			method: 'POST',
			data: JSON.stringify(query),
			headers: headerdata
		});
	});
}
/**
 * Get a users permissions to a site
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.email - email of the user to get permissions for
 * @returns {promise<string[]>}
 */
function ajaxGetUserSitePermissions(props) {

	var encodedEmail = Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email);

	props.endPoint = "_api/web";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	props.permsLink = props.configuredUrl + '/getusereffectivepermissions(@user)?@user=\'' + encodedEmail + '\'';
	return ajaxGetUserPermissions(props);
}
/**
 * Get a users permissions to a list or library
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} props.email - email of the user to check permission of
 * @returns {promise<sting[]>}
 */
function ajaxGetUserListPermissions(props) {

	var encodedEmail = Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email);

	__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listUrlConfigure */](props);

	props.permsLink = props.listUrl + '/getusereffectivepermissions(@user)?@user=\'' + encodedEmail + '\'';
	return ajaxGetUserPermissions(props);
}
/**
 * Gets the SharePoint groups that a user has been added to, identify the user by passing the id number of the user for the site.
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {number} props.userId - users site id number
 * @returns {promise<sting[]>}
 */
function ajaxGetCurrentUserGroups(props) {

	props.endPoint = "/_api/web";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	props.configuredUrl += '/GetUserbyId(' + props.userId + ')/Groups';

	return ajaxGetData(props.configuredUrl).then(function (groups) {

		var groupArray = [];

		groups.data.value.forEach(function (item) {
			groupArray.push(item.Title);
		});

		return groupArray;
	});
}
/**
 * Creates a single item in a list
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {object} props.infoToServer - object whos key is the column name and the value is what you want stored in that column
 * @returns {promise<object>}
 */
function ajaxCreateItem(props) {
	return nonDeleteProcess(props);
}
/**
 * Updates a single item in a list
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {string} [props.etag] - etag of the item to update
 * @param {number} props.itemId - id of the item to update
 * @param {object} props.infoToServer - object whos key is the column name and the value is what you want stored in that column
 * @returns {promise<object>}
 */
function ajaxUpdateItem(props) {

	props.headerData = {
		"X-HTTP-Method": "MERGE",
		"If-Match": props.etag || "*"
	};
	return nonDeleteProcess(props);
}
/**
 * Deletes a single item from a list or library
 * be warned if you use this function, the item you delete will be gone and unrecoverable!!!!
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.etag] - etag of the item to update
 * @param {number} props.itemId - id of the item to delete
 * @returns {promise<object>}
 */
function ajaxDeleteItem(props) {
	//todo try to complete this function without an etag
	props.headerData = {
		'X-HTTP-Method': 'DELETE',
		"If-Match": props.etag || "*"
	};
	return deleteProcess(props);
}
/**
 * Sends a single item to the recycle bin of the site collection
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {number} props.itemId - id of the item to recycle
 * @returns {promise<object>}
 */
function ajaxRecycleItem(props) {

	props.urlModifier = "/recycle";
	return deleteProcess(props);
}
/**
 * Gets the profile information from the profile service
 * if email is passed then that will be the profile data you get back
 * if email is not passed you get current user profile data back
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} [props.email] - email of the user you want profile data for 
 * @returns {promise<object[]>}
 */
function userProfileData() {
	var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


	var addon = null;

	if (props.email) {
		props.endPoint = '_api/sp.userprofiles.peoplemanager';
		addon = '/getpropertiesfor(@v)?@v=\'' + Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email) + '\'&';
	} else {
		//url for get current user
		props.endPoint = '_api/SP.UserProfiles.PeopleManager/GetMyProperties';
		addon = '?';
	}

	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);
	props.configuredUrl += addon + '$select=UserProfileProperties';

	return ajaxGetData(props.configuredUrl).then(function (userData) {
		//success
		if (userData.data['odata.null'] === true) {
			return [];
		} else {
			return userData.data.UserProfileProperties;
		}
	});
}
/**
 * Get the columns of a list or library
 * @param {object} props
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {boolean} [props.allData] - include read only and hidden columns
 * @returns {promise<object>}
 */
function getListColumns(props) {

	if (!props.allData) {
		props.allData = false;
	}
	__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listUrlConfigure */](props);
	props.listUrl += '/fields?$filter=Hidden eq ' + props.allData + ' and ReadOnlyField eq ' + props.allData;

	return ajaxGetData(props.listUrl);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(2);
var Axios = __webpack_require__(13);
var defaults = __webpack_require__(1);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(27);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(28);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(1);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(22);
var dispatchRequest = __webpack_require__(23);
var isAbsoluteURL = __webpack_require__(25);
var combineURLs = __webpack_require__(26);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;

  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */
  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href);

    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);

  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */
  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() :

// Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
  // initialize result and counter
  var block, charCode, idx = 0, map = chars;
  // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1);
  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = utils.isStandardBrowserEnv() ?

// Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },

    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },

    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() :

// Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(24);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(1);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(config.data, config.headers, config.transformRequest);

  // Flatten headers
  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(response.data, response.headers, config.transformResponse);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return minimalMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return verboseMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createlistitemtype; });
/* unused harmony export guidHexCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUrlOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listUrlConfigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listItemUrlConfigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parseBasePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createGetAllUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pd_sputil__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pd_sputil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pd_sputil__);
/*
e
*/

var minimalMeta = "application/json;odata=minimalmetadata";
var verboseMeta = "application/json;odata=verbose";
var createlistitemtype = function createlistitemtype(listName) {
	return 'SP.Data.' + listName.charAt(0).toUpperCase() + listName.slice(1) + 'ListItem';
};
var guidHexCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
var createGUID = function createGUID() {
	var result = '';

	for (var index = 0; index < 32; index++) {
		var value = Math.floor(Math.random() * 16);

		switch (index) {
			case 8:
				result += '-';
				break;
			case 12:
				value = 4;
				result += '-';
				break;
			case 16:
				value = value & 3 | 8;
				result += '-';
				break;
			case 20:
				result += '-';
				break;
		}
		result += guidHexCodes[value];
	}
	return result;
};
var checkUrlOrigin = function checkUrlOrigin(props) {

	props.configuredUrl = props.origin ? props.origin : Object(__WEBPACK_IMPORTED_MODULE_0_pd_sputil__["getURLOrigin"])();

	if (props.url) {
		props.configuredUrl += props.url;
	}

	if (props.endPoint) {
		props.configuredUrl += "/" + props.endPoint;
	}
	return props;

	//fell through so the incorrect datatype was passed to function, error
};
var listUrlConfigure = function listUrlConfigure(props) {

	if (!props.url || props.listUrl) {
		return;
	}

	props.endPoint = "_api/web";

	checkUrlOrigin(props);

	if (props.listGUID) {
		props.listUrl = props.configuredUrl += "/lists(guid'" + props.listGUID + "')";
	} else if (props.listTitle) {
		props.listUrl = props.configuredUrl += "/lists/getbytitle('" + props.listTitle + "')";
	}
	return props;
};
var listItemUrlConfigure = function listItemUrlConfigure(props) {
	//for create, update, delete
	var item = props.itemId || '';

	if (props.listItemUrl) {
		return;
	}

	listUrlConfigure(props);

	props.listItemUrl = props.listUrl += "/items(" + item + ")";
	return props;
};
var parseBasePermissions = function parseBasePermissions(value) {
	var permissions = new SP.BasePermissions();
	permissions.initPropertiesFromJson(value);
	var permLevels = [];
	for (var permLevelName in SP.PermissionKind.prototype) {
		if (SP.PermissionKind.hasOwnProperty(permLevelName)) {
			var permLevel = SP.PermissionKind.parse(permLevelName);
			if (permissions.has(permLevel)) {
				permLevels.push(permLevelName);
			}
		}
	}
	return permLevels;
};
var createGetAllUrl = function createGetAllUrl(props) {

	if (props.listUrl) {
		//already setup, get out
		return;
	}
	if (!props.endPoint) {
		props.endPoint = "_api/web";
	}
	listUrlConfigure(props);

	props.listUrl += "/items?";

	if (props.select) {
		props.listUrl += "$select=" + props.select + "&";
	}
	if (props.top) {
		props.listUrl += "$top=" + props.top + "&";
	}
	if (props.expand) {
		props.listUrl += "$expand=" + props.expand + "&";
	}
	if (props.filter) {
		props.listUrl += "$filter=" + props.filter + "&";
	}
	if (props.orderBy) {
		props.listUrl += "$orderby=" + props.orderBy + "&";
	}

	if (/\$$/.test(props.listUrl)) {
		//if $ is the last character then get rid of it
		props.listUrl.slice(0, -1);
	}
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjZjk2MzI5NjFkNzYwZmFkNmE2ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3B1dGlsXCIsXCJjb21tb25qczJcIjpcInBkLXNwdXRpbFwiLFwiYW1kXCI6XCJwZC1zcHV0aWxcIixcInJvb3RcIjpcInBkc3B1dGlsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJiaW5kIiwicmVxdWlyZSIsImlzQnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpc0FycmF5IiwidmFsIiwiY2FsbCIsImlzQXJyYXlCdWZmZXIiLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc0FycmF5QnVmZmVyVmlldyIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiYnVmZmVyIiwiaXNTdHJpbmciLCJpc051bWJlciIsImlzVW5kZWZpbmVkIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJpc0ZpbGUiLCJpc0Jsb2IiLCJpc0Z1bmN0aW9uIiwiaXNTdHJlYW0iLCJwaXBlIiwiaXNVUkxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0cmltIiwic3RyIiwicmVwbGFjZSIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwibmF2aWdhdG9yIiwicHJvZHVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwiZm9yRWFjaCIsIm9iaiIsImZuIiwiaSIsImwiLCJsZW5ndGgiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm1lcmdlIiwiYXNzaWduVmFsdWUiLCJhcmd1bWVudHMiLCJleHRlbmQiLCJhIiwiYiIsInRoaXNBcmciLCJtb2R1bGUiLCJleHBvcnRzIiwidXRpbHMiLCJub3JtYWxpemVIZWFkZXJOYW1lIiwiREVGQVVMVF9DT05URU5UX1RZUEUiLCJzZXRDb250ZW50VHlwZUlmVW5zZXQiLCJoZWFkZXJzIiwidmFsdWUiLCJnZXREZWZhdWx0QWRhcHRlciIsImFkYXB0ZXIiLCJYTUxIdHRwUmVxdWVzdCIsInByb2Nlc3MiLCJkZWZhdWx0cyIsInRyYW5zZm9ybVJlcXVlc3QiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zZm9ybVJlc3BvbnNlIiwicGFyc2UiLCJlIiwidGltZW91dCIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJtYXhDb250ZW50TGVuZ3RoIiwidmFsaWRhdGVTdGF0dXMiLCJzdGF0dXMiLCJjb21tb24iLCJmb3JFYWNoTWV0aG9kTm9EYXRhIiwibWV0aG9kIiwiZm9yRWFjaE1ldGhvZFdpdGhEYXRhIiwid3JhcCIsImFyZ3MiLCJBcnJheSIsImFwcGx5IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwic2V0dGxlIiwiYnVpbGRVUkwiLCJwYXJzZUhlYWRlcnMiLCJpc1VSTFNhbWVPcmlnaW4iLCJjcmVhdGVFcnJvciIsImJ0b2EiLCJ4aHJBZGFwdGVyIiwiY29uZmlnIiwiUHJvbWlzZSIsImRpc3BhdGNoWGhyUmVxdWVzdCIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdCIsImxvYWRFdmVudCIsInhEb21haW4iLCJOT0RFX0VOViIsIlhEb21haW5SZXF1ZXN0IiwidXJsIiwib25wcm9ncmVzcyIsImhhbmRsZVByb2dyZXNzIiwib250aW1lb3V0IiwiaGFuZGxlVGltZW91dCIsImF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiQXV0aG9yaXphdGlvbiIsIm9wZW4iLCJ0b1VwcGVyQ2FzZSIsInBhcmFtcyIsInBhcmFtc1NlcmlhbGl6ZXIiLCJoYW5kbGVMb2FkIiwicmVhZHlTdGF0ZSIsInJlc3BvbnNlVVJMIiwiaW5kZXhPZiIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJoYW5kbGVFcnJvciIsImNvb2tpZXMiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZWFkIiwidW5kZWZpbmVkIiwic2V0UmVxdWVzdEhlYWRlciIsInRvTG93ZXJDYXNlIiwib25Eb3dubG9hZFByb2dyZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ1cGxvYWQiLCJjYW5jZWxUb2tlbiIsInByb21pc2UiLCJ0aGVuIiwib25DYW5jZWxlZCIsImNhbmNlbCIsImFib3J0Iiwic2VuZCIsImVuaGFuY2VFcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiZXJyb3IiLCJpc0NhbmNlbCIsIl9fQ0FOQ0VMX18iLCJDYW5jZWwiLCJkZXBUZXN0IiwiYXNzaWduIiwiYWpheEdldFVzZXJQZXJtaXNzaW9ucyIsInByb3BzIiwiYWpheEdldERhdGEiLCJwZXJtc0xpbmsiLCJnZXRFbnRpdHlUeXBlIiwiZW50aXR5RGF0YSIsImxpc3ROYW1lIiwiYWpheEdldExpc3RJbmZvIiwiTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWUiLCJub25EZWxldGVQcm9jZXNzIiwiaGVhZGVyRGF0YSIsInR5cGUiLCJpdGVtIiwiaW5mb1RvU2VydmVyIiwiYWpheEdldENvbnRleHQiLCJjb250ZXh0IiwiRm9ybURpZ2VzdFZhbHVlIiwiQWNjZXB0IiwiYWpheEhlbHBlcnMiLCJheGlvcyIsImxpc3RJdGVtVXJsIiwiZGVsZXRlUHJvY2VzcyIsInVybE1vZGlmaWVyIiwiZW5kUG9pbnQiLCJjb25maWd1cmVkVXJsIiwiYWpheEdldEFsbExpc3RSZXN1bHRzIiwibGlzdEdVSUQiLCJsaXN0VGl0bGUiLCJsaXN0VXJsIiwiY3VycmVudFJlc3VsdHMiLCJhbGxSZXN1bHRzIiwiYWpheEdldEJhdGNoIiwiYXJyYXlPZlVybHMiLCJiYXRjaEdVSUQiLCJiYXRjaEJvZHkiLCJiYXRjaEhlYWRlciIsImJhdGNoQ29udGVudHMiLCJqb2luIiwicGFyc2VkQXJyYXkiLCJyZXNwb25zZVRvQXJyYXkiLCJzcGxpdCIsImN1cnJlbnRMaW5lIiwiY2hhckF0IiwidHJ5UGFyc2VKc29uIiwiYWpheEdldEJhdGNoTWV0ZXJlZCIsInVybHNGb3JUcmlwIiwicGVyVHJpcENvdW50IiwidG90YWxJdGVtcyIsImdldFVybHMiLCJ0b3RhbFBlclRyaXAiLCJudW1iZXJUb1N0YXJ0QXQiLCJvcmlnaW4iLCJhamF4R2V0QmF0Y2hQcm9maWxlcyIsInByb2ZpbGVVcmxzIiwicHJvZmlsZUVtYWlscyIsImdldFVSTE9yaWdpbiIsInVybEZvclNpdGUiLCJlbWFpbCIsImVuY29kZWQiLCJlbmNvZGVBY2NvdW50TmFtZSIsImFqYXhQZW9wbGVTZWFyY2giLCJzZXJ2ZXJRdWVyeURhdGEiLCJzdGFydHJvdyIsInJvd2xpbWl0IiwiVHJpbUR1cGxpY2F0ZXMiLCJzZWxlY3Rwcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInNvdXJjZUlkIiwicXVlcnl0ZXh0IiwicXVlcnkiLCJlbXBEYXRhIiwicmVsZXZhbnRSZXN1bHRzIiwiUHJpbWFyeVF1ZXJ5UmVzdWx0IiwiUmVsZXZhbnRSZXN1bHRzIiwiVGFibGUiLCJSb3dzIiwiVG90YWxSb3dzIiwiUm93Q291bnQiLCJhamF4RW5zdXJlVXNlciIsImNvbnRlbnRUeXBlIiwiYWpheEdldFNpdGVVc2VySW5mb0J5RW1haWwiLCJhamF4R2V0SXRlbXNCeUNhbWwiLCJjYW1sIiwiaGVhZGVyZGF0YSIsImFqYXhHZXRVc2VyU2l0ZVBlcm1pc3Npb25zIiwiZW5jb2RlZEVtYWlsIiwiYWpheEdldFVzZXJMaXN0UGVybWlzc2lvbnMiLCJhamF4R2V0Q3VycmVudFVzZXJHcm91cHMiLCJ1c2VySWQiLCJncm91cHMiLCJncm91cEFycmF5IiwiVGl0bGUiLCJhamF4Q3JlYXRlSXRlbSIsImFqYXhVcGRhdGVJdGVtIiwiZXRhZyIsImFqYXhEZWxldGVJdGVtIiwiYWpheFJlY3ljbGVJdGVtIiwidXNlclByb2ZpbGVEYXRhIiwiYWRkb24iLCJ1c2VyRGF0YSIsIlVzZXJQcm9maWxlUHJvcGVydGllcyIsImdldExpc3RDb2x1bW5zIiwiYWxsRGF0YSIsIkF4aW9zIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJpbnN0YW5jZUNvbmZpZyIsIkNhbmNlbFRva2VuIiwiYWxsIiwicHJvbWlzZXMiLCJzcHJlYWQiLCJkZWZhdWx0IiwiaXNTbG93QnVmZmVyIiwiX2lzQnVmZmVyIiwiY29uc3RydWN0b3IiLCJyZWFkRmxvYXRMRSIsInNsaWNlIiwiSW50ZXJjZXB0b3JNYW5hZ2VyIiwiZGlzcGF0Y2hSZXF1ZXN0IiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwiaW50ZXJjZXB0b3JzIiwiYmFzZVVSTCIsImNoYWluIiwidW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInVuc2hpZnQiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsInNoaWZ0Iiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwicGFyc2VWYWx1ZSIsInYiLCJ0b0lTT1N0cmluZyIsInBhcnNlZCIsInBhcnNlciIsImxpbmUiLCJzdWJzdHIiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJtc2llIiwidGVzdCIsInVzZXJBZ2VudCIsInVybFBhcnNpbmdOb2RlIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdpblVSTCIsInJlc29sdmVVUkwiLCJocmVmIiwic2V0QXR0cmlidXRlIiwicHJvdG9jb2wiLCJob3N0Iiwic2VhcmNoIiwiaGFzaCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXF1ZXN0VVJMIiwibm9uU3RhbmRhcmRCcm93c2VyRW52IiwiY2hhcnMiLCJFIiwiaW5wdXQiLCJTdHJpbmciLCJvdXRwdXQiLCJibG9jayIsImNoYXJDb2RlIiwiaWR4IiwibWFwIiwiY2hhckNvZGVBdCIsIndyaXRlIiwiZXhwaXJlcyIsInBhdGgiLCJkb21haW4iLCJzZWN1cmUiLCJjb29raWUiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJtYXRjaCIsIlJlZ0V4cCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsIm5vdyIsImhhbmRsZXJzIiwidXNlIiwiZWplY3QiLCJpZCIsImZvckVhY2hIYW5kbGVyIiwiaCIsInRyYW5zZm9ybURhdGEiLCJ0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIiwidGhyb3dJZlJlcXVlc3RlZCIsImNsZWFuSGVhZGVyQ29uZmlnIiwib25BZGFwdGVyUmVzb2x1dGlvbiIsIm9uQWRhcHRlclJlamVjdGlvbiIsInJlYXNvbiIsImZucyIsInRyYW5zZm9ybSIsInJlbGF0aXZlVVJMIiwiZXhlY3V0b3IiLCJUeXBlRXJyb3IiLCJyZXNvbHZlUHJvbWlzZSIsInByb21pc2VFeGVjdXRvciIsInRva2VuIiwic291cmNlIiwiYyIsImNhbGxiYWNrIiwiYXJyIiwibWluaW1hbE1ldGEiLCJ2ZXJib3NlTWV0YSIsImNyZWF0ZWxpc3RpdGVtdHlwZSIsImd1aWRIZXhDb2RlcyIsImNyZWF0ZUdVSUQiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoZWNrVXJsT3JpZ2luIiwibGlzdFVybENvbmZpZ3VyZSIsImxpc3RJdGVtVXJsQ29uZmlndXJlIiwiaXRlbUlkIiwicGFyc2VCYXNlUGVybWlzc2lvbnMiLCJwZXJtaXNzaW9ucyIsIlNQIiwiQmFzZVBlcm1pc3Npb25zIiwiaW5pdFByb3BlcnRpZXNGcm9tSnNvbiIsInBlcm1MZXZlbHMiLCJwZXJtTGV2ZWxOYW1lIiwiUGVybWlzc2lvbktpbmQiLCJwZXJtTGV2ZWwiLCJoYXMiLCJjcmVhdGVHZXRBbGxVcmwiLCJzZWxlY3QiLCJ0b3AiLCJleHBhbmQiLCJmaWx0ZXIiLCJvcmRlckJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7OztBQUVBLElBQUlBLE9BQU8sbUJBQUFDLENBQVEsQ0FBUixDQUFYO0FBQ0EsSUFBSUMsV0FBVyxtQkFBQUQsQ0FBUSxFQUFSLENBQWY7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSUUsV0FBV0MsT0FBT0MsU0FBUCxDQUFpQkYsUUFBaEM7O0FBRUE7Ozs7OztBQU1BLFNBQVNHLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ3BCLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixnQkFBOUI7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU0UsYUFBVCxDQUF1QkYsR0FBdkIsRUFBNEI7QUFDMUIsU0FBT0osU0FBU0ssSUFBVCxDQUFjRCxHQUFkLE1BQXVCLHNCQUE5QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTRyxVQUFULENBQW9CSCxHQUFwQixFQUF5QjtBQUN2QixTQUFRLE9BQU9JLFFBQVAsS0FBb0IsV0FBckIsSUFBc0NKLGVBQWVJLFFBQTVEO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNDLGlCQUFULENBQTJCTCxHQUEzQixFQUFnQztBQUM5QixNQUFJTSxNQUFKO0FBQ0EsTUFBSyxPQUFPQyxXQUFQLEtBQXVCLFdBQXhCLElBQXlDQSxZQUFZQyxNQUF6RCxFQUFrRTtBQUNoRUYsYUFBU0MsWUFBWUMsTUFBWixDQUFtQlIsR0FBbkIsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMTSxhQUFVTixHQUFELElBQVVBLElBQUlTLE1BQWQsSUFBMEJULElBQUlTLE1BQUosWUFBc0JGLFdBQXpEO0FBQ0Q7QUFDRCxTQUFPRCxNQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNJLFFBQVQsQ0FBa0JWLEdBQWxCLEVBQXVCO0FBQ3JCLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQXRCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNXLFFBQVQsQ0FBa0JYLEdBQWxCLEVBQXVCO0FBQ3JCLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQXRCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNZLFdBQVQsQ0FBcUJaLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQU8sT0FBT0EsR0FBUCxLQUFlLFdBQXRCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNhLFFBQVQsQ0FBa0JiLEdBQWxCLEVBQXVCO0FBQ3JCLFNBQU9BLFFBQVEsSUFBUixJQUFnQixRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBdEM7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU2MsTUFBVCxDQUFnQmQsR0FBaEIsRUFBcUI7QUFDbkIsU0FBT0osU0FBU0ssSUFBVCxDQUFjRCxHQUFkLE1BQXVCLGVBQTlCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNlLE1BQVQsQ0FBZ0JmLEdBQWhCLEVBQXFCO0FBQ25CLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixlQUE5QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTZ0IsTUFBVCxDQUFnQmhCLEdBQWhCLEVBQXFCO0FBQ25CLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixlQUE5QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTaUIsVUFBVCxDQUFvQmpCLEdBQXBCLEVBQXlCO0FBQ3ZCLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixtQkFBOUI7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FBU2tCLFFBQVQsQ0FBa0JsQixHQUFsQixFQUF1QjtBQUNyQixTQUFPYSxTQUFTYixHQUFULEtBQWlCaUIsV0FBV2pCLElBQUltQixJQUFmLENBQXhCO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BLFNBQVNDLGlCQUFULENBQTJCcEIsR0FBM0IsRUFBZ0M7QUFDOUIsU0FBTyxPQUFPcUIsZUFBUCxLQUEyQixXQUEzQixJQUEwQ3JCLGVBQWVxQixlQUFoRTtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFTQyxJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDakIsU0FBT0EsSUFBSUMsT0FBSixDQUFZLE1BQVosRUFBb0IsRUFBcEIsRUFBd0JBLE9BQXhCLENBQWdDLE1BQWhDLEVBQXdDLEVBQXhDLENBQVA7QUFDRDs7QUFFRDs7Ozs7Ozs7Ozs7OztBQWFBLFNBQVNDLG9CQUFULEdBQWdDO0FBQzlCLE1BQUksT0FBT0MsU0FBUCxLQUFxQixXQUFyQixJQUFvQ0EsVUFBVUMsT0FBVixLQUFzQixhQUE5RCxFQUE2RTtBQUMzRSxXQUFPLEtBQVA7QUFDRDtBQUNELFNBQ0UsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixJQUNBLE9BQU9DLFFBQVAsS0FBb0IsV0FGdEI7QUFJRDs7QUFFRDs7Ozs7Ozs7Ozs7O0FBWUEsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEVBQXRCLEVBQTBCO0FBQ3hCO0FBQ0EsTUFBSUQsUUFBUSxJQUFSLElBQWdCLE9BQU9BLEdBQVAsS0FBZSxXQUFuQyxFQUFnRDtBQUM5QztBQUNEOztBQUVEO0FBQ0EsTUFBSSxRQUFPQSxHQUFQLHlDQUFPQSxHQUFQLE9BQWUsUUFBZixJQUEyQixDQUFDaEMsUUFBUWdDLEdBQVIsQ0FBaEMsRUFBOEM7QUFDNUM7QUFDQUEsVUFBTSxDQUFDQSxHQUFELENBQU47QUFDRDs7QUFFRCxNQUFJaEMsUUFBUWdDLEdBQVIsQ0FBSixFQUFrQjtBQUNoQjtBQUNBLFNBQUssSUFBSUUsSUFBSSxDQUFSLEVBQVdDLElBQUlILElBQUlJLE1BQXhCLEVBQWdDRixJQUFJQyxDQUFwQyxFQUF1Q0QsR0FBdkMsRUFBNEM7QUFDMUNELFNBQUcvQixJQUFILENBQVEsSUFBUixFQUFjOEIsSUFBSUUsQ0FBSixDQUFkLEVBQXNCQSxDQUF0QixFQUF5QkYsR0FBekI7QUFDRDtBQUNGLEdBTEQsTUFLTztBQUNMO0FBQ0EsU0FBSyxJQUFJSyxHQUFULElBQWdCTCxHQUFoQixFQUFxQjtBQUNuQixVQUFJbEMsT0FBT0MsU0FBUCxDQUFpQnVDLGNBQWpCLENBQWdDcEMsSUFBaEMsQ0FBcUM4QixHQUFyQyxFQUEwQ0ssR0FBMUMsQ0FBSixFQUFvRDtBQUNsREosV0FBRy9CLElBQUgsQ0FBUSxJQUFSLEVBQWM4QixJQUFJSyxHQUFKLENBQWQsRUFBd0JBLEdBQXhCLEVBQTZCTCxHQUE3QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQSxTQUFTTyxLQUFULEdBQWUsMkJBQTZCO0FBQzFDLE1BQUloQyxTQUFTLEVBQWI7QUFDQSxXQUFTaUMsV0FBVCxDQUFxQnZDLEdBQXJCLEVBQTBCb0MsR0FBMUIsRUFBK0I7QUFDN0IsUUFBSSxRQUFPOUIsT0FBTzhCLEdBQVAsQ0FBUCxNQUF1QixRQUF2QixJQUFtQyxRQUFPcEMsR0FBUCx5Q0FBT0EsR0FBUCxPQUFlLFFBQXRELEVBQWdFO0FBQzlETSxhQUFPOEIsR0FBUCxJQUFjRSxNQUFNaEMsT0FBTzhCLEdBQVAsQ0FBTixFQUFtQnBDLEdBQW5CLENBQWQ7QUFDRCxLQUZELE1BRU87QUFDTE0sYUFBTzhCLEdBQVAsSUFBY3BDLEdBQWQ7QUFDRDtBQUNGOztBQUVELE9BQUssSUFBSWlDLElBQUksQ0FBUixFQUFXQyxJQUFJTSxVQUFVTCxNQUE5QixFQUFzQ0YsSUFBSUMsQ0FBMUMsRUFBNkNELEdBQTdDLEVBQWtEO0FBQ2hESCxZQUFRVSxVQUFVUCxDQUFWLENBQVIsRUFBc0JNLFdBQXRCO0FBQ0Q7QUFDRCxTQUFPakMsTUFBUDtBQUNEOztBQUVEOzs7Ozs7OztBQVFBLFNBQVNtQyxNQUFULENBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsRUFBc0JDLE9BQXRCLEVBQStCO0FBQzdCZCxVQUFRYSxDQUFSLEVBQVcsU0FBU0osV0FBVCxDQUFxQnZDLEdBQXJCLEVBQTBCb0MsR0FBMUIsRUFBK0I7QUFDeEMsUUFBSVEsV0FBVyxPQUFPNUMsR0FBUCxLQUFlLFVBQTlCLEVBQTBDO0FBQ3hDMEMsUUFBRU4sR0FBRixJQUFTM0MsS0FBS08sR0FBTCxFQUFVNEMsT0FBVixDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xGLFFBQUVOLEdBQUYsSUFBU3BDLEdBQVQ7QUFDRDtBQUNGLEdBTkQ7QUFPQSxTQUFPMEMsQ0FBUDtBQUNEOztBQUVERyxPQUFPQyxPQUFQLEdBQWlCO0FBQ2YvQyxXQUFTQSxPQURNO0FBRWZHLGlCQUFlQSxhQUZBO0FBR2ZQLFlBQVVBLFFBSEs7QUFJZlEsY0FBWUEsVUFKRztBQUtmRSxxQkFBbUJBLGlCQUxKO0FBTWZLLFlBQVVBLFFBTks7QUFPZkMsWUFBVUEsUUFQSztBQVFmRSxZQUFVQSxRQVJLO0FBU2ZELGVBQWFBLFdBVEU7QUFVZkUsVUFBUUEsTUFWTztBQVdmQyxVQUFRQSxNQVhPO0FBWWZDLFVBQVFBLE1BWk87QUFhZkMsY0FBWUEsVUFiRztBQWNmQyxZQUFVQSxRQWRLO0FBZWZFLHFCQUFtQkEsaUJBZko7QUFnQmZLLHdCQUFzQkEsb0JBaEJQO0FBaUJmSyxXQUFTQSxPQWpCTTtBQWtCZlEsU0FBT0EsS0FsQlE7QUFtQmZHLFVBQVFBLE1BbkJPO0FBb0JmbkIsUUFBTUE7QUFwQlMsQ0FBakIsQzs7Ozs7OzsrQ0N6UkE7O0FBRUEsSUFBSXlCLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlzRCxzQkFBc0IsbUJBQUF0RCxDQUFRLEVBQVIsQ0FBMUI7O0FBRUEsSUFBSXVELHVCQUF1QjtBQUN6QixrQkFBZ0I7QUFEUyxDQUEzQjs7QUFJQSxTQUFTQyxxQkFBVCxDQUErQkMsT0FBL0IsRUFBd0NDLEtBQXhDLEVBQStDO0FBQzdDLE1BQUksQ0FBQ0wsTUFBTW5DLFdBQU4sQ0FBa0J1QyxPQUFsQixDQUFELElBQStCSixNQUFNbkMsV0FBTixDQUFrQnVDLFFBQVEsY0FBUixDQUFsQixDQUFuQyxFQUErRTtBQUM3RUEsWUFBUSxjQUFSLElBQTBCQyxLQUExQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsaUJBQVQsR0FBNkI7QUFDM0IsTUFBSUMsT0FBSjtBQUNBLE1BQUksT0FBT0MsY0FBUCxLQUEwQixXQUE5QixFQUEyQztBQUN6QztBQUNBRCxjQUFVLG1CQUFBNUQsQ0FBUSxDQUFSLENBQVY7QUFDRCxHQUhELE1BR08sSUFBSSxPQUFPOEQsT0FBUCxLQUFtQixXQUF2QixFQUFvQztBQUN6QztBQUNBRixjQUFVLG1CQUFBNUQsQ0FBUSxDQUFSLENBQVY7QUFDRDtBQUNELFNBQU80RCxPQUFQO0FBQ0Q7O0FBRUQsSUFBSUcsV0FBVztBQUNiSCxXQUFTRCxtQkFESTs7QUFHYkssb0JBQWtCLENBQUMsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDUixPQUFoQyxFQUF5QztBQUMxREgsd0JBQW9CRyxPQUFwQixFQUE2QixjQUE3QjtBQUNBLFFBQUlKLE1BQU01QyxVQUFOLENBQWlCd0QsSUFBakIsS0FDRlosTUFBTTdDLGFBQU4sQ0FBb0J5RCxJQUFwQixDQURFLElBRUZaLE1BQU1wRCxRQUFOLENBQWVnRSxJQUFmLENBRkUsSUFHRlosTUFBTTdCLFFBQU4sQ0FBZXlDLElBQWYsQ0FIRSxJQUlGWixNQUFNaEMsTUFBTixDQUFhNEMsSUFBYixDQUpFLElBS0ZaLE1BQU0vQixNQUFOLENBQWEyQyxJQUFiLENBTEYsRUFNRTtBQUNBLGFBQU9BLElBQVA7QUFDRDtBQUNELFFBQUlaLE1BQU0xQyxpQkFBTixDQUF3QnNELElBQXhCLENBQUosRUFBbUM7QUFDakMsYUFBT0EsS0FBS2xELE1BQVo7QUFDRDtBQUNELFFBQUlzQyxNQUFNM0IsaUJBQU4sQ0FBd0J1QyxJQUF4QixDQUFKLEVBQW1DO0FBQ2pDVCw0QkFBc0JDLE9BQXRCLEVBQStCLGlEQUEvQjtBQUNBLGFBQU9RLEtBQUsvRCxRQUFMLEVBQVA7QUFDRDtBQUNELFFBQUltRCxNQUFNbEMsUUFBTixDQUFlOEMsSUFBZixDQUFKLEVBQTBCO0FBQ3hCVCw0QkFBc0JDLE9BQXRCLEVBQStCLGdDQUEvQjtBQUNBLGFBQU9TLEtBQUtDLFNBQUwsQ0FBZUYsSUFBZixDQUFQO0FBQ0Q7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0F2QmlCLENBSEw7O0FBNEJiRyxxQkFBbUIsQ0FBQyxTQUFTQSxpQkFBVCxDQUEyQkgsSUFBM0IsRUFBaUM7QUFDbkQ7QUFDQSxRQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDNUIsVUFBSTtBQUNGQSxlQUFPQyxLQUFLRyxLQUFMLENBQVdKLElBQVgsQ0FBUDtBQUNELE9BRkQsQ0FFRSxPQUFPSyxDQUFQLEVBQVUsQ0FBRSxZQUFjO0FBQzdCO0FBQ0QsV0FBT0wsSUFBUDtBQUNELEdBUmtCLENBNUJOOztBQXNDYk0sV0FBUyxDQXRDSTs7QUF3Q2JDLGtCQUFnQixZQXhDSDtBQXlDYkMsa0JBQWdCLGNBekNIOztBQTJDYkMsb0JBQWtCLENBQUMsQ0EzQ047O0FBNkNiQyxrQkFBZ0IsU0FBU0EsY0FBVCxDQUF3QkMsTUFBeEIsRUFBZ0M7QUFDOUMsV0FBT0EsVUFBVSxHQUFWLElBQWlCQSxTQUFTLEdBQWpDO0FBQ0Q7QUEvQ1ksQ0FBZjs7QUFrREFiLFNBQVNOLE9BQVQsR0FBbUI7QUFDakJvQixVQUFRO0FBQ04sY0FBVTtBQURKO0FBRFMsQ0FBbkI7O0FBTUF4QixNQUFNakIsT0FBTixDQUFjLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsTUFBbEIsQ0FBZCxFQUF5QyxTQUFTMEMsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQzVFaEIsV0FBU04sT0FBVCxDQUFpQnNCLE1BQWpCLElBQTJCLEVBQTNCO0FBQ0QsQ0FGRDs7QUFJQTFCLE1BQU1qQixPQUFOLENBQWMsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixDQUFkLEVBQXdDLFNBQVM0QyxxQkFBVCxDQUErQkQsTUFBL0IsRUFBdUM7QUFDN0VoQixXQUFTTixPQUFULENBQWlCc0IsTUFBakIsSUFBMkIxQixNQUFNVCxLQUFOLENBQVlXLG9CQUFaLENBQTNCO0FBQ0QsQ0FGRDs7QUFJQUosT0FBT0MsT0FBUCxHQUFpQlcsUUFBakIsQzs7Ozs7Ozs7QUMzRkE7O0FBRUFaLE9BQU9DLE9BQVAsR0FBaUIsU0FBU3JELElBQVQsQ0FBY3VDLEVBQWQsRUFBa0JZLE9BQWxCLEVBQTJCO0FBQzFDLFNBQU8sU0FBUytCLElBQVQsR0FBZ0I7QUFDckIsUUFBSUMsT0FBTyxJQUFJQyxLQUFKLENBQVVyQyxVQUFVTCxNQUFwQixDQUFYO0FBQ0EsU0FBSyxJQUFJRixJQUFJLENBQWIsRUFBZ0JBLElBQUkyQyxLQUFLekMsTUFBekIsRUFBaUNGLEdBQWpDLEVBQXNDO0FBQ3BDMkMsV0FBSzNDLENBQUwsSUFBVU8sVUFBVVAsQ0FBVixDQUFWO0FBQ0Q7QUFDRCxXQUFPRCxHQUFHOEMsS0FBSCxDQUFTbEMsT0FBVCxFQUFrQmdDLElBQWxCLENBQVA7QUFDRCxHQU5EO0FBT0QsQ0FSRCxDOzs7Ozs7QUNGQTtBQUNBLElBQUlwQixVQUFVWCxPQUFPQyxPQUFQLEdBQWlCLEVBQS9COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlpQyxnQkFBSjtBQUNBLElBQUlDLGtCQUFKOztBQUVBLFNBQVNDLGdCQUFULEdBQTRCO0FBQ3hCLFVBQU0sSUFBSUMsS0FBSixDQUFVLGlDQUFWLENBQU47QUFDSDtBQUNELFNBQVNDLG1CQUFULEdBQWdDO0FBQzVCLFVBQU0sSUFBSUQsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDSDtBQUNBLGFBQVk7QUFDVCxRQUFJO0FBQ0EsWUFBSSxPQUFPRSxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ2xDTCwrQkFBbUJLLFVBQW5CO0FBQ0gsU0FGRCxNQUVPO0FBQ0hMLCtCQUFtQkUsZ0JBQW5CO0FBQ0g7QUFDSixLQU5ELENBTUUsT0FBT2pCLENBQVAsRUFBVTtBQUNSZSwyQkFBbUJFLGdCQUFuQjtBQUNIO0FBQ0QsUUFBSTtBQUNBLFlBQUksT0FBT0ksWUFBUCxLQUF3QixVQUE1QixFQUF3QztBQUNwQ0wsaUNBQXFCSyxZQUFyQjtBQUNILFNBRkQsTUFFTztBQUNITCxpQ0FBcUJHLG1CQUFyQjtBQUNIO0FBQ0osS0FORCxDQU1FLE9BQU9uQixDQUFQLEVBQVU7QUFDUmdCLDZCQUFxQkcsbUJBQXJCO0FBQ0g7QUFDSixDQW5CQSxHQUFEO0FBb0JBLFNBQVNHLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQ3JCLFFBQUlSLHFCQUFxQkssVUFBekIsRUFBcUM7QUFDakM7QUFDQSxlQUFPQSxXQUFXRyxHQUFYLEVBQWdCLENBQWhCLENBQVA7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDUixxQkFBcUJFLGdCQUFyQixJQUF5QyxDQUFDRixnQkFBM0MsS0FBZ0VLLFVBQXBFLEVBQWdGO0FBQzVFTCwyQkFBbUJLLFVBQW5CO0FBQ0EsZUFBT0EsV0FBV0csR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQ0g7QUFDRCxRQUFJO0FBQ0E7QUFDQSxlQUFPUixpQkFBaUJRLEdBQWpCLEVBQXNCLENBQXRCLENBQVA7QUFDSCxLQUhELENBR0UsT0FBTXZCLENBQU4sRUFBUTtBQUNOLFlBQUk7QUFDQTtBQUNBLG1CQUFPZSxpQkFBaUI5RSxJQUFqQixDQUFzQixJQUF0QixFQUE0QnNGLEdBQTVCLEVBQWlDLENBQWpDLENBQVA7QUFDSCxTQUhELENBR0UsT0FBTXZCLENBQU4sRUFBUTtBQUNOO0FBQ0EsbUJBQU9lLGlCQUFpQjlFLElBQWpCLENBQXNCLElBQXRCLEVBQTRCc0YsR0FBNUIsRUFBaUMsQ0FBakMsQ0FBUDtBQUNIO0FBQ0o7QUFHSjtBQUNELFNBQVNDLGVBQVQsQ0FBeUJDLE1BQXpCLEVBQWlDO0FBQzdCLFFBQUlULHVCQUF1QkssWUFBM0IsRUFBeUM7QUFDckM7QUFDQSxlQUFPQSxhQUFhSSxNQUFiLENBQVA7QUFDSDtBQUNEO0FBQ0EsUUFBSSxDQUFDVCx1QkFBdUJHLG1CQUF2QixJQUE4QyxDQUFDSCxrQkFBaEQsS0FBdUVLLFlBQTNFLEVBQXlGO0FBQ3JGTCw2QkFBcUJLLFlBQXJCO0FBQ0EsZUFBT0EsYUFBYUksTUFBYixDQUFQO0FBQ0g7QUFDRCxRQUFJO0FBQ0E7QUFDQSxlQUFPVCxtQkFBbUJTLE1BQW5CLENBQVA7QUFDSCxLQUhELENBR0UsT0FBT3pCLENBQVAsRUFBUztBQUNQLFlBQUk7QUFDQTtBQUNBLG1CQUFPZ0IsbUJBQW1CL0UsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJ3RixNQUE5QixDQUFQO0FBQ0gsU0FIRCxDQUdFLE9BQU96QixDQUFQLEVBQVM7QUFDUDtBQUNBO0FBQ0EsbUJBQU9nQixtQkFBbUIvRSxJQUFuQixDQUF3QixJQUF4QixFQUE4QndGLE1BQTlCLENBQVA7QUFDSDtBQUNKO0FBSUo7QUFDRCxJQUFJQyxRQUFRLEVBQVo7QUFDQSxJQUFJQyxXQUFXLEtBQWY7QUFDQSxJQUFJQyxZQUFKO0FBQ0EsSUFBSUMsYUFBYSxDQUFDLENBQWxCOztBQUVBLFNBQVNDLGVBQVQsR0FBMkI7QUFDdkIsUUFBSSxDQUFDSCxRQUFELElBQWEsQ0FBQ0MsWUFBbEIsRUFBZ0M7QUFDNUI7QUFDSDtBQUNERCxlQUFXLEtBQVg7QUFDQSxRQUFJQyxhQUFhekQsTUFBakIsRUFBeUI7QUFDckJ1RCxnQkFBUUUsYUFBYUcsTUFBYixDQUFvQkwsS0FBcEIsQ0FBUjtBQUNILEtBRkQsTUFFTztBQUNIRyxxQkFBYSxDQUFDLENBQWQ7QUFDSDtBQUNELFFBQUlILE1BQU12RCxNQUFWLEVBQWtCO0FBQ2Q2RDtBQUNIO0FBQ0o7O0FBRUQsU0FBU0EsVUFBVCxHQUFzQjtBQUNsQixRQUFJTCxRQUFKLEVBQWM7QUFDVjtBQUNIO0FBQ0QsUUFBSTFCLFVBQVVxQixXQUFXUSxlQUFYLENBQWQ7QUFDQUgsZUFBVyxJQUFYOztBQUVBLFFBQUlNLE1BQU1QLE1BQU12RCxNQUFoQjtBQUNBLFdBQU04RCxHQUFOLEVBQVc7QUFDUEwsdUJBQWVGLEtBQWY7QUFDQUEsZ0JBQVEsRUFBUjtBQUNBLGVBQU8sRUFBRUcsVUFBRixHQUFlSSxHQUF0QixFQUEyQjtBQUN2QixnQkFBSUwsWUFBSixFQUFrQjtBQUNkQSw2QkFBYUMsVUFBYixFQUF5QkssR0FBekI7QUFDSDtBQUNKO0FBQ0RMLHFCQUFhLENBQUMsQ0FBZDtBQUNBSSxjQUFNUCxNQUFNdkQsTUFBWjtBQUNIO0FBQ0R5RCxtQkFBZSxJQUFmO0FBQ0FELGVBQVcsS0FBWDtBQUNBSCxvQkFBZ0J2QixPQUFoQjtBQUNIOztBQUVEVCxRQUFRMkMsUUFBUixHQUFtQixVQUFVWixHQUFWLEVBQWU7QUFDOUIsUUFBSVgsT0FBTyxJQUFJQyxLQUFKLENBQVVyQyxVQUFVTCxNQUFWLEdBQW1CLENBQTdCLENBQVg7QUFDQSxRQUFJSyxVQUFVTCxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCLGFBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJTyxVQUFVTCxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDdkMyQyxpQkFBSzNDLElBQUksQ0FBVCxJQUFjTyxVQUFVUCxDQUFWLENBQWQ7QUFDSDtBQUNKO0FBQ0R5RCxVQUFNVSxJQUFOLENBQVcsSUFBSUMsSUFBSixDQUFTZCxHQUFULEVBQWNYLElBQWQsQ0FBWDtBQUNBLFFBQUljLE1BQU12RCxNQUFOLEtBQWlCLENBQWpCLElBQXNCLENBQUN3RCxRQUEzQixFQUFxQztBQUNqQ0wsbUJBQVdVLFVBQVg7QUFDSDtBQUNKLENBWEQ7O0FBYUE7QUFDQSxTQUFTSyxJQUFULENBQWNkLEdBQWQsRUFBbUJlLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQUtmLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtlLEtBQUwsR0FBYUEsS0FBYjtBQUNIO0FBQ0RELEtBQUt2RyxTQUFMLENBQWVvRyxHQUFmLEdBQXFCLFlBQVk7QUFDN0IsU0FBS1gsR0FBTCxDQUFTVCxLQUFULENBQWUsSUFBZixFQUFxQixLQUFLd0IsS0FBMUI7QUFDSCxDQUZEO0FBR0E5QyxRQUFRK0MsS0FBUixHQUFnQixTQUFoQjtBQUNBL0MsUUFBUWdELE9BQVIsR0FBa0IsSUFBbEI7QUFDQWhELFFBQVFpRCxHQUFSLEdBQWMsRUFBZDtBQUNBakQsUUFBUWtELElBQVIsR0FBZSxFQUFmO0FBQ0FsRCxRQUFRbUQsT0FBUixHQUFrQixFQUFsQixDLENBQXNCO0FBQ3RCbkQsUUFBUW9ELFFBQVIsR0FBbUIsRUFBbkI7O0FBRUEsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztBQUVsQnJELFFBQVFzRCxFQUFSLEdBQWFELElBQWI7QUFDQXJELFFBQVF1RCxXQUFSLEdBQXNCRixJQUF0QjtBQUNBckQsUUFBUXdELElBQVIsR0FBZUgsSUFBZjtBQUNBckQsUUFBUXlELEdBQVIsR0FBY0osSUFBZDtBQUNBckQsUUFBUTBELGNBQVIsR0FBeUJMLElBQXpCO0FBQ0FyRCxRQUFRMkQsa0JBQVIsR0FBNkJOLElBQTdCO0FBQ0FyRCxRQUFRNEQsSUFBUixHQUFlUCxJQUFmO0FBQ0FyRCxRQUFRNkQsZUFBUixHQUEwQlIsSUFBMUI7QUFDQXJELFFBQVE4RCxtQkFBUixHQUE4QlQsSUFBOUI7O0FBRUFyRCxRQUFRK0QsU0FBUixHQUFvQixVQUFVQyxJQUFWLEVBQWdCO0FBQUUsV0FBTyxFQUFQO0FBQVcsQ0FBakQ7O0FBRUFoRSxRQUFRaUUsT0FBUixHQUFrQixVQUFVRCxJQUFWLEVBQWdCO0FBQzlCLFVBQU0sSUFBSXRDLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0gsQ0FGRDs7QUFJQTFCLFFBQVFrRSxHQUFSLEdBQWMsWUFBWTtBQUFFLFdBQU8sR0FBUDtBQUFZLENBQXhDO0FBQ0FsRSxRQUFRbUUsS0FBUixHQUFnQixVQUFVQyxHQUFWLEVBQWU7QUFDM0IsVUFBTSxJQUFJMUMsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDSCxDQUZEO0FBR0ExQixRQUFRcUUsS0FBUixHQUFnQixZQUFXO0FBQUUsV0FBTyxDQUFQO0FBQVcsQ0FBeEMsQzs7Ozs7OzsrQ0N2TEE7O0FBRUEsSUFBSTlFLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlvSSxTQUFTLG1CQUFBcEksQ0FBUSxFQUFSLENBQWI7QUFDQSxJQUFJcUksV0FBVyxtQkFBQXJJLENBQVEsRUFBUixDQUFmO0FBQ0EsSUFBSXNJLGVBQWUsbUJBQUF0SSxDQUFRLEVBQVIsQ0FBbkI7QUFDQSxJQUFJdUksa0JBQWtCLG1CQUFBdkksQ0FBUSxFQUFSLENBQXRCO0FBQ0EsSUFBSXdJLGNBQWMsbUJBQUF4SSxDQUFRLENBQVIsQ0FBbEI7QUFDQSxJQUFJeUksT0FBUSxPQUFPdkcsTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsT0FBT3VHLElBQXhDLElBQWdEdkcsT0FBT3VHLElBQVAsQ0FBWTFJLElBQVosQ0FBaUJtQyxNQUFqQixDQUFqRCxJQUE4RSxtQkFBQWxDLENBQVEsRUFBUixDQUF6Rjs7QUFFQW1ELE9BQU9DLE9BQVAsR0FBaUIsU0FBU3NGLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQzNDLFNBQU8sSUFBSUMsT0FBSixDQUFZLFNBQVNDLGtCQUFULENBQTRCQyxPQUE1QixFQUFxQ0MsTUFBckMsRUFBNkM7QUFDOUQsUUFBSUMsY0FBY0wsT0FBTzFFLElBQXpCO0FBQ0EsUUFBSWdGLGlCQUFpQk4sT0FBT2xGLE9BQTVCOztBQUVBLFFBQUlKLE1BQU01QyxVQUFOLENBQWlCdUksV0FBakIsQ0FBSixFQUFtQztBQUNqQyxhQUFPQyxlQUFlLGNBQWYsQ0FBUCxDQURpQyxDQUNNO0FBQ3hDOztBQUVELFFBQUlDLFVBQVUsSUFBSXJGLGNBQUosRUFBZDtBQUNBLFFBQUlzRixZQUFZLG9CQUFoQjtBQUNBLFFBQUlDLFVBQVUsS0FBZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFJdEYsUUFBUWlELEdBQVIsQ0FBWXNDLFFBQVosS0FBeUIsTUFBekIsSUFDQSxPQUFPbkgsTUFBUCxLQUFrQixXQURsQixJQUVBQSxPQUFPb0gsY0FGUCxJQUV5QixFQUFFLHFCQUFxQkosT0FBdkIsQ0FGekIsSUFHQSxDQUFDWCxnQkFBZ0JJLE9BQU9ZLEdBQXZCLENBSEwsRUFHa0M7QUFDaENMLGdCQUFVLElBQUloSCxPQUFPb0gsY0FBWCxFQUFWO0FBQ0FILGtCQUFZLFFBQVo7QUFDQUMsZ0JBQVUsSUFBVjtBQUNBRixjQUFRTSxVQUFSLEdBQXFCLFNBQVNDLGNBQVQsR0FBMEIsQ0FBRSxDQUFqRDtBQUNBUCxjQUFRUSxTQUFSLEdBQW9CLFNBQVNDLGFBQVQsR0FBeUIsQ0FBRSxDQUEvQztBQUNEOztBQUVEO0FBQ0EsUUFBSWhCLE9BQU9pQixJQUFYLEVBQWlCO0FBQ2YsVUFBSUMsV0FBV2xCLE9BQU9pQixJQUFQLENBQVlDLFFBQVosSUFBd0IsRUFBdkM7QUFDQSxVQUFJQyxXQUFXbkIsT0FBT2lCLElBQVAsQ0FBWUUsUUFBWixJQUF3QixFQUF2QztBQUNBYixxQkFBZWMsYUFBZixHQUErQixXQUFXdEIsS0FBS29CLFdBQVcsR0FBWCxHQUFpQkMsUUFBdEIsQ0FBMUM7QUFDRDs7QUFFRFosWUFBUWMsSUFBUixDQUFhckIsT0FBTzVELE1BQVAsQ0FBY2tGLFdBQWQsRUFBYixFQUEwQzVCLFNBQVNNLE9BQU9ZLEdBQWhCLEVBQXFCWixPQUFPdUIsTUFBNUIsRUFBb0N2QixPQUFPd0IsZ0JBQTNDLENBQTFDLEVBQXdHLElBQXhHOztBQUVBO0FBQ0FqQixZQUFRM0UsT0FBUixHQUFrQm9FLE9BQU9wRSxPQUF6Qjs7QUFFQTtBQUNBMkUsWUFBUUMsU0FBUixJQUFxQixTQUFTaUIsVUFBVCxHQUFzQjtBQUN6QyxVQUFJLENBQUNsQixPQUFELElBQWFBLFFBQVFtQixVQUFSLEtBQXVCLENBQXZCLElBQTRCLENBQUNqQixPQUE5QyxFQUF3RDtBQUN0RDtBQUNEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBSUYsUUFBUXRFLE1BQVIsS0FBbUIsQ0FBbkIsSUFBd0IsRUFBRXNFLFFBQVFvQixXQUFSLElBQXVCcEIsUUFBUW9CLFdBQVIsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLE1BQXlDLENBQWxFLENBQTVCLEVBQWtHO0FBQ2hHO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFJQyxrQkFBa0IsMkJBQTJCdEIsT0FBM0IsR0FBcUNaLGFBQWFZLFFBQVF1QixxQkFBUixFQUFiLENBQXJDLEdBQXFGLElBQTNHO0FBQ0EsVUFBSUMsZUFBZSxDQUFDL0IsT0FBT2dDLFlBQVIsSUFBd0JoQyxPQUFPZ0MsWUFBUCxLQUF3QixNQUFoRCxHQUF5RHpCLFFBQVEwQixZQUFqRSxHQUFnRjFCLFFBQVEyQixRQUEzRztBQUNBLFVBQUlBLFdBQVc7QUFDYjVHLGNBQU15RyxZQURPO0FBRWI7QUFDQTlGLGdCQUFRc0UsUUFBUXRFLE1BQVIsS0FBbUIsSUFBbkIsR0FBMEIsR0FBMUIsR0FBZ0NzRSxRQUFRdEUsTUFIbkM7QUFJYmtHLG9CQUFZNUIsUUFBUXRFLE1BQVIsS0FBbUIsSUFBbkIsR0FBMEIsWUFBMUIsR0FBeUNzRSxRQUFRNEIsVUFKaEQ7QUFLYnJILGlCQUFTK0csZUFMSTtBQU1iN0IsZ0JBQVFBLE1BTks7QUFPYk8saUJBQVNBO0FBUEksT0FBZjs7QUFVQWQsYUFBT1UsT0FBUCxFQUFnQkMsTUFBaEIsRUFBd0I4QixRQUF4Qjs7QUFFQTtBQUNBM0IsZ0JBQVUsSUFBVjtBQUNELEtBOUJEOztBQWdDQTtBQUNBQSxZQUFRNkIsT0FBUixHQUFrQixTQUFTQyxXQUFULEdBQXVCO0FBQ3ZDO0FBQ0E7QUFDQWpDLGFBQU9QLFlBQVksZUFBWixFQUE2QkcsTUFBN0IsRUFBcUMsSUFBckMsRUFBMkNPLE9BQTNDLENBQVA7O0FBRUE7QUFDQUEsZ0JBQVUsSUFBVjtBQUNELEtBUEQ7O0FBU0E7QUFDQUEsWUFBUVEsU0FBUixHQUFvQixTQUFTQyxhQUFULEdBQXlCO0FBQzNDWixhQUFPUCxZQUFZLGdCQUFnQkcsT0FBT3BFLE9BQXZCLEdBQWlDLGFBQTdDLEVBQTREb0UsTUFBNUQsRUFBb0UsY0FBcEUsRUFDTE8sT0FESyxDQUFQOztBQUdBO0FBQ0FBLGdCQUFVLElBQVY7QUFDRCxLQU5EOztBQVFBO0FBQ0E7QUFDQTtBQUNBLFFBQUk3RixNQUFNdEIsb0JBQU4sRUFBSixFQUFrQztBQUNoQyxVQUFJa0osVUFBVSxtQkFBQWpMLENBQVEsRUFBUixDQUFkOztBQUVBO0FBQ0EsVUFBSWtMLFlBQVksQ0FBQ3ZDLE9BQU93QyxlQUFQLElBQTBCNUMsZ0JBQWdCSSxPQUFPWSxHQUF2QixDQUEzQixLQUEyRFosT0FBT25FLGNBQWxFLEdBQ1p5RyxRQUFRRyxJQUFSLENBQWF6QyxPQUFPbkUsY0FBcEIsQ0FEWSxHQUVaNkcsU0FGSjs7QUFJQSxVQUFJSCxTQUFKLEVBQWU7QUFDYmpDLHVCQUFlTixPQUFPbEUsY0FBdEIsSUFBd0N5RyxTQUF4QztBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxRQUFJLHNCQUFzQmhDLE9BQTFCLEVBQW1DO0FBQ2pDN0YsWUFBTWpCLE9BQU4sQ0FBYzZHLGNBQWQsRUFBOEIsU0FBU3FDLGdCQUFULENBQTBCaEwsR0FBMUIsRUFBK0JvQyxHQUEvQixFQUFvQztBQUNoRSxZQUFJLE9BQU9zRyxXQUFQLEtBQXVCLFdBQXZCLElBQXNDdEcsSUFBSTZJLFdBQUosT0FBc0IsY0FBaEUsRUFBZ0Y7QUFDOUU7QUFDQSxpQkFBT3RDLGVBQWV2RyxHQUFmLENBQVA7QUFDRCxTQUhELE1BR087QUFDTDtBQUNBd0csa0JBQVFvQyxnQkFBUixDQUF5QjVJLEdBQXpCLEVBQThCcEMsR0FBOUI7QUFDRDtBQUNGLE9BUkQ7QUFTRDs7QUFFRDtBQUNBLFFBQUlxSSxPQUFPd0MsZUFBWCxFQUE0QjtBQUMxQmpDLGNBQVFpQyxlQUFSLEdBQTBCLElBQTFCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJeEMsT0FBT2dDLFlBQVgsRUFBeUI7QUFDdkIsVUFBSTtBQUNGekIsZ0JBQVF5QixZQUFSLEdBQXVCaEMsT0FBT2dDLFlBQTlCO0FBQ0QsT0FGRCxDQUVFLE9BQU9yRyxDQUFQLEVBQVU7QUFDVjtBQUNBO0FBQ0EsWUFBSXFFLE9BQU9nQyxZQUFQLEtBQXdCLE1BQTVCLEVBQW9DO0FBQ2xDLGdCQUFNckcsQ0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBLFFBQUksT0FBT3FFLE9BQU82QyxrQkFBZCxLQUFxQyxVQUF6QyxFQUFxRDtBQUNuRHRDLGNBQVF1QyxnQkFBUixDQUF5QixVQUF6QixFQUFxQzlDLE9BQU82QyxrQkFBNUM7QUFDRDs7QUFFRDtBQUNBLFFBQUksT0FBTzdDLE9BQU8rQyxnQkFBZCxLQUFtQyxVQUFuQyxJQUFpRHhDLFFBQVF5QyxNQUE3RCxFQUFxRTtBQUNuRXpDLGNBQVF5QyxNQUFSLENBQWVGLGdCQUFmLENBQWdDLFVBQWhDLEVBQTRDOUMsT0FBTytDLGdCQUFuRDtBQUNEOztBQUVELFFBQUkvQyxPQUFPaUQsV0FBWCxFQUF3QjtBQUN0QjtBQUNBakQsYUFBT2lELFdBQVAsQ0FBbUJDLE9BQW5CLENBQTJCQyxJQUEzQixDQUFnQyxTQUFTQyxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUMxRCxZQUFJLENBQUM5QyxPQUFMLEVBQWM7QUFDWjtBQUNEOztBQUVEQSxnQkFBUStDLEtBQVI7QUFDQWxELGVBQU9pRCxNQUFQO0FBQ0E7QUFDQTlDLGtCQUFVLElBQVY7QUFDRCxPQVREO0FBVUQ7O0FBRUQsUUFBSUYsZ0JBQWdCcUMsU0FBcEIsRUFBK0I7QUFDN0JyQyxvQkFBYyxJQUFkO0FBQ0Q7O0FBRUQ7QUFDQUUsWUFBUWdELElBQVIsQ0FBYWxELFdBQWI7QUFDRCxHQXZLTSxDQUFQO0FBd0tELENBektELEM7Ozs7Ozs7O0FDVkE7O0FBRUEsSUFBSW1ELGVBQWUsbUJBQUFuTSxDQUFRLEVBQVIsQ0FBbkI7O0FBRUE7Ozs7Ozs7Ozs7QUFVQW1ELE9BQU9DLE9BQVAsR0FBaUIsU0FBU29GLFdBQVQsQ0FBcUI0RCxPQUFyQixFQUE4QnpELE1BQTlCLEVBQXNDMEQsSUFBdEMsRUFBNENuRCxPQUE1QyxFQUFxRDJCLFFBQXJELEVBQStEO0FBQzlFLE1BQUl5QixRQUFRLElBQUk5RyxLQUFKLENBQVU0RyxPQUFWLENBQVo7QUFDQSxTQUFPRCxhQUFhRyxLQUFiLEVBQW9CM0QsTUFBcEIsRUFBNEIwRCxJQUE1QixFQUFrQ25ELE9BQWxDLEVBQTJDMkIsUUFBM0MsQ0FBUDtBQUNELENBSEQsQzs7Ozs7OztBQ2RBOztBQUVBMUgsT0FBT0MsT0FBUCxHQUFpQixTQUFTbUosUUFBVCxDQUFrQjdJLEtBQWxCLEVBQXlCO0FBQ3hDLFNBQU8sQ0FBQyxFQUFFQSxTQUFTQSxNQUFNOEksVUFBakIsQ0FBUjtBQUNELENBRkQsQzs7Ozs7OztBQ0ZBOztBQUVBOzs7Ozs7O0FBTUEsU0FBU0MsTUFBVCxDQUFnQkwsT0FBaEIsRUFBeUI7QUFDdkIsT0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0Q7O0FBRURLLE9BQU9yTSxTQUFQLENBQWlCRixRQUFqQixHQUE0QixTQUFTQSxRQUFULEdBQW9CO0FBQzlDLFNBQU8sWUFBWSxLQUFLa00sT0FBTCxHQUFlLE9BQU8sS0FBS0EsT0FBM0IsR0FBcUMsRUFBakQsQ0FBUDtBQUNELENBRkQ7O0FBSUFLLE9BQU9yTSxTQUFQLENBQWlCb00sVUFBakIsR0FBOEIsSUFBOUI7O0FBRUFySixPQUFPQyxPQUFQLEdBQWlCcUosTUFBakIsQzs7Ozs7O0FDbEJBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQyxVQUFVLFNBQVZBLE9BQVUsR0FBVztBQUMxQixLQUFJLENBQUM5RCxPQUFELElBQVksQ0FBQ3pJLE9BQU93TSxNQUF4QixFQUFnQztBQUMvQixRQUFNLElBQUluSCxLQUFKLENBQVUsa0ZBQVYsQ0FBTjtBQUNBO0FBQ0QsS0FBSSxDQUFDLG1DQUFMLEVBQVk7QUFDWCxRQUFNLElBQUlBLEtBQUosQ0FBVSw2RUFBVixDQUFOO0FBQ0E7QUFDRCxLQUFJLENBQUMsNERBQUQsSUFBc0IsQ0FBQyx1REFBM0IsRUFBeUM7QUFDeEMsUUFBTSxJQUFJQSxLQUFKLENBQVUscUZBQVYsQ0FBTjtBQUNBO0FBQ0QsQ0FWRDtBQVdBa0g7O0FBRUEsSUFBTUUseUJBQXlCLFNBQXpCQSxzQkFBeUIsQ0FBU0MsS0FBVCxFQUFnQjs7QUFFOUMsUUFBT0MsWUFBWUQsTUFBTUUsU0FBbEIsRUFDTmpCLElBRE0sQ0FDRCxVQUFTakIsUUFBVCxFQUFtQjtBQUN4QixTQUFPLHVFQUFpQ0EsU0FBUzVHLElBQTFDLENBQVA7QUFDQSxFQUhNLENBQVA7QUFJQSxDQU5EO0FBT0EsSUFBTStJLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBU0gsS0FBVCxFQUFnQjs7QUFFckMsS0FBSUksVUFBSjs7QUFFQSxLQUFJSixNQUFNSyxRQUFWLEVBQW9CO0FBQ25CRCxlQUFhLHFFQUErQkosTUFBTUssUUFBckMsQ0FBYjtBQUNBLFNBQU90RSxRQUFRRSxPQUFSLENBQWdCbUUsVUFBaEIsQ0FBUDtBQUNBOztBQUVELFFBQU9FLGdCQUFnQk4sS0FBaEIsRUFDTmYsSUFETSxDQUNELFVBQVNqQixRQUFULEVBQW1CO0FBQ3hCLFNBQU9BLFNBQVM1RyxJQUFULENBQWNtSiwwQkFBckI7QUFDQSxFQUhNLENBQVA7QUFJQSxDQWJEO0FBY0EsSUFBTUMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU1IsS0FBVCxFQUFnQjs7QUFFeEMsS0FBRyxDQUFDQSxNQUFNUyxVQUFWLEVBQXNCO0FBQ3JCVCxRQUFNUyxVQUFOLEdBQW1CLEVBQW5CO0FBQ0E7O0FBRUQsUUFBT04sY0FBY0gsS0FBZCxFQUNOZixJQURNLENBQ0QsVUFBU3lCLElBQVQsRUFBZTtBQUNwQlYsUUFBTVcsSUFBTixHQUFhck4sT0FBT3dNLE1BQVAsQ0FBYztBQUMxQixpQkFBYyxFQUFDLFFBQVFZLElBQVQ7QUFEWSxHQUFkLEVBRVZWLE1BQU1ZLFlBRkksQ0FBYjs7QUFJQSxTQUFPQyxlQUFlYixLQUFmLENBQVA7QUFDQSxFQVBNLEVBT0pmLElBUEksQ0FPQyxVQUFTNkIsT0FBVCxFQUFrQjs7QUFFekJkLFFBQU1TLFVBQU4sQ0FBaUIsaUJBQWpCLElBQXNDSyxRQUFRMUosSUFBUixDQUFhMkosZUFBbkQ7QUFDQWYsUUFBTVMsVUFBTixDQUFpQk8sTUFBakIsR0FBMEIsNkRBQTFCO0FBQ0FoQixRQUFNUyxVQUFOLENBQWlCLGNBQWpCLElBQW1DLDZEQUFuQzs7QUFFQVEsRUFBQSx1RUFBaUNqQixLQUFqQzs7QUFFQSxTQUFPLG1DQUFBa0IsQ0FBTTtBQUNaeEUsUUFBS3NELE1BQU1tQixXQURDO0FBRVpqSixXQUFRLE1BRkk7QUFHWmQsU0FBTUMsS0FBS0MsU0FBTCxDQUFlMEksTUFBTVcsSUFBckIsQ0FITTtBQUlaL0osWUFBU29KLE1BQU1TO0FBSkgsR0FBTixDQUFQO0FBTUEsRUFyQk0sQ0FBUDtBQXNCQSxDQTVCRDtBQTZCQSxJQUFNVyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQVNwQixLQUFULEVBQWdCOztBQUVyQyxLQUFHLENBQUNBLE1BQU1TLFVBQVYsRUFBc0I7QUFDckJULFFBQU1TLFVBQU4sR0FBbUIsRUFBbkI7QUFDQTs7QUFFRCxRQUFPSSxlQUFlYixLQUFmLEVBQ05mLElBRE0sQ0FDRCxVQUFTNkIsT0FBVCxFQUFrQjs7QUFFdkJkLFFBQU1TLFVBQU4sQ0FBaUIsaUJBQWpCLElBQXNDSyxRQUFRMUosSUFBUixDQUFhMkosZUFBbkQ7QUFDQWYsUUFBTVMsVUFBTixDQUFpQk8sTUFBakIsR0FBMEIsNkRBQTFCO0FBQ0FoQixRQUFNUyxVQUFOLENBQWlCLGNBQWpCLElBQW1DLDZEQUFuQzs7QUFFQVEsRUFBQSx1RUFBaUNqQixLQUFqQzs7QUFFQSxNQUFJQSxNQUFNcUIsV0FBVixFQUF1QjtBQUN0QnJCLFNBQU1tQixXQUFOLElBQXFCbkIsTUFBTXFCLFdBQTNCO0FBQ0E7O0FBRUQsU0FBTyxtQ0FBQUgsQ0FBTTtBQUNaeEUsUUFBS3NELE1BQU1tQixXQURDO0FBRVpqSixXQUFRLE1BRkk7QUFHWnRCLFlBQVNvSixNQUFNUztBQUhILEdBQU4sQ0FBUDtBQUtBLEVBbEJNLENBQVA7QUFtQkEsQ0F6QkQ7O0FBMkJBOzs7Ozs7OztBQVFPLFNBQVNJLGNBQVQsQ0FBd0JiLEtBQXhCLEVBQStCOztBQUVyQ0EsT0FBTXNCLFFBQU4sR0FBaUIsa0JBQWpCO0FBQ0FMLENBQUEsaUVBQTJCakIsS0FBM0I7O0FBRUEsUUFBTyxtQ0FBQWtCLENBQU07QUFDWmhKLFVBQVEsTUFESTtBQUVadEIsV0FBUyxFQUFFLFVBQVUsNkRBQVosRUFGRztBQUdaOEYsT0FBS3NELE1BQU11QjtBQUhDLEVBQU4sRUFJSnRDLElBSkksQ0FJQyxVQUFDakIsUUFBRCxFQUFjO0FBQ3JCZ0MsUUFBTXNCLFFBQU4sR0FBaUIsSUFBakI7QUFDQXRCLFFBQU11QixhQUFOLEdBQXNCLElBQXRCO0FBQ0EsU0FBT3ZELFFBQVA7QUFDQSxFQVJNLENBQVA7QUFTQTtBQUNEOzs7OztBQUtPLFNBQVNpQyxXQUFULENBQXFCdkQsR0FBckIsRUFBMEI7O0FBRWhDLFFBQU8sbUNBQUF3RSxDQUFNO0FBQ1poSixVQUFRLEtBREk7QUFFWnRCLFdBQVMsRUFBQyxVQUFVLDZEQUFYLEVBRkc7QUFHWjhGLE9BQUtBO0FBSE8sRUFBTixDQUFQO0FBS0E7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FBZU8sU0FBUzhFLHFCQUFULENBQStCeEIsS0FBL0IsRUFBc0M7O0FBRTVDLEtBQUcsQ0FBQ0EsTUFBTXlCLFFBQVAsSUFBbUIsQ0FBQ3pCLE1BQU0wQixTQUE3QixFQUF3QztBQUN2QyxTQUFPM0YsUUFBUUcsTUFBUixDQUFlLDBEQUFmLENBQVA7QUFDQTs7QUFFRCtFLENBQUEsa0VBQTRCakIsS0FBNUI7O0FBRUEsUUFBT0MsWUFBWUQsTUFBTTJCLE9BQWxCLEVBQ04xQyxJQURNLENBQ0QsVUFBU2pCLFFBQVQsRUFBbUI7QUFDeEIsTUFBSTRELGlCQUFpQjVCLE1BQU02QixVQUFOLElBQW9CLEVBQXpDO0FBQUEsTUFDQ2hFLGVBQWVHLFNBQVM1RyxJQUR6Qjs7QUFHQTRJLFFBQU02QixVQUFOLEdBQW1CRCxlQUFlcEksTUFBZixDQUFzQnFFLGFBQWFoSCxLQUFuQyxDQUFuQjs7QUFFQSxNQUFJZ0gsYUFBYSxnQkFBYixDQUFKLEVBQW9DO0FBQ25DbUMsU0FBTTJCLE9BQU4sR0FBZ0I5RCxhQUFhLGdCQUFiLENBQWhCO0FBQ0EsVUFBTzJELHNCQUFzQnhCLEtBQXRCLENBQVA7QUFDQTtBQUNELFNBQU9BLE1BQU02QixVQUFiO0FBQ0EsRUFaTSxDQUFQO0FBYUE7QUFDRCxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBUzlCLEtBQVQsRUFBZ0IrQixXQUFoQixFQUE2Qjs7QUFFakQsS0FBSUMsWUFBWSw4REFBaEI7QUFBQSxLQUNDQyxTQUREO0FBQUEsS0FFQ0MsV0FGRDtBQUFBLEtBR0NDLGdCQUFnQixFQUhqQjs7QUFLQTtBQUNBSixhQUFZeE0sT0FBWixDQUFvQixVQUFTb0wsSUFBVCxFQUFlO0FBQ2xDd0IsZ0JBQWN0SSxJQUFkLENBQW1CLGFBQWFtSSxTQUFoQztBQUNBRyxnQkFBY3RJLElBQWQsQ0FBbUIsZ0NBQW5CO0FBQ0FzSSxnQkFBY3RJLElBQWQsQ0FBbUIsbUNBQW5CO0FBQ0FzSSxnQkFBY3RJLElBQWQsQ0FBbUIsRUFBbkI7QUFDQXNJLGdCQUFjdEksSUFBZCxDQUFtQixTQUFTOEcsSUFBVCxHQUFnQixXQUFuQztBQUNBd0IsZ0JBQWN0SSxJQUFkLGNBQThCLDZEQUE5QjtBQUNBc0ksZ0JBQWN0SSxJQUFkLENBQW1CLEVBQW5CO0FBQ0EsRUFSRDs7QUFVQXNJLGVBQWN0SSxJQUFkLENBQW1CLGFBQWFtSSxTQUFiLEdBQXlCLElBQTVDOztBQUVBQyxhQUFZRSxjQUFjQyxJQUFkLENBQW1CLE1BQW5CLENBQVo7O0FBRUEsUUFBT3ZCLGVBQWViLEtBQWYsRUFDTmYsSUFETSxDQUNELFVBQUNqQixRQUFELEVBQWM7O0FBRW5CZ0MsUUFBTXNCLFFBQU4sR0FBaUIsYUFBakI7QUFDQUwsRUFBQSxpRUFBMkJqQixLQUEzQjs7QUFFQWtDLGdCQUFjO0FBQ2Qsc0JBQW1CbEUsU0FBUzVHLElBQVQsQ0FBYzJKLGVBRG5CO0FBRWQsbUJBQWdCLHNDQUFzQ2lCLFNBQXRDLEdBQWtEO0FBRnBELEdBQWQ7O0FBS0EsU0FBTyxtQ0FBQWQsQ0FBTTtBQUNaeEUsUUFBS3NELE1BQU11QixhQURDO0FBRVpySixXQUFRLE1BRkk7QUFHWmQsU0FBTTZLLFNBSE07QUFJWnJMLFlBQVNzTDtBQUpHLEdBQU4sRUFLSmpELElBTEksQ0FLQyxVQUFTakIsUUFBVCxFQUFtQjtBQUMxQixPQUFJcUUsY0FBYyxFQUFsQjtBQUFBLE9BQ0NDLGtCQUFrQnRFLFNBQVM1RyxJQUFULENBQWNtTCxLQUFkLENBQW9CLElBQXBCLENBRG5COztBQUdBLFFBQUssSUFBSUMsY0FBYyxDQUF2QixFQUEwQkEsY0FBY0YsZ0JBQWdCMU0sTUFBeEQsRUFBZ0U0TSxhQUFoRSxFQUErRTtBQUM5RSxRQUFJRixnQkFBZ0JFLFdBQWhCLEVBQTZCQyxNQUE3QixDQUFvQyxDQUFwQyxNQUEyQyxHQUEvQyxFQUFvRDtBQUNwRCxTQUFJO0FBQ0g7QUFDQSxVQUFJQyxlQUFlckwsS0FBS0csS0FBTCxDQUFXOEssZ0JBQWdCRSxXQUFoQixDQUFYLENBQW5COztBQUVBSCxrQkFBWXhJLElBQVosQ0FBaUI2SSxZQUFqQjtBQUVBLE1BTkQsQ0FNRSxPQUFPakwsQ0FBUCxFQUFVO0FBQ1g7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsVUFBTzRLLFdBQVA7QUFFQSxHQXpCTSxDQUFQO0FBMEJBLEVBckNNLENBQVA7QUF1Q0EsQ0E3REQ7QUE4REE7Ozs7Ozs7OztBQVNPLFNBQVNNLG1CQUFULENBQTZCM0MsS0FBN0IsRUFBb0M7QUFDMUMsS0FBSTRDLGNBQWMsRUFBbEI7QUFBQSxLQUNDQyxlQUFlLENBRGhCOztBQUdBN0MsT0FBTThDLFVBQU4sR0FBbUI5QyxNQUFNK0MsT0FBTixDQUFjbk4sTUFBakM7QUFDQW9LLE9BQU1nRCxZQUFOLEdBQXFCLEVBQXJCO0FBQ0FoRCxPQUFNNkIsVUFBTixHQUFtQixFQUFuQjtBQUNBN0IsT0FBTWlELGVBQU4sR0FBd0IsQ0FBeEI7O0FBRUEsUUFBT2pELE1BQU1pRCxlQUFOLEdBQXdCakQsTUFBTThDLFVBQXJDLEVBQWlEOUMsTUFBTWlELGVBQU4sRUFBakQsRUFBMEU7QUFDekUsTUFBSXZHLE1BQU1zRCxNQUFNK0MsT0FBTixDQUFjL0MsTUFBTWlELGVBQXBCLENBQVY7QUFDQUwsY0FBWS9JLElBQVosQ0FBaUI2QyxHQUFqQjtBQUNBbUc7O0FBRUEsTUFBSUEsaUJBQWlCN0MsTUFBTWdELFlBQTNCLEVBQXlDO0FBQ3hDaEQsU0FBTWlELGVBQU47QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsUUFBT25CLGFBQWEsRUFBQ29CLFFBQVFsRCxNQUFNa0QsTUFBZixFQUF1QnhHLEtBQUtzRCxNQUFNdEQsR0FBbEMsRUFBYixFQUFxRGtHLFdBQXJELEVBQ04zRCxJQURNLENBQ0QsVUFBU2pCLFFBQVQsRUFBbUI7QUFDeEJnQyxRQUFNNkIsVUFBTixHQUFtQjdCLE1BQU02QixVQUFOLENBQWlCckksTUFBakIsQ0FBd0J3RSxRQUF4QixDQUFuQjs7QUFFQSxNQUFJZ0MsTUFBTWlELGVBQU4sR0FBd0JqRCxNQUFNOEMsVUFBbEMsRUFBOEM7QUFDN0MsVUFBT0gsb0JBQW9CM0MsS0FBcEIsQ0FBUDtBQUNBOztBQUVELFNBQU9BLE1BQU02QixVQUFiO0FBQ0EsRUFUTSxDQUFQO0FBVUE7QUFDRDs7Ozs7Ozs7QUFRTyxTQUFTc0Isb0JBQVQsQ0FBOEJuRCxLQUE5QixFQUFxQztBQUMzQyxLQUFJb0QsY0FBYyxJQUFsQjtBQUNBLEtBQUksQ0FBQ3BELE1BQU1xRCxhQUFQLElBQXdCckQsTUFBTXFELGFBQU4sQ0FBb0J6TixNQUFwQixLQUErQixDQUEzRCxFQUE4RDtBQUM3RCxRQUFNLElBQUkrQyxLQUFKLENBQVUseUVBQVYsQ0FBTjtBQUNBOztBQUVEcUgsT0FBTWtELE1BQU4sR0FBZSwrREFBQUksRUFBZjtBQUNBRixlQUFjLEVBQWQ7O0FBRUEsS0FBSUcsYUFBYXZELE1BQU1rRCxNQUFOLEdBQWVsRCxNQUFNdEQsR0FBdEM7QUFDQXNELE9BQU1xRCxhQUFOLENBQW9COU4sT0FBcEIsQ0FBNEIsVUFBQ2lPLEtBQUQsRUFBVztBQUN0QyxNQUFJQyxVQUFVLG9FQUFBQyxDQUFrQkYsS0FBbEIsQ0FBZDtBQUNBSixjQUFZdkosSUFBWixDQUFvQjBKLFVBQXBCLCtEQUF1RkUsT0FBdkY7QUFDQSxFQUhEOztBQVYyQyxLQWV0Q1AsTUFmc0MsR0FldkJsRCxLQWZ1QixDQWV0Q2tELE1BZnNDO0FBQUEsS0FlOUJ4RyxHQWY4QixHQWV2QnNELEtBZnVCLENBZTlCdEQsR0FmOEI7OztBQWlCM0MsUUFBT2lHLG9CQUFvQjtBQUMxQk8sVUFBUUEsTUFEa0I7QUFFMUJ4RyxPQUFLQSxHQUZxQjtBQUcxQnFHLFdBQVNLO0FBSGlCLEVBQXBCLENBQVA7QUFLQTtBQUNEOzs7Ozs7Ozs7QUFTTyxTQUFTOUMsZUFBVCxDQUF5Qk4sS0FBekIsRUFBZ0M7O0FBRXRDaUIsQ0FBQSxtRUFBNkJqQixLQUE3QjtBQUNBLFFBQU9DLFlBQVlELE1BQU0yQixPQUFsQixDQUFQO0FBQ0E7QUFDRDs7Ozs7Ozs7OztBQVVPLFNBQVNnQyxnQkFBVCxDQUEwQjNELEtBQTFCLEVBQWlDOztBQUV2QyxLQUFJNkIsYUFBYTdCLE1BQU00QixjQUFOLElBQXdCLEVBQXpDO0FBQUEsS0FDQ2dDLGtCQUFrQjtBQUNqQkMsWUFBVSxDQURPO0FBRWpCQyxZQUFVLEdBRk87QUFHakJDLGtCQUFnQixLQUhDO0FBSWpCQywyQkFBc0JoRSxNQUFNaUUsVUFBTixDQUFpQjdCLElBQWpCLENBQXNCLEdBQXRCLENBQXRCO0FBSmlCLEVBRG5COztBQVFBd0IsaUJBQWdCQyxRQUFoQixHQUEyQjdELE1BQU02RCxRQUFOLEdBQWlCN0QsTUFBTTZELFFBQXZCLEdBQWtDLENBQTdEO0FBQ0FELGlCQUFnQk0sUUFBaEIsR0FBMkJsRSxNQUFNa0UsUUFBTixVQUFxQmxFLE1BQU1rRSxRQUEzQixVQUF5Qyx3Q0FBcEU7O0FBRUFsRSxPQUFNc0IsUUFBTixHQUFpQixtQkFBakI7QUFDQXNDLGlCQUFnQk8sU0FBaEIsVUFBZ0NuRSxNQUFNb0UsS0FBdEM7O0FBRUFuRCxDQUFBLGlFQUEyQmpCLEtBQTNCOztBQUVBLFFBQU8sbUNBQUFrQixDQUFNO0FBQ1p4RSxPQUFLc0QsTUFBTXVCLGFBREM7QUFFWnJKLFVBQVEsS0FGSTtBQUdadEIsV0FBUyxFQUFDLFVBQVUsNkRBQVgsRUFIRztBQUlaeUcsVUFBUXVHO0FBSkksRUFBTixFQUtKM0UsSUFMSSxDQUtDLFVBQVNvRixPQUFULEVBQWtCOztBQUV6QixNQUFJQyxrQkFBa0JELFFBQVFqTixJQUFSLENBQWFtTixrQkFBYixDQUFnQ0MsZUFBdEQ7O0FBRUEzQyxlQUFhQSxXQUFXckksTUFBWCxDQUFrQjhLLGdCQUFnQkcsS0FBaEIsQ0FBc0JDLElBQXhDLENBQWI7QUFDQTFFLFFBQU00QixjQUFOLEdBQXVCQyxVQUF2Qjs7QUFFQSxNQUFJeUMsZ0JBQWdCSyxTQUFoQixHQUE2QmYsZ0JBQWdCQyxRQUFoQixHQUEyQlMsZ0JBQWdCTSxRQUE1RSxFQUF1RjtBQUN0RjVFLFNBQU02RCxRQUFOLEdBQWlCRCxnQkFBZ0JDLFFBQWhCLEdBQTJCUyxnQkFBZ0JNLFFBQTVEO0FBQ0EsVUFBT2pCLGlCQUFpQjNELEtBQWpCLENBQVA7QUFDQSxHQUhELE1BR087QUFDTixVQUFPQSxNQUFNNEIsY0FBYjtBQUNBO0FBQ0QsRUFsQk0sQ0FBUDtBQW1CQTtBQUNEOzs7Ozs7OztBQVFPLFNBQVNpRCxjQUFULENBQXdCN0UsS0FBeEIsRUFBK0I7O0FBRXJDLFFBQU9hLGVBQWViLEtBQWYsRUFDTmYsSUFETSxDQUNELFVBQUNqQixRQUFELEVBQWM7O0FBRW5CZ0MsUUFBTXNCLFFBQU4sR0FBaUIsVUFBakI7QUFDQUwsRUFBQSxpRUFBMkJqQixLQUEzQjtBQUNBQSxRQUFNdUIsYUFBTix1QkFBdUMsb0VBQUFtQyxDQUFrQjFELE1BQU13RCxLQUF4QixDQUF2Qzs7QUFFQSxTQUFPLG1DQUFBdEMsQ0FBTTtBQUNaeEUsUUFBS3NELE1BQU11QixhQURDO0FBRVpySixXQUFRLE1BRkk7QUFHWjRNLGdCQUFhLDZEQUhEO0FBSVpsTyxZQUFTO0FBQ1IsY0FBVSw2REFERjtBQUVSLHVCQUFtQm9ILFNBQVM1RyxJQUFULENBQWMySjtBQUZ6QjtBQUpHLEdBQU4sQ0FBUDtBQVNBLEVBaEJNLENBQVA7QUFrQkE7QUFDRDs7Ozs7Ozs7QUFRTyxTQUFTZ0UsMEJBQVQsQ0FBb0MvRSxLQUFwQyxFQUEyQzs7QUFFakRBLE9BQU1zQixRQUFOLEdBQWlCLG9CQUFqQjtBQUNBTCxDQUFBLGlFQUEyQmpCLEtBQTNCOztBQUVBQSxPQUFNdUIsYUFBTixpQ0FBaUQsb0VBQUFtQyxDQUFrQjFELE1BQU13RCxLQUF4QixDQUFqRDs7QUFFQSxRQUFPdkQsWUFBWUQsTUFBTXVCLGFBQWxCLENBQVA7QUFDQTtBQUNEOzs7Ozs7Ozs7O0FBVU8sU0FBU3lELGtCQUFULENBQTRCaEYsS0FBNUIsRUFBbUM7O0FBRXpDLFFBQU9hLGVBQWViLEtBQWYsRUFDTmYsSUFETSxDQUNELFVBQUNqQixRQUFELEVBQWM7O0FBRW5CLE1BQUlvRyxRQUFRLEVBQUUsU0FDYixFQUFDLGNBQ0QsRUFBRSxRQUFRLGNBQVYsRUFEQTtBQUVDLGVBQVdwRSxNQUFNaUY7QUFGbEI7QUFEVyxHQUFaO0FBQUEsTUFNQUMsYUFBYTtBQUNaLGFBQVUsNkRBREU7QUFFWixtQkFBZ0IsNkRBRko7QUFHWixzQkFBbUJsSCxTQUFTNUcsSUFBVCxDQUFjMko7QUFIckIsR0FOYjs7QUFZQUUsRUFBQSxtRUFBNkJqQixLQUE3QjtBQUNBQSxRQUFNMkIsT0FBTixJQUFpQixXQUFqQjs7QUFFQSxTQUFPLG1DQUFBVCxDQUFNO0FBQ1p4RSxRQUFLc0QsTUFBTTJCLE9BREM7QUFFWnpKLFdBQVEsTUFGSTtBQUdaZCxTQUFNQyxLQUFLQyxTQUFMLENBQWU4TSxLQUFmLENBSE07QUFJWnhOLFlBQVNzTztBQUpHLEdBQU4sQ0FBUDtBQU1BLEVBeEJNLENBQVA7QUEwQkE7QUFDRDs7Ozs7Ozs7QUFRTyxTQUFTQywwQkFBVCxDQUFvQ25GLEtBQXBDLEVBQTJDOztBQUVqRCxLQUFJb0YsZUFBZSxvRUFBQTFCLENBQWtCMUQsTUFBTXdELEtBQXhCLENBQW5COztBQUVBeEQsT0FBTXNCLFFBQU4sR0FBaUIsVUFBakI7QUFDQUwsQ0FBQSxpRUFBMkJqQixLQUEzQjs7QUFFQUEsT0FBTUUsU0FBTixHQUFxQkYsTUFBTXVCLGFBQTNCLG9EQUFzRjZELFlBQXRGO0FBQ0EsUUFBT3JGLHVCQUF1QkMsS0FBdkIsQ0FBUDtBQUNBO0FBQ0Q7Ozs7Ozs7Ozs7QUFVTyxTQUFTcUYsMEJBQVQsQ0FBb0NyRixLQUFwQyxFQUEyQzs7QUFFakQsS0FBSW9GLGVBQWUsb0VBQUExQixDQUFrQjFELE1BQU13RCxLQUF4QixDQUFuQjs7QUFFQXZDLENBQUEsbUVBQTZCakIsS0FBN0I7O0FBRUFBLE9BQU1FLFNBQU4sR0FBcUJGLE1BQU0yQixPQUEzQixvREFBZ0Z5RCxZQUFoRjtBQUNBLFFBQU9yRix1QkFBdUJDLEtBQXZCLENBQVA7QUFDQTtBQUNEOzs7Ozs7OztBQVFPLFNBQVNzRix3QkFBVCxDQUFrQ3RGLEtBQWxDLEVBQXlDOztBQUUvQ0EsT0FBTXNCLFFBQU4sR0FBaUIsV0FBakI7QUFDQUwsQ0FBQSxpRUFBMkJqQixLQUEzQjs7QUFFQUEsT0FBTXVCLGFBQU4sc0JBQXVDdkIsTUFBTXVGLE1BQTdDOztBQUVBLFFBQU90RixZQUFZRCxNQUFNdUIsYUFBbEIsRUFDTnRDLElBRE0sQ0FDRCxVQUFTdUcsTUFBVCxFQUFnQjs7QUFFckIsTUFBSUMsYUFBYSxFQUFqQjs7QUFFQUQsU0FBT3BPLElBQVAsQ0FBWVAsS0FBWixDQUFrQnRCLE9BQWxCLENBQTBCLFVBQVNvTCxJQUFULEVBQWU7QUFDeEM4RSxjQUFXNUwsSUFBWCxDQUFnQjhHLEtBQUsrRSxLQUFyQjtBQUNBLEdBRkQ7O0FBSUEsU0FBT0QsVUFBUDtBQUVBLEVBWE0sQ0FBUDtBQVlBO0FBQ0Q7Ozs7Ozs7Ozs7O0FBV08sU0FBU0UsY0FBVCxDQUF3QjNGLEtBQXhCLEVBQStCO0FBQ3JDLFFBQU9RLGlCQUFpQlIsS0FBakIsQ0FBUDtBQUNBO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTNEYsY0FBVCxDQUF3QjVGLEtBQXhCLEVBQStCOztBQUVyQ0EsT0FBTVMsVUFBTixHQUFtQjtBQUNsQixtQkFBaUIsT0FEQztBQUVsQixjQUFZVCxNQUFNNkYsSUFBTixJQUFjO0FBRlIsRUFBbkI7QUFJQSxRQUFPckYsaUJBQWlCUixLQUFqQixDQUFQO0FBQ0E7QUFDRDs7Ozs7Ozs7Ozs7O0FBWU8sU0FBUzhGLGNBQVQsQ0FBd0I5RixLQUF4QixFQUErQjtBQUNyQztBQUNBQSxPQUFNUyxVQUFOLEdBQW1CO0FBQ2xCLG1CQUFrQixRQURBO0FBRWxCLGNBQVlULE1BQU02RixJQUFOLElBQWM7QUFGUixFQUFuQjtBQUlBLFFBQU96RSxjQUFjcEIsS0FBZCxDQUFQO0FBQ0E7QUFDRDs7Ozs7Ozs7OztBQVVPLFNBQVMrRixlQUFULENBQXlCL0YsS0FBekIsRUFBZ0M7O0FBRXRDQSxPQUFNcUIsV0FBTixHQUFvQixVQUFwQjtBQUNBLFFBQU9ELGNBQWNwQixLQUFkLENBQVA7QUFDQTtBQUNEOzs7Ozs7Ozs7QUFTTyxTQUFTZ0csZUFBVCxHQUFxQztBQUFBLEtBQVpoRyxLQUFZLHVFQUFKLEVBQUk7OztBQUUzQyxLQUFJaUcsUUFBUSxJQUFaOztBQUVBLEtBQUdqRyxNQUFNd0QsS0FBVCxFQUFnQjtBQUNmeEQsUUFBTXNCLFFBQU4sR0FBaUIsb0NBQWpCO0FBQ0EyRSwwQ0FBcUMsb0VBQUF2QyxDQUFrQjFELE1BQU13RCxLQUF4QixDQUFyQztBQUNBLEVBSEQsTUFHTztBQUNOO0FBQ0F4RCxRQUFNc0IsUUFBTixHQUFpQixvREFBakI7QUFDQTJFLFVBQVEsR0FBUjtBQUNBOztBQUVEaEYsQ0FBQSxpRUFBMkJqQixLQUEzQjtBQUNBQSxPQUFNdUIsYUFBTixJQUEwQjBFLEtBQTFCOztBQUVBLFFBQU9oRyxZQUFZRCxNQUFNdUIsYUFBbEIsRUFDTnRDLElBRE0sQ0FDRCxVQUFTaUgsUUFBVCxFQUFrQjtBQUFFO0FBQ3pCLE1BQUlBLFNBQVM5TyxJQUFULENBQWMsWUFBZCxNQUFnQyxJQUFwQyxFQUEwQztBQUN6QyxVQUFPLEVBQVA7QUFDQSxHQUZELE1BRU07QUFDTCxVQUFPOE8sU0FBUzlPLElBQVQsQ0FBYytPLHFCQUFyQjtBQUNBO0FBQ0QsRUFQTSxDQUFQO0FBUUE7QUFDRDs7Ozs7Ozs7OztBQVVPLFNBQVNDLGNBQVQsQ0FBd0JwRyxLQUF4QixFQUErQjs7QUFFckMsS0FBRyxDQUFDQSxNQUFNcUcsT0FBVixFQUFtQjtBQUNsQnJHLFFBQU1xRyxPQUFOLEdBQWdCLEtBQWhCO0FBQ0E7QUFDRHBGLENBQUEsbUVBQTZCakIsS0FBN0I7QUFDQUEsT0FBTTJCLE9BQU4sbUNBQThDM0IsTUFBTXFHLE9BQXBELDhCQUFvRnJHLE1BQU1xRyxPQUExRjs7QUFFQSxRQUFPcEcsWUFBWUQsTUFBTTJCLE9BQWxCLENBQVA7QUFDQSxDOzs7Ozs7QUNwb0JEckwsT0FBT0MsT0FBUCxHQUFpQixtQkFBQXBELENBQVEsRUFBUixDQUFqQixDOzs7Ozs7O0FDQUE7O0FBRUEsSUFBSXFELFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlELE9BQU8sbUJBQUFDLENBQVEsQ0FBUixDQUFYO0FBQ0EsSUFBSW1ULFFBQVEsbUJBQUFuVCxDQUFRLEVBQVIsQ0FBWjtBQUNBLElBQUkrRCxXQUFXLG1CQUFBL0QsQ0FBUSxDQUFSLENBQWY7O0FBRUE7Ozs7OztBQU1BLFNBQVNvVCxjQUFULENBQXdCQyxhQUF4QixFQUF1QztBQUNyQyxNQUFJMUYsVUFBVSxJQUFJd0YsS0FBSixDQUFVRSxhQUFWLENBQWQ7QUFDQSxNQUFJQyxXQUFXdlQsS0FBS29ULE1BQU0vUyxTQUFOLENBQWdCOEksT0FBckIsRUFBOEJ5RSxPQUE5QixDQUFmOztBQUVBO0FBQ0F0SyxRQUFNTixNQUFOLENBQWF1USxRQUFiLEVBQXVCSCxNQUFNL1MsU0FBN0IsRUFBd0N1TixPQUF4Qzs7QUFFQTtBQUNBdEssUUFBTU4sTUFBTixDQUFhdVEsUUFBYixFQUF1QjNGLE9BQXZCOztBQUVBLFNBQU8yRixRQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxJQUFJdkYsUUFBUXFGLGVBQWVyUCxRQUFmLENBQVo7O0FBRUE7QUFDQWdLLE1BQU1vRixLQUFOLEdBQWNBLEtBQWQ7O0FBRUE7QUFDQXBGLE1BQU13RixNQUFOLEdBQWUsU0FBU0EsTUFBVCxDQUFnQkMsY0FBaEIsRUFBZ0M7QUFDN0MsU0FBT0osZUFBZS9QLE1BQU1ULEtBQU4sQ0FBWW1CLFFBQVosRUFBc0J5UCxjQUF0QixDQUFmLENBQVA7QUFDRCxDQUZEOztBQUlBO0FBQ0F6RixNQUFNdEIsTUFBTixHQUFlLG1CQUFBek0sQ0FBUSxDQUFSLENBQWY7QUFDQStOLE1BQU0wRixXQUFOLEdBQW9CLG1CQUFBelQsQ0FBUSxFQUFSLENBQXBCO0FBQ0ErTixNQUFNeEIsUUFBTixHQUFpQixtQkFBQXZNLENBQVEsQ0FBUixDQUFqQjs7QUFFQTtBQUNBK04sTUFBTTJGLEdBQU4sR0FBWSxTQUFTQSxHQUFULENBQWFDLFFBQWIsRUFBdUI7QUFDakMsU0FBTy9LLFFBQVE4SyxHQUFSLENBQVlDLFFBQVosQ0FBUDtBQUNELENBRkQ7QUFHQTVGLE1BQU02RixNQUFOLEdBQWUsbUJBQUE1VCxDQUFRLEVBQVIsQ0FBZjs7QUFFQW1ELE9BQU9DLE9BQVAsR0FBaUIySyxLQUFqQjs7QUFFQTtBQUNBNUssT0FBT0MsT0FBUCxDQUFleVEsT0FBZixHQUF5QjlGLEtBQXpCLEM7Ozs7OztBQ25EQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTVLLE9BQU9DLE9BQVAsR0FBaUIsVUFBVWYsR0FBVixFQUFlO0FBQzlCLFNBQU9BLE9BQU8sSUFBUCxLQUFnQnBDLFNBQVNvQyxHQUFULEtBQWlCeVIsYUFBYXpSLEdBQWIsQ0FBakIsSUFBc0MsQ0FBQyxDQUFDQSxJQUFJMFIsU0FBNUQsQ0FBUDtBQUNELENBRkQ7O0FBSUEsU0FBUzlULFFBQVQsQ0FBbUJvQyxHQUFuQixFQUF3QjtBQUN0QixTQUFPLENBQUMsQ0FBQ0EsSUFBSTJSLFdBQU4sSUFBcUIsT0FBTzNSLElBQUkyUixXQUFKLENBQWdCL1QsUUFBdkIsS0FBb0MsVUFBekQsSUFBdUVvQyxJQUFJMlIsV0FBSixDQUFnQi9ULFFBQWhCLENBQXlCb0MsR0FBekIsQ0FBOUU7QUFDRDs7QUFFRDtBQUNBLFNBQVN5UixZQUFULENBQXVCelIsR0FBdkIsRUFBNEI7QUFDMUIsU0FBTyxPQUFPQSxJQUFJNFIsV0FBWCxLQUEyQixVQUEzQixJQUF5QyxPQUFPNVIsSUFBSTZSLEtBQVgsS0FBcUIsVUFBOUQsSUFBNEVqVSxTQUFTb0MsSUFBSTZSLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFULENBQW5GO0FBQ0QsQzs7Ozs7OztBQ3BCRDs7QUFFQSxJQUFJblEsV0FBVyxtQkFBQS9ELENBQVEsQ0FBUixDQUFmO0FBQ0EsSUFBSXFELFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUltVSxxQkFBcUIsbUJBQUFuVSxDQUFRLEVBQVIsQ0FBekI7QUFDQSxJQUFJb1Usa0JBQWtCLG1CQUFBcFUsQ0FBUSxFQUFSLENBQXRCO0FBQ0EsSUFBSXFVLGdCQUFnQixtQkFBQXJVLENBQVEsRUFBUixDQUFwQjtBQUNBLElBQUlzVSxjQUFjLG1CQUFBdFUsQ0FBUSxFQUFSLENBQWxCOztBQUVBOzs7OztBQUtBLFNBQVNtVCxLQUFULENBQWVLLGNBQWYsRUFBK0I7QUFDN0IsT0FBS3pQLFFBQUwsR0FBZ0J5UCxjQUFoQjtBQUNBLE9BQUtlLFlBQUwsR0FBb0I7QUFDbEJyTCxhQUFTLElBQUlpTCxrQkFBSixFQURTO0FBRWxCdEosY0FBVSxJQUFJc0osa0JBQUo7QUFGUSxHQUFwQjtBQUlEOztBQUVEOzs7OztBQUtBaEIsTUFBTS9TLFNBQU4sQ0FBZ0I4SSxPQUFoQixHQUEwQixTQUFTQSxPQUFULENBQWlCUCxNQUFqQixFQUF5QjtBQUNqRDtBQUNBO0FBQ0EsTUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzlCQSxhQUFTdEYsTUFBTVQsS0FBTixDQUFZO0FBQ25CMkcsV0FBS3pHLFVBQVUsQ0FBVjtBQURjLEtBQVosRUFFTkEsVUFBVSxDQUFWLENBRk0sQ0FBVDtBQUdEOztBQUVENkYsV0FBU3RGLE1BQU1ULEtBQU4sQ0FBWW1CLFFBQVosRUFBc0IsS0FBS0EsUUFBM0IsRUFBcUMsRUFBRWdCLFFBQVEsS0FBVixFQUFyQyxFQUF3RDRELE1BQXhELENBQVQ7QUFDQUEsU0FBTzVELE1BQVAsR0FBZ0I0RCxPQUFPNUQsTUFBUCxDQUFjd0csV0FBZCxFQUFoQjs7QUFFQTtBQUNBLE1BQUk1QyxPQUFPNkwsT0FBUCxJQUFrQixDQUFDSCxjQUFjMUwsT0FBT1ksR0FBckIsQ0FBdkIsRUFBa0Q7QUFDaERaLFdBQU9ZLEdBQVAsR0FBYStLLFlBQVkzTCxPQUFPNkwsT0FBbkIsRUFBNEI3TCxPQUFPWSxHQUFuQyxDQUFiO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJa0wsUUFBUSxDQUFDTCxlQUFELEVBQWtCL0ksU0FBbEIsQ0FBWjtBQUNBLE1BQUlRLFVBQVVqRCxRQUFRRSxPQUFSLENBQWdCSCxNQUFoQixDQUFkOztBQUVBLE9BQUs0TCxZQUFMLENBQWtCckwsT0FBbEIsQ0FBMEI5RyxPQUExQixDQUFrQyxTQUFTc1MsMEJBQVQsQ0FBb0NDLFdBQXBDLEVBQWlEO0FBQ2pGRixVQUFNRyxPQUFOLENBQWNELFlBQVlFLFNBQTFCLEVBQXFDRixZQUFZRyxRQUFqRDtBQUNELEdBRkQ7O0FBSUEsT0FBS1AsWUFBTCxDQUFrQjFKLFFBQWxCLENBQTJCekksT0FBM0IsQ0FBbUMsU0FBUzJTLHdCQUFULENBQWtDSixXQUFsQyxFQUErQztBQUNoRkYsVUFBTS9OLElBQU4sQ0FBV2lPLFlBQVlFLFNBQXZCLEVBQWtDRixZQUFZRyxRQUE5QztBQUNELEdBRkQ7O0FBSUEsU0FBT0wsTUFBTWhTLE1BQWIsRUFBcUI7QUFDbkJvSixjQUFVQSxRQUFRQyxJQUFSLENBQWEySSxNQUFNTyxLQUFOLEVBQWIsRUFBNEJQLE1BQU1PLEtBQU4sRUFBNUIsQ0FBVjtBQUNEOztBQUVELFNBQU9uSixPQUFQO0FBQ0QsQ0FsQ0Q7O0FBb0NBO0FBQ0F4SSxNQUFNakIsT0FBTixDQUFjLENBQUMsUUFBRCxFQUFXLEtBQVgsRUFBa0IsTUFBbEIsRUFBMEIsU0FBMUIsQ0FBZCxFQUFvRCxTQUFTMEMsbUJBQVQsQ0FBNkJDLE1BQTdCLEVBQXFDO0FBQ3ZGO0FBQ0FvTyxRQUFNL1MsU0FBTixDQUFnQjJFLE1BQWhCLElBQTBCLFVBQVN3RSxHQUFULEVBQWNaLE1BQWQsRUFBc0I7QUFDOUMsV0FBTyxLQUFLTyxPQUFMLENBQWE3RixNQUFNVCxLQUFOLENBQVkrRixVQUFVLEVBQXRCLEVBQTBCO0FBQzVDNUQsY0FBUUEsTUFEb0M7QUFFNUN3RSxXQUFLQTtBQUZ1QyxLQUExQixDQUFiLENBQVA7QUFJRCxHQUxEO0FBTUQsQ0FSRDs7QUFVQWxHLE1BQU1qQixPQUFOLENBQWMsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixDQUFkLEVBQXdDLFNBQVM0QyxxQkFBVCxDQUErQkQsTUFBL0IsRUFBdUM7QUFDN0U7QUFDQW9PLFFBQU0vUyxTQUFOLENBQWdCMkUsTUFBaEIsSUFBMEIsVUFBU3dFLEdBQVQsRUFBY3RGLElBQWQsRUFBb0IwRSxNQUFwQixFQUE0QjtBQUNwRCxXQUFPLEtBQUtPLE9BQUwsQ0FBYTdGLE1BQU1ULEtBQU4sQ0FBWStGLFVBQVUsRUFBdEIsRUFBMEI7QUFDNUM1RCxjQUFRQSxNQURvQztBQUU1Q3dFLFdBQUtBLEdBRnVDO0FBRzVDdEYsWUFBTUE7QUFIc0MsS0FBMUIsQ0FBYixDQUFQO0FBS0QsR0FORDtBQU9ELENBVEQ7O0FBV0FkLE9BQU9DLE9BQVAsR0FBaUIrUCxLQUFqQixDOzs7Ozs7O0FDckZBOztBQUVBLElBQUk5UCxRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7O0FBRUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNFLG1CQUFULENBQTZCRyxPQUE3QixFQUFzQ3dSLGNBQXRDLEVBQXNEO0FBQ3JFNVIsUUFBTWpCLE9BQU4sQ0FBY3FCLE9BQWQsRUFBdUIsU0FBU3lSLGFBQVQsQ0FBdUJ4UixLQUF2QixFQUE4Qm9FLElBQTlCLEVBQW9DO0FBQ3pELFFBQUlBLFNBQVNtTixjQUFULElBQTJCbk4sS0FBS21DLFdBQUwsT0FBdUJnTCxlQUFlaEwsV0FBZixFQUF0RCxFQUFvRjtBQUNsRnhHLGNBQVF3UixjQUFSLElBQTBCdlIsS0FBMUI7QUFDQSxhQUFPRCxRQUFRcUUsSUFBUixDQUFQO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FQRCxDOzs7Ozs7O0FDSkE7O0FBRUEsSUFBSVUsY0FBYyxtQkFBQXhJLENBQVEsQ0FBUixDQUFsQjs7QUFFQTs7Ozs7OztBQU9BbUQsT0FBT0MsT0FBUCxHQUFpQixTQUFTZ0YsTUFBVCxDQUFnQlUsT0FBaEIsRUFBeUJDLE1BQXpCLEVBQWlDOEIsUUFBakMsRUFBMkM7QUFDMUQsTUFBSWxHLGlCQUFpQmtHLFNBQVNsQyxNQUFULENBQWdCaEUsY0FBckM7QUFDQTtBQUNBLE1BQUksQ0FBQ2tHLFNBQVNqRyxNQUFWLElBQW9CLENBQUNELGNBQXJCLElBQXVDQSxlQUFla0csU0FBU2pHLE1BQXhCLENBQTNDLEVBQTRFO0FBQzFFa0UsWUFBUStCLFFBQVI7QUFDRCxHQUZELE1BRU87QUFDTDlCLFdBQU9QLFlBQ0wscUNBQXFDcUMsU0FBU2pHLE1BRHpDLEVBRUxpRyxTQUFTbEMsTUFGSixFQUdMLElBSEssRUFJTGtDLFNBQVMzQixPQUpKLEVBS0wyQixRQUxLLENBQVA7QUFPRDtBQUNGLENBZEQsQzs7Ozs7OztBQ1hBOztBQUVBOzs7Ozs7Ozs7OztBQVVBMUgsT0FBT0MsT0FBUCxHQUFpQixTQUFTK0ksWUFBVCxDQUFzQkcsS0FBdEIsRUFBNkIzRCxNQUE3QixFQUFxQzBELElBQXJDLEVBQTJDbkQsT0FBM0MsRUFBb0QyQixRQUFwRCxFQUE4RDtBQUM3RXlCLFFBQU0zRCxNQUFOLEdBQWVBLE1BQWY7QUFDQSxNQUFJMEQsSUFBSixFQUFVO0FBQ1JDLFVBQU1ELElBQU4sR0FBYUEsSUFBYjtBQUNEO0FBQ0RDLFFBQU1wRCxPQUFOLEdBQWdCQSxPQUFoQjtBQUNBb0QsUUFBTXpCLFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0EsU0FBT3lCLEtBQVA7QUFDRCxDQVJELEM7Ozs7Ozs7QUNaQTs7QUFFQSxJQUFJakosUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaOztBQUVBLFNBQVNtVixNQUFULENBQWdCN1UsR0FBaEIsRUFBcUI7QUFDbkIsU0FBTzhVLG1CQUFtQjlVLEdBQW5CLEVBQ0x3QixPQURLLENBQ0csT0FESCxFQUNZLEdBRFosRUFFTEEsT0FGSyxDQUVHLE9BRkgsRUFFWSxHQUZaLEVBR0xBLE9BSEssQ0FHRyxNQUhILEVBR1csR0FIWCxFQUlMQSxPQUpLLENBSUcsT0FKSCxFQUlZLEdBSlosRUFLTEEsT0FMSyxDQUtHLE1BTEgsRUFLVyxHQUxYLEVBTUxBLE9BTkssQ0FNRyxPQU5ILEVBTVksR0FOWixFQU9MQSxPQVBLLENBT0csT0FQSCxFQU9ZLEdBUFosQ0FBUDtBQVFEOztBQUVEOzs7Ozs7O0FBT0FxQixPQUFPQyxPQUFQLEdBQWlCLFNBQVNpRixRQUFULENBQWtCa0IsR0FBbEIsRUFBdUJXLE1BQXZCLEVBQStCQyxnQkFBL0IsRUFBaUQ7QUFDaEU7QUFDQSxNQUFJLENBQUNELE1BQUwsRUFBYTtBQUNYLFdBQU9YLEdBQVA7QUFDRDs7QUFFRCxNQUFJOEwsZ0JBQUo7QUFDQSxNQUFJbEwsZ0JBQUosRUFBc0I7QUFDcEJrTCx1QkFBbUJsTCxpQkFBaUJELE1BQWpCLENBQW5CO0FBQ0QsR0FGRCxNQUVPLElBQUk3RyxNQUFNM0IsaUJBQU4sQ0FBd0J3SSxNQUF4QixDQUFKLEVBQXFDO0FBQzFDbUwsdUJBQW1CbkwsT0FBT2hLLFFBQVAsRUFBbkI7QUFDRCxHQUZNLE1BRUE7QUFDTCxRQUFJb1YsUUFBUSxFQUFaOztBQUVBalMsVUFBTWpCLE9BQU4sQ0FBYzhILE1BQWQsRUFBc0IsU0FBU3FMLFNBQVQsQ0FBbUJqVixHQUFuQixFQUF3Qm9DLEdBQXhCLEVBQTZCO0FBQ2pELFVBQUlwQyxRQUFRLElBQVIsSUFBZ0IsT0FBT0EsR0FBUCxLQUFlLFdBQW5DLEVBQWdEO0FBQzlDO0FBQ0Q7O0FBRUQsVUFBSStDLE1BQU1oRCxPQUFOLENBQWNDLEdBQWQsQ0FBSixFQUF3QjtBQUN0Qm9DLGNBQU1BLE1BQU0sSUFBWjtBQUNEOztBQUVELFVBQUksQ0FBQ1csTUFBTWhELE9BQU4sQ0FBY0MsR0FBZCxDQUFMLEVBQXlCO0FBQ3ZCQSxjQUFNLENBQUNBLEdBQUQsQ0FBTjtBQUNEOztBQUVEK0MsWUFBTWpCLE9BQU4sQ0FBYzlCLEdBQWQsRUFBbUIsU0FBU2tWLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXVCO0FBQ3hDLFlBQUlwUyxNQUFNakMsTUFBTixDQUFhcVUsQ0FBYixDQUFKLEVBQXFCO0FBQ25CQSxjQUFJQSxFQUFFQyxXQUFGLEVBQUo7QUFDRCxTQUZELE1BRU8sSUFBSXJTLE1BQU1sQyxRQUFOLENBQWVzVSxDQUFmLENBQUosRUFBdUI7QUFDNUJBLGNBQUl2UixLQUFLQyxTQUFMLENBQWVzUixDQUFmLENBQUo7QUFDRDtBQUNESCxjQUFNNU8sSUFBTixDQUFXeU8sT0FBT3pTLEdBQVAsSUFBYyxHQUFkLEdBQW9CeVMsT0FBT00sQ0FBUCxDQUEvQjtBQUNELE9BUEQ7QUFRRCxLQXJCRDs7QUF1QkFKLHVCQUFtQkMsTUFBTXJHLElBQU4sQ0FBVyxHQUFYLENBQW5CO0FBQ0Q7O0FBRUQsTUFBSW9HLGdCQUFKLEVBQXNCO0FBQ3BCOUwsV0FBTyxDQUFDQSxJQUFJZ0IsT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQyxDQUF0QixHQUEwQixHQUExQixHQUFnQyxHQUFqQyxJQUF3QzhLLGdCQUEvQztBQUNEOztBQUVELFNBQU85TCxHQUFQO0FBQ0QsQ0E3Q0QsQzs7Ozs7OztBQ3RCQTs7QUFFQSxJQUFJbEcsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaOztBQUVBOzs7Ozs7Ozs7Ozs7O0FBYUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNrRixZQUFULENBQXNCN0UsT0FBdEIsRUFBK0I7QUFDOUMsTUFBSWtTLFNBQVMsRUFBYjtBQUNBLE1BQUlqVCxHQUFKO0FBQ0EsTUFBSXBDLEdBQUo7QUFDQSxNQUFJaUMsQ0FBSjs7QUFFQSxNQUFJLENBQUNrQixPQUFMLEVBQWM7QUFBRSxXQUFPa1MsTUFBUDtBQUFnQjs7QUFFaEN0UyxRQUFNakIsT0FBTixDQUFjcUIsUUFBUTJMLEtBQVIsQ0FBYyxJQUFkLENBQWQsRUFBbUMsU0FBU3dHLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ3ZEdFQsUUFBSXNULEtBQUt0TCxPQUFMLENBQWEsR0FBYixDQUFKO0FBQ0E3SCxVQUFNVyxNQUFNekIsSUFBTixDQUFXaVUsS0FBS0MsTUFBTCxDQUFZLENBQVosRUFBZXZULENBQWYsQ0FBWCxFQUE4QmdKLFdBQTlCLEVBQU47QUFDQWpMLFVBQU0rQyxNQUFNekIsSUFBTixDQUFXaVUsS0FBS0MsTUFBTCxDQUFZdlQsSUFBSSxDQUFoQixDQUFYLENBQU47O0FBRUEsUUFBSUcsR0FBSixFQUFTO0FBQ1BpVCxhQUFPalQsR0FBUCxJQUFjaVQsT0FBT2pULEdBQVAsSUFBY2lULE9BQU9qVCxHQUFQLElBQWMsSUFBZCxHQUFxQnBDLEdBQW5DLEdBQXlDQSxHQUF2RDtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxTQUFPcVYsTUFBUDtBQUNELENBbkJELEM7Ozs7Ozs7QUNqQkE7O0FBRUEsSUFBSXRTLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjs7QUFFQW1ELE9BQU9DLE9BQVAsR0FDRUMsTUFBTXRCLG9CQUFOOztBQUVBO0FBQ0E7QUFDQyxTQUFTZ1Usa0JBQVQsR0FBOEI7QUFDN0IsTUFBSUMsT0FBTyxrQkFBa0JDLElBQWxCLENBQXVCalUsVUFBVWtVLFNBQWpDLENBQVg7QUFDQSxNQUFJQyxpQkFBaUJoVSxTQUFTaVUsYUFBVCxDQUF1QixHQUF2QixDQUFyQjtBQUNBLE1BQUlDLFNBQUo7O0FBRUE7Ozs7OztBQU1BLFdBQVNDLFVBQVQsQ0FBb0IvTSxHQUFwQixFQUF5QjtBQUN2QixRQUFJZ04sT0FBT2hOLEdBQVg7O0FBRUEsUUFBSXlNLElBQUosRUFBVTtBQUNSO0FBQ0FHLHFCQUFlSyxZQUFmLENBQTRCLE1BQTVCLEVBQW9DRCxJQUFwQztBQUNBQSxhQUFPSixlQUFlSSxJQUF0QjtBQUNEOztBQUVESixtQkFBZUssWUFBZixDQUE0QixNQUE1QixFQUFvQ0QsSUFBcEM7O0FBRUE7QUFDQSxXQUFPO0FBQ0xBLFlBQU1KLGVBQWVJLElBRGhCO0FBRUxFLGdCQUFVTixlQUFlTSxRQUFmLEdBQTBCTixlQUFlTSxRQUFmLENBQXdCM1UsT0FBeEIsQ0FBZ0MsSUFBaEMsRUFBc0MsRUFBdEMsQ0FBMUIsR0FBc0UsRUFGM0U7QUFHTDRVLFlBQU1QLGVBQWVPLElBSGhCO0FBSUxDLGNBQVFSLGVBQWVRLE1BQWYsR0FBd0JSLGVBQWVRLE1BQWYsQ0FBc0I3VSxPQUF0QixDQUE4QixLQUE5QixFQUFxQyxFQUFyQyxDQUF4QixHQUFtRSxFQUp0RTtBQUtMOFUsWUFBTVQsZUFBZVMsSUFBZixHQUFzQlQsZUFBZVMsSUFBZixDQUFvQjlVLE9BQXBCLENBQTRCLElBQTVCLEVBQWtDLEVBQWxDLENBQXRCLEdBQThELEVBTC9EO0FBTUwrVSxnQkFBVVYsZUFBZVUsUUFOcEI7QUFPTEMsWUFBTVgsZUFBZVcsSUFQaEI7QUFRTEMsZ0JBQVdaLGVBQWVZLFFBQWYsQ0FBd0J6SCxNQUF4QixDQUErQixDQUEvQixNQUFzQyxHQUF2QyxHQUNBNkcsZUFBZVksUUFEZixHQUVBLE1BQU1aLGVBQWVZO0FBVjFCLEtBQVA7QUFZRDs7QUFFRFYsY0FBWUMsV0FBV3BVLE9BQU84VSxRQUFQLENBQWdCVCxJQUEzQixDQUFaOztBQUVBOzs7Ozs7QUFNQSxTQUFPLFNBQVNoTyxlQUFULENBQXlCME8sVUFBekIsRUFBcUM7QUFDMUMsUUFBSXRCLFNBQVV0UyxNQUFNckMsUUFBTixDQUFlaVcsVUFBZixDQUFELEdBQStCWCxXQUFXVyxVQUFYLENBQS9CLEdBQXdEQSxVQUFyRTtBQUNBLFdBQVF0QixPQUFPYyxRQUFQLEtBQW9CSixVQUFVSSxRQUE5QixJQUNGZCxPQUFPZSxJQUFQLEtBQWdCTCxVQUFVSyxJQURoQztBQUVELEdBSkQ7QUFLRCxDQWxERCxFQUpBOztBQXdEQTtBQUNDLFNBQVNRLHFCQUFULEdBQWlDO0FBQ2hDLFNBQU8sU0FBUzNPLGVBQVQsR0FBMkI7QUFDaEMsV0FBTyxJQUFQO0FBQ0QsR0FGRDtBQUdELENBSkQsRUExREYsQzs7Ozs7OztBQ0pBOztBQUVBOztBQUVBLElBQUk0TyxRQUFRLG1FQUFaOztBQUVBLFNBQVNDLENBQVQsR0FBYTtBQUNYLE9BQUtoTCxPQUFMLEdBQWUsc0NBQWY7QUFDRDtBQUNEZ0wsRUFBRWhYLFNBQUYsR0FBYyxJQUFJb0YsS0FBSixFQUFkO0FBQ0E0UixFQUFFaFgsU0FBRixDQUFZaU0sSUFBWixHQUFtQixDQUFuQjtBQUNBK0ssRUFBRWhYLFNBQUYsQ0FBWTBILElBQVosR0FBbUIsdUJBQW5COztBQUVBLFNBQVNXLElBQVQsQ0FBYzRPLEtBQWQsRUFBcUI7QUFDbkIsTUFBSXhWLE1BQU15VixPQUFPRCxLQUFQLENBQVY7QUFDQSxNQUFJRSxTQUFTLEVBQWI7QUFDQTtBQUNFO0FBQ0EsTUFBSUMsS0FBSixFQUFXQyxRQUFYLEVBQXFCQyxNQUFNLENBQTNCLEVBQThCQyxNQUFNUixLQUZ0QztBQUdFO0FBQ0E7QUFDQTtBQUNBdFYsTUFBSXlOLE1BQUosQ0FBV29JLE1BQU0sQ0FBakIsTUFBd0JDLE1BQU0sR0FBTixFQUFXRCxNQUFNLENBQXpDLENBTkY7QUFPRTtBQUNBSCxZQUFVSSxJQUFJckksTUFBSixDQUFXLEtBQUtrSSxTQUFTLElBQUlFLE1BQU0sQ0FBTixHQUFVLENBQXZDLENBUlosRUFTRTtBQUNBRCxlQUFXNVYsSUFBSStWLFVBQUosQ0FBZUYsT0FBTyxJQUFJLENBQTFCLENBQVg7QUFDQSxRQUFJRCxXQUFXLElBQWYsRUFBcUI7QUFDbkIsWUFBTSxJQUFJTCxDQUFKLEVBQU47QUFDRDtBQUNESSxZQUFRQSxTQUFTLENBQVQsR0FBYUMsUUFBckI7QUFDRDtBQUNELFNBQU9GLE1BQVA7QUFDRDs7QUFFRHBVLE9BQU9DLE9BQVAsR0FBaUJxRixJQUFqQixDOzs7Ozs7O0FDbkNBOztBQUVBLElBQUlwRixRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7O0FBRUFtRCxPQUFPQyxPQUFQLEdBQ0VDLE1BQU10QixvQkFBTjs7QUFFQTtBQUNDLFNBQVNnVSxrQkFBVCxHQUE4QjtBQUM3QixTQUFPO0FBQ0w4QixXQUFPLFNBQVNBLEtBQVQsQ0FBZS9QLElBQWYsRUFBcUJwRSxLQUFyQixFQUE0Qm9VLE9BQTVCLEVBQXFDQyxJQUFyQyxFQUEyQ0MsTUFBM0MsRUFBbURDLE1BQW5ELEVBQTJEO0FBQ2hFLFVBQUlDLFNBQVMsRUFBYjtBQUNBQSxhQUFPeFIsSUFBUCxDQUFZb0IsT0FBTyxHQUFQLEdBQWFzTixtQkFBbUIxUixLQUFuQixDQUF6Qjs7QUFFQSxVQUFJTCxNQUFNcEMsUUFBTixDQUFlNlcsT0FBZixDQUFKLEVBQTZCO0FBQzNCSSxlQUFPeFIsSUFBUCxDQUFZLGFBQWEsSUFBSXlSLElBQUosQ0FBU0wsT0FBVCxFQUFrQk0sV0FBbEIsRUFBekI7QUFDRDs7QUFFRCxVQUFJL1UsTUFBTXJDLFFBQU4sQ0FBZStXLElBQWYsQ0FBSixFQUEwQjtBQUN4QkcsZUFBT3hSLElBQVAsQ0FBWSxVQUFVcVIsSUFBdEI7QUFDRDs7QUFFRCxVQUFJMVUsTUFBTXJDLFFBQU4sQ0FBZWdYLE1BQWYsQ0FBSixFQUE0QjtBQUMxQkUsZUFBT3hSLElBQVAsQ0FBWSxZQUFZc1IsTUFBeEI7QUFDRDs7QUFFRCxVQUFJQyxXQUFXLElBQWYsRUFBcUI7QUFDbkJDLGVBQU94UixJQUFQLENBQVksUUFBWjtBQUNEOztBQUVEdkUsZUFBUytWLE1BQVQsR0FBa0JBLE9BQU9qSixJQUFQLENBQVksSUFBWixDQUFsQjtBQUNELEtBdEJJOztBQXdCTDdELFVBQU0sU0FBU0EsSUFBVCxDQUFjdEQsSUFBZCxFQUFvQjtBQUN4QixVQUFJdVEsUUFBUWxXLFNBQVMrVixNQUFULENBQWdCRyxLQUFoQixDQUFzQixJQUFJQyxNQUFKLENBQVcsZUFBZXhRLElBQWYsR0FBc0IsV0FBakMsQ0FBdEIsQ0FBWjtBQUNBLGFBQVF1USxRQUFRRSxtQkFBbUJGLE1BQU0sQ0FBTixDQUFuQixDQUFSLEdBQXVDLElBQS9DO0FBQ0QsS0EzQkk7O0FBNkJMRyxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0IxUSxJQUFoQixFQUFzQjtBQUM1QixXQUFLK1AsS0FBTCxDQUFXL1AsSUFBWCxFQUFpQixFQUFqQixFQUFxQnFRLEtBQUtNLEdBQUwsS0FBYSxRQUFsQztBQUNEO0FBL0JJLEdBQVA7QUFpQ0QsQ0FsQ0QsRUFIQTs7QUF1Q0E7QUFDQyxTQUFTdkIscUJBQVQsR0FBaUM7QUFDaEMsU0FBTztBQUNMVyxXQUFPLFNBQVNBLEtBQVQsR0FBaUIsQ0FBRSxDQURyQjtBQUVMek0sVUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQUUsYUFBTyxJQUFQO0FBQWMsS0FGakM7QUFHTG9OLFlBQVEsU0FBU0EsTUFBVCxHQUFrQixDQUFFO0FBSHZCLEdBQVA7QUFLRCxDQU5ELEVBekNGLEM7Ozs7Ozs7QUNKQTs7QUFFQSxJQUFJblYsUUFBUSxtQkFBQXJELENBQVEsQ0FBUixDQUFaOztBQUVBLFNBQVNtVSxrQkFBVCxHQUE4QjtBQUM1QixPQUFLdUUsUUFBTCxHQUFnQixFQUFoQjtBQUNEOztBQUVEOzs7Ozs7OztBQVFBdkUsbUJBQW1CL1QsU0FBbkIsQ0FBNkJ1WSxHQUE3QixHQUFtQyxTQUFTQSxHQUFULENBQWE5RCxTQUFiLEVBQXdCQyxRQUF4QixFQUFrQztBQUNuRSxPQUFLNEQsUUFBTCxDQUFjaFMsSUFBZCxDQUFtQjtBQUNqQm1PLGVBQVdBLFNBRE07QUFFakJDLGNBQVVBO0FBRk8sR0FBbkI7QUFJQSxTQUFPLEtBQUs0RCxRQUFMLENBQWNqVyxNQUFkLEdBQXVCLENBQTlCO0FBQ0QsQ0FORDs7QUFRQTs7Ozs7QUFLQTBSLG1CQUFtQi9ULFNBQW5CLENBQTZCd1ksS0FBN0IsR0FBcUMsU0FBU0EsS0FBVCxDQUFlQyxFQUFmLEVBQW1CO0FBQ3RELE1BQUksS0FBS0gsUUFBTCxDQUFjRyxFQUFkLENBQUosRUFBdUI7QUFDckIsU0FBS0gsUUFBTCxDQUFjRyxFQUFkLElBQW9CLElBQXBCO0FBQ0Q7QUFDRixDQUpEOztBQU1BOzs7Ozs7OztBQVFBMUUsbUJBQW1CL1QsU0FBbkIsQ0FBNkJnQyxPQUE3QixHQUF1QyxTQUFTQSxPQUFULENBQWlCRSxFQUFqQixFQUFxQjtBQUMxRGUsUUFBTWpCLE9BQU4sQ0FBYyxLQUFLc1csUUFBbkIsRUFBNkIsU0FBU0ksY0FBVCxDQUF3QkMsQ0FBeEIsRUFBMkI7QUFDdEQsUUFBSUEsTUFBTSxJQUFWLEVBQWdCO0FBQ2R6VyxTQUFHeVcsQ0FBSDtBQUNEO0FBQ0YsR0FKRDtBQUtELENBTkQ7O0FBUUE1VixPQUFPQyxPQUFQLEdBQWlCK1Esa0JBQWpCLEM7Ozs7Ozs7QUNuREE7O0FBRUEsSUFBSTlRLFFBQVEsbUJBQUFyRCxDQUFRLENBQVIsQ0FBWjtBQUNBLElBQUlnWixnQkFBZ0IsbUJBQUFoWixDQUFRLEVBQVIsQ0FBcEI7QUFDQSxJQUFJdU0sV0FBVyxtQkFBQXZNLENBQVEsQ0FBUixDQUFmO0FBQ0EsSUFBSStELFdBQVcsbUJBQUEvRCxDQUFRLENBQVIsQ0FBZjs7QUFFQTs7O0FBR0EsU0FBU2laLDRCQUFULENBQXNDdFEsTUFBdEMsRUFBOEM7QUFDNUMsTUFBSUEsT0FBT2lELFdBQVgsRUFBd0I7QUFDdEJqRCxXQUFPaUQsV0FBUCxDQUFtQnNOLGdCQUFuQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7OztBQU1BL1YsT0FBT0MsT0FBUCxHQUFpQixTQUFTZ1IsZUFBVCxDQUF5QnpMLE1BQXpCLEVBQWlDO0FBQ2hEc1EsK0JBQTZCdFEsTUFBN0I7O0FBRUE7QUFDQUEsU0FBT2xGLE9BQVAsR0FBaUJrRixPQUFPbEYsT0FBUCxJQUFrQixFQUFuQzs7QUFFQTtBQUNBa0YsU0FBTzFFLElBQVAsR0FBYytVLGNBQ1pyUSxPQUFPMUUsSUFESyxFQUVaMEUsT0FBT2xGLE9BRkssRUFHWmtGLE9BQU8zRSxnQkFISyxDQUFkOztBQU1BO0FBQ0EyRSxTQUFPbEYsT0FBUCxHQUFpQkosTUFBTVQsS0FBTixDQUNmK0YsT0FBT2xGLE9BQVAsQ0FBZW9CLE1BQWYsSUFBeUIsRUFEVixFQUVmOEQsT0FBT2xGLE9BQVAsQ0FBZWtGLE9BQU81RCxNQUF0QixLQUFpQyxFQUZsQixFQUdmNEQsT0FBT2xGLE9BQVAsSUFBa0IsRUFISCxDQUFqQjs7QUFNQUosUUFBTWpCLE9BQU4sQ0FDRSxDQUFDLFFBQUQsRUFBVyxLQUFYLEVBQWtCLE1BQWxCLEVBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDLE9BQXpDLEVBQWtELFFBQWxELENBREYsRUFFRSxTQUFTK1csaUJBQVQsQ0FBMkJwVSxNQUEzQixFQUFtQztBQUNqQyxXQUFPNEQsT0FBT2xGLE9BQVAsQ0FBZXNCLE1BQWYsQ0FBUDtBQUNELEdBSkg7O0FBT0EsTUFBSW5CLFVBQVUrRSxPQUFPL0UsT0FBUCxJQUFrQkcsU0FBU0gsT0FBekM7O0FBRUEsU0FBT0EsUUFBUStFLE1BQVIsRUFBZ0JtRCxJQUFoQixDQUFxQixTQUFTc04sbUJBQVQsQ0FBNkJ2TyxRQUE3QixFQUF1QztBQUNqRW9PLGlDQUE2QnRRLE1BQTdCOztBQUVBO0FBQ0FrQyxhQUFTNUcsSUFBVCxHQUFnQitVLGNBQ2RuTyxTQUFTNUcsSUFESyxFQUVkNEcsU0FBU3BILE9BRkssRUFHZGtGLE9BQU92RSxpQkFITyxDQUFoQjs7QUFNQSxXQUFPeUcsUUFBUDtBQUNELEdBWE0sRUFXSixTQUFTd08sa0JBQVQsQ0FBNEJDLE1BQTVCLEVBQW9DO0FBQ3JDLFFBQUksQ0FBQy9NLFNBQVMrTSxNQUFULENBQUwsRUFBdUI7QUFDckJMLG1DQUE2QnRRLE1BQTdCOztBQUVBO0FBQ0EsVUFBSTJRLFVBQVVBLE9BQU96TyxRQUFyQixFQUErQjtBQUM3QnlPLGVBQU96TyxRQUFQLENBQWdCNUcsSUFBaEIsR0FBdUIrVSxjQUNyQk0sT0FBT3pPLFFBQVAsQ0FBZ0I1RyxJQURLLEVBRXJCcVYsT0FBT3pPLFFBQVAsQ0FBZ0JwSCxPQUZLLEVBR3JCa0YsT0FBT3ZFLGlCQUhjLENBQXZCO0FBS0Q7QUFDRjs7QUFFRCxXQUFPd0UsUUFBUUcsTUFBUixDQUFldVEsTUFBZixDQUFQO0FBQ0QsR0ExQk0sQ0FBUDtBQTJCRCxDQXhERCxDOzs7Ozs7O0FDdEJBOztBQUVBLElBQUlqVyxRQUFRLG1CQUFBckQsQ0FBUSxDQUFSLENBQVo7O0FBRUE7Ozs7Ozs7O0FBUUFtRCxPQUFPQyxPQUFQLEdBQWlCLFNBQVM0VixhQUFULENBQXVCL1UsSUFBdkIsRUFBNkJSLE9BQTdCLEVBQXNDOFYsR0FBdEMsRUFBMkM7QUFDMUQ7QUFDQWxXLFFBQU1qQixPQUFOLENBQWNtWCxHQUFkLEVBQW1CLFNBQVNDLFNBQVQsQ0FBbUJsWCxFQUFuQixFQUF1QjtBQUN4QzJCLFdBQU8zQixHQUFHMkIsSUFBSCxFQUFTUixPQUFULENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU9RLElBQVA7QUFDRCxDQVBELEM7Ozs7Ozs7QUNaQTs7QUFFQTs7Ozs7OztBQU1BZCxPQUFPQyxPQUFQLEdBQWlCLFNBQVNpUixhQUFULENBQXVCOUssR0FBdkIsRUFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsU0FBTyxpQ0FBZ0MwTSxJQUFoQyxDQUFxQzFNLEdBQXJDO0FBQVA7QUFDRCxDQUxELEM7Ozs7Ozs7QUNSQTs7QUFFQTs7Ozs7Ozs7QUFPQXBHLE9BQU9DLE9BQVAsR0FBaUIsU0FBU2tSLFdBQVQsQ0FBcUJFLE9BQXJCLEVBQThCaUYsV0FBOUIsRUFBMkM7QUFDMUQsU0FBT0EsY0FDSGpGLFFBQVExUyxPQUFSLENBQWdCLE1BQWhCLEVBQXdCLEVBQXhCLElBQThCLEdBQTlCLEdBQW9DMlgsWUFBWTNYLE9BQVosQ0FBb0IsTUFBcEIsRUFBNEIsRUFBNUIsQ0FEakMsR0FFSDBTLE9BRko7QUFHRCxDQUpELEM7Ozs7Ozs7QUNUQTs7QUFFQSxJQUFJL0gsU0FBUyxtQkFBQXpNLENBQVEsQ0FBUixDQUFiOztBQUVBOzs7Ozs7QUFNQSxTQUFTeVQsV0FBVCxDQUFxQmlHLFFBQXJCLEVBQStCO0FBQzdCLE1BQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFNLElBQUlDLFNBQUosQ0FBYyw4QkFBZCxDQUFOO0FBQ0Q7O0FBRUQsTUFBSUMsY0FBSjtBQUNBLE9BQUsvTixPQUFMLEdBQWUsSUFBSWpELE9BQUosQ0FBWSxTQUFTaVIsZUFBVCxDQUF5Qi9RLE9BQXpCLEVBQWtDO0FBQzNEOFEscUJBQWlCOVEsT0FBakI7QUFDRCxHQUZjLENBQWY7O0FBSUEsTUFBSWdSLFFBQVEsSUFBWjtBQUNBSixXQUFTLFNBQVMxTixNQUFULENBQWdCSSxPQUFoQixFQUF5QjtBQUNoQyxRQUFJME4sTUFBTVIsTUFBVixFQUFrQjtBQUNoQjtBQUNBO0FBQ0Q7O0FBRURRLFVBQU1SLE1BQU4sR0FBZSxJQUFJN00sTUFBSixDQUFXTCxPQUFYLENBQWY7QUFDQXdOLG1CQUFlRSxNQUFNUixNQUFyQjtBQUNELEdBUkQ7QUFTRDs7QUFFRDs7O0FBR0E3RixZQUFZclQsU0FBWixDQUFzQjhZLGdCQUF0QixHQUF5QyxTQUFTQSxnQkFBVCxHQUE0QjtBQUNuRSxNQUFJLEtBQUtJLE1BQVQsRUFBaUI7QUFDZixVQUFNLEtBQUtBLE1BQVg7QUFDRDtBQUNGLENBSkQ7O0FBTUE7Ozs7QUFJQTdGLFlBQVlzRyxNQUFaLEdBQXFCLFNBQVNBLE1BQVQsR0FBa0I7QUFDckMsTUFBSS9OLE1BQUo7QUFDQSxNQUFJOE4sUUFBUSxJQUFJckcsV0FBSixDQUFnQixTQUFTaUcsUUFBVCxDQUFrQk0sQ0FBbEIsRUFBcUI7QUFDL0NoTyxhQUFTZ08sQ0FBVDtBQUNELEdBRlcsQ0FBWjtBQUdBLFNBQU87QUFDTEYsV0FBT0EsS0FERjtBQUVMOU4sWUFBUUE7QUFGSCxHQUFQO0FBSUQsQ0FURDs7QUFXQTdJLE9BQU9DLE9BQVAsR0FBaUJxUSxXQUFqQixDOzs7Ozs7O0FDeERBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkF0USxPQUFPQyxPQUFQLEdBQWlCLFNBQVN3USxNQUFULENBQWdCcUcsUUFBaEIsRUFBMEI7QUFDekMsU0FBTyxTQUFTaFYsSUFBVCxDQUFjaVYsR0FBZCxFQUFtQjtBQUN4QixXQUFPRCxTQUFTN1UsS0FBVCxDQUFlLElBQWYsRUFBcUI4VSxHQUFyQixDQUFQO0FBQ0QsR0FGRDtBQUdELENBSkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBOzs7QUFHQTtBQUNPLElBQU1DLGNBQWMsd0NBQXBCO0FBQ0EsSUFBTUMsY0FBYyxnQ0FBcEI7QUFDQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFTbk4sUUFBVCxFQUFtQjtBQUNwRCxRQUFPLGFBQ05BLFNBQVNvQyxNQUFULENBQWdCLENBQWhCLEVBQW1CckYsV0FBbkIsRUFETSxHQUVOaUQsU0FBU2dILEtBQVQsQ0FBZSxDQUFmLENBRk0sR0FHTixVQUhEO0FBSUEsQ0FMTTtBQU1BLElBQU1vRyxlQUFlLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLEVBQW9DLEdBQXBDLEVBQXlDLEdBQXpDLEVBQThDLEdBQTlDLEVBQW1ELEdBQW5ELEVBQXdELEdBQXhELEVBQTZELEdBQTdELEVBQWtFLEdBQWxFLEVBQXVFLEdBQXZFLEVBQTRFLEdBQTVFLENBQXJCO0FBQ0EsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLEdBQVc7QUFDcEMsS0FBSTNaLFNBQVMsRUFBYjs7QUFFQSxNQUFLLElBQUk0WixRQUFRLENBQWpCLEVBQW9CQSxRQUFRLEVBQTVCLEVBQWdDQSxPQUFoQyxFQUF5QztBQUN4QyxNQUFJOVcsUUFBUStXLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixFQUEzQixDQUFaOztBQUVBLFVBQVFILEtBQVI7QUFDQSxRQUFLLENBQUw7QUFDQzVaLGNBQVUsR0FBVjtBQUNBO0FBQ0QsUUFBSyxFQUFMO0FBQ0M4QyxZQUFRLENBQVI7QUFDQTlDLGNBQVUsR0FBVjtBQUNBO0FBQ0QsUUFBSyxFQUFMO0FBQ0M4QyxZQUFRQSxRQUFRLENBQVIsR0FBWSxDQUFwQjtBQUNBOUMsY0FBVSxHQUFWO0FBQ0E7QUFDRCxRQUFLLEVBQUw7QUFDQ0EsY0FBVSxHQUFWO0FBQ0E7QUFkRDtBQWdCQUEsWUFBVTBaLGFBQWE1VyxLQUFiLENBQVY7QUFDQTtBQUNELFFBQU85QyxNQUFQO0FBQ0EsQ0F6Qk07QUEwQkEsSUFBTWdhLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBUy9OLEtBQVQsRUFBZ0I7O0FBRTdDQSxPQUFNdUIsYUFBTixHQUFzQnZCLE1BQU1rRCxNQUFOLEdBQWVsRCxNQUFNa0QsTUFBckIsR0FBOEIsK0RBQUFJLEVBQXBEOztBQUVBLEtBQUd0RCxNQUFNdEQsR0FBVCxFQUFjO0FBQ2JzRCxRQUFNdUIsYUFBTixJQUF1QnZCLE1BQU10RCxHQUE3QjtBQUNBOztBQUVELEtBQUdzRCxNQUFNc0IsUUFBVCxFQUFtQjtBQUNsQnRCLFFBQU11QixhQUFOLFVBQTJCdkIsTUFBTXNCLFFBQWpDO0FBQ0E7QUFDRCxRQUFPdEIsS0FBUDs7QUFFQTtBQUNBLENBZE07QUFlQSxJQUFNZ08sbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBU2hPLEtBQVQsRUFBZ0I7O0FBRS9DLEtBQUksQ0FBQ0EsTUFBTXRELEdBQVAsSUFBY3NELE1BQU0yQixPQUF4QixFQUFpQztBQUNoQztBQUNBOztBQUVEM0IsT0FBTXNCLFFBQU4sR0FBaUIsVUFBakI7O0FBRUF5TSxnQkFBZS9OLEtBQWY7O0FBRUEsS0FBSUEsTUFBTXlCLFFBQVYsRUFBb0I7QUFDbkJ6QixRQUFNMkIsT0FBTixHQUFnQjNCLE1BQU11QixhQUFOLElBQXVCLGlCQUFnQnZCLE1BQU15QixRQUF0QixHQUFnQyxJQUF2RTtBQUNBLEVBRkQsTUFFTyxJQUFJekIsTUFBTTBCLFNBQVYsRUFBcUI7QUFDM0IxQixRQUFNMkIsT0FBTixHQUFnQjNCLE1BQU11QixhQUFOLElBQXVCLHdCQUF1QnZCLE1BQU0wQixTQUE3QixHQUF3QyxJQUEvRTtBQUNBO0FBQ0QsUUFBTzFCLEtBQVA7QUFDQSxDQWhCTTtBQWlCQSxJQUFNaU8sdUJBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBU2pPLEtBQVQsRUFBZ0I7QUFDbkQ7QUFDQSxLQUFJVyxPQUFPWCxNQUFNa08sTUFBTixJQUFnQixFQUEzQjs7QUFFQSxLQUFJbE8sTUFBTW1CLFdBQVYsRUFBdUI7QUFDdEI7QUFDQTs7QUFFRDZNLGtCQUFpQmhPLEtBQWpCOztBQUVBQSxPQUFNbUIsV0FBTixHQUFvQm5CLE1BQU0yQixPQUFOLElBQWlCLFlBQVdoQixJQUFYLEdBQWlCLEdBQXREO0FBQ0EsUUFBT1gsS0FBUDtBQUNBLENBWk07QUFhQSxJQUFNbU8sdUJBQXVCLFNBQXZCQSxvQkFBdUIsQ0FBU3RYLEtBQVQsRUFBZ0I7QUFDbkQsS0FBSXVYLGNBQWMsSUFBSUMsR0FBR0MsZUFBUCxFQUFsQjtBQUNBRixhQUFZRyxzQkFBWixDQUFtQzFYLEtBQW5DO0FBQ0EsS0FBSTJYLGFBQWEsRUFBakI7QUFDQSxNQUFJLElBQUlDLGFBQVIsSUFBeUJKLEdBQUdLLGNBQUgsQ0FBa0JuYixTQUEzQyxFQUFzRDtBQUNyRCxNQUFJOGEsR0FBR0ssY0FBSCxDQUFrQjVZLGNBQWxCLENBQWlDMlksYUFBakMsQ0FBSixFQUFxRDtBQUNwRCxPQUFJRSxZQUFZTixHQUFHSyxjQUFILENBQWtCbFgsS0FBbEIsQ0FBd0JpWCxhQUF4QixDQUFoQjtBQUNBLE9BQUdMLFlBQVlRLEdBQVosQ0FBZ0JELFNBQWhCLENBQUgsRUFBOEI7QUFDNUJILGVBQVczVSxJQUFYLENBQWdCNFUsYUFBaEI7QUFDRDtBQUNEO0FBQ0Q7QUFDRCxRQUFPRCxVQUFQO0FBQ0EsQ0FiTTtBQWNBLElBQU1LLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBUzdPLEtBQVQsRUFBZ0I7O0FBRTlDLEtBQUdBLE1BQU0yQixPQUFULEVBQWtCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNELEtBQUcsQ0FBQzNCLE1BQU1zQixRQUFWLEVBQW9CO0FBQ25CdEIsUUFBTXNCLFFBQU4sR0FBaUIsVUFBakI7QUFDQTtBQUNEME0sa0JBQWlCaE8sS0FBakI7O0FBRUFBLE9BQU0yQixPQUFOLElBQWlCLFNBQWpCOztBQUVBLEtBQUczQixNQUFNOE8sTUFBVCxFQUFpQjtBQUNoQjlPLFFBQU0yQixPQUFOLGlCQUE0QjNCLE1BQU04TyxNQUFsQztBQUNBO0FBQ0QsS0FBRzlPLE1BQU0rTyxHQUFULEVBQWM7QUFDYi9PLFFBQU0yQixPQUFOLGNBQXlCM0IsTUFBTStPLEdBQS9CO0FBQ0E7QUFDRCxLQUFHL08sTUFBTWdQLE1BQVQsRUFBaUI7QUFDaEJoUCxRQUFNMkIsT0FBTixpQkFBNEIzQixNQUFNZ1AsTUFBbEM7QUFDQTtBQUNELEtBQUdoUCxNQUFNaVAsTUFBVCxFQUFpQjtBQUNoQmpQLFFBQU0yQixPQUFOLGlCQUE0QjNCLE1BQU1pUCxNQUFsQztBQUNBO0FBQ0QsS0FBR2pQLE1BQU1rUCxPQUFULEVBQWtCO0FBQ2pCbFAsUUFBTTJCLE9BQU4sa0JBQTZCM0IsTUFBTWtQLE9BQW5DO0FBQ0E7O0FBRUQsS0FBRyxNQUFNOUYsSUFBTixDQUFXcEosTUFBTTJCLE9BQWpCLENBQUgsRUFBOEI7QUFDN0I7QUFDQTNCLFFBQU0yQixPQUFOLENBQWMwRixLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQUMsQ0FBdkI7QUFDQTtBQUVELENBbENNLEMiLCJmaWxlIjoiLi9saWJyYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGQtc3B1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInBkLXNwdXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZHNwc2VydmVyYWpheFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInBkLXNwdXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRzcHNlcnZlcmFqYXhcIl0gPSBmYWN0b3J5KHJvb3RbXCJwZHNwdXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZjk2MzI5NjFkNzYwZmFkNmE2ZiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiAhaXNBcnJheShvYmopKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInBkLXNwdXRpbFwiLFwiY29tbW9uanMyXCI6XCJwZC1zcHV0aWxcIixcImFtZFwiOlwicGQtc3B1dGlsXCIsXCJyb290XCI6XCJwZHNwdXRpbFwifVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuXHRwZC1zcHNlcnZlcmNvbnRhY3RzXHJcblx0cmVxdWlyZXMgYmFiZWwgcG9seWZpbGwgZm9yIG9iamVjdCBhc3NpZ24gYW5kIHByb21pc2VcclxuXHRuZWVkcyBlbmNvZGVBY2NvdW50TmFtZSwgZ2V0VVJMT3JpZ2luIGZyb20gcGQtc3B1dGlsXHJcblx0bmVlZHMgYWxsIG9mIGF4aW9zIC0gd2hlbiB1c2luZyB0aGlzIGxpYnJhcnkgeW91IGdldCB0aGUgcmVzcG9uc2Ugb2YgdGhlIHNlcnZlciBmcm9tIGRhdGEgcHJvcGVydHkgd2hlbiBhIHBsYWluIGF4aW9zIHJlc3BvbnNlIGlzIHJldHVybmVkXHJcblx0ZXhwb3NlcyBhIGdsb2JhbCBwZHNwc2VydmVyYWpheCBpZiB1c2VkIGluIHNjcmlwdCB0YWcgb2YgYnJvd3NlclxyXG5cdEBtb2R1bGUgcGQtc3BzZXJ2ZXJhamF4XHJcbiAqL1xyXG5cclxuaW1wb3J0ICogYXMgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgKiBhcyBhamF4SGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xyXG5pbXBvcnQge2VuY29kZUFjY291bnROYW1lLCBnZXRVUkxPcmlnaW59IGZyb20gJ3BkLXNwdXRpbCc7XHJcblxyXG5jb25zdCBkZXBUZXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKCFQcm9taXNlIHx8ICFPYmplY3QuYXNzaWduKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJQcm9taXNlIEFQSSBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgYWRkIGEgcG9seWZpbGwgYXMgYSBkZXBlbmRlbmN5IHRvIGNvbnRpbnVlLlwiKTtcclxuXHR9XHJcblx0aWYgKCFheGlvcykge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiYXhpb3MgQVBJIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBhZGQgYSBheGlvcyBhcyBhIGRlcGVuZGVuY3kgdG8gY29udGludWUuXCIpO1xyXG5cdH1cclxuXHRpZiAoIWVuY29kZUFjY291bnROYW1lIHx8ICFnZXRVUkxPcmlnaW4pIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcInBkLXNwdXRpbCBBUEkgaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGFkZCBhIHBkLXNwdXRpbCBhcyBhIGRlcGVuZGVuY3kgdG8gY29udGludWUuXCIpO1xyXG5cdH1cclxufTtcclxuZGVwVGVzdCgpO1xyXG5cclxuY29uc3QgYWpheEdldFVzZXJQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdHJldHVybiBhamF4R2V0RGF0YShwcm9wcy5wZXJtc0xpbmspXHJcblx0LnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdHJldHVybiBhamF4SGVscGVycy5wYXJzZUJhc2VQZXJtaXNzaW9ucyhyZXNwb25zZS5kYXRhKTtcclxuXHR9KTtcclxufTtcclxuY29uc3QgZ2V0RW50aXR5VHlwZSA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblx0XHJcblx0dmFyIGVudGl0eURhdGE7XHJcblxyXG5cdGlmIChwcm9wcy5saXN0TmFtZSkge1xyXG5cdFx0ZW50aXR5RGF0YSA9IGFqYXhIZWxwZXJzLmNyZWF0ZWxpc3RpdGVtdHlwZShwcm9wcy5saXN0TmFtZSk7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudGl0eURhdGEpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGFqYXhHZXRMaXN0SW5mbyhwcm9wcylcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWU7XHJcblx0fSk7XHJcbn07XHJcbmNvbnN0IG5vbkRlbGV0ZVByb2Nlc3MgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRpZighcHJvcHMuaGVhZGVyRGF0YSkge1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YSA9IHt9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdldEVudGl0eVR5cGUocHJvcHMpXHJcblx0LnRoZW4oZnVuY3Rpb24odHlwZSkge1xyXG5cdFx0cHJvcHMuaXRlbSA9IE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0XHQnX19tZXRhZGF0YSc6IHsndHlwZSc6IHR5cGV9XHJcblx0XHR9LCBwcm9wcy5pbmZvVG9TZXJ2ZXIpO1xyXG5cclxuXHRcdHJldHVybiBhamF4R2V0Q29udGV4dChwcm9wcyk7XHJcblx0fSkudGhlbihmdW5jdGlvbihjb250ZXh0KSB7XHJcblxyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnWC1SZXF1ZXN0RGlnZXN0J10gPSBjb250ZXh0LmRhdGEuRm9ybURpZ2VzdFZhbHVlO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YS5BY2NlcHQgPSBhamF4SGVscGVycy5taW5pbWFsTWV0YTtcclxuXHRcdHByb3BzLmhlYWRlckRhdGFbJ0NvbnRlbnQtVHlwZSddID0gYWpheEhlbHBlcnMudmVyYm9zZU1ldGE7XHJcblxyXG5cdFx0YWpheEhlbHBlcnMubGlzdEl0ZW1VcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRcdHJldHVybiBheGlvcyh7XHJcblx0XHRcdHVybDogcHJvcHMubGlzdEl0ZW1VcmwsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShwcm9wcy5pdGVtKSxcclxuXHRcdFx0aGVhZGVyczogcHJvcHMuaGVhZGVyRGF0YVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcbmNvbnN0IGRlbGV0ZVByb2Nlc3MgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRpZighcHJvcHMuaGVhZGVyRGF0YSkge1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YSA9IHt9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGFqYXhHZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuXHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhWydYLVJlcXVlc3REaWdlc3QnXSA9IGNvbnRleHQuZGF0YS5Gb3JtRGlnZXN0VmFsdWU7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhLkFjY2VwdCA9IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnQ29udGVudC1UeXBlJ10gPSBhamF4SGVscGVycy52ZXJib3NlTWV0YTtcclxuXHJcblx0XHRhamF4SGVscGVycy5saXN0SXRlbVVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdFx0aWYgKHByb3BzLnVybE1vZGlmaWVyKSB7XHJcblx0XHRcdHByb3BzLmxpc3RJdGVtVXJsICs9IHByb3BzLnVybE1vZGlmaWVyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBheGlvcyh7XHJcblx0XHRcdHVybDogcHJvcHMubGlzdEl0ZW1VcmwsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRoZWFkZXJzOiBwcm9wcy5oZWFkZXJEYXRhXHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBHZXRzIGEgY29udGV4dCBvYmplY3QgZm9yIHNlcnZlciByZXF1ZXN0cy5cclxuICogdGhlIGtleSBmcm9tIHJlc3BvbnNlIGlzIEZvcm1EaWdlc3RWYWx1ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHJldHVybnMge3Byb21pc2UuPG9iamVjdD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheEdldENvbnRleHQocHJvcHMpIHtcclxuXHRcclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS9jb250ZXh0aW5mb1wiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRoZWFkZXJzOiB7IFwiQWNjZXB0XCI6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhIH0sXHJcblx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsXHJcblx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdHByb3BzLmVuZFBvaW50ID0gbnVsbDtcclxuXHRcdHByb3BzLmNvbmZpZ3VyZWRVcmwgPSBudWxsO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgZGF0YSBmcm9tIHNlcnZlciB1c2luZyB0aGUgUkVTVCBlbmRwb2ludFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gZnVsbCBvZGF0YSB1cmxcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0RGF0YSh1cmwpIHtcclxuXHJcblx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7J0FjY2VwdCc6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhfSxcclxuXHRcdHVybDogdXJsXHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgYWxsIHJlc3VsdHMgZm9yIHNlcnZlciByZXF1ZXN0cy5cclxuICogb25jZSB0aGUgcHJvbWlzZSByZXNvbHZlcyB5b3UgZ2V0IGFuIGFycmF5IG9mIG9iamVjdHMgdGhhdCBhcmUgdGhlIHNlcnZlcnMgcmVzcG9uc2VcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnNlbGVjdF1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5maWx0ZXJdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZXhwYW5kXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnRvcF1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmRlckJ5XVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZS48b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRBbGxMaXN0UmVzdWx0cyhwcm9wcykge1xyXG5cclxuXHRpZighcHJvcHMubGlzdEdVSUQgJiYgIXByb3BzLmxpc3RUaXRsZSkge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KFwibXVzdCBwYXNzIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSB0byBhamF4R2V0QWxsTGlzdFJlc3VsdHNcIik7XHJcblx0fVxyXG5cclxuXHRhamF4SGVscGVycy5jcmVhdGVHZXRBbGxVcmwocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gYWpheEdldERhdGEocHJvcHMubGlzdFVybClcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0dmFyIGN1cnJlbnRSZXN1bHRzID0gcHJvcHMuYWxsUmVzdWx0cyB8fCBbXSxcclxuXHRcdFx0cmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcblx0XHRwcm9wcy5hbGxSZXN1bHRzID0gY3VycmVudFJlc3VsdHMuY29uY2F0KHJlc3BvbnNlRGF0YS52YWx1ZSk7XHJcblx0XHRcclxuXHRcdGlmIChyZXNwb25zZURhdGFbJ29kYXRhLm5leHRMaW5rJ10pIHtcclxuXHRcdFx0cHJvcHMubGlzdFVybCA9IHJlc3BvbnNlRGF0YVsnb2RhdGEubmV4dExpbmsnXTtcclxuXHRcdFx0cmV0dXJuIGFqYXhHZXRBbGxMaXN0UmVzdWx0cyhwcm9wcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHJvcHMuYWxsUmVzdWx0cztcclxuXHR9KTtcclxufVxyXG5jb25zdCBhamF4R2V0QmF0Y2ggPSBmdW5jdGlvbihwcm9wcywgYXJyYXlPZlVybHMpIHtcclxuXHJcblx0dmFyIGJhdGNoR1VJRCA9IGFqYXhIZWxwZXJzLmNyZWF0ZUdVSUQoKSxcclxuXHRcdGJhdGNoQm9keSxcclxuXHRcdGJhdGNoSGVhZGVyLFxyXG5cdFx0YmF0Y2hDb250ZW50cyA9IFtdO1xyXG5cclxuXHQvL2JhdGNoIChvcGVyYXRpb24pXHJcblx0YXJyYXlPZlVybHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJy0tYmF0Y2hfJyArIGJhdGNoR1VJRCk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJ0NvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vaHR0cCcpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCdDb250ZW50LVRyYW5zZmVyLUVuY29kaW5nOiBiaW5hcnknKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnJyk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJ0dFVCAnICsgaXRlbSArICcgSFRUUC8xLjEnKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaChgQWNjZXB0OiAke2FqYXhIZWxwZXJzLm1pbmltYWxNZXRhfWApO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCcnKTtcclxuXHR9KTtcclxuXHJcblx0YmF0Y2hDb250ZW50cy5wdXNoKCctLWJhdGNoXycgKyBiYXRjaEdVSUQgKyAnLS0nKTtcclxuXHJcblx0YmF0Y2hCb2R5ID0gYmF0Y2hDb250ZW50cy5qb2luKCdcXHJcXG4nKTtcclxuXHJcblx0cmV0dXJuIGFqYXhHZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdHByb3BzLmVuZFBvaW50ID0gJ19hcGkvJGJhdGNoJztcclxuXHRcdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0XHRiYXRjaEhlYWRlciA9IHtcclxuXHRcdCdYLVJlcXVlc3REaWdlc3QnOiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZSxcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L21peGVkOyBib3VuZGFyeT1cImJhdGNoXycgKyBiYXRjaEdVSUQgKyAnXCInXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiBiYXRjaEJvZHksXHJcblx0XHRcdGhlYWRlcnM6IGJhdGNoSGVhZGVyXHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdHZhciBwYXJzZWRBcnJheSA9IFtdLFxyXG5cdFx0XHRcdHJlc3BvbnNlVG9BcnJheSA9IHJlc3BvbnNlLmRhdGEuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgY3VycmVudExpbmUgPSAwOyBjdXJyZW50TGluZSA8IHJlc3BvbnNlVG9BcnJheS5sZW5ndGg7IGN1cnJlbnRMaW5lKyspIHtcclxuXHRcdFx0XHRpZiAocmVzcG9uc2VUb0FycmF5W2N1cnJlbnRMaW5lXS5jaGFyQXQoMCkgPT09ICd7Jykge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHQvLyBwYXJzZSB0aGUgSlNPTiByZXNwb25zZS4uLlxyXG5cdFx0XHRcdFx0dmFyIHRyeVBhcnNlSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VUb0FycmF5W2N1cnJlbnRMaW5lXSk7XHJcblxyXG5cdFx0XHRcdFx0cGFyc2VkQXJyYXkucHVzaCh0cnlQYXJzZUpzb24pO1xyXG5cclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHQvLyBkb24ndCBkbyBhbnl0aGluZy4uLiBqdXN0IGtlZXAgbW92aW5nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBhcnNlZEFycmF5O1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufTtcclxuLyoqXHJcbiAqIEdldHMgYWxsIGl0ZW1zIHJlcXVlc3RlZCBpbiB0aGUgZ2V0VXJscyBwcm9wZXJ0eSAoYmF0Y2ggcmVxdWVzdClcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSByZWxhdGl2ZSB1cmwgb2YgdGhlIHNpdGUgdGhhdCBjb250YWlucyB0aGUgZGF0YVxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcy5nZXRVcmxzIC0gZnVsbCBvZGF0YSB1cmxzXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0QmF0Y2hNZXRlcmVkKHByb3BzKSB7XHJcblx0bGV0IHVybHNGb3JUcmlwID0gW10sXHJcblx0XHRwZXJUcmlwQ291bnQgPSAwO1xyXG5cclxuXHRwcm9wcy50b3RhbEl0ZW1zID0gcHJvcHMuZ2V0VXJscy5sZW5ndGg7XHJcblx0cHJvcHMudG90YWxQZXJUcmlwID0gNTA7XHJcblx0cHJvcHMuYWxsUmVzdWx0cyA9IFtdO1xyXG5cdHByb3BzLm51bWJlclRvU3RhcnRBdCA9IDA7XHJcblxyXG5cdGZvciAoOyBwcm9wcy5udW1iZXJUb1N0YXJ0QXQgPCBwcm9wcy50b3RhbEl0ZW1zOyBwcm9wcy5udW1iZXJUb1N0YXJ0QXQrKykge1xyXG5cdFx0bGV0IHVybCA9IHByb3BzLmdldFVybHNbcHJvcHMubnVtYmVyVG9TdGFydEF0XTtcclxuXHRcdHVybHNGb3JUcmlwLnB1c2godXJsKTtcclxuXHRcdHBlclRyaXBDb3VudCsrO1xyXG5cclxuXHRcdGlmIChwZXJUcmlwQ291bnQgPT09IHByb3BzLnRvdGFsUGVyVHJpcCkge1xyXG5cdFx0XHRwcm9wcy5udW1iZXJUb1N0YXJ0QXQrKztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYWpheEdldEJhdGNoKHtvcmlnaW46IHByb3BzLm9yaWdpbiwgdXJsOiBwcm9wcy51cmx9LCB1cmxzRm9yVHJpcClcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cHJvcHMuYWxsUmVzdWx0cyA9IHByb3BzLmFsbFJlc3VsdHMuY29uY2F0KHJlc3BvbnNlKTtcclxuXHJcblx0XHRpZiAocHJvcHMubnVtYmVyVG9TdGFydEF0IDwgcHJvcHMudG90YWxJdGVtcykge1xyXG5cdFx0XHRyZXR1cm4gYWpheEdldEJhdGNoTWV0ZXJlZChwcm9wcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHByb3BzLmFsbFJlc3VsdHM7XHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIEdldCB1c2VyIHByb2ZpbGVzIGZyb20gdGhlIHNlcnZlciAoYmF0Y2ggcmVxdWVzdClcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzLnByb2ZpbGVFbWFpbHMgLSBlbWFpbCBhZGRyZXNzZXMgb2YgdGhlIHVzZXJzIHlvdSB3YW50IHByb2ZpbGUgZGF0YSBmb3JcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRCYXRjaFByb2ZpbGVzKHByb3BzKSB7XHJcblx0bGV0IHByb2ZpbGVVcmxzID0gbnVsbDtcclxuXHRpZiAoIXByb3BzLnByb2ZpbGVFbWFpbHMgfHwgcHJvcHMucHJvZmlsZUVtYWlscy5sZW5ndGggPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcInByb2ZpbGUgZW1haWxzIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIHRoZSBiYXRjaCBwcm9maWxlIGZ1bmN0aW9uXCIpO1xyXG5cdH1cclxuXHJcblx0cHJvcHMub3JpZ2luID0gZ2V0VVJMT3JpZ2luKCk7XHJcblx0cHJvZmlsZVVybHMgPSBbXTtcclxuXHJcblx0bGV0IHVybEZvclNpdGUgPSBwcm9wcy5vcmlnaW4gKyBwcm9wcy51cmw7XHJcblx0cHJvcHMucHJvZmlsZUVtYWlscy5mb3JFYWNoKChlbWFpbCkgPT4ge1xyXG5cdFx0bGV0IGVuY29kZWQgPSBlbmNvZGVBY2NvdW50TmFtZShlbWFpbCk7XHJcblx0XHRwcm9maWxlVXJscy5wdXNoKGAke3VybEZvclNpdGV9L19hcGkvc3AudXNlcnByb2ZpbGVzLnBlb3BsZW1hbmFnZXIvR2V0UHJvcGVydGllc0ZvcignJHtlbmNvZGVkfScpPyRzZWxlY3Q9VXNlclByb2ZpbGVQcm9wZXJ0aWVzYCk7XHJcblx0fSk7XHJcblxyXG5cdGxldCB7b3JpZ2luLCB1cmx9ID0gcHJvcHM7XHJcblx0XHJcblx0cmV0dXJuIGFqYXhHZXRCYXRjaE1ldGVyZWQoe1xyXG5cdFx0b3JpZ2luOiBvcmlnaW4sXHJcblx0XHR1cmw6IHVybCxcclxuXHRcdGdldFVybHM6IHByb2ZpbGVVcmxzXHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIEdldCBsaXN0IG9yIGxpYnJhcnkgcHJvcGVydGllcyBmcm9tIHNlcnZlclxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gYSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0TGlzdEluZm8ocHJvcHMpIHtcclxuXHJcblx0YWpheEhlbHBlcnMubGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblx0cmV0dXJuIGFqYXhHZXREYXRhKHByb3BzLmxpc3RVcmwpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdXNlciBwcm9maWxlIGluZm8gZnJvbSB0aGUgU2hhcmVQb2ludCBzZWFyY2ggc2VydmljZVxyXG4gKiBAcGFyYW0ge29iamVjdH1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnF1ZXJ5IC0gcXVlcnkgdGhhdCBpcyBwYXNzZWQgdG8gc2VhcmNoIHNlcnZpY2UsIGV4IFwiJ1wiICsgJ0J1cmVhdT1cIicrIGRpdmlzaW9uTmFtZSArICdcIlxcJydcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5zb3VyY2VJZF0gLSBzb3VyY2UgaWQgZm9yIHRoZSBzZWFyY2ggc2VydmljZSB0byB1c2UsIGRlZmF1bHRzIHRvIHRoZSBvdXQgb2YgdGhlIGJveCBwZW9wbGUgc291cmNlIGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzLnByb3BlcnRpZXMgLSBzcGVjaWZ5IHdoaWNoIHByb3BlcnRpZXMgeW91IHdhbnQgYmFjayBmcm9tIHRoZSByZXF1ZXN0XHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4UGVvcGxlU2VhcmNoKHByb3BzKSB7XHJcblxyXG5cdHZhciBhbGxSZXN1bHRzID0gcHJvcHMuY3VycmVudFJlc3VsdHMgfHwgW10sXHJcblx0XHRzZXJ2ZXJRdWVyeURhdGEgPSB7XHJcblx0XHRcdHN0YXJ0cm93OiAwLFxyXG5cdFx0XHRyb3dsaW1pdDogNTAwLFxyXG5cdFx0XHRUcmltRHVwbGljYXRlczogZmFsc2UsXHJcblx0XHRcdHNlbGVjdHByb3BlcnRpZXM6IGAnJHtwcm9wcy5wcm9wZXJ0aWVzLmpvaW4oJywnKX0nYFxyXG5cdFx0fTtcclxuXHJcblx0c2VydmVyUXVlcnlEYXRhLnN0YXJ0cm93ID0gcHJvcHMuc3RhcnRyb3cgPyBwcm9wcy5zdGFydHJvdyA6IDA7XHJcblx0c2VydmVyUXVlcnlEYXRhLnNvdXJjZUlkID0gcHJvcHMuc291cmNlSWQgPyBgJyR7cHJvcHMuc291cmNlSWR9J2AgOiBcIidiMDlhNzk5MC0wNWVhLTRhZjktODFlZi1lZGZhYjE2YzRlMzEnXCI7XHJcblxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3NlYXJjaC9xdWVyeVwiO1xyXG5cdHNlcnZlclF1ZXJ5RGF0YS5xdWVyeXRleHQgPSBgJyR7cHJvcHMucXVlcnl9J2A7XHJcblxyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdHVybDogcHJvcHMuY29uZmlndXJlZFVybCxcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiB7J0FjY2VwdCc6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhfSxcclxuXHRcdHBhcmFtczogc2VydmVyUXVlcnlEYXRhXHJcblx0fSkudGhlbihmdW5jdGlvbihlbXBEYXRhKSB7XHJcblxyXG5cdFx0dmFyIHJlbGV2YW50UmVzdWx0cyA9IGVtcERhdGEuZGF0YS5QcmltYXJ5UXVlcnlSZXN1bHQuUmVsZXZhbnRSZXN1bHRzO1xyXG5cclxuXHRcdGFsbFJlc3VsdHMgPSBhbGxSZXN1bHRzLmNvbmNhdChyZWxldmFudFJlc3VsdHMuVGFibGUuUm93cyk7XHJcblx0XHRwcm9wcy5jdXJyZW50UmVzdWx0cyA9IGFsbFJlc3VsdHM7XHJcblxyXG5cdFx0aWYgKHJlbGV2YW50UmVzdWx0cy5Ub3RhbFJvd3MgPiAoc2VydmVyUXVlcnlEYXRhLnN0YXJ0cm93ICsgcmVsZXZhbnRSZXN1bHRzLlJvd0NvdW50KSkge1xyXG5cdFx0XHRwcm9wcy5zdGFydHJvdyA9IHNlcnZlclF1ZXJ5RGF0YS5zdGFydHJvdyArIHJlbGV2YW50UmVzdWx0cy5Sb3dDb3VudDtcclxuXHRcdFx0cmV0dXJuIGFqYXhQZW9wbGVTZWFyY2gocHJvcHMpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHByb3BzLmN1cnJlbnRSZXN1bHRzO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdXNlciBpcyBpbiB0aGUgc2l0ZSBjb2xsZWN0aW9uIHVzZXIgdGFibGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5lbWFpbCAtIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdG8gY2hlY2tcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4RW5zdXJlVXNlcihwcm9wcykge1xyXG5cdFxyXG5cdHJldHVybiBhamF4R2V0Q29udGV4dChwcm9wcylcclxuXHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcclxuXHRcdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3dlYlwiO1xyXG5cdFx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cdFx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgL2Vuc3VyZVVzZXIoJyR7ZW5jb2RlQWNjb3VudE5hbWUocHJvcHMuZW1haWwpfScpYDtcclxuXHJcblx0XHRyZXR1cm4gYXhpb3MoeyAgICAgICBcclxuXHRcdFx0dXJsOiBwcm9wcy5jb25maWd1cmVkVXJsLCAgIFxyXG5cdFx0XHRtZXRob2Q6IFwiUE9TVFwiLCAgXHJcblx0XHRcdGNvbnRlbnRUeXBlOiBhamF4SGVscGVycy52ZXJib3NlTWV0YSxcclxuXHRcdFx0aGVhZGVyczogeyBcclxuXHRcdFx0XHRcIkFjY2VwdFwiOiBhamF4SGVscGVycy5taW5pbWFsTWV0YSxcclxuXHRcdFx0XHRcIlgtUmVxdWVzdERpZ2VzdFwiOiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdXNlciBpbmZvIGZyb20gdGhlIHNpdGUgY29sbGVjdGlvbiB1c2VyIHRhYmxlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRvIHJldHJpZXZlXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheEdldFNpdGVVc2VySW5mb0J5RW1haWwocHJvcHMpIHtcclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViL3NpdGV1c2Vyc1wiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgPyRmaWx0ZXI9TG9naW5OYW1lIGVxICcke2VuY29kZUFjY291bnROYW1lKHByb3BzLmVtYWlsKX0nYDtcclxuXHJcblx0cmV0dXJuIGFqYXhHZXREYXRhKHByb3BzLmNvbmZpZ3VyZWRVcmwpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgcmVxdWVzdCB0aGF0IHVzZXMgQ0FNTCB0byBmaWx0ZXIgcmVzdWx0c1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnF1ZXJ5IC0gQ0FNTCBxdWVyeVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0SXRlbXNCeUNhbWwocHJvcHMpIHtcclxuXHJcblx0cmV0dXJuIGFqYXhHZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdGxldCBxdWVyeSA9IHsgXCJxdWVyeVwiIDpcclxuXHRcdFx0e1wiX19tZXRhZGF0YVwiOiBcclxuXHRcdFx0eyBcInR5cGVcIjogXCJTUC5DYW1sUXVlcnlcIiB9LFxyXG5cdFx0XHRcdFwiVmlld1htbFwiOiBwcm9wcy5jYW1sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRoZWFkZXJkYXRhID0ge1xyXG5cdFx0XHQnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGEsXHJcblx0XHRcdCdDb250ZW50LVR5cGUnOiBhamF4SGVscGVycy52ZXJib3NlTWV0YSxcclxuXHRcdFx0J1gtUmVxdWVzdERpZ2VzdCc6IHJlc3BvbnNlLmRhdGEuRm9ybURpZ2VzdFZhbHVlXHJcblx0XHR9O1xyXG5cclxuXHRcdGFqYXhIZWxwZXJzLmxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSAnL2dldGl0ZW1zJztcclxuXHJcblx0XHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0XHR1cmw6IHByb3BzLmxpc3RVcmwsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeShxdWVyeSksXHJcblx0XHRcdGhlYWRlcnM6IGhlYWRlcmRhdGFcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufVxyXG4vKipcclxuICogR2V0IGEgdXNlcnMgcGVybWlzc2lvbnMgdG8gYSBzaXRlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBvZiB0aGUgdXNlciB0byBnZXQgcGVybWlzc2lvbnMgZm9yXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPHN0cmluZ1tdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0VXNlclNpdGVQZXJtaXNzaW9ucyhwcm9wcykge1xyXG5cclxuXHRsZXQgZW5jb2RlZEVtYWlsID0gZW5jb2RlQWNjb3VudE5hbWUocHJvcHMuZW1haWwpO1xyXG5cclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS93ZWJcIjtcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdHByb3BzLnBlcm1zTGluayA9IGAke3Byb3BzLmNvbmZpZ3VyZWRVcmx9L2dldHVzZXJlZmZlY3RpdmVwZXJtaXNzaW9ucyhAdXNlcik/QHVzZXI9JyR7ZW5jb2RlZEVtYWlsfSdgO1xyXG5cdHJldHVybiBhamF4R2V0VXNlclBlcm1pc3Npb25zKHByb3BzKTtcclxufVxyXG4vKipcclxuICogR2V0IGEgdXNlcnMgcGVybWlzc2lvbnMgdG8gYSBsaXN0IG9yIGxpYnJhcnlcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBvZiB0aGUgdXNlciB0byBjaGVjayBwZXJtaXNzaW9uIG9mXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPHN0aW5nW10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRVc2VyTGlzdFBlcm1pc3Npb25zKHByb3BzKSB7XHJcblxyXG5cdGxldCBlbmNvZGVkRW1haWwgPSBlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCk7XHJcblxyXG5cdGFqYXhIZWxwZXJzLmxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRwcm9wcy5wZXJtc0xpbmsgPSBgJHtwcm9wcy5saXN0VXJsfS9nZXR1c2VyZWZmZWN0aXZlcGVybWlzc2lvbnMoQHVzZXIpP0B1c2VyPScke2VuY29kZWRFbWFpbH0nYDtcclxuXHRyZXR1cm4gYWpheEdldFVzZXJQZXJtaXNzaW9ucyhwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdGhlIFNoYXJlUG9pbnQgZ3JvdXBzIHRoYXQgYSB1c2VyIGhhcyBiZWVuIGFkZGVkIHRvLCBpZGVudGlmeSB0aGUgdXNlciBieSBwYXNzaW5nIHRoZSBpZCBudW1iZXIgb2YgdGhlIHVzZXIgZm9yIHRoZSBzaXRlLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnVzZXJJZCAtIHVzZXJzIHNpdGUgaWQgbnVtYmVyXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPHN0aW5nW10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRDdXJyZW50VXNlckdyb3Vwcyhwcm9wcykge1xyXG5cclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiL19hcGkvd2ViXCI7XHJcblx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAvR2V0VXNlcmJ5SWQoJHtwcm9wcy51c2VySWR9KS9Hcm91cHNgO1xyXG5cclxuXHRyZXR1cm4gYWpheEdldERhdGEocHJvcHMuY29uZmlndXJlZFVybClcclxuXHQudGhlbihmdW5jdGlvbihncm91cHMpe1xyXG5cclxuXHRcdHZhciBncm91cEFycmF5ID0gW107XHJcblxyXG5cdFx0Z3JvdXBzLmRhdGEudmFsdWUuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGdyb3VwQXJyYXkucHVzaChpdGVtLlRpdGxlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBncm91cEFycmF5O1xyXG5cclxuXHR9KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNpbmdsZSBpdGVtIGluIGEgbGlzdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdE5hbWVdIC0gc2VydmVyIG5hbWUgZm9yIHRoZSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy5pbmZvVG9TZXJ2ZXIgLSBvYmplY3Qgd2hvcyBrZXkgaXMgdGhlIGNvbHVtbiBuYW1lIGFuZCB0aGUgdmFsdWUgaXMgd2hhdCB5b3Ugd2FudCBzdG9yZWQgaW4gdGhhdCBjb2x1bW5cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4Q3JlYXRlSXRlbShwcm9wcykge1xyXG5cdHJldHVybiBub25EZWxldGVQcm9jZXNzKHByb3BzKTtcclxufVxyXG4vKipcclxuICogVXBkYXRlcyBhIHNpbmdsZSBpdGVtIGluIGEgbGlzdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdE5hbWVdIC0gc2VydmVyIG5hbWUgZm9yIHRoZSBsaXN0XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZXRhZ10gLSBldGFnIG9mIHRoZSBpdGVtIHRvIHVwZGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuaXRlbUlkIC0gaWQgb2YgdGhlIGl0ZW0gdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy5pbmZvVG9TZXJ2ZXIgLSBvYmplY3Qgd2hvcyBrZXkgaXMgdGhlIGNvbHVtbiBuYW1lIGFuZCB0aGUgdmFsdWUgaXMgd2hhdCB5b3Ugd2FudCBzdG9yZWQgaW4gdGhhdCBjb2x1bW5cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4VXBkYXRlSXRlbShwcm9wcykge1xyXG5cclxuXHRwcm9wcy5oZWFkZXJEYXRhID0ge1xyXG5cdFx0XCJYLUhUVFAtTWV0aG9kXCI6IFwiTUVSR0VcIixcclxuXHRcdFwiSWYtTWF0Y2hcIjogcHJvcHMuZXRhZyB8fCBcIipcIlxyXG5cdH07XHJcblx0cmV0dXJuIG5vbkRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBEZWxldGVzIGEgc2luZ2xlIGl0ZW0gZnJvbSBhIGxpc3Qgb3IgbGlicmFyeVxyXG4gKiBiZSB3YXJuZWQgaWYgeW91IHVzZSB0aGlzIGZ1bmN0aW9uLCB0aGUgaXRlbSB5b3UgZGVsZXRlIHdpbGwgYmUgZ29uZSBhbmQgdW5yZWNvdmVyYWJsZSEhISFcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmV0YWddIC0gZXRhZyBvZiB0aGUgaXRlbSB0byB1cGRhdGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLml0ZW1JZCAtIGlkIG9mIHRoZSBpdGVtIHRvIGRlbGV0ZVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhEZWxldGVJdGVtKHByb3BzKSB7XHJcblx0Ly90b2RvIHRyeSB0byBjb21wbGV0ZSB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgYW4gZXRhZ1xyXG5cdHByb3BzLmhlYWRlckRhdGEgPSB7XHJcblx0XHQnWC1IVFRQLU1ldGhvZCcgOiAnREVMRVRFJyxcclxuXHRcdFwiSWYtTWF0Y2hcIjogcHJvcHMuZXRhZyB8fCBcIipcIlxyXG5cdH07XHJcblx0cmV0dXJuIGRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBTZW5kcyBhIHNpbmdsZSBpdGVtIHRvIHRoZSByZWN5Y2xlIGJpbiBvZiB0aGUgc2l0ZSBjb2xsZWN0aW9uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLml0ZW1JZCAtIGlkIG9mIHRoZSBpdGVtIHRvIHJlY3ljbGVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4UmVjeWNsZUl0ZW0ocHJvcHMpIHtcclxuXHJcblx0cHJvcHMudXJsTW9kaWZpZXIgPSBcIi9yZWN5Y2xlXCI7XHJcblx0cmV0dXJuIGRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBwcm9maWxlIGluZm9ybWF0aW9uIGZyb20gdGhlIHByb2ZpbGUgc2VydmljZVxyXG4gKiBpZiBlbWFpbCBpcyBwYXNzZWQgdGhlbiB0aGF0IHdpbGwgYmUgdGhlIHByb2ZpbGUgZGF0YSB5b3UgZ2V0IGJhY2tcclxuICogaWYgZW1haWwgaXMgbm90IHBhc3NlZCB5b3UgZ2V0IGN1cnJlbnQgdXNlciBwcm9maWxlIGRhdGEgYmFja1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmVtYWlsXSAtIGVtYWlsIG9mIHRoZSB1c2VyIHlvdSB3YW50IHByb2ZpbGUgZGF0YSBmb3IgXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyUHJvZmlsZURhdGEocHJvcHMgPSB7fSkge1xyXG5cclxuXHRsZXQgYWRkb24gPSBudWxsO1xyXG5cclxuXHRpZihwcm9wcy5lbWFpbCkge1xyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSAnX2FwaS9zcC51c2VycHJvZmlsZXMucGVvcGxlbWFuYWdlcic7XHJcblx0XHRhZGRvbiA9IGAvZ2V0cHJvcGVydGllc2ZvcihAdik/QHY9JyR7ZW5jb2RlQWNjb3VudE5hbWUocHJvcHMuZW1haWwpfScmYDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly91cmwgZm9yIGdldCBjdXJyZW50IHVzZXJcclxuXHRcdHByb3BzLmVuZFBvaW50ID0gJ19hcGkvU1AuVXNlclByb2ZpbGVzLlBlb3BsZU1hbmFnZXIvR2V0TXlQcm9wZXJ0aWVzJztcclxuXHRcdGFkZG9uID0gJz8nO1xyXG5cdH1cclxuXHRcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgJHthZGRvbn0kc2VsZWN0PVVzZXJQcm9maWxlUHJvcGVydGllc2A7XHJcblx0XHJcblx0cmV0dXJuIGFqYXhHZXREYXRhKHByb3BzLmNvbmZpZ3VyZWRVcmwpXHJcblx0LnRoZW4oZnVuY3Rpb24odXNlckRhdGEpeyAvL3N1Y2Nlc3NcclxuXHRcdGlmICh1c2VyRGF0YS5kYXRhWydvZGF0YS5udWxsJ10gPT09IHRydWUpIHtcclxuXHRcdFx0cmV0dXJuIFtdO1xyXG5cdFx0fSBlbHNle1xyXG5cdFx0XHRyZXR1cm4gdXNlckRhdGEuZGF0YS5Vc2VyUHJvZmlsZVByb3BlcnRpZXM7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIEdldCB0aGUgY29sdW1ucyBvZiBhIGxpc3Qgb3IgbGlicmFyeVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Byb3BzLmFsbERhdGFdIC0gaW5jbHVkZSByZWFkIG9ubHkgYW5kIGhpZGRlbiBjb2x1bW5zXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdENvbHVtbnMocHJvcHMpIHtcclxuXHJcblx0aWYoIXByb3BzLmFsbERhdGEpIHtcclxuXHRcdHByb3BzLmFsbERhdGEgPSBmYWxzZTtcclxuXHR9XHJcblx0YWpheEhlbHBlcnMubGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblx0cHJvcHMubGlzdFVybCArPSBgL2ZpZWxkcz8kZmlsdGVyPUhpZGRlbiBlcSAke3Byb3BzLmFsbERhdGF9IGFuZCBSZWFkT25seUZpZWxkIGVxICR7cHJvcHMuYWxsRGF0YX1gO1xyXG5cclxuXHRyZXR1cm4gYWpheEdldERhdGEocHJvcHMubGlzdFVybCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGlicmFyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwiLypcclxuZVxyXG4qL1xyXG5pbXBvcnQge2dldFVSTE9yaWdpbn0gZnJvbSAncGQtc3B1dGlsJztcclxuZXhwb3J0IGNvbnN0IG1pbmltYWxNZXRhID0gXCJhcHBsaWNhdGlvbi9qc29uO29kYXRhPW1pbmltYWxtZXRhZGF0YVwiO1xyXG5leHBvcnQgY29uc3QgdmVyYm9zZU1ldGEgPSBcImFwcGxpY2F0aW9uL2pzb247b2RhdGE9dmVyYm9zZVwiO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlbGlzdGl0ZW10eXBlID0gZnVuY3Rpb24obGlzdE5hbWUpIHtcclxuXHRyZXR1cm4gJ1NQLkRhdGEuJyArIFxyXG5cdFx0bGlzdE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBcclxuXHRcdGxpc3ROYW1lLnNsaWNlKDEpICsgXHJcblx0XHQnTGlzdEl0ZW0nO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ3VpZEhleENvZGVzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJ107XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHVUlEID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIHJlc3VsdCA9ICcnO1xyXG5cclxuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgMzI7IGluZGV4KyspIHtcclxuXHRcdHZhciB2YWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KTtcclxuXHJcblx0XHRzd2l0Y2ggKGluZGV4KSB7XHJcblx0XHRjYXNlIDg6XHJcblx0XHRcdHJlc3VsdCArPSAnLSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxMjpcclxuXHRcdFx0dmFsdWUgPSA0O1xyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTY6XHJcblx0XHRcdHZhbHVlID0gdmFsdWUgJiAzIHwgODtcclxuXHRcdFx0cmVzdWx0ICs9ICctJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDIwOlxyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJlc3VsdCArPSBndWlkSGV4Q29kZXNbdmFsdWVdO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnQgY29uc3QgY2hlY2tVcmxPcmlnaW4gPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRwcm9wcy5jb25maWd1cmVkVXJsID0gcHJvcHMub3JpZ2luID8gcHJvcHMub3JpZ2luIDogZ2V0VVJMT3JpZ2luKCk7XHJcblxyXG5cdGlmKHByb3BzLnVybCkge1xyXG5cdFx0cHJvcHMuY29uZmlndXJlZFVybCArPSBwcm9wcy51cmw7XHJcblx0fVxyXG5cclxuXHRpZihwcm9wcy5lbmRQb2ludCkge1xyXG5cdFx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgLyR7cHJvcHMuZW5kUG9pbnR9YDtcclxuXHR9XHJcblx0cmV0dXJuIHByb3BzO1xyXG5cclxuXHQvL2ZlbGwgdGhyb3VnaCBzbyB0aGUgaW5jb3JyZWN0IGRhdGF0eXBlIHdhcyBwYXNzZWQgdG8gZnVuY3Rpb24sIGVycm9yXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsaXN0VXJsQ29uZmlndXJlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcblx0aWYgKCFwcm9wcy51cmwgfHwgcHJvcHMubGlzdFVybCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblxyXG5cdGNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0aWYgKHByb3BzLmxpc3RHVUlEKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsID0gcHJvcHMuY29uZmlndXJlZFVybCArPSBcIi9saXN0cyhndWlkJ1wiKyBwcm9wcy5saXN0R1VJRCArXCInKVwiO1xyXG5cdH0gZWxzZSBpZiAocHJvcHMubGlzdFRpdGxlKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsID0gcHJvcHMuY29uZmlndXJlZFVybCArPSBcIi9saXN0cy9nZXRieXRpdGxlKCdcIisgcHJvcHMubGlzdFRpdGxlICtcIicpXCI7XHJcblx0fVxyXG5cdHJldHVybiBwcm9wcztcclxufTtcclxuZXhwb3J0IGNvbnN0IGxpc3RJdGVtVXJsQ29uZmlndXJlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHQvL2ZvciBjcmVhdGUsIHVwZGF0ZSwgZGVsZXRlXHJcblx0dmFyIGl0ZW0gPSBwcm9wcy5pdGVtSWQgfHwgJyc7XHJcblxyXG5cdGlmIChwcm9wcy5saXN0SXRlbVVybCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdHByb3BzLmxpc3RJdGVtVXJsID0gcHJvcHMubGlzdFVybCArPSBcIi9pdGVtcyhcIisgaXRlbSArXCIpXCI7XHJcblx0cmV0dXJuIHByb3BzO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcGFyc2VCYXNlUGVybWlzc2lvbnMgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdHZhciBwZXJtaXNzaW9ucyA9IG5ldyBTUC5CYXNlUGVybWlzc2lvbnMoKTtcclxuXHRwZXJtaXNzaW9ucy5pbml0UHJvcGVydGllc0Zyb21Kc29uKHZhbHVlKTtcclxuXHR2YXIgcGVybUxldmVscyA9IFtdO1xyXG5cdGZvcih2YXIgcGVybUxldmVsTmFtZSBpbiBTUC5QZXJtaXNzaW9uS2luZC5wcm90b3R5cGUpIHtcclxuXHRcdGlmIChTUC5QZXJtaXNzaW9uS2luZC5oYXNPd25Qcm9wZXJ0eShwZXJtTGV2ZWxOYW1lKSkge1xyXG5cdFx0XHR2YXIgcGVybUxldmVsID0gU1AuUGVybWlzc2lvbktpbmQucGFyc2UocGVybUxldmVsTmFtZSk7XHJcblx0XHRcdGlmKHBlcm1pc3Npb25zLmhhcyhwZXJtTGV2ZWwpKXtcclxuXHRcdFx0XHRcdHBlcm1MZXZlbHMucHVzaChwZXJtTGV2ZWxOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSAgICAgXHJcblx0fVxyXG5cdHJldHVybiBwZXJtTGV2ZWxzOyAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlR2V0QWxsVXJsID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcblx0aWYocHJvcHMubGlzdFVybCkge1xyXG5cdFx0Ly9hbHJlYWR5IHNldHVwLCBnZXQgb3V0XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGlmKCFwcm9wcy5lbmRQb2ludCkge1xyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblx0fVxyXG5cdGxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRwcm9wcy5saXN0VXJsICs9IFwiL2l0ZW1zP1wiO1xyXG5cclxuXHRpZihwcm9wcy5zZWxlY3QpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRzZWxlY3Q9JHtwcm9wcy5zZWxlY3R9JmA7XHJcblx0fVxyXG5cdGlmKHByb3BzLnRvcCkge1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSBgJHRvcD0ke3Byb3BzLnRvcH0mYDtcclxuXHR9XHJcblx0aWYocHJvcHMuZXhwYW5kKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9IGAkZXhwYW5kPSR7cHJvcHMuZXhwYW5kfSZgO1xyXG5cdH1cclxuXHRpZihwcm9wcy5maWx0ZXIpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRmaWx0ZXI9JHtwcm9wcy5maWx0ZXJ9JmA7XHJcblx0fVxyXG5cdGlmKHByb3BzLm9yZGVyQnkpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRvcmRlcmJ5PSR7cHJvcHMub3JkZXJCeX0mYDtcclxuXHR9XHJcblxyXG5cdGlmKC9cXCQkLy50ZXN0KHByb3BzLmxpc3RVcmwpKSB7XHJcblx0XHQvL2lmICQgaXMgdGhlIGxhc3QgY2hhcmFjdGVyIHRoZW4gZ2V0IHJpZCBvZiBpdFxyXG5cdFx0cHJvcHMubGlzdFVybC5zbGljZSgwLC0xKTtcclxuXHR9XHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==