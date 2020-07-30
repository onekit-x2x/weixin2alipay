import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'live-player',
            path:'page/component/pages/live-player/live-player'
        };
    },
    data:{
        videoSrc:""
    },
    onReady:function(res){
        this.ctx = wx.createLivePlayerContext('player');
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
    handleLivePlayerStateChange:function(e){
        console.log('live-player code:',e.detail.code);
    },
    handleLivePlayerError:function(e){
        console.error('live-player error:',e.detail.errMsg);
    },
    handlePlay:function(){
        this.ctx.play({
            success:(res)=>{console.log('play success')},
            fail:(res)=>{console.log('play fail')}
        });
    },
    handlePause:function(){
        this.ctx.pause({
            success:(res)=>{console.log('pause success')},
            fail:(res)=>{console.log('pause fail')}
        });
    },
    handleStop:function(){
        this.ctx.stop({
            success:(res)=>{console.log('stop success')},
            fail:(res)=>{console.log('stop fail')}
        });
    },
    handleResume:function(){
        this.ctx.resume({
            success:(res)=>{console.log('resume success')},
            fail:(res)=>{console.log('resume fail')}
        });
    },
    handleMute:function(){
        this.ctx.mute({
            success:(res)=>{console.log('mute success')},
            fail:(res)=>{console.log('mute fail')}
        });
    },
    handleVideoSrcInput:function(e){
        this.setData({
            videoSrc:e.detail.value
        });
    }
});
