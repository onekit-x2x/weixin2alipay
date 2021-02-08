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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

    // requestAnimationFrame(callback) {

    // },
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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [_onekit_behavior2.default, _wxs_behavior2.default, _weixin_behavior2.default],
  data: {},
  props: {
    target: 'self',
    url: '',
    openType: 'navigate',
    delta: 1,
    appId: '',
    path: '',
    extraData: {},
    version: '',
    hoverClass: 'navigator-hover',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 600
  },
  methods: {
    navigator_tap: function navigator_tap(e) {
      var _this = this;

      var target = this.props.target;
      var openType = this.props.openType;
      // let version
      // //
      // if (this.props.version === 'develop') {
      //   console.log('开发版')
      //   version = this.props.version
      // } else if (this.props.version === 'trial') {
      //   console.log('体验版')
      //   version = this.props.version
      // } else if (this.props.version === 'release') {
      //   console.log('正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。')
      //   version = this.props.version
      // }
      //
      switch (target) {
        case 'self':
          switch (openType) {
            case 'navigate':
              my.navigateTo({
                url: this.props.url,
                success: function success() {
                  _this._trigger_Success();
                },
                fail: function fail() {
                  _this._trigger_Fail();
                },
                complete: function complete() {
                  _this._trigger_Complete();
                }
              });
              break;
            case 'redirectTo':
              my.redirectTo({
                url: this.props.url,
                success: function success() {
                  _this._trigger_Success();
                },
                fail: function fail() {
                  _this._trigger_Fail();
                },
                complete: function complete() {
                  _this._trigger_Complete();
                }
              });
              break;
            case 'switchTab':
              my.switchTab({
                url: this.props.url,
                success: function success() {
                  _this._trigger_Success();
                },
                fail: function fail() {
                  _this._trigger_Fail();
                },
                complete: function complete() {
                  _this._trigger_Complete();
                }
              });
              break;
            case 'reLaunch':
              my.reLaunch({
                url: this.props.url,
                success: function success() {
                  _this._trigger_Success();
                },
                fail: function fail() {
                  _this._trigger_Fail();
                },
                complete: function complete() {
                  _this._trigger_Complete();
                }
              });
              break;
            case 'navigateBack':
              my.navigateBack({
                delta: this.props.delta
              });
              break;
            default:
              break;
          }
          break;
        case 'miniProgram':
          switch (openType) {
            case  true && 'extraData':
              // case ('app-id' && 'path' && 'extraData' && 'version'):
              // 完成不了
              my.navigateToMiniProgram({
                appId: this.props.appId,
                path: this.props.path,
                extraData: this.props.extraData,
                // envVersion:this.props.version
                success: function success() {
                  _this._trigger_Success();
                },
                fail: function fail() {
                  _this._trigger_Fail();
                },
                complete: function complete() {
                  _this._trigger_Complete();
                }
              });
              break;
            // exit支付宝小程序自带
            // case 'exit':
            //   my.alert({
            //     content: '请点击右上角⨂按钮'
            //   })
            //   break
            default:
              break;
          }
          break;
        default:
          break;
      }
      if (this.props.onTap) {
        this.props.onTap(e);
      }
    },
    view_tap: function view_tap(e) {
      if (!this.props.hoverStopPropagation) {
        if (this.props.onTap) {
          this.props.onTap(e);
        }
      }
    },
    _trigger_Success: function _trigger_Success(e) {
      if (this.props.onSuccess) {
        this.props.onSuccess(e);
      }
    },
    _trigger_Fail: function _trigger_Fail(e) {
      if (this.props.onFail) {
        this.props.onFail(e);
      }
    },
    _trigger_Complete: function _trigger_Complete(e) {
      if (this.props.onComplete) {
        this.props.onComplete(e);
      }
    }
  }
}); /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ })

/******/ });