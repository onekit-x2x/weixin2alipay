import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'屏幕亮度',
            path:'packageAPI/pages/screen-brightness/screen-brightness'
        };
    },
    data:{
        screenBrightness:0
    },
    onLoad:function(){
        this._updateScreenBrightness();
    },
    changeBrightness:function(e){
        const value = Number.parseFloat(e.detail.value.toFixed(1));
        this.setData({
            screenBrightness:Number.parseFloat(e.detail.value.toFixed(1))
        });
        wx.setScreenBrightness({
            value:value
        });
    },
    _updateScreenBrightness:function(){
        wx.getScreenBrightness({
            success:(res)=>{
                console.log(res);
                this.setData({
                    screenBrightness:Number.parseFloat(res.value.toFixed(1))
                });
            },
            fail:function(err){
                console.error(err);
            }
        });
    }
});
