import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{},
    onLoad:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'分页展现',
            path:'page/weui/example/pagination/pagination'
        };
    }
});
