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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
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

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [_wxs_behavior2.default],
  data: {},
  props: {
    onekitId: 'onekit-map',
    onekitClass: '',
    onekitStyle: '',
    longitude: function longitude(_longitude) {
      this.setData({ longitude: _longitude });
    },
    latitude: function latitude(_latitude) {
      this.setData({ latitude: _latitude });
    },
    scale: function scale(_scale) {
      this.setData({ scale: _scale });
    },
    markers: function markers(_markers) {
      this.setData({ markers: _markers });
    },
    covers: function covers(_covers) {
      this.setData({ markers: _covers });
    },
    polyline: function polyline(_polyline) {
      this.setData({ polyline: _polyline });
    },
    polygons: function polygons(polygon) {
      this.setData({ polygon: polygon });
    },
    circles: function circles(_circles) {
      this.setData({ circles: _circles });
    },
    controls: function controls(_controls) {
      this.setData({ controls: _controls });
    },

    'include-points': function includePoints(_includePoints) {
      this.setData({ 'include-points': _includePoints });
    },
    'show-location': function showLocation(_showLocation) {
      this.setData({ 'show-location': _showLocation });
    },
    subkey: function subkey(_subkey) {
      this.setData({ subkey: _subkey });
    },

    'enable-3D': function enable3D() {
      console.log('[onekit]enable-3D');
    },
    'show-compass': function showCompass(_showCompass) {
      this.mapCtx.showsCompass({ isShowCompass: _showCompass });
    },
    'enable-overlooking': function enableOverlooking(_enableOverlooking) {
      this.mapCtx.gestureEnable({ isGestureEnable: _enableOverlooking });
    },
    'enable-zoom': function enableZoom(_enableZoom) {
      this.mapCtx.showsScale({ isShowsScale: _enableZoom });
    },
    'enable-scroll': function enableScroll() {
      console.log('[onekit]enable-scroll');
    },
    'enable-rotate': function enableRotate(_enableRotate) {
      this.mapCtx.gestureEnable({ isGestureEnable: _enableRotate });
    }
  },
  didMount: function didMount() {
    var that = this;
    this.mapCtx = my.createMapContext(this.props.onekitId);

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec(function (rect) {
      that.setData({ rect: rect[0] });
    });
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    onMarkertap: function onMarkertap() {},
    onCallouttap: function onCallouttap() {},
    onControltap: function onControltap() {},
    onRegionchange: function onRegionchange() {},
    onTap: function onTap() {},
    onUpdated: function onUpdated() {},
    onPoitap: function onPoitap() {}
  }
}); /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })

/******/ });