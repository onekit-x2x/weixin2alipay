import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'movable',
            path:'packageAPI/pages/wxs/movable'
        };
    },
    data:{
        left:50,
        top:50,
        taptest:'taptest',
        show:true,
        dataObj:{
            obj:1
        }
    },
    onLoad:function(options){
    },
    onReady:function(){
        setTimeout(()=>{
            this.setData({});
        },3000);
    },
    taptest:function(){
        this.setData({
            show:false
        });
    }
});
