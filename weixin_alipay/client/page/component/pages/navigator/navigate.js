import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'navigatePage',
            path:'page/component/pages/navigator/navigate'
        };
    },
    onLoad:function(options){
        console.log(options);
        this.setData({
            title:options.title
        });
    }
});
