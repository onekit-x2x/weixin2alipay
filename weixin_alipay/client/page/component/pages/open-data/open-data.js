import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'open-data',
            path:'page/component/pages/open-data/open-data'
        };
    }
});
