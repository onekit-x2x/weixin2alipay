import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{},
    onLoad:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'换行排列',
            path:'page/weui/example/linebreak/linebreak'
        };
    }
});
