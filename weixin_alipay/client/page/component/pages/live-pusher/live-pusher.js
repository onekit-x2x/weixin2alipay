import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'live-pusher',
            path:'page/component/pages/live-pusher/live-pusher'
        };
    },
    data:{
        videoSrc:''
    },
    onReady:function(res){
        this.ctx = wx.createLivePusherContext('pusher');
    },
    handleLivePusherStateChange:function(e){
        console.log('live-pusher code:',e.detail.code);
    },
    handleLivePusherError:function(e){
        console.error('live-pusher error:',e.detail.errMsg);
    },
    handleStart:function(){
        this.ctx.start({
            success:(res)=>{
                console.log('start success');
            },
            fail:(res)=>{
                console.log('start fail');
            }
        });
    },
    handleScanQRCode:function(){
        wx.scanCode({
            complete:(res)=>{
                const {result} = res;
                this.setData({
                    videoSrc:result
                });
            }
        });
    },
    handlePause:function(){
        this.ctx.pause({
            success:(res)=>{
                console.log('pause success');
            },
            fail:(res)=>{
                console.log('pause fail');
            }
        });
    },
    handleStop:function(){
        this.ctx.stop({
            success:(res)=>{
                console.log('stop success');
            },
            fail:(res)=>{
                console.log('stop fail');
            }
        });
    },
    handleResume:function(){
        this.ctx.resume({
            success:(res)=>{
                console.log('resume success');
            },
            fail:(res)=>{
                console.log('resume fail');
            }
        });
    },
    handleSwitchCamera:function(){
        this.ctx.switchCamera({
            success:(res)=>{
                console.log('switch camera success');
            },
            fail:(res)=>{
                console.log('switch camera fail');
            }
        });
    },
    handleVideoSrcInput:function(e){
        this.setData({
            videoSrc:e.detail.value
        });
    }
});
