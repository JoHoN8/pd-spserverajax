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
		return __WEBPACK_IMPORTED_MODULE_1__helpers__["k" /* parseBasePermissions */](response.data);
	});
};
var getEntityType = function getEntityType(props) {

	var entityData;

	if (props.listName) {
		entityData = __WEBPACK_IMPORTED_MODULE_1__helpers__["e" /* listItemEntityPattern */].test(props.listName) ? props.listName : __WEBPACK_IMPORTED_MODULE_1__helpers__["d" /* createlistitemtype */](props.listName);
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
		props.headerData.Accept = __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */];
		props.headerData['Content-Type'] = __WEBPACK_IMPORTED_MODULE_1__helpers__["l" /* verboseMeta */];

		__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listItemUrlConfigure */](props);

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
		props.headerData.Accept = __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */];
		props.headerData['Content-Type'] = __WEBPACK_IMPORTED_MODULE_1__helpers__["l" /* verboseMeta */];

		__WEBPACK_IMPORTED_MODULE_1__helpers__["f" /* listItemUrlConfigure */](props);

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
		headers: { "Accept": __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */] },
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
		headers: { 'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */] },
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

	__WEBPACK_IMPORTED_MODULE_1__helpers__["c" /* createGetAllUrl */](props);

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
		batchContents.push('Accept: ' + __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */]);
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

	__WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* listUrlConfigure */](props);
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
		headers: { 'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */] },
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
			contentType: __WEBPACK_IMPORTED_MODULE_1__helpers__["l" /* verboseMeta */],
			headers: {
				"Accept": __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */],
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
			'Accept': __WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* minimalMeta */],
			'Content-Type': __WEBPACK_IMPORTED_MODULE_1__helpers__["l" /* verboseMeta */],
			'X-RequestDigest': response.data.FormDigestValue
		};

		__WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* listUrlConfigure */](props);
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

	__WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* listUrlConfigure */](props);

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
	__WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* listUrlConfigure */](props);
	props.listUrl += '/fields?$filter=Hidden eq ' + props.allData + ' and ReadOnlyField eq ' + props.allData;

	return getData(props.listUrl);
}

var meteredAjax = function (_meteredRequestProces) {
	_inherits(meteredAjax, _meteredRequestProces);

	function meteredAjax() {
		_classCallCheck(this, meteredAjax);

		return _possibleConstructorReturn(this, (meteredAjax.__proto__ || Object.getPrototypeOf(meteredAjax)).call(this));
	}

	_createClass(meteredAjax, [{
		key: '_checkMeteredDataType',
		value: function _checkMeteredDataType(props) {
			if (!props.items || Array.isArray(props.items) === false) {
				throw new Error(__WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* meteredItemsIncorrectDataType */]);
			}
		}
	}, {
		key: '_getMeteredListName',
		value: function _getMeteredListName(props) {
			var entityData = null;

			if (props.listName) {
				entityData = Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listNamePresent */]);
			} else {
				entityData = getEntityType(props);
			}
			return entityData;
		}
	}]);

	return meteredAjax;
}(__WEBPACK_IMPORTED_MODULE_3_pd_meteredrequestprocessor__["a" /* meteredRequestProcessor */]);
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
 * @param {*} itemData
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
		if (entityType !== __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listNamePresent */]) {
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
				props.itemCreatedCB(index, itemData);
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
		if (entityType !== __WEBPACK_IMPORTED_MODULE_1__helpers__["g" /* listNamePresent */]) {
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
				props.itemCreatedCB(index, itemData);
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
			props.itemCreatedCB(index, itemData);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return minimalMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return verboseMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return listNamePresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return meteredItemsIncorrectDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listItemEntityPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createlistitemtype; });
/* unused harmony export guidHexCodes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createGUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkUrlOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return listUrlConfigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return listItemUrlConfigure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return parseBasePermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createGetAllUrl; });
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

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meteredRequestProcessor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * meteredRequestProcessor is a class that allows you to pass in multiple items to process
 * and controls how many requests will be sent to the server at a time
 * when all items are finished processing they will be passed to the .then of the init.
 */
