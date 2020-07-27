import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    data:{
        value:''
    },
    onLoad:function(options){
    },
    onReady:function(){
    },
    onShow:function(){
    },
    onHide:function(){
    },
    onUnload:function(){
    },
    onPullDownRefresh:function(){
    },
    onReachBottom:function(){
    },
    onShareAppMessage:function(){
        return {
            title:'双向绑定',
            path:'packageAPI/pages/make-phone-call/make-phone-call'
        };
    }
});
