import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'页面滚动',
            path:'packageAPI/pages/page-scroll/page-scroll'
        };
    },
    scrollToTop:function(){
        wx.pageScrollTo({
            scrollTop:0,
            duration:300
        });
    },
    scrollToBottom:function(){
        wx.pageScrollTo({
            scrollTop:3000,
            duration:300
        });
    }
});