var meteredRequestProcessor = function () {
    function meteredRequestProcessor() {
        _classCallCheck(this, meteredRequestProcessor);

        this._processingItems = [];
        this._totalToProcess = 3;
    }

    _createClass(meteredRequestProcessor, [{
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
                this._postProcessingCB(obj.place, obj.status);
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
             * @param {number} index
             * @param {string} status
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
             * @param {number} index
             * @param {*} itemData
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

    return meteredRequestProcessor;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYmQxMDhlZDgxZDlkNTBmYjZhZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicGQtc3B1dGlsXCIsXCJjb21tb25qczJcIjpcInBkLXNwdXRpbFwiLFwiYW1kXCI6XCJwZC1zcHV0aWxcIixcInJvb3RcIjpcInBkc3B1dGlsXCJ9Iiwid2VicGFjazovLy8uL3NyYy9saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idG9hLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGQtbWV0ZXJlZHJlcXVlc3Rwcm9jZXNzb3Ivc3JjL2xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BkLW1ldGVyZWRyZXF1ZXN0cHJvY2Vzc29yL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiYmluZCIsInJlcXVpcmUiLCJpc0J1ZmZlciIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaXNBcnJheSIsInZhbCIsImNhbGwiLCJpc0FycmF5QnVmZmVyIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNBcnJheUJ1ZmZlclZpZXciLCJyZXN1bHQiLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsImJ1ZmZlciIsImlzU3RyaW5nIiwiaXNOdW1iZXIiLCJpc1VuZGVmaW5lZCIsImlzT2JqZWN0IiwiaXNEYXRlIiwiaXNGaWxlIiwiaXNCbG9iIiwiaXNGdW5jdGlvbiIsImlzU3RyZWFtIiwicGlwZSIsImlzVVJMU2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidHJpbSIsInN0ciIsInJlcGxhY2UiLCJpc1N0YW5kYXJkQnJvd3NlckVudiIsIm5hdmlnYXRvciIsInByb2R1Y3QiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImZvckVhY2giLCJvYmoiLCJmbiIsImkiLCJsIiwibGVuZ3RoIiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJtZXJnZSIsImFzc2lnblZhbHVlIiwiYXJndW1lbnRzIiwiZXh0ZW5kIiwiYSIsImIiLCJ0aGlzQXJnIiwibW9kdWxlIiwiZXhwb3J0cyIsInV0aWxzIiwibm9ybWFsaXplSGVhZGVyTmFtZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwic2V0Q29udGVudFR5cGVJZlVuc2V0IiwiaGVhZGVycyIsInZhbHVlIiwiZ2V0RGVmYXVsdEFkYXB0ZXIiLCJhZGFwdGVyIiwiWE1MSHR0cFJlcXVlc3QiLCJwcm9jZXNzIiwiZGVmYXVsdHMiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInBhcnNlIiwiZSIsInRpbWVvdXQiLCJ4c3JmQ29va2llTmFtZSIsInhzcmZIZWFkZXJOYW1lIiwibWF4Q29udGVudExlbmd0aCIsInZhbGlkYXRlU3RhdHVzIiwic3RhdHVzIiwiY29tbW9uIiwiZm9yRWFjaE1ldGhvZE5vRGF0YSIsIm1ldGhvZCIsImZvckVhY2hNZXRob2RXaXRoRGF0YSIsIndyYXAiLCJhcmdzIiwiQXJyYXkiLCJhcHBseSIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJ0aXRsZSIsImJyb3dzZXIiLCJlbnYiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwibm9vcCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwib2ZmIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsInNldHRsZSIsImJ1aWxkVVJMIiwicGFyc2VIZWFkZXJzIiwiaXNVUkxTYW1lT3JpZ2luIiwiY3JlYXRlRXJyb3IiLCJidG9hIiwieGhyQWRhcHRlciIsImNvbmZpZyIsIlByb21pc2UiLCJkaXNwYXRjaFhoclJlcXVlc3QiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3QiLCJsb2FkRXZlbnQiLCJ4RG9tYWluIiwiTk9ERV9FTlYiLCJYRG9tYWluUmVxdWVzdCIsInVybCIsIm9ucHJvZ3Jlc3MiLCJoYW5kbGVQcm9ncmVzcyIsIm9udGltZW91dCIsImhhbmRsZVRpbWVvdXQiLCJhdXRoIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIkF1dGhvcml6YXRpb24iLCJvcGVuIiwidG9VcHBlckNhc2UiLCJwYXJhbXMiLCJwYXJhbXNTZXJpYWxpemVyIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJyZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwiaGFuZGxlRXJyb3IiLCJjb29raWVzIiwieHNyZlZhbHVlIiwid2l0aENyZWRlbnRpYWxzIiwicmVhZCIsInVuZGVmaW5lZCIsInNldFJlcXVlc3RIZWFkZXIiLCJ0b0xvd2VyQ2FzZSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsVG9rZW4iLCJwcm9taXNlIiwidGhlbiIsIm9uQ2FuY2VsZWQiLCJjYW5jZWwiLCJhYm9ydCIsInNlbmQiLCJlbmhhbmNlRXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImVycm9yIiwiaXNDYW5jZWwiLCJfX0NBTkNFTF9fIiwiQ2FuY2VsIiwiZGVwVGVzdCIsImFzc2lnbiIsImFqYXhHZXRVc2VyUGVybWlzc2lvbnMiLCJwcm9wcyIsImdldERhdGEiLCJwZXJtc0xpbmsiLCJnZXRFbnRpdHlUeXBlIiwiZW50aXR5RGF0YSIsImxpc3ROYW1lIiwidGVzdCIsImdldExpc3RJbmZvIiwiTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWUiLCJub25EZWxldGVQcm9jZXNzIiwiaGVhZGVyRGF0YSIsInR5cGUiLCJpdGVtIiwiaW5mb1RvU2VydmVyIiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJGb3JtRGlnZXN0VmFsdWUiLCJBY2NlcHQiLCJhamF4SGVscGVycyIsImF4aW9zIiwibGlzdEl0ZW1VcmwiLCJkZWxldGVQcm9jZXNzIiwidXJsTW9kaWZpZXIiLCJlbmRQb2ludCIsImNvbmZpZ3VyZWRVcmwiLCJnZXRBbGxMaXN0UmVzdWx0cyIsImxpc3RHVUlEIiwibGlzdFRpdGxlIiwibGlzdFVybCIsImN1cnJlbnRSZXN1bHRzIiwiYWxsUmVzdWx0cyIsImFqYXhHZXRCYXRjaCIsImFycmF5T2ZVcmxzIiwiYmF0Y2hHVUlEIiwiYmF0Y2hCb2R5IiwiYmF0Y2hIZWFkZXIiLCJiYXRjaENvbnRlbnRzIiwiam9pbiIsInBhcnNlZEFycmF5IiwicmVzcG9uc2VUb0FycmF5Iiwic3BsaXQiLCJjdXJyZW50TGluZSIsImNoYXJBdCIsInRyeVBhcnNlSnNvbiIsImdldEJhdGNoTWV0ZXJlZCIsInVybHNGb3JUcmlwIiwicGVyVHJpcENvdW50IiwidG90YWxJdGVtcyIsImdldFVybHMiLCJ0b3RhbFBlclRyaXAiLCJudW1iZXJUb1N0YXJ0QXQiLCJvcmlnaW4iLCJnZXRCYXRjaFByb2ZpbGVzIiwicHJvZmlsZVVybHMiLCJwcm9maWxlRW1haWxzIiwiZ2V0VVJMT3JpZ2luIiwidXJsRm9yU2l0ZSIsImVtYWlsIiwiZW5jb2RlZCIsImVuY29kZUFjY291bnROYW1lIiwicGVvcGxlU2VhcmNoIiwic2VydmVyUXVlcnlEYXRhIiwic3RhcnRyb3ciLCJyb3dsaW1pdCIsIlRyaW1EdXBsaWNhdGVzIiwic2VsZWN0cHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJzb3VyY2VJZCIsInF1ZXJ5dGV4dCIsInF1ZXJ5IiwiZW1wRGF0YSIsInJlbGV2YW50UmVzdWx0cyIsIlByaW1hcnlRdWVyeVJlc3VsdCIsIlJlbGV2YW50UmVzdWx0cyIsIlRhYmxlIiwiUm93cyIsIlRvdGFsUm93cyIsIlJvd0NvdW50IiwiZW5zdXJlVXNlciIsImNvbnRlbnRUeXBlIiwiZ2V0U2l0ZVVzZXJJbmZvQnlFbWFpbCIsImdldEl0ZW1zQnlDYW1sIiwiY2FtbCIsImhlYWRlcmRhdGEiLCJnZXRVc2VyU2l0ZVBlcm1pc3Npb25zIiwiZW5jb2RlZEVtYWlsIiwiZ2V0VXNlckxpc3RQZXJtaXNzaW9ucyIsImdldEN1cnJlbnRVc2VyR3JvdXBzIiwidXNlcklkIiwiZ3JvdXBzIiwiZ3JvdXBBcnJheSIsIlRpdGxlIiwiY3JlYXRlSXRlbSIsInVwZGF0ZUl0ZW0iLCJldGFnIiwiZGVsZXRlSXRlbSIsInJlY3ljbGVJdGVtIiwiZ2V0VXNlclByb2ZpbGVEYXRhIiwiYWRkb24iLCJ1c2VyRGF0YSIsIlVzZXJQcm9maWxlUHJvcGVydGllcyIsImdldExpc3RDb2x1bW5zIiwiYWxsRGF0YSIsIm1ldGVyZWRBamF4IiwiaXRlbXMiLCJtZXRlcmVkQ3JlYXRlSXRlbXMiLCJyZXF1ZXN0UHJvIiwiX2NoZWNrTWV0ZXJlZERhdGFUeXBlIiwiX2dldE1ldGVyZWRMaXN0TmFtZSIsImVudGl0eVR5cGUiLCJwcmVwZWRJdGVtcyIsIm1hcCIsInNldFByZVByb2Nlc3NpbmdDQiIsIml0ZW1EYXRhIiwiaW5kZXgiLCJpdGVtQ3JlYXRlZENCIiwic2V0SXRlbVByb2Nlc3NlZENCIiwiaXRlbUNvbXBsZXRlZENCIiwiaW5pdCIsIm1ldGVyZWRVcGRhdGVJdGVtcyIsInVwZGF0ZUluZm8iLCJpdGVtSWQiLCJtZXRlcmVkUmVjeWNsZUl0ZW1zIiwiQXhpb3MiLCJjcmVhdGVJbnN0YW5jZSIsImRlZmF1bHRDb25maWciLCJpbnN0YW5jZSIsImNyZWF0ZSIsImluc3RhbmNlQ29uZmlnIiwiQ2FuY2VsVG9rZW4iLCJhbGwiLCJwcm9taXNlcyIsInNwcmVhZCIsImRlZmF1bHQiLCJpc1Nsb3dCdWZmZXIiLCJfaXNCdWZmZXIiLCJjb25zdHJ1Y3RvciIsInJlYWRGbG9hdExFIiwic2xpY2UiLCJJbnRlcmNlcHRvck1hbmFnZXIiLCJkaXNwYXRjaFJlcXVlc3QiLCJpc0Fic29sdXRlVVJMIiwiY29tYmluZVVSTHMiLCJpbnRlcmNlcHRvcnMiLCJiYXNlVVJMIiwiY2hhaW4iLCJ1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwidW5zaGlmdCIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzIiwic2hpZnQiLCJub3JtYWxpemVkTmFtZSIsInByb2Nlc3NIZWFkZXIiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemVkUGFyYW1zIiwicGFydHMiLCJzZXJpYWxpemUiLCJwYXJzZVZhbHVlIiwidiIsInRvSVNPU3RyaW5nIiwicGFyc2VkIiwicGFyc2VyIiwibGluZSIsInN1YnN0ciIsInN0YW5kYXJkQnJvd3NlckVudiIsIm1zaWUiLCJ1c2VyQWdlbnQiLCJ1cmxQYXJzaW5nTm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJvcmlnaW5VUkwiLCJyZXNvbHZlVVJMIiwiaHJlZiIsInNldEF0dHJpYnV0ZSIsInByb3RvY29sIiwiaG9zdCIsInNlYXJjaCIsImhhc2giLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImxvY2F0aW9uIiwicmVxdWVzdFVSTCIsIm5vblN0YW5kYXJkQnJvd3NlckVudiIsImNoYXJzIiwiRSIsImlucHV0IiwiU3RyaW5nIiwib3V0cHV0IiwiYmxvY2siLCJjaGFyQ29kZSIsImlkeCIsImNoYXJDb2RlQXQiLCJ3cml0ZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwiY29va2llIiwiRGF0ZSIsInRvR01UU3RyaW5nIiwibWF0Y2giLCJSZWdFeHAiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJub3ciLCJoYW5kbGVycyIsInVzZSIsImVqZWN0IiwiaWQiLCJmb3JFYWNoSGFuZGxlciIsImgiLCJ0cmFuc2Zvcm1EYXRhIiwidGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZCIsInRocm93SWZSZXF1ZXN0ZWQiLCJjbGVhbkhlYWRlckNvbmZpZyIsIm9uQWRhcHRlclJlc29sdXRpb24iLCJvbkFkYXB0ZXJSZWplY3Rpb24iLCJyZWFzb24iLCJmbnMiLCJ0cmFuc2Zvcm0iLCJyZWxhdGl2ZVVSTCIsImV4ZWN1dG9yIiwiVHlwZUVycm9yIiwicmVzb2x2ZVByb21pc2UiLCJwcm9taXNlRXhlY3V0b3IiLCJ0b2tlbiIsInNvdXJjZSIsImMiLCJjYWxsYmFjayIsImFyciIsIm1pbmltYWxNZXRhIiwidmVyYm9zZU1ldGEiLCJsaXN0TmFtZVByZXNlbnQiLCJtZXRlcmVkSXRlbXNJbmNvcnJlY3REYXRhVHlwZSIsImxpc3RJdGVtRW50aXR5UGF0dGVybiIsImNyZWF0ZWxpc3RpdGVtdHlwZSIsImd1aWRIZXhDb2RlcyIsImNyZWF0ZUdVSUQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGVja1VybE9yaWdpbiIsImxpc3RVcmxDb25maWd1cmUiLCJsaXN0SXRlbVVybENvbmZpZ3VyZSIsInBhcnNlQmFzZVBlcm1pc3Npb25zIiwicGVybWlzc2lvbnMiLCJTUCIsIkJhc2VQZXJtaXNzaW9ucyIsImluaXRQcm9wZXJ0aWVzRnJvbUpzb24iLCJwZXJtTGV2ZWxzIiwicGVybUxldmVsTmFtZSIsIlBlcm1pc3Npb25LaW5kIiwicGVybUxldmVsIiwiaGFzIiwiY3JlYXRlR2V0QWxsVXJsIiwic2VsZWN0IiwidG9wIiwiZXhwYW5kIiwiZmlsdGVyIiwib3JkZXJCeSIsIm1ldGVyZWRSZXF1ZXN0UHJvY2Vzc29yIiwiX3Byb2Nlc3NpbmdJdGVtcyIsIl90b3RhbFRvUHJvY2VzcyIsInRvdGFsUHJvY2Vzc2luZyIsImNvbXBsZXRlZCIsIl9tYWluUmVzb2x2ZSIsIl9wb3N0UHJvY2Vzc2luZ0NCIiwicGxhY2UiLCJfcHJvbWlzZURvbmVIZWxwZXIiLCJfcG9zdFByb2Nlc3NpbmciLCJjYXRjaCIsIl90b3RhbFByb2Nlc3NpbmdJdGVtcyIsImFkZGVkSXRlbXMiLCJuZXh0QXZhaWxhYmxlSW5kZXgiLCJuZXh0SXRlbVRvUHJvY2VzcyIsImNiUHJvY2Vzc2VkIiwiX3RvUHJvY2Vzc2luZ0NCIiwiX2FkZFRvUHJvY2Vzc29yIiwiX3ByZVByb2Nlc3NpbmciLCJfZmluc2hQcm9jZXNzb3IiLCJjYiIsImNvdW50IiwiaXRlbXNUb1Byb2Nlc3MiLCJfbWFpblJlamVjdCIsImluY29ycmVjdEFkZFRvUHJvY2Vzc2luZ1JldHVyblR5cGUiLCJjb21wbGV0ZWRTdWNjZXNzIiwiY29tcGxldGVkRmFpbCIsIm5vUHJlUHJvY3Nzb3JDQiIsImluY29ycmVjdERhdGFUeXBlRm9ySXRlbXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7O0FBRUEsSUFBSUEsT0FBTyxtQkFBQUMsQ0FBUSxDQUFSLENBQVg7QUFDQSxJQUFJQyxXQUFXLG1CQUFBRCxDQUFRLEVBQVIsQ0FBZjs7QUFFQTs7QUFFQTs7QUFFQSxJQUFJRSxXQUFXQyxPQUFPQyxTQUFQLENBQWlCRixRQUFoQzs7QUFFQTs7Ozs7O0FBTUEsU0FBU0csT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDcEIsU0FBT0osU0FBU0ssSUFBVCxDQUFjRCxHQUFk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Qjs7Ozs7Ozs7QUFRQSxpQkFBS2QsaUJBQUwsR0FBeUJjLEVBQXpCO0FBQ0g7QUFDRDs7Ozs7OztBQWxHSjtBQUFBO0FBQUEsMkNBd0d1QkEsRUF4R3ZCLEVBd0cyQjtBQUNuQjs7Ozs7Ozs7O0FBU0EsaUJBQUtKLGVBQUwsR0FBdUJJLEVBQXZCO0FBQ0g7QUFDRDs7Ozs7QUFwSEo7QUFBQTtBQUFBLG1EQXdIK0JDLEtBeEgvQixFQXdIc0M7QUFDOUIsaUJBQUtuQixlQUFMLEdBQXVCbUIsS0FBdkI7QUFDSDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUEzSEo7QUFBQTtBQUFBLDZCQXlJU0MsY0F6SVQsRUF5SXlCO0FBQUE7O0FBQ2pCLGdCQUFJLENBQUV2WixNQUFNOUUsT0FBTixDQUFjcWUsY0FBZCxDQUFOLEVBQXNDO0FBQ2xDLHNCQUFNLElBQUlsWixLQUFKLENBQVUsNkVBQVYsQ0FBTjtBQUNIO0FBQ0QsaUJBQUt3WSxVQUFMLEdBQWtCVSxjQUFsQjs7QUFFQSxtQkFBTyxJQUFJOVYsT0FBSixDQUFZLFVBQUNFLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQyx1QkFBSzBVLFlBQUwsR0FBb0IzVSxPQUFwQjtBQUNBLHVCQUFLNlYsV0FBTCxHQUFtQjVWLE1BQW5COztBQUVBLHVCQUFLdVYsY0FBTDtBQUNILGFBTE0sQ0FBUDtBQU9IO0FBdEpMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDUE8sSUFBTU0scUNBQXFDLDBIQUEzQztBQUNBLElBQU1DLG1CQUFtQixTQUF6QjtBQUNBLElBQU1DLGdCQUFnQixNQUF0QjtBQUNBLElBQU1DLGtCQUFrQixzRkFBeEI7QUFDQSxJQUFNQyw0QkFBNEIsZ0RBQWxDLEMiLCJmaWxlIjoiLi9saWJyYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicGQtc3B1dGlsXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInBkLXNwdXRpbFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwZHNwc2VydmVyYWpheFwiXSA9IGZhY3RvcnkocmVxdWlyZShcInBkLXNwdXRpbFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicGRzcHNlcnZlcmFqYXhcIl0gPSBmYWN0b3J5KHJvb3RbXCJwZHNwdXRpbFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzhfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkYmQxMDhlZDgxZDlkNTBmYjZhZiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiAhaXNBcnJheShvYmopKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9temFicmlza2llL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV84X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInBkLXNwdXRpbFwiLFwiY29tbW9uanMyXCI6XCJwZC1zcHV0aWxcIixcImFtZFwiOlwicGQtc3B1dGlsXCIsXCJyb290XCI6XCJwZHNwdXRpbFwifVxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcclxuXHQ8cD5cclxuXHRSZXF1aXJlczpcclxuXHRcdDx1bD5cclxuXHRcdDxsaT5iYWJlbCBwb2x5ZmlsbCAtIG9iamVjdCBhc3NpZ24gYW5kIHByb21pc2U8L2xpPlxyXG5cdFx0PGxpPmF4aW9zIC0gdGhlIHJlc3BvbnNlIG9mIHRoZSBzZXJ2ZXIgaXMgaW4gdGhlIGRhdGEgcHJvcGVydHkgd2hlbiBhIHBsYWluIGF4aW9zIHJlc3BvbnNlIGlzIHJldHVybmVkPC9saT5cclxuXHRcdDxsaT5wZC1zcHV0aWwgLSBlbmNvZGVBY2NvdW50TmFtZSwgZ2V0VVJMT3JpZ2luPC9saT5cclxuXHRcdDwvdWw+XHJcblx0PC9wPlxyXG5cdDxwPlxyXG5cdFx0cGRzcHNlcnZlcmFqYXggLSBpcyBleHBvc2VkIGlzIGEgZ2xvYmFsIG5hbWVzcGFjZSBpZiBhZGRlZCB0byBicm93c2VyIHZpYSBzY3JpcHQgdGFnXHJcblx0PC9wPlxyXG5cdEBhdXRob3IgXCJKZXJlZCBNY0dsb2hvblwiXHJcblx0QG1vZHVsZSBwZHNwc2VydmVyYWpheFxyXG4gKi9cclxuXHJcbmltcG9ydCAqIGFzIGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0ICogYXMgYWpheEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcclxuaW1wb3J0IHtlbmNvZGVBY2NvdW50TmFtZSwgZ2V0VVJMT3JpZ2lufSBmcm9tICdwZC1zcHV0aWwnO1xyXG5pbXBvcnQge21ldGVyZWRSZXF1ZXN0UHJvY2Vzc29yfSBmcm9tICdwZC1tZXRlcmVkcmVxdWVzdHByb2Nlc3Nvcic7XHJcblxyXG5jb25zdCBkZXBUZXN0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0dHJ5IHtcclxuXHRcdGlmIChQcm9taXNlICYmIE9iamVjdC5hc3NpZ24pIHtcclxuXHRcdFx0Ly9hbGwgZ29vZCBtb3ZlIG9uXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlByb21pc2UgQVBJIGFuZCBPYmplY3QuYXNzaWduIGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBhZGQgYSBwb2x5ZmlsbCB0byBjb250aW51ZS5cIik7XHJcblx0fVxyXG5cdHRyeSB7XHJcblx0XHRpZiAoYXhpb3MpIHtcclxuXHRcdFx0Ly9hbGwgZ29vZCBtb3ZlIG9uXHJcblx0XHR9XHJcblx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcImF4aW9zIEFQSSBpcyBub3QgYXZhaWxhYmxlLiBQbGVhc2UgYWRkIGEgYXhpb3MgdG8gY29udGludWUuXCIpO1xyXG5cdH1cclxufTtcclxuZGVwVGVzdCgpO1xyXG5cclxuY29uc3QgYWpheEdldFVzZXJQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdHJldHVybiBnZXREYXRhKHByb3BzLnBlcm1zTGluaylcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cmV0dXJuIGFqYXhIZWxwZXJzLnBhcnNlQmFzZVBlcm1pc3Npb25zKHJlc3BvbnNlLmRhdGEpO1xyXG5cdH0pO1xyXG59O1xyXG5jb25zdCBnZXRFbnRpdHlUeXBlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHRcclxuXHR2YXIgZW50aXR5RGF0YTtcclxuXHJcblx0aWYgKHByb3BzLmxpc3ROYW1lKSB7XHJcblx0XHRlbnRpdHlEYXRhID0gYWpheEhlbHBlcnMubGlzdEl0ZW1FbnRpdHlQYXR0ZXJuLnRlc3QocHJvcHMubGlzdE5hbWUpIFxyXG5cdFx0PyBwcm9wcy5saXN0TmFtZVxyXG5cdFx0OiBhamF4SGVscGVycy5jcmVhdGVsaXN0aXRlbXR5cGUocHJvcHMubGlzdE5hbWUpO1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRpdHlEYXRhKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBnZXRMaXN0SW5mbyhwcm9wcylcclxuXHQudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlLmRhdGEuTGlzdEl0ZW1FbnRpdHlUeXBlRnVsbE5hbWU7XHJcblx0fSk7XHJcbn07XHJcbmNvbnN0IG5vbkRlbGV0ZVByb2Nlc3MgPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRpZighcHJvcHMuaGVhZGVyRGF0YSkge1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YSA9IHt9O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdldEVudGl0eVR5cGUocHJvcHMpXHJcblx0LnRoZW4oZnVuY3Rpb24odHlwZSkge1xyXG5cdFx0cHJvcHMuaXRlbSA9IE9iamVjdC5hc3NpZ24oe1xyXG5cdFx0XHQnX19tZXRhZGF0YSc6IHsndHlwZSc6IHR5cGV9XHJcblx0XHR9LCBwcm9wcy5pbmZvVG9TZXJ2ZXIpO1xyXG5cclxuXHRcdHJldHVybiBnZXRDb250ZXh0KHByb3BzKTtcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGNvbnRleHQpIHtcclxuXHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhWydYLVJlcXVlc3REaWdlc3QnXSA9IGNvbnRleHQuZGF0YS5Gb3JtRGlnZXN0VmFsdWU7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhLkFjY2VwdCA9IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnQ29udGVudC1UeXBlJ10gPSBhamF4SGVscGVycy52ZXJib3NlTWV0YTtcclxuXHJcblx0XHRhamF4SGVscGVycy5saXN0SXRlbVVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdFx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwcm9wcy5saXN0SXRlbVVybCxcclxuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KHByb3BzLml0ZW0pLFxyXG5cdFx0XHRoZWFkZXJzOiBwcm9wcy5oZWFkZXJEYXRhXHJcblx0XHR9KTtcclxuXHR9KTtcclxufTtcclxuY29uc3QgZGVsZXRlUHJvY2VzcyA9IGZ1bmN0aW9uKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5oZWFkZXJEYXRhKSB7XHJcblx0XHRwcm9wcy5oZWFkZXJEYXRhID0ge307XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2V0Q29udGV4dChwcm9wcylcclxuXHQudGhlbihmdW5jdGlvbihjb250ZXh0KSB7XHJcblxyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YVsnWC1SZXF1ZXN0RGlnZXN0J10gPSBjb250ZXh0LmRhdGEuRm9ybURpZ2VzdFZhbHVlO1xyXG5cdFx0cHJvcHMuaGVhZGVyRGF0YS5BY2NlcHQgPSBhamF4SGVscGVycy5taW5pbWFsTWV0YTtcclxuXHRcdHByb3BzLmhlYWRlckRhdGFbJ0NvbnRlbnQtVHlwZSddID0gYWpheEhlbHBlcnMudmVyYm9zZU1ldGE7XHJcblxyXG5cdFx0YWpheEhlbHBlcnMubGlzdEl0ZW1VcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRcdGlmIChwcm9wcy51cmxNb2RpZmllcikge1xyXG5cdFx0XHRwcm9wcy5saXN0SXRlbVVybCArPSBwcm9wcy51cmxNb2RpZmllcjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0XHR1cmw6IHByb3BzLmxpc3RJdGVtVXJsLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0aGVhZGVyczogcHJvcHMuaGVhZGVyRGF0YVxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn07XHJcblxyXG4vKipcclxuICogR2V0cyBhIGNvbnRleHQgb2JqZWN0IGZvciBzZXJ2ZXIgcmVxdWVzdHMuXHJcbiAqIHRoZSBrZXkgZnJvbSByZXNwb25zZSBpcyBGb3JtRGlnZXN0VmFsdWVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlLjxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbnRleHQocHJvcHMpIHtcclxuXHRcclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS9jb250ZXh0aW5mb1wiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdG1ldGhvZDogXCJQT1NUXCIsXHJcblx0XHRoZWFkZXJzOiB7IFwiQWNjZXB0XCI6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhIH0sXHJcblx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsXHJcblx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdHByb3BzLmVuZFBvaW50ID0gbnVsbDtcclxuXHRcdHByb3BzLmNvbmZpZ3VyZWRVcmwgPSBudWxsO1xyXG5cdFx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgZGF0YSBmcm9tIHNlcnZlciB1c2luZyB0aGUgUkVTVCBlbmRwb2ludFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gZnVsbCBvZGF0YSB1cmxcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKHVybCkge1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHsnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGF9LFxyXG5cdFx0dXJsOiB1cmxcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0cyBhbGwgcmVzdWx0cyBmb3Igc2VydmVyIHJlcXVlc3RzLlxyXG4gKiBvbmNlIHRoZSBwcm9taXNlIHJlc29sdmVzIHlvdSBnZXQgYW4gYXJyYXkgb2Ygb2JqZWN0cyB0aGF0IGFyZSB0aGUgc2VydmVycyByZXNwb25zZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuc2VsZWN0XVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmZpbHRlcl1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5leHBhbmRdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMudG9wXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yZGVyQnldXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlLjxvYmplY3RbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTGlzdFJlc3VsdHMocHJvcHMpIHtcclxuXHJcblx0aWYoIXByb3BzLmxpc3RHVUlEICYmICFwcm9wcy5saXN0VGl0bGUpIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlamVjdChcIm11c3QgcGFzcyBsaXN0R1VJRCBvciBsaXN0VGl0bGUgdG8gZ2V0QWxsTGlzdFJlc3VsdHNcIik7XHJcblx0fVxyXG5cclxuXHRhamF4SGVscGVycy5jcmVhdGVHZXRBbGxVcmwocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gZ2V0RGF0YShwcm9wcy5saXN0VXJsKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHR2YXIgY3VycmVudFJlc3VsdHMgPSBwcm9wcy5hbGxSZXN1bHRzIHx8IFtdLFxyXG5cdFx0XHRyZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG5cclxuXHRcdHByb3BzLmFsbFJlc3VsdHMgPSBjdXJyZW50UmVzdWx0cy5jb25jYXQocmVzcG9uc2VEYXRhLnZhbHVlKTtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3BvbnNlRGF0YVsnb2RhdGEubmV4dExpbmsnXSkge1xyXG5cdFx0XHRwcm9wcy5saXN0VXJsID0gcmVzcG9uc2VEYXRhWydvZGF0YS5uZXh0TGluayddO1xyXG5cdFx0XHRyZXR1cm4gZ2V0QWxsTGlzdFJlc3VsdHMocHJvcHMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHByb3BzLmFsbFJlc3VsdHM7XHJcblx0fSk7XHJcbn1cclxuY29uc3QgYWpheEdldEJhdGNoID0gZnVuY3Rpb24ocHJvcHMsIGFycmF5T2ZVcmxzKSB7XHJcblxyXG5cdHZhciBiYXRjaEdVSUQgPSBhamF4SGVscGVycy5jcmVhdGVHVUlEKCksXHJcblx0XHRiYXRjaEJvZHksXHJcblx0XHRiYXRjaEhlYWRlcixcclxuXHRcdGJhdGNoQ29udGVudHMgPSBbXTtcclxuXHJcblx0Ly9iYXRjaCAob3BlcmF0aW9uKVxyXG5cdGFycmF5T2ZVcmxzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCctLWJhdGNoXycgKyBiYXRjaEdVSUQpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCdDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2h0dHAnKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnQ29udGVudC1UcmFuc2Zlci1FbmNvZGluZzogYmluYXJ5Jyk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goJycpO1xyXG5cdFx0YmF0Y2hDb250ZW50cy5wdXNoKCdHRVQgJyArIGl0ZW0gKyAnIEhUVFAvMS4xJyk7XHJcblx0XHRiYXRjaENvbnRlbnRzLnB1c2goYEFjY2VwdDogJHthamF4SGVscGVycy5taW5pbWFsTWV0YX1gKTtcclxuXHRcdGJhdGNoQ29udGVudHMucHVzaCgnJyk7XHJcblx0fSk7XHJcblxyXG5cdGJhdGNoQ29udGVudHMucHVzaCgnLS1iYXRjaF8nICsgYmF0Y2hHVUlEICsgJy0tJyk7XHJcblxyXG5cdGJhdGNoQm9keSA9IGJhdGNoQ29udGVudHMuam9pbignXFxyXFxuJyk7XHJcblxyXG5cdHJldHVybiBnZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuXHRcdHByb3BzLmVuZFBvaW50ID0gJ19hcGkvJGJhdGNoJztcclxuXHRcdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0XHRiYXRjaEhlYWRlciA9IHtcclxuXHRcdCdYLVJlcXVlc3REaWdlc3QnOiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZSxcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L21peGVkOyBib3VuZGFyeT1cImJhdGNoXycgKyBiYXRjaEdVSUQgKyAnXCInXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsXHJcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRkYXRhOiBiYXRjaEJvZHksXHJcblx0XHRcdGhlYWRlcnM6IGJhdGNoSGVhZGVyXHJcblx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRcdHZhciBwYXJzZWRBcnJheSA9IFtdLFxyXG5cdFx0XHRcdHJlc3BvbnNlVG9BcnJheSA9IHJlc3BvbnNlLmRhdGEuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgY3VycmVudExpbmUgPSAwOyBjdXJyZW50TGluZSA8IHJlc3BvbnNlVG9BcnJheS5sZW5ndGg7IGN1cnJlbnRMaW5lKyspIHtcclxuXHRcdFx0XHRpZiAocmVzcG9uc2VUb0FycmF5W2N1cnJlbnRMaW5lXS5jaGFyQXQoMCkgPT09ICd7Jykge1xyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHQvLyBwYXJzZSB0aGUgSlNPTiByZXNwb25zZS4uLlxyXG5cdFx0XHRcdFx0dmFyIHRyeVBhcnNlSnNvbiA9IEpTT04ucGFyc2UocmVzcG9uc2VUb0FycmF5W2N1cnJlbnRMaW5lXSk7XHJcblxyXG5cdFx0XHRcdFx0cGFyc2VkQXJyYXkucHVzaCh0cnlQYXJzZUpzb24pO1xyXG5cclxuXHRcdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdFx0XHQvLyBkb24ndCBkbyBhbnl0aGluZy4uLiBqdXN0IGtlZXAgbW92aW5nXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBhcnNlZEFycmF5O1xyXG5cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufTtcclxuLyoqXHJcbiAqIEdldHMgYWxsIGl0ZW1zIHJlcXVlc3RlZCBpbiB0aGUgZ2V0VXJscyBwcm9wZXJ0eSAoYmF0Y2ggcmVxdWVzdClcclxuICogXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSByZWxhdGl2ZSB1cmwgb2YgdGhlIHNpdGUgdGhhdCBjb250YWlucyB0aGUgZGF0YVxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcy5nZXRVcmxzIC0gZnVsbCBvZGF0YSB1cmxzXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXRjaE1ldGVyZWQocHJvcHMpIHtcclxuXHRsZXQgdXJsc0ZvclRyaXAgPSBbXSxcclxuXHRcdHBlclRyaXBDb3VudCA9IDA7XHJcblxyXG5cdHByb3BzLnRvdGFsSXRlbXMgPSBwcm9wcy5nZXRVcmxzLmxlbmd0aDtcclxuXHRwcm9wcy50b3RhbFBlclRyaXAgPSA1MDtcclxuXHRwcm9wcy5hbGxSZXN1bHRzID0gW107XHJcblx0cHJvcHMubnVtYmVyVG9TdGFydEF0ID0gMDtcclxuXHJcblx0Zm9yICg7IHByb3BzLm51bWJlclRvU3RhcnRBdCA8IHByb3BzLnRvdGFsSXRlbXM7IHByb3BzLm51bWJlclRvU3RhcnRBdCsrKSB7XHJcblx0XHRsZXQgdXJsID0gcHJvcHMuZ2V0VXJsc1twcm9wcy5udW1iZXJUb1N0YXJ0QXRdO1xyXG5cdFx0dXJsc0ZvclRyaXAucHVzaCh1cmwpO1xyXG5cdFx0cGVyVHJpcENvdW50Kys7XHJcblxyXG5cdFx0aWYgKHBlclRyaXBDb3VudCA9PT0gcHJvcHMudG90YWxQZXJUcmlwKSB7XHJcblx0XHRcdHByb3BzLm51bWJlclRvU3RhcnRBdCsrO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBhamF4R2V0QmF0Y2goe29yaWdpbjogcHJvcHMub3JpZ2luLCB1cmw6IHByb3BzLnVybH0sIHVybHNGb3JUcmlwKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcblx0XHRwcm9wcy5hbGxSZXN1bHRzID0gcHJvcHMuYWxsUmVzdWx0cy5jb25jYXQocmVzcG9uc2UpO1xyXG5cclxuXHRcdGlmIChwcm9wcy5udW1iZXJUb1N0YXJ0QXQgPCBwcm9wcy50b3RhbEl0ZW1zKSB7XHJcblx0XHRcdHJldHVybiBnZXRCYXRjaE1ldGVyZWQocHJvcHMpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwcm9wcy5hbGxSZXN1bHRzO1xyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdXNlciBwcm9maWxlcyBmcm9tIHRoZSBzZXJ2ZXIgKGJhdGNoIHJlcXVlc3QpXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwcm9wcy5wcm9maWxlRW1haWxzIC0gZW1haWwgYWRkcmVzc2VzIG9mIHRoZSB1c2VycyB5b3Ugd2FudCBwcm9maWxlIGRhdGEgZm9yXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXRjaFByb2ZpbGVzKHByb3BzKSB7XHJcblx0bGV0IHByb2ZpbGVVcmxzID0gbnVsbDtcclxuXHRpZiAoIXByb3BzLnByb2ZpbGVFbWFpbHMgfHwgcHJvcHMucHJvZmlsZUVtYWlscy5sZW5ndGggPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcInByb2ZpbGUgZW1haWxzIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjYWxsaW5nIHRoZSBiYXRjaCBwcm9maWxlIGZ1bmN0aW9uXCIpO1xyXG5cdH1cclxuXHJcblx0cHJvcHMub3JpZ2luID0gZ2V0VVJMT3JpZ2luKCk7XHJcblx0cHJvZmlsZVVybHMgPSBbXTtcclxuXHJcblx0bGV0IHVybEZvclNpdGUgPSBwcm9wcy5vcmlnaW4gKyBwcm9wcy51cmw7XHJcblx0cHJvcHMucHJvZmlsZUVtYWlscy5mb3JFYWNoKChlbWFpbCkgPT4ge1xyXG5cdFx0bGV0IGVuY29kZWQgPSBlbmNvZGVBY2NvdW50TmFtZShlbWFpbCk7XHJcblx0XHRwcm9maWxlVXJscy5wdXNoKGAke3VybEZvclNpdGV9L19hcGkvc3AudXNlcnByb2ZpbGVzLnBlb3BsZW1hbmFnZXIvR2V0UHJvcGVydGllc0ZvcignJHtlbmNvZGVkfScpPyRzZWxlY3Q9VXNlclByb2ZpbGVQcm9wZXJ0aWVzYCk7XHJcblx0fSk7XHJcblxyXG5cdGxldCB7b3JpZ2luLCB1cmx9ID0gcHJvcHM7XHJcblx0XHJcblx0cmV0dXJuIGdldEJhdGNoTWV0ZXJlZCh7XHJcblx0XHRvcmlnaW46IG9yaWdpbixcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0Z2V0VXJsczogcHJvZmlsZVVybHNcclxuXHR9KTtcclxufVxyXG4vKipcclxuICogR2V0IGxpc3Qgb3IgbGlicmFyeSBwcm9wZXJ0aWVzIGZyb20gc2VydmVyXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBhIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RJbmZvKHByb3BzKSB7XHJcblxyXG5cdGFqYXhIZWxwZXJzLmxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cdHJldHVybiBnZXREYXRhKHByb3BzLmxpc3RVcmwpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdXNlciBwcm9maWxlIGluZm8gZnJvbSB0aGUgU2hhcmVQb2ludCBzZWFyY2ggc2VydmljZVxyXG4gKiBAcGFyYW0ge29iamVjdH1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnF1ZXJ5IC0gcXVlcnkgdGhhdCBpcyBwYXNzZWQgdG8gc2VhcmNoIHNlcnZpY2UsIGV4IFwiJ1wiICsgJ0J1cmVhdT1cIicrIGRpdmlzaW9uTmFtZSArICdcIlxcJydcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5zb3VyY2VJZF0gLSBzb3VyY2UgaWQgZm9yIHRoZSBzZWFyY2ggc2VydmljZSB0byB1c2UsIGRlZmF1bHRzIHRvIHRoZSBvdXQgb2YgdGhlIGJveCBwZW9wbGUgc291cmNlIGlkXHJcbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzLnByb3BlcnRpZXMgLSBzcGVjaWZ5IHdoaWNoIHByb3BlcnRpZXMgeW91IHdhbnQgYmFjayBmcm9tIHRoZSByZXF1ZXN0XHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwZW9wbGVTZWFyY2gocHJvcHMpIHtcclxuXHJcblx0dmFyIGFsbFJlc3VsdHMgPSBwcm9wcy5jdXJyZW50UmVzdWx0cyB8fCBbXSxcclxuXHRcdHNlcnZlclF1ZXJ5RGF0YSA9IHtcclxuXHRcdFx0c3RhcnRyb3c6IDAsXHJcblx0XHRcdHJvd2xpbWl0OiA1MDAsXHJcblx0XHRcdFRyaW1EdXBsaWNhdGVzOiBmYWxzZSxcclxuXHRcdFx0c2VsZWN0cHJvcGVydGllczogYCcke3Byb3BzLnByb3BlcnRpZXMuam9pbignLCcpfSdgXHJcblx0XHR9O1xyXG5cclxuXHRzZXJ2ZXJRdWVyeURhdGEuc3RhcnRyb3cgPSBwcm9wcy5zdGFydHJvdyA/IHByb3BzLnN0YXJ0cm93IDogMDtcclxuXHRzZXJ2ZXJRdWVyeURhdGEuc291cmNlSWQgPSBwcm9wcy5zb3VyY2VJZCA/IGAnJHtwcm9wcy5zb3VyY2VJZH0nYCA6IFwiJ2IwOWE3OTkwLTA1ZWEtNGFmOS04MWVmLWVkZmFiMTZjNGUzMSdcIjtcclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvc2VhcmNoL3F1ZXJ5XCI7XHJcblx0c2VydmVyUXVlcnlEYXRhLnF1ZXJ5dGV4dCA9IGAnJHtwcm9wcy5xdWVyeX0nYDtcclxuXHJcblx0YWpheEhlbHBlcnMuY2hlY2tVcmxPcmlnaW4ocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gYXhpb3Moe1xyXG5cdFx0dXJsOiBwcm9wcy5jb25maWd1cmVkVXJsLFxyXG5cdFx0bWV0aG9kOiAnR0VUJyxcclxuXHRcdGhlYWRlcnM6IHsnQWNjZXB0JzogYWpheEhlbHBlcnMubWluaW1hbE1ldGF9LFxyXG5cdFx0cGFyYW1zOiBzZXJ2ZXJRdWVyeURhdGFcclxuXHR9KS50aGVuKGZ1bmN0aW9uKGVtcERhdGEpIHtcclxuXHJcblx0XHR2YXIgcmVsZXZhbnRSZXN1bHRzID0gZW1wRGF0YS5kYXRhLlByaW1hcnlRdWVyeVJlc3VsdC5SZWxldmFudFJlc3VsdHM7XHJcblxyXG5cdFx0YWxsUmVzdWx0cyA9IGFsbFJlc3VsdHMuY29uY2F0KHJlbGV2YW50UmVzdWx0cy5UYWJsZS5Sb3dzKTtcclxuXHRcdHByb3BzLmN1cnJlbnRSZXN1bHRzID0gYWxsUmVzdWx0cztcclxuXHJcblx0XHRpZiAocmVsZXZhbnRSZXN1bHRzLlRvdGFsUm93cyA+IChzZXJ2ZXJRdWVyeURhdGEuc3RhcnRyb3cgKyByZWxldmFudFJlc3VsdHMuUm93Q291bnQpKSB7XHJcblx0XHRcdHByb3BzLnN0YXJ0cm93ID0gc2VydmVyUXVlcnlEYXRhLnN0YXJ0cm93ICsgcmVsZXZhbnRSZXN1bHRzLlJvd0NvdW50O1xyXG5cdFx0XHRyZXR1cm4gcGVvcGxlU2VhcmNoKHByb3BzKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBwcm9wcy5jdXJyZW50UmVzdWx0cztcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG4vKipcclxuICogQ2hlY2tzIGlmIHVzZXIgaXMgaW4gdGhlIHNpdGUgY29sbGVjdGlvbiB1c2VyIHRhYmxlXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBhZGRyZXNzIG9mIHRoZSB1c2VyIHRvIGNoZWNrXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdD59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZW5zdXJlVXNlcihwcm9wcykge1xyXG5cdFxyXG5cdHJldHVybiBnZXRDb250ZXh0KHByb3BzKVxyXG5cdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblx0XHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblx0XHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAvZW5zdXJlVXNlcignJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9JylgO1xyXG5cclxuXHRcdHJldHVybiBheGlvcyh7ICAgICAgIFxyXG5cdFx0XHR1cmw6IHByb3BzLmNvbmZpZ3VyZWRVcmwsICAgXHJcblx0XHRcdG1ldGhvZDogXCJQT1NUXCIsICBcclxuXHRcdFx0Y29udGVudFR5cGU6IGFqYXhIZWxwZXJzLnZlcmJvc2VNZXRhLFxyXG5cdFx0XHRoZWFkZXJzOiB7IFxyXG5cdFx0XHRcdFwiQWNjZXB0XCI6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhLFxyXG5cdFx0XHRcdFwiWC1SZXF1ZXN0RGlnZXN0XCI6IHJlc3BvbnNlLmRhdGEuRm9ybURpZ2VzdFZhbHVlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxufVxyXG4vKipcclxuICogR2V0cyB1c2VyIGluZm8gZnJvbSB0aGUgc2l0ZSBjb2xsZWN0aW9uIHVzZXIgdGFibGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5lbWFpbCAtIGVtYWlsIGFkZHJlc3Mgb2YgdGhlIHVzZXIgdG8gcmV0cmlldmVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXRlVXNlckluZm9CeUVtYWlsKHByb3BzKSB7XHJcblxyXG5cdHByb3BzLmVuZFBvaW50ID0gXCJfYXBpL3dlYi9zaXRldXNlcnNcIjtcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdHByb3BzLmNvbmZpZ3VyZWRVcmwgKz0gYD8kZmlsdGVyPUxvZ2luTmFtZSBlcSAnJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9J2A7XHJcblxyXG5cdHJldHVybiBnZXREYXRhKHByb3BzLmNvbmZpZ3VyZWRVcmwpO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgcmVxdWVzdCB0aGF0IHVzZXMgQ0FNTCB0byBmaWx0ZXIgcmVzdWx0c1xyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnF1ZXJ5IC0gQ0FNTCBxdWVyeVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtc0J5Q2FtbChwcm9wcykge1xyXG5cclxuXHRyZXR1cm4gZ2V0Q29udGV4dChwcm9wcylcclxuXHQudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHJcblx0XHRsZXQgcXVlcnkgPSB7IFwicXVlcnlcIiA6XHJcblx0XHRcdHtcIl9fbWV0YWRhdGFcIjogXHJcblx0XHRcdHsgXCJ0eXBlXCI6IFwiU1AuQ2FtbFF1ZXJ5XCIgfSxcclxuXHRcdFx0XHRcIlZpZXdYbWxcIjogcHJvcHMuY2FtbFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0aGVhZGVyZGF0YSA9IHtcclxuXHRcdFx0J0FjY2VwdCc6IGFqYXhIZWxwZXJzLm1pbmltYWxNZXRhLFxyXG5cdFx0XHQnQ29udGVudC1UeXBlJzogYWpheEhlbHBlcnMudmVyYm9zZU1ldGEsXHJcblx0XHRcdCdYLVJlcXVlc3REaWdlc3QnOiByZXNwb25zZS5kYXRhLkZvcm1EaWdlc3RWYWx1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHRhamF4SGVscGVycy5saXN0VXJsQ29uZmlndXJlKHByb3BzKTtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gJy9nZXRpdGVtcyc7XHJcblxyXG5cdFx0cmV0dXJuIGF4aW9zKHtcclxuXHRcdFx0dXJsOiBwcm9wcy5saXN0VXJsLFxyXG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YTogSlNPTi5zdHJpbmdpZnkocXVlcnkpLFxyXG5cdFx0XHRoZWFkZXJzOiBoZWFkZXJkYXRhXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHJcbn1cclxuLyoqXHJcbiAqIEdldCBhIHVzZXJzIHBlcm1pc3Npb25zIHRvIGEgc2l0ZVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmVtYWlsIC0gZW1haWwgb2YgdGhlIHVzZXIgdG8gZ2V0IHBlcm1pc3Npb25zIGZvclxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxzdHJpbmdbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNpdGVQZXJtaXNzaW9ucyhwcm9wcykge1xyXG5cclxuXHRsZXQgZW5jb2RlZEVtYWlsID0gZW5jb2RlQWNjb3VudE5hbWUocHJvcHMuZW1haWwpO1xyXG5cclxuXHRwcm9wcy5lbmRQb2ludCA9IFwiX2FwaS93ZWJcIjtcclxuXHRhamF4SGVscGVycy5jaGVja1VybE9yaWdpbihwcm9wcyk7XHJcblxyXG5cdHByb3BzLnBlcm1zTGluayA9IGAke3Byb3BzLmNvbmZpZ3VyZWRVcmx9L2dldHVzZXJlZmZlY3RpdmVwZXJtaXNzaW9ucyhAdXNlcik/QHVzZXI9JyR7ZW5jb2RlZEVtYWlsfSdgO1xyXG5cdHJldHVybiBhamF4R2V0VXNlclBlcm1pc3Npb25zKHByb3BzKTtcclxufVxyXG4vKipcclxuICogR2V0IGEgdXNlcnMgcGVybWlzc2lvbnMgdG8gYSBsaXN0IG9yIGxpYnJhcnlcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuZW1haWwgLSBlbWFpbCBvZiB0aGUgdXNlciB0byBjaGVjayBwZXJtaXNzaW9uIG9mXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPHN0aW5nW10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJMaXN0UGVybWlzc2lvbnMocHJvcHMpIHtcclxuXHJcblx0bGV0IGVuY29kZWRFbWFpbCA9IGVuY29kZUFjY291bnROYW1lKHByb3BzLmVtYWlsKTtcclxuXHJcblx0YWpheEhlbHBlcnMubGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdHByb3BzLnBlcm1zTGluayA9IGAke3Byb3BzLmxpc3RVcmx9L2dldHVzZXJlZmZlY3RpdmVwZXJtaXNzaW9ucyhAdXNlcik/QHVzZXI9JyR7ZW5jb2RlZEVtYWlsfSdgO1xyXG5cdHJldHVybiBhamF4R2V0VXNlclBlcm1pc3Npb25zKHByb3BzKTtcclxufVxyXG4vKipcclxuICogR2V0cyB0aGUgU2hhcmVQb2ludCBncm91cHMgdGhhdCBhIHVzZXIgaGFzIGJlZW4gYWRkZWQgdG8sIGlkZW50aWZ5IHRoZSB1c2VyIGJ5IHBhc3NpbmcgdGhlIGlkIG51bWJlciBvZiB0aGUgdXNlciBmb3IgdGhlIHNpdGUuXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMudXNlcklkIC0gdXNlcnMgc2l0ZSBpZCBudW1iZXJcclxuICogQHJldHVybnMge3Byb21pc2U8c3RpbmdbXT59XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXJHcm91cHMocHJvcHMpIHtcclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIi9fYXBpL3dlYlwiO1xyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgL0dldFVzZXJieUlkKCR7cHJvcHMudXNlcklkfSkvR3JvdXBzYDtcclxuXHJcblx0cmV0dXJuIGdldERhdGEocHJvcHMuY29uZmlndXJlZFVybClcclxuXHQudGhlbihmdW5jdGlvbihncm91cHMpe1xyXG5cclxuXHRcdHZhciBncm91cEFycmF5ID0gW107XHJcblxyXG5cdFx0Z3JvdXBzLmRhdGEudmFsdWUuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdGdyb3VwQXJyYXkucHVzaChpdGVtLlRpdGxlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJldHVybiBncm91cEFycmF5O1xyXG5cclxuXHR9KTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIHNpbmdsZSBpdGVtIGluIGEgbGlzdFxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdE5hbWVdIC0gc2VydmVyIG5hbWUgZm9yIHRoZSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy5pbmZvVG9TZXJ2ZXIgLSBvYmplY3Qgd2hvcyBrZXkgaXMgdGhlIGNvbHVtbiBuYW1lIGFuZCB0aGUgdmFsdWUgaXMgd2hhdCB5b3Ugd2FudCBzdG9yZWQgaW4gdGhhdCBjb2x1bW5cclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJdGVtKHByb3BzKSB7XHJcblx0cmV0dXJuIG5vbkRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBVcGRhdGVzIGEgc2luZ2xlIGl0ZW0gaW4gYSBsaXN0XHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0TmFtZV0gLSBzZXJ2ZXIgbmFtZSBmb3IgdGhlIGxpc3RcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5ldGFnXSAtIGV0YWcgb2YgdGhlIGl0ZW0gdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy5pdGVtSWQgLSBpZCBvZiB0aGUgaXRlbSB0byB1cGRhdGVcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzLmluZm9Ub1NlcnZlciAtIG9iamVjdCB3aG9zIGtleSBpcyB0aGUgY29sdW1uIG5hbWUgYW5kIHRoZSB2YWx1ZSBpcyB3aGF0IHlvdSB3YW50IHN0b3JlZCBpbiB0aGF0IGNvbHVtblxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUl0ZW0ocHJvcHMpIHtcclxuXHJcblx0cHJvcHMuaGVhZGVyRGF0YSA9IHtcclxuXHRcdFwiWC1IVFRQLU1ldGhvZFwiOiBcIk1FUkdFXCIsXHJcblx0XHRcIklmLU1hdGNoXCI6IHByb3BzLmV0YWcgfHwgXCIqXCJcclxuXHR9O1xyXG5cdHJldHVybiBub25EZWxldGVQcm9jZXNzKHByb3BzKTtcclxufVxyXG4vKipcclxuICogRGVsZXRlcyBhIHNpbmdsZSBpdGVtIGZyb20gYSBsaXN0IG9yIGxpYnJhcnlcclxuICogYmUgd2FybmVkIGlmIHlvdSB1c2UgdGhpcyBmdW5jdGlvbiwgdGhlIGl0ZW0geW91IGRlbGV0ZSB3aWxsIGJlIGdvbmUgYW5kIHVucmVjb3ZlcmFibGUhISEhXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5ldGFnXSAtIGV0YWcgb2YgdGhlIGl0ZW0gdG8gdXBkYXRlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy5pdGVtSWQgLSBpZCBvZiB0aGUgaXRlbSB0byBkZWxldGVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKHByb3BzKSB7XHJcblx0Ly90b2RvIHRyeSB0byBjb21wbGV0ZSB0aGlzIGZ1bmN0aW9uIHdpdGhvdXQgYW4gZXRhZ1xyXG5cdHByb3BzLmhlYWRlckRhdGEgPSB7XHJcblx0XHQnWC1IVFRQLU1ldGhvZCcgOiAnREVMRVRFJyxcclxuXHRcdFwiSWYtTWF0Y2hcIjogcHJvcHMuZXRhZyB8fCBcIipcIlxyXG5cdH07XHJcblx0cmV0dXJuIGRlbGV0ZVByb2Nlc3MocHJvcHMpO1xyXG59XHJcbi8qKlxyXG4gKiBTZW5kcyBhIHNpbmdsZSBpdGVtIHRvIHRoZSByZWN5Y2xlIGJpbiBvZiB0aGUgc2l0ZSBjb2xsZWN0aW9uXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy51cmwgLSBzaXRlIHJlbGF0aXZlIHVybFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubGlzdEdVSUQgLSB1c2UgZWl0aGVyIGxpc3RHVUlEIG9yIGxpc3RUaXRsZSBub3QgYm90aFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmxpc3RUaXRsZV1cclxuICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLml0ZW1JZCAtIGlkIG9mIHRoZSBpdGVtIHRvIHJlY3ljbGVcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0Pn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWN5Y2xlSXRlbShwcm9wcykge1xyXG5cclxuXHRwcm9wcy51cmxNb2RpZmllciA9IFwiL3JlY3ljbGVcIjtcclxuXHRyZXR1cm4gZGVsZXRlUHJvY2Vzcyhwcm9wcyk7XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgdGhlIHByb2ZpbGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgcHJvZmlsZSBzZXJ2aWNlXHJcbiAqIGlmIGVtYWlsIGlzIHBhc3NlZCB0aGVuIHRoYXQgd2lsbCBiZSB0aGUgcHJvZmlsZSBkYXRhIHlvdSBnZXQgYmFja1xyXG4gKiBpZiBlbWFpbCBpcyBub3QgcGFzc2VkIHlvdSBnZXQgY3VycmVudCB1c2VyIHByb2ZpbGUgZGF0YSBiYWNrXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLm9yaWdpbl0gXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuZW1haWxdIC0gZW1haWwgb2YgdGhlIHVzZXIgeW91IHdhbnQgcHJvZmlsZSBkYXRhIGZvciBcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlRGF0YShwcm9wcyA9IHt9KSB7XHJcblxyXG5cdGxldCBhZGRvbiA9IG51bGw7XHJcblxyXG5cdGlmKHByb3BzLmVtYWlsKSB7XHJcblx0XHRwcm9wcy5lbmRQb2ludCA9ICdfYXBpL3NwLnVzZXJwcm9maWxlcy5wZW9wbGVtYW5hZ2VyJztcclxuXHRcdGFkZG9uID0gYC9nZXRwcm9wZXJ0aWVzZm9yKEB2KT9Adj0nJHtlbmNvZGVBY2NvdW50TmFtZShwcm9wcy5lbWFpbCl9JyZgO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQvL3VybCBmb3IgZ2V0IGN1cnJlbnQgdXNlclxyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSAnX2FwaS9TUC5Vc2VyUHJvZmlsZXMuUGVvcGxlTWFuYWdlci9HZXRNeVByb3BlcnRpZXMnO1xyXG5cdFx0YWRkb24gPSAnPyc7XHJcblx0fVxyXG5cdFxyXG5cdGFqYXhIZWxwZXJzLmNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHRwcm9wcy5jb25maWd1cmVkVXJsICs9IGAke2FkZG9ufSRzZWxlY3Q9VXNlclByb2ZpbGVQcm9wZXJ0aWVzYDtcclxuXHRcclxuXHRyZXR1cm4gZ2V0RGF0YShwcm9wcy5jb25maWd1cmVkVXJsKVxyXG5cdC50aGVuKGZ1bmN0aW9uKHVzZXJEYXRhKXsgLy9zdWNjZXNzXHJcblx0XHRpZiAodXNlckRhdGEuZGF0YVsnb2RhdGEubnVsbCddID09PSB0cnVlKSB7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH0gZWxzZXtcclxuXHRcdFx0cmV0dXJuIHVzZXJEYXRhLmRhdGEuVXNlclByb2ZpbGVQcm9wZXJ0aWVzO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59XHJcbi8qKlxyXG4gKiBHZXQgdGhlIGNvbHVtbnMgb2YgYSBsaXN0IG9yIGxpYnJhcnlcclxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcmV0dXJucyB7cHJvbWlzZTxvYmplY3Q+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RDb2x1bW5zKHByb3BzKSB7XHJcblxyXG5cdGlmKCFwcm9wcy5hbGxEYXRhKSB7XHJcblx0XHRwcm9wcy5hbGxEYXRhID0gZmFsc2U7XHJcblx0fVxyXG5cdGFqYXhIZWxwZXJzLmxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cdHByb3BzLmxpc3RVcmwgKz0gYC9maWVsZHM/JGZpbHRlcj1IaWRkZW4gZXEgJHtwcm9wcy5hbGxEYXRhfSBhbmQgUmVhZE9ubHlGaWVsZCBlcSAke3Byb3BzLmFsbERhdGF9YDtcclxuXHJcblx0cmV0dXJuIGdldERhdGEocHJvcHMubGlzdFVybCk7XHJcbn1cclxuY2xhc3MgbWV0ZXJlZEFqYXggZXh0ZW5kcyBtZXRlcmVkUmVxdWVzdFByb2Nlc3NvcntcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cdF9jaGVja01ldGVyZWREYXRhVHlwZShwcm9wcykge1xyXG5cdFx0aWYgKCFwcm9wcy5pdGVtcyB8fCAoQXJyYXkuaXNBcnJheShwcm9wcy5pdGVtcykgPT09IGZhbHNlKSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYWpheEhlbHBlcnMubWV0ZXJlZEl0ZW1zSW5jb3JyZWN0RGF0YVR5cGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRfZ2V0TWV0ZXJlZExpc3ROYW1lKHByb3BzKSB7XHJcblx0XHRsZXQgZW50aXR5RGF0YSA9IG51bGw7XHJcblx0XHRcclxuXHRcdGlmIChwcm9wcy5saXN0TmFtZSkge1xyXG5cdFx0XHRlbnRpdHlEYXRhID0gUHJvbWlzZS5yZXNvbHZlKGFqYXhIZWxwZXJzLmxpc3ROYW1lUHJlc2VudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRlbnRpdHlEYXRhID0gZ2V0RW50aXR5VHlwZShwcm9wcyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZW50aXR5RGF0YTtcclxuXHR9XHJcbn1cclxuLyoqXHJcbiAqIFRoZSBwcm9jZXNzaW5nQ29tcGxldGVkQ2FsbGJhY2sgd2lsbCBiZSBwYXNzZWQgdGhlIG9yZGVyIG51bWJlciBhbmQgdGhlIHByb2Nlc3Mgc3RhdHVzIChzdWNjZXNzIG9yIGZhaWwpIHRvIHRyaWdnZXIgYW55IGNvbXBsZXRlZCBzaWRlIGVmZmVjdHNcclxuICogVGhlIG9yZGVyIG51bWJlciBpcyB5b3VyIGlkIHRvIGxvY2F0ZSBlbGVtZW50cyAoZG9tIG9yIHdoYXRldmVyKSBiYXNlZCBvbiB0aGUgc3BlY2lmaWMgaXRlbSBwcm9jZXNzaW5nXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBpdGVtQ29tcGxldGVkUHJvY2Vzc2luZ1xyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleFxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBpbmRleCBhbmQgaXRlbURhdGEgdG8gcHJvY2VzcyB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAqIGl0IE1VU1QgcmV0dXJuIGEgbmF0aXZlIHByb21pc2UuXHJcbiAqIHRoZSBvcmRlciBudW1iZXIgaXMgeW91ciBpZCB0byBsb2NhdGUgZWxlbWVudHMgKGRvbSBvciB3aGF0ZXZlcikgYmFzZWQgb24gdGhlIHNwZWNpZmljIGl0ZW0gcHJvY2Vzc2luZ1xyXG4gKlxyXG4gKiBAY2FsbGJhY2sgaXRlbVByZVByb2Nlc3NpbmdcclxuICogQHBhcmFtIHsqfSBpdGVtRGF0YVxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgbXVsdGlwbGUgaXRlbXMgdmlhIFJFU1QsIFxyXG4gKiBpdGVtcyBhcnJheSBzaG91bGQgY29udGFpbiBvYmplY3Qgd2l0aCBhIGtleSBvZiBjb2x1bW4gbmFtZSBhbmQgcHJvcGVydHkgb2YgdmFsdWUgeW91IHdhbnQgc3RvcmVkIGluIHRoYXQgY29sdW1uXHJcbiAqIGV4LiB7XHJcbiAqIFx0VGl0bGU6IFwic29tZXRoaW5nXCJcclxuICogfVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtvYmplY3RbXX0gcHJvcHMuaXRlbXMgLSBpdGVtcyB0byBjcmVhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdE5hbWVdIC0gc2VydmVyIG5hbWUgZm9yIHRoZSBsaXN0XHJcbiAqIEBwYXJhbSB7aXRlbVByZVByb2Nlc3Npbmd9IFtwcm9wcy5pdGVtQ3JlYXRlZENCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQgdG8gYmUgcHJvY2Vzc2VkXHJcbiAqIEBwYXJhbSB7aXRlbUNvbXBsZXRlZFByb2Nlc3Npbmd9IFtwcm9wcy5pdGVtQ29tcGxldGVkQ0JdIC0gdGhpcyBjYWxsIGJhY2sgaXMgY2FsbGVkIHdoZW4gaXRlbSBpcyBjb21wbGV0ZWRcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ldGVyZWRDcmVhdGVJdGVtcyhwcm9wcykge1xyXG5cdFxyXG5cdGxldCByZXF1ZXN0UHJvID0gbmV3IG1ldGVyZWRBamF4KCk7XHJcblx0cmVxdWVzdFByby5fY2hlY2tNZXRlcmVkRGF0YVR5cGUocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gcmVxdWVzdFByby5fZ2V0TWV0ZXJlZExpc3ROYW1lKHByb3BzKVxyXG5cdC50aGVuKGVudGl0eVR5cGUgPT4ge1xyXG5cdFx0aWYgKGVudGl0eVR5cGUgIT09IGFqYXhIZWxwZXJzLmxpc3ROYW1lUHJlc2VudCkge1xyXG5cdFx0XHRwcm9wcy5saXN0TmFtZSA9IGVudGl0eVR5cGU7XHJcblx0XHR9XHJcblxyXG5cdFx0XHJcblx0XHRsZXQgcHJlcGVkSXRlbXMgPSBwcm9wcy5pdGVtcy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdGxldCBvYmogPSB7XHJcblx0XHRcdFx0dXJsOiBwcm9wcy51cmwsXHJcblx0XHRcdFx0bGlzdE5hbWU6IGVudGl0eVR5cGUsXHJcblx0XHRcdFx0aW5mb1RvU2VydmVyOiBpdGVtXHJcblx0XHRcdH07XHJcblx0XHRcdGlmIChwcm9wcy5saXN0R1VJRCkge1xyXG5cdFx0XHRcdG9iai5saXN0R1VJRCA9IHByb3BzLmxpc3RHVUlEO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG9iai5saXN0VGl0bGUgPSBwcm9wcy5saXN0VGl0bGU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG9iajtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHJlcXVlc3RQcm8uc2V0UHJlUHJvY2Vzc2luZ0NCKGZ1bmN0aW9uKGl0ZW1EYXRhLCBpbmRleCkge1xyXG5cdFx0XHRpZiAocHJvcHMuaXRlbUNyZWF0ZWRDQikge1xyXG5cdFx0XHRcdHByb3BzLml0ZW1DcmVhdGVkQ0IoaW5kZXgsIGl0ZW1EYXRhKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY3JlYXRlSXRlbShpdGVtRGF0YSk7XHJcblx0XHR9KTtcclxuXHRcdHJlcXVlc3RQcm8uc2V0SXRlbVByb2Nlc3NlZENCKHByb3BzLml0ZW1Db21wbGV0ZWRDQik7XHJcblx0XHRyZXR1cm4gcmVxdWVzdFByby5pbml0KHByZXBlZEl0ZW1zKTtcclxuXHJcblx0fSk7XHJcblx0XHJcbn1cclxuLyoqXHJcbiAqIFVwZGF0ZXMgbXVsdGlwbGUgaXRlbXMgdmlhIFJFU1QsIFxyXG4gKiBpdGVtcyBhcnJheSBzaG91bGQgY29udGFpbiBvYmplY3Qgd2l0aCAyIHByb3BlcnRpZXMgaXRlbUlkIGFuZCB1cGRhdGVJbmZvIGFuZCAxIG9wdGlvbmFsIHByb3BlcnR5IGV0YWdcclxuICogZXguIHtcclxuICogXHRpdGVtSWQ6IDMsXHJcbiAqIFx0ZXRhZzogXCJcIjNcIlwiXHJcbiAqIFx0dXBkYXRlSW5mbzoge1xyXG4gKiBcdFx0VGl0bGU6IFwiZXhhbXBsZSBzdHJpbmdcIlxyXG4gKiBcdH1cclxuICogfVxyXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcclxuICogQHBhcmFtIHtvYmplY3RbXX0gcHJvcHMuaXRlbXMgLSBpdGVtcyB0byB1cGRhdGVcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5vcmlnaW5dIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMudXJsIC0gc2l0ZSByZWxhdGl2ZSB1cmxcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmxpc3RHVUlEIC0gdXNlIGVpdGhlciBsaXN0R1VJRCBvciBsaXN0VGl0bGUgbm90IGJvdGhcclxuICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5saXN0VGl0bGVdXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdE5hbWVdIC0gc2VydmVyIG5hbWUgZm9yIHRoZSBsaXN0XHJcbiAqIEBwYXJhbSB7aXRlbVByZVByb2Nlc3Npbmd9IFtwcm9wcy5pdGVtQ3JlYXRlZENCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIGFuIGl0ZW0gaXMgYWRkZWQgdG8gYmUgcHJvY2Vzc2VkXHJcbiAqIEBwYXJhbSB7aXRlbUNvbXBsZXRlZFByb2Nlc3Npbmd9IFtwcm9wcy5pdGVtQ29tcGxldGVkQ0JdIC0gdGhpcyBjYWxsIGJhY2sgaXMgY2FsbGVkIHdoZW4gaXRlbSBpcyBjb21wbGV0ZWRcclxuICogQHJldHVybnMge3Byb21pc2U8b2JqZWN0W10+fVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ldGVyZWRVcGRhdGVJdGVtcyhwcm9wcykge1xyXG5cdGxldCByZXF1ZXN0UHJvID0gbmV3IG1ldGVyZWRBamF4KCk7XHJcblx0cmVxdWVzdFByby5fY2hlY2tNZXRlcmVkRGF0YVR5cGUocHJvcHMpO1xyXG5cclxuXHRyZXR1cm4gcmVxdWVzdFByby5fZ2V0TWV0ZXJlZExpc3ROYW1lKHByb3BzKVxyXG5cdC50aGVuKGVudGl0eVR5cGUgPT4ge1xyXG5cdFx0aWYgKGVudGl0eVR5cGUgIT09IGFqYXhIZWxwZXJzLmxpc3ROYW1lUHJlc2VudCkge1xyXG5cdFx0XHRwcm9wcy5saXN0TmFtZSA9IGVudGl0eVR5cGU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBwcmVwZWRJdGVtcyA9IHByb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcclxuXHRcdFx0bGV0IG9iaiA9IHtcclxuXHRcdFx0XHR1cmw6IHByb3BzLnVybCxcclxuXHRcdFx0XHRsaXN0TmFtZTogZW50aXR5VHlwZSxcclxuXHRcdFx0XHRpbmZvVG9TZXJ2ZXI6IGl0ZW0udXBkYXRlSW5mbyxcclxuXHRcdFx0XHRpdGVtSWQ6IGl0ZW0uaXRlbUlkLFxyXG5cdFx0XHRcdGV0YWcgOml0ZW0uZXRhZ1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRpZiAocHJvcHMubGlzdEdVSUQpIHtcclxuXHRcdFx0XHRvYmoubGlzdEdVSUQgPSBwcm9wcy5saXN0R1VJRDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvYmoubGlzdFRpdGxlID0gcHJvcHMubGlzdFRpdGxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9KTtcclxuXHJcblx0XHRyZXF1ZXN0UHJvLnNldFByZVByb2Nlc3NpbmdDQihmdW5jdGlvbihpdGVtRGF0YSwgaW5kZXgpIHtcclxuXHRcdFx0aWYgKHByb3BzLml0ZW1DcmVhdGVkQ0IpIHtcclxuXHRcdFx0XHRwcm9wcy5pdGVtQ3JlYXRlZENCKGluZGV4LCBpdGVtRGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHVwZGF0ZUl0ZW0oaXRlbURhdGEpO1xyXG5cdFx0fSk7XHJcblx0XHRyZXF1ZXN0UHJvLnNldEl0ZW1Qcm9jZXNzZWRDQihwcm9wcy5pdGVtQ29tcGxldGVkQ0IpO1xyXG5cdFx0cmV0dXJuIHJlcXVlc3RQcm8uaW5pdChwcmVwZWRJdGVtcyk7XHJcblx0XHJcblx0fSk7XHJcbn1cclxuLyoqXHJcbiAqIFJlY3ljbGVzIG11bHRpcGxlIGl0ZW1zIHZpYSBSRVNUXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xyXG4gKiBAcGFyYW0ge251bWJlcltdfSBwcm9wcy5pdGVtcyAtIGlkcyBvZiBpdGVtcyB0byByZWN5Y2xlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMub3JpZ2luXSBcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnVybCAtIHNpdGUgcmVsYXRpdmUgdXJsXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wcy5saXN0R1VJRCAtIHVzZSBlaXRoZXIgbGlzdEdVSUQgb3IgbGlzdFRpdGxlIG5vdCBib3RoXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubGlzdFRpdGxlXVxyXG4gKiBAcGFyYW0ge2l0ZW1QcmVQcm9jZXNzaW5nfSBbcHJvcHMuaXRlbUNyZWF0ZWRDQl0gLSB0aGlzIGNhbGwgYmFjayBpcyBjYWxsZWQgd2hlbiBhbiBpdGVtIGlzIGFkZGVkIHRvIGJlIHByb2Nlc3NlZFxyXG4gKiBAcGFyYW0ge2l0ZW1Db21wbGV0ZWRQcm9jZXNzaW5nfSBbcHJvcHMuaXRlbUNvbXBsZXRlZENCXSAtIHRoaXMgY2FsbCBiYWNrIGlzIGNhbGxlZCB3aGVuIGl0ZW0gaXMgY29tcGxldGVkXHJcbiAqIEByZXR1cm5zIHtwcm9taXNlPG9iamVjdFtdPn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXRlcmVkUmVjeWNsZUl0ZW1zKHByb3BzKSB7XHJcblxyXG5cdGxldCByZXF1ZXN0UHJvID0gbmV3IG1ldGVyZWRBamF4KCk7XHJcblx0cmVxdWVzdFByby5fY2hlY2tNZXRlcmVkRGF0YVR5cGUocHJvcHMpO1xyXG5cdFxyXG5cdGxldCBwcmVwZWRJdGVtcyA9IHByb3BzLml0ZW1zLm1hcChpdGVtID0+IHtcclxuXHRcdGxldCBvYmogPSB7XHJcblx0XHRcdHVybDogcHJvcHMudXJsLFxyXG5cdFx0XHRpdGVtSWQ6IGl0ZW1cclxuXHRcdH07XHJcblx0XHRpZiAocHJvcHMubGlzdEdVSUQpIHtcclxuXHRcdFx0b2JqLmxpc3RHVUlEID0gcHJvcHMubGlzdEdVSUQ7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvYmoubGlzdFRpdGxlID0gcHJvcHMubGlzdFRpdGxlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9KTtcclxuXHJcblx0cmVxdWVzdFByby5zZXRQcmVQcm9jZXNzaW5nQ0IoZnVuY3Rpb24oaXRlbURhdGEsIGluZGV4KSB7XHJcblx0XHRpZiAocHJvcHMuaXRlbUNyZWF0ZWRDQikge1xyXG5cdFx0XHRwcm9wcy5pdGVtQ3JlYXRlZENCKGluZGV4LCBpdGVtRGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVjeWNsZUl0ZW0oaXRlbURhdGEpO1xyXG5cdH0pO1xyXG5cdHJlcXVlc3RQcm8uc2V0SXRlbVByb2Nlc3NlZENCKHByb3BzLml0ZW1Db21wbGV0ZWRDQik7XHJcblx0cmV0dXJuIHJlcXVlc3RQcm8uaW5pdChwcmVwZWRJdGVtcyk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGlicmFyeS5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxmZXJvc3NAZmVyb3NzLm9yZz4gPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLCB7IG1ldGhvZDogJ2dldCcgfSwgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICAvLyBOb3RlOiBzdGF0dXMgaXMgbm90IGV4cG9zZWQgYnkgWERvbWFpblJlcXVlc3RcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J1aWxkVVJMLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgfSxcblxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgfVxuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9KSgpXG4pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwiLypcclxuZVxyXG4qL1xyXG5pbXBvcnQge2dldFVSTE9yaWdpbn0gZnJvbSAncGQtc3B1dGlsJztcclxuZXhwb3J0IGNvbnN0IG1pbmltYWxNZXRhID0gXCJhcHBsaWNhdGlvbi9qc29uO29kYXRhPW1pbmltYWxtZXRhZGF0YVwiO1xyXG5leHBvcnQgY29uc3QgdmVyYm9zZU1ldGEgPSBcImFwcGxpY2F0aW9uL2pzb247b2RhdGE9dmVyYm9zZVwiO1xyXG5leHBvcnQgY29uc3QgbGlzdE5hbWVQcmVzZW50ID0gXCJsaXN0TmFtZV9wcmVzZW50XCI7XHJcbmV4cG9ydCBjb25zdCBtZXRlcmVkSXRlbXNJbmNvcnJlY3REYXRhVHlwZSA9IFwiQW4gYXJyYXkgbXVzdCBiZSBwYXNzZWQgdG8gdXRpbGl6ZSB0aGUgbWV0ZXJlZCBmdW5jdGlvbnNcIjtcclxuZXhwb3J0IGNvbnN0IGxpc3RJdGVtRW50aXR5UGF0dGVybiA9IC8oU1BcXC5EYXRhXFwuKS4rKExpc3RJdGVtKS9pO1xyXG5leHBvcnQgY29uc3QgY3JlYXRlbGlzdGl0ZW10eXBlID0gZnVuY3Rpb24obGlzdE5hbWUpIHtcclxuXHRyZXR1cm4gJ1NQLkRhdGEuJyArIFxyXG5cdFx0bGlzdE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBcclxuXHRcdGxpc3ROYW1lLnNsaWNlKDEpICsgXHJcblx0XHQnTGlzdEl0ZW0nO1xyXG59O1xyXG5leHBvcnQgY29uc3QgZ3VpZEhleENvZGVzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5JywgJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJ107XHJcbmV4cG9ydCBjb25zdCBjcmVhdGVHVUlEID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIHJlc3VsdCA9ICcnO1xyXG5cclxuXHRmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgMzI7IGluZGV4KyspIHtcclxuXHRcdHZhciB2YWx1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KTtcclxuXHJcblx0XHRzd2l0Y2ggKGluZGV4KSB7XHJcblx0XHRjYXNlIDg6XHJcblx0XHRcdHJlc3VsdCArPSAnLSc7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSAxMjpcclxuXHRcdFx0dmFsdWUgPSA0O1xyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgMTY6XHJcblx0XHRcdHZhbHVlID0gdmFsdWUgJiAzIHwgODtcclxuXHRcdFx0cmVzdWx0ICs9ICctJztcclxuXHRcdFx0YnJlYWs7XHJcblx0XHRjYXNlIDIwOlxyXG5cdFx0XHRyZXN1bHQgKz0gJy0nO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJlc3VsdCArPSBndWlkSGV4Q29kZXNbdmFsdWVdO1xyXG5cdH1cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5leHBvcnQgY29uc3QgY2hlY2tVcmxPcmlnaW4gPSBmdW5jdGlvbihwcm9wcykge1xyXG5cclxuXHRwcm9wcy5jb25maWd1cmVkVXJsID0gcHJvcHMub3JpZ2luID8gcHJvcHMub3JpZ2luIDogZ2V0VVJMT3JpZ2luKCk7XHJcblxyXG5cdGlmKHByb3BzLnVybCkge1xyXG5cdFx0cHJvcHMuY29uZmlndXJlZFVybCArPSBwcm9wcy51cmw7XHJcblx0fVxyXG5cclxuXHRpZihwcm9wcy5lbmRQb2ludCkge1xyXG5cdFx0cHJvcHMuY29uZmlndXJlZFVybCArPSBgLyR7cHJvcHMuZW5kUG9pbnR9YDtcclxuXHR9XHJcblx0cmV0dXJuIHByb3BzO1xyXG5cclxuXHQvL2ZlbGwgdGhyb3VnaCBzbyB0aGUgaW5jb3JyZWN0IGRhdGF0eXBlIHdhcyBwYXNzZWQgdG8gZnVuY3Rpb24sIGVycm9yXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsaXN0VXJsQ29uZmlndXJlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcblx0aWYgKCFwcm9wcy51cmwgfHwgcHJvcHMubGlzdFVybCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblxyXG5cdGNoZWNrVXJsT3JpZ2luKHByb3BzKTtcclxuXHJcblx0aWYgKHByb3BzLmxpc3RHVUlEKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsID0gcHJvcHMuY29uZmlndXJlZFVybCArPSBcIi9saXN0cyhndWlkJ1wiKyBwcm9wcy5saXN0R1VJRCArXCInKVwiO1xyXG5cdH0gZWxzZSBpZiAocHJvcHMubGlzdFRpdGxlKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsID0gcHJvcHMuY29uZmlndXJlZFVybCArPSBcIi9saXN0cy9nZXRieXRpdGxlKCdcIisgcHJvcHMubGlzdFRpdGxlICtcIicpXCI7XHJcblx0fVxyXG5cdHJldHVybiBwcm9wcztcclxufTtcclxuZXhwb3J0IGNvbnN0IGxpc3RJdGVtVXJsQ29uZmlndXJlID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHQvL2ZvciBjcmVhdGUsIHVwZGF0ZSwgZGVsZXRlXHJcblx0dmFyIGl0ZW0gPSBwcm9wcy5pdGVtSWQgfHwgJyc7XHJcblxyXG5cdGlmIChwcm9wcy5saXN0SXRlbVVybCkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bGlzdFVybENvbmZpZ3VyZShwcm9wcyk7XHJcblxyXG5cdHByb3BzLmxpc3RJdGVtVXJsID0gcHJvcHMubGlzdFVybCArPSBcIi9pdGVtcyhcIisgaXRlbSArXCIpXCI7XHJcblx0cmV0dXJuIHByb3BzO1xyXG59O1xyXG5leHBvcnQgY29uc3QgcGFyc2VCYXNlUGVybWlzc2lvbnMgPSBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdHZhciBwZXJtaXNzaW9ucyA9IG5ldyBTUC5CYXNlUGVybWlzc2lvbnMoKTtcclxuXHRwZXJtaXNzaW9ucy5pbml0UHJvcGVydGllc0Zyb21Kc29uKHZhbHVlKTtcclxuXHR2YXIgcGVybUxldmVscyA9IFtdO1xyXG5cdGZvcih2YXIgcGVybUxldmVsTmFtZSBpbiBTUC5QZXJtaXNzaW9uS2luZC5wcm90b3R5cGUpIHtcclxuXHRcdGlmIChTUC5QZXJtaXNzaW9uS2luZC5oYXNPd25Qcm9wZXJ0eShwZXJtTGV2ZWxOYW1lKSkge1xyXG5cdFx0XHR2YXIgcGVybUxldmVsID0gU1AuUGVybWlzc2lvbktpbmQucGFyc2UocGVybUxldmVsTmFtZSk7XHJcblx0XHRcdGlmKHBlcm1pc3Npb25zLmhhcyhwZXJtTGV2ZWwpKXtcclxuXHRcdFx0XHRcdHBlcm1MZXZlbHMucHVzaChwZXJtTGV2ZWxOYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fSAgICAgXHJcblx0fVxyXG5cdHJldHVybiBwZXJtTGV2ZWxzOyAgIFxyXG59O1xyXG5leHBvcnQgY29uc3QgY3JlYXRlR2V0QWxsVXJsID0gZnVuY3Rpb24ocHJvcHMpIHtcclxuXHJcblx0aWYocHJvcHMubGlzdFVybCkge1xyXG5cdFx0Ly9hbHJlYWR5IHNldHVwLCBnZXQgb3V0XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGlmKCFwcm9wcy5lbmRQb2ludCkge1xyXG5cdFx0cHJvcHMuZW5kUG9pbnQgPSBcIl9hcGkvd2ViXCI7XHJcblx0fVxyXG5cdGxpc3RVcmxDb25maWd1cmUocHJvcHMpO1xyXG5cclxuXHRwcm9wcy5saXN0VXJsICs9IFwiL2l0ZW1zP1wiO1xyXG5cclxuXHRpZihwcm9wcy5zZWxlY3QpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRzZWxlY3Q9JHtwcm9wcy5zZWxlY3R9JmA7XHJcblx0fVxyXG5cdGlmKHByb3BzLnRvcCkge1xyXG5cdFx0cHJvcHMubGlzdFVybCArPSBgJHRvcD0ke3Byb3BzLnRvcH0mYDtcclxuXHR9XHJcblx0aWYocHJvcHMuZXhwYW5kKSB7XHJcblx0XHRwcm9wcy5saXN0VXJsICs9IGAkZXhwYW5kPSR7cHJvcHMuZXhwYW5kfSZgO1xyXG5cdH1cclxuXHRpZihwcm9wcy5maWx0ZXIpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRmaWx0ZXI9JHtwcm9wcy5maWx0ZXJ9JmA7XHJcblx0fVxyXG5cdGlmKHByb3BzLm9yZGVyQnkpIHtcclxuXHRcdHByb3BzLmxpc3RVcmwgKz0gYCRvcmRlcmJ5PSR7cHJvcHMub3JkZXJCeX0mYDtcclxuXHR9XHJcblxyXG5cdGlmKC9cXCQkLy50ZXN0KHByb3BzLmxpc3RVcmwpKSB7XHJcblx0XHQvL2lmICQgaXMgdGhlIGxhc3QgY2hhcmFjdGVyIHRoZW4gZ2V0IHJpZCBvZiBpdFxyXG5cdFx0cHJvcHMubGlzdFVybC5zbGljZSgwLC0xKTtcclxuXHR9XHJcblxyXG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9oZWxwZXJzLmpzIiwiaW1wb3J0ICogYXMgc3RhdGljcyBmcm9tICcuL2NvbnN0YW50cyc7XHJcblxyXG4vKipcclxuICogbWV0ZXJlZFJlcXVlc3RQcm9jZXNzb3IgaXMgYSBjbGFzcyB0aGF0IGFsbG93cyB5b3UgdG8gcGFzcyBpbiBtdWx0aXBsZSBpdGVtcyB0byBwcm9jZXNzXHJcbiAqIGFuZCBjb250cm9scyBob3cgbWFueSByZXF1ZXN0cyB3aWxsIGJlIHNlbnQgdG8gdGhlIHNlcnZlciBhdCBhIHRpbWVcclxuICogd2hlbiBhbGwgaXRlbXMgYXJlIGZpbmlzaGVkIHByb2Nlc3NpbmcgdGhleSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgLnRoZW4gb2YgdGhlIGluaXQuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgbWV0ZXJlZFJlcXVlc3RQcm9jZXNzb3Ige1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVG9Qcm9jZXNzID0gMztcclxuICAgIH1cclxuICAgIF90b3RhbFByb2Nlc3NpbmdJdGVtcygpIHtcclxuICAgICAgICBsZXQgdG90YWxQcm9jZXNzaW5nID0gMDtcclxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdG90YWxQcm9jZXNzaW5nKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWxQcm9jZXNzaW5nO1xyXG4gICAgfVxyXG4gICAgX2ZpbnNoUHJvY2Vzc29yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9tYWluUmVzb2x2ZSh0aGlzLl9wcm9jZXNzaW5nSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgX3Byb21pc2VEb25lSGVscGVyKG9iaiwgZGF0YSwgc3RhdHVzKSB7XHJcbiAgICAgICAgb2JqLnJlc3BvbnNlID0gZGF0YTtcclxuICAgICAgICBvYmouc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIG9iai5jb21wbGV0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fcG9zdFByb2Nlc3NpbmdDQikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3N0UHJvY2Vzc2luZ0NCKG9iai5wbGFjZSwgb2JqLnN0YXR1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgX2FkZFRvUHJvY2Vzc29yKGluZGV4LCBwcm9taXNlKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgcGxhY2U6IGluZGV4LFxyXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdwcm9jZXNzaW5nJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByb21pc2VcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlRG9uZUhlbHBlcihvYmosIGRhdGEsIHN0YXRpY3MuY29tcGxldGVkU3VjY2Vzcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2VEb25lSGVscGVyKG9iaiwgZXJyb3IsIHN0YXRpY3MuY29tcGxldGVkRmFpbCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Bvc3RQcm9jZXNzaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ0l0ZW1zLnB1c2gob2JqKTtcclxuICAgIH1cclxuICAgIF9wcmVQcm9jZXNzaW5nKCkge1xyXG4gICAgICAgIC8vdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByZWN1cnNpdmUsIGFuZCBrZWVwIHRvdGFsVG9Qcm9jZXNzIGluIHRoZSBhcnJheVxyXG4gICAgICAgIC8vY2hlY2sgbGVuZ3RoIG9mIHByb2Nlc3NpbmcgaXRlbXMgaWYgdG90YWwgdG8gcHJvY2VzcyB0aGVuIHN0b3BcclxuICAgICAgICBsZXQgdG90YWxQcm9jZXNzaW5nID0gdGhpcy5fdG90YWxQcm9jZXNzaW5nSXRlbXMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkZWRJdGVtcy5sZW5ndGggPT09IDAgfHwgdG90YWxQcm9jZXNzaW5nID09PSB0aGlzLl90b3RhbFRvUHJvY2Vzcykge1xyXG4gICAgICAgICAgICAvL2l0ZW1zIGFyZSBub3QgZG9uZSBwcm9jZXNzaW5nIGJ1dCB0aGVyZSBpcyBubyBtb3JlIHRvIGFkZCBvclxyXG4gICAgICAgICAgICAvL3Byb2Nlc3NpbmcgYXJyYXkgaGFzIGNvbXBhY2l0eSBzbyBqdXN0IGdldCBvdXRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2lmIG5vdCBjYWxsIGFkZFRvUHJvY2Vzc2luZ0NhbGxCYWNrLCBzdG9yZSBpbiB2YXIgYW5kIHRhY2sgb24gYSB0aGVuXHJcbiAgICAgICAgbGV0IG5leHRBdmFpbGFibGVJbmRleCA9IHRoaXMuX3Byb2Nlc3NpbmdJdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgIG5leHRJdGVtVG9Qcm9jZXNzID0gdGhpcy5hZGRlZEl0ZW1zLnNoaWZ0KCksXHJcbiAgICAgICAgICAgIGNiUHJvY2Vzc2VkID0gdGhpcy5fdG9Qcm9jZXNzaW5nQ0IobmV4dEl0ZW1Ub1Byb2Nlc3MsIG5leHRBdmFpbGFibGVJbmRleCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCEoY2JQcm9jZXNzZWQgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xyXG4gICAgICAgICAgICAvL2Z1bmN0aW9uIHBhc3NlZCBpbiBieSB1c2VyIGlzIG5vdCBzZXR1cCBjb3JyZWN0bHksIGl0IG11c3QgcmV0dXJuIGEgcHJvbWlzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RhdGljcy5pbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jcmVhdGUgb2JqZWN0IGFuZCBhZGQgdG8gcHJvY2Vzc2luZyBhcnJheVxyXG4gICAgICAgIHRoaXMuX2FkZFRvUHJvY2Vzc29yKG5leHRBdmFpbGFibGVJbmRleCwgY2JQcm9jZXNzZWQpO1xyXG4gICAgICAgIHRoaXMuX3ByZVByb2Nlc3NpbmcoKTsgICAgXHJcbiAgICB9XHJcbiAgICBfcG9zdFByb2Nlc3NpbmcoKSB7XHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGlzIGlzIGxhc3QgY2FsbCBpZiB5ZXMgdGhlbiBmaW5pc2ggcHJvY2Vzc1xyXG4gICAgICAgIGxldCB0b3RhbFByb2Nlc3NpbmcgPSB0aGlzLl90b3RhbFByb2Nlc3NpbmdJdGVtcygpO1xyXG4gICAgICAgIGlmICh0b3RhbFByb2Nlc3NpbmcgPT09IDAgJiYgdGhpcy5hZGRlZEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvL3Byb2Nlc3MgZmluaXNoZWQgY2FsbCBmaW5pc2hpbmcgZnVuY3Rpb24gYW5kIGdldCBvdXRcclxuICAgICAgICAgICAgdGhpcy5fZmluc2hQcm9jZXNzb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2Vsc2UgY2FsbCBwcmVQcm9jZXNzaW5nXHJcbiAgICAgICAgdGhpcy5fcHJlUHJvY2Vzc2luZygpO1xyXG4gICAgfVxyXG4gICAgX3RvUHJvY2Vzc2luZ0NCKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihzdGF0aWNzLm5vUHJlUHJvY3Nzb3JDQik7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiBhbiBpdGVtIGlzIGZpbmlzaGVkIHByb2Nlc3NpbmdcclxuICAgICAqIEBwYXJhbSB7aXRlbUNvbXBsZXRlZH0gY2IgXHJcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgc2V0SXRlbVByb2Nlc3NlZENCKGNiKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHByb2Nlc3NpbmdDb21wbGV0ZWRDYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgb3JkZXIgbnVtYmVyIGFuZCB0aGUgcHJvY2VzcyBzdGF0dXMgKHN1Y2Nlc3Mgb3IgZmFpbCkgdG8gdHJpZ2dlciBhbnkgY29tcGxldGVkIHNpZGUgZWZmZWN0c1xyXG4gICAgICAgICAqIFRoZSBvcmRlciBudW1iZXIgaXMgeW91ciBpZCB0byBsb2NhdGUgZWxlbWVudHMgKGRvbSBvciB3aGF0ZXZlcikgYmFzZWQgb24gdGhlIHNwZWNpZmljIGl0ZW0gcHJvY2Vzc2luZ1xyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQGNhbGxiYWNrIGl0ZW1Db21wbGV0ZWRcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcG9zdFByb2Nlc3NpbmdDQiA9IGNiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIHRvIGFkZCBpdGVtcyB0byBiZSBwcm9jZXNzZWRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtwcmVQcm9jZXNzb3J9IGNiXHJcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX0gXHJcbiAgICAgKi9cclxuICAgIHNldFByZVByb2Nlc3NpbmdDQihjYikge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBpbmRleCBhbmQgaXRlbURhdGEgdG8gcHJvY2VzcyB3aWxsIGJlIHBhc3NlZCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgICAgICogaXQgTVVTVCByZXR1cm4gYSBuYXRpdmUgcHJvbWlzZS5cclxuICAgICAgICAgKiB0aGUgb3JkZXIgbnVtYmVyIGlzIHlvdXIgaWQgdG8gbG9jYXRlIGVsZW1lbnRzIChkb20gb3Igd2hhdGV2ZXIpIGJhc2VkIG9uIHRoZSBzcGVjaWZpYyBpdGVtIHByb2Nlc3NpbmdcclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBjYWxsYmFjayBwcmVQcm9jZXNzb3JcclxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXhcclxuICAgICAgICAgKiBAcGFyYW0geyp9IGl0ZW1EYXRhXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fdG9Qcm9jZXNzaW5nQ0IgPSBjYjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQWxsb3dzIHlvdSB0byBjaGFuZ2UgdGhlIHRvdGFsIGFtb3VudCBvZiBzaW11bHRhbmVvdXMgaXRlbXMgdG8gYmUgcHJvY2VzZWQuIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VDb25jdXJyZW50UHJvY2Vzc2luZyhjb3VudCkge1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVG9Qcm9jZXNzID0gY291bnQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN0YXJ0cyB0aGUgcHJvY2Vzc2luZyBwcm9jZXNzLlxyXG4gICAgICogSXRlbXNUb1Byb2Nlc3MgaXMgYW4gYXJyYXkgb2YgYW55dGhpbmcgeW91IHdhbnQsIGJ1dCBlYWNoIGl0ZW0gaW4gdGhpcyBhcnJheVxyXG4gICAgICogUmV0dXJucyBhIG5hdGl2ZSBwcm9taXNlIHRvIC50aGVuIG9mZiBvZiwgbm8gbmVlZCB0byBjYXRjaCwgYWxsIGl0ZW0gKHN1Y2Nlc3Mgb3IgZmFpbCkgd2lsbCBiZSBwcm9jZXNzZWQgYW5kIHBhc3NlZCB0byB0aGUgLnRoZW5cclxuICAgICAqIHRoZSBpdGVtcyBwYXNzZWQgdG8gdGhlIC50aGVuIHdpbGwgYmUgYW5kIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZVxyXG4gICAgICogIHtcclxuICAgICAqICAgICAgcGxhY2U6IG51bWJlcixcclxuICAgICAqICAgICAgY29tcGxldGVkOiBib29sZWFuLFxyXG4gICAgICogICAgICBzdGF0dXM6IHN0cmluZyAoc3VjY2VzcyBvciBmYWlsKVxyXG4gICAgICogICAgICByZXNwb25zZTogdGhlIGRhdGEgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAgICAgKiAgfVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gaXRlbXNUb1Byb2Nlc3MgXHJcbiAgICAgKiBAcmV0dXJucyB7cHJvbWlzZX1cclxuICAgICAqL1xyXG4gICAgaW5pdChpdGVtc1RvUHJvY2Vzcykge1xyXG4gICAgICAgIGlmICghKEFycmF5LmlzQXJyYXkoaXRlbXNUb1Byb2Nlc3MpKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RhdGljcy5pbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRlZEl0ZW1zID0gaXRlbXNUb1Byb2Nlc3M7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX21haW5SZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5fbWFpblJlamVjdCA9IHJlamVjdDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ByZVByb2Nlc3NpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy9wZC1tZXRlcmVkcmVxdWVzdHByb2Nlc3Nvci9zcmMvbGlicmFyeS5qcyIsImV4cG9ydCBjb25zdCBpbmNvcnJlY3RBZGRUb1Byb2Nlc3NpbmdSZXR1cm5UeXBlID0gXCJUaGUgYWRkVG9Qcm9jZXNzaW5nQ2FsbGJhY2sgeW91IHBhc3NlZCBpcyBub3QgcmV0dXJuaW5nIHRoZSBjb3JyZWN0IGRhdGEgdHlwZS4gVGhlIGZ1bmN0aW9uIG11c3QgcmV0dXJuIGEgbmF0aXZlIFByb21pc2VcIjtcclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZFN1Y2Nlc3MgPSBcInN1Y2Nlc3NcIjtcclxuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZEZhaWwgPSBcImZhaWxcIjtcclxuZXhwb3J0IGNvbnN0IG5vUHJlUHJvY3Nzb3JDQiA9IFwiQSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIHByb2Nlc3MgdGhlIGl0ZW1zIGFuZCBzaG91bGQgcmV0dXJuIGEgbmF0aXZlIHByb21pc2UuXCI7XHJcbmV4cG9ydCBjb25zdCBpbmNvcnJlY3REYXRhVHlwZUZvckl0ZW1zID0gXCJUaGUgZGF0YSB0eXBlIHBhc3NlZCB0byBpbml0IG11c3QgYmUgYW4gYXJyYXkuXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3BkLW1ldGVyZWRyZXF1ZXN0cHJvY2Vzc29yL3NyYy9jb25zdGFudHMuanMiXSwic291cmNlUm9vdCI6IiJ9