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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _onekit_behavior = __webpack_require__(1);

var _onekit_behavior2 = _interopRequireDefault(_onekit_behavior);

var _wxs_behavior = __webpack_require__(0);

var _wxs_behavior2 = _interopRequireDefault(_wxs_behavior);

var _weixin_behavior = __webpack_require__(2);

var _weixin_behavior2 = _interopRequireDefault(_weixin_behavior);

var _RenderingContext = __webpack_require__(25);

var _RenderingContext2 = _interopRequireDefault(_RenderingContext);

var _Image = __webpack_require__(26);

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Component({
  mixins: [_onekit_behavior2.default, _wxs_behavior2.default, _weixin_behavior2.default],
  data: {},
  props: {
    type: '2d',
    canvasId: '',
    disableScroll: false
  },

  didMount: function didMount() {
    var onekitId = this.props.canvasId || this.props.onekitId;
    this.ctx = my.createCanvasContext(onekitId);
    this.setData({
      onekitId: onekitId
    });
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      return clearTimeout(id);
    },
    createImage: function createImage() {
      return new _Image2.default();
    },

    // createPath2D(path) {},
    getContext: function getContext(type) {
      switch (type) {
        case '2d':
          return new _RenderingContext2.default(this.ctx);
        case 'webGL':
          // console.warn('xxx')
          return 'webGL is not support';
        default:
          throw new Error('webGL is not support');
      }
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      return setTimeout(callback, 0);
    },

    // toDataURLtype, encoderOptions {},

    canvas_touchstart: function canvas_touchstart(_ref) {
      var detail = _ref.detail;

      var dataset = this._dataset();
      if (this.props.onTouchstart) {
        this.props.onTouchstart({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_touchmove: function canvas_touchmove(_ref2) {
      var detail = _ref2.detail;

      var dataset = this._dataset();
      if (this.props.onTouchmove) {
        this.props.onTouchmove({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_touchend: function canvas_touchend(_ref3) {
      var detail = _ref3.detail;

      var dataset = this._dataset();
      if (this.props.onTouchend) {
        this.props.onTouchend({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_touchcancel: function canvas_touchcancel(_ref4) {
      var detail = _ref4.detail;

      var dataset = this._dataset();
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },
    canvas_longtap: function canvas_longtap(_ref5) {
      var detail = _ref5.detail;

      var dataset = this._dataset();
      if (this.props.onLongtap) {
        this.props.onLongtap({
          detail: detail,
          currentTarget: {
            dataset: dataset
          }
        });
      }
    },

    //
    _trigger_error: function _trigger_error() {
      console.warn('暂不支持onError');
      // const dataset = this._dataset()
      // if (this.props.onError) {
      //   this.props.onError({
      //     detail,
      //     currentTarget: {
      //       dataset
      //     }
      //   })
      // }
    }
  }
}); /* eslint-disable no-console */
/* eslint-disable camelcase */

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable camelcase */
/* eslint-disable no-console */
/* eslint-disable max-len */
var CanvasContext = function () {
  function CanvasContext(alipayCanvasContext) {
    _classCallCheck(this, CanvasContext);

    this.alipayCanvasContext = alipayCanvasContext;
  }

  CanvasContext.prototype.arc = function arc(x, y, radius, startAngle, endAngle) {
    var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    this.alipayCanvasContext.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.arcTo = function arcTo(x1, y1, x2, y2, radius) {
    this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.beginPath = function beginPath() {
    this.alipayCanvasContext.beginPath();
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.bezierCurveTo = function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.clearRect = function clearRect(x, y, width, height) {
    this.alipayCanvasContext.clearRect(x, y, width, height);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.clip = function clip() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    this.alipayCanvasContext.clip(path);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.closePath = function closePath() {
    this.alipayCanvasContext.closePath();
    // this.alipayCanvasContext.draw()
  };

  // eslint-disable-next-line class-methods-use-this


  CanvasContext.prototype.createImageData = function createImageData(width, height) {
    var length = width * height * 4;
    return {
      data: new Uint8ClampedArray(length),
      dataUnion: new Uint8ClampedArray(length),
      width: width,
      height: height
    };
  };

  CanvasContext.prototype.createLinearGradient = function createLinearGradient(x0, y0, x1, y1) {
    this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.createPattern = function createPattern(image, repetition) {
    this.alipayCanvasContext.createPattern(image, repetition);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.createRadialGradient = function createRadialGradient(x0, y0, r0, x1, y1, r1) {
    this.alipayCanvasContext.createRadialGradient(x0, y0, r0, x1, y1, r1);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.drawImage = function drawImage(image, sx, sy) {
    var sWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : image.width;
    var sHeight = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : image.height;
    var dx = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var dy = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var dWidth = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : image.width;
    var dHeight = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : image.height;

    this.alipayCanvasContext.drawImage(image.src, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this.alipayCanvasContext.draw(true);
  };

  CanvasContext.prototype.ellipse = function ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle) {
    var anticlockwise = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

    this.alipayCanvasContext.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.fill = function fill() {
    this.alipayCanvasContext.fill();
    this.alipayCanvasContext.draw(true);
  };

  CanvasContext.prototype.fillRect = function fillRect(x, y, width, height) {
    this.alipayCanvasContext.fillRect(x, y, width, height);
    this.alipayCanvasContext.draw(true);
  };

  //


  CanvasContext.prototype.fillText = function fillText(text, x, y) {
    var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    this.alipayCanvasContext.fillText(text, x, y, maxWidth);
    this.alipayCanvasContext.draw(true);
  };

  //


  CanvasContext.prototype.getImageData = function getImageData(sx, sy, sw, sh) {
    this.alipayCanvasContext.getImageData({
      x: sx,
      y: sy,
      width: sw,
      height: sh
    });
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.getLineDash = function getLineDash() {
    this.alipayCanvasContext.getLineDash();
    // this.alipayCanvasContext.draw()
  };

  //


  CanvasContext.prototype.isPointInPath = function isPointInPath(x, y) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    this.alipayCanvasContext.isPointInPath(path, x, y);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.isPointInStroke = function isPointInStroke(x, y) {
    var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    this.alipayCanvasContext.isPointInStroke(path, x, y);
    // this.alipayCanvasContext.draw()
  };

  //


  CanvasContext.prototype.lineTo = function lineTo(x, y) {
    this.alipayCanvasContext.lineTo(x, y);
    // this.alipayCanvasContext.draw()
  };

  //


  CanvasContext.prototype.measureText = function measureText(width) {
    this.alipayCanvasContext.measureText(width);
    // this.alipayCanvasContext.draw()
  };

  //


  CanvasContext.prototype.moveTo = function moveTo(x, y) {
    this.alipayCanvasContext.moveTo(x, y);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.putImageData = function putImageData(imagedata, dx, dy) {
    console.log(imagedata, dx, dy);
    this.alipayCanvasContext.putImageData({
      x: dx,
      y: dy,
      width: imagedata.width,
      height: imagedata.height,
      data: imagedata.data,
          success:console.log,
            fail:console.error
    });
    // this.alipayCanvasContext.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
  };

  CanvasContext.prototype.quadraticCurveTo = function quadraticCurveTo(cpx, cpy, x, y) {
    this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.rect = function rect(x, y, width, height) {
    this.alipayCanvasContext.rect(x, y, width, height);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.restore = function restore() {
    this.alipayCanvasContext.restore();
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.rotate = function rotate(_rotate) {
    this.alipayCanvasContext.rotate(_rotate);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.save = function save() {
    this.alipayCanvasContext.save();
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.scale = function scale(x, y) {
    this.alipayCanvasContext.scale(x, y);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.setLineDash = function setLineDash(segments) {
    this.alipayCanvasContext.setLineDash(segments);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.setTransform = function setTransform(a, b, c, d, e, f) {
    this.alipayCanvasContext.setTransform(a, b, c, d, e, f);
    // this.alipayCanvasContext.draw()
  };

  //


  CanvasContext.prototype.stroke = function stroke() {
    this.alipayCanvasContext.stroke();
    this.alipayCanvasContext.draw(true);
  };

  CanvasContext.prototype.strokeRect = function strokeRect(x, y, width, height) {
    this.alipayCanvasContext.strokeRect(x, y, width, height);
    this.alipayCanvasContext.draw(true);
  };

  //


  CanvasContext.prototype.strokeText = function strokeText(text, x, y) {
    var maxWidth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    this.alipayCanvasContext.strokeText(text, x, y, maxWidth);
    this.alipayCanvasContext.draw(true);
  };

  //


  CanvasContext.prototype.transform = function transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY);
    // this.alipayCanvasContext.draw()
  };

  CanvasContext.prototype.translate = function translate(x, y) {
    this.alipayCanvasContext.translate(x, y);
    // this.alipayCanvasContext.draw()
  };

  _createClass(CanvasContext, [{
    key: 'fillStyle',
    set: function set(color) {
      this._fillStyle = color;
      this.alipayCanvasContext.setFillStyle(color);
    },
    get: function get() {
      return this._fillStyle;
    }
  }, {
    key: 'font',
    set: function set(value) {
      this._font = value;
    },
    get: function get() {
      return this._font;
    }
  }, {
    key: 'globalAlpha',
    set: function set(alpha) {
      this._globalAlpha = alpha;
      this.alipayCanvasContext.setGlobalAlpha(alpha);
    },
    get: function get() {
      return this._globalAlpha;
    }

    //

  }, {
    key: 'globalCompositeOperation',
    set: function set(type) {
      this._globalCompositeOperation = type;
    },
    get: function get() {
      return this._globalCompositeOperation;
    }

    //

  }, {
    key: 'imageSmoothingEnabled',
    set: function set(value) {
      this._imageSmoothingEnabled = value;
    },
    get: function get() {
      return this._imageSmoothingEnabled;
    }
  }, {
    key: 'lineCap',
    set: function set(lineCap) {
      this._lineCap = lineCap;
      this.alipayCanvasContext.setLineCap(lineCap);
    },
    get: function get() {
      return this._lineCap;
    }

    //

  }, {
    key: 'lineDashOffset',
    set: function set(offset) {
      this._offset = offset;
    },
    get: function get() {
      return this._offset;
    }

    //

  }, {
    key: 'lineJoin',
    set: function set(lineJoin) {
      this._lineJoin = lineJoin;
    },
    get: function get() {
      return this._lineJoin;
    }
  }, {
    key: 'lineWidth',
    set: function set(lineWidth) {
      this._lineWidth = lineWidth;
    },
    get: function get() {
      return this._lineWidth;
    }
  }, {
    key: 'miterLimit',
    set: function set(miterLimit) {
      this._miterLimit = miterLimit;
    },
    get: function get() {
      return this._miterLimit;
    }
  }, {
    key: 'shadowColor',
    set: function set(color) {
      this._shadowColor = color;
    },
    get: function get() {
      return this._hadowColor;
    }

    //

  }, {
    key: 'shadowBlur',
    set: function set(level) {
      this._shadowBlur = level;
    },
    get: function get() {
      return this._shadowBlur;
    }

    //

  }, {
    key: 'shadowOffsetX',
    set: function set(offset) {
      this._shadowOffsetX = offset;
    },
    get: function get() {
      return this._shadowOffsetX;
    }

    //

  }, {
    key: 'shadowOffsetY',
    set: function set(offset) {
      this._shadowOffsetY = offset;
    },
    get: function get() {
      return this._shadowOffsetY;
    }
  }, {
    key: 'strokeStyle',
    set: function set(color) {
      this.strokeStyle = color;
    },
    get: function get() {
      return this.strokeStyle;
    }
  }, {
    key: 'textAlign',
    set: function set(align) {
      align = 'left' || false || false || false || false;
      this._textAlign = align;
    },
    get: function get() {
      return this._textAlign;
    }

    //

  }, {
    key: 'textBaseline',
    set: function set(vertical) {
      vertical = 'top' || false || false || false || false || false;
      this._textBaseline = vertical;
    },
    get: function get() {
      return this._textBaseline;
    }
  }]);

  return CanvasContext;
}();

exports.default = CanvasContext;

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/* eslint-disable camelcase */
var Image = function () {
  function Image() {
    _classCallCheck(this, Image);
  }

  _createClass(Image, [{
    key: "src",
    set: function set(src) {
      var _this = this;

      this._src = src;
      if (!this.onload) {
        return;
      }
      my.getImageInfo({
        src: src,
        success: function success(res) {
          _this._width = res.width;
          _this._height = res.height;
          _this.onload();
        },
        fail: function fail(err) {
          if (_this.onerror) {
            _this.onerror(err.errMsg);
          }
        }
      });
    },
    get: function get() {
      return this._src;
    }
  }, {
    key: "width",
    get: function get() {
      return this._width;
    }
  }, {
    key: "height",
    get: function get() {
      return this._height;
    }
  }, {
    key: "onload",
    set: function set(onload) {
      this._onload = onload;
    },
    get: function get() {
      return this._onload;
    }
  }, {
    key: "onerror",
    set: function set(onerror) {
      this._onerror = onerror;
    },
    get: function get() {
      return this._onerror;
    }
  }]);

  return Image;
}();

exports.default = Image;

/***/ })

/******/ });