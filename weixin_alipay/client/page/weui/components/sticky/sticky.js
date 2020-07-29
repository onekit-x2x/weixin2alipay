import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
module.exports = (function(modules){
    var installedModules = {};
    function __webpack_require__(moduleId){
        if(installedModules[moduleId]){
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i:moduleId,
            l:false,
            exports:{}
        };
        modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);
        module.l = true;
        return module.exports;
    };
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports,name,getter){
        if(!__webpack_require__.o(exports,name)){
            Object.defineProperty(exports,name,{
                enumerable:true,
                get:getter
            });
        }
    };
    __webpack_require__.r = function(exports){
        if(typeof Symbol !== 'undefined' && Symbol.toStringTag){
            Object.defineProperty(exports,Symbol.toStringTag,{
                value:'Module'
            });
        }
        Object.defineProperty(exports,'__esModule',{
            value:true
        });
    };
    __webpack_require__.t = function(value,mode){
        if(mode & 1)value = __webpack_require__(value)
        if(mode & 8)return value
        if(mode & 4 && typeof value === 'object' && value && value.__esModule)return value
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns,'default',{
            enumerable:true,
            value:value
        });
        if(mode & 2 && typeof value != 'string')for(var key in value)__webpack_require__.d(ns,key,function(key){
    return value[key];
}.bind(null,key))
        return ns;
    };
    __webpack_require__.n = function(module){
        var getter = module && module.__esModule?function(){
            return module['default'];
        }:function(){
            return module;
        };
        __webpack_require__.d(getter,'a',getter);
        return getter;
    };
    __webpack_require__.o = function(object,property){
        return Object.prototype.hasOwnProperty.call(object,property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 8);
}({
    8:function(module,exports,__webpack_require__){
        "use strict"
;
        var selectQuery = __webpack_require__(9);
        var target = '.weui-sticky';
        OnekitComponent({
            options:{
                addGlobalClass:true,
                pureDataPattern:new RegExp("^_",""),
                multipleSlots:true
            },
            behaviors:[
                selectQuery
            ],
            properties:{
                offsetTop:{
                    type:Number,
                    value:0
                },
                zIndex:{
                    type:Number,
                    value:99
                },
                disabled:{
                    type:Boolean,
                    value:false
                },
                container:{
                    type:null
                }
            },
            data:{
                fixed:false,
                height:0,
                _attached:false,
                _containerHeight:0
            },
            observers:{
                disabled:function(newVal){
                    if(!this._attached)return
                    newVal?this.disconnectObserver():this.initObserver();
                },
                container:function(newVal){
                    if(typeof newVal !== 'function' || !this.data.height)return
                    this.observerContainer();
                }
            },
            lifetimes:{
                attached:function(){
                    this.data._attached = true;
                    if(!this.data.disabled)this.initObserver()
                },
                detached:function(){
                    this.data._attached = false;
                    this.disconnectObserver();
                }
            },
            methods:{
                getContainerRect:function(){
                    var nodesRef = this.data.container();
                    return new Promise(function(resolve){
                        return nodesRef.boundingClientRect(resolve).exec();
                    });
                },
                initObserver:function(){
                    var _this = this;
                    this.disconnectObserver();
                    this.getRect(target).then(function(rect){
                        _this.setData({
                            height:rect.height
                        });
                        _this.observerContent();
                        _this.observerContainer();
                    });
                },
                disconnectObserver:function(observerName){
                    if(observerName){
                        var observer = this[observerName];
                        observer && observer.disconnect();
                    } else {
                        this.contentObserver && this.contentObserver.disconnect();
                        this.containerObserver && this.containerObserver.disconnect();
                    }
                },
                observerContent:function(){
                    var _this2 = this;
                    var offsetTop = this.data.offsetTop;
                    this.disconnectObserver('contentObserver');
                    var contentObserver = this.createIntersectionObserver({
                        thresholds:[
                            1
                        ],
                        initialRatio:1
                    });
                    contentObserver.relativeToViewport({
                        top:-offsetTop
                    });
                    contentObserver.observe(target,function(res){
                        if(_this2.data.disabled)return
                        _this2.setFixed(res.boundingClientRect.top);
                    });
                    this.contentObserver = contentObserver;
                },
                observerContainer:function(){
                    var _this3 = this;
                    var _data = this.data,container = _data.container,height = _data.height,offsetTop = _data.offsetTop;
                    if(typeof container !== 'function')return
                    this.disconnectObserver('containerObserver');
                    this.getContainerRect().then(function(rect){
                        _this3.getRect(target).then(function(contentRect){
                            var _contentTop = contentRect.top;
                            var _containerTop = rect.top;
                            var _containerHeight = rect.height;
                            var _relativeTop = _contentTop - _containerTop;
                            var containerObserver = _this3.createIntersectionObserver({
                                thresholds:[
                                    1
                                ],
                                initialRatio:1
                            });
                            containerObserver.relativeToViewport({
                                top:_containerHeight - height - offsetTop - _relativeTop
                            });
                            containerObserver.observe(target,function(res){
                                if(_this3.data.disabled)return
                                _this3.setFixed(res.boundingClientRect.top);
                            });
                            _this3.data._relativeTop = _relativeTop;
                            _this3.data._containerHeight = _containerHeight;
                            _this3.containerObserver = containerObserver;
                        });
                    });
                },
                setFixed:function(top){
                    var _data2 = this.data,height = _data2.height,_containerHeight = _data2._containerHeight,_relativeTop = _data2._relativeTop,offsetTop = _data2.offsetTop;
                    var fixed = _containerHeight && height?top >= height + offsetTop + _relativeTop - _containerHeight && top < offsetTop:top < offsetTop;
                    this.triggerEvent('scroll',{
                        scrollTop:top,
                        isFixed:fixed
                    });
                    this.setData({
                        fixed:fixed
                    });
                }
            }
        });
    },
    9:function(module,exports,__webpack_require__){
        "use strict"
;
        module.exports = Behavior({
            methods:{
                getRect:function(selector){
                    var _this = this;
                    return new Promise(function(resolve,reject){
                        _this.createSelectorQuery().select(selector).boundingClientRect(function(rect){
    if(rect){
        resolve(rect);
    } else {
        reject(new Error("can not find selector: " + selector));
    }
}).exec();
                    });
                },
                getAllRects:function(selector){
                    var _this2 = this;
                    return new Promise(function(resolve,reject){
                        _this2.createSelectorQuery().selectAll(selector).boundingClientRect(function(rects){
    if(rects && rects.lenght > 0){
        resolve(rects);
    } else {
        reject(new Error("can not find selector: " + selector));
    }
}).exec();
                    });
                }
            }
        });
    }
}));
