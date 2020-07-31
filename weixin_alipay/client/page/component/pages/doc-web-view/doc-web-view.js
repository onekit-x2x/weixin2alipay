import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'小程序组件文档',
            path:'page/component/pages/doc-web-view/doc-web-view'
        };
    }
});
