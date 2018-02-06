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
/* harmony export (immutable) */ __webpack_exports__["getContext"] = getContext;
/* harmony export (immutable) */ __webpack_exports__["getData"] = getData;
/* harmony export (immutable) */ __webpack_exports__["getAllListResults"] = getAllListResults;
/* harmony export (immutable) */ __webpack_exports__["getBatchMetered"] = getBatchMetered;
/* harmony export (immutable) */ __webpack_exports__["getBatchProfiles"] = getBatchProfiles;
/* harmony export (immutable) */ __webpack_exports__["getListInfo"] = getListInfo;
/* harmony export (immutable) */ __webpack_exports__["peopleSearch"] = peopleSearch;
/* harmony export (immutable) */ __webpack_exports__["ensureUser"] = ensureUser;
/* harmony export (immutable) */ __webpack_exports__["getSiteUserInfoByEmail"] = getSiteUserInfoByEmail;
/* harmony export (immutable) */ __webpack_exports__["getItemsByCaml"] = getItemsByCaml;
/* harmony export (immutable) */ __webpack_exports__["getUserSitePermissions"] = getUserSitePermissions;
/* harmony export (immutable) */ __webpack_exports__["getUserListPermissions"] = getUserListPermissions;
/* harmony export (immutable) */ __webpack_exports__["getCurrentUserGroups"] = getCurrentUserGroups;
/* harmony export (immutable) */ __webpack_exports__["createItem"] = createItem;
/* harmony export (immutable) */ __webpack_exports__["updateItem"] = updateItem;
/* harmony export (immutable) */ __webpack_exports__["deleteItem"] = deleteItem;
/* harmony export (immutable) */ __webpack_exports__["recycleItem"] = recycleItem;
/* harmony export (immutable) */ __webpack_exports__["getUserProfileData"] = getUserProfileData;
/* harmony export (immutable) */ __webpack_exports__["getListColumns"] = getListColumns;
/* harmony export (immutable) */ __webpack_exports__["meteredCreateItems"] = meteredCreateItems;
/* harmony export (immutable) */ __webpack_exports__["meteredUpdateItems"] = meteredUpdateItems;
/* harmony export (immutable) */ __webpack_exports__["meteredRecycleItems"] = meteredRecycleItems;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pd_sputil__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_pd_sputil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pd_meteredrequestprocessor__ = __webpack_require__(30);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
	<p>
	Requires:
		<ul>
		<li>babel polyfill - object assign and promise</li>
		<li>axios - the response of the server is in the data property when a plain axios response is returned</li>
		<li>pd-sputil - encodeAccountName, getURLOrigin</li>
		</ul>
	</p>
	<p>
		pdspserverajax - is exposed is a global namespace if added to browser via script tag
	</p>
	@author "Jered McGlohon"
	@module pdspserverajax
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

	return getData(props.permsLink).then(function (response) {
		return __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* parseBasePermissions */](response.data);
	});
};
var getEntityType = function getEntityType(props) {

	var entityData;

	if (props.listName) {
		entityData = __WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* listItemEntityPattern */].test(props.listName) ? props.listName : __WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* createlistitemtype */](props.listName);
		return Promise.resolve(entityData);
	}

	return getListInfo(props).then(function (response) {
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

		return getContext(props);
	}).then(function (context) {

		props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
		props.headerData.Accept = __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */];
		props.headerData['Content-Type'] = __WEBPACK_IMPORTED_MODULE_1__helpers__["k" /* verboseMeta */];

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

	return getContext(props).then(function (context) {

		props.headerData['X-RequestDigest'] = context.data.FormDigestValue;
		props.headerData.Accept = __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */];
		props.headerData['Content-Type'] = __WEBPACK_IMPORTED_MODULE_1__helpers__["k" /* verboseMeta */];

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
function getContext(props) {

	props.endPoint = "_api/contextinfo";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	return __WEBPACK_IMPORTED_MODULE_0_axios__({
		method: "POST",
		headers: { "Accept": __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */] },
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
function getData(url) {

	return __WEBPACK_IMPORTED_MODULE_0_axios__({
		method: 'GET',
		headers: { 'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */] },
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
function getAllListResults(props) {

	if (!props.listGUID && !props.listTitle) {
		return Promise.reject("must pass listGUID or listTitle to getAllListResults");
	}

	__WEBPACK_IMPORTED_MODULE_1__helpers__["b" /* createGetAllUrl */](props);

	return getData(props.listUrl).then(function (response) {
		var currentResults = props.allResults || [],
		    responseData = response.data;

		props.allResults = currentResults.concat(responseData.value);

		if (responseData['odata.nextLink']) {
			props.listUrl = responseData['odata.nextLink'];
			return getAllListResults(props);
		}
		return props.allResults;
	});
}
var ajaxGetBatch = function ajaxGetBatch(props, arrayOfUrls) {

	var batchGUID = Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["createGUID"])(),
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
		batchContents.push('Accept: ' + __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */]);
		batchContents.push('');
	});

	batchContents.push('--batch_' + batchGUID + '--');

	batchBody = batchContents.join('\r\n');

	return getContext(props).then(function (response) {

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
function getBatchMetered(props) {
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
			return getBatchMetered(props);
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
function getBatchProfiles(props) {
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


	return getBatchMetered({
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
function getListInfo(props) {

	__WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listUrlConfigure */](props);
	return getData(props.listUrl);
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
function peopleSearch(props) {

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
		headers: { 'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */] },
		params: serverQueryData
	}).then(function (empData) {

		var relevantResults = empData.data.PrimaryQueryResult.RelevantResults;

		allResults = allResults.concat(relevantResults.Table.Rows);
		props.currentResults = allResults;

		if (relevantResults.TotalRows > serverQueryData.startrow + relevantResults.RowCount) {
			props.startrow = serverQueryData.startrow + relevantResults.RowCount;
			return peopleSearch(props);
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
function ensureUser(props) {

	return getContext(props).then(function (response) {

		props.endPoint = "_api/web";
		__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);
		props.configuredUrl += '/ensureUser(\'' + Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email) + '\')';

		return __WEBPACK_IMPORTED_MODULE_0_axios__({
			url: props.configuredUrl,
			method: "POST",
			contentType: __WEBPACK_IMPORTED_MODULE_1__helpers__["k" /* verboseMeta */],
			headers: {
				"Accept": __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */],
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
function getSiteUserInfoByEmail(props) {

	props.endPoint = "_api/web/siteusers";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	props.configuredUrl += '?$filter=LoginName eq \'' + Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email) + '\'';

	return getData(props.configuredUrl);
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
function getItemsByCaml(props) {

	return getContext(props).then(function (response) {

		var query = { "query": { "__metadata": { "type": "SP.CamlQuery" },
				"ViewXml": props.caml
			}
		},
		    headerdata = {
			'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* minimalMeta */],
			'Content-Type': __WEBPACK_IMPORTED_MODULE_1__helpers__["k" /* verboseMeta */],
			'X-RequestDigest': response.data.FormDigestValue
		};

		__WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listUrlConfigure */](props);
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
function getUserSitePermissions(props) {

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
function getUserListPermissions(props) {

	var encodedEmail = Object(__WEBPACK_IMPORTED_MODULE_2_pd_sputil__["encodeAccountName"])(props.email);

	__WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listUrlConfigure */](props);

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
function getCurrentUserGroups(props) {

	props.endPoint = "/_api/web";
	__WEBPACK_IMPORTED_MODULE_1__helpers__["a" /* checkUrlOrigin */](props);

	props.configuredUrl += '/GetUserbyId(' + props.userId + ')/Groups';

	return getData(props.configuredUrl).then(function (groups) {

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
function createItem(props) {
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
function updateItem(props) {

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
function deleteItem(props) {
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
function recycleItem(props) {

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
function getUserProfileData() {
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

	return getData(props.configuredUrl).then(function (userData) {
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
 * @returns {promise<object>}
 */
function getListColumns(props) {

	if (!props.allData) {
		props.allData = false;
	}
	__WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listUrlConfigure */](props);
	props.listUrl += '/fields?$filter=Hidden eq ' + props.allData + ' and ReadOnlyField eq ' + props.allData;

	return getData(props.listUrl);
}

var meteredAjax = function (_MeteredRequestProces) {
	_inherits(meteredAjax, _MeteredRequestProces);

	function meteredAjax() {
		_classCallCheck(this, meteredAjax);

		return _possibleConstructorReturn(this, (meteredAjax.__proto__ || Object.getPrototypeOf(meteredAjax)).call(this));
	}

	_createClass(meteredAjax, [{
		key: '_checkMeteredDataType',
		value: function _checkMeteredDataType(props) {
			if (!props.items || Array.isArray(props.items) === false) {
				throw new Error(__WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* meteredItemsIncorrectDataType */]);
			}
		}
	}, {
		key: '_getMeteredListName',
		value: function _getMeteredListName(props) {
			var entityData = null;

			if (props.listName) {
				entityData = Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listNamePresent */]);
			} else {
				entityData = getEntityType(props);
			}
			return entityData;
		}
	}]);

	return meteredAjax;
}(__WEBPACK_IMPORTED_MODULE_3_pd_meteredrequestprocessor__["a" /* MeteredRequestProcessor */]);
/**
 * The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effects
 * The order number is your id to locate elements (dom or whatever) based on the specific item processing
 *
 * @callback itemCompletedProcessing
 * @param {string} status
 * @param {number} index
 */
/**
 * The index and itemData to process will be passed to this function
 * it MUST return a native promise.
 * the order number is your id to locate elements (dom or whatever) based on the specific item processing
 *
 * @callback itemPreProcessing
 * @param {any} itemData
 * @param {number} index
 */

/**
 * Creates multiple items via REST, 
 * items array should contain object with a key of column name and property of value you want stored in that column
 * ex. {
 * 	Title: "something"
 * }
 * @param {object} props
 * @param {object[]} props.items - items to create
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 * @returns {promise<object[]>}
 */


function meteredCreateItems(props) {

	var requestPro = new meteredAjax();
	requestPro._checkMeteredDataType(props);

	return requestPro._getMeteredListName(props).then(function (entityType) {
		if (entityType !== __WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listNamePresent */]) {
			props.listName = entityType;
		}

		var prepedItems = props.items.map(function (item) {
			var obj = {
				url: props.url,
				listName: entityType,
				infoToServer: item
			};
			if (props.listGUID) {
				obj.listGUID = props.listGUID;
			} else {
				obj.listTitle = props.listTitle;
			}
			return obj;
		});

		requestPro.setPreProcessingCB(function (itemData, index) {
			if (props.itemCreatedCB) {
				props.itemCreatedCB(itemData, index);
			}
			return createItem(itemData);
		});
		requestPro.setItemProcessedCB(props.itemCompletedCB);
		return requestPro.init(prepedItems);
	});
}
/**
 * Updates multiple items via REST, 
 * items array should contain object with 2 properties itemId and updateInfo and 1 optional property etag
 * ex. {
 * 	itemId: 3,
 * 	etag: ""3""
 * 	updateInfo: {
 * 		Title: "example string"
 * 	}
 * }
 * @param {object} props
 * @param {object[]} props.items - items to update
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {string} [props.listName] - server name for the list
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 * @returns {promise<object[]>}
 */
function meteredUpdateItems(props) {
	var requestPro = new meteredAjax();
	requestPro._checkMeteredDataType(props);

	return requestPro._getMeteredListName(props).then(function (entityType) {
		if (entityType !== __WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listNamePresent */]) {
			props.listName = entityType;
		}

		var prepedItems = props.items.map(function (item) {
			var obj = {
				url: props.url,
				listName: entityType,
				infoToServer: item.updateInfo,
				itemId: item.itemId,
				etag: item.etag
			};
			if (props.listGUID) {
				obj.listGUID = props.listGUID;
			} else {
				obj.listTitle = props.listTitle;
			}
			return obj;
		});

		requestPro.setPreProcessingCB(function (itemData, index) {
			if (props.itemCreatedCB) {
				props.itemCreatedCB(itemData, index);
			}
			return updateItem(itemData);
		});
		requestPro.setItemProcessedCB(props.itemCompletedCB);
		return requestPro.init(prepedItems);
	});
}
/**
 * Recycles multiple items via REST
 * @param {object} props
 * @param {number[]} props.items - ids of items to recycle
 * @param {string} [props.origin] 
 * @param {string} props.url - site relative url
 * @param {string} props.listGUID - use either listGUID or listTitle not both
 * @param {string} [props.listTitle]
 * @param {itemPreProcessing} [props.itemCreatedCB] - this call back is called when an item is added to be processed
 * @param {itemCompletedProcessing} [props.itemCompletedCB] - this call back is called when item is completed
 * @returns {promise<object[]>}
 */
function meteredRecycleItems(props) {

	var requestPro = new meteredAjax();
	requestPro._checkMeteredDataType(props);

	var prepedItems = props.items.map(function (item) {
		var obj = {
			url: props.url,
			itemId: item
		};
		if (props.listGUID) {
			obj.listGUID = props.listGUID;
		} else {
			obj.listTitle = props.listTitle;
		}
		return obj;
	});

	requestPro.setPreProcessingCB(function (itemData, index) {
		if (props.itemCreatedCB) {
			props.itemCreatedCB(itemData, index);
		}
		return recycleItem(itemData);
	});
	requestPro.setItemProcessedCB(props.itemCompletedCB);
	return requestPro.init(prepedItems);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return minimalMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return verboseMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listNamePresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return meteredItemsIncorrectDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listItemEntityPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createlistitemtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUrlOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return listUrlConfigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listItemUrlConfigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return parseBasePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createGetAllUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pd_sputil__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pd_sputil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pd_sputil__);
/*
e
*/

var minimalMeta = "application/json;odata=minimalmetadata";
var verboseMeta = "application/json;odata=verbose";
var listNamePresent = "listName_present";
var meteredItemsIncorrectDataType = "An array must be passed to utilize the metered functions";
var listItemEntityPattern = /(SP\.Data\.).+(ListItem)/i;
var createlistitemtype = function createlistitemtype(listName) {
	return 'SP.Data.' + listName.charAt(0).toUpperCase() + listName.slice(1) + 'ListItem';
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

	if (/&$/.test(props.listUrl)) {
		//if & is the last character then get rid of it
		props.listUrl = props.listUrl.slice(0, -1);
	}
};

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeteredRequestProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * meteredRequestProcessor is a class that allows you to pass in multiple items to process
 * and controls how many requests will be sent to the server at a time
 * when all items are finished processing they will be passed to the .then of the init.
 */
var MeteredRequestProcessor = function () {
    function MeteredRequestProcessor() {
        _classCallCheck(this, MeteredRequestProcessor);

        this._processingItems = [];
        this._totalToProcess = 3;
    }

    _createClass(MeteredRequestProcessor, [{
        key: '_totalProcessingItems',
        value: function _totalProcessingItems() {
            var totalProcessing = 0;
            this._processingItems.forEach(function (item) {
                if (!item.completed) {
                    totalProcessing++;
                }
            });
            return totalProcessing;
        }
    }, {
        key: '_finshProcessor',
        value: function _finshProcessor() {

            this._mainResolve(this._processingItems);
        }
    }, {
        key: '_promiseDoneHelper',
        value: function _promiseDoneHelper(obj, data, status) {
            obj.response = data;
            obj.status = status;
            obj.completed = true;

            if (this._postProcessingCB) {
                this._postProcessingCB(obj.status, obj.place);
            }
        }
    }, {
        key: '_addToProcessor',
        value: function _addToProcessor(index, promise) {
            var _this = this;

            var obj = {
                place: index,
                completed: false,
                status: 'processing'
            };

            promise.then(function (data) {
                _this._promiseDoneHelper(obj, data, __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* completedSuccess */]);
                _this._postProcessing();
            }).catch(function (error) {
                _this._promiseDoneHelper(obj, error, __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* completedFail */]);
                _this._postProcessing();
            });
            this._processingItems.push(obj);
        }
    }, {
        key: '_preProcessing',
        value: function _preProcessing() {
            //this function needs to be recursive, and keep totalToProcess in the array
            //check length of processing items if total to process then stop
            var totalProcessing = this._totalProcessingItems();

            if (this.addedItems.length === 0 || totalProcessing === this._totalToProcess) {
                //items are not done processing but there is no more to add or
                //processing array has compacity so just get out
                return;
            }
            //if not call addToProcessingCallBack, store in var and tack on a then
            var nextAvailableIndex = this._processingItems.length,
                nextItemToProcess = this.addedItems.shift(),
                cbProcessed = this._toProcessingCB(nextItemToProcess, nextAvailableIndex);

            if (!(cbProcessed instanceof Promise)) {
                //function passed in by user is not setup correctly, it must return a promise
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* incorrectAddToProcessingReturnType */]);
            }
            //create object and add to processing array
            this._addToProcessor(nextAvailableIndex, cbProcessed);
            this._preProcessing();
        }
    }, {
        key: '_postProcessing',
        value: function _postProcessing() {
            //check if this is last call if yes then finish process
            var totalProcessing = this._totalProcessingItems();
            if (totalProcessing === 0 && this.addedItems.length === 0) {
                //process finished call finishing function and get out
                this._finshProcessor();
                return;
            }
            //else call preProcessing
            this._preProcessing();
        }
    }, {
        key: '_toProcessingCB',
        value: function _toProcessingCB() {
            throw new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* noPreProcssorCB */]);
        }
        /**
         * Sets the callback that will be called when an item is finished processing
         * @param {itemCompleted} cb 
         * @returns {void}
         */

    }, {
        key: 'setItemProcessedCB',
        value: function setItemProcessedCB(cb) {
            /**
             * The processingCompletedCallback will be passed the order number and the process status (success or fail) to trigger any completed side effects
             * The order number is your id to locate elements (dom or whatever) based on the specific item processing
             *
             * @callback itemCompleted
             * @param {string} status
             * @param {number} index
             */
            this._postProcessingCB = cb;
        }
        /**
         * Sets the callback that will be called to add items to be processed
         * 
         * @param {preProcessor} cb
         * @returns {promise} 
         */

    }, {
        key: 'setPreProcessingCB',
        value: function setPreProcessingCB(cb) {
            /**
             * The index and itemData to process will be passed to this function
             * it MUST return a native promise.
             * the order number is your id to locate elements (dom or whatever) based on the specific item processing
             *
             * @callback preProcessor
             * @param {*} itemData
             * @param {number} index
             */
            this._toProcessingCB = cb;
        }
        /**
         * Allows you to change the total amount of simultaneous items to be procesed. 
         * @param {number} count 
         */

    }, {
        key: 'changeConcurrentProcessing',
        value: function changeConcurrentProcessing(count) {
            this._totalToProcess = count;
        }
        /**
         * Starts the processing process.
         * ItemsToProcess is an array of anything you want, but each item in this array
         * Returns a native promise to .then off of, no need to catch, all item (success or fail) will be processed and passed to the .then
         * the items passed to the .then will be and array of objects with the following structure
         *  {
         *      place: number,
         *      completed: boolean,
         *      status: string (success or fail)
         *      response: the data returned from the server
         *  }
         * @param {array} itemsToProcess 
         * @returns {promise}
         */

    }, {
        key: 'init',
        value: function init(itemsToProcess) {
            var _this2 = this;

            if (!Array.isArray(itemsToProcess)) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* incorrectDataTypeForItems */]);
            }
            this.addedItems = itemsToProcess;

            return new Promise(function (resolve, reject) {
                _this2._mainResolve = resolve;
                _this2._mainReject = reject;

                _this2._preProcessing();
            });
        }
    }]);

    return MeteredRequestProcessor;
}();

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return incorrectAddToProcessingReturnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return completedSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return completedFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return noPreProcssorCB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return incorrectDataTypeForItems; });
var incorrectAddToProcessingReturnType = "The addToProcessingCallback you passed is not returning the correct data type. The function must return a native Promise";
var completedSuccess = "success";
var completedFail = "fail";
var noPreProcssorCB = "A callback must be provided to process the items and should return a native promise.";
var incorrectDataTypeForItems = "The data type passed to init must be an array.";

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDg5MGU0OTNmN2M4MzE4NjlmNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3B1dGlsXCIsXCJjb21tb25qczJcIjpcInBkLXNwdXRpbFwiLFwiYW1kXCI6XCJwZC1zcHV0aWxcIixcInJvb3RcIjpcInBkc3B1dGlsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGQtbWV0ZXJlZHJlcXVlc3Rwcm9jZXNzb3Ivc3JjL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BkLW1ldGVyZWRyZXF1ZXN0cHJvY2Vzc29yL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiYmluZCIsInJlcXVpcmUiLCJpc0J1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaXNBcnJheSIsInZhbCIsImNhbGwiLCJpc0FycmF5QnVmZmVyIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImJ1ZmZlciIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwiaXNEYXRlIiwiaXNGaWxlIiwiaXNCbG9iIiwiaXNGdW5jdGlvbiIsImlzU3RyZWFtIiwicGlwZSIsImlzVVJMU2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidHJpbSIsInN0ciIsInJlcGxhY2UiLCJpc1N0YW5kYXJkQnJvd3NlckVudiIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImZvckVhY2giLCJvYmoiLCJmbiIsImkiLCJsIiwibGVuZ3RoIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJtZXJnZSIsImFzc2lnblZhbHVlIiwiYXJndW1lbnRzIiwiZXh0ZW5kIiwiYSIsImIiLCJ0aGlzQXJnIiwibW9kdWxlIiwiZXhwb3J0cyIsInV0aWxzIiwibm9ybWFsaXplSGVhZGVyTmFtZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwic2V0Q29udGVudFR5cGVJZlVuc2V0IiwiaGVhZGVycyIsInZhbHVlIiwiZ2V0RGVmYXVsdEFkYXB0ZXIiLCJhZGFwdGVyIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm9jZXNzIiwiZGVmYXVsdHMiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInBhcnNlIiwiZSIsInRpbWVvdXQiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwibWF4Q29udGVudExlbmd0aCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiY29tbW9uIiwiZm9yRWFjaE1ldGhvZE5vRGF0YSIsIm1ldGhvZCIsImZvckVhY2hNZXRob2RXaXRoRGF0YSIsIndyYXAiLCJhcmdzIiwiQXJyYXkiLCJhcHBseSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsInNldHRsZSIsImJ1aWxkVVJMIiwicGFyc2VIZWFkZXJzIiwiaXNVUkxTYW1lT3JpZ2luIiwiY3JlYXRlRXJyb3IiLCJidG9hIiwieGhyQWRhcHRlciIsImNvbmZpZyIsIlByb21pc2UiLCJkaXNwYXRjaFhoclJlcXVlc3QiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3QiLCJsb2FkRXZlbnQiLCJ4RG9tYWluIiwiTk9ERV9FTlYiLCJYRG9tYWluUmVxdWVzdCIsInVybCIsIm9ucHJvZ3Jlc3MiLCJoYW5kbGVQcm9ncmVzcyIsIm9udGltZW91dCIsImhhbmRsZVRpbWVvdXQiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJvcGVuIiwidG9VcHBlckNhc2UiLCJwYXJhbXMiLCJwYXJhbXNTZXJpYWxpemVyIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJyZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwiaGFuZGxlRXJyb3IiLCJjb29raWVzIiwieHNyZlZhbHVlIiwid2l0aENyZWRlbnRpYWxzIiwicmVhZCIsInVuZGVmaW5lZCIsInNldFJlcXVlc3RIZWFkZXIiLCJ0b0xvd2VyQ2FzZSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsVG9rZW4iLCJwcm9taXNlIiwidGhlbiIsIm9uQ2FuY2VsZWQiLCJjYW5jZWwiLCJhYm9ydCIsInNlbmQiLCJlbmhhbmNlRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImVycm9yIiwiaXNDYW5jZWwiLCJfX0NBTkNFTF9fIiwiQ2FuY2VsIiwiZGVwVGVzdCIsImFzc2lnbiIsImFqYXhHZXRVc2VyUGVybWlzc2lvbnMiLCJwcm9wcyIsImdldERhdGEiLCJwZXJtc0xpbmsiLCJnZXRFbnRpdHlUeXBlIiwiZW50aXR5RGF0YSIsImxpc3ROYW1lIiwidGVzdCIsImdldExpc3RJbmZvIiwiTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWUiLCJub25EZWxldGVQcm9jZXNzIiwiaGVhZGVyRGF0YSIsInR5cGUiLCJpdGVtIiwiaW5mb1RvU2VydmVyIiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJGb3JtRGlnZXN0VmFsdWUiLCJBY2NlcHQiLCJhamF4SGVscGVycyIsImF4aW9zIiwibGlzdEl0ZW1VcmwiLCJkZWxldGVQcm9jZXNzIiwidXJsTW9kaWZpZXIiLCJlbmRQb2ludCIsImNvbmZpZ3VyZWRVcmwiLCJnZXRBbGxMaXN0UmVzdWx0cyIsImxpc3RHVUlEIiwibGlzdFRpdGxlIiwibGlzdFVybCIsImN1cnJlbnRSZXN1bHRzIiwiYWxsUmVzdWx0cyIsImFqYXhHZXRCYXRjaCIsImFycmF5T2ZVcmxzIiwiYmF0Y2hHVUlEIiwiY3JlYXRlR1VJRCIsImJhdGNoQm9keSIsImJhdGNoSGVhZGVyIiwiYmF0Y2hDb250ZW50cyIsImpvaW4iLCJwYXJzZWRBcnJheSIsInJlc3BvbnNlVG9BcnJheSIsInNwbGl0IiwiY3VycmVudExpbmUiLCJjaGFyQXQiLCJ0cnlQYXJzZUpzb24iLCJnZXRCYXRjaE1ldGVyZWQiLCJ1cmxzRm9yVHJpcCIsInBlclRyaXBDb3VudCIsInRvdGFsSXRlbXMiLCJnZXRVcmxzIiwidG90YWxQZXJUcmlwIiwibnVtYmVyVG9TdGFydEF0Iiwib3JpZ2luIiwiZ2V0QmF0Y2hQcm9maWxlcyIsInByb2ZpbGVVcmxzIiwicHJvZmlsZUVtYWlscyIsImdldFVSTE9yaWdpbiIsInVybEZvclNpdGUiLCJlbWFpbCIsImVuY29kZWQiLCJlbmNvZGVBY2NvdW50TmFtZSIsInBlb3BsZVNlYXJjaCIsInNlcnZlclF1ZXJ5RGF0YSIsInN0YXJ0cm93Iiwicm93bGltaXQiLCJUcmltRHVwbGljYXRlcyIsInNlbGVjdHByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwic291cmNlSWQiLCJxdWVyeXRleHQiLCJxdWVyeSIsImVtcERhdGEiLCJyZWxldmFudFJlc3VsdHMiLCJQcmltYXJ5UXVlcnlSZXN1bHQiLCJSZWxldmFudFJlc3VsdHMiLCJUYWJsZSIsIlJvd3MiLCJUb3RhbFJvd3MiLCJSb3dDb3VudCIsImVuc3VyZVVzZXIiLCJjb250ZW50VHlwZSIsImdldFNpdGVVc2VySW5mb0J5RW1haWwiLCJnZXRJdGVtc0J5Q2FtbCIsImNhbWwiLCJoZWFkZXJkYXRhIiwiZ2V0VXNlclNpdGVQZXJtaXNzaW9ucyIsImVuY29kZWRFbWFpbCIsImdldFVzZXJMaXN0UGVybWlzc2lvbnMiLCJnZXRDdXJyZW50VXNlckdyb3VwcyIsInVzZXJJZCIsImdyb3VwcyIsImdyb3VwQXJyYXkiLCJUaXRsZSIsImNyZWF0ZUl0ZW0iLCJ1cGRhdGVJdGVtIiwiZXRhZyIsImRlbGV0ZUl0ZW0iLCJyZWN5Y2xlSXRlbSIsImdldFVzZXJQcm9maWxlRGF0YSIsImFkZG9uIiwidXNlckRhdGEiLCJVc2VyUHJvZmlsZVByb3BlcnRpZXMiLCJnZXRMaXN0Q29sdW1ucyIsImFsbERhdGEiLCJtZXRlcmVkQWpheCIsIml0ZW1zIiwibWV0ZXJlZENyZWF0ZUl0ZW1zIiwicmVxdWVzdFBybyIsIl9jaGVja01ldGVyZWREYXRhVHlwZSIsIl9nZXRNZXRlcmVkTGlzdE5hbWUiLCJlbnRpdHlUeXBlIiwicHJlcGVkSXRlbXMiLCJtYXAiLCJzZXRQcmVQcm9jZXNzaW5nQ0IiLCJpdGVtRGF0YSIsImluZGV4IiwiaXRlbUNyZWF0ZWRDQiIsInNldEl0ZW1Qcm9jZXNzZWRDQiIsIml0ZW1Db21wbGV0ZWRDQiIsImluaXQiLCJtZXRlcmVkVXBkYXRlSXRlbXMiLCJ1cGRhdGVJbmZvIiwiaXRlbUlkIiwibWV0ZXJlZFJlY3ljbGVJdGVtcyIsIkF4aW9zIiwiY3JlYXRlSW5zdGFuY2UiLCJkZWZhdWx0Q29uZmlnIiwiaW5zdGFuY2UiLCJjcmVhdGUiLCJpbnN0YW5jZUNvbmZpZyIsIkNhbmNlbFRva2VuIiwiYWxsIiwicHJvbWlzZXMiLCJzcHJlYWQiLCJkZWZhdWx0IiwiaXNTbG93QnVmZmVyIiwiX2lzQnVmZmVyIiwiY29uc3RydWN0b3IiLCJyZWFkRmxvYXRMRSIsInNsaWNlIiwiSW50ZXJjZXB0b3JNYW5hZ2VyIiwiZGlzcGF0Y2hSZXF1ZXN0IiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwiaW50ZXJjZXB0b3JzIiwiYmFzZVVSTCIsImNoYWluIiwidW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInVuc2hpZnQiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsInNoaWZ0Iiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwicGFyc2VWYWx1ZSIsInYiLCJ0b0lTT1N0cmluZyIsInBhcnNlZCIsInBhcnNlciIsImxpbmUiLCJzdWJzdHIiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJtc2llIiwidXNlckFnZW50IiwidXJsUGFyc2luZ05vZGUiLCJjcmVhdGVFbGVtZW50Iiwib3JpZ2luVVJMIiwicmVzb2x2ZVVSTCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJwcm90b2NvbCIsImhvc3QiLCJzZWFyY2giLCJoYXNoIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJsb2NhdGlvbiIsInJlcXVlc3RVUkwiLCJub25TdGFuZGFyZEJyb3dzZXJFbnYiLCJjaGFycyIsIkUiLCJpbnB1dCIsIlN0cmluZyIsIm91dHB1dCIsImJsb2NrIiwiY2hhckNvZGUiLCJpZHgiLCJjaGFyQ29kZUF0Iiwid3JpdGUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsImNvb2tpZSIsIkRhdGUiLCJ0b0dNVFN0cmluZyIsIm1hdGNoIiwiUmVnRXhwIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicmVtb3ZlIiwibm93IiwiaGFuZGxlcnMiLCJ1c2UiLCJlamVjdCIsImlkIiwiZm9yRWFjaEhhbmRsZXIiLCJoIiwidHJhbnNmb3JtRGF0YSIsInRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQiLCJ0aHJvd0lmUmVxdWVzdGVkIiwiY2xlYW5IZWFkZXJDb25maWciLCJvbkFkYXB0ZXJSZXNvbHV0aW9uIiwib25BZGFwdGVyUmVqZWN0aW9uIiwicmVhc29uIiwiZm5zIiwidHJhbnNmb3JtIiwicmVsYXRpdmVVUkwiLCJleGVjdXRvciIsIlR5cGVFcnJvciIsInJlc29sdmVQcm9taXNlIiwicHJvbWlzZUV4ZWN1dG9yIiwidG9rZW4iLCJzb3VyY2UiLCJjIiwiY2FsbGJhY2siLCJhcnIiLCJtaW5pbWFsTWV0YSIsInZlcmJvc2VNZXRhIiwibGlzdE5hbWVQcmVzZW50IiwibWV0ZXJlZEl0ZW1zSW5jb3JyZWN0RGF0YVR5cGUiLCJsaXN0SXRlbUVudGl0eVBhdHRlcm4iLCJjcmVhdGVsaXN0aXRlbXR5cGUiLCJjaGVja1VybE9yaWdpbiIsImxpc3RVcmxDb25maWd1cmUiLCJsaXN0SXRlbVVybENvbmZpZ3VyZSIsInBhcnNlQmFzZVBlcm1pc3Npb25zIiwicGVybWlzc2lvbnMiLCJTUCIsIkJhc2VQZXJtaXNzaW9ucyIsImluaXRQcm9wZXJ0aWVzRnJvbUpzb24iLCJwZXJtTGV2ZWxzIiwicGVybUxldmVsTmFtZSIsIlBlcm1pc3Npb25LaW5kIiwicGVybUxldmVsIiwiaGFzIiwiY3JlYXRlR2V0QWxsVXJsIiwic2VsZWN0IiwidG9wIiwiZXhwYW5kIiwiZmlsdGVyIiwib3JkZXJCeSIsIk1ldGVyZWRSZXF1ZXN0UHJvY2Vzc29yIiwiX3Byb2Nlc3NpbmdJdGVtcyIsIl90b3RhbFRvUHJvY2VzcyIsInRvdGFsUHJvY2Vzc2luZyIsImNvbXBsZXRlZCIsIl9tYWluUmVzb2x2ZSIsIl9wb3N0UHJvY2Vzc2luZ0NCIiwicGxhY2UiLCJfcHJvbWlzZURvbmVIZWxwZXIiLCJfcG9zdFByb2Nlc3NpbmciLCJjYXRjaCIsIl90b3RhbFByb2Nlc3NpbmdJdGVtcyIsImFkZGVkSXRlbXMiLCJuZXh0QXZhaWxhYmxlSW5kZXgiLCJuZXh0SXRlbVRvUHJvY2VzcyIsImNiUHJvY2Vzc2VkIiwiX3RvUHJvY2Vzc2luZ0NCIiwiX2FkZFRvUHJvY2Vzc29yIiwiX3ByZVByb2Nlc3NpbmciLCJfZmluc2hQcm9jZXNzb3IiLCJjYiIsImNvdW50IiwiaXRlbXNUb1Byb2Nlc3MiLCJfbWFpblJlamVjdCIsImluY29ycmVjdEFkZFRvUHJvY2Vzc2luZ1JldHVyblR5cGUiLCJjb21wbGV0ZWRTdWNjZXNzIiwiY29tcGxldGVkRmFpbCIsIm5vUHJlUHJvY3Nzb3JDQiIsImluY29ycmVjdERhdGFUeXBlRm9ySXRlbXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7O0FBRUEsSUFBSUEsT0FBTyxtQkFBQUMsQ0FBUSxDQUFSLENBQVg7QUFDQSxJQUFJQyxXQUFXLG1CQUFBRCxDQUFRLEVBQVIsQ0FBZjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJRSxXQUFXQyxPQUFPQyxTQUFQLENBQWlCRixRQUFoQzs7QUFFQTs7Ozs7O0FBTUEsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDcEIsU0FBT0osU0FBU0ssSUFBVCxDQUFjRCxHQUFkLE1BQXVCLGdCQUE5QjtBQUNEOztBQUVEOzs7Ozs7QUFNQSxTQUFT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LElBQU1DLGtCQUFrQixzRkFBeEI7QUFDQSxJQUFNQyw0QkFBNEIsZ0RBQWxDLEMiLCJmaWxlIjoiLi9saWJyYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGQtc3B1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInBkLXNwdXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZHNwc2VydmVyYWpheFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInBkLXNwdXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRzcHNlcnZlcmFqYXhcIl0gPSBmYWN0b3J5KHJvb3RbXCJwZHNwdXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwMDg5MGU0OTNmN2M4MzE4NjlmNSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiAhaXNBcnJheShvYmopKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInBkLXNwdXRpbFwiLFwiY29tbW9uanMyXCI6XCJwZC1zcHV0aWxcIixcImFtZFwiOlwicGQtc3B1dGlsXCIsXCJyb290XCI6XCJwZHNwdXRpbFwifVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuXHQ8cD5cclxuXHRSZXF1aXJlczpcclxuXHRcdDx1bD5cclxuXHRcdDxsaT5iYWJlbCBwb2x5ZmlsbCAtIG9iamVjdCBhc3NpZ24gYW5kIHByb21pc2U8L2xpPlxyXG5cdFx0PGxpPmF4aW9zIC0gdGhlIHJlc3BvbnNlIG9mIHRoZSBzZXJ2ZXIgaXMgaW4gdGhlIGRhdGEgcHJvcGVydHkgd2hlbiBhIHBsYWluIGF4aW9zIHJlc3BvbnNlIGlzIHJldHVybmVkPC9saT5cclxuXHRcdDxsaT5wZC1zcHV0aWwgLSBlbmNvZGVBY2NvdW50TmFtZSwgZ2V0VVJMT3JpZ2luPC9saT5cclxuXHRcdDwvdWw+XHJcblx0PC9wPlxyXG5cdDxwPlxyXG5cdFx0cGRzcHNlcnZlcmFqYXggLSBpcyBleHBvc2VkIGlzIGEgZ2xvYmFsIG5hbWVzcGFjZSBpZiBhZGRlZCB0byBicm93c2VyIHZpYSBzY3JpcHQgdGFnXHJcblx0PC9wPlxyXG5cdEBhdXRob3IgXCJKZXJlZCBNY0dsb2hvblwiXHJcblx0QG1vZHVsZSBwZHNwc2VydmVyYWpheFxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICogYXMgYWpheEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IHtlbmNvZGVBY2NvdW50TmFtZSwgZ2V0VVJMT3JpZ2luLCBjcmVhdGVHVUlEfSBmcm9tICdwZC1zcHV0aWwnO1xyXG5pbXBvcnQge01ldGVyZWRSZXF1ZXN0UHJvY2Vzc29yfSBmcm9tICdwZC1tZXRlcmVkcmVxdWVzdHByb2Nlc3Nvcic7XHJcblxyXG5jb25zdCBkZXBUZXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0dHJ5IHtcclxuXHRcdGlmIChQcm9taXNlICYmIE9iamVjdC5hc3NpZ24pIHtcclxuXHRcdFx0Ly9hbGwgZ29vZCBtb3ZlIG9uXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgQVBJIGFuZCBPYmplY3QuYXNzaWduIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBhZGQgYSBwb2x5ZmlsbCB0byBjb250aW51ZS5cIik7XHJcblx0fVxyXG5cdHRyeSB7XHJcblx0XHRpZiAoYXhpb3MpIHtcclxuXHRcdFx0Ly9hbGwgZ29vZCBtb3ZlIG9uXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcImF4aW9zIEFQSSBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgYWRkIGEgYXhpb3MgdG8gY29udGludWUuXCIpO1xyXG5cdH1cclxufTtcclxuZGVwVGVzdCgpO1xyXG5cclxuY29uc3QgYWpheEdldFVzZXJQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdHJldHVybiBnZXREYXRhKHByb3BzLnBlcm1zTGluaylcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cmV0dXJuIGFqYXhIZWxwZXJzLnBhcnNlQmFzZVBlcm1pc3Npb25zKHJlc3BvbnNlLmRhdGEpO1xyXG5cdH0pO1xyXG59O1xyXG5jb25zdCBnZXRFbnRpdHlUeXBlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHRcclxuXHR2YXIgZW50aXR5RGF0YTtcclxuXHJcblx0aWYgKHByb3BzLmxpc3ROYW1lKSB7XHJcblx0XHRlbnRpdHlEYXRhID0gYWpheEhlbHBlcnMubGlzdEl0ZW1FbnRpdHlQYXR0ZXJuLnRlc3QocHJvcHMubGlzdE5hbWUpIFxyXG5cdFx0PyBwcm9wcy5saXN0TmFtZVxyXG5cdFx0OiBhamF4SGVscGVycy5jcmVhdGVsaXN0aXRlbXR5cGUocHJvcHMubGlzdE5hbWUpO1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRpdHlEYXRhKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBnZXRMaXN0SW5mbyhwcm9wcylcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWU7XHJcblx0fSk7XHJcbn07XHJcbmNvbnN0IG5vbkRlbGV0ZVByb2Nlc3MgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRpZighcHJvcHMuaGVhZGVyRGF0YSkge1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YSA9IHt9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdldEVudGl0eVR5cGUocHJvcHMpXHJcblx0LnRoZW4oZnVuY3Rpb24odHlwZSkge1xyXG5cdFx0cHJvcHMuaXRlbSA9IE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0XHQnX19tZXRhZGF0YSc6IHsndHlwZSc6IHR5cGV9XHJcblx0XHR9LCBwcm9wcy5pbmZvVG9TZXJ2ZXIpO1xyXG5cclxuXHRcdHJldHVybiBnZXRDb250ZXh0KHByb3BzKTtcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuXHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhWydYLVJlcXVlc3REaWdlc3QnXSA9IGNvbnRleHQuZGF0YS5Gb3JtRGlnZXN0VmFsdWU7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhLkFjY2VwdCA9IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnQ29udGVudC1UeXBlJ10gPSBhamF4SGVscGVycy52ZXJib3NlTWV0YTtcclxuXHJcblx0XHRhamF4SGVscGVycy5saXN0SXRlbVVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdFx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwcm9wcy5saXN0SXRlbVVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHByb3BzLml0ZW0pLFxyXG5cdFx0XHRoZWFkZXJzOiBwcm9wcy5oZWFkZXJEYXRhXHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuY29uc3QgZGVsZXRlUHJvY2VzcyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5oZWFkZXJEYXRhKSB7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhID0ge307XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2V0Q29udGV4dChwcm9wcylcclxuXHQudGhlbihmdW5jdGlvbihjb250ZXh0KSB7XHJcblxyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnWC1SZXF1ZXN0RGlnZXN0J10gPSBjb250ZXh0LmRhdGEuRm9ybURpZ2VzdFZhbHVlO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YS5BY2NlcHQgPSBhamF4SGVscGVycy5taW5pbWFsTWV0YTtcclxuXHRcdHByb3BzLmhlYWRlckRhdGFbJ0NvbnRlbnQtVHlwZSddID0gYWpheEhlbHBlcnMudmVyYm9zZU1ldGE7XHJcblxyXG5cdFx0YWpheEhlbHBlcnMubGlzdEl0ZW1VcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRcdGlmIChwcm9wcy51cmxNb2RpZmllcikge1xyXG5cdFx0XHRwcm9wcy5saXN0SXRlbVVybCArPSBwcm9wcy51cmxNb2RpZmllcjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0XHR1cmw6IHByb3BzLmxpc3RJdGVtVXJsLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczogcHJvcHMuaGVhZGVyRGF0YVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0cyBhIGNvbnRleHQgb2JqZWN0IGZvciBzZXJ2ZXIgcmVxdWVzdHMuXHJcbiAqIHRoZSBrZXkgZnJvbSByZXNwb25zZSBpcyBGb3JtRGlnZXN0VmFsdWVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlLjxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQocHJvcHMpIHtcclxuXHRcclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS9jb250ZXh0aW5mb1wiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRoZWFkZXJzOiB7IFwiQWNjZXB0XCI6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhIH0sXHJcblx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsXHJcblx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdHByb3BzLmVuZFBvaW50ID0gbnVsbDtcclxuXHRcdHByb3BzLmNvbmZpZ3VyZWRVcmwgPSBudWxsO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgZGF0YSBmcm9tIHNlcnZlciB1c2luZyB0aGUgUkVTVCBlbmRwb2ludFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gZnVsbCBvZGF0YSB1cmxcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKHVybCkge1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHsnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGF9LFxyXG5cdFx0dXJsOiB1cmxcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0cyBhbGwgcmVzdWx0cyBmb3Igc2VydmVyIHJlcXVlc3RzLlxyXG4gKiBvbmNlIHRoZSBwcm9taXNlIHJlc29sdmVzIHlvdSBnZXQgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGFyZSB0aGUgc2VydmVycyByZXNwb25zZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuc2VsZWN0XVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmZpbHRlcl1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5leHBhbmRdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMudG9wXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yZGVyQnldXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlLjxvYmplY3RbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTGlzdFJlc3VsdHMocHJvcHMpIHtcclxuXHJcblx0aWYoIXByb3BzLmxpc3RHVUlEICYmICFwcm9wcy5saXN0VGl0bGUpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIm11c3QgcGFzcyBsaXN0R1VJRCBvciBsaXN0VGl0bGUgdG8gZ2V0QWxsTGlzdFJlc3VsdHNcIik7XHJcblx0fVxyXG5cclxuXHRhamF4SGVscGVycy5jcmVhdGVHZXRBbGxVcmwocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gZ2V0RGF0YShwcm9wcy5saXN0VXJsKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHR2YXIgY3VycmVudFJlc3VsdHMgPSBwcm9wcy5hbGxSZXN1bHRzIHx8IFtdLFxyXG5cdFx0XHRyZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuXHRcdHByb3BzLmFsbFJlc3VsdHMgPSBjdXJyZW50UmVzdWx0cy5jb25jYXQocmVzcG9uc2VEYXRhLnZhbHVlKTtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3BvbnNlRGF0YVsnb2RhdGEubmV4dExpbmsnXSkge1xyXG5cdFx0XHRwcm9wcy5saXN0VXJsID0gcmVzcG9uc2VEYXRhWydvZGF0YS5uZXh0TGluayddO1xyXG5cdFx0XHRyZXR1cm4gZ2V0QWxsTGlzdFJlc3VsdHMocHJvcHMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BzLmFsbFJlc3VsdHM7XHJcblx0fSk7XHJcbn1cclxuY29uc3QgYWpheEdldEJhdGNoID0gZnVuY3Rpb24ocHJvcHMsIGFycmF5T2ZVcmxzKSB7XHJcblxyXG5cdHZhciBiYXRjaEdVSUQgPSBjcmVhdGVHVUlEKCksXHJcblx0XHRiYXRjaEJvZHksXHJcblx0XHRiYXRjaEhlYWRlcixcclxuXHRcdGJhdGNoQ29udGVudHMgPSBbXTtcclxuXHJcblx0Ly9iYXRjaCAob3BlcmF0aW9uKVxyXG5cdGFycmF5T2ZVcmxzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCctLWJhdGNoXycgKyBiYXRjaEdVSUQpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2h0dHAnKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogYmluYXJ5Jyk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJycpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCdHRVQgJyArIGl0ZW0gKyAnIEhUVFAvMS4xJyk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goYEFjY2VwdDogJHthamF4SGVscGVycy5taW5pbWFsTWV0YX1gKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnJyk7XHJcblx0fSk7XHJcblxyXG5cdGJhdGNoQ29udGVudHMucHVzaCgnLS1iYXRjaF8nICsgYmF0Y2hHVUlEICsgJy0tJyk7XHJcblxyXG5cdGJhdGNoQm9keSA9IGJhdGNoQ29udGVudHMuam9pbignXFxyXFxuJyk7XHJcblxyXG5cdHJldHVybiBnZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdHByb3BzLmVuZFBvaW50ID0gJ19hcGkvJGJhdGNoJztcclxuXHRcdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0XHRiYXRjaEhlYWRlciA9IHtcclxuXHRcdCdYLVJlcXVlc3REaWdlc3QnOiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZSxcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L21peGVkOyBib3VuZGFyeT1cImJhdGNoXycgKyBiYXRjaEdVSUQgKyAnXCInXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiBiYXRjaEJvZHksXHJcblx0XHRcdGhlYWRlcnM6IGJhdGNoSGVhZGVyXHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdHZhciBwYXJzZWRBcnJheSA9IFtdLFxyXG5cdFx0XHRcdHJlc3BvbnNlVG9BcnJheSA9IHJlc3BvbnNlLmRhdGEuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgY3VycmVudExpbmUgPSAwOyBjdXJyZW50TGluZSA8IHJlc3BvbnNlVG9BcnJheS5sZW5ndGg7IGN1cnJlbnRMaW5lKyspIHtcclxuXHRcdFx0XHRpZiAocmVzcG9uc2VUb0FycmF5W2N1cnJlbnRMaW5lXS5jaGFyQXQoMCkgPT09ICd7Jykge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHQvLyBwYXJzZSB0aGUgSlNPTiByZXNwb25zZS4uLlxyXG5cdFx0XHRcdFx0dmFyIHRyeVBhcnNlSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VUb0FycmF5W2N1cnJlbnRMaW5lXSk7XHJcblxyXG5cdFx0XHRcdFx0cGFyc2VkQXJyYXkucHVzaCh0cnlQYXJzZUpzb24pO1xyXG5cclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHQvLyBkb24ndCBkbyBhbnl0aGluZy4uLiBqdXN0IGtlZXAgbW92aW5nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBhcnNlZEFycmF5O1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufTtcclxuLyoqXHJcbiAqIEdldHMgYWxsIGl0ZW1zIHJlcXVlc3RlZCBpbiB0aGUgZ2V0VXJscyBwcm9wZXJ0eSAoYmF0Y2ggcmVxdWVzdClcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSByZWxhdGl2ZSB1cmwgb2YgdGhlIHNpdGUgdGhhdCBjb250YWlucyB0aGUgZGF0YVxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcy5nZXRVcmxzIC0gZnVsbCBvZGF0YSB1cmxzXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXRjaE1ldGVyZWQocHJvcHMpIHtcclxuXHRsZXQgdXJsc0ZvclRyaXAgPSBbXSxcclxuXHRcdHBlclRyaXBDb3VudCA9IDA7XHJcblxyXG5cdHByb3BzLnRvdGFsSXRlbXMgPSBwcm9wcy5nZXRVcmxzLmxlbmd0aDtcclxuXHRwcm9wcy50b3RhbFBlclRyaXAgPSA1MDtcclxuXHRwcm9wcy5hbGxSZXN1bHRzID0gW107XHJcblx0cHJvcHMubnVtYmVyVG9TdGFydEF0ID0gMDtcclxuXHJcblx0Zm9yICg7IHByb3BzLm51bWJlclRvU3RhcnRBdCA8IHByb3BzLnRvdGFsSXRlbXM7IHByb3BzLm51bWJlclRvU3RhcnRBdCsrKSB7XHJcblx0XHRsZXQgdXJsID0gcHJvcHMuZ2V0VXJsc1twcm9wcy5udW1iZXJUb1N0YXJ0QXRdO1xyXG5cdFx0dXJsc0ZvclRyaXAucHVzaCh1cmwpO1xyXG5cdFx0cGVyVHJpcENvdW50Kys7XHJcblxyXG5cdFx0aWYgKHBlclRyaXBDb3VudCA9PT0gcHJvcHMudG90YWxQZXJUcmlwKSB7XHJcblx0XHRcdHByb3BzLm51bWJlclRvU3RhcnRBdCsrO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBhamF4R2V0QmF0Y2goe29yaWdpbjogcHJvcHMub3JpZ2luLCB1cmw6IHByb3BzLnVybH0sIHVybHNGb3JUcmlwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRwcm9wcy5hbGxSZXN1bHRzID0gcHJvcHMuYWxsUmVzdWx0cy5jb25jYXQocmVzcG9uc2UpO1xyXG5cclxuXHRcdGlmIChwcm9wcy5udW1iZXJUb1N0YXJ0QXQgPCBwcm9wcy50b3RhbEl0ZW1zKSB7XHJcblx0XHRcdHJldHVybiBnZXRCYXRjaE1ldGVyZWQocHJvcHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwcm9wcy5hbGxSZXN1bHRzO1xyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdXNlciBwcm9maWxlcyBmcm9tIHRoZSBzZXJ2ZXIgKGJhdGNoIHJlcXVlc3QpXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcy5wcm9maWxlRW1haWxzIC0gZW1haWwgYWRkcmVzc2VzIG9mIHRoZSB1c2VycyB5b3Ugd2FudCBwcm9maWxlIGRhdGEgZm9yXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXRjaFByb2ZpbGVzKHByb3BzKSB7XHJcblx0bGV0IHByb2ZpbGVVcmxzID0gbnVsbDtcclxuXHRpZiAoIXByb3BzLnByb2ZpbGVFbWFpbHMgfHwgcHJvcHMucHJvZmlsZUVtYWlscy5sZW5ndGggPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcInByb2ZpbGUgZW1haWxzIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIHRoZSBiYXRjaCBwcm9maWxlIGZ1bmN0aW9uXCIpO1xyXG5cdH1cclxuXHJcblx0cHJvcHMub3JpZ2luID0gZ2V0VVJMT3JpZ2luKCk7XHJcblx0cHJvZmlsZVVybHMgPSBbXTtcclxuXHJcblx0bGV0IHVybEZvclNpdGUgPSBwcm9wcy5vcmlnaW4gKyBwcm9wcy51cmw7XHJcblx0cHJvcHMucHJvZmlsZUVtYWlscy5mb3JFYWNoKChlbWFpbCkgPT4ge1xyXG5cdFx0bGV0IGVuY29kZWQgPSBlbmNvZGVBY2NvdW50TmFtZShlbWFpbCk7XHJcblx0XHRwcm9maWxlVXJscy5wdXNoKGAke3VybEZvclNpdGV9L19hcGkvc3AudXNlcnByb2ZpbGVzLnBlb3BsZW1hbmFnZXIvR2V0UHJvcGVydGllc0ZvcignJHtlbmNvZGVkfScpPyRzZWxlY3Q9VXNlclByb2ZpbGVQcm9wZXJ0aWVzYCk7XHJcblx0fSk7XHJcblxyXG5cdGxldCB7b3JpZ2luLCB1cmx9ID0gcHJvcHM7XHJcblx0XHJcblx0cmV0dXJuIGdldEJhdGNoTWV0ZXJlZCh7XHJcblx0XHRvcmlnaW46IG9yaWdpbixcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0Z2V0VXJsczogcHJvZmlsZVVybHNcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0IGxpc3Qgb3IgbGlicmFyeSBwcm9wZXJ0aWVzIGZyb20gc2VydmVyXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBhIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RJbmZvKHByb3BzKSB7XHJcblxyXG5cdGFqYXhIZWxwZXJzLmxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cdHJldHVybiBnZXREYXRhKHByb3BzLmxpc3RVcmwpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdXNlciBwcm9maWxlIGluZm8gZnJvbSB0aGUgU2hhcmVQb2ludCBzZWFyY2ggc2VydmljZVxyXG4gKiBAcGFyYW0ge29iamVjdH1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnF1ZXJ5IC0gcXVlcnkgdGhhdCBpcyBwYXNzZWQgdG8gc2VhcmNoIHNlcnZpY2UsIGV4IFwiJ1wiICsgJ0J1cmVhdT1cIicrIGRpdmlzaW9uTmFtZSArICdcIlxcJydcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5zb3VyY2VJZF0gLSBzb3VyY2UgaWQgZm9yIHRoZSBzZWFyY2ggc2VydmljZSB0byB1c2UsIGRlZmF1bHRzIHRvIHRoZSBvdXQgb2YgdGhlIGJveCBwZW9wbGUgc291cmNlIGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzLnByb3BlcnRpZXMgLSBzcGVjaWZ5IHdoaWNoIHByb3BlcnRpZXMgeW91IHdhbnQgYmFjayBmcm9tIHRoZSByZXF1ZXN0XHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZW9wbGVTZWFyY2gocHJvcHMpIHtcclxuXHJcblx0dmFyIGFsbFJlc3VsdHMgPSBwcm9wcy5jdXJyZW50UmVzdWx0cyB8fCBbXSxcclxuXHRcdHNlcnZlclF1ZXJ5RGF0YSA9IHtcclxuXHRcdFx0c3RhcnRyb3c6IDAsXHJcblx0XHRcdHJvd2xpbWl0OiA1MDAsXHJcblx0XHRcdFRyaW1EdXBsaWNhdGVzOiBmYWxzZSxcclxuXHRcdFx0c2VsZWN0cHJvcGVydGllczogYCcke3Byb3BzLnByb3BlcnRpZXMuam9pbignLCcpfSdgXHJcblx0XHR9O1xyXG5cclxuXHRzZXJ2ZXJRdWVyeURhdGEuc3RhcnRyb3cgPSBwcm9wcy5zdGFydHJvdyA/IHByb3BzLnN0YXJ0cm93IDogMDtcclxuXHRzZXJ2ZXJRdWVyeURhdGEuc291cmNlSWQgPSBwcm9wcy5zb3VyY2VJZCA/IGAnJHtwcm9wcy5zb3VyY2VJZH0nYCA6IFwiJ2IwOWE3OTkwLTA1ZWEtNGFmOS04MWVmLWVkZmFiMTZjNGUzMSdcIjtcclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvc2VhcmNoL3F1ZXJ5XCI7XHJcblx0c2VydmVyUXVlcnlEYXRhLnF1ZXJ5dGV4dCA9IGAnJHtwcm9wcy5xdWVyeX0nYDtcclxuXHJcblx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0dXJsOiBwcm9wcy5jb25maWd1cmVkVXJsLFxyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHsnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGF9LFxyXG5cdFx0cGFyYW1zOiBzZXJ2ZXJRdWVyeURhdGFcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGVtcERhdGEpIHtcclxuXHJcblx0XHR2YXIgcmVsZXZhbnRSZXN1bHRzID0gZW1wRGF0YS5kYXRhLlByaW1hcnlRdWVyeVJlc3VsdC5SZWxldmFudFJlc3VsdHM7XHJcblxyXG5cdFx0YWxsUmVzdWx0cyA9IGFsbFJlc3VsdHMuY29uY2F0KHJlbGV2YW50UmVzdWx0cy5UYWJsZS5Sb3dzKTtcclxuXHRcdHByb3BzLmN1cnJlbnRSZXN1bHRzID0gYWxsUmVzdWx0cztcclxuXHJcblx0XHRpZiAocmVsZXZhbnRSZXN1bHRzLlRvdGFsUm93cyA+IChzZXJ2ZXJRdWVyeURhdGEuc3RhcnRyb3cgKyByZWxldmFudFJlc3VsdHMuUm93Q291bnQpKSB7XHJcblx0XHRcdHByb3BzLnN0YXJ0cm93ID0gc2VydmVyUXVlcnlEYXRhLnN0YXJ0cm93ICsgcmVsZXZhbnRSZXN1bHRzLlJvd0NvdW50O1xyXG5cdFx0XHRyZXR1cm4gcGVvcGxlU2VhcmNoKHByb3BzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBwcm9wcy5jdXJyZW50UmVzdWx0cztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vKipcclxuICogQ2hlY2tzIGlmIHVzZXIgaXMgaW4gdGhlIHNpdGUgY29sbGVjdGlvbiB1c2VyIHRhYmxlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVXNlcihwcm9wcykge1xyXG5cdFxyXG5cdHJldHVybiBnZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblx0XHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblx0XHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAvZW5zdXJlVXNlcignJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9JylgO1xyXG5cclxuXHRcdHJldHVybiBheGlvcyh7ICAgICAgIFxyXG5cdFx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsICAgXHJcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsICBcclxuXHRcdFx0Y29udGVudFR5cGU6IGFqYXhIZWxwZXJzLnZlcmJvc2VNZXRhLFxyXG5cdFx0XHRoZWFkZXJzOiB7IFxyXG5cdFx0XHRcdFwiQWNjZXB0XCI6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhLFxyXG5cdFx0XHRcdFwiWC1SZXF1ZXN0RGlnZXN0XCI6IHJlc3BvbnNlLmRhdGEuRm9ybURpZ2VzdFZhbHVlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufVxyXG4vKipcclxuICogR2V0cyB1c2VyIGluZm8gZnJvbSB0aGUgc2l0ZSBjb2xsZWN0aW9uIHVzZXIgdGFibGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5lbWFpbCAtIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdG8gcmV0cmlldmVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXRlVXNlckluZm9CeUVtYWlsKHByb3BzKSB7XHJcblxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3dlYi9zaXRldXNlcnNcIjtcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gYD8kZmlsdGVyPUxvZ2luTmFtZSBlcSAnJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9J2A7XHJcblxyXG5cdHJldHVybiBnZXREYXRhKHByb3BzLmNvbmZpZ3VyZWRVcmwpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgcmVxdWVzdCB0aGF0IHVzZXMgQ0FNTCB0byBmaWx0ZXIgcmVzdWx0c1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnF1ZXJ5IC0gQ0FNTCBxdWVyeVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtc0J5Q2FtbChwcm9wcykge1xyXG5cclxuXHRyZXR1cm4gZ2V0Q29udGV4dChwcm9wcylcclxuXHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRsZXQgcXVlcnkgPSB7IFwicXVlcnlcIiA6XHJcblx0XHRcdHtcIl9fbWV0YWRhdGFcIjogXHJcblx0XHRcdHsgXCJ0eXBlXCI6IFwiU1AuQ2FtbFF1ZXJ5XCIgfSxcclxuXHRcdFx0XHRcIlZpZXdYbWxcIjogcHJvcHMuY2FtbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aGVhZGVyZGF0YSA9IHtcclxuXHRcdFx0J0FjY2VwdCc6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogYWpheEhlbHBlcnMudmVyYm9zZU1ldGEsXHJcblx0XHRcdCdYLVJlcXVlc3REaWdlc3QnOiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHRhamF4SGVscGVycy5saXN0VXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gJy9nZXRpdGVtcyc7XHJcblxyXG5cdFx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwcm9wcy5saXN0VXJsLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkocXVlcnkpLFxyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJkYXRhXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuLyoqXHJcbiAqIEdldCBhIHVzZXJzIHBlcm1pc3Npb25zIHRvIGEgc2l0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmVtYWlsIC0gZW1haWwgb2YgdGhlIHVzZXIgdG8gZ2V0IHBlcm1pc3Npb25zIGZvclxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxzdHJpbmdbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNpdGVQZXJtaXNzaW9ucyhwcm9wcykge1xyXG5cclxuXHRsZXQgZW5jb2RlZEVtYWlsID0gZW5jb2RlQWNjb3VudE5hbWUocHJvcHMuZW1haWwpO1xyXG5cclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS93ZWJcIjtcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdHByb3BzLnBlcm1zTGluayA9IGAke3Byb3BzLmNvbmZpZ3VyZWRVcmx9L2dldHVzZXJlZmZlY3RpdmVwZXJtaXNzaW9ucyhAdXNlcik/QHVzZXI9JyR7ZW5jb2RlZEVtYWlsfSdgO1xyXG5cdHJldHVybiBhamF4R2V0VXNlclBlcm1pc3Npb25zKHByb3BzKTtcclxufVxyXG4vKipcclxuICogR2V0IGEgdXNlcnMgcGVybWlzc2lvbnMgdG8gYSBsaXN0IG9yIGxpYnJhcnlcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBvZiB0aGUgdXNlciB0byBjaGVjayBwZXJtaXNzaW9uIG9mXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPHN0aW5nW10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJMaXN0UGVybWlzc2lvbnMocHJvcHMpIHtcclxuXHJcblx0bGV0IGVuY29kZWRFbWFpbCA9IGVuY29kZUFjY291bnROYW1lKHByb3BzLmVtYWlsKTtcclxuXHJcblx0YWpheEhlbHBlcnMubGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdHByb3BzLnBlcm1zTGluayA9IGAke3Byb3BzLmxpc3RVcmx9L2dldHVzZXJlZmZlY3RpdmVwZXJtaXNzaW9ucyhAdXNlcik/QHVzZXI9JyR7ZW5jb2RlZEVtYWlsfSdgO1xyXG5cdHJldHVybiBhamF4R2V0VXNlclBlcm1pc3Npb25zKHByb3BzKTtcclxufVxyXG4vKipcclxuICogR2V0cyB0aGUgU2hhcmVQb2ludCBncm91cHMgdGhhdCBhIHVzZXIgaGFzIGJlZW4gYWRkZWQgdG8sIGlkZW50aWZ5IHRoZSB1c2VyIGJ5IHBhc3NpbmcgdGhlIGlkIG51bWJlciBvZiB0aGUgdXNlciBmb3IgdGhlIHNpdGUuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMudXNlcklkIC0gdXNlcnMgc2l0ZSBpZCBudW1iZXJcclxuICogQHJldHVybnMge3Byb21pc2U8c3RpbmdbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXJHcm91cHMocHJvcHMpIHtcclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIi9fYXBpL3dlYlwiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgL0dldFVzZXJieUlkKCR7cHJvcHMudXNlcklkfSkvR3JvdXBzYDtcclxuXHJcblx0cmV0dXJuIGdldERhdGEocHJvcHMuY29uZmlndXJlZFVybClcclxuXHQudGhlbihmdW5jdGlvbihncm91cHMpe1xyXG5cclxuXHRcdHZhciBncm91cEFycmF5ID0gW107XHJcblxyXG5cdFx0Z3JvdXBzLmRhdGEudmFsdWUuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGdyb3VwQXJyYXkucHVzaChpdGVtLlRpdGxlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBncm91cEFycmF5O1xyXG5cclxuXHR9KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNpbmdsZSBpdGVtIGluIGEgbGlzdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdE5hbWVdIC0gc2VydmVyIG5hbWUgZm9yIHRoZSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy5pbmZvVG9TZXJ2ZXIgLSBvYmplY3Qgd2hvcyBrZXkgaXMgdGhlIGNvbHVtbiBuYW1lIGFuZCB0aGUgdmFsdWUgaXMgd2hhdCB5b3Ugd2FudCBzdG9yZWQgaW4gdGhhdCBjb2x1bW5cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtKHByb3BzKSB7XHJcblx0cmV0dXJuIG5vbkRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBVcGRhdGVzIGEgc2luZ2xlIGl0ZW0gaW4gYSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0TmFtZV0gLSBzZXJ2ZXIgbmFtZSBmb3IgdGhlIGxpc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5ldGFnXSAtIGV0YWcgb2YgdGhlIGl0ZW0gdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy5pdGVtSWQgLSBpZCBvZiB0aGUgaXRlbSB0byB1cGRhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzLmluZm9Ub1NlcnZlciAtIG9iamVjdCB3aG9zIGtleSBpcyB0aGUgY29sdW1uIG5hbWUgYW5kIHRoZSB2YWx1ZSBpcyB3aGF0IHlvdSB3YW50IHN0b3JlZCBpbiB0aGF0IGNvbHVtblxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0ocHJvcHMpIHtcclxuXHJcblx0cHJvcHMuaGVhZGVyRGF0YSA9IHtcclxuXHRcdFwiWC1IVFRQLU1ldGhvZFwiOiBcIk1FUkdFXCIsXHJcblx0XHRcIklmLU1hdGNoXCI6IHByb3BzLmV0YWcgfHwgXCIqXCJcclxuXHR9O1xyXG5cdHJldHVybiBub25EZWxldGVQcm9jZXNzKHByb3BzKTtcclxufVxyXG4vKipcclxuICogRGVsZXRlcyBhIHNpbmdsZSBpdGVtIGZyb20gYSBsaXN0IG9yIGxpYnJhcnlcclxuICogYmUgd2FybmVkIGlmIHlvdSB1c2UgdGhpcyBmdW5jdGlvbiwgdGhlIGl0ZW0geW91IGRlbGV0ZSB3aWxsIGJlIGdvbmUgYW5kIHVucmVjb3ZlcmFibGUhISEhXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5ldGFnXSAtIGV0YWcgb2YgdGhlIGl0ZW0gdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy5pdGVtSWQgLSBpZCBvZiB0aGUgaXRlbSB0byBkZWxldGVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKHByb3BzKSB7XHJcblx0Ly90b2RvIHRyeSB0byBjb21wbGV0ZSB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgYW4gZXRhZ1xyXG5cdHByb3BzLmhlYWRlckRhdGEgPSB7XHJcblx0XHQnWC1IVFRQLU1ldGhvZCcgOiAnREVMRVRFJyxcclxuXHRcdFwiSWYtTWF0Y2hcIjogcHJvcHMuZXRhZyB8fCBcIipcIlxyXG5cdH07XHJcblx0cmV0dXJuIGRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBTZW5kcyBhIHNpbmdsZSBpdGVtIHRvIHRoZSByZWN5Y2xlIGJpbiBvZiB0aGUgc2l0ZSBjb2xsZWN0aW9uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLml0ZW1JZCAtIGlkIG9mIHRoZSBpdGVtIHRvIHJlY3ljbGVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN5Y2xlSXRlbShwcm9wcykge1xyXG5cclxuXHRwcm9wcy51cmxNb2RpZmllciA9IFwiL3JlY3ljbGVcIjtcclxuXHRyZXR1cm4gZGVsZXRlUHJvY2Vzcyhwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdGhlIHByb2ZpbGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgcHJvZmlsZSBzZXJ2aWNlXHJcbiAqIGlmIGVtYWlsIGlzIHBhc3NlZCB0aGVuIHRoYXQgd2lsbCBiZSB0aGUgcHJvZmlsZSBkYXRhIHlvdSBnZXQgYmFja1xyXG4gKiBpZiBlbWFpbCBpcyBub3QgcGFzc2VkIHlvdSBnZXQgY3VycmVudCB1c2VyIHByb2ZpbGUgZGF0YSBiYWNrXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZW1haWxdIC0gZW1haWwgb2YgdGhlIHVzZXIgeW91IHdhbnQgcHJvZmlsZSBkYXRhIGZvciBcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlRGF0YShwcm9wcyA9IHt9KSB7XHJcblxyXG5cdGxldCBhZGRvbiA9IG51bGw7XHJcblxyXG5cdGlmKHByb3BzLmVtYWlsKSB7XHJcblx0XHRwcm9wcy5lbmRQb2ludCA9ICdfYXBpL3NwLnVzZXJwcm9maWxlcy5wZW9wbGVtYW5hZ2VyJztcclxuXHRcdGFkZG9uID0gYC9nZXRwcm9wZXJ0aWVzZm9yKEB2KT9Adj0nJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9JyZgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvL3VybCBmb3IgZ2V0IGN1cnJlbnQgdXNlclxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSAnX2FwaS9TUC5Vc2VyUHJvZmlsZXMuUGVvcGxlTWFuYWdlci9HZXRNeVByb3BlcnRpZXMnO1xyXG5cdFx0YWRkb24gPSAnPyc7XHJcblx0fVxyXG5cdFxyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAke2FkZG9ufSRzZWxlY3Q9VXNlclByb2ZpbGVQcm9wZXJ0aWVzYDtcclxuXHRcclxuXHRyZXR1cm4gZ2V0RGF0YShwcm9wcy5jb25maWd1cmVkVXJsKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHVzZXJEYXRhKXsgLy9zdWNjZXNzXHJcblx0XHRpZiAodXNlckRhdGEuZGF0YVsnb2RhdGEubnVsbCddID09PSB0cnVlKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0cmV0dXJuIHVzZXJEYXRhLmRhdGEuVXNlclByb2ZpbGVQcm9wZXJ0aWVzO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdGhlIGNvbHVtbnMgb2YgYSBsaXN0IG9yIGxpYnJhcnlcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RDb2x1bW5zKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5hbGxEYXRhKSB7XHJcblx0XHRwcm9wcy5hbGxEYXRhID0gZmFsc2U7XHJcblx0fVxyXG5cdGFqYXhIZWxwZXJzLmxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cdHByb3BzLmxpc3RVcmwgKz0gYC9maWVsZHM/JGZpbHRlcj1IaWRkZW4gZXEgJHtwcm9wcy5hbGxEYXRhfSBhbmQgUmVhZE9ubHlGaWVsZCBlcSAke3Byb3BzLmFsbERhdGF9YDtcclxuXHJcblx0cmV0dXJuIGdldERhdGEocHJvcHMubGlzdFVybCk7XHJcbn1cclxuY2xhc3MgbWV0ZXJlZEFqYXggZXh0ZW5kcyBNZXRlcmVkUmVxdWVzdFByb2Nlc3NvcntcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cdF9jaGVja01ldGVyZWREYXRhVHlwZShwcm9wcykge1xyXG5cdFx0aWYgKCFwcm9wcy5pdGVtcyB8fCAoQXJyYXkuaXNBcnJheShwcm9wcy5pdGVtcykgPT09IGZhbHNlKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYWpheEhlbHBlcnMubWV0ZXJlZEl0ZW1zSW5jb3JyZWN0RGF0YVR5cGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfZ2V0TWV0ZXJlZExpc3ROYW1lKHByb3BzKSB7XHJcblx0XHRsZXQgZW50aXR5RGF0YSA9IG51bGw7XHJcblx0XHRcclxuXHRcdGlmIChwcm9wcy5saXN0TmFtZSkge1xyXG5cdFx0XHRlbnRpdHlEYXRhID0gUHJvbWlzZS5yZXNvbHZlKGFqYXhIZWxwZXJzLmxpc3ROYW1lUHJlc2VudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbnRpdHlEYXRhID0gZ2V0RW50aXR5VHlwZShwcm9wcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZW50aXR5RGF0YTtcclxuXHR9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBwcm9jZXNzaW5nQ29tcGxldGVkQ2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIG9yZGVyIG51bWJlciBhbmQgdGhlIHByb2Nlc3Mgc3RhdHVzIChzdWNjZXNzIG9yIGZhaWwpIHRvIHRyaWdnZXIgYW55IGNvbXBsZXRlZCBzaWRlIGVmZmVjdHNcclxuICogVGhlIG9yZGVyIG51bWJlciBpcyB5b3VyIGlkIHRvIGxvY2F0ZSBlbGVtZW50cyAoZG9tIG9yIHdoYXRldmVyKSBiYXNlZCBvbiB0aGUgc3BlY2lmaWMgaXRlbSBwcm9jZXNzaW5nXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBpdGVtQ29tcGxldGVkUHJvY2Vzc2luZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBpbmRleCBhbmQgaXRlbURhdGEgdG8gcHJvY2VzcyB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAqIGl0IE1VU1QgcmV0dXJuIGEgbmF0aXZlIHByb21pc2UuXHJcbiAqIHRoZSBvcmRlciBudW1iZXIgaXMgeW91ciBpZCB0byBsb2NhdGUgZWxlbWVudHMgKGRvbSBvciB3aGF0ZXZlcikgYmFzZWQgb24gdGhlIHNwZWNpZmljIGl0ZW0gcHJvY2Vzc2luZ1xyXG4gKlxyXG4gKiBAY2FsbGJhY2sgaXRlbVByZVByb2Nlc3NpbmdcclxuICogQHBhcmFtIHthbnl9IGl0ZW1EYXRhXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBtdWx0aXBsZSBpdGVtcyB2aWEgUkVTVCwgXHJcbiAqIGl0ZW1zIGFycmF5IHNob3VsZCBjb250YWluIG9iamVjdCB3aXRoIGEga2V5IG9mIGNvbHVtbiBuYW1lIGFuZCBwcm9wZXJ0eSBvZiB2YWx1ZSB5b3Ugd2FudCBzdG9yZWQgaW4gdGhhdCBjb2x1bW5cclxuICogZXguIHtcclxuICogXHRUaXRsZTogXCJzb21ldGhpbmdcIlxyXG4gKiB9XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge29iamVjdFtdfSBwcm9wcy5pdGVtcyAtIGl0ZW1zIHRvIGNyZWF0ZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0TmFtZV0gLSBzZXJ2ZXIgbmFtZSBmb3IgdGhlIGxpc3RcclxuICogQHBhcmFtIHtpdGVtUHJlUHJvY2Vzc2luZ30gW3Byb3BzLml0ZW1DcmVhdGVkQ0JdIC0gdGhpcyBjYWxsIGJhY2sgaXMgY2FsbGVkIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBiZSBwcm9jZXNzZWRcclxuICogQHBhcmFtIHtpdGVtQ29tcGxldGVkUHJvY2Vzc2luZ30gW3Byb3BzLml0ZW1Db21wbGV0ZWRDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiBpdGVtIGlzIGNvbXBsZXRlZFxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3RbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0ZXJlZENyZWF0ZUl0ZW1zKHByb3BzKSB7XHJcblx0XHJcblx0bGV0IHJlcXVlc3RQcm8gPSBuZXcgbWV0ZXJlZEFqYXgoKTtcclxuXHRyZXF1ZXN0UHJvLl9jaGVja01ldGVyZWREYXRhVHlwZShwcm9wcyk7XHJcblx0XHJcblx0cmV0dXJuIHJlcXVlc3RQcm8uX2dldE1ldGVyZWRMaXN0TmFtZShwcm9wcylcclxuXHQudGhlbihlbnRpdHlUeXBlID0+IHtcclxuXHRcdGlmIChlbnRpdHlUeXBlICE9PSBhamF4SGVscGVycy5saXN0TmFtZVByZXNlbnQpIHtcclxuXHRcdFx0cHJvcHMubGlzdE5hbWUgPSBlbnRpdHlUeXBlO1xyXG5cdFx0fVxyXG5cclxuXHRcdFxyXG5cdFx0bGV0IHByZXBlZEl0ZW1zID0gcHJvcHMuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRsZXQgb2JqID0ge1xyXG5cdFx0XHRcdHVybDogcHJvcHMudXJsLFxyXG5cdFx0XHRcdGxpc3ROYW1lOiBlbnRpdHlUeXBlLFxyXG5cdFx0XHRcdGluZm9Ub1NlcnZlcjogaXRlbVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAocHJvcHMubGlzdEdVSUQpIHtcclxuXHRcdFx0XHRvYmoubGlzdEdVSUQgPSBwcm9wcy5saXN0R1VJRDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvYmoubGlzdFRpdGxlID0gcHJvcHMubGlzdFRpdGxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXF1ZXN0UHJvLnNldFByZVByb2Nlc3NpbmdDQihmdW5jdGlvbihpdGVtRGF0YSwgaW5kZXgpIHtcclxuXHRcdFx0aWYgKHByb3BzLml0ZW1DcmVhdGVkQ0IpIHtcclxuXHRcdFx0XHRwcm9wcy5pdGVtQ3JlYXRlZENCKGl0ZW1EYXRhLCBpbmRleCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGNyZWF0ZUl0ZW0oaXRlbURhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXF1ZXN0UHJvLnNldEl0ZW1Qcm9jZXNzZWRDQihwcm9wcy5pdGVtQ29tcGxldGVkQ0IpO1xyXG5cdFx0cmV0dXJuIHJlcXVlc3RQcm8uaW5pdChwcmVwZWRJdGVtcyk7XHJcblxyXG5cdH0pO1xyXG5cdFxyXG59XHJcbi8qKlxyXG4gKiBVcGRhdGVzIG11bHRpcGxlIGl0ZW1zIHZpYSBSRVNULCBcclxuICogaXRlbXMgYXJyYXkgc2hvdWxkIGNvbnRhaW4gb2JqZWN0IHdpdGggMiBwcm9wZXJ0aWVzIGl0ZW1JZCBhbmQgdXBkYXRlSW5mbyBhbmQgMSBvcHRpb25hbCBwcm9wZXJ0eSBldGFnXHJcbiAqIGV4LiB7XHJcbiAqIFx0aXRlbUlkOiAzLFxyXG4gKiBcdGV0YWc6IFwiXCIzXCJcIlxyXG4gKiBcdHVwZGF0ZUluZm86IHtcclxuICogXHRcdFRpdGxlOiBcImV4YW1wbGUgc3RyaW5nXCJcclxuICogXHR9XHJcbiAqIH1cclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7b2JqZWN0W119IHByb3BzLml0ZW1zIC0gaXRlbXMgdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3ROYW1lXSAtIHNlcnZlciBuYW1lIGZvciB0aGUgbGlzdFxyXG4gKiBAcGFyYW0ge2l0ZW1QcmVQcm9jZXNzaW5nfSBbcHJvcHMuaXRlbUNyZWF0ZWRDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGJlIHByb2Nlc3NlZFxyXG4gKiBAcGFyYW0ge2l0ZW1Db21wbGV0ZWRQcm9jZXNzaW5nfSBbcHJvcHMuaXRlbUNvbXBsZXRlZENCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIGl0ZW0gaXMgY29tcGxldGVkXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXRlcmVkVXBkYXRlSXRlbXMocHJvcHMpIHtcclxuXHRsZXQgcmVxdWVzdFBybyA9IG5ldyBtZXRlcmVkQWpheCgpO1xyXG5cdHJlcXVlc3RQcm8uX2NoZWNrTWV0ZXJlZERhdGFUeXBlKHByb3BzKTtcclxuXHJcblx0cmV0dXJuIHJlcXVlc3RQcm8uX2dldE1ldGVyZWRMaXN0TmFtZShwcm9wcylcclxuXHQudGhlbihlbnRpdHlUeXBlID0+IHtcclxuXHRcdGlmIChlbnRpdHlUeXBlICE9PSBhamF4SGVscGVycy5saXN0TmFtZVByZXNlbnQpIHtcclxuXHRcdFx0cHJvcHMubGlzdE5hbWUgPSBlbnRpdHlUeXBlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgcHJlcGVkSXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdGxldCBvYmogPSB7XHJcblx0XHRcdFx0dXJsOiBwcm9wcy51cmwsXHJcblx0XHRcdFx0bGlzdE5hbWU6IGVudGl0eVR5cGUsXHJcblx0XHRcdFx0aW5mb1RvU2VydmVyOiBpdGVtLnVwZGF0ZUluZm8sXHJcblx0XHRcdFx0aXRlbUlkOiBpdGVtLml0ZW1JZCxcclxuXHRcdFx0XHRldGFnIDppdGVtLmV0YWdcclxuXHRcdFx0fTtcclxuXHRcdFx0aWYgKHByb3BzLmxpc3RHVUlEKSB7XHJcblx0XHRcdFx0b2JqLmxpc3RHVUlEID0gcHJvcHMubGlzdEdVSUQ7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b2JqLmxpc3RUaXRsZSA9IHByb3BzLmxpc3RUaXRsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmVxdWVzdFByby5zZXRQcmVQcm9jZXNzaW5nQ0IoZnVuY3Rpb24oaXRlbURhdGEsIGluZGV4KSB7XHJcblx0XHRcdGlmIChwcm9wcy5pdGVtQ3JlYXRlZENCKSB7XHJcblx0XHRcdFx0cHJvcHMuaXRlbUNyZWF0ZWRDQihpdGVtRGF0YSwgaW5kZXgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB1cGRhdGVJdGVtKGl0ZW1EYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0cmVxdWVzdFByby5zZXRJdGVtUHJvY2Vzc2VkQ0IocHJvcHMuaXRlbUNvbXBsZXRlZENCKTtcclxuXHRcdHJldHVybiByZXF1ZXN0UHJvLmluaXQocHJlcGVkSXRlbXMpO1xyXG5cdFxyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBSZWN5Y2xlcyBtdWx0aXBsZSBpdGVtcyB2aWEgUkVTVFxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtudW1iZXJbXX0gcHJvcHMuaXRlbXMgLSBpZHMgb2YgaXRlbXMgdG8gcmVjeWNsZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtpdGVtUHJlUHJvY2Vzc2luZ30gW3Byb3BzLml0ZW1DcmVhdGVkQ0JdIC0gdGhpcyBjYWxsIGJhY2sgaXMgY2FsbGVkIHdoZW4gYW4gaXRlbSBpcyBhZGRlZCB0byBiZSBwcm9jZXNzZWRcclxuICogQHBhcmFtIHtpdGVtQ29tcGxldGVkUHJvY2Vzc2luZ30gW3Byb3BzLml0ZW1Db21wbGV0ZWRDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiBpdGVtIGlzIGNvbXBsZXRlZFxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3RbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWV0ZXJlZFJlY3ljbGVJdGVtcyhwcm9wcykge1xyXG5cclxuXHRsZXQgcmVxdWVzdFBybyA9IG5ldyBtZXRlcmVkQWpheCgpO1xyXG5cdHJlcXVlc3RQcm8uX2NoZWNrTWV0ZXJlZERhdGFUeXBlKHByb3BzKTtcclxuXHRcclxuXHRsZXQgcHJlcGVkSXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcblx0XHRsZXQgb2JqID0ge1xyXG5cdFx0XHR1cmw6IHByb3BzLnVybCxcclxuXHRcdFx0aXRlbUlkOiBpdGVtXHJcblx0XHR9O1xyXG5cdFx0aWYgKHByb3BzLmxpc3RHVUlEKSB7XHJcblx0XHRcdG9iai5saXN0R1VJRCA9IHByb3BzLmxpc3RHVUlEO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0b2JqLmxpc3RUaXRsZSA9IHByb3BzLmxpc3RUaXRsZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBvYmo7XHJcblx0fSk7XHJcblxyXG5cdHJlcXVlc3RQcm8uc2V0UHJlUHJvY2Vzc2luZ0NCKGZ1bmN0aW9uKGl0ZW1EYXRhLCBpbmRleCkge1xyXG5cdFx0aWYgKHByb3BzLml0ZW1DcmVhdGVkQ0IpIHtcclxuXHRcdFx0cHJvcHMuaXRlbUNyZWF0ZWRDQihpdGVtRGF0YSwgaW5kZXgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlY3ljbGVJdGVtKGl0ZW1EYXRhKTtcclxuXHR9KTtcclxuXHRyZXF1ZXN0UHJvLnNldEl0ZW1Qcm9jZXNzZWRDQihwcm9wcy5pdGVtQ29tcGxldGVkQ0IpO1xyXG5cdHJldHVybiByZXF1ZXN0UHJvLmluaXQocHJlcGVkSXRlbXMpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYnJhcnkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgdGhpcy5kZWZhdWx0cywgeyBtZXRob2Q6ICdnZXQnIH0sIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICByZXR1cm4gZXJyb3I7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9wYXJzZUhlYWRlcnMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgfVxuXG4gICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICB9O1xuICAgIH1cblxuICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIi8qXHJcbmVcclxuKi9cclxuaW1wb3J0IHtnZXRVUkxPcmlnaW59IGZyb20gJ3BkLXNwdXRpbCc7XHJcbmV4cG9ydCBjb25zdCBtaW5pbWFsTWV0YSA9IFwiYXBwbGljYXRpb24vanNvbjtvZGF0YT1taW5pbWFsbWV0YWRhdGFcIjtcclxuZXhwb3J0IGNvbnN0IHZlcmJvc2VNZXRhID0gXCJhcHBsaWNhdGlvbi9qc29uO29kYXRhPXZlcmJvc2VcIjtcclxuZXhwb3J0IGNvbnN0IGxpc3ROYW1lUHJlc2VudCA9IFwibGlzdE5hbWVfcHJlc2VudFwiO1xyXG5leHBvcnQgY29uc3QgbWV0ZXJlZEl0ZW1zSW5jb3JyZWN0RGF0YVR5cGUgPSBcIkFuIGFycmF5IG11c3QgYmUgcGFzc2VkIHRvIHV0aWxpemUgdGhlIG1ldGVyZWQgZnVuY3Rpb25zXCI7XHJcbmV4cG9ydCBjb25zdCBsaXN0SXRlbUVudGl0eVBhdHRlcm4gPSAvKFNQXFwuRGF0YVxcLikuKyhMaXN0SXRlbSkvaTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZWxpc3RpdGVtdHlwZSA9IGZ1bmN0aW9uKGxpc3ROYW1lKSB7XHJcblx0cmV0dXJuICdTUC5EYXRhLicgKyBcclxuXHRcdGxpc3ROYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgXHJcblx0XHRsaXN0TmFtZS5zbGljZSgxKSArIFxyXG5cdFx0J0xpc3RJdGVtJztcclxufTtcclxuZXhwb3J0IGNvbnN0IGNoZWNrVXJsT3JpZ2luID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcblx0cHJvcHMuY29uZmlndXJlZFVybCA9IHByb3BzLm9yaWdpbiA/IHByb3BzLm9yaWdpbiA6IGdldFVSTE9yaWdpbigpO1xyXG5cclxuXHRpZihwcm9wcy51cmwpIHtcclxuXHRcdHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gcHJvcHMudXJsO1xyXG5cdH1cclxuXHJcblx0aWYocHJvcHMuZW5kUG9pbnQpIHtcclxuXHRcdHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gYC8ke3Byb3BzLmVuZFBvaW50fWA7XHJcblx0fVxyXG5cdHJldHVybiBwcm9wcztcclxuXHJcblx0Ly9mZWxsIHRocm91Z2ggc28gdGhlIGluY29ycmVjdCBkYXRhdHlwZSB3YXMgcGFzc2VkIHRvIGZ1bmN0aW9uLCBlcnJvclxyXG59O1xyXG5leHBvcnQgY29uc3QgbGlzdFVybENvbmZpZ3VyZSA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdGlmICghcHJvcHMudXJsIHx8IHByb3BzLmxpc3RVcmwpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3dlYlwiO1xyXG5cclxuXHRjaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdGlmIChwcm9wcy5saXN0R1VJRCkge1xyXG5cdFx0cHJvcHMubGlzdFVybCA9IHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gXCIvbGlzdHMoZ3VpZCdcIisgcHJvcHMubGlzdEdVSUQgK1wiJylcIjtcclxuXHR9IGVsc2UgaWYgKHByb3BzLmxpc3RUaXRsZSkge1xyXG5cdFx0cHJvcHMubGlzdFVybCA9IHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gXCIvbGlzdHMvZ2V0Ynl0aXRsZSgnXCIrIHByb3BzLmxpc3RUaXRsZSArXCInKVwiO1xyXG5cdH1cclxuXHRyZXR1cm4gcHJvcHM7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsaXN0SXRlbVVybENvbmZpZ3VyZSA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblx0Ly9mb3IgY3JlYXRlLCB1cGRhdGUsIGRlbGV0ZVxyXG5cdHZhciBpdGVtID0gcHJvcHMuaXRlbUlkIHx8ICcnO1xyXG5cclxuXHRpZiAocHJvcHMubGlzdEl0ZW1VcmwpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRwcm9wcy5saXN0SXRlbVVybCA9IHByb3BzLmxpc3RVcmwgKz0gXCIvaXRlbXMoXCIrIGl0ZW0gK1wiKVwiO1xyXG5cdHJldHVybiBwcm9wcztcclxufTtcclxuZXhwb3J0IGNvbnN0IHBhcnNlQmFzZVBlcm1pc3Npb25zID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHR2YXIgcGVybWlzc2lvbnMgPSBuZXcgU1AuQmFzZVBlcm1pc3Npb25zKCk7XHJcblx0cGVybWlzc2lvbnMuaW5pdFByb3BlcnRpZXNGcm9tSnNvbih2YWx1ZSk7XHJcblx0dmFyIHBlcm1MZXZlbHMgPSBbXTtcclxuXHRmb3IodmFyIHBlcm1MZXZlbE5hbWUgaW4gU1AuUGVybWlzc2lvbktpbmQucHJvdG90eXBlKSB7XHJcblx0XHRpZiAoU1AuUGVybWlzc2lvbktpbmQuaGFzT3duUHJvcGVydHkocGVybUxldmVsTmFtZSkpIHtcclxuXHRcdFx0dmFyIHBlcm1MZXZlbCA9IFNQLlBlcm1pc3Npb25LaW5kLnBhcnNlKHBlcm1MZXZlbE5hbWUpO1xyXG5cdFx0XHRpZihwZXJtaXNzaW9ucy5oYXMocGVybUxldmVsKSl7XHJcblx0XHRcdFx0XHRwZXJtTGV2ZWxzLnB1c2gocGVybUxldmVsTmFtZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gICAgIFxyXG5cdH1cclxuXHRyZXR1cm4gcGVybUxldmVsczsgICBcclxufTtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUdldEFsbFVybCA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdGlmKHByb3BzLmxpc3RVcmwpIHtcclxuXHRcdC8vYWxyZWFkeSBzZXR1cCwgZ2V0IG91dFxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRpZighcHJvcHMuZW5kUG9pbnQpIHtcclxuXHRcdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3dlYlwiO1xyXG5cdH1cclxuXHRsaXN0VXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHJcblx0cHJvcHMubGlzdFVybCArPSBcIi9pdGVtcz9cIjtcclxuXHJcblx0aWYocHJvcHMuc2VsZWN0KSB7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9IGAkc2VsZWN0PSR7cHJvcHMuc2VsZWN0fSZgO1xyXG5cdH1cclxuXHRpZihwcm9wcy50b3ApIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCR0b3A9JHtwcm9wcy50b3B9JmA7XHJcblx0fVxyXG5cdGlmKHByb3BzLmV4cGFuZCkge1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSBgJGV4cGFuZD0ke3Byb3BzLmV4cGFuZH0mYDtcclxuXHR9XHJcblx0aWYocHJvcHMuZmlsdGVyKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9IGAkZmlsdGVyPSR7cHJvcHMuZmlsdGVyfSZgO1xyXG5cdH1cclxuXHRpZihwcm9wcy5vcmRlckJ5KSB7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9IGAkb3JkZXJieT0ke3Byb3BzLm9yZGVyQnl9JmA7XHJcblx0fVxyXG5cclxuXHRpZigvJiQvLnRlc3QocHJvcHMubGlzdFVybCkpIHtcclxuXHRcdC8vaWYgJiBpcyB0aGUgbGFzdCBjaGFyYWN0ZXIgdGhlbiBnZXQgcmlkIG9mIGl0XHJcblx0XHRwcm9wcy5saXN0VXJsID0gcHJvcHMubGlzdFVybC5zbGljZSgwLC0xKTtcclxuXHR9XHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzLmpzIiwiaW1wb3J0ICogYXMgc3RhdGljcyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogbWV0ZXJlZFJlcXVlc3RQcm9jZXNzb3IgaXMgYSBjbGFzcyB0aGF0IGFsbG93cyB5b3UgdG8gcGFzcyBpbiBtdWx0aXBsZSBpdGVtcyB0byBwcm9jZXNzXHJcbiAqIGFuZCBjb250cm9scyBob3cgbWFueSByZXF1ZXN0cyB3aWxsIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBhdCBhIHRpbWVcclxuICogd2hlbiBhbGwgaXRlbXMgYXJlIGZpbmlzaGVkIHByb2Nlc3NpbmcgdGhleSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgLnRoZW4gb2YgdGhlIGluaXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWV0ZXJlZFJlcXVlc3RQcm9jZXNzb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVG9Qcm9jZXNzID0gMztcclxuICAgIH1cclxuICAgIF90b3RhbFByb2Nlc3NpbmdJdGVtcygpIHtcclxuICAgICAgICBsZXQgdG90YWxQcm9jZXNzaW5nID0gMDtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcm9jZXNzaW5nKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWxQcm9jZXNzaW5nO1xyXG4gICAgfVxyXG4gICAgX2ZpbnNoUHJvY2Vzc29yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluUmVzb2x2ZSh0aGlzLl9wcm9jZXNzaW5nSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgX3Byb21pc2VEb25lSGVscGVyKG9iaiwgZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgb2JqLnJlc3BvbnNlID0gZGF0YTtcclxuICAgICAgICBvYmouc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcG9zdFByb2Nlc3NpbmdDQikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3N0UHJvY2Vzc2luZ0NCKG9iai5zdGF0dXMsIG9iai5wbGFjZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2FkZFRvUHJvY2Vzc29yKGluZGV4LCBwcm9taXNlKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgcGxhY2U6IGluZGV4LFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdwcm9jZXNzaW5nJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb21pc2VcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlRG9uZUhlbHBlcihvYmosIGRhdGEsIHN0YXRpY3MuY29tcGxldGVkU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2VEb25lSGVscGVyKG9iaiwgZXJyb3IsIHN0YXRpY3MuY29tcGxldGVkRmFpbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ0l0ZW1zLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIF9wcmVQcm9jZXNzaW5nKCkge1xyXG4gICAgICAgIC8vdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZWN1cnNpdmUsIGFuZCBrZWVwIHRvdGFsVG9Qcm9jZXNzIGluIHRoZSBhcnJheVxyXG4gICAgICAgIC8vY2hlY2sgbGVuZ3RoIG9mIHByb2Nlc3NpbmcgaXRlbXMgaWYgdG90YWwgdG8gcHJvY2VzcyB0aGVuIHN0b3BcclxuICAgICAgICBsZXQgdG90YWxQcm9jZXNzaW5nID0gdGhpcy5fdG90YWxQcm9jZXNzaW5nSXRlbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRJdGVtcy5sZW5ndGggPT09IDAgfHwgdG90YWxQcm9jZXNzaW5nID09PSB0aGlzLl90b3RhbFRvUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAvL2l0ZW1zIGFyZSBub3QgZG9uZSBwcm9jZXNzaW5nIGJ1dCB0aGVyZSBpcyBubyBtb3JlIHRvIGFkZCBvclxyXG4gICAgICAgICAgICAvL3Byb2Nlc3NpbmcgYXJyYXkgaGFzIGNvbXBhY2l0eSBzbyBqdXN0IGdldCBvdXRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5vdCBjYWxsIGFkZFRvUHJvY2Vzc2luZ0NhbGxCYWNrLCBzdG9yZSBpbiB2YXIgYW5kIHRhY2sgb24gYSB0aGVuXHJcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGVJbmRleCA9IHRoaXMuX3Byb2Nlc3NpbmdJdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIG5leHRJdGVtVG9Qcm9jZXNzID0gdGhpcy5hZGRlZEl0ZW1zLnNoaWZ0KCksXHJcbiAgICAgICAgICAgIGNiUHJvY2Vzc2VkID0gdGhpcy5fdG9Qcm9jZXNzaW5nQ0IobmV4dEl0ZW1Ub1Byb2Nlc3MsIG5leHRBdmFpbGFibGVJbmRleCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCEoY2JQcm9jZXNzZWQgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xyXG4gICAgICAgICAgICAvL2Z1bmN0aW9uIHBhc3NlZCBpbiBieSB1c2VyIGlzIG5vdCBzZXR1cCBjb3JyZWN0bHksIGl0IG11c3QgcmV0dXJuIGEgcHJvbWlzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RhdGljcy5pbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0IGFuZCBhZGQgdG8gcHJvY2Vzc2luZyBhcnJheVxyXG4gICAgICAgIHRoaXMuX2FkZFRvUHJvY2Vzc29yKG5leHRBdmFpbGFibGVJbmRleCwgY2JQcm9jZXNzZWQpO1xyXG4gICAgICAgIHRoaXMuX3ByZVByb2Nlc3NpbmcoKTsgICAgXHJcbiAgICB9XHJcbiAgICBfcG9zdFByb2Nlc3NpbmcoKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGlzIGlzIGxhc3QgY2FsbCBpZiB5ZXMgdGhlbiBmaW5pc2ggcHJvY2Vzc1xyXG4gICAgICAgIGxldCB0b3RhbFByb2Nlc3NpbmcgPSB0aGlzLl90b3RhbFByb2Nlc3NpbmdJdGVtcygpO1xyXG4gICAgICAgIGlmICh0b3RhbFByb2Nlc3NpbmcgPT09IDAgJiYgdGhpcy5hZGRlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvL3Byb2Nlc3MgZmluaXNoZWQgY2FsbCBmaW5pc2hpbmcgZnVuY3Rpb24gYW5kIGdldCBvdXRcclxuICAgICAgICAgICAgdGhpcy5fZmluc2hQcm9jZXNzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2Vsc2UgY2FsbCBwcmVQcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fcHJlUHJvY2Vzc2luZygpO1xyXG4gICAgfVxyXG4gICAgX3RvUHJvY2Vzc2luZ0NCKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihzdGF0aWNzLm5vUHJlUHJvY3Nzb3JDQik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhbiBpdGVtIGlzIGZpbmlzaGVkIHByb2Nlc3NpbmdcclxuICAgICAqIEBwYXJhbSB7aXRlbUNvbXBsZXRlZH0gY2IgXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgc2V0SXRlbVByb2Nlc3NlZENCKGNiKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHByb2Nlc3NpbmdDb21wbGV0ZWRDYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgb3JkZXIgbnVtYmVyIGFuZCB0aGUgcHJvY2VzcyBzdGF0dXMgKHN1Y2Nlc3Mgb3IgZmFpbCkgdG8gdHJpZ2dlciBhbnkgY29tcGxldGVkIHNpZGUgZWZmZWN0c1xyXG4gICAgICAgICAqIFRoZSBvcmRlciBudW1iZXIgaXMgeW91ciBpZCB0byBsb2NhdGUgZWxlbWVudHMgKGRvbSBvciB3aGF0ZXZlcikgYmFzZWQgb24gdGhlIHNwZWNpZmljIGl0ZW0gcHJvY2Vzc2luZ1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGNhbGxiYWNrIGl0ZW1Db21wbGV0ZWRcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcG9zdFByb2Nlc3NpbmdDQiA9IGNiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIHRvIGFkZCBpdGVtcyB0byBiZSBwcm9jZXNzZWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtwcmVQcm9jZXNzb3J9IGNiXHJcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX0gXHJcbiAgICAgKi9cclxuICAgIHNldFByZVByb2Nlc3NpbmdDQihjYikge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpbmRleCBhbmQgaXRlbURhdGEgdG8gcHJvY2VzcyB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgICAgICogaXQgTVVTVCByZXR1cm4gYSBuYXRpdmUgcHJvbWlzZS5cclxuICAgICAgICAgKiB0aGUgb3JkZXIgbnVtYmVyIGlzIHlvdXIgaWQgdG8gbG9jYXRlIGVsZW1lbnRzIChkb20gb3Igd2hhdGV2ZXIpIGJhc2VkIG9uIHRoZSBzcGVjaWZpYyBpdGVtIHByb2Nlc3NpbmdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBjYWxsYmFjayBwcmVQcm9jZXNzb3JcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGl0ZW1EYXRhXHJcbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdG9Qcm9jZXNzaW5nQ0IgPSBjYjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHRvdGFsIGFtb3VudCBvZiBzaW11bHRhbmVvdXMgaXRlbXMgdG8gYmUgcHJvY2VzZWQuIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VDb25jdXJyZW50UHJvY2Vzc2luZyhjb3VudCkge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVG9Qcm9jZXNzID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgcHJvY2Vzc2luZyBwcm9jZXNzLlxyXG4gICAgICogSXRlbXNUb1Byb2Nlc3MgaXMgYW4gYXJyYXkgb2YgYW55dGhpbmcgeW91IHdhbnQsIGJ1dCBlYWNoIGl0ZW0gaW4gdGhpcyBhcnJheVxyXG4gICAgICogUmV0dXJucyBhIG5hdGl2ZSBwcm9taXNlIHRvIC50aGVuIG9mZiBvZiwgbm8gbmVlZCB0byBjYXRjaCwgYWxsIGl0ZW0gKHN1Y2Nlc3Mgb3IgZmFpbCkgd2lsbCBiZSBwcm9jZXNzZWQgYW5kIHBhc3NlZCB0byB0aGUgLnRoZW5cclxuICAgICAqIHRoZSBpdGVtcyBwYXNzZWQgdG8gdGhlIC50aGVuIHdpbGwgYmUgYW5kIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZVxyXG4gICAgICogIHtcclxuICAgICAqICAgICAgcGxhY2U6IG51bWJlcixcclxuICAgICAqICAgICAgY29tcGxldGVkOiBib29sZWFuLFxyXG4gICAgICogICAgICBzdGF0dXM6IHN0cmluZyAoc3VjY2VzcyBvciBmYWlsKVxyXG4gICAgICogICAgICByZXNwb25zZTogdGhlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgKiAgfVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gaXRlbXNUb1Byb2Nlc3MgXHJcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgaW5pdChpdGVtc1RvUHJvY2Vzcykge1xyXG4gICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkoaXRlbXNUb1Byb2Nlc3MpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RhdGljcy5pbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRlZEl0ZW1zID0gaXRlbXNUb1Byb2Nlc3M7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX21haW5SZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fbWFpblJlamVjdCA9IHJlamVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ByZVByb2Nlc3NpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wZC1tZXRlcmVkcmVxdWVzdHByb2Nlc3Nvci9zcmMvbGlicmFyeS5qcyIsImV4cG9ydCBjb25zdCBpbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlID0gXCJUaGUgYWRkVG9Qcm9jZXNzaW5nQ2FsbGJhY2sgeW91IHBhc3NlZCBpcyBub3QgcmV0dXJuaW5nIHRoZSBjb3JyZWN0IGRhdGEgdHlwZS4gVGhlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgbmF0aXZlIFByb21pc2VcIjtcclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZFN1Y2Nlc3MgPSBcInN1Y2Nlc3NcIjtcclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZEZhaWwgPSBcImZhaWxcIjtcclxuZXhwb3J0IGNvbnN0IG5vUHJlUHJvY3Nzb3JDQiA9IFwiQSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIHByb2Nlc3MgdGhlIGl0ZW1zIGFuZCBzaG91bGQgcmV0dXJuIGEgbmF0aXZlIHByb21pc2UuXCI7XHJcbmV4cG9ydCBjb25zdCBpbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zID0gXCJUaGUgZGF0YSB0eXBlIHBhc3NlZCB0byBpbml0IG11c3QgYmUgYW4gYXJyYXkuXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3BkLW1ldGVyZWRyZXF1ZXN0cHJvY2Vzc29yL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlUm9vdCI6IiJ9