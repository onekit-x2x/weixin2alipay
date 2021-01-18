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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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
    onekitId: '',
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: ''
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

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var refresher = void 0; /* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

Component({
  mixins: [_weixin_behavior2.default, _onekit_behavior2.default, _wxs_behavior2.default],
  data: {
    refresher_height: 0,
    pagePulling: false
  },
  props: {
    scrollX: false,
    scrollY: false,
    UpperThreshold: 50,
    LowerThreshold: 50,
    ScrollTop: 0,
    ScrollLeft: 0,
    ScrollIntoView: '',
    ScrollWithAnimation: false,
    EnableBackToTop: false,

    EnableFlex: false,
    ScrollAnchoring: false,

    refresherEnabled: false,
    refresherThreshold: 45,
    refresherDefaultStyle: 'black',
    refresherBackground: '#fff',
    refresherTriggered: false,

    Enhanced: false,
    Bounces: true,
    ShowScrollbar: true,
    PagingEnabled: false,
    FastDeceleration: false
  },
  didMount: function didMount() {},
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},
  onupper: function onupper() {},
  deriveDataFromProps: function deriveDataFromProps(nextProps) {
    console.log(1, nextProps);
    // if (nextProps.refresherTriggered) {
    //   if (!this.data.pagePulling) {
    //     console.log('xxxxxxxxxxxxx')
    //     this.data.pagePulling = true
    //     this.startPull()
    //   }
    // } else {
    //   if (this.data.pagePulling) {
    //     console.log('yyyyyyyyyyyyy')
    //     this.stopPull()
    //   }
    // }
  },


  methods: {
    css: function css() {
      // var transition = "all " + t + "ms";
      // this.setData({transition});
    },
    catch_Touchstart: function catch_Touchstart(e) {
      if (!this.props.refresherEnabled) {
        return;
      }
      /*  if (scrollView.scrollTop > 0) {
       //当页面已经有滚动或者不是置顶的时候，不需要进行下拉刷新，是页面正常的滑动
       this.data.touch = false;
       return;
      } */
      this.data.touch = true; // 触摸开始
      this.data.moved = false; // 还没有进行下拉刷新的滑动
      this.data.startY = e.touches[0].clientY;
    },
    catch_Touchmove: function catch_Touchmove(e) {
      // console.log('on_Touchmove:', e);
      if (!this.props.refresherEnabled) {
        return;
      }
      if (!this.data.touch || this.data.pagePulling) {
        return;
      }
      var touchesDiff = e.touches[0].clientY - this.data.startY; // 计算的移动位移
      if (touchesDiff < 0) {
        // 说明页面是向上滑的，不做任何操作
        this.data.moved = false;
        return;
      }
      this.data.moved = true;
      this.data.diff = touchesDiff;
      var distance = 0;
      if (this.data.diff <= this.props.refresherThreshold) {
        // moveDiff至少要等于loading的高度
        // 当滑动小于规定的临界值时
        distance = this.data.diff;
        this.setData({
          text: 'zzzzzzz'
        });

        //
        console.log('下拉可刷新');
      } else {
        //
        console.log('释放可刷新');
        //  '释放可刷新';
        // 弹性
        if (touchesDiff <= 2 * this.props.refresherThreshold) {
          distance = this.props.refresherThreshold + 0.5 * (touchesDiff - this.props.refresherThreshold);
        } else {
          distance = this.props.refresherThreshold + 0.1 * (touchesDiff - this.props.refresherThreshold) + 0.05 * (touchesDiff - 2 * this.props.refresherThreshold);
        }
      }
      if (distance > 0) {
        if (this.props.onRefresherpulling) {
          e.detail = {
            dy: distance
          };
          this.props.onRefresherpulling();
        }
        //  e.preventDefault();
        // 滑动的距离
        this.css(refresher, 0);
        this.setData({
          refresher_height: distance
        });
      }
    },
    catch_Touchend: function catch_Touchend() {
      if (!this.props.refresherEnabled) {
        return;
      }
      if (!this.data.touch || !this.data.moved) {
        this.setData({
          refresher_height: 0
        });
        return;
      }

      console.log('startPull');
      this.css(refresher, 300);
      this.data.pagePulling = true;
      if (this.data.diff > this.props.refresherThreshold) {
        //  '刷新中';
        this.startPull();
      } else {
        console.log('bbbbbbbbbbbbb');
        this.data.pagePulling = false;
        this.setData({
          refresher_height: 0
        });
      }
    },
    stopPull: function stopPull() {
      var _this = this;

      console.log('stopPull');
      this.css(refresher, 300);
      this.setData({
        refresher_height: 0
      });
      setTimeout(function () {
        _this.data.pagePulling = false; // 控制在刷新期间，重复向下拉动，不做任何操作
      }, 300);
    },
    startPull: function startPull() {
      console.log('aaaaaaaaaaaa');
      this.setData({
        refresher_height: this.props.refresherThreshold
      });
    },
    catch_Touchcancel: function catch_Touchcancel(e) {
      console.log('on_Touchcancel:', e);
      this.props.onRefresherabort({});
    },

    // //////////////////////////
    on_toupper: function on_toupper() {
      if (this.props.onScrolltoupper) {
        this.props.onScrolltoupper();
      }
    },
    on_tolower: function on_tolower() {
      if (this.props.onScrollToLower) {
        this.props.onScrollToLower();
      }
    },
    catch_scroll: function catch_scroll() {
      if (this.props.onScroll) {
        this.props.onScroll();
      }
    }
  }
});

/***/ })

/******/ });