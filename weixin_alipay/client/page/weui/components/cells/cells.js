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
        OnekitComponent({
            options:{
                addGlobalClass:true,
                multipleSlots:true
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
                footer:{
                    type:String,
                    value:''
                }
            },
            data:{
                firstItem:null,
                checkboxCount:0,
                checkboxIsMulti:false,
                outerClass:'',
                childClass:''
            },
            relations:{
                '../cell/cell':{
                    type:'descendant',
                    linked:function(target){
                        if(!this.data.firstItem){
                            this.data.firstItem = target;
                        }
                        if(target !== this.data.firstItem){
                            target.setOuterClass('weui-cell_wxss');
                        }
                    }
                },
                '../form-page/form-page':{
                    type:'ancestor'
                },
                '../checkbox-group/checkbox-group':{
                    type:'descendant',
                    linked:function(target){
                        this.setData({
                            checkboxCount:this.data.checkboxCount + 1,
                            checkboxIsMulti:target.data.multi
                        });
                    },
                    unlinked:function(target){
                        this.setData({
                            checkboxCount:this.data.checkboxCount - 1,
                            checkboxIsMulti:target.data.multi
                        });
                    }
                }
            },
            methods:{
                setCellMulti:function(multi){
                    this.setData({
                        checkboxIsMulti:multi
                    });
                },
                setCellsClass:function(className){
                    this.setData({
                        childClass:className
                    });
                },
                setOuterClass:function(className){
                    this.setData({
                        outerClass:className
                    });
                }
            }
        });
    }
}));
