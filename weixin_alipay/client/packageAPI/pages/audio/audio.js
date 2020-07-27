import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'Audio',
            path:'packageAPI/pages/audio/audio'
        };
    },
    onReady:function(e){
        this.audioCtx = wx.createAudioContext('myAudio');
        this.audioCtx.setSrc('https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a');
        this.audioCtx.play();
    },
    data:{
        src:''
    },
    audioPlay:function(){
        this.audioCtx.play();
    },
    audioPause:function(){
        this.audioCtx.pause();
    },
    audio14:function(){
        this.audioCtx.seek(14);
    },
    audioStart:function(){
        this.audioCtx.seek(0);
    }
});
