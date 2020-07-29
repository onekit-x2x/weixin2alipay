import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitComponent({
    onShareAppMessage:function(){
        return {
            title:'form-age',
            path:'page/weui/example/form-age/form-age'
        };
    },
    data:{},
    methods:{}
});
