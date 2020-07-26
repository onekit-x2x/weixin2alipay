import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'联系客服',
            path:'packageAPI/pages/custom-service/custom-service'
        };
    }
});
