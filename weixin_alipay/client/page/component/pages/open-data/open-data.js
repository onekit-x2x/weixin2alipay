import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'open-data',
            path:'page/component/pages/open-data/open-data'
        };
    }
});
