import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    data:{},
    requestSubscribeMessage:function(){
        const self = this;
        wx.requestSubscribeMessage({
            tmplIds:[
                'y1bXHAg_oDuvrQ3pHgcODcMPl-2hZHenWugsqdB2CXY'
            ],
            success:function(res){
                console.log(res);
                if(res.errMsg === 'requestSubscribeMessage:ok'){
                    self.subscribeMessageSend();
                }
            },
            complete:function(res){
                console.log(res);
            }
        });
    },
    subscribeMessageSend:function(){
        wx.cloud.callFunction({
            name:'openapi',
            data:{
                action:'sendSubscribeMessage'
            },
            success:(res)=>{
                console.warn('[云函数] [openapi] templateMessage.send 调用成功：',res);
                wx.showModal({
                    title:'订阅成功',
                    content:'请返回微信主界面查看',
                    showCancel:false
                });
            },
            fail:(err)=>{
                wx.showToast({
                    icon:'none',
                    title:'调用失败'
                });
                console.error('[云函数] [openapi] templateMessage.send 调用失败：',err);
            }
        });
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
            title:'订阅消息',
            path:'packageAPI/pages/subscribe-message/subscribe-message'
        };
    }
});
