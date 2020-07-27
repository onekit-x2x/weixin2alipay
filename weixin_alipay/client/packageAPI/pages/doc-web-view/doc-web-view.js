import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序接口文档',
            path:'packageAPI/pages/doc-web-view/doc-web-view'
        };
    }
});
