import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'用户截屏事件',
            path:'packageAPI/pages/capture-screen/capture-screen'
        };
    },
    data:{
        captured:false
    },
    onLoad:function(){
        wx.onUserCaptureScreen(()=>{this.setData({
            captured:true
        })});
    }
});
