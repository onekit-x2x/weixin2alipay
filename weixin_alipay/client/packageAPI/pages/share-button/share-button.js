import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'转发按钮',
            path:'packageAPI/pages/share-button/share-button'
        };
    },
    handleTapShareButton:function(){
        if(!(typeof wx.canIUse === 'function') && wx.canIUse('button.open-type.share')){
            wx.showModal({
                title:'当前版本不支持转发按钮',
                content:'请升级至最新版本微信客户端',
                showCancel:false
            });
        }
    }
});
