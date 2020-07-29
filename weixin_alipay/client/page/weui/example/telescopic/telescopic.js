import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{},
    onLoad:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'左右伸缩',
            path:'page/weui/example/telescopic/telescopic'
        };
    }
});
