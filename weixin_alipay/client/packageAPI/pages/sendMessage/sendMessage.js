import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'sendMessage',
            path:'packageAPI/pages/sendMessage/sendMessage'
        };
    }
});
