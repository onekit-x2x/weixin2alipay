import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'msg',
            path:'page/weui/example/msg/msg'
        };
    },
    openSuccess:function(){
        wx.navigateTo({
            url:'msg_success'
        });
    },
    openText:function(){
        wx.navigateTo({
            url:'msg_text'
        });
    },
    openTextPrimary:function(){
        wx.navigateTo({
            url:'msg_text_primary'
        });
    },
    openFail:function(){
        wx.navigateTo({
            url:'msg_fail'
        });
    }
});
