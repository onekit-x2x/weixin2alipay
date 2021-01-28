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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable prefer-rest-params */
var CanvasContext = function () {
  function CanvasContext(alipayCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.alipayCanvasContext = alipayCanvasContext;
  }

  CanvasContext.prototype.arc = function arc() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    return this.alipayCanvasContext.arc.apply(this, params);
  };

  CanvasContext.prototype.arcTo = function arcTo() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    return this.alipayCanvasContext.arcTo.apply(this, params);
  };

  CanvasContext.prototype.beginPath = function beginPath() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      params[_key3] = arguments[_key3];
    }

    return this.alipayCanvasContext.beginPath.apply(this, params);
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo() {
    for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      params[_key4] = arguments[_key4];
    }

    return this.alipayCanvasContext.bezierCurveTo.apply(this, params);
  };

  CanvasContext.prototype.clearRect = function clearRect() {
    for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      params[_key5] = arguments[_key5];
    }

    return this.alipayCanvasContext.clearRect.apply(this, params);
  };

  CanvasContext.prototype.createCircularGradient = function createCircularGradient() {
    for (var _len6 = arguments.length, params = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      params[_key6] = arguments[_key6];
    }

    return this.alipayCanvasContext.createCircularGradient.apply(this, params);
  };

  CanvasContext.prototype.createLinearGradient = function createLinearGradient() {
    for (var _len7 = arguments.length, params = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      params[_key7] = arguments[_key7];
    }

    return this.alipayCanvasContext.createLinearGradient.apply(this, params);
  };

  CanvasContext.prototype.createPattern = function createPattern() {
    for (var _len8 = arguments.length, params = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      params[_key8] = arguments[_key8];
    }

    return this.alipayCanvasContext.createPattern.apply(this, params);
  };

  CanvasContext.prototype.draw = function draw() {
    return this.alipayCanvasContext.draw();
  };

  CanvasContext.prototype.drawImage = function drawImage() {
    for (var _len9 = arguments.length, params = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      params[_key9] = arguments[_key9];
    }

    return this.alipayCanvasContext.drawImage.apply(this, params);
  };

  CanvasContext.prototype.fill = function fill() {
    for (var _len10 = arguments.length, params = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      params[_key10] = arguments[_key10];
    }

    return this.alipayCanvasContext.fill.apply(this, params);
  };

  CanvasContext.prototype.fillRect = function fillRect(x, y, w, h) {
    return this.alipayCanvasContext.fillRect(x, y, w, h);
  };

  CanvasContext.prototype.fillText = function fillText() {
    for (var _len11 = arguments.length, params = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      params[_key11] = arguments[_key11];
    }

    return this.alipayCanvasContext.fillText.apply(this, params);
  };

  CanvasContext.prototype.lineTo = function lineTo() {
    for (var _len12 = arguments.length, params = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      params[_key12] = arguments[_key12];
    }

    return this.alipayCanvasContext.lineTo.apply(this, params);
  };

  CanvasContext.prototype.measureText = function measureText() {
    for (var _len13 = arguments.length, params = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      params[_key13] = arguments[_key13];
    }

    return this.alipayCanvasContext.measureText.apply(this, params);
  };

  CanvasContext.prototype.moveTo = function moveTo() {
    for (var _len14 = arguments.length, params = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
      params[_key14] = arguments[_key14];
    }

    return this.alipayCanvasContext.moveTo.apply(this, params);
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo() {
    for (var _len15 = arguments.length, params = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
      params[_key15] = arguments[_key15];
    }

    return this.alipayCanvasContext.quadraticCurveTo.apply(this, params);
  };

  CanvasContext.prototype.rect = function rect() {
    for (var _len16 = arguments.length, params = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
      params[_key16] = arguments[_key16];
    }

    return this.alipayCanvasContext.rect.apply(this, params);
  };

  CanvasContext.prototype.restore = function restore() {
    for (var _len17 = arguments.length, params = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
      params[_key17] = arguments[_key17];
    }

    return this.alipayCanvasContext.restore.apply(this, params);
  };

  CanvasContext.prototype.rotate = function rotate() {
    for (var _len18 = arguments.length, params = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
      params[_key18] = arguments[_key18];
    }

    return this.alipayCanvasContext.rotate.apply(this, params);
  };

  CanvasContext.prototype.save = function save() {
    for (var _len19 = arguments.length, params = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
      params[_key19] = arguments[_key19];
    }

    return this.alipayCanvasContext.save.apply(this, params);
  };

  CanvasContext.prototype.scale = function scale() {
    for (var _len20 = arguments.length, params = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
      params[_key20] = arguments[_key20];
    }

    return this.alipayCanvasContext.scale.apply(this, params);
  };

  //


  CanvasContext.prototype.setFillStyle = function setFillStyle(fillStyle) {
    this.fillStyle = fillStyle;
  };

  //


  CanvasContext.prototype.setFontSize = function setFontSize(font) {
    this.font = font;
  };

  //


  CanvasContext.prototype.setGlobalAlpha = function setGlobalAlpha(globalAlpha) {
    this.globalAlpha = globalAlpha;
  };

  //


  CanvasContext.prototype.setLineCap = function setLineCap(lineCap) {
    this.lineCap = lineCap;
  };

  //


  CanvasContext.prototype.setLineDash = function setLineDash(lineDashOffset) {
    this.lineDashOffset = lineDashOffset;
  };

  //


  CanvasContext.prototype.setLineJoin = function setLineJoin(lineJoin) {
    this.lineJoin = lineJoin;
  };

  //


  CanvasContext.prototype.setLineWidth = function setLineWidth(lineWidth) {
    this.lineWidth = lineWidth;
  };

  //


  CanvasContext.prototype.setMiterLimit = function setMiterLimit(miterLimit) {
    this.miterLimit = miterLimit;
  };

  //


  //
  CanvasContext.prototype.strokeStyle = function strokeStyle() {
    for (var _len21 = arguments.length, params = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
      params[_key21] = arguments[_key21];
    }

    return this.alipayCanvasContext.strokeStyle.apply(this, params);
  };

  CanvasContext.prototype.setStrokeStyle = function setStrokeStyle() {
    for (var _len22 = arguments.length, params = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
      params[_key22] = arguments[_key22];
    }

    return this.alipayCanvasContext.setStrokeStyle.apply(this, params);
  };

  CanvasContext.prototype.setTextAlign = function setTextAlign() {
    for (var _len23 = arguments.length, params = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
      params[_key23] = arguments[_key23];
    }

    return this.alipayCanvasContext.setTextAlign.apply(this, params);
  };

  CanvasContext.prototype.setTextBaseline = function setTextBaseline() {
    for (var _len24 = arguments.length, params = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
      params[_key24] = arguments[_key24];
    }

    return this.alipayCanvasContext.setTextBaseline.apply(this, params);
  };

  CanvasContext.prototype.setTransform = function setTransform() {
    for (var _len25 = arguments.length, params = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
      params[_key25] = arguments[_key25];
    }

    return this.alipayCanvasContext.setTransform.apply(this, params);
  };

  CanvasContext.prototype.stroke = function stroke() {
    for (var _len26 = arguments.length, params = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
      params[_key26] = arguments[_key26];
    }

    return this.alipayCanvasContext.stroke.apply(this, params);
  };

  CanvasContext.prototype.strokeRect = function strokeRect() {
    for (var _len27 = arguments.length, params = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
      params[_key27] = arguments[_key27];
    }

    return this.alipayCanvasContext.strokeRect.apply(this, params);
  };

  CanvasContext.prototype.strokeText = function strokeText() {
    for (var _len28 = arguments.length, params = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
      params[_key28] = arguments[_key28];
    }

    return this.alipayCanvasContext.strokeText.apply(this, params);
  };

  CanvasContext.prototype.transform = function transform() {
    for (var _len29 = arguments.length, params = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
      params[_key29] = arguments[_key29];
    }

    return this.alipayCanvasContext.transform.apply(this, params);
  };

  CanvasContext.prototype.translate = function translate() {
    for (var _len30 = arguments.length, params = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
      params[_key30] = arguments[_key30];
    }

    return this.alipayCanvasContext.translate.apply(this, params);
  };

  _createClass(CanvasContext, [{
    key: 'fillStyle',
    set: function set(fillStyle) {
      return this.alipayCanvasContext.setFillStyle(fillStyle);
    },
    get: function get() {
      return this.alipayCanvasContext.getFillStyle();
    }
  }, {
    key: 'font',
    set: function set(font) {
      return this.alipayCanvasContext.setFontSize(font);
    },
    get: function get() {
      return this.alipayCanvasContext.getFontSize();
    }
  }, {
    key: 'globalAlpha',
    set: function set(globalAlpha) {
      return this.alipayCanvasContext.setGlobalAlpha(globalAlpha);
    },
    get: function get() {
      return this.alipayCanvasContext.getGlobalAlpha();
    }
  }, {
    key: 'lineCap',
    set: function set(lineCap) {
      return this.alipayCanvasContext.setLineCap(lineCap);
    },
    get: function get() {
      return this.alipayCanvasContext.getLineCap();
    }
  }, {
    key: 'lineDashOffset',
    set: function set(lineDashOffset) {
      return this.alipayCanvasContext.setLineDash(lineDashOffset);
    },
    get: function get() {
      return this.alipayCanvasContext.getLineDash();
    }
  }, {
    key: 'lineJoin',
    set: function set(lineJoin) {
      return this.alipayCanvasContext.setLineJoin(lineJoin);
    },
    get: function get() {
      return this.alipayCanvasContext.getLineJoin();
    }
  }, {
    key: 'lineWidth',
    set: function set(lineWidth) {
      return this.alipayCanvasContext.setLineWidth(lineWidth);
    },
    get: function get() {
      return this.alipayCanvasContext.getLineWidth();
    }
  }, {
    key: 'miterLimit',
    set: function set(miterLimit) {
      return this.alipayCanvasContext.setMiterLimit(miterLimit);
    },
    get: function get() {
      return this.alipayCanvasContext.getMiterLimit();
    }
  }, {
    key: 'shadowOffsetX',
    set: function set(shadowOffsetX) {
      return this.alipayCanvasContext.setShadow(shadowOffsetX, 0, 0, 'black');
    }
  }, {
    key: 'shadowOffsetY',
    set: function set(shadowOffsetY) {
      return this.alipayCanvasContext.setShadow(0, shadowOffsetY, 0, 'black');
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'shadowColor',
    set: function set(shadowColor) {}
    // return this.alipayCanvasContext.shadowColor.apply(this, params)


    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'shadowBlur',
    set: function set(shadowBlur) {}
    // return this.alipayCanvasContext.shadowBlur.apply(this, params)

  }]);

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

var _VideoContext = __webpack_require__(5);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _CameraContext = __webpack_require__(6);

var _CameraContext2 = _interopRequireDefault(_CameraContext);

var _SelectorQuery = __webpack_require__(7);

var _SelectorQuery2 = _interopRequireDefault(_SelectorQuery);

var _MapContext = __webpack_require__(9);

var _MapContext2 = _interopRequireDefault(_MapContext);

var _CanvasContext = __webpack_require__(10);

var _CanvasContext2 = _interopRequireDefault(_CanvasContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wx = function () {
  function wx() {
    _classCallCheck(this, wx);
  }

  // ///////////////// animation //////////////////////////
  wx.createAnimation = function createAnimation(wx_object) {
    return my.createAnimation(wx_object);
  };

  // ////////////////onKeyboardHeightChange//////////////////


  wx.onKeyboardHeightChange = function onKeyboardHeightChange(wx_callback) {
    if (!getApp().onekit_onKeyboardHeight) {
      getApp().onekit_onKeyboardHeight = [];
    }
    getApp().onekit_onKeyboardHeight.push(function (my_res) {
      var wx_res = {
        height: my_res.height
      };
      wx_callback(wx_res);
    });
  };

  // /////////////// basic ////////////////////////////////


  wx.canIUse = function canIUse() {
    return true;
  };

  wx._getSystemInfo = function _getSystemInfo(result) {
    result.SDKVersion = '2.7.0';
    my.openBluetoothAdapter({
      success: function success() {
        // result.bluetoothEnabled = true;
        my.closeBluetoothAdapter();
      },
      fail: function fail() {
        // result.bluetoothEnabled = false;
        my.closeBluetoothAdapter();
      }
    });
    my.getNetworkType({
      success: function success() {
        // result.wifiEnabled = (res.networkType === "WIFI");
      },
      fail: function fail() {
        // result.wifiEnabled = false;
      }
    });
    my.getSetting({
      success: function success(res) {
        result.locationAuthorized = res.authSetting.location === true;
        result.cameraAuthorized = res.authSetting.camera === true;
        result.microphoneAuthorized = res.authSetting.audioRecord === true;
        result.albumAuthorized = res.authSetting.album === true;
      }
    });
    return result;
  };

  wx.getSystemInfo = function getSystemInfo(wx_object) {
    var my_object = {};
    my_object.success = function (res) {
      var result = {
        errMsg: 'getSystemInfo:ok',
        SDKVersion: '2.4.2',
        brand: res.brand,
        fontSizeSetting: res.fontSizeSetting,
        language: res.language,
        model: res.model,
        // notificationAuthorized: notificationAuthorized,
        pixelRatio: res.pixelRatio,
        platform: res.platform,
        safeArea: {
          height: res.screenHeight,
          width: res.screenWidth,
          bottom: res.screenHeight,
          top: 0,
          left: 0,
          right: res.screenWidth
        },
        screenHeight: res.screenHeight,
        screenWidth: res.screenWidth,
        statusBarHeight: res.statusBarHeight,
        system: res.system,
        version: res.version,
        windowHeight: res.windowWidth,
        windowWidth: res.windowHeight
      };

      result = wx._getSystemInfo(result);
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.fail) {
        wx_object.fail(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.fail(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };

    return my.getSystemInfo(my_object);
  };

  wx.getSystemInfoSync = function getSystemInfoSync() {
    return wx._getSystemInfo(my.getSystemInfoSync());
  };

  wx.base64ToArrayBuffer = function base64ToArrayBuffer(base64) {
    base64 = base64.replace(/\s/g, '+');
    var commonContent = Buffer.from(base64, 'base64');
    return commonContent;
  };

  wx.arrayBufferToBase64 = function arrayBufferToBase64(arrayBuffer) {
    var base64Content = Buffer.from(arrayBuffer).toString('base64');
    return base64Content;
  };

  wx.getUpdateManager = function getUpdateManager(wx_object) {
    return my.getUpdateManager(wx_object);
  };

  wx.getLaunchOptionsSync = function getLaunchOptionsSync(wx_object) {
    return my.getLaunchOptionsSync(wx_object);
  };

  wx.offPageNotFound = function offPageNotFound() {
    getApp().onekit_onError = null;
  };

  wx.onPageNotFound = function onPageNotFound(callback) {
    getApp().onekit_onPageNotFound = callback;
  };

  wx.offError = function offError() {
    getApp().onekit_onError = null;
  };

  wx.onError = function onError(callback) {
    getApp().onekit_onError = callback;
  };

  wx.offAppShow = function offAppShow() {
    getApp().onekit_onError = null;
  };

  wx.onAppShow = function onAppShow(callback) {
    getApp().onekit_onError = callback;
  };

  wx.offAppHide = function offAppHide() {
    getApp().onekit_onError = null;
  };

  wx.onAppHide = function onAppHide(callback) {
    getApp().onekit_onError = callback;
  };

  wx.setEnableDebug = function setEnableDebug(wx_object) {
    return my.setEnableDebug(wx_object);
  };

  wx.getLogManager = function getLogManager(wx_object) {
    return my.getLogManager(wx_object);
  };

  // ///////////////// Canvas ///////////////////

  wx.createCanvasContext = function createCanvasContext(canvasId) {
    return new _CanvasContext2.default(my.createCanvasContext(canvasId));
  };

  wx.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(my.createVideoContext(videoId), videoId);
  };

  wx.createCameraContext = function createCameraContext() {
    return new _CameraContext2.default(getApp().onekit_camera);
  };

  // //////////// WXML ///////////////


  wx.createSelectorQuery = function createSelectorQuery() {
    return new _SelectorQuery2.default();
  };

  wx.canvasToTempFilePath = function canvasToTempFilePath(wx_object) {
    var my_object = {
      canvasId: wx_object.canvasId
    };
    my_object.success = function (res) {
      var result = {
        errMsg: 'canvasToTempFilePath:ok',
        tempFilePath: res.apFilePath
      };
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.canvasToTempFilePath(my_object);
  };

  wx.canvasPutImageData = function canvasPutImageData(wx_object) {
    return my.canvasPutImageData(wx_object);
  };

  wx.canvasGetImageData = function canvasGetImageData(wx_object) {
    return my.canvasGetImageData(wx_object);
  };

  // //////////// Device //////////////////


  wx.onBeaconServiceChange = function onBeaconServiceChange(wx_object) {
    return my.onBeaconServiceChange(wx_object);
  };

  wx.onBeaconUpdate = function onBeaconUpdate(wx_object) {
    return my.onBeaconUpdate(wx_object);
  };

  wx.getBeacons = function getBeacons(wx_object) {
    return my.getBeacons(wx_object);
  };

  wx.stopBeaconDiscovery = function stopBeaconDiscovery(wx_object) {
    return my.stopBeaconDiscovery(wx_object);
  };

  wx.startBeaconDiscovery = function startBeaconDiscovery(wx_object) {
    return my.startBeaconDiscovery(wx_object);
  };

  wx.stopWifi = function stopWifi(wx_object) {
    return my.stopWifi(wx_object);
  };

  wx.startWifi = function startWifi(wx_object) {
    return my.startWifi(wx_object);
  };

  wx.setWifiList = function setWifiList(wx_object) {
    return my.setWifiList(wx_object);
  };

  wx.onWifiConnected = function onWifiConnected(wx_object) {
    return my.onWifiConnected(wx_object);
  };

  wx.onGetWifiList = function onGetWifiList(wx_object) {
    return my.onGetWifiList(wx_object);
  };

  wx.getWifiList = function getWifiList(wx_object) {
    return my.getWifiList(wx_object);
  };

  wx.getConnectedWifi = function getConnectedWifi(wx_object) {
    return my.getConnectedWifi(wx_object);
  };

  wx.connectWifi = function connectWifi(wx_object) {
    return my.connectWifi(wx_object);
  };

  // ///////////////////////////////////////////


  wx.setBackgroundFetchToken = function setBackgroundFetchToken(my_object) {
    var wx_token = my_object.token;
    var wx_success = my_object.success;
    // const wx_fail = my_object.fail
    var wx_complete = my_object.complete;
    // ///////////////
    my.setStorage({
      key: 'wx_token',
      data: {
        wx_token: wx_token
      }
    });
    my_object.success = function () {
      var wx_res = {
        errMsg: 'setBackgroundFetchToken:ok'
      };
      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_success) {
        wx_complete(wx_res);
      }
    };
  };

  wx.getBackgroundFetchToken = function getBackgroundFetchToken(wx_object) {
    var wx_success = wx_object.success;
    // const quick_fail = my_object.fail
    var wx_complete = wx_object.complete;
    my.getStorage({
      key: 'wx_token',
      success: function success(res) {
        console.log(res.data);
      }
    });
    var my_object = {};
    my_object.success = function () {
      var wx_res = {
        errMsg: 'getBackgroundFetchToken:ok'
      };
      console.log('', wx_res);

      if (wx_success) {
        wx_success(wx_res);
      }
      if (wx_success) {
        wx_complete(wx_res);
      }
    };
  };

  wx.onBackgroundFetchData = function onBackgroundFetchData() {};

  wx.onAccelerometerChange = function onAccelerometerChange(callback) {
    my.onAccelerometerChange(function (res) {
      if (wx._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  };

  wx.offAccelerometerChange = function offAccelerometerChange(callback) {
    my.offAccelerometerChange(function (res) {
      if (wx._stopAccelerometer) {
        return;
      }
      callback(res);
    });
  };

  wx.stopAccelerometer = function stopAccelerometer(wx_object) {
    wx._stopAccelerometer = true;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  wx.startAccelerometer = function startAccelerometer(wx_object) {
    wx._stopAccelerometer = false;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  wx.getBatteryInfoSync = function getBatteryInfoSync(wx_object) {
    return my.getBatteryInfoSync(wx_object);
  };

  wx._getBatteryInfo = function _getBatteryInfo(result) {
    my.getSystemInfo({
      success: function success(res) {
        var percent = res.currentBattery;

        function toPoint(percent) {
          var str = percent.replace('%', '');
          str /= 100;
          return str;
        }
        toPoint(percent);
        var results = toPoint(percent);
        result.level = results;
      }
    });
    return result;
  };

  wx.getBatteryInfo = function getBatteryInfo(wx_object) {
    var my_object = {};
    my_object.success = function () {
      var result = {
        errMsg: 'getBatteryInfo:ok',
        isCharging: false
      };
      result = wx._getBatteryInfo(result);
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.fail) {
        wx_object.fail(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.success) {
        wx_object.success(res);
      }
      if (wx_object.fail) {
        wx_object.fail(res);
      }
    };
    return my.getSystemInfo(my_object);
  };

  //


  wx.getClipboardData = function getClipboardData(wx_object) {
    var my_object = {};
    if (wx_object) {
      my_object.success = function (res) {
        var result = {
          data: res.text
        };
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.fail) {
          wx_object.fail(result);
        }
      };
      my_object.fail = function (res) {
        if (wx_object.success) {
          wx_object.success(res);
        }
        if (wx_object.fail) {
          wx_object.fail(res);
        }
      };
    }
    return my.getClipboard(my_object);
  };

  wx.setClipboardData = function setClipboardData(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      // eslint-disable-next-line guard-for-in
      for (var _iterator = Object.keys(wx_object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var key = _ref;

        switch (key) {
          case 'data':
            my_object.text = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    return my.setClipboard(my_object);
  };

  wx.onCompassChange = function onCompassChange(callback) {
    my.onCompassChange(function (res) {
      if (wx._stopCompass) {
        return;
      }
      callback(res);
    });
  };

  wx.stopCompass = function stopCompass(wx_object) {
    wx._stopCompass = true;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  wx.startCompass = function startCompass(wx_object) {
    wx._stopCompass = false;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  wx.addPhoneContact = function addPhoneContact(wx_object) {
    var my_object = {};
    var errMsg = void 0;
    var result = {
      errMsg: errMsg
    };
    my_object.success = function () {
      result.errMsg = 'addPhoneContact:ok';
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function () {
      result.errMsg = 'addPhoneContact:fail cancel';
      if (wx_object.fail) {
        wx_object.fail(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    return my.addPhoneContact(my_object);
  };

  wx.onGyroscopeChange = function onGyroscopeChange(callback) {
    my.onGyroscopeChange(function (res) {
      if (wx._stopGyroscope) {
        return;
      }
      callback(res);
    });
  };

  wx.stopGyroscope = function stopGyroscope(wx_object) {
    wx._stopGyroscope = true;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  wx.startGyroscope = function startGyroscope(wx_object) {
    wx._startGyroscope = false;
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  //


  wx.onDeviceMotionChange = function onDeviceMotionChange(wx_object) {
    return my.onDeviceMotionChange(wx_object);
  };

  wx.stopDeviceMotionListening = function stopDeviceMotionListening(wx_object) {
    return my.stopDeviceMotionListening(wx_object);
  };

  wx.startDeviceMotionListening = function startDeviceMotionListening(wx_object) {
    return my.startDeviceMotionListening(wx_object);
  };

  //


  wx.getNetworkType = function getNetworkType(wx_object) {
    var my_object = {};
    // eslint-disable-next-line guard-for-in
    for (var _iterator2 = Object.keys(wx_object), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var key = _ref2;

      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    my_object.success = function (res) {
      var result = {
        networkType: wx._network(res).networkType
      };
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };

    return my.getNetworkType(my_object);
  };

  wx._network = function _network(res) {
    var networkType = void 0;
    if (res.networkAvailable) {
      switch (res.networkType) {
        case 'WWAN':
          networkType = 'WIFI';
          break;
        default:
          networkType = res.networkType;
          break;
      }
    } else {
      networkType = 'NONE';
    }
    return {
      isConnected: res.networkAvailable,
      networkType: networkType.toLowerCase()
    };
  };

  wx.onNetworkStatusChange = function onNetworkStatusChange(callack) {
    my.onNetworkStatusChange(function (res) {
      callack(wx._network(res));
    });
  };

  //


  wx.makePhoneCall = function makePhoneCall(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      // eslint-disable-next-line guard-for-in
      for (var _iterator3 = Object.keys(wx_object), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var key = _ref3;

        switch (key) {
          case 'phoneNumber':
            my_object.number = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }

      my.makePhoneCall(my_object);
    }
  };

  wx.scanCode = function scanCode(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator4 = Object.keys(wx_object), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
        var _ref4;

        if (_isArray4) {
          if (_i4 >= _iterator4.length) break;
          _ref4 = _iterator4[_i4++];
        } else {
          _i4 = _iterator4.next();
          if (_i4.done) break;
          _ref4 = _i4.value;
        }

        var key = _ref4;

        switch (key) {
          case 'onlyFromCamera':
            my_object.hideAlbum = wx_object[key];
            break;
          case 'scanType':
            my_object.type = wx_object[key];
            break;
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (res) {
        console.log(res);
        var result = {};
        if (res.code) {
          result.charSet = 'UTF-8';
          result.result = res.code;
          if (res.qrCode) {
            result.scanType = 'QR_CODE';
          } else if (res.barCode) {
            result.scanType = 'EAN_8';
          }
        }
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.complete) {
          wx_object.complete(result);
        }
      };
      my_object.fail = function (res) {
        console.log(res);
        if (wx_object.fail) {
          wx_object.fail(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
    }
    return my.scan(my_object);
  };

  //


  wx.vibrateLong = function vibrateLong(wx_object) {
    var my_object = {};
    my_object.success = function () {
      var result = {
        errMsg: 'vibrateLong:ok'
      };
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    return my.vibrateLong(my_object);
  };

  wx.vibrateShort = function vibrateShort(wx_object) {
    var my_object = {};
    my_object.success = function () {
      var result = {
        errMsg: 'vibrateShort:ok'
      };
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    return my.vibrateShort(my_object);
  };

  //


  wx.onMemoryWarning = function onMemoryWarning(wx_object) {
    return my.onMemoryWarning(wx_object);
  };

  //


  wx.writeBLECharacteristicValue = function writeBLECharacteristicValue(wx_object) {
    return my.writeBLECharacteristicValue(wx_object);
  };

  wx.readBLECharacteristicValue = function readBLECharacteristicValue(wx_object) {
    return my.readBLECharacteristicValue(wx_object);
  };

  wx.onBLEConnectionStateChange = function onBLEConnectionStateChange(wx_object) {
    return my.onBLEConnectionStateChange(wx_object);
  };

  wx.onBLECharacteristicValueChange = function onBLECharacteristicValueChange(wx_object) {
    return my.onBLECharacteristicValueChange(wx_object);
  };

  wx.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange(wx_object) {
    return my.notifyBLECharacteristicValueChange(wx_object);
  };

  wx.getBLEDeviceServices = function getBLEDeviceServices(wx_object) {
    return my.getBLEDeviceServices(wx_object);
  };

  wx.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics(wx_object) {
    return my.getBLEDeviceCharacteristics(wx_object);
  };

  wx.createBLEConnection = function createBLEConnection(wx_object) {
    return my.createBLEConnection(wx_object);
  };

  wx.closeBLEConnection = function closeBLEConnection(wx_object) {
    return my.closeBLEConnection(wx_object);
  };

  //


  wx.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery(wx_object) {
    var my_object = {};
    for (var _iterator5 = Object.keys(wx_object), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref5 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref5 = _i5.value;
      }

      var key = _ref5;

      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.stopBluetoothDevicesDiscovery(my_object);
  };

  wx.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery(wx_object) {
    wx.openBluetoothAdapter(wx_object);
    return my.startBluetoothDevicesDiscovery(wx_object);
  };

  wx.openBluetoothAdapter = function openBluetoothAdapter(wx_object) {
    var my_object = {};
    my_object.success = function () {
      var result = {
        errMsg: 'openBluetoothAdapter:ok'
      };
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.success) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.openBluetoothAdapter(my_object);
  };

  wx.onBluetoothDeviceFound = function onBluetoothDeviceFound(wx_object) {
    return my.onBluetoothDeviceFound(wx_object);
  };

  wx.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange(wx_object) {
    return my.onBluetoothAdapterStateChange(wx_object);
  };

  wx.getConnectedBluetoothDevices = function getConnectedBluetoothDevices(wx_object) {
    return my.getConnectedBluetoothDevices(wx_object);
  };

  wx.getBluetoothDevices = function getBluetoothDevices(wx_object) {
    var my_object = {};
    my_object.success = function () {
      my.getBluetoothDevices({
        success: function success(res) {
          // console.log("000", res)
          // console.log("000", res.devices)
          var result = {
            errMsg: 'closeBluetoothAdapter:ok'
          };
          result.devices = res.devices;
          if (wx_object.success) {
            wx_object.success(result);
          }
          if (wx_object.complete) {
            wx_object.complete(result);
          }
        }
      });
    };
    my_object.fail = function (res) {
      if (wx_object.success) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.getBluetoothDevices(my_object);
  };

  wx.getBluetoothAdapterState = function getBluetoothAdapterState(wx_object) {
    return my.getBluetoothAdapterState(wx_object);
  };

  wx.closeBluetoothAdapter = function closeBluetoothAdapter(wx_object) {
    return my.closeBluetoothAdapter(wx_object);
  };

  //


  wx.stopHCE = function stopHCE(wx_object) {
    return my.stopHCE(wx_object);
  };

  wx.startHCE = function startHCE(wx_object) {
    return my.startHCE(wx_object);
  };

  wx.sendHCEMessage = function sendHCEMessage(wx_object) {
    return my.sendHCEMessage(wx_object);
  };

  wx.onHCEMessage = function onHCEMessage(wx_object) {
    return my.onHCEMessage(wx_object);
  };

  wx.getHCEState = function getHCEState(wx_object) {
    return my.getHCEState(wx_object);
  };

  //


  wx.setScreenBrightness = function setScreenBrightness(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator6 = Object.keys(wx_object), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray6) {
          if (_i6 >= _iterator6.length) break;
          _ref6 = _iterator6[_i6++];
        } else {
          _i6 = _iterator6.next();
          if (_i6.done) break;
          _ref6 = _i6.value;
        }

        var key = _ref6;

        switch (key) {
          case 'value':
            my_object.brightness = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    return my.setScreenBrightness(my_object);
  };

  wx.setKeepScreenOn = function setKeepScreenOn(wx_object) {
    return my.setKeepScreenOn(wx_object);
  };

  wx.onUserCaptureScreen = function onUserCaptureScreen(wx_object) {
    return my.onUserCaptureScreen(wx_object);
  };

  wx.getScreenBrightness = function getScreenBrightness(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator7 = Object.keys(wx_object), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
        var _ref7;

        if (_isArray7) {
          if (_i7 >= _iterator7.length) break;
          _ref7 = _iterator7[_i7++];
        } else {
          _i7 = _iterator7.next();
          if (_i7.done) break;
          _ref7 = _i7.value;
        }

        var key = _ref7;

        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (res) {
      var result = {
        value: res.brightness
      };
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.getScreenBrightness(my_object);
  };

  // ///////////////// Ext //////////////


  wx.getExtConfigSync = function getExtConfigSync(wx_object) {
    return my.getExtConfigSync(wx_object);
  };

  wx.getExtConfig = function getExtConfig(wx_object) {
    return my.getExtConfig(wx_object);
  };

  // ////////////////// File //////////


  wx.getFileSystemManager = function getFileSystemManager(wx_object) {
    return my.getFileSystemManager(wx_object);
  };

  wx.getFileInfo = function getFileInfo(wx_object) {
    return my.getFileInfo(wx_object);
  };

  wx.removeSavedFile = function removeSavedFile(wx_object) {
    return my.removeSavedFile(wx_object);
  };

  wx.getSavedFileInfo = function getSavedFileInfo(wx_object) {
    return my.getSavedFileInfo(wx_object);
  };

  wx.getSavedFileList = function getSavedFileList(wx_object) {
    return my.getSavedFileList(wx_object);
  };

  wx.openDocument = function openDocument(wx_object) {
    return my.openDocument(wx_object);
  };

  wx.saveFile = function saveFile(wx_object) {
    my.saveFile({
      apFilePath: wx_object.tempFilePath,
      success: function success(res) {
        var result = {
          savedFilePath: res.apFilePath
        };
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.complete) {
          wx_object.complete(result);
        }
      },
      fail: function fail(res) {
        if (wx_object.fail) {
          wx_object.fail(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      }
    });
  };

  // ////////// Location ///////////////


  wx.openLocation = function openLocation(wx_object) {
    return my.openLocation(wx_object);
  };

  wx.getLocation = function getLocation(wx_object) {
    return my.getLocation(wx_object);
  };

  wx.chooseLocation = function chooseLocation(wx_object) {
    return my.chooseLocation(wx_object);
  };

  // //////// Media ////////////////////


  wx.createMapContext = function createMapContext(mapId) {
    return new _MapContext2.default(my.createMapContext(mapId), mapId);
  };

  wx.compressImage = function compressImage(wx_object) {
    return my.compressImage(wx_object);
  };

  wx.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(wx_object) {
    return my.saveImageToPhotosAlbum(wx_object);
  };

  wx.getImageInfo = function getImageInfo(wx_object) {
    return my.getImageInfo(wx_object);
  };

  wx.previewImage = function previewImage(wx_object) {
    return my.previewImage(wx_object);
  };

  wx.chooseImage = function chooseImage(wx_object) {
    if (!wx_object.count) {
      wx_object.count = 0;
    }
    my.chooseImage({
      conut: wx_object.count,
      sizeType: wx_object.sizeType,
      sourceType: wx_object.scourceType,
      success: function success(res) {
        var tempFilePaths = [];
        var tempFiles = [];
        for (var _iterator8 = res.apFilePaths, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
          var _ref8;

          if (_isArray8) {
            if (_i8 >= _iterator8.length) break;
            _ref8 = _iterator8[_i8++];
          } else {
            _i8 = _iterator8.next();
            if (_i8.done) break;
            _ref8 = _i8.value;
          }

          var path = _ref8;

          tempFilePaths.push(path);
          tempFiles.push({
            path: path,
            size: 1000000
          });
        }
        var result = {
          tempFilePaths: tempFilePaths,
          tempFiles: tempFiles
        };
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.complete) {
          wx_object.complete(result);
        }
      },
      fail: function fail(res) {
        if (wx_object.fail) {
          wx_object.fail(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      }
    });
  };

  wx.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(wx_object) {
    return my.saveVideoToPhotosAlbum(wx_object);
  };

  wx.chooseVideo = function chooseVideo(wx_object) {
    return my.chooseVideo(wx_object);
  };

  wx.stopVoice = function stopVoice(wx_object) {
    return my.stopVoice(wx_object);
  };

  wx.pauseVoice = function pauseVoice(wx_object) {
    return my.pauseVoice(wx_object);
  };

  wx.playVoice = function playVoice(wx_object) {
    return my.playVoice(wx_object);
  };

  wx.setInnerAudioOption = function setInnerAudioOption(wx_object) {
    return my.setInnerAudioOption(wx_object);
  };

  wx.getAvailableAudioSources = function getAvailableAudioSources(wx_object) {
    return my.getAvailableAudioSources(wx_object);
  };

  wx.createInnerAudioContext = function createInnerAudioContext(wx_object) {
    return my.createInnerAudioContext(wx_object);
  };

  wx.createAudioContext = function createAudioContext(wx_object) {
    return my.createAudioContext(wx_object);
  };

  wx.onBackgroundAudioStop = function onBackgroundAudioStop(wx_object) {
    return my.onBackgroundAudioStop(wx_object);
  };

  wx.onBackgroundAudioPause = function onBackgroundAudioPause(wx_object) {
    return my.onBackgroundAudioPause(wx_object);
  };

  wx.onBackgroundAudioPlay = function onBackgroundAudioPlay(wx_object) {
    return my.onBackgroundAudioPlay(wx_object);
  };

  wx.stopBackgroundAudio = function stopBackgroundAudio(wx_object) {
    return my.stopBackgroundAudio(wx_object);
  };

  wx.seekBackgroundAudio = function seekBackgroundAudio(wx_object) {
    return my.seekBackgroundAudio(wx_object);
  };

  wx.pauseBackgroundAudio = function pauseBackgroundAudio(wx_object) {
    return my.pauseBackgroundAudio(wx_object);
  };

  wx.playBackgroundAudio = function playBackgroundAudio(wx_object) {
    return my.playBackgroundAudio(wx_object);
  };

  wx.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState(wx_object) {
    return my.getBackgroundAudioPlayerState(wx_object);
  };

  wx.getBackgroundAudioManager = function getBackgroundAudioManager(wx_object) {
    return my.getBackgroundAudioManager(wx_object);
  };

  wx.createLivePusherContext = function createLivePusherContext(wx_object) {
    return my.createLivePusherContext(wx_object);
  };

  wx.startRecord = function startRecord(wx_object) {
    return my.startRecord(wx_object);
  };

  wx.stopRecord = function stopRecord(wx_object) {
    return my.stopRecord(wx_object);
  };

  wx.getRecorderManager = function getRecorderManager(wx_object) {
    return my.getRecorderManager(wx_object);
  };

  // ////////////// Network ///////////////


  wx.request = function request(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator9 = Object.keys(wx_object), _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
        var _ref9;

        if (_isArray9) {
          if (_i9 >= _iterator9.length) break;
          _ref9 = _iterator9[_i9++];
        } else {
          _i9 = _iterator9.next();
          if (_i9.done) break;
          _ref9 = _i9.value;
        }

        var key = _ref9;

        switch (key) {
          case 'header':
            my_object.headers = wx_object[key];
            break;
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (res) {
        var result = {
          header: res.headers
        };
        for (var _iterator10 = Object.keys(wx_object), _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
          var _ref10;

          if (_isArray10) {
            if (_i10 >= _iterator10.length) break;
            _ref10 = _iterator10[_i10++];
          } else {
            _i10 = _iterator10.next();
            if (_i10.done) break;
            _ref10 = _i10.value;
          }

          var _key = _ref10;

          switch (_key) {
            case 'status':
              result.statusCode = res[_key];
              break;
            case 'header':
              result.headers = res[_key];
              break;
            default:
              result[_key] = res[_key];
              break;
          }
        }
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.complete) {
          wx_object.complete(result);
        }
      };
      my_object.fail = function (res) {
        if (wx_object.fail) {
          wx_object.fail(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
    }
    return my.httpRequest(my_object);
  };

  wx.downloadFile = function downloadFile(wx_object) {
    return my.downloadFile(wx_object);
  };

  wx.uploadFile = function uploadFile(wx_object) {
    my.uploadFile({
      url: wx_object.url,
      filePath: wx_object.filePath,
      fileName: wx_object.name,
      fileType: 'image',
      header: wx_object.header,
      formData: wx_object.formData,
      success: wx_object.success,
      fail: wx_object.fail,
      complete: wx_object.complete
    });
  };

  //


  wx.connectSocket = function connectSocket(wx_object) {
    return my.connectSocket(wx_object);
  };

  wx.onSocketError = function onSocketError(wx_object) {
    return my.onSocketError(wx_object);
  };

  wx.onSocketMessage = function onSocketMessage(wx_object) {
    return my.onSocketMessage(wx_object);
  };

  wx.onSocketClose = function onSocketClose(wx_object) {
    return my.onSocketClose(wx_object);
  };

  wx.onSocketOpen = function onSocketOpen(wx_object) {
    return my.onSocketOpen(wx_object);
  };

  wx.sendSocketMessage = function sendSocketMessage(wx_object) {
    return my.sendSocketMessage(wx_object);
  };

  wx.closeSocket = function closeSocket(wx_object) {
    return my.closeSocket(wx_object);
  };

  wx.offLocalServiceResolveFail = function offLocalServiceResolveFail(callbck) {
    return my.offLocalServiceResolveFail(callbck);
  };

  wx.onLocalServiceResolveFail = function onLocalServiceResolveFail(callbck) {
    return my.onLocalServiceResolveFail(callbck);
  };

  wx.onLocalServiceDiscoveryStop = function onLocalServiceDiscoveryStop(callbck) {
    return my.onLocalServiceDiscoveryStop(callbck);
  };

  wx.offLocalServiceLost = function offLocalServiceLost(callbck) {
    return my.offLocalServiceLost(callbck);
  };

  wx.onLocalServiceLost = function onLocalServiceLost(callbck) {
    return my.onLocalServiceLost(callbck);
  };

  wx.offLocalServiceFound = function offLocalServiceFound(callbck) {
    return my.offLocalServiceFound(callbck);
  };

  wx.onLocalServiceFound = function onLocalServiceFound(callbck) {
    return my.onLocalServiceFound(callbck);
  };

  wx.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(wx_object) {
    return my.stopLocalServiceDiscovery(wx_object);
  };

  wx.startLocalServiceDiscovery = function startLocalServiceDiscovery(wx_object) {
    return my.startLocalServiceDiscovery(wx_object);
  };

  // /////// Open Interface //////////


  wx._checkSession = function _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  };

  wx.checkSession = function checkSession(wx_object) {
    if (this._checkSession()) {
      if (wx_object.success) {
        wx_object.success();
      }
      if (wx_object.complete) {
        wx_object.complete();
      }
    } else {
      if (wx_object.fail) {
        wx_object.fail();
      }
      if (wx_object.complete) {
        wx_object.complete();
      }
    }

    /*
       let url = getApp().onekitwx.server + "userinfo";
       my.httpRequest({
             url: url,
             header: {
               'Content-Type': 'application/x-www-form-urlencoded'
             },
             method: "POST",
             data: {
               nickname: res.nickName,
               avatarUrl: res.avatar,
               js_code: jscode
             },
             success(res) {
               if (wx_object.success) {
                 wx_object.success(res.data);
               }
               if (wx_object.complete) {
                 wx_object.complete(res.data);
               }
             }, fail(res) {
               console.log(res.data);
             }
           });
     } */
  };

  wx.login = function login() {
    // const that = this
    // if (!wx_object) {
    //   return my.getAuthCode(wx_object)
    // }
    // const my_object = {
    //   scopes: 'auth_user'
    // }
    // my_object.success = function (res) {
    //   getApp().onekitwx._jscode = res.authCode
    //   getApp().onekitwx._login = new Date().getTime()
    //   const result = {code: res.authCode}
    //   if (wx_object.success) {
    //     wx_object.success(result)
    //   }
    //   if (wx_object.complete) {
    //     wx_object.complete(complete)
    //   }
    // }
    // my_object.fail = function (res) {
    //   if (wx_object.fail) {
    //     wx_object.fail(res)
    //   }
    //   if (wx_object.complete) {
    //     wx_object.complete(res)
    //   }
    // }
    // if (wx._checkSession()) {
    //   my_object.success({authCode: getApp().onekitwx._jscode})
    // } else {
    //   my.getAuthCode(my_object)
    // }
  };

  wx.getUserInfo = function getUserInfo(wx_object) {
    wx.login({
      success: function success(res) {
        var jscode = res.code;
        var withCredentials = wx_object.withCredentials;
        my.getAuthUserInfo({
          success: function success(res) {
            console.log(res);
            var url = getApp().onekit.server + 'api/userinfo';
            console.log(url);
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              data: {
                withCredentials: withCredentials === true,
                js_code: jscode
              },
              success: function success(res) {
                console.log(res.data);
                if (wx_object.success) {
                  wx_object.success(res.data);
                }
                if (wx_object.complete) {
                  wx_object.complete(res.data);
                }
              },
              fail: function fail(res) {
                console.log(res.data);
              }
            });
          }
        });
      }
    });
  };

  wx.getOpenData = function getOpenData(wx_object) {
    if (!getApp().onekit._opendataCallbacks) {
      getApp().onekit._opendataCallbacks = [];
    }

    function _success(res) {
      var opendata = res.userInfo;
      getApp().onekit._opendata = opendata;
      for (var cb = 0; cb < getApp().onekit._opendataCallbacks.length; cb++) {
        getApp().onekit._opendataCallbacks[cb](opendata);
      }
      if (wx_object.success) {
        wx_object.success(opendata);
      }
      if (wx_object.complete) {
        wx_object.complete(opendata);
      }
    }
    var opendata = getApp().onekit._opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        wx_object.success(opendata);
      } else if (wx_object.success) {
        getApp().onekit._opendataCallbacks.push(wx_object.success);
      }
      return;
    }
    getApp().onekit._opendata = {};
    wx.login({
      success: function success(res) {
        var jscode = res.code;
        my.getAuthUserInfo({
          success: function success(res) {
            var url = getApp().onekit.server + 'opendata';
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              data: {
                nickname: res.nickName,
                avatarUrl: res.avatar,
                js_code: jscode
              },
              success: function success(res) {
                _success(res.data);
              },
              fail: function fail(res) {
                console.log(res);
              }
            });
          }
        });
      }
    });
  };

  wx.getPhoneNumber = function getPhoneNumber(wx_object) {
    wx.login({
      success: function success(res) {
        var jscode = res.code;
        console.log('ssss' + jscode);
        my.getPhoneNumber({
          success: function success(res) {
            // let response = {
            // response:
            // "ZOELfBOrmRHNNiiVR4FmNrvV7Dmog5w/KFaNrfLugkDqdkPzlxBCzmfLBrtQlPptWix+1f9I07p5xNfwGgTgVA==",
            // sign:
            // "fD6CyFQeJTTgtM1uviy5uAm4YWiN3s0crGtD1v5XdXuDzFEBPTRYqGODcfzskAMFWNXJAK5Zx0/kk+6e9tn/N3U9RcrTgc6VLw7HM9fPTcz8CzVl1+b6fjsi0wWsADF53vKTurFn6HTSTEJvzbMMD5M2lgazni72tZHCNJSkeG1W+kjX/Mj5tfJXNkn6nlrtu1N6BxgsZdgDdkMQfIrWv2TOFlpx043LMBmk4CxXLpGvRfRcHLjixs5wEO1dfqENn6oj9hAQbPA8itYW4TvGlo5qhnzT+ya1rWcKrjn4zh7uvnr0hB0oPiqLu17txS5uIQIF0DJ2cC0k6kuOQLVwTQ=="
            // }
            // JSON.parse(res.response);
            var response = JSON.parse(res.response);
            console.log(response);
            var url = getApp().onekit.server + 'phonenumber';
            my.httpRequest({
              url: url,
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              method: 'POST',
              data: {
                response: response.response,
                sign: response.sign,
                js_code: jscode
              },
              success: function success(res) {
                var data = res.data;
                if (wx_object.success) {
                  wx_object.success(data);
                }
                if (wx_object.complete) {
                  wx_object.complete(data);
                }
              },
              fail: function fail(res) {
                console.log(res.data);
              }
            });
          }
        });
      }
    });
  };

  wx.navigateToMiniProgram = function navigateToMiniProgram(wx_object) {
    return my.navigateToMiniProgram(wx_object);
  };

  wx.navigateBackMiniProgram = function navigateBackMiniProgram(wx_object) {
    return my.navigateBackMiniProgram(wx_object);
  };

  wx.getAccountInfoSync = function getAccountInfoSync(wx_object) {
    return my.getAccountInfoSync(wx_object);
  };

  wx.reportMonitor = function reportMonitor(wx_object) {
    return my.reportMonitor(wx_object);
  };

  wx.reportAnalytics = function reportAnalytics(wx_object) {
    return my.reportAnalytics(wx_object);
  };

  wx.requestPayment = function requestPayment(wx_object) {
    var tradeNO = wx_object.package.split('=')[1];
    console.log(tradeNO);
    var my_object = {
      tradeNO: tradeNO,
      success: wx_object.success,
      fail: wx_object.fail,
      complete: wx_object.complete
    };
    return my.tradePay(my_object);
  };

  wx.authorize = function authorize(wx_object) {
    return my.authorize(wx_object);
  };

  wx.openSetting = function openSetting(wx_object) {
    return my.openSetting(wx_object);
  };

  wx.getSetting = function getSetting(wx_object) {
    return my.getSetting(wx_object);
  };

  wx.chooseAddress = function chooseAddress(wx_object) {
    return my.chooseAddress(wx_object);
  };

  wx.openCard = function openCard(wx_object) {
    my.openCardList();
    if (wx_object.success) {
      wx_object.success();
    }
    if (wx_object.complete) {
      wx_object.complete();
    }
  };

  wx.addCard = function addCard(wx_object) {
    var url = getApp().onekit.server + 'addcard';
    my.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        cardList: JSON.stringify(wx_object.cardList),
        js_code: wx_object.jscode
      },
      success: function success(res) {
        var data = res.data;
        if (wx_object.success) {
          wx_object.success(data);
        }
        if (wx_object.complete) {
          wx_object.complete(data);
        }
      },
      fail: function fail(res) {
        console.log(res.data);
      }
    });
  };

  wx.chooseInvoiceTitle = function chooseInvoiceTitle(wx_object) {
    return my.chooseInvoiceTitle(wx_object);
  };

  wx.chooseInvoice = function chooseInvoice(wx_object) {
    return my.chooseInvoice(wx_object);
  };

  wx.startSoterAuthentication = function startSoterAuthentication(wx_object) {
    return my.startSoterAuthentication(wx_object);
  };

  wx.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication(wx_object) {
    return my.checkIsSupportSoterAuthentication(wx_object);
  };

  wx.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice(wx_object) {
    return my.checkIsSoterEnrolledInDevice(wx_object);
  };

  wx.getWeRunData = function getWeRunData(wx_object) {
    return my.getWeRunData(wx_object);
  };

  // //////// Router //////////////


  wx.navigateBack = function navigateBack(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator11 = Object.keys(wx_object), _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
        var _ref11;

        if (_isArray11) {
          if (_i11 >= _iterator11.length) break;
          _ref11 = _iterator11[_i11++];
        } else {
          _i11 = _iterator11.next();
          if (_i11.done) break;
          _ref11 = _i11.value;
        }

        var key = _ref11;

        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (result) {
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.complete) {
          wx_object.complete(result);
        }
      };
      my_object.fail = function (res) {
        if (wx_object.fail) {
          wx_object.success(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
    }
    return my.navigateBack(my_object);
  };

  wx.switchTab = function switchTab(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator12 = Object.keys(wx_object), _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
        var _ref12;

        if (_isArray12) {
          if (_i12 >= _iterator12.length) break;
          _ref12 = _iterator12[_i12++];
        } else {
          _i12 = _iterator12.next();
          if (_i12.done) break;
          _ref12 = _i12.value;
        }

        var key = _ref12;

        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (result) {
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.switchTab(my_object);
  };

  wx.navigateTo = function navigateTo(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator13 = Object.keys(wx_object), _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
        var _ref13;

        if (_isArray13) {
          if (_i13 >= _iterator13.length) break;
          _ref13 = _iterator13[_i13++];
        } else {
          _i13 = _iterator13.next();
          if (_i13.done) break;
          _ref13 = _i13.value;
        }

        var key = _ref13;

        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (result) {
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.navigateTo(my_object);
  };

  wx.reLaunch = function reLaunch(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator14 = Object.keys(wx_object), _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
        var _ref14;

        if (_isArray14) {
          if (_i14 >= _iterator14.length) break;
          _ref14 = _iterator14[_i14++];
        } else {
          _i14 = _iterator14.next();
          if (_i14.done) break;
          _ref14 = _i14.value;
        }

        var key = _ref14;

        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (result) {
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.reLaunch(my_object);
  };

  wx.redirectTo = function redirectTo(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator15 = Object.keys(wx_object), _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
        var _ref15;

        if (_isArray15) {
          if (_i15 >= _iterator15.length) break;
          _ref15 = _iterator15[_i15++];
        } else {
          _i15 = _iterator15.next();
          if (_i15.done) break;
          _ref15 = _i15.value;
        }

        var key = _ref15;

        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    my_object.success = function (result) {
      if (wx_object.success) {
        wx_object.success(result);
      }
      if (wx_object.complete) {
        wx_object.complete(result);
      }
    };
    my_object.fail = function (res) {
      if (wx_object.fail) {
        wx_object.success(res);
      }
      if (wx_object.complete) {
        wx_object.complete(res);
      }
    };
    return my.redirectTo(my_object);
  };

  // /////////// Share /////////////


  wx.updateShareMenu = function updateShareMenu(wx_object) {
    return my.updateShareMenu(wx_object);
  };

  wx.showShareMenu = function showShareMenu() {
    my.navigateTo({
      url: '/wx/page/share/share'
    });
  };

  wx.hideShareMenu = function hideShareMenu(wx_object) {
    return my.hideShareMenu(wx_object);
  };

  wx.getShareInfo = function getShareInfo(wx_object) {
    return my.getShareInfo(wx_object);
  };

  // ///////////// Storage //////////////


  wx.getStorageInfoSync = function getStorageInfoSync(wx_object) {
    return my.getStorageInfoSync(wx_object);
  };

  wx.getStorageInfo = function getStorageInfo(wx_object) {
    return my.getStorageInfo(wx_object);
  };

  wx.clearStorageSync = function clearStorageSync(wx_object) {
    return my.clearStorageSync(wx_object);
  };

  wx.clearStorage = function clearStorage(wx_object) {
    return my.clearStorage(wx_object);
  };

  wx.removeStorageSync = function removeStorageSync(wx_object) {
    return my.removeStorageSync(wx_object);
  };

  wx.removeStorage = function removeStorage(wx_object) {
    return my.removeStorage(wx_object);
  };

  wx.setStorageSync = function setStorageSync(key, value) {
    return my.setStorageSync({
      key: key,
      data: value
    });
  };

  wx.setStorage = function setStorage(wx_object) {
    return my.setStorage(wx_object);
  };

  wx.getStorageSync = function getStorageSync(key) {
    var result = my.getStorageSync({
      key: key
    });
    if (!result) {
      return '';
    } else if (result.data) {
      return result.data;
    } else if (result.APDataStorage) {
      return result.APDataStorage;
    } else {
      return '';
    }
  };

  wx.getStorage = function getStorage(wx_object) {
    return my.getStorage(wx_object);
  };

  // //////////// UI ////////////////


  wx.showActionSheet = function showActionSheet(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      my_object = {};
      for (var _iterator16 = Object.keys(wx_object), _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
        var _ref16;

        if (_isArray16) {
          if (_i16 >= _iterator16.length) break;
          _ref16 = _iterator16[_i16++];
        } else {
          _i16 = _iterator16.next();
          if (_i16.done) break;
          _ref16 = _i16.value;
        }

        var key = _ref16;

        switch (key) {
          case 'itemList':
            my_object.items = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
      my_object.success = function (res) {
        var result = {
          tapIndex: res.index
        };
        if (wx_object.success) {
          wx_object.success(result);
        }
        if (wx_object.complete) {
          wx_object.complete(result);
        }
      };
    }
    return my.showActionSheet(my_object);
  };

  // static redirectTo(wx_object) { return my.redirectTo(wx_object); }
  // static redirectTo(wx_object) { return my.redirectTo(wx_object); }


  wx.hideLoading = function hideLoading(wx_object) {
    return my.hideLoading(wx_object);
  };

  wx.showLoading = function showLoading(wx_object) {
    var my_object = void 0;
    if (wx_object) {
      if (!wx_object.icon) {
        wx_object.icon = 'success';
      }
      //
      my_object = {};
      for (var _iterator17 = Object.keys(wx_object), _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
        var _ref17;

        if (_isArray17) {
          if (_i17 >= _iterator17.length) break;
          _ref17 = _iterator17[_i17++];
        } else {
          _i17 = _iterator17.next();
          if (_i17.done) break;
          _ref17 = _i17.value;
        }

        var key = _ref17;

        switch (key) {
          case 'title':
            my_object.content = wx_object[key];
            break;
          case 'icon':
            my_object.type = wx_object[key];
            break;
          default:
            my_object[key] = wx_object[key];
            break;
        }
      }
    }
    return my.showLoading(my_object);
  };

  wx.hideToast = function hideToast(wx_object) {
    var my_object = {};
    for (var _iterator18 = Object.keys(wx_object), _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
      var _ref18;

      if (_isArray18) {
        if (_i18 >= _iterator18.length) break;
        _ref18 = _iterator18[_i18++];
      } else {
        _i18 = _iterator18.next();
        if (_i18.done) break;
        _ref18 = _i18.value;
      }

      var key = _ref18;

      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.hideToast(my_object);
  };

  wx.showToast = function showToast(wx_object) {
    if (!wx_object) {
      return;
    }
    var wx_title = wx_object.title; // 必填项 现实的文本
    var wx_icon = wx_object.icon || 'success'; // 图片
    // const wx_image = wx_object.image
    var wx_duration = wx_object.duration || 1500; // 间隔时长
    // const wx_mask = wx_object.mask
    var wx_success = wx_object.success;
    var wx_fail = wx_object.fail;
    var wx_complete = wx_object.complete;
    wx_object = null;
    var my_object = {};
    if (wx_title) {
      my_object.content = wx_title;
    }
    if (wx_icon) {
      my_object.type = wx_icon;
    }
    if (wx_duration) {
      my_object.duration = wx_duration;
    }
    // ////////////
    my_object.success = function (my_res) {
      if (wx_success) {
        wx_success(my_res);
      }
      if (wx_complete) {
        wx_complete(my_res);
      }
    };
    my_object.fail = function (my_res) {
      if (wx_fail) {
        wx_fail(my_res);
      }
      if (wx_complete) {
        wx_complete(my_res);
      }
    };
    my.showToast(my_object);
  };

  wx.showModal = function showModal(my_object) {
    if (my_object === null) {
      return my.confirm();
    }
    var wx_object = {};
    var key = void 0;
    if (my_object.showCancel === null || my_object.showCancel) {
      for (var _iterator19 = Object.keys(my_object), _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
        if (_isArray19) {
          if (_i19 >= _iterator19.length) break;
          key = _iterator19[_i19++];
        } else {
          _i19 = _iterator19.next();
          if (_i19.done) break;
          key = _i19.value;
        }

        switch (key) {
          case 'cancelText':
            wx_object.cancelButtonText = my_object[key];
            break;
          case 'confirmText':
            wx_object.confirmButtonText = my_object[key];
            break;
          default:
            wx_object[key] = my_object[key];
            break;
        }
      }

      return my.confirm(wx_object);
    } else {
      for (var _iterator20 = Object.keys(my_object), _isArray20 = Array.isArray(_iterator20), _i20 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
        if (_isArray20) {
          if (_i20 >= _iterator20.length) break;
          key = _iterator20[_i20++];
        } else {
          _i20 = _iterator20.next();
          if (_i20.done) break;
          key = _i20.value;
        }

        switch (key) {
          default:
            wx_object[key] = my_object[key];
            break;
        }
      }

      return my.alert(wx_object);
    }
  };

  wx.setNavigationBarColor = function setNavigationBarColor(wx_object) {
    return my.setNavigationBarColor(wx_object);
  };

  wx.hideNavigationBarLoading = function hideNavigationBarLoading(wx_object) {
    var my_object = {};
    for (var _iterator21 = Object.keys(wx_object), _isArray21 = Array.isArray(_iterator21), _i21 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
      var _ref19;

      if (_isArray21) {
        if (_i21 >= _iterator21.length) break;
        _ref19 = _iterator21[_i21++];
      } else {
        _i21 = _iterator21.next();
        if (_i21.done) break;
        _ref19 = _i21.value;
      }

      var key = _ref19;

      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.hideNavigationBarLoading(my_object);
  };

  wx.showNavigationBarLoading = function showNavigationBarLoading(wx_object) {
    var my_object = {};
    for (var _iterator22 = Object.keys(wx_object), _isArray22 = Array.isArray(_iterator22), _i22 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
      var _ref20;

      if (_isArray22) {
        if (_i22 >= _iterator22.length) break;
        _ref20 = _iterator22[_i22++];
      } else {
        _i22 = _iterator22.next();
        if (_i22.done) break;
        _ref20 = _i22.value;
      }

      var key = _ref20;

      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          my_object[key] = wx_object[key];
          break;
      }
    }
    return my.showNavigationBarLoading(my_object);
  };

  wx.setNaivgationBarTitle = function setNaivgationBarTitle(wx_object) {
    return my.setNavigationBar(wx_object);
  };

  wx.setBackgroundTextStyle = function setBackgroundTextStyle(wx_object) {
    return my.setBackgroundTextStyle(wx_object);
  };

  wx.setBackgroundColor = function setBackgroundColor(wx_object) {
    return my.setBackgroundColor(wx_object);
  };

  wx.setTabBarItem = function setTabBarItem(wx_object) {
    return my.setTabBarItem(wx_object);
  };

  wx.setTabBarStyle = function setTabBarStyle(wx_object) {
    return my.setTabBarStyle(wx_object);
  };

  wx.hideTabBar = function hideTabBar(wx_object) {
    return my.hideTabBar(wx_object);
  };

  wx.showTabBar = function showTabBar(wx_object) {
    return my.showTabBar(wx_object);
  };

  wx.hideTabBarRedDot = function hideTabBarRedDot(wx_object) {
    return my.hideTabBarRedDot(wx_object);
  };

  wx.showTabBarRedDot = function showTabBarRedDot(wx_object) {
    return my.showTabBarRedDot(wx_object);
  };

  wx.removeTabBarBadge = function removeTabBarBadge(wx_object) {
    return my.removeTabBarBadge(wx_object);
  };

  wx.setTabBarBadge = function setTabBarBadge(wx_object) {
    return my.setTabBarBadge(wx_object);
  };

  wx.loadFontFace = function loadFontFace(wx_object) {
    return my.loadFontFace(wx_object);
  };

  wx.stopPullDownRefresh = function stopPullDownRefresh(wx_object) {
    var my_object = {};
    if (wx_object) {
      my_object.success = function (res) {
        if (wx_object.success) {
          wx_object.success(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
      my_object.fail = function (res) {
        if (wx_object.fail) {
          wx_object.fail(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
    }
    return my.stopPullDownRefresh(my_object);
  };

  wx.startPullDownRefresh = function startPullDownRefresh(wx_object) {
    var my_object = {};
    if (wx_object) {
      my_object.success = function (res) {
        if (wx_object.success) {
          wx_object.success(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
      my_object.fail = function (res) {
        if (wx_object.fail) {
          wx_object.fail(res);
        }
        if (wx_object.complete) {
          wx_object.complete(res);
        }
      };
    }
    return my.startPullDownRefresh(my_object);
  };

  wx.pageScrollTo = function pageScrollTo(wx_object) {
    return my.pageScrollTo(wx_object);
  };

  wx.setTopBarText = function setTopBarText(wx_object) {
    return my.setTopBarText(wx_object);
  };

  wx.nextTick = function nextTick(wx_object) {
    return my.nextTick(wx_object);
  };

  wx.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(wx_object) {
    return my.getMenuButtonBoundingClientRect(wx_object);
  };

  wx.offWindowResize = function offWindowResize(wx_object) {
    return my.offWindowResize(wx_object);
  };

  wx.onWindowResize = function onWindowResize(wx_object) {
    return my.onWindowResize(wx_object);
  };

  // //////////// Worker ///////////////


  wx.createWorker = function createWorker(wx_object) {
    return my.createWorker(wx_object);
  };

  wx.createIntersectionObserver = function createIntersectionObserver(wx_object) {
    return my.createIntersectionObserver(wx_object);
  };

  // ///////////////////////////////////


  wx.hideKeyboard = function hideKeyboard(wx_object) {
    return my.hideKeyboard(wx_object);
  };

  // /////////// cloud ////////////////


  _createClass(wx, null, [{
    key: 'cloud',
    get: function get() {
      return null;
    }
  }]);

  return wx;
}();

exports.default = wx;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("oneutil");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */

var VideoContext = function () {
  function VideoContext(alipayVideoContext, id) {
    _classCallCheck(this, VideoContext);

    this.alipayVideoContext = alipayVideoContext;
    this.id = id;
  }

  VideoContext.prototype.play = function play() {
    return this.alipayVideoContext.play();
  };

  VideoContext.prototype.pause = function pause() {
    return this.alipayVideoContext.pause();
  };

  VideoContext.prototype.stop = function stop() {
    return this.alipayVideoContext.stop();
  };

  VideoContext.prototype.seek = function seek(position) {
    return this.alipayConvasContext.seek(position);
  };

  //


  VideoContext.prototype.sendDanmu = function sendDanmu(data) {
    var video = getApp().onekit_nodes[this.id];
    video.sendDanmu(data);
  };

  VideoContext.prototype.playbackRate = function playbackRate() {};

  VideoContext.prototype.requestFullScreen = function requestFullScreen(direction) {
    return this.alipayConvasContext.requestFullScreen(direction);
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen();
  };

  //


  VideoContext.prototype.showStatusBar = function showStatusBar() {};

  VideoContext.prototype.hideStatusBar = function hideStatusBar() {};

  VideoContext.prototype.exitPictureInPicture = function exitPictureInPicture() {};

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.GLOBAL = exports.wx = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(52);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(53);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(54);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(55);
exports.OnekitPage = OnekitPage_1.default;
var wx_1 = __webpack_require__(3);
exports.wx = wx_1.default;
var global_1 = __webpack_require__(56);
exports.GLOBAL = global_1.default;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable no-console */
/* eslint-disable camelcase */

function OnekitApp(wx_object) {
  var my_object = {
    onekit_nodes: {},
    onLaunch: function onLaunch() {
      my.onError(function (my_error) {
        console.error('[my.onError]', my_error);
        var wx_error = my_error;
        if (getApp().onekit_onError) {
          getApp().onekit_onError(wx_error);
        }
        if (wx_object.onError) {
          wx_object.onError(wx_error);
        }
      });
      //

      // 小程序不支持
      // my.onPageNotFound(function (my_error) {
      //   var wx_error = my_error;
      //   if (getApp().onekit_onPageNotFound) {
      //     getApp().onekit_onPageNotFound(wx_error);
      //   }
      //   if (wx_object.onPageNotFound) {
      //     wx_object.onPageNotFound(wx_error);
      //   }
      // });
      // /////////////////
      if (wx_object.onLaunch) {
        wx_object.onLaunch();
      }
    },
    onShow: function onShow() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow();
      }
      if (wx_object.onShow) {
        wx_object.onShow();
      }
    },
    onHide: function onHide() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow();
      }
      if (wx_object.onHide) {
        wx_object.onHide();
      }
    },
    onError: function onError() {
      if (wx_object.onError) {
        wx_object.onError();
      }
    }
  };
  for (var _iterator = Object.keys(wx_object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var member = wx_object[key];
    switch (key) {
      case 'onLaunch':
      case 'onShow':
      case 'onHide':
      case 'onError':
      case 'onPageNotFound':
      case 'onUnhandledRejection':
      case 'onThemeChange':
        break;
      default:
        my_object[key] = member;
        break;
    }
  }
  return App(my_object);
}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _oneutil = __webpack_require__(4);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _wx = __webpack_require__(3);

var _wx2 = _interopRequireDefault(_wx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitBehavior(object) {
  var wx_object = {
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _oneutil2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _wx2.default.createSelectorQuery;
  }
  for (var _iterator = Object.keys(object), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref = _i.value;
    }

    var key = _ref;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        wx_object.props = {};
        for (var _iterator2 = Object.keys(value), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
          var _ref2;

          if (_isArray2) {
            if (_i2 >= _iterator2.length) break;
            _ref2 = _iterator2[_i2++];
          } else {
            _i2 = _iterator2.next();
            if (_i2.done) break;
            _ref2 = _i2.value;
          }

          var p = _ref2;

          var v = value[p];
          wx_object.props[p] = v && v.value ? v.value : null;
        }
        break;
      default:
        wx_object[key] = value;
    }
  }

  return wx_object;
}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;

var _oneutil = __webpack_require__(4);

var _oneutil2 = _interopRequireDefault(_oneutil);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _wx = __webpack_require__(3);

var _wx2 = _interopRequireDefault(_wx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OnekitComponent(object) {
  var properties = {};
  var wx_object = {
    mixins: [_wxs_behavior2.default],
    data: function data() {
      '';
    },
    onInit: function onInit(query) {
      var created = void 0;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function created() {};
      }
      created.call(this, query);
    },
    didMount: function didMount() {
      for (var _iterator = Object.keys(this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var k = _ref;

        var v = this.props[k];
        properties[k] = v;
        this.data[k] = v;
      }
      var attached = void 0;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function attached() {};
      }
      attached.call(this);
      // //////
      var ready = void 0;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function ready() {};
      }
      ready.call(this);
    },
    didUnmount: function didUnmount() {
      var detached = void 0;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function detached() {};
      }
      detached.call(this);
    },

    methods: {
      get properties() {
        return properties;
      }

    }
  };
  if (object) {
    if (!object.methods) {
      object.methods = {};
    }
    object.methods.triggerEvent = function (name, data) {
      var funcName = 'on' + _oneutil2.default.firstUpper(name);
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    };
    object.methods.createSelectorQuery = _wx2.default.createSelectorQuery;
  }
  for (var _iterator2 = Object.keys(object), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref2 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref2 = _i2.value;
    }

    var key = _ref2;

    var value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case 'properties':
        wx_object.props = {};
        for (var _iterator3 = Object.keys(value), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
          var _ref3;

          if (_isArray3) {
            if (_i3 >= _iterator3.length) break;
            _ref3 = _iterator3[_i3++];
          } else {
            _i3 = _iterator3.next();
            if (_i3.done) break;
            _ref3 = _i3.value;
          }

          var k = _ref3;

          var p = value[k];
          var v = p && p.value ? p.value : null;
          wx_object.props[k] = v;
          properties[k] = v;
        }
        break;
      case 'methods':
        for (var _iterator4 = Object.keys(value), _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var _k = _ref4;

          wx_object.methods[_k] = value[_k];
        }
        break;
      case 'data':
        for (var _iterator5 = Object.keys(value), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
          var _ref5;

          if (_isArray5) {
            if (_i5 >= _iterator5.length) break;
            _ref5 = _iterator5[_i5++];
          } else {
            _i5 = _iterator5.next();
            if (_i5.done) break;
            _ref5 = _i5.value;
          }

          var _k2 = _ref5;

          wx_object.data[_k2] = value[_k2];
        }
        break;
      case 'behaviors':
        wx_object.mixins = value;
        break;
      default:
        wx_object[key] = value;
        break;
    }
  }
  return Component(wx_object);
} /* eslint-disable camelcase */

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable no-console */
/* eslint-disable camelcase */
function OnekitPage(wx_object) {
  var my_object = {
    events: {
      onKeyboardHeight: function onKeyboardHeight(e) {
        for (var _iterator = getApp().onekit_onKeyboardHeight, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var onKeyboardHeight = _ref;

          onKeyboardHeight(e);
        }
      }
    },
    onLoad: function onLoad(query) {
      if (!getApp().onekit_onKeyboardHeight) {
        getApp().onekit_onKeyboardHeight = [];
      }
      this.query = query;
    },
    onReady: function onReady() {
      if (wx_object.onLoad) {
        wx_object.onLoad.call(this, this.query);
      }
      if (wx_object.onReady) {
        wx_object.onReady.call(this);
      }
    },
    animate: function animate() {},
    selectComponent: function selectComponent(selector) {
      // selector = selector.replace(".","$");
      // selector = selector.replace("-","_");
      for (var _iterator2 = Object.keys(this), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var key = _ref2;

        if (key.indexOf(selector) >= 0) {
          return this[key];
        }
      }
      return null;
    },
    selectAllComponents: function selectAllComponents(selector) {
      //  selector = selector.replace(".","$");
      //   selector = selector.replace("-","_");
      for (var _iterator3 = Object.keys(this), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
        var _ref3;

        if (_isArray3) {
          if (_i3 >= _iterator3.length) break;
          _ref3 = _iterator3[_i3++];
        } else {
          _i3 = _iterator3.next();
          if (_i3.done) break;
          _ref3 = _i3.value;
        }

        var key = _ref3;

        if (key.indexOf(selector) >= 0) {
          return [this[key]];
        }
      }
      return [];
    }
  };
  if (wx_object.behaviors) {
    for (var _iterator4 = wx_object.behaviors, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var behavior = _ref4;

      for (var _iterator5 = Object.keys(behavior), _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref5;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref5 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref5 = _i5.value;
        }

        var behavior_key = _ref5;

        var behavior_value = behavior[behavior_key];
        switch (behavior_key) {
          case 'methods':
            for (var _iterator6 = Object.keys(behavior_value), _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
              var _ref6;

              if (_isArray6) {
                if (_i6 >= _iterator6.length) break;
                _ref6 = _iterator6[_i6++];
              } else {
                _i6 = _iterator6.next();
                if (_i6.done) break;
                _ref6 = _i6.value;
              }

              var method_key = _ref6;

              var method = behavior_value[method_key];
              my_object[method_key] = method;
            }
            break;
          default:
            my_object[behavior_key] = behavior_value;
            break;
        }
      }
    }
  }
  for (var _iterator7 = Object.keys(wx_object), _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
    var _ref7;

    if (_isArray7) {
      if (_i7 >= _iterator7.length) break;
      _ref7 = _iterator7[_i7++];
    } else {
      _i7 = _iterator7.next();
      if (_i7.done) break;
      _ref7 = _i7.value;
    }

    var key = _ref7;

    var value = wx_object[key];
    switch (key) {
      case 'behaviors':
        break;
      case 'onLoad':
        break;
      default:
        my_object[key] = value;
        break;
    }
  }
  return Page(my_object);
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var global = function () {
  function global() {
    _classCallCheck(this, global);
  }

  global.btoa = function (_btoa) {
    function btoa() {
      return _btoa.apply(this, arguments);
    }

    btoa.toString = function () {
      return _btoa.toString();
    };

    return btoa;
  }(function () {
    // eslint-disable-next-line no-undef
    return btoa();
  });

  _createClass(global, null, [{
    key: "isDemo",
    get: function get() {
      return false;
    }
  }]);

  return global;
}();

exports.default = global;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CameraContext = function () {
  function CameraContext(myCameraContext) {
    _classCallCheck(this, CameraContext);

    this.myCameraContext = myCameraContext;
  }

  CameraContext.prototype.takePhoto = function takePhoto(object) {
    return this.myCameraContext.takePhoto(object);
  };

  CameraContext.prototype.startRecord = function startRecord(object) {
    return this.myCameraContext.startRecord(object);
  };

  CameraContext.prototype.stopRecord = function stopRecord(object) {
    return this.myCameraContext.stopRecord(object);
  };

  CameraContext.prototype.onCameraFrame = function onCameraFrame(callback) {
    return this.myCameraContext.onCameraFrame(callback);
  };

  return CameraContext;
}();

exports.default = CameraContext;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _NodesRef = __webpack_require__(8);

var _NodesRef2 = _interopRequireDefault(_NodesRef);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable no-console */
/* eslint-disable camelcase */


// import VideoContext from './VideoContext'

function _fix(selector) {
  if (selector.startsWith('#')) {
    return '_' + selector.substring(1);
  } else if (selector.startsWith('.')) {
    return '__' + selector.substring(1);
  } else {
    throw new Error(selector);
  }
}

var SelectorQuery = function () {
  function SelectorQuery() {
    _classCallCheck(this, SelectorQuery);

    this.tasks = [];
  }

  SelectorQuery.prototype.in = function _in() {
    return this;
  };

  SelectorQuery.prototype.select = function select(selector) {
    return new _NodesRef2.default(this, 'select', selector);
  };

  SelectorQuery.prototype.selectAll = function selectAll() {
    return new _NodesRef2.default(this, 'selectAll');
  };

  SelectorQuery.prototype.selectViewport = function selectViewport() {
    return new _NodesRef2.default(this, 'selectViewport');
  };

  SelectorQuery.prototype.exec = function exec(callback) {
    var that = this;
    var results = [];
    var i = 0;

    function done(nodeRef, res) {
      if (nodeRef.callback) {
        nodeRef.callback(res);
      }
      results.push(res);
      if (results.length < that.tasks.length) {
        i++;
        // eslint-disable-next-line no-use-before-define
        next();
        return;
      }
      callback(results);
    }

    function next() {
      var task = that.tasks[i];
      var aliapySelectQuery = my.createSelectorQuery();
      var nodeRef = task.nodeRef;
      var alipayNodeRef = void 0;
      switch (nodeRef.cmd) {
        case 'select':
          alipayNodeRef = aliapySelectQuery.select(nodeRef.selector);
          break;
        case 'selectAll':
          alipayNodeRef = aliapySelectQuery.selectAll();
          break;
        case 'selectViewport':
          alipayNodeRef = aliapySelectQuery.selectViewport();
          break;
        default:
          throw new Error(task.cmd);
      }
      switch (task.type) {
        case 'boundingClientRect':
          alipayNodeRef.boundingClientRect().exec(function (my_reses) {
            return done(nodeRef, my_reses[0]);
          });
          break;
        case 'context':
          {
            var node = getApp().onekit_nodes[_fix(nodeRef.selector)];
            // const id = node.props.onekitId
            /* let context
            switch (node.is) {
              case '/weixin2alipay/ui/canvas/canvas':
                context = my.createCanvasContext(id)
                break
              case '/weixin2alipay/ui/video/video':
                context = new VideoContext(my.createVideoContext(id), id)
                break
              default:
                throw new Error(node.is)
            } */
            var context = node.getContext();
            done(nodeRef, context);
          }
          break;
        case 'fields':
          alipayNodeRef.boundingClientRect().exec(function (my_reses) {
            var my_res = my_reses[0];
            var wx_res = {};
            if (nodeRef.fields.size) {
              wx_res.width = my_res.width;
              wx_res.height = my_res.height;
            }
            if (nodeRef.fields.node && nodeRef.selector) {
              // console.log('node', nodeRef.selector, getApp().onekit_nodes)
              wx_res.node = getApp().onekit_nodes[_fix(nodeRef.selector)];
            }
            done(nodeRef, wx_res);
          });
          break;
        case 'node':
          done(nodeRef, getApp().onekit_nodes[_fix(nodeRef.selector)]);
          break;
        case 'scrollOffset':
          alipayNodeRef.scrollOffset().exec(function (my_reses) {
            var my_res = my_reses[0];
            var wx_res = {
              id: nodeRef.selector,
              dataset: {},
              scrollLeft: my_res.scrollLeft,
              scrollTop: my_res.scrollTop,
              scrollWidth: my_res.scroll,
              scrollHeight: my_res.scrollHeight
            };
            done(nodeRef, wx_res);
          });
          break;
        default:
          throw new Error(task.type);
      }
    }
    next();
  };

  return SelectorQuery;
}();

exports.default = SelectorQuery;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable camelcase */
var NodesRef = function () {
  function NodesRef(weixinSelectQuery, cmd, selector) {
    _classCallCheck(this, NodesRef);

    this._selectQuery = weixinSelectQuery;
    this.cmd = cmd;
    this.selector = selector;
  }

  NodesRef.prototype.boundingClientRect = function boundingClientRect(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'boundingClientRect', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.context = function context(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'context', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.fields = function fields(_fields, callback) {
    this.fields = _fields;
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'fields', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.node = function node(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'node', nodeRef: this });
    return this._selectQuery;
  };

  NodesRef.prototype.scrollOffset = function scrollOffset(callback) {
    this.callback = callback;
    this._selectQuery.tasks.push({ type: 'scrollOffset', nodeRef: this });
    return this._selectQuery;
  };

  return NodesRef;
}();

exports.default = NodesRef;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */

// import wx from '../wx'
// import MapContextX from './MapContextX'

var MapContext = function () {
  function MapContext(alipayMapContext, id) {
    _classCallCheck(this, MapContext);

    this.alipayMapContext = alipayMapContext;
    console.log(alipayMapContext);
    this.id = id;
  }

  MapContext.prototype.addGroundOverlay = function addGroundOverlay(wx_object) {
    // 支付宝组件ground-overlays
    var map = getApp().onekit_nodes["_" + this.id];
    map.addGroundOverlay(wx_object);
  };

  MapContext.prototype.addMarkers = function addMarkers(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.addMarkers(wx_object);
  };

  MapContext.prototype.fromScreenLocation = function fromScreenLocation(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.fromScreenLocation(wx_object);
  };

  MapContext.prototype.getCenterLocation = function getCenterLocation(object) {
    return this.alipayMapContext.getCenterLocation(object);
  };

  MapContext.prototype.getRegion = function getRegion(object) {
    return this.alipayMapContext.getRegion(object);
  };

  MapContext.prototype.getRotate = function getRotate(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.getRotate(wx_object);
  };

  MapContext.prototype.getScale = function getScale(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.getScale(wx_object);
  };

  MapContext.prototype.getSkew = function getSkew(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.getSkew(wx_object);
  };

  MapContext.prototype.includePoints = function includePoints(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.includePoints(wx_object);
  };

  MapContext.prototype.initMarkerCluster = function initMarkerCluster(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.initMarkerCluster(wx_object);
  };

  MapContext.prototype.moveAlong = function moveAlong(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.moveAlong(wx_object);
  };

  MapContext.prototype.moveToLocation = function moveToLocation(object) {
    return this.alipayMapContext.moveToLocation(object);
  };

  MapContext.prototype.on = function on(eventName, handlers) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.on(eventName, handlers);
  };

  MapContext.prototype.openMapApp = function openMapApp(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.openMapApp(wx_object);
  };

  MapContext.prototype.removeGroundOverlay = function removeGroundOverlay(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.removeGroundOverlay(wx_object);
  };

  MapContext.prototype.removeMarkers = function removeMarkers(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.removeMarkers(wx_object);
  };

  MapContext.prototype.setCenterOffset = function setCenterOffset(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.setCenterOffset(wx_object);
  };

  MapContext.prototype.toScreenLocation = function toScreenLocation(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.toScreenLocation(wx_object);
  };

  MapContext.prototype.translateMarker = function translateMarker(object) {
    return this.alipayMapContext.translateMarker(object);
  };

  MapContext.prototype.updateGroundOverlay = function updateGroundOverlay(wx_object) {
    var map = getApp().onekit_nodes["_" + this.id];
    map.updateGroundOverlay(wx_object);
  };

  return MapContext;
}();

exports.default = MapContext;

/***/ })

/******/ });