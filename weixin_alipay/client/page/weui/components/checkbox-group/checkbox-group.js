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
    return __webpack_require__(__webpack_require__.s = 23);
}({
    23:function(module,exports,__webpack_require__){
        "use strict"
;
        OnekitComponent({
            properties:{
                multi:{
                    type:Boolean,
                    value:true,
                    observer:'_multiChange'
                },
                extClass:{
                    type:String,
                    value:''
                },
                prop:{
                    type:String,
                    value:''
                }
            },
            data:{
                targetList:[
                ],
                parentCell:null
            },
            relations:{
                '../checkbox/checkbox':{
                    type:'descendant',
                    linked:function(target){
                        this.data.targetList.push(target);
                        target.setMulti(this.data.multi);
                        if(!this.data.firstItem){
                            this.data.firstItem = target;
                        }
                        if(target !== this.data.firstItem){
                            target.setOuterClass('weui-cell_wxss');
                        }
                    },
                    unlinked:function(target){
                        var index = -1;
                        this.data.targetList.forEach(function(item,idx){
                            if(item === target){
                                index = idx;
                            }
                        });
                        this.data.targetList.splice(index,1);
                        if(!this.data.targetList){
                            this.data.firstItem = null;
                        }
                    }
                },
                '../form/form':{
                    type:'ancestor'
                },
                '../cells/cells':{
                    type:'ancestor',
                    linked:function(target){
                        if(!this.data.parentCell){
                            this.data.parentCell = target;
                        }
                        this.setParentCellsClass();
                    },
                    unlinked:function(target){
                        this.data.parentCell = null;
                    }
                }
            },
            methods:{
                checkedChange:function(checked,target){
                    console.log('checked change',checked);
                    if(this.data.multi){
                        var vals = [
                        ];
                        this.data.targetList.forEach(function(item){
                            if(item.data.checked){
                                vals.push(item.data.value);
                            }
                        });
                        this.triggerEvent('change',{
                            value:vals
                        });
                    } else {
                        var val = '';
                        this.data.targetList.forEach(function(item){
                            if(item === target){
                                val = item.data.value;
                            } else {
                                item.setData({
                                    checked:false
                                });
                            }
                        });
                        this.triggerEvent('change',{
                            value:val
                        },{});
                    }
                },
                setParentCellsClass:function(){
                    var className = this.data.multi?'weui-cells_checkbox':'';
                    if(this.data.parentCell){
                        this.data.parentCell.setCellsClass(className);
                    }
                },
                _multiChange:function(multi){
                    this.data.targetList.forEach(function(target){
                        target.setMulti(multi);
                    });
                    if(this.data.parentCell){
                        this.data.parentCell.setCellMulti(multi);
                    }
                    return multi;
                }
            }
        });
    }
}));
