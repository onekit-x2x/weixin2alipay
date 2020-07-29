import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
function _next(){
    var that = this;
    if(this.data.progress >= 100){
        this.setData({
            disabled:false
        });
        return true;
    }
    this.setData({
        progress:++this.data.progress
    });
    setTimeout(function(){
        _next.call(that);
    },20);
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'progress',
            path:'page/weui/example/progress/progress'
        };
    },
    data:{
        progress:0,
        disabled:false
    },
    upload:function(){
        if(this.data.disabled)return
        this.setData({
            progress:0,
            disabled:true
        });
        _next.call(this);
    }
});
