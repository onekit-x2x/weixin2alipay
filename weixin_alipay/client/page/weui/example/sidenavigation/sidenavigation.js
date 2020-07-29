import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{
        show:false,
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
    show:function(){
        this.setData({
            show:true
        });
    },
    hide:function(){
        this.setData({
            show:false
        });
    },
    onShareAppMessage:function(){
        return {
            title:'侧边导航栏',
            path:'page/weui/example/sidenavigation/sidenavigation'
        };
    }
});
