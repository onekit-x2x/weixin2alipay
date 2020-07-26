import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const info = wx.getSystemInfoSync();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'ad',
            path:'page/component/pages/ad/ad'
        };
    },
    data:{
        platform:info.platform
    }
});
