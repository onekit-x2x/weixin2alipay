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
    return __webpack_require__(__webpack_require__.s = 12);
}({
    12:function(module,exports,__webpack_require__){
        "use strict"
;
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol"?function(obj){
            return typeof obj;
        }:function(obj){
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype?"symbol":typeof obj;
        };
        OnekitComponent({
            properties:{
                span:{
                    type:Number,
                    value:24
                },
                offset:{
                    type:Number,
                    value:0
                },
                push:{
                    type:Number,
                    value:-1
                },
                pull:{
                    type:Number,
                    value:-1
                },
                xs:{
                    type:Number,
                    optionalTypes:[
                        Object
                    ],
                    value:-1
                },
                sm:{
                    type:Number,
                    optionalTypes:[
                        Object
                    ],
                    value:-1
                },
                md:{
                    type:Number,
                    optionalTypes:[
                        Object
                    ],
                    value:-1
                },
                lg:{
                    type:Number,
                    optionalTypes:[
                        Object
                    ],
                    value:-1
                },
                xl:{
                    type:Number,
                    optionalTypes:[
                        Object
                    ],
                    value:-1
                }
            },
            data:{
                classList:[
                    'weui-col'
                ],
                gutter:0,
                paddingLeft:0,
                paddingRight:0
            },
            relations:{
                "../row/index":{
                    type:'parent',
                    linked:function(target){
                        this.data.gutter = Number(target.data.gutter);
                        this.updateGutter();
                    },
                    linkChanged:function(target){
                        this.data.gutter = Number(target.data.gutter);
                        this.updateGutter();
                    }
                }
            },
            attached:function(){
                this.updateCol();
            },
            methods:{
                updateCol:function(){
                    var classList = [
                        'weui-col'
                    ];
                    var paddingLeft = void0,paddingRight = 0;
                    classList.push('weui-col-' + this.data.span);
                    classList.push('weui-col-offset-' + this.data.offset);
                    if(this.data.gutter){
                        paddingLeft = this.data.gutter / 2 + 'px';
                        paddingRight = paddingLeft;
                    }
                    if(this.data.push !== -1){
                        this.data.push && classList.push('weui-col-push-' + this.data.push);
                    }
                    if(this.data.pull !== -1){
                        this.data.pull && classList.push('weui-col-pull-' + this.data.pull);
                    }
                    this.screenSizeSet('xs',classList);
                    this.screenSizeSet('sm',classList);
                    this.screenSizeSet('md',classList);
                    this.screenSizeSet('lg',classList);
                    this.screenSizeSet('xl',classList);
                    return this.setData({
                        classList:classList
                    });
                },
                updateGutter:function(){
                    var paddingLeft = void0,paddingRight = 0;
                    if(this.data.gutter){
                        paddingLeft = this.data.gutter / 2 + 'px';
                        paddingRight = paddingLeft;
                    }
                    this.setData({
                        paddingLeft:paddingLeft,
                        paddingRight:paddingRight
                    });
                },
                screenSizeSet:function(screen,classList){
                    if(typeof this.data[screen] === 'number' && this.data[screen] !== -1){
                        classList.push('weui-col-' + screen + '-' + this.data[screen]);
                    } else if(_typeof(this.data[screen]) === 'object'){
                        typeof this.data[screen].offset === 'number' && classList.push('weui-col-' + screen + '-offset-' + this.data[screen].offset);
                        typeof this.data[screen].span === 'number' && classList.push('weui-col-' + screen + '-' + this.data[screen].span);
                    }
                }
            }
        });
    }
}));
