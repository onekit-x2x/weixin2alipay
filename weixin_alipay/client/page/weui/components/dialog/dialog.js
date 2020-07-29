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
    return __webpack_require__(__webpack_require__.s = 20);
}({
    20:function(module,exports,__webpack_require__){
        "use strict"
;
        OnekitComponent({
            options:{
                multipleSlots:true,
                addGlobalClass:true
            },
            properties:{
                title:{
                    type:String,
                    value:''
                },
                extClass:{
                    type:String,
                    value:''
                },
                maskClosable:{
                    type:Boolean,
                    value:true
                },
                mask:{
                    type:Boolean,
                    value:true
                },
                show:{
                    type:Boolean,
                    value:false,
                    observer:'_showChange'
                },
                buttons:{
                    type:Array,
                    value:[
                    ]
                }
            },
            data:{
                innerShow:false
            },
            ready:function(){
                const buttons = this.data.buttons;
                const len = buttons.length;
                buttons.forEach((btn,index)=>{
                    if(len === 1){
                        btn.className = 'weui-dialog__btn_primary';
                    } else if(index === 0){
                        btn.className = 'weui-dialog__btn_default';
                    } else {
                        btn.className = 'weui-dialog__btn_primary';
                    }
                });
                this.setData({
                    buttons:buttons
                });
            },
            methods:{
                buttonTap:function(e){
                    const {index} = e.currentTarget.dataset;
                    this.triggerEvent('buttontap',{
                        index:index,
                        item:this.data.buttons[index]
                    },{});
                },
                close:function(){
                    const data = this.data;
                    if(!data.maskClosable)return
                    this.setData({
                        show:false
                    });
                    this.triggerEvent('close',{},{});
                },
                stopEvent:function(){
                }
            }
        });
    }
}));
