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
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
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

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable prefer-spread */
/* eslint-disable new-cap */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */

var _CanvasContext = __webpack_require__(5);

var _CanvasContext2 = _interopRequireDefault(_CanvasContext);

var _VideoContext = __webpack_require__(6);

var _VideoContext2 = _interopRequireDefault(_VideoContext);

var _SelectorQuery = __webpack_require__(7);

var _SelectorQuery2 = _interopRequireDefault(_SelectorQuery);

var _Context = __webpack_require__(8);

var _Context2 = _interopRequireDefault(_Context);

var _wx = __webpack_require__(9);

var _wx2 = _interopRequireDefault(_wx);

var _TheKit = __webpack_require__(3);

var _TheKit2 = _interopRequireDefault(_TheKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var wx = function () {
  function wx() {
    _classCallCheck(this, wx);
  }

  // ///////////////// animation //////////////////////////
  wx.createAnimation = function createAnimation(object) {
    return my.createAnimation(object);
  };

  // ////////////////onKeyboardHeightChange//////////////////


  wx.onKeyboardHeightChange = function onKeyboardHeightChange() {};

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

  wx.getSystemInfo = function getSystemInfo(object) {
    var object2 = {};
    object2.success = function (res) {
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
          height: res.screenHeight, width: res.screenWidth, bottom: res.screenHeight, top: 0, left: 0, right: res.screenWidth
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
      if (object.success) {
        object.success(result);
      }
      if (object.fail) {
        object.fail(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.fail(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };

    return my.getSystemInfo(object2);
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

  wx.getUpdateManager = function getUpdateManager(object) {
    return my.getUpdateManager(object);
  };

  wx.getLaunchOptionsSync = function getLaunchOptionsSync(object) {
    return my.getLaunchOptionsSync(object);
  };

  wx.offPageNotFound = function offPageNotFound(object) {
    return my.offPageNotFound(object);
  };

  wx.onPageNotFound = function onPageNotFound(object) {
    return my.onPageNotFound(object);
  };

  wx.offError = function offError(object) {
    return my.offError(object);
  };

  wx.onError = function onError(object) {
    return my.onError(object);
  };

  wx.offAppShow = function offAppShow(object) {
    return my.offAppShow(object);
  };

  wx.onAppShow = function onAppShow(object) {
    return my.onAppShow(object);
  };

  wx.offAppHide = function offAppHide(object) {
    return my.offAppHide(object);
  };

  wx.onAppHide = function onAppHide(object) {
    return my.onAppHide(object);
  };

  wx.setEnableDebug = function setEnableDebug(object) {
    return my.setEnableDebug(object);
  };

  wx.getLogManager = function getLogManager(object) {
    return my.getLogManager(object);
  };

  // ///////////////// Canvas ///////////////////
  // eslint-disable-next-line complexity


  wx.drawCanvas = function drawCanvas(object) {
    var canvasId = object.canvasId;
    var actions = object.actions;
    var canvasContext = my.createCanvasContext(canvasId);
    var dt = void 0;
    for (var _iterator = actions, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var action = _ref;

      var data = action.data;
      switch (action.method) {
        case 'save':
          canvasContext.save();
          break;
        case 'restore':
          canvasContext.restore();
          break;
        case 'setFillStyle':
          canvasContext.setFillStyle(_TheKit2.default.array2str(data[1]));
          break;
        case 'setStrokeStyle':
          canvasContext.setStrokeStyle(_TheKit2.default.array2str(data[1]));
          break;
        case 'setFontSize':
          canvasContext.setFontSize(data[0]);
          break;
        case 'setGlobalAlpha':
          canvasContext.setGlobalAlpha(data[0]);
          break;
        case 'setShadow':
          canvasContext.setShadow(data[0], data[1], data[2], _TheKit2.default.array2str(data[3]));
          break;
        case 'drawImage':
          canvasContext.drawImage.apply(canvasContext, data);
          break;
        case 'fillText':
          canvasContext.fillText.apply(canvasContext, data);
          break;
        case 'setLineCap':
          canvasContext.setLineCap(data[0]);break;
        case 'setLineJoin':
          canvasContext.setLineJoin(data[0]);break;
        case 'setLineWidth':
          canvasContext.setLineWidth(data[0]);break;
        case 'setMiterLimit':
          canvasContext.setMiterLimit(data[0]);break;
        case 'rotate':
          canvasContext.rotate(data[0]);break;
        case 'scale':
          canvasContext.scale(data[0], data[1]);break;
        case 'translate':
          canvasContext.translate(data[0], data[1]);break;
        case 'strokePath':
          canvasContext.beginPath();
          for (var _iterator2 = data, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var dat = _ref2;

            dt = dat.data;
            switch (dat.method) {
              case 'rect':
                canvasContext.strokeRect(dt[0], dt[1], dt[2], dt[3]);break;
              case 'moveTo':
                canvasContext.moveTo(dt[0], dt[1]);break;
              case 'lineTo':
                canvasContext.lineTo(dt[0], dt[1]);break;
              case 'closePath':
                canvasContext.closePath();break;
              case 'arc':
                canvasContext.arc.apply(canvasContext, dt);break;
              case 'quadraticCurveTo':
                canvasContext.quadraticCurveTo.apply(canvasContext, dt);break;
              case 'bezierCurveTo':
                canvasContext.bezierCurveTo.apply(canvasContext, dt);break;

              default:
                console.log('[drawCanvas-strokePath]', dat.method);
                break;
            }
          }
          canvasContext.stroke();
          break;
        case 'fillPath':
          for (var _iterator3 = data, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
            var _ref3;

            if (_isArray3) {
              if (_i3 >= _iterator3.length) break;
              _ref3 = _iterator3[_i3++];
            } else {
              _i3 = _iterator3.next();
              if (_i3.done) break;
              _ref3 = _i3.value;
            }

            var _dat = _ref3;

            var _dt = _dat.data;
            switch (_dat.method) {
              case 'rect':
                canvasContext.fillRect(_dt[0], _dt[1], _dt[2], _dt[3]);break;
              case 'arc':
                canvasContext.arc.apply(canvasContext, _dt);break;
              default:
                console.log('[drawCanvas-fillPath]', _dat.method);
                break;
            }
          }
          canvasContext.fill();
          break;
        case 'clearRect':
          canvasContext.clearRect(data[0], data[1], data[2], data[3]);break;
        default:
          console.log('[drawCanvas]', action.method);
          break;
      }
    }
    canvasContext.draw();
  };

  wx.createContext = function createContext() {
    var context = new _Context2.default();
    return context;
  };

  wx.createCanvasContext = function createCanvasContext(canvasId) {
    return new _CanvasContext2.default(my.createCanvasContext(canvasId));
  };

  wx.createVideoContext = function createVideoContext(videoId) {
    return new _VideoContext2.default(my.createVideoContext(videoId));
  };

  // //////////// WXML ///////////////


  wx.createSelectorQuery = function createSelectorQuery() {
    return new _SelectorQuery2.default(my.createSelectorQuery());
  };

  wx.canvasToTempFilePath = function canvasToTempFilePath(object) {
    var object2 = {
      canvasId: object.canvasId
    };
    object2.success = function (res) {
      var result = {
        errMsg: 'canvasToTempFilePath:ok',
        tempFilePath: res.apFilePath
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.canvasToTempFilePath(object2);
  };

  wx.canvasPutImageData = function canvasPutImageData(object) {
    return my.canvasPutImageData(object);
  };

  wx.canvasGetImageData = function canvasGetImageData(object) {
    return my.canvasGetImageData(object);
  };

  // //////////// Device //////////////////


  wx.onBeaconServiceChange = function onBeaconServiceChange(object) {
    return my.onBeaconServiceChange(object);
  };

  wx.onBeaconUpdate = function onBeaconUpdate(object) {
    return my.onBeaconUpdate(object);
  };

  wx.getBeacons = function getBeacons(object) {
    return my.getBeacons(object);
  };

  wx.stopBeaconDiscovery = function stopBeaconDiscovery(object) {
    return my.stopBeaconDiscovery(object);
  };

  wx.startBeaconDiscovery = function startBeaconDiscovery(object) {
    return my.startBeaconDiscovery(object);
  };

  wx.stopWifi = function stopWifi(object) {
    return my.stopWifi(object);
  };

  wx.startWifi = function startWifi(object) {
    return my.startWifi(object);
  };

  wx.setWifiList = function setWifiList(object) {
    return my.setWifiList(object);
  };

  wx.onWifiConnected = function onWifiConnected(object) {
    return my.onWifiConnected(object);
  };

  wx.onGetWifiList = function onGetWifiList(object) {
    return my.onGetWifiList(object);
  };

  wx.getWifiList = function getWifiList(object) {
    return my.getWifiList(object);
  };

  wx.getConnectedWifi = function getConnectedWifi(object) {
    return my.getConnectedWifi(object);
  };

  wx.connectWifi = function connectWifi(object) {
    return my.connectWifi(object);
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

  wx.stopAccelerometer = function stopAccelerometer(object) {
    wx._stopAccelerometer = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  wx.startAccelerometer = function startAccelerometer(object) {
    wx._stopAccelerometer = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  wx.getBatteryInfoSync = function getBatteryInfoSync(object) {
    return my.getBatteryInfoSync(object);
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

  wx.getBatteryInfo = function getBatteryInfo(object) {
    var object2 = {};
    object2.success = function () {
      var result = {
        errMsg: 'getBatteryInfo:ok',
        isCharging: false
      };
      result = wx._getBatteryInfo(result);
      if (object.success) {
        object.success(result);
      }
      if (object.fail) {
        object.fail(result);
      }
    };
    object2.fail = function (res) {
      if (object.success) {
        object.success(res);
      }
      if (object.fail) {
        object.fail(res);
      }
    };
    return my.getSystemInfo(object2);
  };

  //


  wx.getClipboardData = function getClipboardData(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        var result = { data: res.text };
        if (object.success) {
          object.success(result);
        }
        if (object.fail) {
          object.fail(result);
        }
      };
      object2.fail = function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.fail) {
          object.fail(res);
        }
      };
    }
    return my.getClipboard(object2);
  };

  wx.setClipboardData = function setClipboardData(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      // eslint-disable-next-line guard-for-in
      for (var key in object) {
        switch (key) {
          case 'data':
            object2.text = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.setClipboard(object2);
  };

  wx.onCompassChange = function onCompassChange(callback) {
    my.onCompassChange(function (res) {
      if (wx._stopCompass) {
        return;
      }
      callback(res);
    });
  };

  wx.stopCompass = function stopCompass(object) {
    wx._stopCompass = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  wx.startCompass = function startCompass(object) {
    wx._stopCompass = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  wx.addPhoneContact = function addPhoneContact(object) {
    var object2 = {};
    var errMsg = void 0;
    var result = {
      errMsg: errMsg
    };
    object2.success = function () {
      result.errMsg = 'addPhoneContact:ok';
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function () {
      result.errMsg = 'addPhoneContact:fail cancel';
      if (object.fail) {
        object.fail(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    return my.addPhoneContact(object2);
  };

  wx.onGyroscopeChange = function onGyroscopeChange(callback) {
    my.onGyroscopeChange(function (res) {
      if (wx._stopGyroscope) {
        return;
      }
      callback(res);
    });
  };

  wx.stopGyroscope = function stopGyroscope(object) {
    wx._stopGyroscope = true;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  wx.startGyroscope = function startGyroscope(object) {
    wx._startGyroscope = false;
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  //


  wx.onDeviceMotionChange = function onDeviceMotionChange(object) {
    return my.onDeviceMotionChange(object);
  };

  wx.stopDeviceMotionListening = function stopDeviceMotionListening(object) {
    return my.stopDeviceMotionListening(object);
  };

  wx.startDeviceMotionListening = function startDeviceMotionListening(object) {
    return my.startDeviceMotionListening(object);
  };

  //


  wx.getNetworkType = function getNetworkType(object) {
    var object2 = {};
    // eslint-disable-next-line guard-for-in
    for (var key in object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    object2.success = function (res) {
      var result = { networkType: wx._network(res).networkType };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };

    return my.getNetworkType(object2);
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
    return { isConnected: res.networkAvailable, networkType: networkType.toLowerCase() };
  };

  wx.onNetworkStatusChange = function onNetworkStatusChange(callack) {
    my.onNetworkStatusChange(function (res) {
      callack(wx._network(res));
    });
  };

  //


  wx.makePhoneCall = function makePhoneCall(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      // eslint-disable-next-line guard-for-in
      for (var key in object) {
        switch (key) {
          case 'phoneNumber':
            object2.number = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }

      my.makePhoneCall(object2);
    }
  };

  wx.scanCode = function scanCode(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'onlyFromCamera':
            object2.hideAlbum = object[key];
            break;
          case 'scanType':
            object2.type = object[key];
            break;
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
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
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
      object2.fail = function (res) {
        console.log(res);
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.scan(object2);
  };

  //


  wx.vibrateLong = function vibrateLong(object) {
    var object2 = {};
    object2.success = function () {
      var result = {
        errMsg: 'vibrateLong:ok'
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    return my.vibrateLong(object2);
  };

  wx.vibrateShort = function vibrateShort(object) {
    var object2 = {};
    object2.success = function () {
      var result = {
        errMsg: 'vibrateShort:ok'
      };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    return my.vibrateShort(object2);
  };

  //


  wx.onMemoryWarning = function onMemoryWarning(object) {
    return my.onMemoryWarning(object);
  };

  //


  wx.writeBLECharacteristicValue = function writeBLECharacteristicValue(object) {
    return my.writeBLECharacteristicValue(object);
  };

  wx.readBLECharacteristicValue = function readBLECharacteristicValue(object) {
    return my.readBLECharacteristicValue(object);
  };

  wx.onBLEConnectionStateChange = function onBLEConnectionStateChange(object) {
    return my.onBLEConnectionStateChange(object);
  };

  wx.onBLECharacteristicValueChange = function onBLECharacteristicValueChange(object) {
    return my.onBLECharacteristicValueChange(object);
  };

  wx.notifyBLECharacteristicValueChange = function notifyBLECharacteristicValueChange(object) {
    return my.notifyBLECharacteristicValueChange(object);
  };

  wx.getBLEDeviceServices = function getBLEDeviceServices(object) {
    return my.getBLEDeviceServices(object);
  };

  wx.getBLEDeviceCharacteristics = function getBLEDeviceCharacteristics(object) {
    return my.getBLEDeviceCharacteristics(object);
  };

  wx.createBLEConnection = function createBLEConnection(object) {
    return my.createBLEConnection(object);
  };

  wx.closeBLEConnection = function closeBLEConnection(object) {
    return my.closeBLEConnection(object);
  };

  //


  wx.stopBluetoothDevicesDiscovery = function stopBluetoothDevicesDiscovery(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.stopBluetoothDevicesDiscovery(object2);
  };

  wx.startBluetoothDevicesDiscovery = function startBluetoothDevicesDiscovery(object) {
    wx.openBluetoothAdapter(object);
    return my.startBluetoothDevicesDiscovery(object);
  };

  wx.openBluetoothAdapter = function openBluetoothAdapter(object) {
    var object2 = {};
    object2.success = function () {
      var result = { errMsg: 'openBluetoothAdapter:ok' };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.openBluetoothAdapter(object2);
  };

  wx.onBluetoothDeviceFound = function onBluetoothDeviceFound(object) {
    return my.onBluetoothDeviceFound(object);
  };

  wx.onBluetoothAdapterStateChange = function onBluetoothAdapterStateChange(object) {
    return my.onBluetoothAdapterStateChange(object);
  };

  wx.getConnectedBluetoothDevices = function getConnectedBluetoothDevices(object) {
    return my.getConnectedBluetoothDevices(object);
  };

  wx.getBluetoothDevices = function getBluetoothDevices(object) {
    var object2 = {};
    object2.success = function () {
      my.getBluetoothDevices({
        success: function success(res) {
          // console.log("000", res)
          // console.log("000", res.devices)
          var result = {
            errMsg: 'closeBluetoothAdapter:ok'
          };
          result.devices = res.devices;
          if (object.success) {
            object.success(result);
          }
          if (object.complete) {
            object.complete(result);
          }
        }
      });
    };
    object2.fail = function (res) {
      if (object.success) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.getBluetoothDevices(object2);
  };

  wx.getBluetoothAdapterState = function getBluetoothAdapterState(object) {
    return my.getBluetoothAdapterState(object);
  };

  wx.closeBluetoothAdapter = function closeBluetoothAdapter(object) {
    return my.closeBluetoothAdapter(object);
  };

  //


  wx.stopHCE = function stopHCE(object) {
    return my.stopHCE(object);
  };

  wx.startHCE = function startHCE(object) {
    return my.startHCE(object);
  };

  wx.sendHCEMessage = function sendHCEMessage(object) {
    return my.sendHCEMessage(object);
  };

  wx.onHCEMessage = function onHCEMessage(object) {
    return my.onHCEMessage(object);
  };

  wx.getHCEState = function getHCEState(object) {
    return my.getHCEState(object);
  };

  //


  wx.setScreenBrightness = function setScreenBrightness(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'value':
            object2.brightness = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.setScreenBrightness(object2);
  };

  wx.setKeepScreenOn = function setKeepScreenOn(object) {
    return my.setKeepScreenOn(object);
  };

  wx.onUserCaptureScreen = function onUserCaptureScreen(object) {
    return my.onUserCaptureScreen(object);
  };

  wx.getScreenBrightness = function getScreenBrightness(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (res) {
      var result = { value: res.brightness };
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.getScreenBrightness(object2);
  };

  // ///////////////// Ext //////////////


  wx.getExtConfigSync = function getExtConfigSync(object) {
    return my.getExtConfigSync(object);
  };

  wx.getExtConfig = function getExtConfig(object) {
    return my.getExtConfig(object);
  };

  // ////////////////// File //////////


  wx.getFileSystemManager = function getFileSystemManager(object) {
    return my.getFileSystemManager(object);
  };

  wx.getFileInfo = function getFileInfo(object) {
    return my.getFileInfo(object);
  };

  wx.removeSavedFile = function removeSavedFile(object) {
    return my.removeSavedFile(object);
  };

  wx.getSavedFileInfo = function getSavedFileInfo(object) {
    return my.getSavedFileInfo(object);
  };

  wx.getSavedFileList = function getSavedFileList(object) {
    return my.getSavedFileList(object);
  };

  wx.openDocument = function openDocument(object) {
    return my.openDocument(object);
  };

  wx.saveFile = function saveFile(object) {
    my.saveFile({
      apFilePath: object.tempFilePath,
      success: function success(res) {
        var result = { savedFilePath: res.apFilePath };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      },
      fail: function fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };

  // ////////// Location ///////////////


  wx.openLocation = function openLocation(object) {
    return my.openLocation(object);
  };

  wx.getLocation = function getLocation(object) {
    return my.getLocation(object);
  };

  wx.chooseLocation = function chooseLocation(object) {
    return my.chooseLocation(object);
  };

  // //////// Media ////////////////////


  wx.createMapContext = function createMapContext(object) {
    return my.createMapContext(object);
  };

  wx.compressImage = function compressImage(object) {
    return my.compressImage(object);
  };

  wx.saveImageToPhotosAlbum = function saveImageToPhotosAlbum(object) {
    return my.saveImageToPhotosAlbum(object);
  };

  wx.getImageInfo = function getImageInfo(object) {
    return my.getImageInfo(object);
  };

  wx.previewImage = function previewImage(object) {
    return my.previewImage(object);
  };

  wx.chooseImage = function chooseImage(object) {
    if (!object.count) {
      object.count = 0;
    }
    my.chooseImage({
      conut: object.count,
      sizeType: object.sizeType,
      sourceType: object.scourceType,
      success: function success(res) {
        var tempFilePaths = [];
        var tempFiles = [];
        for (var _iterator4 = res.apFilePaths, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
          var _ref4;

          if (_isArray4) {
            if (_i4 >= _iterator4.length) break;
            _ref4 = _iterator4[_i4++];
          } else {
            _i4 = _iterator4.next();
            if (_i4.done) break;
            _ref4 = _i4.value;
          }

          var path = _ref4;

          tempFilePaths.push(path);
          tempFiles.push({ path: path, size: 1000000 });
        }
        var result = {
          tempFilePaths: tempFilePaths,
          tempFiles: tempFiles
        };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      },
      fail: function fail(res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      }
    });
  };

  wx.saveVideoToPhotosAlbum = function saveVideoToPhotosAlbum(object) {
    return my.saveVideoToPhotosAlbum(object);
  };

  wx.chooseVideo = function chooseVideo(object) {
    return my.chooseVideo(object);
  };

  wx.stopVoice = function stopVoice(object) {
    return my.stopVoice(object);
  };

  wx.pauseVoice = function pauseVoice(object) {
    return my.pauseVoice(object);
  };

  wx.playVoice = function playVoice(object) {
    return my.playVoice(object);
  };

  wx.setInnerAudioOption = function setInnerAudioOption(object) {
    return my.setInnerAudioOption(object);
  };

  wx.getAvailableAudioSources = function getAvailableAudioSources(object) {
    return my.getAvailableAudioSources(object);
  };

  wx.createInnerAudioContext = function createInnerAudioContext(object) {
    return my.createInnerAudioContext(object);
  };

  wx.createAudioContext = function createAudioContext(object) {
    return my.createAudioContext(object);
  };

  wx.onBackgroundAudioStop = function onBackgroundAudioStop(object) {
    return my.onBackgroundAudioStop(object);
  };

  wx.onBackgroundAudioPause = function onBackgroundAudioPause(object) {
    return my.onBackgroundAudioPause(object);
  };

  wx.onBackgroundAudioPlay = function onBackgroundAudioPlay(object) {
    return my.onBackgroundAudioPlay(object);
  };

  wx.stopBackgroundAudio = function stopBackgroundAudio(object) {
    return my.stopBackgroundAudio(object);
  };

  wx.seekBackgroundAudio = function seekBackgroundAudio(object) {
    return my.seekBackgroundAudio(object);
  };

  wx.pauseBackgroundAudio = function pauseBackgroundAudio(object) {
    return my.pauseBackgroundAudio(object);
  };

  wx.playBackgroundAudio = function playBackgroundAudio(object) {
    return my.playBackgroundAudio(object);
  };

  wx.getBackgroundAudioPlayerState = function getBackgroundAudioPlayerState(object) {
    return my.getBackgroundAudioPlayerState(object);
  };

  wx.getBackgroundAudioManager = function getBackgroundAudioManager(object) {
    return my.getBackgroundAudioManager(object);
  };

  wx.createLivePusherContext = function createLivePusherContext(object) {
    return my.createLivePusherContext(object);
  };

  wx.startRecord = function startRecord(object) {
    return my.startRecord(object);
  };

  wx.stopRecord = function stopRecord(object) {
    return my.stopRecord(object);
  };

  wx.getRecorderManager = function getRecorderManager(object) {
    return my.getRecorderManager(object);
  };

  // ////////////// Network ///////////////


  wx.request = function request(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'header':
            object2.headers = object[key];
            break;
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = {
          header: res.headers
        };
        for (var _key in object) {
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
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.httpRequest(object2);
  };

  wx.downloadFile = function downloadFile(object) {
    return my.downloadFile(object);
  };

  wx.uploadFile = function uploadFile(object) {
    my.uploadFile({
      url: object.url,
      filePath: object.filePath,
      fileName: object.name,
      fileType: 'image',
      header: object.header,
      formData: object.formData,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    });
  };

  //


  wx.connectSocket = function connectSocket(object) {
    return my.connectSocket(object);
  };

  wx.onSocketError = function onSocketError(object) {
    return my.onSocketError(object);
  };

  wx.onSocketMessage = function onSocketMessage(object) {
    return my.onSocketMessage(object);
  };

  wx.onSocketClose = function onSocketClose(object) {
    return my.onSocketClose(object);
  };

  wx.onSocketOpen = function onSocketOpen(object) {
    return my.onSocketOpen(object);
  };

  wx.sendSocketMessage = function sendSocketMessage(object) {
    return my.sendSocketMessage(object);
  };

  wx.closeSocket = function closeSocket(object) {
    return my.closeSocket(object);
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

  wx.stopLocalServiceDiscovery = function stopLocalServiceDiscovery(object) {
    return my.stopLocalServiceDiscovery(object);
  };

  wx.startLocalServiceDiscovery = function startLocalServiceDiscovery(object) {
    return my.startLocalServiceDiscovery(object);
  };

  // /////// Open Interface //////////


  wx._checkSession = function _checkSession() {
    var now = new Date().getTime();
    return getApp().onekitwx._jscode && getApp().onekitwx._login && now <= getApp().onekitwx._login + 1000 * 60 * 60 * 24 * 3;
  };

  wx.checkSession = function checkSession(object) {
    if (this._checkSession()) {
      if (object.success) {
        object.success();
      }
      if (object.complete) {
        object.complete();
      }
    } else {
      if (object.fail) {
        object.fail();
      }
      if (object.complete) {
        object.complete();
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
               if (object.success) {
                 object.success(res.data);
               }
               if (object.complete) {
                 object.complete(res.data);
               }
             }, fail(res) {
               console.log(res.data);
             }
           });
     } */
  };

  wx.login = function login() {
    // const that = this
    // if (!object) {
    //   return my.getAuthCode(object)
    // }
    // const object2 = {
    //   scopes: 'auth_user'
    // }
    // object2.success = function (res) {
    //   getApp().onekitwx._jscode = res.authCode
    //   getApp().onekitwx._login = new Date().getTime()
    //   const result = {code: res.authCode}
    //   if (object.success) {
    //     object.success(result)
    //   }
    //   if (object.complete) {
    //     object.complete(complete)
    //   }
    // }
    // object2.fail = function (res) {
    //   if (object.fail) {
    //     object.fail(res)
    //   }
    //   if (object.complete) {
    //     object.complete(res)
    //   }
    // }
    // if (wx._checkSession()) {
    //   object2.success({authCode: getApp().onekitwx._jscode})
    // } else {
    //   my.getAuthCode(object2)
    // }
  };

  wx.getUserInfo = function getUserInfo(object) {
    wx.login({
      success: function success(res) {
        var jscode = res.code;
        var withCredentials = object.withCredentials;
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
                if (object.success) {
                  object.success(res.data);
                }
                if (object.complete) {
                  object.complete(res.data);
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

  wx.getOpenData = function getOpenData(object) {
    if (!getApp().onekit._opendataCallbacks) {
      getApp().onekit._opendataCallbacks = [];
    }
    function _success(res) {
      var opendata = res.userInfo;
      getApp().onekit._opendata = opendata;
      for (var cb = 0; cb < getApp().onekit._opendataCallbacks.length; cb++) {
        getApp().onekit._opendataCallbacks[cb](opendata);
      }
      if (object.success) {
        object.success(opendata);
      }
      if (object.complete) {
        object.complete(opendata);
      }
    }
    var opendata = getApp().onekit._opendata;
    if (opendata) {
      if (Object.keys(opendata) > 0) {
        object.success(opendata);
      } else if (object.success) {
        getApp().onekit._opendataCallbacks.push(object.success);
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

  wx.getPhoneNumber = function getPhoneNumber(object) {
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
                if (object.success) {
                  object.success(data);
                }
                if (object.complete) {
                  object.complete(data);
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

  wx.navigateToMiniProgram = function navigateToMiniProgram(object) {
    return my.navigateToMiniProgram(object);
  };

  wx.navigateBackMiniProgram = function navigateBackMiniProgram(object) {
    return my.navigateBackMiniProgram(object);
  };

  wx.getAccountInfoSync = function getAccountInfoSync(object) {
    return my.getAccountInfoSync(object);
  };

  wx.reportMonitor = function reportMonitor(object) {
    return my.reportMonitor(object);
  };

  wx.reportAnalytics = function reportAnalytics(object) {
    return my.reportAnalytics(object);
  };

  wx.requestPayment = function requestPayment(object) {
    var tradeNO = object.package.split('=')[1];
    console.log(tradeNO);
    var object2 = {
      tradeNO: tradeNO,
      success: object.success,
      fail: object.fail,
      complete: object.complete
    };
    return my.tradePay(object2);
  };

  wx.authorize = function authorize(object) {
    return my.authorize(object);
  };

  wx.openSetting = function openSetting(object) {
    return my.openSetting(object);
  };

  wx.getSetting = function getSetting(object) {
    return my.getSetting(object);
  };

  wx.chooseAddress = function chooseAddress(object) {
    return my.chooseAddress(object);
  };

  wx.openCard = function openCard(object) {
    my.openCardList();
    if (object.success) {
      object.success();
    }
    if (object.complete) {
      object.complete();
    }
  };

  wx.addCard = function addCard(object) {
    var url = getApp().onekit.server + 'addcard';
    my.httpRequest({
      url: url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      data: {
        cardList: JSON.stringify(object.cardList),
        js_code: object.jscode
      },
      success: function success(res) {
        var data = res.data;
        if (object.success) {
          object.success(data);
        }
        if (object.complete) {
          object.complete(data);
        }
      },
      fail: function fail(res) {
        console.log(res.data);
      }
    });
  };

  wx.chooseInvoiceTitle = function chooseInvoiceTitle(object) {
    return my.chooseInvoiceTitle(object);
  };

  wx.chooseInvoice = function chooseInvoice(object) {
    return my.chooseInvoice(object);
  };

  wx.startSoterAuthentication = function startSoterAuthentication(object) {
    return my.startSoterAuthentication(object);
  };

  wx.checkIsSupportSoterAuthentication = function checkIsSupportSoterAuthentication(object) {
    return my.checkIsSupportSoterAuthentication(object);
  };

  wx.checkIsSoterEnrolledInDevice = function checkIsSoterEnrolledInDevice(object) {
    return my.checkIsSoterEnrolledInDevice(object);
  };

  wx.getWeRunData = function getWeRunData(object) {
    return my.getWeRunData(object);
  };

  // //////// Router //////////////


  wx.navigateBack = function navigateBack(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (result) {
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.navigateBack(object2);
  };

  wx.switchTab = function switchTab(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (result) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.switchTab(object2);
  };

  wx.navigateTo = function navigateTo(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (result) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.navigateTo(object2);
  };

  wx.reLaunch = function reLaunch(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (result) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.reLaunch(object2);
  };

  wx.redirectTo = function redirectTo(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'success':
          case 'fail':
          case 'complete':
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    object2.success = function (result) {
      if (object.success) {
        object.success(result);
      }
      if (object.complete) {
        object.complete(result);
      }
    };
    object2.fail = function (res) {
      if (object.fail) {
        object.success(res);
      }
      if (object.complete) {
        object.complete(res);
      }
    };
    return my.redirectTo(object2);
  };

  // /////////// Share /////////////


  wx.updateShareMenu = function updateShareMenu(object) {
    return my.updateShareMenu(object);
  };

  wx.showShareMenu = function showShareMenu() {
    my.navigateTo({
      url: '/wx/page/share/share'
    });
  };

  wx.hideShareMenu = function hideShareMenu(object) {
    return my.hideShareMenu(object);
  };

  wx.getShareInfo = function getShareInfo(object) {
    return my.getShareInfo(object);
  };

  // ///////////// Storage //////////////


  wx.getStorageInfoSync = function getStorageInfoSync(object) {
    return my.getStorageInfoSync(object);
  };

  wx.getStorageInfo = function getStorageInfo(object) {
    return my.getStorageInfo(object);
  };

  wx.clearStorageSync = function clearStorageSync(object) {
    return my.clearStorageSync(object);
  };

  wx.clearStorage = function clearStorage(object) {
    return my.clearStorage(object);
  };

  wx.removeStorageSync = function removeStorageSync(object) {
    return my.removeStorageSync(object);
  };

  wx.removeStorage = function removeStorage(object) {
    return my.removeStorage(object);
  };

  wx.setStorageSync = function setStorageSync(key, value) {
    return my.setStorageSync({ key: key, data: value });
  };

  wx.setStorage = function setStorage(object) {
    return my.setStorage(object);
  };

  wx.getStorageSync = function getStorageSync(key) {
    var result = my.getStorageSync({ key: key });
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

  wx.getStorage = function getStorage(object) {
    return my.getStorage(object);
  };

  // //////////// UI ////////////////


  wx.showActionSheet = function showActionSheet(object) {
    var object2 = void 0;
    if (object) {
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'itemList':
            object2.items = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
      object2.success = function (res) {
        var result = { tapIndex: res.index };
        if (object.success) {
          object.success(result);
        }
        if (object.complete) {
          object.complete(result);
        }
      };
    }
    return my.showActionSheet(object2);
  };

  // static redirectTo(object) { return my.redirectTo(object); }
  // static redirectTo(object) { return my.redirectTo(object); }


  wx.hideLoading = function hideLoading(object) {
    return my.hideLoading(object);
  };

  wx.showLoading = function showLoading(object) {
    var object2 = void 0;
    if (object) {
      if (!object.icon) {
        object.icon = 'success';
      }
      //
      object2 = {};
      for (var key in object) {
        switch (key) {
          case 'title':
            object2.content = object[key];
            break;
          case 'icon':
            object2.type = object[key];
            break;
          default:
            object2[key] = object[key];
            break;
        }
      }
    }
    return my.showLoading(object2);
  };

  wx.hideToast = function hideToast(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.hideToast(object2);
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

  wx.showModal = function showModal(object2) {
    if (object2 === null) {
      return my.confirm();
    }
    var object = {};
    var key = void 0;
    if (object2.showCancel === null || object2.showCancel) {
      for (key in object2) {
        switch (key) {
          case 'cancelText':
            object.cancelButtonText = object2[key];
            break;
          case 'confirmText':
            object.confirmButtonText = object2[key];
            break;
          default:
            object[key] = object2[key];
            break;
        }
      }

      return my.confirm(object);
    } else {
      for (key in object2) {
        switch (key) {
          default:
            object[key] = object2[key];
            break;
        }
      }

      return my.alert(object);
    }
  };

  wx.setNavigationBarColor = function setNavigationBarColor(object) {
    return my.setNavigationBarColor(object);
  };

  wx.hideNavigationBarLoading = function hideNavigationBarLoading(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.hideNavigationBarLoading(object2);
  };

  wx.showNavigationBarLoading = function showNavigationBarLoading(object) {
    var object2 = {};
    for (var key in object) {
      switch (key) {
        case 'success':
        case 'fail':
        case 'complete':
          break;
        default:
          object2[key] = object[key];
          break;
      }
    }
    return my.showNavigationBarLoading(object2);
  };

  wx.setNaivgationBarTitle = function setNaivgationBarTitle(object) {
    return my.setNavigationBar(object);
  };

  wx.setBackgroundTextStyle = function setBackgroundTextStyle(object) {
    return my.setBackgroundTextStyle(object);
  };

  wx.setBackgroundColor = function setBackgroundColor(object) {
    return my.setBackgroundColor(object);
  };

  wx.setTabBarItem = function setTabBarItem(object) {
    return my.setTabBarItem(object);
  };

  wx.setTabBarStyle = function setTabBarStyle(object) {
    return my.setTabBarStyle(object);
  };

  wx.hideTabBar = function hideTabBar(object) {
    return my.hideTabBar(object);
  };

  wx.showTabBar = function showTabBar(object) {
    return my.showTabBar(object);
  };

  wx.hideTabBarRedDot = function hideTabBarRedDot(object) {
    return my.hideTabBarRedDot(object);
  };

  wx.showTabBarRedDot = function showTabBarRedDot(object) {
    return my.showTabBarRedDot(object);
  };

  wx.removeTabBarBadge = function removeTabBarBadge(object) {
    return my.removeTabBarBadge(object);
  };

  wx.setTabBarBadge = function setTabBarBadge(object) {
    return my.setTabBarBadge(object);
  };

  wx.loadFontFace = function loadFontFace(object) {
    return my.loadFontFace(object);
  };

  wx.stopPullDownRefresh = function stopPullDownRefresh(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.stopPullDownRefresh(object2);
  };

  wx.startPullDownRefresh = function startPullDownRefresh(object) {
    var object2 = {};
    if (object) {
      object2.success = function (res) {
        if (object.success) {
          object.success(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
      object2.fail = function (res) {
        if (object.fail) {
          object.fail(res);
        }
        if (object.complete) {
          object.complete(res);
        }
      };
    }
    return my.startPullDownRefresh(object2);
  };

  wx.pageScrollTo = function pageScrollTo(object) {
    return my.pageScrollTo(object);
  };

  wx.setTopBarText = function setTopBarText(object) {
    return my.setTopBarText(object);
  };

  wx.nextTick = function nextTick(object) {
    return my.nextTick(object);
  };

  wx.getMenuButtonBoundingClientRect = function getMenuButtonBoundingClientRect(object) {
    return my.getMenuButtonBoundingClientRect(object);
  };

  wx.offWindowResize = function offWindowResize(object) {
    return my.offWindowResize(object);
  };

  wx.onWindowResize = function onWindowResize(object) {
    return my.onWindowResize(object);
  };

  // //////////// Worker ///////////////


  wx.createWorker = function createWorker(object) {
    return my.createWorker(object);
  };

  wx.createIntersectionObserver = function createIntersectionObserver(object) {
    return my.createIntersectionObserver(object);
  };

  // ///////////////////////////////////


  wx.hideKeyboard = function hideKeyboard(object) {
    return my.hideKeyboard(object);
  };

  // /////////// cloud ////////////////


  _createClass(wx, null, [{
    key: 'cloud',
    get: function get() {
      return new _wx2.default();
    }
  }]);

  return wx;
}();

exports.default = wx;

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CanvasContext = function () {
  function CanvasContext(alipayCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.alipayCanvasContext = alipayCanvasContext;
  }

  CanvasContext.prototype.beginPath = function beginPath(a) {
    return this.alipayCanvasContext.beginPath(a);
  };

  CanvasContext.prototype.save = function save() {
    return this.alipayCanvasContext.save();
  };

  CanvasContext.prototype.restore = function restore() {
    return this.alipayCanvasContext.restore();
  };

  //


  CanvasContext.prototype.setGlobalAlpha = function setGlobalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha);
  };

  CanvasContext.prototype.setFillStyle = function setFillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color);
  };

  CanvasContext.prototype.setStrokeStyle = function setStrokeStyle(color) {
    return this.alipayCanvasContext.setStrokeStyle(color);
  };

  CanvasContext.prototype.setShadow = function setShadow(offsetX, offsetY, blur, color) {
    return this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color);
  };

  CanvasContext.prototype.setLineCap = function setLineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap);
  };

  CanvasContext.prototype.setLineJoin = function setLineJoin(lineJoin) {
    return this.alipayCanvasContext.setLineJoin(lineJoin);
  };

  CanvasContext.prototype.setLineWidth = function setLineWidth(lineWidth) {
    return this.alipayCanvasContext.setLineWidth(lineWidth);
  };

  CanvasContext.prototype.setMiterLimit = function setMiterLimit(miterLimit) {
    return this.alipayCanvasContext.setMiterLimit(miterLimit);
  };

  CanvasContext.prototype.setFontSize = function setFontSize(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize);
  };

  CanvasContext.prototype.rotate = function rotate(_rotate) {
    return this.alipayCanvasContext.rotate(_rotate);
  };

  CanvasContext.prototype.scale = function scale(scaleWidth, scaleHeight) {
    return this.alipayCanvasContext.scale(scaleWidth, scaleHeight);
  };

  CanvasContext.prototype.translate = function translate(x, y) {
    return this.alipayCanvasContext.translate(x, y);
  };

  CanvasContext.prototype.moveTo = function moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y);
  };

  CanvasContext.prototype.lineTo = function lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y);
  };

  CanvasContext.prototype.closePath = function closePath() {
    return this.alipayCanvasContext.closePath();
  };

  CanvasContext.prototype.fillText = function fillText(text, x, y) {
    return this.alipayCanvasContext.fillText(text, x, y);
  };

  CanvasContext.prototype.drawImage = function drawImage(imageResource, sx, sy, sWidth, sHeight) {
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight);
  };

  CanvasContext.prototype.arc = function arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise);
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y);
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
  };

  //


  CanvasContext.prototype.rect = function rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height);
  };

  //


  CanvasContext.prototype.clearRect = function clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height);
  };

  CanvasContext.prototype.stroke = function stroke() {
    return this.alipayCanvasContext.stroke();
  };

  CanvasContext.prototype.fill = function fill() {
    return this.alipayCanvasContext.fill();
  };

  CanvasContext.prototype.draw = function draw(reserve, callback) {
    return this.alipayCanvasContext.draw(reserve, callback);
  };

  CanvasContext.prototype.fillRect = function fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height);
  };

  CanvasContext.prototype.getActions = function getActions() {
    return this.alipayCanvasContext.getActions();
  };

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.wx = exports.OnekitPage = exports.OnekitComponent = exports.OnekitBehavior = exports.OnekitApp = void 0;
var OnekitApp_1 = __webpack_require__(54);
exports.OnekitApp = OnekitApp_1.default;
var OnekitBehavior_1 = __webpack_require__(55);
exports.OnekitBehavior = OnekitBehavior_1.default;
var OnekitComponent_1 = __webpack_require__(56);
exports.OnekitComponent = OnekitComponent_1.default;
var OnekitPage_1 = __webpack_require__(57);
exports.OnekitPage = OnekitPage_1.default;
var wx_1 = __webpack_require__(4);
exports.wx = wx_1.default;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitApp;
/* eslint-disable camelcase */

function OnekitApp(object) {
  var alipay_object = object;
  return App(alipay_object);
}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitBehavior;

var _wx = __webpack_require__(4);

var _wx2 = _interopRequireDefault(_wx);

var _TheKit = __webpack_require__(3);

var _TheKit2 = _interopRequireDefault(_TheKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable camelcase */
function OnekitBehavior(object) {
  var alipay_object = {
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
      var funcName = 'on' + _TheKit2.default.firstUpper(name);
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
        alipay_object.props = {};
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
          alipay_object.props[p] = v && v.value ? v.value : null;
        }
        break;
      default:
        alipay_object[key] = value;
    }
  }

  return alipay_object;
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitComponent;

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _wx = __webpack_require__(4);

var _wx2 = _interopRequireDefault(_wx);

var _TheKit = __webpack_require__(3);

var _TheKit2 = _interopRequireDefault(_TheKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OnekitComponent(object) {
  var properties = {};
  var alipay_object = {
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
      var funcName = 'on' + _TheKit2.default.firstUpper(name);
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
        alipay_object.props = {};
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
          alipay_object.props[k] = v;
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

          alipay_object.methods[_k] = value[_k];
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

          alipay_object.data[_k2] = value[_k2];
        }
        break;
      case 'behaviors':
        alipay_object.mixins = value;
        break;
      default:
        alipay_object[key] = value;
        break;
    }
  }
  return Component(alipay_object);
} /* eslint-disable camelcase */

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = OnekitPage;
/* eslint-disable camelcase */
function OnekitPage(object) {
  var alipay_object = object;
  alipay_object.animate = function () {};
  alipay_object.selectComponent = function (selector) {
    // selector = selector.replace(".","$");
    // selector = selector.replace("-","_");
    for (var _iterator = Object.keys(this), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
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

      if (key.indexOf(selector) >= 0) {
        return this[key];
      }
    }
    return null;
  };
  alipay_object.selectAllComponents = function (selector) {
    //  selector = selector.replace(".","$");
    //   selector = selector.replace("-","_");
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
        return [this[key]];
      }
    }
    return [];
  };
  return Page(alipay_object);
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VideoContext = function () {
  function VideoContext(alipayVideoContext) {
    _classCallCheck(this, VideoContext);

    this.alipayVideoContext = alipayVideoContext;
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

  VideoContext.prototype.requestFullScreen = function requestFullScreen(direction) {
    return this.alipayConvasContext.requestFullScreen(direction);
  };

  VideoContext.prototype.exitFullScreen = function exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen();
  };

  return VideoContext;
}();

exports.default = VideoContext;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SelectorQuery = function () {
  function SelectorQuery(aliapySelectQuery) {
    _classCallCheck(this, SelectorQuery);

    this.aliapySelectQuery = aliapySelectQuery;
  }

  SelectorQuery.prototype.in = function _in() {
    return this;
  };

  SelectorQuery.prototype.select = function select(selector) {
    this.aliapySelectQuery.select(selector);
    return this;
  };

  SelectorQuery.prototype.selectAll = function selectAll(selector) {
    this.aliapySelectQuery.selectAll(selector);
    return this;
  };

  SelectorQuery.prototype.selectViewport = function selectViewport() {
    this.aliapySelectQuery.selectViewport();
    return this;
  };

  SelectorQuery.prototype.exec = function exec(callback) {
    this.aliapySelectQuery.exec(callback);
    return this;
  };

  // ////////////


  SelectorQuery.prototype.fields = function fields(callback) {
    this.aliapySelectQuery.fields(callback);
    return this;
  };

  SelectorQuery.prototype.boundingClientRect = function boundingClientRect(callback) {
    this.aliapySelectQuery.boundingClientRect(callback);
    return this;
  };

  SelectorQuery.prototype.context = function context(callback) {
    this.aliapySelectQuery.context(callback);
    return this;
  };

  SelectorQuery.prototype.node = function node(callback) {
    this.aliapySelectQuery.node(callback);
    return this;
  };

  SelectorQuery.prototype.scrollOffset = function scrollOffset(callback) {
    this.aliapySelectQuery.scrollOffset(callback);
    return this;
  };

  return SelectorQuery;
}();

exports.default = SelectorQuery;

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _TheKit = __webpack_require__(3);

var _TheKit2 = _interopRequireDefault(_TheKit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* eslint-disable prefer-rest-params */


var Context = function () {
  function Context() {
    _classCallCheck(this, Context);

    this._actions = [];
    this._path = [];
  }

  Context.prototype.beginPath = function beginPath() {
    this._actions = [];
    this._path = [];
  };

  Context.prototype.save = function save() {
    this._actions.push({ method: 'save', data: [] });
  };

  Context.prototype.restore = function restore() {
    this._actions.push({ method: 'restore', data: [] });
  };

  //


  Context.prototype.setGlobalAlpha = function setGlobalAlpha(alpha) {
    this._actions.push({ method: 'setGlobalAlpha', data: [alpha] });
  };

  Context.prototype.setFillStyle = function setFillStyle(color) {
    color = _TheKit2.default.fix(color);
    this._actions.push({ method: 'setFillStyle', data: ['normal', _TheKit2.default.str2array(color)] });
  };

  Context.prototype.setStrokeStyle = function setStrokeStyle(color) {
    color = _TheKit2.default.fix(color);
    this._actions.push({ method: 'setStrokeStyle', data: ['normal', _TheKit2.default.str2array(color)] });
  };

  Context.prototype.setShadow = function setShadow(x, y, blur, color) {
    color = _TheKit2.default.fix(color);
    this._actions.push({ method: 'setShadow', data: [x, y, blur, _TheKit2.default.str2array(color)] });
  };

  Context.prototype.setLineCap = function setLineCap(cap) {
    this._actions.push({ method: 'setLineCap', data: [cap] });
  };

  Context.prototype.setLineJoin = function setLineJoin(join) {
    this._actions.push({ method: 'setLineJoin', data: [join] });
  };

  Context.prototype.setLineWidth = function setLineWidth(width) {
    this._actions.push({ method: 'setLineWidth', data: [width] });
  };

  Context.prototype.setMiterLimit = function setMiterLimit(limit) {
    this._actions.push({ method: 'setMiterLimit', data: [limit] });
  };

  Context.prototype.setFontSize = function setFontSize(size) {
    this._actions.push({ method: 'setFontSize', data: [size] });
  };

  Context.prototype.rotate = function rotate(angle) {
    this._actions.push({ method: 'rotate', data: [angle] });
  };

  Context.prototype.scale = function scale(sx, sy) {
    this._actions.push({ method: 'scale', data: [sx, sy] });
  };

  Context.prototype.translate = function translate(tx, ty) {
    this._actions.push({ method: 'translate', data: [tx, ty] });
  };

  Context.prototype.moveTo = function moveTo(x, y) {
    this._path.push({ method: 'moveTo', data: [x, y] });
  };

  Context.prototype.lineTo = function lineTo(x, y) {
    this._path.push({ method: 'lineTo', data: [x, y] });
  };

  Context.prototype.closePath = function closePath() {
    this._path.push({ method: 'closePath', data: [] });
  };

  Context.prototype.fillText = function fillText() {
    var data = [];
    for (var _iterator = arguments, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var arg = _ref;

      data.push(arg);
    }
    this._actions.push({ method: 'fillText', data: data });
  };

  Context.prototype.drawImage = function drawImage() {
    var data = [];
    for (var _iterator2 = arguments, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var arg = _ref2;

      data.push(arg);
    }
    this._actions.push({ method: 'drawImage', data: data });
  };

  Context.prototype.arc = function arc() {
    var data = [];
    for (var _iterator3 = arguments, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref3 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref3 = _i3.value;
      }

      var arg = _ref3;

      data.push(arg);
    }
    if (data.length < 6) {
      data.push(false);
    }
    this._path.push({ method: 'arc', data: data });
  };

  Context.prototype.quadraticCurveTo = function quadraticCurveTo() {
    var data = [];
    for (var _iterator4 = arguments, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref4 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref4 = _i4.value;
      }

      var arg = _ref4;

      data.push(arg);
    }
    this._path.push({ method: 'quadraticCurveTo', data: data });
  };

  Context.prototype.bezierCurveTo = function bezierCurveTo() {
    var data = [];
    for (var _iterator5 = arguments, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        _ref5 = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        _ref5 = _i5.value;
      }

      var arg = _ref5;

      data.push(arg);
    }
    this._path.push({ method: 'bezierCurveTo', data: data });
  };

  //


  Context.prototype.rect = function rect(x, y, width, height) {
    this._path.push({ method: 'rect', data: [x, y, width, height] });
  };

  //


  Context.prototype.clearRect = function clearRect(x, y, width, height) {
    this._actions.push({ method: 'clearRect', data: [x, y, width, height] });
  };

  Context.prototype.stroke = function stroke() {
    this._actions.push({ method: 'strokePath', data: this._path });
  };

  Context.prototype.fill = function fill() {
    this._actions.push({ method: 'fillPath', data: this._path });
  };

  Context.prototype.getActions = function getActions() {
    var actions = this._actions;
    this._actions = [];
    return actions;
  };

  return Context;
}();

exports.default = Context;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable promise/catch-or-return */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */

var wx_cloud_engine = function wx_cloud_engine() {
  _classCallCheck(this, wx_cloud_engine);
};

var wx_cloud_query = function () {
  function wx_cloud_query(collectionName, database, _query, _field) {
    _classCallCheck(this, wx_cloud_query);

    this.collectionName = collectionName;
    this.database = database;
    this._query = _query;
    this._field = _field;
  }

  wx_cloud_query.prototype.orderBy = function orderBy(fieldName, order) {
    var _query = this._query;
    if (!_query.order) {
      _query.order = [];
    }
    _query.order.push({ fieldName: fieldName, order: order });
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_query.prototype.limit = function limit(number) {
    var _query = this._query;
    _query.limit = number;
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_query.prototype.skip = function skip(number) {
    var _query = this._query;
    _query.skip = number;
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_query.prototype.count = function count(options) {
    var that = this;
    function _func(success, fail, complete) {
      basement.db.collection(that.collectionName).count(that._query.where).then(function (res2) {
        var res = {
          errMsg: 'collection.count:ok',
          total: res2.result
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud_query.prototype.field = function field(definition) {
    return new wx_cloud_query(this.collectionName, this.database, this._query, definition);
  };

  wx_cloud_query.prototype.get = function get(options) {
    var that = this;
    function _func(success, fail, complete) {
      basement.db.collection(that.collectionName).find(that._query.where, {
        sort: new Map(that._query.sort),
        limit: that._query.limit,
        skip: that._query.skip,
        projection: that._field
      }).then(function (res2) {
        var res = {
          errMsg: 'query.get:ok',
          data: res2.result
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  return wx_cloud_query;
}();

var wx_cloud_collection = function () {
  function wx_cloud_collection(database, collectionName) {
    _classCallCheck(this, wx_cloud_collection);

    this.database = database;
    this.collectionName = collectionName;
    this._query = {
      limit: null,
      offset: null,
      order: null,
      where: null
    };
    this._field = {};
  }

  wx_cloud_collection.prototype.doc = function doc(id) {
    return new wx_cloud_document(this, this.database, {}, id);
  };

  wx_cloud_collection.prototype.where = function where(rule) {
    var _query = this._query;
    _query.where = rule;
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_collection.prototype.add = function add(options) {
    var that = this;
    function _func(success, fail, complete) {
      options.data._openid = wx_cloud._openid;
      basement.db.collection(that.collectionName).insertOne(options.data).then(function (res2) {
        var res = {
          errMsg: 'collection.add:ok',
          _id: res2.result.insertedId
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud_collection.prototype.orderBy = function orderBy(fieldName, order) {
    var _query = this._query;
    _query.order = [{ fieldName: fieldName, order: order }];
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_collection.prototype.limit = function limit(number) {
    var _query = this._query;
    _query.limit = number;
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_collection.prototype.skip = function skip(number) {
    var _query = this._query;
    _query.skip = number;
    return new wx_cloud_query(this.collectionName, this.database, _query, this._field);
  };

  wx_cloud_collection.prototype.field = function field(definition) {
    return new wx_cloud_query(this.collectionName, this.database, this._query, definition);
  };

  wx_cloud_collection.prototype.get = function get(options) {
    var that = this;
    function _func(success, fail, complete) {
      basement.db.collection(that.collectionName).find({}, {
        sort: new Map(that._query.sort),
        limit: that._query.limit,
        skip: that._query.skip,
        projection: that._field
      }).then(function (res2) {
        var res = {
          errMsg: 'collection.get:ok',
          data: res2.result
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  return wx_cloud_collection;
}();

var wx_cloud_document = function () {
  function wx_cloud_document(collection, database, _field, id) {
    _classCallCheck(this, wx_cloud_document);

    this.collection = collection;
    this.database = database;
    this._field = _field;
    this._id = id;
  }

  wx_cloud_document.prototype.get = function get(options) {
    var that = this;
    function _func(success, fail, complete) {
      basement.db.collection(that.collection.collectionName).findOne({ _id: that._id }).then(function (res2) {
        var res = {
          errMsg: 'document.get:ok',
          data: res2.result
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud_document.prototype.update = function update(options) {
    var that = this;
    function _func(success, fail, complete) {
      basement.db.collection(that.collection.collectionName).updateOne({ _id: that._id }, { $set: options.data }).then(function (res2) {
        var res = {
          errMsg: 'docment.update:ok',
          stats: { updated: 1 }
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud_document.prototype.set = function set(options) {
    var that = this;
    function _func(success, fail, complete) {
      options.data = wx_cloud._openid;
      basement.db.collection(that.collection.collectionName).replaceOne({ _id: that._id }, { $set: options.data }).then(function (res2) {
        var res = {
          _id: that._id,
          errMsg: 'docment.set:ok',
          stats: { updated: 1, created: 0 }
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud_document.prototype.remove = function remove(options) {
    var that = this;
    function _func(success, fail, complete) {
      basement.db.collection(that.collection.collectionName).deleteOne({ _id: that._id }, { $set: options.data }).then(function (res2) {
        var res = {
          errMsg: 'docment.remove:ok',
          stats: { removed: 1 }
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud_document.prototype.field = function field(definition) {
    return new wx_cloud_query(this.collectionName, this.database, this._query, definition);
  };

  return wx_cloud_document;
}();

var wx_cloud_command = function () {
  function wx_cloud_command() {
    _classCallCheck(this, wx_cloud_command);
  }

  wx_cloud_command.prototype.geoNear = function geoNear(options) {};

  wx_cloud_command.prototype.geoWithin = function geoWithin(options) {};

  wx_cloud_command.prototype.geoIntersects = function geoIntersects(options) {};

  wx_cloud_command.prototype.eq = function eq(value) {
    return { $eq: value };
  };

  wx_cloud_command.prototype.neq = function neq(value) {
    return { $ne: value };
  };

  wx_cloud_command.prototype.lt = function lt(value) {
    return { $lt: value };
  };

  wx_cloud_command.prototype.lte = function lte(value) {
    return { $lte: value };
  };

  wx_cloud_command.prototype.gt = function gt(value) {
    return { $gt: value };
  };

  wx_cloud_command.prototype.gte = function gte(value) {
    return { $gte: value };
  };

  wx_cloud_command.prototype.in = function _in(value) {
    return { $in: value };
  };

  wx_cloud_command.prototype.nin = function nin(value) {
    return { $nin: value };
  };

  wx_cloud_command.prototype.and = function and(value) {
    return { $and: value };
  };

  wx_cloud_command.prototype.or = function or(value) {
    return { $or: value };
  };

  wx_cloud_command.prototype.set = function set(value) {
    return { $set: value };
  };

  wx_cloud_command.prototype.remove = function remove() {};

  wx_cloud_command.prototype.inc = function inc(value) {
    return { $inc: value };
  };

  wx_cloud_command.prototype.mul = function mul(value) {
    return { $mul: value };
  };

  wx_cloud_command.prototype.push = function push(value) {
    return { $push: value };
  };

  wx_cloud_command.prototype.pop = function pop(value) {
    return { $pop: value };
  };

  wx_cloud_command.prototype.shift = function shift(value) {
    return { $shift: value };
  };

  wx_cloud_command.prototype.unshift = function unshift(value) {
    return { $unshift: value };
  };

  return wx_cloud_command;
}();

var wx_cloud = function () {
  function wx_cloud() {
    _classCallCheck(this, wx_cloud);
  }

  wx_cloud.prototype.init = function init(options) {
    var that = this;
    var env = options.env;
    var traceUser = options.traceUser;
    /*
    basement.user.getInfo().then(user => {
      wx_cloud._openid = user.userId
    }).catch(console.error);
    */
  };

  wx_cloud.prototype.database = function database(options) {
    var env = void 0;
    if (options) {
      env = options.env;
    } else {
      env = null;
    }
    return new wx_cloud_database(env);
  };

  wx_cloud.prototype.callFunction = function callFunction(options) {
    return basement.function.invoke(options.name, options.data);
  };

  wx_cloud.prototype.uploadFile = function uploadFile(options) {
    var that = this;
    function _func(success, fail, complete) {
      var options2 = {
        filePath: options.filePath
      };
      if (options.header) {
        options2.headers = options.header;
      }
      basement.file.uploadFile(options2).then(function (res2) {
        var res = {
          errMsg: 'cloud.uploadFile:ok',
          statusCode: 200,
          fileID: res2.fileUrl
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      });
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud.prototype.getTempFileURL = function getTempFileURL(options) {
    var that = this;
    function _func(success, fail, complete) {
      var fileList = [];
      var func = function func(res2) {
        console.log(res2);
        fileList.push(res2.fileUrl);
        if (fileList.length < options.fileList.length) {
          return;
        }
        var res = {
          errMsg: 'cloud.getTempFileURL:ok',
          fileList: fileList
        };
        if (success) {
          success(res);
        }
        if (complete) {
          success(complete);
        }
      };
      for (var _iterator = options.fileList, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var url = _ref;

        var res = basement.file.getPrivateFileByUrl({
          fileUrl: url
        }).then(func);
      }
    }
    if (options && options.success) {
      _func(options.success, options.fail, options.complete);
    } else {
      return new Promise(_func);
    }
  };

  wx_cloud.prototype.deleteFile = function deleteFile(options) {};

  return wx_cloud;
}();
// /////////////////////// database ///////////////////////


exports.default = wx_cloud;

var wx_cloud_database = function () {
  function wx_cloud_database(env) {
    _classCallCheck(this, wx_cloud_database);

    var _Decoder = void 0;var _QuerySerializer = void 0;var _UpdateSerializer = void 0;
    //
    this.config = { env: env };
    this.command = new wx_cloud_command();
    this.Geo = new wx_cloud_geo();
    this.engine = new wx_cloud_engine();
  }

  wx_cloud_database.prototype.collection = function collection(collectionName) {
    return new wx_cloud_collection(this, collectionName);
  };

  wx_cloud_database.prototype.RegExp = function RegExp(initOptions) {};

  wx_cloud_database.prototype.serverDate = function serverDate(options) {
    var timestamp = new Date().getTime();
    if (options) {
      if (options.offset) {
        timestamp += options.offset;
      }
    }
    return new Date(timestamp);
  };

  _createClass(wx_cloud_database, [{
    key: 'Decoder',
    get: function get() {
      return this._Decoder;
    },
    set: function set(Decoder) {
      this._Decoder = Decoder;
    }
  }, {
    key: 'QuerySerializer',
    get: function get() {
      return this._QuerySerializer;
    },
    set: function set(QuerySerializer) {
      this._QuerySerializer = QuerySerializer;
    }
  }, {
    key: 'UpdateSerializer',
    get: function get() {
      return this._UpdateSerializer;
    },
    set: function set(UpdateSerializer) {
      this._UpdateSerializer = UpdateSerializer;
    }
  }]);

  return wx_cloud_database;
}();

var wx_cloud_geo = function () {
  function wx_cloud_geo() {
    _classCallCheck(this, wx_cloud_geo);
  }

  wx_cloud_geo.prototype.Point = function Point(longitude, latitude) {};

  wx_cloud_geo.prototype.LineString = function LineString() {};

  wx_cloud_geo.prototype.Polygon = function Polygon() {};

  wx_cloud_geo.prototype.MultiLineString = function MultiLineString() {};

  wx_cloud_geo.prototype.MultiPolygon = function MultiPolygon() {};

  return wx_cloud_geo;
}();

/***/ })

/******/ });