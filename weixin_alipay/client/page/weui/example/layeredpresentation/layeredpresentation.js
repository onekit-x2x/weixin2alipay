import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    data:{
        hide1:false,
        hide2:false,
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
    onClick:function(e){
        this.setData({
            [e.target.dataset.set]:true
        });
    },
    onShareAppMessage:function(){
        return {
            title:'分层展现',
            path:'page/weui/example/layeredpresentation/layeredpresentation'
        };
    }
});
