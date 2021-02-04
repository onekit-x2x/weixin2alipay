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

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("oneutil");

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

var _MapContext_behavior = __webpack_require__(32);

var _MapContext_behavior2 = _interopRequireDefault(_MapContext_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-console */
/* eslint-disable camelcase */
Component({
  mixins: [_weixin_behavior2.default, _onekit_behavior2.default, _wxs_behavior2.default, _MapContext_behavior2.default],
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
          // 做不了
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
});

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _oneutil = __webpack_require__(3);

var _LngLat2px = __webpack_require__(33);

var _LngLat2px2 = _interopRequireDefault(_LngLat2px);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import PX2LNTLAT from '../ui/map/PX2LNTLAT'

/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
module.exports = {
  data: {
    on: {}
  },
  methods: {
    addGroundOverlay: function addGroundOverlay(wx_object) {
      var _this = this;

      if (!wx_object) {
        return;
      }
      var wx_id = wx_object.id;
      var wx_src = wx_object.src;
      var wx_bounds = wx_object.bounds;
      var wx_visible = wx_object.visible;
      var wx_zIndex = wx_object.zIndex;
      // 未完成
      // const wx_opacity = wx_object.opacity
      //
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;

      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        if (!wx_id || !wx_src || !wx_bounds) {
          FAIL({
            errMsg: 'addGroundOverlay:err'
          });
          return;
        }
        var markerLevel = _this.data.markers.markerLevel;
        wx_id = markerLevel;
        var alpha = _this.data.groundOverlays.alpha;
        if (wx_visible) {
          alpha = 1;
        } else {
          alpha = 0;
        }
        wx_visible = alpha;
        // if (wx_opacity) {
        //   filter:alpha(opacity:30)
        // }
        _this.setData({
          markerLevel: wx_id,
          'ground-overlays': [{
            'include-points': wx_bounds,
            image: wx_src,
            zIndex: wx_zIndex
          }]
        });
        var wx_res = {
          errMsg: 'addGroundOverlay:ok'
        };
        SUCCESS(wx_res);
      }, wx_success, wx_fail, wx_complete);
    },
    addMarkers: function addMarkers(wx_object) {
      console.log(wx_object);
      if (!wx_object) {
        return;
      }
      var wx_markers = wx_object.markers;
      var wx_clear = wx_object.clear || false;
      wx_object = null;

      var markers = wx_clear ? [] : this.data.markers;
      markers.push.apply(markers, wx_markers);
      this.setData({
        markers: markers
      });
      var clusters = this._getClusters();
      this._trigger_markerClusterCreate(clusters);
    },
    initMarkerCluster: function initMarkerCluster(wx_object) {
      if (!wx_object) {
        return;
      }
      var wx_enableDefaultStyle = wx_object.enableDefaultStyle;
      var wx_zoomOnClick = wx_object.zoomOnClick;
      var wx_gridSize = wx_object.gridSize;
      wx_object = null;
      // //////////
      this._trigger_markerClusterCreate(wx_enableDefaultStyle, wx_zoomOnClick, wx_gridSize);
    },
    moveAlong: function moveAlong(wx_object) {
      var _this2 = this;

      console.log(wx_object);
      if (!wx_object) {
        return;
      }
      var wx_markerId = wx_object.markerId;
      var wx_path = wx_object.path;
      var wx_autoRotate = wx_object.autoRotate;
      var wx_duration = wx_object.duration;
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;
      // //////////
      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        if (!wx_markerId || !wx_path || !wx_duration) {
          FAIL({
            errMsg: 'moveAlong:error'
          });
          return;
        }
        var my_object = {
          polylineId: wx_markerId,
          points: wx_path,
          duration: wx_duration,
          success: function success() {
            var wx_res = {
              errMsg: 'moveAlong:ok'
            };
            SUCCESS(wx_res);
          },
          fail: function fail() {
            var wx_res = {
              errMsg: 'moveToLocation:ok'
            };
            FAIL(wx_res);
          }
        };
        my.smoothMovePolyline(my_object);
        _this2._trigger_markerClusterCreate(wx_autoRotate);
      }, wx_success, wx_fail, wx_complete);
    },
    on: function on(wx_object) {
      if (!wx_object) {
        return;
      }
      var wx_markerClusterCreate = wx_object.clusters;
      var wx_markerClusterClick = wx_object.latitude;
      wx_object = null;

      this._trigger_markerClusterCreate(wx_markerClusterCreate, wx_markerClusterClick);
    },
    openMapApp: function openMapApp(wx_object) {
      if (!wx_object) {
        return;
      }
      var wx_longitude = wx_object.longitude;
      var wx_latitude = wx_object.latitude;
      var wx_destination = wx_object.destination;
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;

      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        if (!wx_longitude || !wx_latitude || !wx_destination) {
          FAIL({
            errMsg: 'openMapApp:error'
          });
          return;
        }
        my.openLocation({
          latitude: wx_longitude,
          longitude: wx_latitude,
          name: wx_destination
        });
        var wx_res = {
          errMsg: 'openMapApp:ok'
        };
        SUCCESS(wx_res);
      }, wx_success, wx_fail, wx_complete);
    },
    removeGroundOverlay: function removeGroundOverlay(wx_object) {
      var _this3 = this;

      if (!wx_object) {
        return;
      }
      var wx_id = wx_object.id;
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;

      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        if (!wx_id) {
          FAIL({
            errMsg: 'removeGroundOverlay:error'
          });
          return;
        }
        _this3._trigger_removeGroundOverlay(wx_id);
        var wx_res = {
          errMsg: 'removeGroundOverlay:ok'
        };
        SUCCESS(wx_res);
      }, wx_success, wx_fail, wx_complete);
    },
    removeMarkers: function removeMarkers(wx_object) {
      if (!wx_object) {
        return;
      }
      var wx_markerIds = wx_object.markerIds;
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;

      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        if (!wx_markerIds) {
          FAIL({
            errMsg: 'removeMarkers:error'
          });
          return;
        }
        var my_object = {
          remove: {
            longitude: wx_markerIds.longitude,
            latitude: wx_markerIds.latitude
          },
          success: function success() {
            var wx_res = {
              errMsg: 'removeMarkers:ok'
            };
            SUCCESS(wx_res);
          },
          fail: function fail() {
            var wx_res = {
              errMsg: 'removeMarkers:error'
            };
            FAIL(wx_res);
          }
        };
        my.changeMarkers(my_object);
      }, wx_success, wx_fail, wx_complete);
    },
    updateGroundOverlay: function updateGroundOverlay(wx_object) {
      var _this4 = this;

      console.log(wx_object);
      if (!wx_object) {
        return;
      }
      var wx_id = wx_object.id;
      var wx_src = wx_object.src;
      var wx_bounds = wx_object.bounds;
      var wx_visible = wx_object.visible;
      var wx_zIndex = wx_object.zIndex;
      // 未完成
      // const wx_opacity = wx_object.opacity
      //
      var wx_success = wx_object.success;
      var wx_fail = wx_object.fail;
      var wx_complete = wx_object.complete;
      wx_object = null;

      (0, _oneutil.PROMISE)(function (SUCCESS, FAIL) {
        if (!wx_id || !wx_src || !wx_bounds) {
          FAIL({
            errMsg: 'updateGroundOverlay:err'
          });
          return;
        }
        var markerLevel = _this4.data.markers.markerLevel;
        wx_id = markerLevel;
        var alpha = _this4.data.groundOverlays.alpha;
        if (wx_visible) {
          alpha = 1;
        } else {
          alpha = 0;
        }
        wx_visible = alpha;
        // if (wx_opacity) {
        //   filter:alpha(opacity:30)
        // }
        _this4.setData({
          markerLevel: wx_id,
          'ground-overlays': [{
            'include-points': wx_bounds,
            image: wx_src,
            zIndex: wx_zIndex
          }]
        });
        var wx_res = {
          errMsg: 'updateGroundOverlay:ok'
        };
        SUCCESS(wx_res);
      }, wx_success, wx_fail, wx_complete);
    },


    //
    _trigger_markerClusterCreate: function _trigger_markerClusterCreate(clusters) {
      if (this.on.markerClusterCreate) {
        this.on.markerClusterCreate({
          clusters: clusters
        });
      }
    },
    _trigger_moveAlong: function _trigger_moveAlong(markerId, path, autoRotate, duration) {
      if (this.on.moveAlong) {
        this.on.moveAlong({
          markerId: markerId,
          path: path,
          autoRotate: autoRotate,
          duration: duration
        });
      }
    },
    _trigger_removeGroundOverlay: function _trigger_removeGroundOverlay(id) {
      if (this.on.removeGroundOverlay) {
        this.on.removeGroundOverlay({
          id: id
        });
      }
    },
    _getClusters: function _getClusters() {
      var mapWidth = void 0;
      var mapHeight = void 0;
      var lngNE = void 0;
      var latNE = void 0;
      var lngSW = void 0;
      var latSW = void 0;
      var allMarkers = [];
      var gridSize = void 0;

      function Area(p0, p1, p2) {
        var area = 0.0;
        area = p0.longitude * p1.latitude + p1.longitude * p2.latitude + p2.longitude * p0.latitude - p1.longitude * p0.latitude - p2.longitude * p1.latitude - p0.longitude * p2.latitude;
        return area / 2;
      }

      // line 249 计算polygon的质心
      function getPolygonAreaCenter(points) {
        var sum_x = 0;
        var sum_y = 0;
        var sum_area = 0;
        var p1 = points[1];

        for (var i = 2; i < points.length; i++) {
          var p2 = points[i];
          var area = Area(points[0], p1, p2);
          sum_area += area;
          sum_x += (points[0].longitude + p1.longitude + p2.longitude) * area;
          sum_y += (points[0].latitude + p1.latitude + p2.latitude) * area;
          p1 = p2;
        }
        var longitude = sum_x / sum_area / 3;
        var latitude = sum_y / sum_area / 3;
        return {
          longitude: longitude,
          latitude: latitude
        };
      }
      var ragionMarkers = allMarkers.filter(function (marker) {
        return lngSW < marker.lng < lngNE && latSW < marker.lat < latNE;
      });

      // 3
      var lngLat2px = new _LngLat2px2.default(mapWidth, mapHeight, lngNE, latNE, lngSW, latSW);
      var ragionMarkersWithXY = ragionMarkers.map(function (marker) {
        marker.xy = lngLat2px.run(marker.lng, marker.lat);
        return marker;
      });
      // 4
      var sortedRagionMarkersWithXY = ragionMarkersWithXY.sort(function (marker1, marker2) {
        return marker2.lng > marker1.lng;
      });
      var clusters = [];
      for (var i = 0; i < sortedRagionMarkersWithXY.length; i++) {
        for (var j = i + 1; j < sortedRagionMarkersWithXY.length; j++) {
          if (i === j) {
            continue;
          }
          var marker1 = sortedRagionMarkersWithXY[i];
          var marker2 = sortedRagionMarkersWithXY[j];
          var dx = marker1.x - marker2.x;
          var dy = marker1.y - marker2.yj;
          var gridSizeMarkers = dx * dx + dy * dy;
          // let enableDefaultStyle
          // if (enableDefaultStyle) {

          // }
          if (gridSizeMarkers <= gridSize * gridSize) {
            var id1 = marker1.id;
            var id2 = marker2.id;
            var isFind = false;
            for (var c = 0; c < clusters.length; c++) {
              var cluster = clusters[c];
              if (cluster.markerIds.indexOf(id1) >= 0) {
                cluster.markerIds.push(id2);
                isFind = true;
                break;
              } else if (cluster.markerIds.indexOf(id2) >= 0) {
                cluster.markerIds.push(id1);
                isFind = true;
                break;
              }
            }
            // let zoomOnClick
            // if (zoomOnClick) {

            // }
            if (!isFind) {
              var clusterId = clusters.length + 1;
              clusters.push({
                clusterId: clusterId,
                markerIds: [id1, id2]
              });
            }
          }
        }
      }
      return clusters.map(function (cluster) {
        var marksers = sortedRagionMarkersWithXY.filter(function (marker) {
          return cluster.markerIds.indexOf(marker.id);
        });
        cluster.center = getPolygonAreaCenter(marksers);
        return cluster;
      });
    }
  }
};

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LngLat2px = function () {
  function LngLat2px(mapWidth, mapHeight, lngNE, latNE, lngSW, latSW) {
    _classCallCheck(this, LngLat2px);

    this.lngNW = lngSW;
    this.latNW = latNE;
    this.kw = (lngNE - lngSW) * 3600 / mapWidth;
    this.kh = (latNE - latSW) * 3600 / mapHeight;
  }

  LngLat2px.prototype.run = function run(lng, lat) {
    var x = (lng - this.latNW) * 3600 / this.kw;
    var y = (this.lngNW - lat) * 3600 / this.kh;
    return { x: x, y: y };
  };

  return LngLat2px;
}();

exports.default = LngLat2px;

/***/ })

/******/ });