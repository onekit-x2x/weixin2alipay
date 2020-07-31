import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'webview',
            path:'page/component/pages/web-view/web-view'
        };
    }
});
