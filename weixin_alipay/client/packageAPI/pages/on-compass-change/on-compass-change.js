import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'监听罗盘数据',
            path:'packageAPI/pages/on-compass-change/on-compass-change'
        };
    },
    data:{
        enabled:true,
        direction:0
    },
    onReady:function(){
        const that = this;
        wx.onCompassChange(function(res){
            that.setData({
                direction:parseInt(res.direction,10)
            });
        });
    },
    startCompass:function(){
        if(this.data.enabled){
            return;
        }
        const that = this;
        wx.startCompass({
            success:function(){
                that.setData({
                    enabled:true
                });
            }
        });
    },
    stopCompass:function(){
        if(!this.data.enabled){
            return;
        }
        const that = this;
        wx.stopCompass({
            success:function(){
                that.setData({
                    enabled:false
                });
            }
        });
    }
});
