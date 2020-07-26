import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'微信登录',
            path:'package/API/pages/login/login'
        };
    },
    onLoad:function(){
        this.setData({
            hasLogin:app.globalData.hasLogin
        });
    },
    data:{},
    login:function(){
        const that = this;
        wx.login({
            success:function(){
                app.globalData.hasLogin = true;
                that.setData({
                    hasLogin:true
                });
            }
        });
    }
});
