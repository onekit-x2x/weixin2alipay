import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{
        theme:'light'
    },
    onLoad:function(){
        this.setData({
            theme:wx.getSystemInfoSync().theme || 'light'
        });
        if(wx.onThemeChange){
            wx.onThemeChange(({theme})=>{
                this.setData({
                    theme:theme
                });
            });
        }
    },
    onShareAppMessage:function(){
        return {
            title:'自由布局',
            path:'page/weui/example/freelayout/freelayout'
        };
    }
});
