import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'设置',
            path:'packageAPI/pages/setting/setting'
        };
    },
    data:{
        setting:{}
    },
    getSetting:function(){
        wx.getSetting({
            success:(res)=>{
                console.log(res);
                this.setData({
                    setting:res.authSetting
                });
            }
        });
    }
});
