import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'camera',
            path:'page/component/pages/camera-scan-code/camera-scan-code'
        };
    },
    data:{
        result:{}
    },
    onReady:function(){
        wx.showModal({
            title:'提示',
            content:'将摄像头对准一维码即可扫描',
            showCancel:false
        });
    },
    scanCode:function(e){
        console.log('scanCode:',e);
        this.setData({
            result:e.detail
        });
    },
    navigateBack:function(){
        wx.navigateBack();
    },
    error:function(e){
        console.log(e.detail);
    }
});
