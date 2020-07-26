import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'icon',
            path:'page/component/pages/icon/icon'
        };
    }
});
