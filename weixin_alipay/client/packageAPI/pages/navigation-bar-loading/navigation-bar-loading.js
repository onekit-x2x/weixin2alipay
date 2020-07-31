import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'标题栏加载动画',
            path:'packageAPI/pages/navigation-bar-loading/navigation-bar-loading'
        };
    },
    showNavigationBarLoading:function(){
        wx.showNavigationBarLoading();
    },
    hideNavigationBarLoading:function(){
        wx.hideNavigationBarLoading();
    }
});
