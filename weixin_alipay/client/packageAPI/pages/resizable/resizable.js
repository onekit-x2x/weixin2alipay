import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'屏幕旋转',
            path:'package/API/pages/resizable/resizable'
        };
    },
    data:{
        status:'lock'
    },
    handleStatusChange:function(e){
        this.setData({
            status:e.currentTarget.dataset.status
        });
    }
});
