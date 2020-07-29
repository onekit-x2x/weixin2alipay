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
    return __webpack_require__(__webpack_require__.s = 9);
}({
    9:function(module,exports,__webpack_require__){
        "use strict"
;
        OnekitComponent({
            options:{
                addGlobalClass:true,
                multipleSlots:true
            },
            properties:{
                hover:{
                    type:Boolean,
                    value:false
                },
                link:{
                    type:Boolean,
                    value:false
                },
                extClass:{
                    type:String,
                    value:''
                },
                iconClass:{
                    type:String,
                    value:''
                },
                bodyClass:{
                    type:String,
                    value:''
                },
                icon:{
                    type:String,
                    value:''
                },
                title:{
                    type:String,
                    value:''
                },
                value:{
                    type:String,
                    value:''
                },
                showError:{
                    type:Boolean,
                    value:false
                },
                prop:{
                    type:String,
                    value:''
                },
                url:{
                    type:String,
                    value:''
                },
                footerClass:{
                    type:String,
                    value:''
                },
                footer:{
                    type:String,
                    value:''
                },
                inline:{
                    type:Boolean,
                    value:true
                },
                hasHeader:{
                    type:Boolean,
                    value:true
                },
                hasFooter:{
                    type:Boolean,
                    value:true
                },
                hasBody:{
                    type:Boolean,
                    value:true
                }
            },
            relations:{
                '../form/form':{
                    type:'ancestor'
                },
                '../cells/cells':{
                    type:'ancestor'
                }
            },
            data:{
                inForm:false
            },
            methods:{
                setError:function(error){
                    this.setData({
                        error:error || false
                    });
                },
                setInForm:function(){
                    this.setData({
                        inForm:true
                    });
                },
                setOuterClass:function(className){
                    this.setData({
                        outerClass:className
                    });
                },
                navigateTo:function(){
                    var data = this.data;
                    if(data.url && data.link){
                        wx.navigateTo({
                            url:data.url,
                            success:(res)=>{
                                this.triggerEvent('navigatesuccess',res,{});
                            },
                            fail:(fail)=>{
                                this.triggerEvent('navigateerror',fail,{});
                            }
                        });
                    }
                }
            }
        });
    }
}));
