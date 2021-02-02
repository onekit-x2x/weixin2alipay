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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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
/* eslint-disable no-console */
exports.default = {
  props: {
    onekitId: 'id' + new Date().getTime(),
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
    onekitDataset: null
  },
  data: {},
  onInit: function onInit() {
    if (this.props.onekitId) {
      getApp().onekit_nodes['_' + this.props.onekitId] = this;
    }
    //
    if (this.props.onekitClass) {
      getApp().onekit_nodes['__' + this.props.onekitClass] = this;
    }
  },

  methods: {
    _dataset: function _dataset() {
      if (!this.props.onekitDataset) {
        return {};
      }
      var json = '{' + this.props.onekitDataset + '}';
      return JSON.parse(json);
    },
    _e: function _e(detail, dataset) {
      // currentTarget: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // detail: {
      //   curPercent: parseInt(curPercent, 10)
      // },
      // mark: {},
      // mut: false,
      // target: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // timeStamp: 8888888, //
      // type: 'activeend',
      // _userTap: false
      return {
        detail: detail || {},
        dataset: dataset || {}
      };
    }
  }
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {},
  methods: {
    ui_tap: function ui_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
    ui_touchstart: function ui_touchstart() {
      if (this.props.onTouchstart) {
        this.props.onTouchstart();
      }
    },
    ui_touchmove: function ui_touchmove() {
      if (this.props.onTouchmove) {
        this.props.onTouchmove();
      }
    },
    ui_touchcancel: function ui_touchcancel() {
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel();
      }
    },
    ui_touchend: function ui_touchend() {
      if (this.props.onTouchend) {
        this.props.onTouchend();
      }
    },
    ui_longpress: function ui_longpress() {
      if (this.props.onLongpress) {
        this.props.onLongpress();
      }
    },
    ui_longtap: function ui_longtap() {
      if (this.props.onLongtap) {
        this.props.onLongtap();
      }
    },
    ui_transitionend: function ui_transitionend() {
      if (this.props.onTransitionend) {
        this.props.onTransitionend();
      }
    },
    ui_animationstart: function ui_animationstart() {
      if (this.props.onAnimationstart) {
        this.props.onAnimationstart();
      }
    },
    ui_animationiteration: function ui_animationiteration() {
      if (this.props.onAnimationiteration) {
        this.props.onAnimationiteration();
      }
    },
    ui_animationend: function ui_animationend() {
      if (this.props.onAnimationend) {
        this.props.onAnimationend();
      }
    },
    ui_touchforcechange: function ui_touchforcechange() {
      if (this.props.onTouchforcechange) {
        this.props.onTouchforcechange();
      }
    }
  }
};

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [_weixin_behavior2.default, _onekit_behavior2.default, _wxs_behavior2.default],
  data: {
    groundOverlays: [],
    'include-padding': {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    'ground-overlays': [{
      'include-points': [{
        latitude: null,
        longitude: null
      }, {
        latitude: null,
        longitude: null
      }],
      image: '',
      alpha: 1,
      zIndex: null
    }]
  },
  props: {
    longitude: 0,
    latitude: 0,
    scale: 16,
    minScale: 3,
    maxScale: 20,
    markers: [],
    covers: [],
    polyline: [],
    circles: [],
    controls: [],
    includePoints: [],
    showLocation: false,
    polygons: [],
    //
    subkey: '',
    layerStyle: 1,
    //
    rotate: 0,
    skew: 0,
    // 支付宝暂时不支持3D'
    enable3D: false,
    showCompass: false,
    showsScale: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    enableSatellite: false,
    enableTraffic: false,
    enablePoi: true,
    // 支付宝暂时不支持
    enableBuilding: true,
    setting: {}
  },
  deriveDataFromProps: function deriveDataFromProps(props) {
    var mapCtx = my.createMapContext(props.onekitId);
    this.showCompass_(mapCtx, props.showCompass);
    this.showsScale_(mapCtx, props.showsScale);
    this.enableZoom_(mapCtx, props.enableZoom);
    this.enableScroll_(mapCtx, props.enableScroll);
    this.enableRotate_(mapCtx, props.enableRotate);
    this.enableSatellite_(mapCtx, props.enableSatellite);
    this.enableTraffic_(mapCtx, props.enableTraffic);
    this.enablePoi_(mapCtx, props.enablePoi);
    this.setting_(mapCtx, props.latitude, props.longitude);
  },
  onInit: function onInit() {
    // console.log('onInit', this)
  },
  didMount: function didMount() {
    var _this = this;

    var scale = Math.max(this.props.scale, this.props.minScale);
    var covers = this.props.covers;
    var markers = this.props.markers;
    if (covers.length !== 0) {
      markers = markers.concat(covers);
      covers = null;
    }
    this.setData({
      scale: scale,
      covers: covers,
      markers: markers
    });

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec(function (rect) {
      _this.setData({
        rect: rect[0]
      });
    });
  },
  didUpdate: function didUpdate() {
    this._trigger_updated();
  },
  didUnmount: function didUnmount() {},

  methods: {
    showCompass_: function showCompass_(mapCtx, showCompass) {
      mapCtx.showsCompass({
        isShowCompass: showCompass ? 1 : 0
      });
    },
    showsScale_: function showsScale_(mapCtx, showsScale) {
      mapCtx.showsScale({
        isShowsScale: showsScale ? 1 : 0
      });
    },
    enableZoom_: function enableZoom_(mapCtx, enableZoom) {
      mapCtx.gestureEnable({
        isGestureEnable: enableZoom ? 1 : 0
      });
      console.warn('支付宝小程序地图组件会禁用全部手势');
    },
    enableScroll_: function enableScroll_(mapCtx, enableScroll) {
      mapCtx.gestureEnable({
        isGestureEnable: enableScroll ? 1 : 0
      });
      console.warn('支付宝小程序地图组件会禁用全部手势');
    },
    enableRotate_: function enableRotate_(mapCtx, enableRotate) {
      mapCtx.gestureEnable({
        isGestureEnable: enableRotate ? 1 : 0
      });
      console.warn('支付宝小程序地图组件会禁用全部手势');
    },
    enableSatellite_: function enableSatellite_(mapCtx, enableSatellite) {
      mapCtx.setMapType({
        mapType: enableSatellite ? 1 : 0
      });
    },
    enableTraffic_: function enableTraffic_(mapCtx, enableTraffic) {
      mapCtx.updateComponents({
        setting: {
          trafficEnabled: enableTraffic ? 1 : 0
        }
      });
    },
    enablePoi_: function enablePoi_(mapCtx, enablePoi) {
      mapCtx.updateComponents({
        setting: {
          showMapText: enablePoi ? 1 : 0
        }
      });
    },
    setting_: function setting_(mapCtx, latitude, longitude) {
      mapCtx.updateComponents({
        latitude: latitude,
        longitude: longitude,
        set: {
          skew: this.props.skew,
          rotate: this.props.rotate,
          showLocation: this.props.showLocation,
          showScale: this.props.showScale,
          // 做不了
          subKey: '',
          // 做不了 支付宝有问题
          layerStyle: 1,
          enableZoom: this.props.enableZoom,
          enableScroll: this.props.enableScroll,
          enableRotate: this.props.enableRotate,
          showCompass: this.props.showCompass,
          enable3D: this.props.enable3D,
          enableOverlooking: this.props.enableOverlooking,
          // 做不了
          enableSatellite: this.props.enableSatellite,
          enableTraffic: this.props.enableTraffic
        }
      });
    },
    addGroundOverlay: function addGroundOverlay(object) {
      console.log('addGroundOverlay', object);
    },
    map_tap: function map_tap(_ref) {
      var detail = _ref.detail;

      var dataset = this._dataset();
      if (this.props.onTap) {
        this.props.onTap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },


    // 做不了
    _trigger_labeltap: function _trigger_labeltap(_ref2) {
      var detail = _ref2.detail;

      var dataset = this._dataset();
      if (this.props.onLabelTap) {
        this.props.onLabelTap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },

    //

    map_MarkerTap: function map_MarkerTap(_ref3) {
      var detail = _ref3.detail;

      var dataset = this._dataset();
      if (this.props.onMarkerTap) {
        this.props.onMarkerTap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    map_ControlTap: function map_ControlTap(_ref4) {
      var detail = _ref4.detail;

      var dataset = this._dataset();
      if (this.props.onControltap) {
        this.props.onControltap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    map_CalloutTap: function map_CalloutTap(_ref5) {
      var detail = _ref5.detail;

      var dataset = this._dataset();
      if (this.props.onCalloutTap) {
        this.props.onCalloutTap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    _trigger_updated: function _trigger_updated() {
      this.mapCtx = my.createMapContext(this.props.onekitId);
      if (this.mapCtx.updateComponents) {
        if (this.props.onUpdated) {
          this.props.onUpdated();
        }
      }
    },
    map_RegionChange: function map_RegionChange(_ref6) {
      var detail = _ref6.detail;

      var dataset = this._dataset();
      if (this.props.onRegionChange) {
        this.props.onRegionChange({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },


    //
    _trigger_poitap: function _trigger_poitap(_ref7) {
      var detail = _ref7.detail;

      this.mapCtx = my.createMapContext(this.props.onekitId);
      var dataset = this._dataset();
      if (this.props.onPoiTap) {
        this.props.onPoiTap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    _trigger_anchorpointtap: function _trigger_anchorpointtap(_ref8) {
      var detail = _ref8.detail;

      var dataset = this._dataset();
      if (this.props.onAnchorPointTap) {
        this.props.onAnchorPointTap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    }
  }
}); /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })

/******/ });