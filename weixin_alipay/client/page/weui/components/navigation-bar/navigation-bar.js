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
    return __webpack_require__(__webpack_require__.s = 3);
}({
    3:function(module,exports,__webpack_require__){
        "use strict"
;
        OnekitComponent({
            options:{
                multipleSlots:true,
                addGlobalClass:true
            },
            properties:{
                extClass:{
                    type:String,
                    value:''
                },
                title:{
                    type:String,
                    value:''
                },
                background:{
                    type:String,
                    value:''
                },
                color:{
                    type:String,
                    value:''
                },
                back:{
                    type:Boolean,
                    value:true
                },
                loading:{
                    type:Boolean,
                    value:false
                },
                animated:{
                    type:Boolean,
                    value:true
                },
                show:{
                    type:Boolean,
                    value:true,
                    observer:'_showChange'
                },
                delta:{
                    type:Number,
                    value:1
                }
            },
            data:{
                displayStyle:''
            },
            attached:function(){
                const isSupport = !!wx.getMenuButtonBoundingClientRect;
                const rect = wx.getMenuButtonBoundingClientRect?wx.getMenuButtonBoundingClientRect():null;
                wx.getSystemInfo({
                    success:(res)=>{
                        const ios = !!res.system.toLowerCase().search('ios') + 1;
                        this.setData({
                            ios:ios,
                            statusBarHeight:res.statusBarHeight,
                            innerWidth:isSupport?`width:${rect.left}px`:'',
                            innerPaddingRight:isSupport?`padding-right:${res.windowWidth - rect.left}px`:'',
                            leftWidth:isSupport?`width:${res.windowWidth - rect.left}px`:''
                        });
                    }
                });
            },
            methods:{
                _showChange:function(show){
                    const animated = this.data.animated;
                    var displayStyle = '';
                    if(animated){
                        displayStyle = `opacity: ${show?'1':'0'};-webkit-transition:opacity 0.5s;transition:opacity 0.5s;`;
                    } else {
                        displayStyle = `display: ${show?'':'none'}`;
                    }
                    this.setData({
                        displayStyle:displayStyle
                    });
                },
                back:function(){
                    const data = this.data;
                    if(data.delta){
                        wx.navigateBack({
                            delta:data.delta
                        });
                    }
                    this.triggerEvent('back',{
                        delta:data.delta
                    },{});
                }
            }
        });
    }
}));
