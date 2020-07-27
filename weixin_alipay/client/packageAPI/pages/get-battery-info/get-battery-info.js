import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取电池信息',
            path:'packageAPI/pages/get-battery-info/get-battery-info'
        };
    },
    data:{},
    getBatteryInfo:function(){
        wx.getBatteryInfo({
            complete:(res)=>{
                const msg = res.isCharging?'充电中':'使用电池中';
                this.setData({
                    level:res.level,
                    isCharging:msg
                });
            }
        });
    }
});
