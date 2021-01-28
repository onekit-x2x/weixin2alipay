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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable no-console */
Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: '',
    headerText: '',
    disabled: false,
    range: [],
    value: '00:00',
    start: '',
    end: ''
  },
  didMount: function didMount() {
    var hours = [];
    for (var h = 0; h < 24; h++) {
      var hour = h >= 10 ? h : '0' + h;
      hours.push(hour);
    }
    var minutes = [];
    for (var m = 0; m < 60; m++) {
      var minute = m >= 10 ? m : '0' + m;
      minutes.push(minute);
    }
    this.setData({
      hours: hours,
      minutes: minutes
    });
  },
  didUpdate: function didUpdate() {},
  didUnmount: function didUnmount() {},

  methods: {
    time_show: function time_show() {
      if (this.props.disabled) {
        return;
      }
      var time = this.props.value.split(':');
      time = [parseInt(time[0], 10), parseInt(time[1], 10)];
      this.setData({
        time: time,
        show: true
      });
    },
    time_cancle: function time_cancle() {
      this.setData({
        show: false
      });
      if (this.props.onCancle) {
        this.props.onCancle();
      }
    },
    time_confirm: function time_confirm() {
      this.setData({
        show: false
      });
      if (this.props.onChange) {
        this.props.onChange({
          detail: {
            value: this.data.value
          }
        });
      }
    },
    _compareTime: function _compareTime(time1, time2) {
      var array1 = time1.split(':');
      var array2 = time2.split(':');
      var time1h = parseInt(array1[0], 10);
      var time1m = parseInt(array1[1], 10);
      var time2h = parseInt(array2[0], 10);
      var time2m = parseInt(array2[1], 10);
      if (time1h > time2h) {
        return true;
      } else if (time1h < time2h) {
        return false;
      } else if (time1h === time2h) {
        if (time1m > time2m) {
          return true;
        } else if (time1m < time2m) {
          return false;
        } else {
          return null;
        }
      } else {
        throw new Error('what?!');
      }
    },
    time_change: function time_change(e) {
      var current = e.detail.value;
      var h = current[0];
      h = h >= 10 ? h : '0' + h;
      var m = current[1];
      m = m >= 10 ? m : '0' + m;
      var value = h + ':' + m;
      if (this.props.start) {
        if (this._compareTime(value, this.props.start) === false) {
          var time = this.props.start.split(':');
          time = [parseInt(time[0], 10), parseInt(time[1], 10)];
          this.setData({
            value: this.props.start,
            time: time
          });
          return;
        }
      }
      if (this.props.end) {
        if (this._compareTime(value, this.props.end) === true) {
          var _time = this.props.end.split(':');
          _time = [parseInt(_time[0], 10), parseInt(_time[1], 10)];
          this.setData({
            value: this.props.end,
            time: _time
          });
          return;
        }
      }
      this.data.value = value;
    }
  }
});

/***/ })

/******/ });