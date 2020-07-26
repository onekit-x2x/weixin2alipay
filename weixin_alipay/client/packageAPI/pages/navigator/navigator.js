import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'页面跳转',
            path:'packageAPI/pages/navigator/navigator'
        };
    },
    navigateTo:function(){
        wx.navigateTo({
            url:'./navigator'
        });
    },
    navigateBack:function(){
        wx.navigateBack();
    },
    redirectTo:function(){
        wx.redirectTo({
            url:'./navigator'
        });
    },
    switchTab:function(){
        wx.switchTab({
            url:'/page/component/index'
        });
    },
    reLaunch:function(){
        wx.reLaunch({
            url:'/page/component/index'
        });
    }
});
