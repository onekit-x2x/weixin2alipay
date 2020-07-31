import {OnekitApp,OnekitPage,OnekitComponent} from '../../../../onekit/onekit.js';
import wx from '../../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'redirectPage',
            path:'page/component/pages/navigator/redirect'
        };
    },
    onLoad:function(options){
        console.log(options);
        this.setData({
            title:options.title
        });
    }
});
