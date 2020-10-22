module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
exports.default = {
  methods: {
    selectComponent: function selectComponent(selector) {},
    selectAllComponents: function selectAllComponents(selctor) {},
    setStyle: function setStyle(styleDict) {
      var onekit_styles = '';
      for (var _iterator = Object.keys(styleDict), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var cssName = _ref;

        onekit_styles += cssName + ':' + styleDict[cssName] + ';';
      }
      this.setData({ onekit_styles: onekit_styles });
    },
    addClass: function addClass(className) {},
    removeClass: function removeClass(className) {},
    hasClass: function hasClass(className) {},
    getDataset: function getDataset() {},
    callMethod: function callMethod(funcName, args) {},
    requestAnimationFrame: function requestAnimationFrame(callback) {},
    getState: function getState() {},
    getComputedStyle: function getComputedStyle(cssNames) {}
  }
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  props: {
    onekitClass: '',
    onekitStyle: '',
    onekitId: ''
  }
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _TheKit = __webpack_require__(3);

var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [_onekit_behavior2.default, _wxs_behavior2.default],
  data: {},
  props: {
    src: '',
    mode: 'scaleToFill',
    webp: false,
    lazyLoad: false
  },
  didMount: function didMount() {
    var pages = getCurrentPages();
    var currentUrl = pages[pages.length - 1].route;
    var alipay_src = '/' + (0, _TheKit.fixurl)(currentUrl, this.props.src);
    this.setData({ alipay_src: alipay_src });
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    image_error: function image_error(e) {
      if (this.props.onError) {
        this.props.onError(e);
      }
    },
    image_load: function image_load(e) {
      if (this.props.onLoad) {
        this.props.onLoad(e);
      }
    }
  }
}); /* eslint-disable camelcase */

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var thekit = {};
thekit.firstUpper = function (str) {
  return str.substr(0, 1).toUpperCase() + str.substr(1);
};
thekit.trim = function (str) {
  return str.replace(/^\s+|\s+$/gm, '');
};
thekit.color = function (string) {
  var str = string;
  if (!str) {
    return null;
  }
  switch (str) {
    case 'transparent':
      return '#00000000';
    case 'black':
      return '#000000FF';
    default:
      break;
  }
  if (str.indexOf('rgb') < 0) {
    if (str.length === 7) {
      str += 'FF';
    }
    return str;
  }
  str = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
  var array = str.split(',');
  if (array.length === 3) {
    array.push(1);
  }
  var color = thekit.color.rgba2str(array[0], array[1], array[2], array[3] * 255 + '');
  return color;
};
thekit.rgba2str = function (r, g, b, a) {
  function componentToHex(c) {
    c = thekit.trim(c);
    var hex = parseInt(c, 10).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a);
};
thekit.str2array = function (str) {
  return [parseInt(str.substr(1, 2), 16), parseInt(str.substr(3, 2), 16), parseInt(str.substr(5, 2), 16), parseInt(str.substr(7, 2), 16)];
};
thekit.array2str = function (array) {
  function f(v) {
    var s = v.toString(16);
    if (s.length === 1) {
      s = '0' + s;
    }
    return s;
  }
  var str = '#' + f(array[0]) + f(array[1]) + f(array[2]) + f(array[3]);
  return str;
};
thekit.rel2abs = function (currentUrl, url) {
  if (url.startsWith('/')) {
    return url.substring(1);
  }
  // //////////////////
  var folder = void 0;
  if (currentUrl.indexOf('/') >= 0) {
    folder = currentUrl.substring(0, currentUrl.lastIndexOf('/') + 1);
    if (folder.startsWith('/')) {
      folder = folder.substring(1);
    }
  } else {
    folder = '';
  }
  url = url.trim();
  if (url.startsWith('./')) {
    url = url.substring('./'.length);
  }
  while (url.startsWith('../')) {
    folder = folder.substring(0, folder.length - 1);
    folder = folder.substring(0, folder.lastIndexOf('/') + 1);
    url = url.substring('../'.length);
  }

  return folder + url;
};
thekit.abs2rel = function (currentUrl, url) {
  url = thekit.rel2abs(currentUrl, url);
  if (currentUrl.startsWith('/')) {
    currentUrl = currentUrl.substring(1);
  }
  var array = currentUrl.split('/');
  var result = '';
  if (array.length > 1) {
    for (var i = 0; i < array.length - 1; i++) {
      result += '../';
    }
  } else {
    result += './';
  }
  result += url;
  return result.toString();
};
module.exports = thekit;

/***/ })

/******/ });