import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序云开发文档',
            path:'page/cloud/pages/doc-web-view/doc-web-view'
        };
    }
});
