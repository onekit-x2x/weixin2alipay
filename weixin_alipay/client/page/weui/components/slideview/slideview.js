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
    return __webpack_require__(__webpack_require__.s = 18);
}({
    18:function(module,exports,__webpack_require__){
        "use strict"
;
        OnekitComponent({
            options:{
                addGlobalClass:true,
                multipleSlots:true
            },
            properties:{
                extClass:{
                    type:String,
                    value:''
                },
                buttons:{
                    type:Array,
                    value:[
                    ],
                    observer:function(){
                        this.addClassNameForButton();
                    }
                },
                disable:{
                    type:Boolean,
                    value:false
                },
                icon:{
                    type:Boolean,
                    value:false
                },
                show:{
                    type:Boolean,
                    value:false
                },
                duration:{
                    type:Number,
                    value:350
                },
                throttle:{
                    type:Number,
                    value:40
                },
                rebounce:{
                    type:Number,
                    value:0
                }
            },
            data:{
                size:null
            },
            ready:function(){
                this.updateRight();
                this.addClassNameForButton();
            },
            methods:{
                updateRight:function(){
                    const data = this.data;
                    const query = wx.createSelectorQuery().in(this);
                    query.select('.left').boundingClientRect((res)=>{
    const btnQuery = wx.createSelectorQuery().in(this);
    btnQuery.selectAll('.btn').boundingClientRect((rects)=>{
    this.setData({
        size:{
            buttons:rects,
            button:res,
            show:data.show,
            disable:data.disable,
            throttle:data.throttle,
            rebounce:data.rebounce
        }
    });
}).exec();
}).exec();
                },
                addClassNameForButton:function(){
                    const {buttons,icon} = this.data;
                    buttons.forEach((btn)=>{
                        if(icon){
                            btn.className = '';
                        } else if(btn.type === 'warn'){
                            btn.className = 'weui-slideview__btn-group_warn';
                        } else {
                            btn.className = 'weui-slideview__btn-group_default';
                        }
                    });
                    this.setData({
                        buttons:buttons
                    });
                },
                buttonTapByWxs:function(data){
                    this.triggerEvent('buttontap',data,{});
                },
                hide:function(){
                    this.triggerEvent('hide',{},{});
                },
                show:function(){
                    this.triggerEvent('show',{},{});
                },
                transitionEnd:function(){
                }
            }
        });
    }
}));
