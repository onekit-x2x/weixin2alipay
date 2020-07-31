import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    data:{
        shareData:{
            title:'自定义转发标题',
            desc:'自定义转发描述',
            path:'packageAPI/pages/share/share'
        }
    },
    onShareAppMessage:function(){
        return this.data.shareData;
    }
});
