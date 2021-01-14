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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
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

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _VideoContextX = __webpack_require__(53);

var _VideoContextX2 = _interopRequireDefault(_VideoContextX);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
Component({
  mixins: [_wxs_behavior2.default, _VideoContextX2.default],

  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: 'onekit-video',
    src: '',
    duration: null,
    controls: true,
    danmuList: [],
    danmuBtn: false,
    enableDanmu: false,
    autoplay: true,
    loop: false,
    muted: false,
    initialTime: '',
    pagGesture: false,
    direction: '',
    showProgress: true,
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    objectFit: 'contain',
    poster: '',
    showMuteBtn: true,

    //
    title: '',
    playBtnPosition: 'button',
    enablePlayGesture: false,
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    adUnitId: '',
    posterForCrawler: '',
    showCastingButton: false,
    pictureInPictureMode:  false || [],
    pictureInPictureShowPprogress: false,
    enableAutoRotation: false,
    showScreenLockButton: false,
    showSnapshotButton: false
  },
  deriveDataFromProps: function deriveDataFromProps(data_props) {
    console.log(data_props);
    this._trigger_controlstoggle(data_props.controls);
  },
  didMount: function didMount() {
    var that = this;
    my.createSelectorQuery().select('.onekit-video').boundingClientRect().exec(function (rect) {
      that.setData({
        rect: rect[0]
      });
    });
    /*
    let lastTime = 0
    let index = 0
    const danmuList = []
    for (const danmu of this.props.danmuList) {
      if (lastTime < danmu.time) {
        index = 0
        lastTime = danmu.time
      }
      danmu.index = index
      index++
      danmuList.push(danmu)
    } */

    var danmuList = {};
    for (var _iterator = this.props.danmuList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var danmu = _ref;

      var danmus = danmuList['t_' + danmu.time];
      if (!danmus) {
        danmus = [];
      }
      danmus.push({
        text: danmu.text,
        color: danmu.color,
        index: danmus.length
      });
      danmuList['t_' + danmu.time] = danmus;
    }
    this.setData({
      danmuList: danmuList
    });
    this._trigger_seekcomplete();
    this._trigger_controlstoggle(this.props.controls);
  },

  methods: {
    video_start: function video_start() {
      if (this.props.onPlay) {
        this.props.onPlay({});
      }
    },
    video_pause: function video_pause() {
      if (this.props.onPause) {
        this.props.onPause({});
      }
    },
    video_end: function video_end() {
      if (this.props.onEnded) {
        this.props.onEnded({});
      }
    },
    video_timeupdate: function video_timeupdate(e) {
      this.currentTime = e.detail.currentTime;
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e.detail);
      }
    },
    video_fullscreenchange: function video_fullscreenchange(e) {
      this._trigger_controlstoggle(this.props.controls && !e.detail.fullScreen);
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange(e.detail);
      }
    },
    video_waiting: function video_waiting() {
      if (this.props.onLoading) {
        this.props.onLoading({});
      }
    },
    video_error: function video_error() {
      if (this.props.onError) {
        this.props.onError({});
      }
    },
    _trigger_progress: function _trigger_progress() {},
    _trigger_loadedmetadata: function _trigger_loadedmetadata() {},
    _trigger_controlstoggle: function _trigger_controlstoggle(show) {
      if (this.data.show === show) {
        return;
      }
      this.data.show = show;
      if (this.props.onControlstoggle) {
        this.props.onControlstoggle({
          show: show
        });
      }
    },
    _trigger_enterpictureinpicture: function _trigger_enterpictureinpicture() {},
    _trigger_leavepictureinpicture: function _trigger_leavepictureinpicture() {},
    _trigger_seekcomplete: function _trigger_seekcomplete(positon) {
      if (this.props.duration) {
        var res = my.getSystemInfo();
        if (res.platform === 'iOS') {
          positon = this.props.duration * 1000;
        } else if (res.platform === 'Android ') {
          positon = this.props.duration;
        }
        if (this.props.onSeekcomplete) {
          this.props.onSeekcomplete({
            positon: positon
          });
        }
      }
    }
  }
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
module.exports = {
  methods: {
    sendDanmu: function sendDanmu() {
      //   const danmuList = this.data.danmuList
      //   data.time = this.data.currentTime
      //   danmuList.push(data)
      //   this.setData({danmuList})
    }
  }
};

/***/ })

/******/ });