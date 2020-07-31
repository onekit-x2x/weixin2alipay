import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'WXML节点布局相交状态',
            path:'packageAPI/pages/intersection-observer/intersection-observer'
        };
    },
    data:{
        appear:false
    },
    onLoad:function(){
        this._observer = wx.createIntersectionObserver(this);
        this._observer.relativeTo('.scroll-view').observe('.ball',(res)=>{
            console.log(res);
            this.setData({
                appear:res.intersectionRatio > 0
            });
        });
    },
    onUnload:function(){
        if(this._observer)this._observer.disconnect()
    }
});
