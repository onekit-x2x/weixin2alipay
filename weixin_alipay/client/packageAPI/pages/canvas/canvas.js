import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const example = require('./example.js');
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'创建画布',
            path:'packageAPI/pages/canvas/canvas'
        };
    },
    onLoad:function(){
        this.context = wx.createContext();
        const methods = Object.keys(example);
        this.setData({
            methods:methods
        });
        const that = this;
        methods.forEach(function(method){
            that[method] = function(){
                example[method](that.context);
                const actions = that.context.getActions();
                wx.drawCanvas({
                    canvasId:'canvas',
                    actions:actions
                });
            };
        });
    },
    toTempFilePath:function(){
        wx.canvasToTempFilePath({
            canvasId:'canvas',
            success:function(res){
                console.log(res);
            },
            fail:function(res){
                console.log(res);
            }
        });
    }
});
