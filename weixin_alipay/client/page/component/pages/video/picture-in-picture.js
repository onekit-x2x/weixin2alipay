import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{},
    onLoad:function(options){
    },
    onReady:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'小窗模式',
            path:'page/component/pages/picture-in-picture/picture-in-picture'
        };
    }
});
