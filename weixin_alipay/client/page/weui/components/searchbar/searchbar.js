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
    return __webpack_require__(__webpack_require__.s = 25);
}({
    25:function(module,exports,__webpack_require__){
        "use strict"
;
        OnekitComponent({
            options:{
                addGlobalClass:true
            },
            properties:{
                extClass:{
                    type:String,
                    value:''
                },
                focus:{
                    type:Boolean,
                    value:false
                },
                placeholder:{
                    type:String,
                    value:'搜索'
                },
                value:{
                    type:String,
                    value:''
                },
                search:{
                    type:Function,
                    value:null
                },
                throttle:{
                    type:Number,
                    value:500
                },
                cancelText:{
                    type:String,
                    value:'取消'
                },
                cancel:{
                    type:Boolean,
                    value:true
                }
            },
            data:{
                result:[
                ]
            },
            lastSearch:Date.now(),
            lifetimes:{
                attached:function(){
                    if(this.data.focus){
                        this.setData({
                            searchState:true
                        });
                    }
                }
            },
            methods:{
                clearInput:function(){
                    this.setData({
                        value:'',
                        focus:true,
                        result:[
                        ]
                    });
                    this.triggerEvent('clear');
                },
                inputFocus:function(e){
                    this.triggerEvent('focus',e.detail);
                },
                inputBlur:function(e){
                    this.setData({
                        focus:false
                    });
                    this.triggerEvent('blur',e.detail);
                },
                showInput:function(){
                    this.setData({
                        focus:true,
                        searchState:true
                    });
                },
                hideInput:function(){
                    this.setData({
                        searchState:false
                    });
                },
                inputChange:function(e){
                    this.setData({
                        value:e.detail.value
                    });
                    this.triggerEvent('input',e.detail);
                    if(Date.now() - this.lastSearch < this.data.throttle){
                        return;
                    }
                    if(typeof this.data.search !== 'function'){
                        return;
                    }
                    this.lastSearch = Date.now();
                    this.timerId = setTimeout(()=>{
                        this.data.search(e.detail.value).then((json)=>{
    this.setData({
        result:json
    });
}).catch((err)=>{
                            console.error('search error',err);
                        });
                    },this.data.throttle);
                },
                selectResult:function(e){
                    const {index} = e.currentTarget.dataset;
                    const item = this.data.result[index];
                    this.triggerEvent('selectresult',{
                        index:index,
                        item:item
                    });
                }
            }
        });
    }
}));
