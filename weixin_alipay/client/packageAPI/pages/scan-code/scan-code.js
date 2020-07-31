import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'扫码',
            path:'packageAPI/pages/scan-code/scan-code'
        };
    },
    data:{
        result:''
    },
    scanCode:function(){
        const that = this;
        wx.scanCode({
            success:function(res){
                that.setData({
                    result:res.result
                });
            },
            fail:function(){
            }
        });
    }
});
