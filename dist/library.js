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

	try {
		if (Promise && Object.assign) {
			//all good move on
		}
	} catch (error) {
		throw new Error("Promise API and Object.assign is not available. Please add a polyfill to continue.");
	}
	try {
		if (__WEBPACK_IMPORTED_MODULE_0_axios__) {
			//all good move on
		}
	} catch (error) {
		throw new Error("axios API is not available. Please add a axios to continue.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkM2RkZjAyYzJlYjVjN2UzMDI2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3B1dGlsXCIsXCJjb21tb25qczJcIjpcInBkLXNwdXRpbFwiLFwiYW1kXCI6XCJwZC1zcHV0aWxcIixcInJvb3RcIjpcInBkc3B1dGlsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyJdLCJuYW1lcyI6WyJiaW5kIiwicmVxdWlyZSIsImlzQnVmZmVyIiwidG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpc0FycmF5IiwidmFsIiwiY2FsbCIsImlzQXJyYXlCdWZmZXIiLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc0FycmF5QnVmZmVyVmlldyIsInJlc3VsdCIsIkFycmF5QnVmZmVyIiwiaXNWaWV3IiwiYnVmZmVyIiwiaXNTdHJpbmciLCJpc051bWJlciIsImlzVW5kZWZpbmVkIiwiaXNPYmplY3QiLCJpc0RhdGUiLCJpc0ZpbGUiLCJpc0Jsb2IiLCJpc0Z1bmN0aW9uIiwiaXNTdHJlYW0iLCJwaXBlIiwiaXNVUkxTZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0cmltIiwic3RyIiwicmVwbGFjZSIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwibmF2aWdhdG9yIiwicHJvZHVjdCIsIndpbmRvdyIsImRvY3VtZW50IiwiZm9yRWFjaCIsIm9iaiIsImZuIiwiaSIsImwiLCJsZW5ndGgiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm1lcmdlIiwiYXNzaWduVmFsdWUiLCJhcmd1bWVudHMiLCJleHRlbmQiLCJhIiwiYiIsInRoaXNBcmciLCJtb2R1bGUiLCJleHBvcnRzIiwidXRpbHMiLCJub3JtYWxpemVIZWFkZXJOYW1lIiwiREVGQVVMVF9DT05URU5UX1RZUEUiLCJzZXRDb250ZW50VHlwZUlmVW5zZXQiLCJoZWFkZXJzIiwidmFsdWUiLCJnZXREZWZhdWx0QWRhcHRlciIsImFkYXB0ZXIiLCJYTUxIdHRwUmVxdWVzdCIsInByb2Nlc3MiLCJkZWZhdWx0cyIsInRyYW5zZm9ybVJlcXVlc3QiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRyYW5zZm9ybVJlc3BvbnNlIiwicGFyc2UiLCJlIiwidGltZW91dCIsInhzcmZDb29raWVOYW1lIiwieHNyZkhlYWRlck5hbWUiLCJtYXhDb250ZW50TGVuZ3RoIiwidmFsaWRhdGVTdGF0dXMiLCJzdGF0dXMiLCJjb21tb24iLCJmb3JFYWNoTWV0aG9kTm9EYXRhIiwibWV0aG9kIiwiZm9yRWFjaE1ldGhvZFdpdGhEYXRhIiwid3JhcCIsImFyZ3MiLCJBcnJheSIsImFwcGx5IiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsImxlbiIsInJ1biIsIm5leHRUaWNrIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwic2V0dGxlIiwiYnVpbGRVUkwiLCJwYXJzZUhlYWRlcnMiLCJpc1VSTFNhbWVPcmlnaW4iLCJjcmVhdGVFcnJvciIsImJ0b2EiLCJ4aHJBZGFwdGVyIiwiY29uZmlnIiwiUHJvbWlzZSIsImRpc3BhdGNoWGhyUmVxdWVzdCIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwicmVxdWVzdCIsImxvYWRFdmVudCIsInhEb21haW4iLCJOT0RFX0VOViIsIlhEb21haW5SZXF1ZXN0IiwidXJsIiwib25wcm9ncmVzcyIsImhhbmRsZVByb2dyZXNzIiwib250aW1lb3V0IiwiaGFuZGxlVGltZW91dCIsImF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiQXV0aG9yaXphdGlvbiIsIm9wZW4iLCJ0b1VwcGVyQ2FzZSIsInBhcmFtcyIsInBhcmFtc1NlcmlhbGl6ZXIiLCJoYW5kbGVMb2FkIiwicmVhZHlTdGF0ZSIsInJlc3BvbnNlVVJMIiwiaW5kZXhPZiIsInJlc3BvbnNlSGVhZGVycyIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInJlc3BvbnNlRGF0YSIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVGV4dCIsInJlc3BvbnNlIiwic3RhdHVzVGV4dCIsIm9uZXJyb3IiLCJoYW5kbGVFcnJvciIsImNvb2tpZXMiLCJ4c3JmVmFsdWUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZWFkIiwidW5kZWZpbmVkIiwic2V0UmVxdWVzdEhlYWRlciIsInRvTG93ZXJDYXNlIiwib25Eb3dubG9hZFByb2dyZXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJ1cGxvYWQiLCJjYW5jZWxUb2tlbiIsInByb21pc2UiLCJ0aGVuIiwib25DYW5jZWxlZCIsImNhbmNlbCIsImFib3J0Iiwic2VuZCIsImVuaGFuY2VFcnJvciIsIm1lc3NhZ2UiLCJjb2RlIiwiZXJyb3IiLCJpc0NhbmNlbCIsIl9fQ0FOQ0VMX18iLCJDYW5jZWwiLCJkZXBUZXN0IiwiYXNzaWduIiwiYWpheEdldFVzZXJQZXJtaXNzaW9ucyIsInByb3BzIiwiYWpheEdldERhdGEiLCJwZXJtc0xpbmsiLCJnZXRFbnRpdHlUeXBlIiwiZW50aXR5RGF0YSIsImxpc3ROYW1lIiwiYWpheEdldExpc3RJbmZvIiwiTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWUiLCJub25EZWxldGVQcm9jZXNzIiwiaGVhZGVyRGF0YSIsInR5cGUiLCJpdGVtIiwiaW5mb1RvU2VydmVyIiwiYWpheEdldENvbnRleHQiLCJjb250ZXh0IiwiRm9ybURpZ2VzdFZhbHVlIiwiQWNjZXB0IiwiYWpheEhlbHBlcnMiLCJheGlvcyIsImxpc3RJdGVtVXJsIiwiZGVsZXRlUHJvY2VzcyIsInVybE1vZGlmaWVyIiwiZW5kUG9pbnQiLCJjb25maWd1cmVkVXJsIiwiYWpheEdldEFsbExpc3RSZXN1bHRzIiwibGlzdEdVSUQiLCJsaXN0VGl0bGUiLCJsaXN0VXJsIiwiY3VycmVudFJlc3VsdHMiLCJhbGxSZXN1bHRzIiwiYWpheEdldEJhdGNoIiwiYXJyYXlPZlVybHMiLCJiYXRjaEdVSUQiLCJiYXRjaEJvZHkiLCJiYXRjaEhlYWRlciIsImJhdGNoQ29udGVudHMiLCJqb2luIiwicGFyc2VkQXJyYXkiLCJyZXNwb25zZVRvQXJyYXkiLCJzcGxpdCIsImN1cnJlbnRMaW5lIiwiY2hhckF0IiwidHJ5UGFyc2VKc29uIiwiYWpheEdldEJhdGNoTWV0ZXJlZCIsInVybHNGb3JUcmlwIiwicGVyVHJpcENvdW50IiwidG90YWxJdGVtcyIsImdldFVybHMiLCJ0b3RhbFBlclRyaXAiLCJudW1iZXJUb1N0YXJ0QXQiLCJvcmlnaW4iLCJhamF4R2V0QmF0Y2hQcm9maWxlcyIsInByb2ZpbGVVcmxzIiwicHJvZmlsZUVtYWlscyIsImdldFVSTE9yaWdpbiIsInVybEZvclNpdGUiLCJlbWFpbCIsImVuY29kZWQiLCJlbmNvZGVBY2NvdW50TmFtZSIsImFqYXhQZW9wbGVTZWFyY2giLCJzZXJ2ZXJRdWVyeURhdGEiLCJzdGFydHJvdyIsInJvd2xpbWl0IiwiVHJpbUR1cGxpY2F0ZXMiLCJzZWxlY3Rwcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInNvdXJjZUlkIiwicXVlcnl0ZXh0IiwicXVlcnkiLCJlbXBEYXRhIiwicmVsZXZhbnRSZXN1bHRzIiwiUHJpbWFyeVF1ZXJ5UmVzdWx0IiwiUmVsZXZhbnRSZXN1bHRzIiwiVGFibGUiLCJSb3dzIiwiVG90YWxSb3dzIiwiUm93Q291bnQiLCJhamF4RW5zdXJlVXNlciIsImNvbnRlbnRUeXBlIiwiYWpheEdldFNpdGVVc2VySW5mb0J5RW1haWwiLCJhamF4R2V0SXRlbXNCeUNhbWwiLCJjYW1sIiwiaGVhZGVyZGF0YSIsImFqYXhHZXRVc2VyU2l0ZVBlcm1pc3Npb25zIiwiZW5jb2RlZEVtYWlsIiwiYWpheEdldFVzZXJMaXN0UGVybWlzc2lvbnMiLCJhamF4R2V0Q3VycmVudFVzZXJHcm91cHMiLCJ1c2VySWQiLCJncm91cHMiLCJncm91cEFycmF5IiwiVGl0bGUiLCJhamF4Q3JlYXRlSXRlbSIsImFqYXhVcGRhdGVJdGVtIiwiZXRhZyIsImFqYXhEZWxldGVJdGVtIiwiYWpheFJlY3ljbGVJdGVtIiwidXNlclByb2ZpbGVEYXRhIiwiYWRkb24iLCJ1c2VyRGF0YSIsIlVzZXJQcm9maWxlUHJvcGVydGllcyIsImdldExpc3RDb2x1bW5zIiwiYWxsRGF0YSIsIkF4aW9zIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJpbnN0YW5jZUNvbmZpZyIsIkNhbmNlbFRva2VuIiwiYWxsIiwicHJvbWlzZXMiLCJzcHJlYWQiLCJkZWZhdWx0IiwiaXNTbG93QnVmZmVyIiwiX2lzQnVmZmVyIiwiY29uc3RydWN0b3IiLCJyZWFkRmxvYXRMRSIsInNsaWNlIiwiSW50ZXJjZXB0b3JNYW5hZ2VyIiwiZGlzcGF0Y2hSZXF1ZXN0IiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwiaW50ZXJjZXB0b3JzIiwiYmFzZVVSTCIsImNoYWluIiwidW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInVuc2hpZnQiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsInNoaWZ0Iiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwicGFyc2VWYWx1ZSIsInYiLCJ0b0lTT1N0cmluZyIsInBhcnNlZCIsInBhcnNlciIsImxpbmUiLCJzdWJzdHIiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJtc2llIiwidGVzdCIsInVzZXJBZ2VudCIsInVybFBhcnNpbmdOb2RlIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdpblVSTCIsInJlc29sdmVVUkwiLCJocmVmIiwic2V0QXR0cmlidXRlIiwicHJvdG9jb2wiLCJob3N0Iiwic2VhcmNoIiwiaGFzaCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJyZXF1ZXN0VVJMIiwibm9uU3RhbmRhcmRCcm93c2VyRW52IiwiY2hhcnMiLCJFIiwiaW5wdXQiLCJTdHJpbmciLCJvdXRwdXQiLCJibG9jayIsImNoYXJDb2RlIiwiaWR4IiwibWFwIiwiY2hhckNvZGVBdCIsIndyaXRlIiwiZXhwaXJlcyIsInBhdGgiLCJkb21haW4iLCJzZWN1cmUiLCJjb29raWUiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJtYXRjaCIsIlJlZ0V4cCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlbW92ZSIsIm5vdyIsImhhbmRsZXJzIiwidXNlIiwiZWplY3QiLCJpZCIsImZvckVhY2hIYW5kbGVyIiwiaCIsInRyYW5zZm9ybURhdGEiLCJ0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkIiwidGhyb3dJZlJlcXVlc3RlZCIsImNsZWFuSGVhZGVyQ29uZmlnIiwib25BZGFwdGVyUmVzb2x1dGlvbiIsIm9uQWRhcHRlclJlamVjdGlvbiIsInJlYXNvbiIsImZucyIsInRyYW5zZm9ybSIsInJlbGF0aXZlVVJMIiwiZXhlY3V0b3IiLCJUeXBlRXJyb3IiLCJyZXNvbHZlUHJvbWlzZSIsInByb21pc2VFeGVjdXRvciIsInRva2VuIiwic291cmNlIiwiYyIsImNhbGxiYWNrIiwiYXJyIiwibWluaW1hbE1ldGEiLCJ2ZXJib3NlTWV0YSIsImNyZWF0ZWxpc3RpdGVtdHlwZSIsImd1aWRIZXhDb2RlcyIsImNyZWF0ZUdVSUQiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNoZWNrVXJsT3JpZ2luIiwibGlzdFVybENvbmZpZ3VyZSIsImxpc3RJdGVtVXJsQ29uZmlndXJlIiwiaXRlbUlkIiwicGFyc2VCYXNlUGVybWlzc2lvbnMiLCJwZXJtaXNzaW9ucyIsIlNQIiwiQmFzZVBlcm1pc3Npb25zIiwiaW5pdFByb3BlcnRpZXNGcm9tSnNvbiIsInBlcm1MZXZlbHMiLCJwZXJtTGV2ZWxOYW1lIiwiUGVybWlzc2lvbktpbmQiLCJwZXJtTGV2ZWwiLCJoYXMiLCJjcmVhdGVHZXRBbGxVcmwiLCJzZWxlY3QiLCJ0b3AiLCJleHBhbmQiLCJmaWx0ZXIiLCJvcmRlckJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7OztBQUVBLElBQUlBLE9BQU8sbUJBQUFDLENBQVEsQ0FBUixDQUFYO0FBQ0EsSUFBSUMsV0FBVyxtQkFBQUQsQ0FBUSxFQUFSLENBQWY7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSUUsV0FBV0MsT0FBT0MsU0FBUCxDQUFpQkYsUUFBaEM7O0FBRUE7Ozs7OztBQU1BLFNBQVNHLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ3BCLFNBQU9KLFNBQVNLLElBQVQsQ0FBY0QsR0FBZCxNQUF1QixnQkFBOUI7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsU0FB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OU8sUUFBTTJCLE9BQU4saUJBQTRCM0IsTUFBTThPLE1BQWxDO0FBQ0E7QUFDRCxLQUFHOU8sTUFBTStPLEdBQVQsRUFBYztBQUNiL08sUUFBTTJCLE9BQU4sY0FBeUIzQixNQUFNK08sR0FBL0I7QUFDQTtBQUNELEtBQUcvTyxNQUFNZ1AsTUFBVCxFQUFpQjtBQUNoQmhQLFFBQU0yQixPQUFOLGlCQUE0QjNCLE1BQU1nUCxNQUFsQztBQUNBO0FBQ0QsS0FBR2hQLE1BQU1pUCxNQUFULEVBQWlCO0FBQ2hCalAsUUFBTTJCLE9BQU4saUJBQTRCM0IsTUFBTWlQLE1BQWxDO0FBQ0E7QUFDRCxLQUFHalAsTUFBTWtQLE9BQVQsRUFBa0I7QUFDakJsUCxRQUFNMkIsT0FBTixrQkFBNkIzQixNQUFNa1AsT0FBbkM7QUFDQTs7QUFFRCxLQUFHLE1BQU05RixJQUFOLENBQVdwSixNQUFNMkIsT0FBakIsQ0FBSCxFQUE4QjtBQUM3QjtBQUNBM0IsUUFBTTJCLE9BQU4sQ0FBYzBGLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBQyxDQUF2QjtBQUNBO0FBRUQsQ0FsQ00sQyIsImZpbGUiOiIuL2xpYnJhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJwZC1zcHV0aWxcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicGQtc3B1dGlsXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBkc3BzZXJ2ZXJhamF4XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicGQtc3B1dGlsXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwZHNwc2VydmVyYWpheFwiXSA9IGZhY3Rvcnkocm9vdFtcInBkc3B1dGlsXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQzZGRmMDJjMmViNWM3ZTMwMjYzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmICFpc0FycmF5KG9iaikpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9pc0NhbmNlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3B1dGlsXCIsXCJjb21tb25qczJcIjpcInBkLXNwdXRpbFwiLFwiYW1kXCI6XCJwZC1zcHV0aWxcIixcInJvb3RcIjpcInBkc3B1dGlsXCJ9XG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxyXG5cdHBkLXNwc2VydmVyY29udGFjdHNcclxuXHRyZXF1aXJlcyBiYWJlbCBwb2x5ZmlsbCBmb3Igb2JqZWN0IGFzc2lnbiBhbmQgcHJvbWlzZVxyXG5cdG5lZWRzIGVuY29kZUFjY291bnROYW1lLCBnZXRVUkxPcmlnaW4gZnJvbSBwZC1zcHV0aWxcclxuXHRuZWVkcyBhbGwgb2YgYXhpb3MgLSB3aGVuIHVzaW5nIHRoaXMgbGlicmFyeSB5b3UgZ2V0IHRoZSByZXNwb25zZSBvZiB0aGUgc2VydmVyIGZyb20gZGF0YSBwcm9wZXJ0eSB3aGVuIGEgcGxhaW4gYXhpb3MgcmVzcG9uc2UgaXMgcmV0dXJuZWRcclxuXHRleHBvc2VzIGEgZ2xvYmFsIHBkc3BzZXJ2ZXJhamF4IGlmIHVzZWQgaW4gc2NyaXB0IHRhZyBvZiBicm93c2VyXHJcblx0QG1vZHVsZSBwZC1zcHNlcnZlcmFqYXhcclxuICovXHJcblxyXG5pbXBvcnQgKiBhcyBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCAqIGFzIGFqYXhIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XHJcbmltcG9ydCB7ZW5jb2RlQWNjb3VudE5hbWUsIGdldFVSTE9yaWdpbn0gZnJvbSAncGQtc3B1dGlsJztcclxuXHJcbmNvbnN0IGRlcFRlc3QgPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHR0cnkge1xyXG5cdFx0aWYgKFByb21pc2UgJiYgT2JqZWN0LmFzc2lnbikge1xyXG5cdFx0XHQvL2FsbCBnb29kIG1vdmUgb25cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiUHJvbWlzZSBBUEkgYW5kIE9iamVjdC5hc3NpZ24gaXMgbm90IGF2YWlsYWJsZS4gUGxlYXNlIGFkZCBhIHBvbHlmaWxsIHRvIGNvbnRpbnVlLlwiKTtcclxuXHR9XHJcblx0dHJ5IHtcclxuXHRcdGlmIChheGlvcykge1xyXG5cdFx0XHQvL2FsbCBnb29kIG1vdmUgb25cclxuXHRcdH1cclxuXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiYXhpb3MgQVBJIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBhZGQgYSBheGlvcyB0byBjb250aW51ZS5cIik7XHJcblx0fVxyXG59O1xyXG5kZXBUZXN0KCk7XHJcblxyXG5jb25zdCBhamF4R2V0VXNlclBlcm1pc3Npb25zID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcblx0cmV0dXJuIGFqYXhHZXREYXRhKHByb3BzLnBlcm1zTGluaylcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cmV0dXJuIGFqYXhIZWxwZXJzLnBhcnNlQmFzZVBlcm1pc3Npb25zKHJlc3BvbnNlLmRhdGEpO1xyXG5cdH0pO1xyXG59O1xyXG5jb25zdCBnZXRFbnRpdHlUeXBlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHRcclxuXHR2YXIgZW50aXR5RGF0YTtcclxuXHJcblx0aWYgKHByb3BzLmxpc3ROYW1lKSB7XHJcblx0XHRlbnRpdHlEYXRhID0gYWpheEhlbHBlcnMuY3JlYXRlbGlzdGl0ZW10eXBlKHByb3BzLmxpc3ROYW1lKTtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50aXR5RGF0YSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYWpheEdldExpc3RJbmZvKHByb3BzKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2UuZGF0YS5MaXN0SXRlbUVudGl0eVR5cGVGdWxsTmFtZTtcclxuXHR9KTtcclxufTtcclxuY29uc3Qgbm9uRGVsZXRlUHJvY2VzcyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5oZWFkZXJEYXRhKSB7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhID0ge307XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2V0RW50aXR5VHlwZShwcm9wcylcclxuXHQudGhlbihmdW5jdGlvbih0eXBlKSB7XHJcblx0XHRwcm9wcy5pdGVtID0gT2JqZWN0LmFzc2lnbih7XHJcblx0XHRcdCdfX21ldGFkYXRhJzogeyd0eXBlJzogdHlwZX1cclxuXHRcdH0sIHByb3BzLmluZm9Ub1NlcnZlcik7XHJcblxyXG5cdFx0cmV0dXJuIGFqYXhHZXRDb250ZXh0KHByb3BzKTtcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuXHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhWydYLVJlcXVlc3REaWdlc3QnXSA9IGNvbnRleHQuZGF0YS5Gb3JtRGlnZXN0VmFsdWU7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhLkFjY2VwdCA9IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnQ29udGVudC1UeXBlJ10gPSBhamF4SGVscGVycy52ZXJib3NlTWV0YTtcclxuXHJcblx0XHRhamF4SGVscGVycy5saXN0SXRlbVVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdFx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwcm9wcy5saXN0SXRlbVVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHByb3BzLml0ZW0pLFxyXG5cdFx0XHRoZWFkZXJzOiBwcm9wcy5oZWFkZXJEYXRhXHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuY29uc3QgZGVsZXRlUHJvY2VzcyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5oZWFkZXJEYXRhKSB7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhID0ge307XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYWpheEdldENvbnRleHQocHJvcHMpXHJcblx0LnRoZW4oZnVuY3Rpb24oY29udGV4dCkge1xyXG5cclxuXHRcdHByb3BzLmhlYWRlckRhdGFbJ1gtUmVxdWVzdERpZ2VzdCddID0gY29udGV4dC5kYXRhLkZvcm1EaWdlc3RWYWx1ZTtcclxuXHRcdHByb3BzLmhlYWRlckRhdGEuQWNjZXB0ID0gYWpheEhlbHBlcnMubWluaW1hbE1ldGE7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhWydDb250ZW50LVR5cGUnXSA9IGFqYXhIZWxwZXJzLnZlcmJvc2VNZXRhO1xyXG5cclxuXHRcdGFqYXhIZWxwZXJzLmxpc3RJdGVtVXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHJcblx0XHRpZiAocHJvcHMudXJsTW9kaWZpZXIpIHtcclxuXHRcdFx0cHJvcHMubGlzdEl0ZW1VcmwgKz0gcHJvcHMudXJsTW9kaWZpZXI7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwcm9wcy5saXN0SXRlbVVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGhlYWRlcnM6IHByb3BzLmhlYWRlckRhdGFcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEdldHMgYSBjb250ZXh0IG9iamVjdCBmb3Igc2VydmVyIHJlcXVlc3RzLlxyXG4gKiB0aGUga2V5IGZyb20gcmVzcG9uc2UgaXMgRm9ybURpZ2VzdFZhbHVlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZS48b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0Q29udGV4dChwcm9wcykge1xyXG5cdFxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL2NvbnRleHRpbmZvXCI7XHJcblx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0bWV0aG9kOiBcIlBPU1RcIixcclxuXHRcdGhlYWRlcnM6IHsgXCJBY2NlcHRcIjogYWpheEhlbHBlcnMubWluaW1hbE1ldGEgfSxcclxuXHRcdHVybDogcHJvcHMuY29uZmlndXJlZFVybCxcclxuXHR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSBudWxsO1xyXG5cdFx0cHJvcHMuY29uZmlndXJlZFVybCA9IG51bGw7XHJcblx0XHRyZXR1cm4gcmVzcG9uc2U7XHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIEdldCBkYXRhIGZyb20gc2VydmVyIHVzaW5nIHRoZSBSRVNUIGVuZHBvaW50XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgLSBmdWxsIG9kYXRhIHVybFxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXREYXRhKHVybCkge1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHsnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGF9LFxyXG5cdFx0dXJsOiB1cmxcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0cyBhbGwgcmVzdWx0cyBmb3Igc2VydmVyIHJlcXVlc3RzLlxyXG4gKiBvbmNlIHRoZSBwcm9taXNlIHJlc29sdmVzIHlvdSBnZXQgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGFyZSB0aGUgc2VydmVycyByZXNwb25zZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuc2VsZWN0XVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmZpbHRlcl1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5leHBhbmRdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMudG9wXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yZGVyQnldXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlLjxvYmplY3RbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheEdldEFsbExpc3RSZXN1bHRzKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5saXN0R1VJRCAmJiAhcHJvcHMubGlzdFRpdGxlKSB7XHJcblx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoXCJtdXN0IHBhc3MgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIHRvIGFqYXhHZXRBbGxMaXN0UmVzdWx0c1wiKTtcclxuXHR9XHJcblxyXG5cdGFqYXhIZWxwZXJzLmNyZWF0ZUdldEFsbFVybChwcm9wcyk7XHJcblxyXG5cdHJldHVybiBhamF4R2V0RGF0YShwcm9wcy5saXN0VXJsKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHR2YXIgY3VycmVudFJlc3VsdHMgPSBwcm9wcy5hbGxSZXN1bHRzIHx8IFtdLFxyXG5cdFx0XHRyZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuXHRcdHByb3BzLmFsbFJlc3VsdHMgPSBjdXJyZW50UmVzdWx0cy5jb25jYXQocmVzcG9uc2VEYXRhLnZhbHVlKTtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3BvbnNlRGF0YVsnb2RhdGEubmV4dExpbmsnXSkge1xyXG5cdFx0XHRwcm9wcy5saXN0VXJsID0gcmVzcG9uc2VEYXRhWydvZGF0YS5uZXh0TGluayddO1xyXG5cdFx0XHRyZXR1cm4gYWpheEdldEFsbExpc3RSZXN1bHRzKHByb3BzKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwcm9wcy5hbGxSZXN1bHRzO1xyXG5cdH0pO1xyXG59XHJcbmNvbnN0IGFqYXhHZXRCYXRjaCA9IGZ1bmN0aW9uKHByb3BzLCBhcnJheU9mVXJscykge1xyXG5cclxuXHR2YXIgYmF0Y2hHVUlEID0gYWpheEhlbHBlcnMuY3JlYXRlR1VJRCgpLFxyXG5cdFx0YmF0Y2hCb2R5LFxyXG5cdFx0YmF0Y2hIZWFkZXIsXHJcblx0XHRiYXRjaENvbnRlbnRzID0gW107XHJcblxyXG5cdC8vYmF0Y2ggKG9wZXJhdGlvbilcclxuXHRhcnJheU9mVXJscy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnLS1iYXRjaF8nICsgYmF0Y2hHVUlEKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9odHRwJyk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJ0NvbnRlbnQtVHJhbnNmZXItRW5jb2Rpbmc6IGJpbmFyeScpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCcnKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnR0VUICcgKyBpdGVtICsgJyBIVFRQLzEuMScpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKGBBY2NlcHQ6ICR7YWpheEhlbHBlcnMubWluaW1hbE1ldGF9YCk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJycpO1xyXG5cdH0pO1xyXG5cclxuXHRiYXRjaENvbnRlbnRzLnB1c2goJy0tYmF0Y2hfJyArIGJhdGNoR1VJRCArICctLScpO1xyXG5cclxuXHRiYXRjaEJvZHkgPSBiYXRjaENvbnRlbnRzLmpvaW4oJ1xcclxcbicpO1xyXG5cclxuXHRyZXR1cm4gYWpheEdldENvbnRleHQocHJvcHMpXHJcblx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSAnX2FwaS8kYmF0Y2gnO1xyXG5cdFx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRcdGJhdGNoSGVhZGVyID0ge1xyXG5cdFx0J1gtUmVxdWVzdERpZ2VzdCc6IHJlc3BvbnNlLmRhdGEuRm9ybURpZ2VzdFZhbHVlLFxyXG5cdFx0J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvbWl4ZWQ7IGJvdW5kYXJ5PVwiYmF0Y2hfJyArIGJhdGNoR1VJRCArICdcIidcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdHJldHVybiBheGlvcyh7XHJcblx0XHRcdHVybDogcHJvcHMuY29uZmlndXJlZFVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IGJhdGNoQm9keSxcclxuXHRcdFx0aGVhZGVyczogYmF0Y2hIZWFkZXJcclxuXHRcdH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuXHRcdFx0dmFyIHBhcnNlZEFycmF5ID0gW10sXHJcblx0XHRcdFx0cmVzcG9uc2VUb0FycmF5ID0gcmVzcG9uc2UuZGF0YS5zcGxpdCgnXFxuJyk7XHJcblxyXG5cdFx0XHRmb3IgKHZhciBjdXJyZW50TGluZSA9IDA7IGN1cnJlbnRMaW5lIDwgcmVzcG9uc2VUb0FycmF5Lmxlbmd0aDsgY3VycmVudExpbmUrKykge1xyXG5cdFx0XHRcdGlmIChyZXNwb25zZVRvQXJyYXlbY3VycmVudExpbmVdLmNoYXJBdCgwKSA9PT0gJ3snKSB7XHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdC8vIHBhcnNlIHRoZSBKU09OIHJlc3BvbnNlLi4uXHJcblx0XHRcdFx0XHR2YXIgdHJ5UGFyc2VKc29uID0gSlNPTi5wYXJzZShyZXNwb25zZVRvQXJyYXlbY3VycmVudExpbmVdKTtcclxuXHJcblx0XHRcdFx0XHRwYXJzZWRBcnJheS5wdXNoKHRyeVBhcnNlSnNvbik7XHJcblxyXG5cdFx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0XHRcdC8vIGRvbid0IGRvIGFueXRoaW5nLi4uIGp1c3Qga2VlcCBtb3ZpbmdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcGFyc2VkQXJyYXk7XHJcblxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59O1xyXG4vKipcclxuICogR2V0cyBhbGwgaXRlbXMgcmVxdWVzdGVkIGluIHRoZSBnZXRVcmxzIHByb3BlcnR5IChiYXRjaCByZXF1ZXN0KVxyXG4gKiBcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHJlbGF0aXZlIHVybCBvZiB0aGUgc2l0ZSB0aGF0IGNvbnRhaW5zIHRoZSBkYXRhXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzLmdldFVybHMgLSBmdWxsIG9kYXRhIHVybHNcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRCYXRjaE1ldGVyZWQocHJvcHMpIHtcclxuXHRsZXQgdXJsc0ZvclRyaXAgPSBbXSxcclxuXHRcdHBlclRyaXBDb3VudCA9IDA7XHJcblxyXG5cdHByb3BzLnRvdGFsSXRlbXMgPSBwcm9wcy5nZXRVcmxzLmxlbmd0aDtcclxuXHRwcm9wcy50b3RhbFBlclRyaXAgPSA1MDtcclxuXHRwcm9wcy5hbGxSZXN1bHRzID0gW107XHJcblx0cHJvcHMubnVtYmVyVG9TdGFydEF0ID0gMDtcclxuXHJcblx0Zm9yICg7IHByb3BzLm51bWJlclRvU3RhcnRBdCA8IHByb3BzLnRvdGFsSXRlbXM7IHByb3BzLm51bWJlclRvU3RhcnRBdCsrKSB7XHJcblx0XHRsZXQgdXJsID0gcHJvcHMuZ2V0VXJsc1twcm9wcy5udW1iZXJUb1N0YXJ0QXRdO1xyXG5cdFx0dXJsc0ZvclRyaXAucHVzaCh1cmwpO1xyXG5cdFx0cGVyVHJpcENvdW50Kys7XHJcblxyXG5cdFx0aWYgKHBlclRyaXBDb3VudCA9PT0gcHJvcHMudG90YWxQZXJUcmlwKSB7XHJcblx0XHRcdHByb3BzLm51bWJlclRvU3RhcnRBdCsrO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBhamF4R2V0QmF0Y2goe29yaWdpbjogcHJvcHMub3JpZ2luLCB1cmw6IHByb3BzLnVybH0sIHVybHNGb3JUcmlwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRwcm9wcy5hbGxSZXN1bHRzID0gcHJvcHMuYWxsUmVzdWx0cy5jb25jYXQocmVzcG9uc2UpO1xyXG5cclxuXHRcdGlmIChwcm9wcy5udW1iZXJUb1N0YXJ0QXQgPCBwcm9wcy50b3RhbEl0ZW1zKSB7XHJcblx0XHRcdHJldHVybiBhamF4R2V0QmF0Y2hNZXRlcmVkKHByb3BzKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcHJvcHMuYWxsUmVzdWx0cztcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0IHVzZXIgcHJvZmlsZXMgZnJvbSB0aGUgc2VydmVyIChiYXRjaCByZXF1ZXN0KVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHMucHJvZmlsZUVtYWlscyAtIGVtYWlsIGFkZHJlc3NlcyBvZiB0aGUgdXNlcnMgeW91IHdhbnQgcHJvZmlsZSBkYXRhIGZvclxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3RbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheEdldEJhdGNoUHJvZmlsZXMocHJvcHMpIHtcclxuXHRsZXQgcHJvZmlsZVVybHMgPSBudWxsO1xyXG5cdGlmICghcHJvcHMucHJvZmlsZUVtYWlscyB8fCBwcm9wcy5wcm9maWxlRW1haWxzLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwicHJvZmlsZSBlbWFpbHMgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNhbGxpbmcgdGhlIGJhdGNoIHByb2ZpbGUgZnVuY3Rpb25cIik7XHJcblx0fVxyXG5cclxuXHRwcm9wcy5vcmlnaW4gPSBnZXRVUkxPcmlnaW4oKTtcclxuXHRwcm9maWxlVXJscyA9IFtdO1xyXG5cclxuXHRsZXQgdXJsRm9yU2l0ZSA9IHByb3BzLm9yaWdpbiArIHByb3BzLnVybDtcclxuXHRwcm9wcy5wcm9maWxlRW1haWxzLmZvckVhY2goKGVtYWlsKSA9PiB7XHJcblx0XHRsZXQgZW5jb2RlZCA9IGVuY29kZUFjY291bnROYW1lKGVtYWlsKTtcclxuXHRcdHByb2ZpbGVVcmxzLnB1c2goYCR7dXJsRm9yU2l0ZX0vX2FwaS9zcC51c2VycHJvZmlsZXMucGVvcGxlbWFuYWdlci9HZXRQcm9wZXJ0aWVzRm9yKCcke2VuY29kZWR9Jyk/JHNlbGVjdD1Vc2VyUHJvZmlsZVByb3BlcnRpZXNgKTtcclxuXHR9KTtcclxuXHJcblx0bGV0IHtvcmlnaW4sIHVybH0gPSBwcm9wcztcclxuXHRcclxuXHRyZXR1cm4gYWpheEdldEJhdGNoTWV0ZXJlZCh7XHJcblx0XHRvcmlnaW46IG9yaWdpbixcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0Z2V0VXJsczogcHJvZmlsZVVybHNcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0IGxpc3Qgb3IgbGlicmFyeSBwcm9wZXJ0aWVzIGZyb20gc2VydmVyXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBhIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRMaXN0SW5mbyhwcm9wcykge1xyXG5cclxuXHRhamF4SGVscGVycy5saXN0VXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHRyZXR1cm4gYWpheEdldERhdGEocHJvcHMubGlzdFVybCk7XHJcbn1cclxuLyoqXHJcbiAqIEdldCB1c2VyIHByb2ZpbGUgaW5mbyBmcm9tIHRoZSBTaGFyZVBvaW50IHNlYXJjaCBzZXJ2aWNlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMucXVlcnkgLSBxdWVyeSB0aGF0IGlzIHBhc3NlZCB0byBzZWFyY2ggc2VydmljZSwgZXggXCInXCIgKyAnQnVyZWF1PVwiJysgZGl2aXNpb25OYW1lICsgJ1wiXFwnJ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLnNvdXJjZUlkXSAtIHNvdXJjZSBpZCBmb3IgdGhlIHNlYXJjaCBzZXJ2aWNlIHRvIHVzZSwgZGVmYXVsdHMgdG8gdGhlIG91dCBvZiB0aGUgYm94IHBlb3BsZSBzb3VyY2UgaWRcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gcHJvcHMucHJvcGVydGllcyAtIHNwZWNpZnkgd2hpY2ggcHJvcGVydGllcyB5b3Ugd2FudCBiYWNrIGZyb20gdGhlIHJlcXVlc3RcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhQZW9wbGVTZWFyY2gocHJvcHMpIHtcclxuXHJcblx0dmFyIGFsbFJlc3VsdHMgPSBwcm9wcy5jdXJyZW50UmVzdWx0cyB8fCBbXSxcclxuXHRcdHNlcnZlclF1ZXJ5RGF0YSA9IHtcclxuXHRcdFx0c3RhcnRyb3c6IDAsXHJcblx0XHRcdHJvd2xpbWl0OiA1MDAsXHJcblx0XHRcdFRyaW1EdXBsaWNhdGVzOiBmYWxzZSxcclxuXHRcdFx0c2VsZWN0cHJvcGVydGllczogYCcke3Byb3BzLnByb3BlcnRpZXMuam9pbignLCcpfSdgXHJcblx0XHR9O1xyXG5cclxuXHRzZXJ2ZXJRdWVyeURhdGEuc3RhcnRyb3cgPSBwcm9wcy5zdGFydHJvdyA/IHByb3BzLnN0YXJ0cm93IDogMDtcclxuXHRzZXJ2ZXJRdWVyeURhdGEuc291cmNlSWQgPSBwcm9wcy5zb3VyY2VJZCA/IGAnJHtwcm9wcy5zb3VyY2VJZH0nYCA6IFwiJ2IwOWE3OTkwLTA1ZWEtNGFmOS04MWVmLWVkZmFiMTZjNGUzMSdcIjtcclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvc2VhcmNoL3F1ZXJ5XCI7XHJcblx0c2VydmVyUXVlcnlEYXRhLnF1ZXJ5dGV4dCA9IGAnJHtwcm9wcy5xdWVyeX0nYDtcclxuXHJcblx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0dXJsOiBwcm9wcy5jb25maWd1cmVkVXJsLFxyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHsnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGF9LFxyXG5cdFx0cGFyYW1zOiBzZXJ2ZXJRdWVyeURhdGFcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGVtcERhdGEpIHtcclxuXHJcblx0XHR2YXIgcmVsZXZhbnRSZXN1bHRzID0gZW1wRGF0YS5kYXRhLlByaW1hcnlRdWVyeVJlc3VsdC5SZWxldmFudFJlc3VsdHM7XHJcblxyXG5cdFx0YWxsUmVzdWx0cyA9IGFsbFJlc3VsdHMuY29uY2F0KHJlbGV2YW50UmVzdWx0cy5UYWJsZS5Sb3dzKTtcclxuXHRcdHByb3BzLmN1cnJlbnRSZXN1bHRzID0gYWxsUmVzdWx0cztcclxuXHJcblx0XHRpZiAocmVsZXZhbnRSZXN1bHRzLlRvdGFsUm93cyA+IChzZXJ2ZXJRdWVyeURhdGEuc3RhcnRyb3cgKyByZWxldmFudFJlc3VsdHMuUm93Q291bnQpKSB7XHJcblx0XHRcdHByb3BzLnN0YXJ0cm93ID0gc2VydmVyUXVlcnlEYXRhLnN0YXJ0cm93ICsgcmVsZXZhbnRSZXN1bHRzLlJvd0NvdW50O1xyXG5cdFx0XHRyZXR1cm4gYWpheFBlb3BsZVNlYXJjaChwcm9wcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gcHJvcHMuY3VycmVudFJlc3VsdHM7XHJcblx0XHR9XHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB1c2VyIGlzIGluIHRoZSBzaXRlIGNvbGxlY3Rpb24gdXNlciB0YWJsZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmVtYWlsIC0gZW1haWwgYWRkcmVzcyBvZiB0aGUgdXNlciB0byBjaGVja1xyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhFbnN1cmVVc2VyKHByb3BzKSB7XHJcblx0XHJcblx0cmV0dXJuIGFqYXhHZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblx0XHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblx0XHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAvZW5zdXJlVXNlcignJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9JylgO1xyXG5cclxuXHRcdHJldHVybiBheGlvcyh7ICAgICAgIFxyXG5cdFx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsICAgXHJcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsICBcclxuXHRcdFx0Y29udGVudFR5cGU6IGFqYXhIZWxwZXJzLnZlcmJvc2VNZXRhLFxyXG5cdFx0XHRoZWFkZXJzOiB7IFxyXG5cdFx0XHRcdFwiQWNjZXB0XCI6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhLFxyXG5cdFx0XHRcdFwiWC1SZXF1ZXN0RGlnZXN0XCI6IHJlc3BvbnNlLmRhdGEuRm9ybURpZ2VzdFZhbHVlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufVxyXG4vKipcclxuICogR2V0cyB1c2VyIGluZm8gZnJvbSB0aGUgc2l0ZSBjb2xsZWN0aW9uIHVzZXIgdGFibGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5lbWFpbCAtIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdG8gcmV0cmlldmVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhamF4R2V0U2l0ZVVzZXJJbmZvQnlFbWFpbChwcm9wcykge1xyXG5cclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS93ZWIvc2l0ZXVzZXJzXCI7XHJcblx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGA/JGZpbHRlcj1Mb2dpbk5hbWUgZXEgJyR7ZW5jb2RlQWNjb3VudE5hbWUocHJvcHMuZW1haWwpfSdgO1xyXG5cclxuXHRyZXR1cm4gYWpheEdldERhdGEocHJvcHMuY29uZmlndXJlZFVybCk7XHJcbn1cclxuLyoqXHJcbiAqIEdldCByZXF1ZXN0IHRoYXQgdXNlcyBDQU1MIHRvIGZpbHRlciByZXN1bHRzXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMucXVlcnkgLSBDQU1MIHF1ZXJ5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRJdGVtc0J5Q2FtbChwcm9wcykge1xyXG5cclxuXHRyZXR1cm4gYWpheEdldENvbnRleHQocHJvcHMpXHJcblx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG5cdFx0bGV0IHF1ZXJ5ID0geyBcInF1ZXJ5XCIgOlxyXG5cdFx0XHR7XCJfX21ldGFkYXRhXCI6IFxyXG5cdFx0XHR7IFwidHlwZVwiOiBcIlNQLkNhbWxRdWVyeVwiIH0sXHJcblx0XHRcdFx0XCJWaWV3WG1sXCI6IHByb3BzLmNhbWxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGhlYWRlcmRhdGEgPSB7XHJcblx0XHRcdCdBY2NlcHQnOiBhamF4SGVscGVycy5taW5pbWFsTWV0YSxcclxuXHRcdFx0J0NvbnRlbnQtVHlwZSc6IGFqYXhIZWxwZXJzLnZlcmJvc2VNZXRhLFxyXG5cdFx0XHQnWC1SZXF1ZXN0RGlnZXN0JzogcmVzcG9uc2UuZGF0YS5Gb3JtRGlnZXN0VmFsdWVcclxuXHRcdH07XHJcblxyXG5cdFx0YWpheEhlbHBlcnMubGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9ICcvZ2V0aXRlbXMnO1xyXG5cclxuXHRcdHJldHVybiBheGlvcyh7XHJcblx0XHRcdHVybDogcHJvcHMubGlzdFVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSxcclxuXHRcdFx0aGVhZGVyczogaGVhZGVyZGF0YVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG59XHJcbi8qKlxyXG4gKiBHZXQgYSB1c2VycyBwZXJtaXNzaW9ucyB0byBhIHNpdGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5lbWFpbCAtIGVtYWlsIG9mIHRoZSB1c2VyIHRvIGdldCBwZXJtaXNzaW9ucyBmb3JcclxuICogQHJldHVybnMge3Byb21pc2U8c3RyaW5nW10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhHZXRVc2VyU2l0ZVBlcm1pc3Npb25zKHByb3BzKSB7XHJcblxyXG5cdGxldCBlbmNvZGVkRW1haWwgPSBlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCk7XHJcblxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3dlYlwiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cHJvcHMucGVybXNMaW5rID0gYCR7cHJvcHMuY29uZmlndXJlZFVybH0vZ2V0dXNlcmVmZmVjdGl2ZXBlcm1pc3Npb25zKEB1c2VyKT9AdXNlcj0nJHtlbmNvZGVkRW1haWx9J2A7XHJcblx0cmV0dXJuIGFqYXhHZXRVc2VyUGVybWlzc2lvbnMocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgYSB1c2VycyBwZXJtaXNzaW9ucyB0byBhIGxpc3Qgb3IgbGlicmFyeVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5lbWFpbCAtIGVtYWlsIG9mIHRoZSB1c2VyIHRvIGNoZWNrIHBlcm1pc3Npb24gb2ZcclxuICogQHJldHVybnMge3Byb21pc2U8c3RpbmdbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheEdldFVzZXJMaXN0UGVybWlzc2lvbnMocHJvcHMpIHtcclxuXHJcblx0bGV0IGVuY29kZWRFbWFpbCA9IGVuY29kZUFjY291bnROYW1lKHByb3BzLmVtYWlsKTtcclxuXHJcblx0YWpheEhlbHBlcnMubGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdHByb3BzLnBlcm1zTGluayA9IGAke3Byb3BzLmxpc3RVcmx9L2dldHVzZXJlZmZlY3RpdmVwZXJtaXNzaW9ucyhAdXNlcik/QHVzZXI9JyR7ZW5jb2RlZEVtYWlsfSdgO1xyXG5cdHJldHVybiBhamF4R2V0VXNlclBlcm1pc3Npb25zKHByb3BzKTtcclxufVxyXG4vKipcclxuICogR2V0cyB0aGUgU2hhcmVQb2ludCBncm91cHMgdGhhdCBhIHVzZXIgaGFzIGJlZW4gYWRkZWQgdG8sIGlkZW50aWZ5IHRoZSB1c2VyIGJ5IHBhc3NpbmcgdGhlIGlkIG51bWJlciBvZiB0aGUgdXNlciBmb3IgdGhlIHNpdGUuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMudXNlcklkIC0gdXNlcnMgc2l0ZSBpZCBudW1iZXJcclxuICogQHJldHVybnMge3Byb21pc2U8c3RpbmdbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheEdldEN1cnJlbnRVc2VyR3JvdXBzKHByb3BzKSB7XHJcblxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCIvX2FwaS93ZWJcIjtcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gYC9HZXRVc2VyYnlJZCgke3Byb3BzLnVzZXJJZH0pL0dyb3Vwc2A7XHJcblxyXG5cdHJldHVybiBhamF4R2V0RGF0YShwcm9wcy5jb25maWd1cmVkVXJsKVxyXG5cdC50aGVuKGZ1bmN0aW9uKGdyb3Vwcyl7XHJcblxyXG5cdFx0dmFyIGdyb3VwQXJyYXkgPSBbXTtcclxuXHJcblx0XHRncm91cHMuZGF0YS52YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuXHRcdFx0Z3JvdXBBcnJheS5wdXNoKGl0ZW0uVGl0bGUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIGdyb3VwQXJyYXk7XHJcblxyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2luZ2xlIGl0ZW0gaW4gYSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0TmFtZV0gLSBzZXJ2ZXIgbmFtZSBmb3IgdGhlIGxpc3RcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzLmluZm9Ub1NlcnZlciAtIG9iamVjdCB3aG9zIGtleSBpcyB0aGUgY29sdW1uIG5hbWUgYW5kIHRoZSB2YWx1ZSBpcyB3aGF0IHlvdSB3YW50IHN0b3JlZCBpbiB0aGF0IGNvbHVtblxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhDcmVhdGVJdGVtKHByb3BzKSB7XHJcblx0cmV0dXJuIG5vbkRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBVcGRhdGVzIGEgc2luZ2xlIGl0ZW0gaW4gYSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0TmFtZV0gLSBzZXJ2ZXIgbmFtZSBmb3IgdGhlIGxpc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5ldGFnXSAtIGV0YWcgb2YgdGhlIGl0ZW0gdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy5pdGVtSWQgLSBpZCBvZiB0aGUgaXRlbSB0byB1cGRhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzLmluZm9Ub1NlcnZlciAtIG9iamVjdCB3aG9zIGtleSBpcyB0aGUgY29sdW1uIG5hbWUgYW5kIHRoZSB2YWx1ZSBpcyB3aGF0IHlvdSB3YW50IHN0b3JlZCBpbiB0aGF0IGNvbHVtblxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhVcGRhdGVJdGVtKHByb3BzKSB7XHJcblxyXG5cdHByb3BzLmhlYWRlckRhdGEgPSB7XHJcblx0XHRcIlgtSFRUUC1NZXRob2RcIjogXCJNRVJHRVwiLFxyXG5cdFx0XCJJZi1NYXRjaFwiOiBwcm9wcy5ldGFnIHx8IFwiKlwiXHJcblx0fTtcclxuXHRyZXR1cm4gbm9uRGVsZXRlUHJvY2Vzcyhwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIERlbGV0ZXMgYSBzaW5nbGUgaXRlbSBmcm9tIGEgbGlzdCBvciBsaWJyYXJ5XHJcbiAqIGJlIHdhcm5lZCBpZiB5b3UgdXNlIHRoaXMgZnVuY3Rpb24sIHRoZSBpdGVtIHlvdSBkZWxldGUgd2lsbCBiZSBnb25lIGFuZCB1bnJlY292ZXJhYmxlISEhIVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZXRhZ10gLSBldGFnIG9mIHRoZSBpdGVtIHRvIHVwZGF0ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuaXRlbUlkIC0gaWQgb2YgdGhlIGl0ZW0gdG8gZGVsZXRlXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWpheERlbGV0ZUl0ZW0ocHJvcHMpIHtcclxuXHQvL3RvZG8gdHJ5IHRvIGNvbXBsZXRlIHRoaXMgZnVuY3Rpb24gd2l0aG91dCBhbiBldGFnXHJcblx0cHJvcHMuaGVhZGVyRGF0YSA9IHtcclxuXHRcdCdYLUhUVFAtTWV0aG9kJyA6ICdERUxFVEUnLFxyXG5cdFx0XCJJZi1NYXRjaFwiOiBwcm9wcy5ldGFnIHx8IFwiKlwiXHJcblx0fTtcclxuXHRyZXR1cm4gZGVsZXRlUHJvY2Vzcyhwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIFNlbmRzIGEgc2luZ2xlIGl0ZW0gdG8gdGhlIHJlY3ljbGUgYmluIG9mIHRoZSBzaXRlIGNvbGxlY3Rpb25cclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMuaXRlbUlkIC0gaWQgb2YgdGhlIGl0ZW0gdG8gcmVjeWNsZVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFqYXhSZWN5Y2xlSXRlbShwcm9wcykge1xyXG5cclxuXHRwcm9wcy51cmxNb2RpZmllciA9IFwiL3JlY3ljbGVcIjtcclxuXHRyZXR1cm4gZGVsZXRlUHJvY2Vzcyhwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdGhlIHByb2ZpbGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgcHJvZmlsZSBzZXJ2aWNlXHJcbiAqIGlmIGVtYWlsIGlzIHBhc3NlZCB0aGVuIHRoYXQgd2lsbCBiZSB0aGUgcHJvZmlsZSBkYXRhIHlvdSBnZXQgYmFja1xyXG4gKiBpZiBlbWFpbCBpcyBub3QgcGFzc2VkIHlvdSBnZXQgY3VycmVudCB1c2VyIHByb2ZpbGUgZGF0YSBiYWNrXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZW1haWxdIC0gZW1haWwgb2YgdGhlIHVzZXIgeW91IHdhbnQgcHJvZmlsZSBkYXRhIGZvciBcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJQcm9maWxlRGF0YShwcm9wcyA9IHt9KSB7XHJcblxyXG5cdGxldCBhZGRvbiA9IG51bGw7XHJcblxyXG5cdGlmKHByb3BzLmVtYWlsKSB7XHJcblx0XHRwcm9wcy5lbmRQb2ludCA9ICdfYXBpL3NwLnVzZXJwcm9maWxlcy5wZW9wbGVtYW5hZ2VyJztcclxuXHRcdGFkZG9uID0gYC9nZXRwcm9wZXJ0aWVzZm9yKEB2KT9Adj0nJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9JyZgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvL3VybCBmb3IgZ2V0IGN1cnJlbnQgdXNlclxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSAnX2FwaS9TUC5Vc2VyUHJvZmlsZXMuUGVvcGxlTWFuYWdlci9HZXRNeVByb3BlcnRpZXMnO1xyXG5cdFx0YWRkb24gPSAnPyc7XHJcblx0fVxyXG5cdFxyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAke2FkZG9ufSRzZWxlY3Q9VXNlclByb2ZpbGVQcm9wZXJ0aWVzYDtcclxuXHRcclxuXHRyZXR1cm4gYWpheEdldERhdGEocHJvcHMuY29uZmlndXJlZFVybClcclxuXHQudGhlbihmdW5jdGlvbih1c2VyRGF0YSl7IC8vc3VjY2Vzc1xyXG5cdFx0aWYgKHVzZXJEYXRhLmRhdGFbJ29kYXRhLm51bGwnXSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9IGVsc2V7XHJcblx0XHRcdHJldHVybiB1c2VyRGF0YS5kYXRhLlVzZXJQcm9maWxlUHJvcGVydGllcztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0IHRoZSBjb2x1bW5zIG9mIGEgbGlzdCBvciBsaWJyYXJ5XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuYWxsRGF0YV0gLSBpbmNsdWRlIHJlYWQgb25seSBhbmQgaGlkZGVuIGNvbHVtbnNcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0Q29sdW1ucyhwcm9wcykge1xyXG5cclxuXHRpZighcHJvcHMuYWxsRGF0YSkge1xyXG5cdFx0cHJvcHMuYWxsRGF0YSA9IGZhbHNlO1xyXG5cdH1cclxuXHRhamF4SGVscGVycy5saXN0VXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHRwcm9wcy5saXN0VXJsICs9IGAvZmllbGRzPyRmaWx0ZXI9SGlkZGVuIGVxICR7cHJvcHMuYWxsRGF0YX0gYW5kIFJlYWRPbmx5RmllbGQgZXEgJHtwcm9wcy5hbGxEYXRhfWA7XHJcblxyXG5cdHJldHVybiBhamF4R2V0RGF0YShwcm9wcy5saXN0VXJsKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWJyYXJ5LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCIndXNlIHN0cmljdCc7XG5cbi8vIGJ0b2EgcG9seWZpbGwgZm9yIElFPDEwIGNvdXJ0ZXN5IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGNoYW1iZXJzL0Jhc2U2NC5qc1xuXG52YXIgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuXG5mdW5jdGlvbiBFKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnU3RyaW5nIGNvbnRhaW5zIGFuIGludmFsaWQgY2hhcmFjdGVyJztcbn1cbkUucHJvdG90eXBlID0gbmV3IEVycm9yO1xuRS5wcm90b3R5cGUuY29kZSA9IDU7XG5FLnByb3RvdHlwZS5uYW1lID0gJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcic7XG5cbmZ1bmN0aW9uIGJ0b2EoaW5wdXQpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyhpbnB1dCk7XG4gIHZhciBvdXRwdXQgPSAnJztcbiAgZm9yIChcbiAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxuICAgIHZhciBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IGNoYXJzO1xuICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcbiAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxuICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcbiAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xuICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XG4gICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXG4gICkge1xuICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcbiAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XG4gICAgICB0aHJvdyBuZXcgRSgpO1xuICAgIH1cbiAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcbiAgfVxuICByZXR1cm4gb3V0cHV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ0b2E7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnRvYS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCIvKlxyXG5lXHJcbiovXHJcbmltcG9ydCB7Z2V0VVJMT3JpZ2lufSBmcm9tICdwZC1zcHV0aWwnO1xyXG5leHBvcnQgY29uc3QgbWluaW1hbE1ldGEgPSBcImFwcGxpY2F0aW9uL2pzb247b2RhdGE9bWluaW1hbG1ldGFkYXRhXCI7XHJcbmV4cG9ydCBjb25zdCB2ZXJib3NlTWV0YSA9IFwiYXBwbGljYXRpb24vanNvbjtvZGF0YT12ZXJib3NlXCI7XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVsaXN0aXRlbXR5cGUgPSBmdW5jdGlvbihsaXN0TmFtZSkge1xyXG5cdHJldHVybiAnU1AuRGF0YS4nICsgXHJcblx0XHRsaXN0TmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIFxyXG5cdFx0bGlzdE5hbWUuc2xpY2UoMSkgKyBcclxuXHRcdCdMaXN0SXRlbSc7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBndWlkSGV4Q29kZXMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnXTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdVSUQgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgcmVzdWx0ID0gJyc7XHJcblxyXG5cdGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCAzMjsgaW5kZXgrKykge1xyXG5cdFx0dmFyIHZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpO1xyXG5cclxuXHRcdHN3aXRjaCAoaW5kZXgpIHtcclxuXHRcdGNhc2UgODpcclxuXHRcdFx0cmVzdWx0ICs9ICctJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDEyOlxyXG5cdFx0XHR2YWx1ZSA9IDQ7XHJcblx0XHRcdHJlc3VsdCArPSAnLSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxNjpcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZSAmIDMgfCA4O1xyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMjA6XHJcblx0XHRcdHJlc3VsdCArPSAnLSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0ICs9IGd1aWRIZXhDb2Rlc1t2YWx1ZV07XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjaGVja1VybE9yaWdpbiA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdHByb3BzLmNvbmZpZ3VyZWRVcmwgPSBwcm9wcy5vcmlnaW4gPyBwcm9wcy5vcmlnaW4gOiBnZXRVUkxPcmlnaW4oKTtcclxuXHJcblx0aWYocHJvcHMudXJsKSB7XHJcblx0XHRwcm9wcy5jb25maWd1cmVkVXJsICs9IHByb3BzLnVybDtcclxuXHR9XHJcblxyXG5cdGlmKHByb3BzLmVuZFBvaW50KSB7XHJcblx0XHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAvJHtwcm9wcy5lbmRQb2ludH1gO1xyXG5cdH1cclxuXHRyZXR1cm4gcHJvcHM7XHJcblxyXG5cdC8vZmVsbCB0aHJvdWdoIHNvIHRoZSBpbmNvcnJlY3QgZGF0YXR5cGUgd2FzIHBhc3NlZCB0byBmdW5jdGlvbiwgZXJyb3JcclxufTtcclxuZXhwb3J0IGNvbnN0IGxpc3RVcmxDb25maWd1cmUgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRpZiAoIXByb3BzLnVybCB8fCBwcm9wcy5saXN0VXJsKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS93ZWJcIjtcclxuXHJcblx0Y2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRpZiAocHJvcHMubGlzdEdVSUQpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgPSBwcm9wcy5jb25maWd1cmVkVXJsICs9IFwiL2xpc3RzKGd1aWQnXCIrIHByb3BzLmxpc3RHVUlEICtcIicpXCI7XHJcblx0fSBlbHNlIGlmIChwcm9wcy5saXN0VGl0bGUpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgPSBwcm9wcy5jb25maWd1cmVkVXJsICs9IFwiL2xpc3RzL2dldGJ5dGl0bGUoJ1wiKyBwcm9wcy5saXN0VGl0bGUgK1wiJylcIjtcclxuXHR9XHJcblx0cmV0dXJuIHByb3BzO1xyXG59O1xyXG5leHBvcnQgY29uc3QgbGlzdEl0ZW1VcmxDb25maWd1cmUgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cdC8vZm9yIGNyZWF0ZSwgdXBkYXRlLCBkZWxldGVcclxuXHR2YXIgaXRlbSA9IHByb3BzLml0ZW1JZCB8fCAnJztcclxuXHJcblx0aWYgKHByb3BzLmxpc3RJdGVtVXJsKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRsaXN0VXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHJcblx0cHJvcHMubGlzdEl0ZW1VcmwgPSBwcm9wcy5saXN0VXJsICs9IFwiL2l0ZW1zKFwiKyBpdGVtICtcIilcIjtcclxuXHRyZXR1cm4gcHJvcHM7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBwYXJzZUJhc2VQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0dmFyIHBlcm1pc3Npb25zID0gbmV3IFNQLkJhc2VQZXJtaXNzaW9ucygpO1xyXG5cdHBlcm1pc3Npb25zLmluaXRQcm9wZXJ0aWVzRnJvbUpzb24odmFsdWUpO1xyXG5cdHZhciBwZXJtTGV2ZWxzID0gW107XHJcblx0Zm9yKHZhciBwZXJtTGV2ZWxOYW1lIGluIFNQLlBlcm1pc3Npb25LaW5kLnByb3RvdHlwZSkge1xyXG5cdFx0aWYgKFNQLlBlcm1pc3Npb25LaW5kLmhhc093blByb3BlcnR5KHBlcm1MZXZlbE5hbWUpKSB7XHJcblx0XHRcdHZhciBwZXJtTGV2ZWwgPSBTUC5QZXJtaXNzaW9uS2luZC5wYXJzZShwZXJtTGV2ZWxOYW1lKTtcclxuXHRcdFx0aWYocGVybWlzc2lvbnMuaGFzKHBlcm1MZXZlbCkpe1xyXG5cdFx0XHRcdFx0cGVybUxldmVscy5wdXNoKHBlcm1MZXZlbE5hbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9ICAgICBcclxuXHR9XHJcblx0cmV0dXJuIHBlcm1MZXZlbHM7ICAgXHJcbn07XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHZXRBbGxVcmwgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRpZihwcm9wcy5saXN0VXJsKSB7XHJcblx0XHQvL2FscmVhZHkgc2V0dXAsIGdldCBvdXRcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0aWYoIXByb3BzLmVuZFBvaW50KSB7XHJcblx0XHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS93ZWJcIjtcclxuXHR9XHJcblx0bGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdHByb3BzLmxpc3RVcmwgKz0gXCIvaXRlbXM/XCI7XHJcblxyXG5cdGlmKHByb3BzLnNlbGVjdCkge1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSBgJHNlbGVjdD0ke3Byb3BzLnNlbGVjdH0mYDtcclxuXHR9XHJcblx0aWYocHJvcHMudG9wKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9IGAkdG9wPSR7cHJvcHMudG9wfSZgO1xyXG5cdH1cclxuXHRpZihwcm9wcy5leHBhbmQpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRleHBhbmQ9JHtwcm9wcy5leHBhbmR9JmA7XHJcblx0fVxyXG5cdGlmKHByb3BzLmZpbHRlcikge1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSBgJGZpbHRlcj0ke3Byb3BzLmZpbHRlcn0mYDtcclxuXHR9XHJcblx0aWYocHJvcHMub3JkZXJCeSkge1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSBgJG9yZGVyYnk9JHtwcm9wcy5vcmRlckJ5fSZgO1xyXG5cdH1cclxuXHJcblx0aWYoL1xcJCQvLnRlc3QocHJvcHMubGlzdFVybCkpIHtcclxuXHRcdC8vaWYgJCBpcyB0aGUgbGFzdCBjaGFyYWN0ZXIgdGhlbiBnZXQgcmlkIG9mIGl0XHJcblx0XHRwcm9wcy5saXN0VXJsLnNsaWNlKDAsLTEpO1xyXG5cdH1cclxuXHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2hlbHBlcnMuanMiXSwic291cmNlUm9vdCI6IiJ9