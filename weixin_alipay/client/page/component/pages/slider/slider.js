import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const pageData = {
    onShareAppMessage:function(){
        return {
            title:'slider',
            path:'page/component/pages/slider/slider'
        };
    }
};
for(var i = 1;i < 5;++i){
    (function(index){
        pageData[('slider' + index) + 'change'] = function(e){
            console.log(('slider' + index) + '发生change事件，携带值为',e.detail.value);
        };
    }(i));
};
OnekitPage(pageData);
