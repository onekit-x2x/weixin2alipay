import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
const util = require('../../../util/util.js');
const backgroundAudioManager = wx.getBackgroundAudioManager();
var updateInterval;
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'背景音乐',
            path:'packageAPI/pages/background-audio/background-audio'
        };
    },
    onShow:function(){
        if(!backgroundAudioManager.paused && (backgroundAudioManager.paused !== undefined)){
            this._enableInterval();
            this.setData({
                playing:true
            });
        }
    },
    onLoad:function(){
        const that = this;
        backgroundAudioManager.onPlay(()=>{
            this._enableInterval();
            this.setData({
                pause:false
            });
        });
        backgroundAudioManager.onPause(()=>{
            clearInterval(updateInterval);
            that.setData({
                playing:false,
                pause:true
            });
        });
        backgroundAudioManager.onEnded(()=>{
            clearInterval(updateInterval);
            that.setData({
                playing:false,
                playTime:0,
                formatedPlayTime:util.formatTime(0)
            });
        });
        backgroundAudioManager.onStop(()=>{
            clearInterval(updateInterval);
            that.setData({
                playing:false,
                playTime:0,
                formatedPlayTime:util.formatTime(0)
            });
        });
    },
    data:{
        playing:false,
        pause:false,
        playTime:0,
        formatedPlayTime:'00:00:00'
    },
    play:function(){
        backgroundAudioManager.title = '此时此刻';
        backgroundAudioManager.epname = '此时此刻';
        backgroundAudioManager.singer = '许巍';
        backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000';
        const that = this;
        if(that.data.pause){
            backgroundAudioManager.play();
            this.setData({
                playing:true
            });
        } else {
            that.setData({
                playing:true
            },()=>{backgroundAudioManager.src = 'https://dldir1.qq.com/music/release/upload/t_mm_file_publish/2339610.m4a'});
        }
    },
    seek:function(e){
        backgroundAudioManager.seek(e.detail.value);
    },
    pause:function(){
        clearInterval(updateInterval);
        backgroundAudioManager.pause();
    },
    stop:function(){
        clearInterval(updateInterval);
        backgroundAudioManager.stop();
    },
    _enableInterval:function(){
        const that = this;
        function update(){
            console.log(backgroundAudioManager.currentTime);
            that.setData({
                playTime:backgroundAudioManager.currentTime + 1,
                formatedPlayTime:util.formatTime(backgroundAudioManager.currentTime + 1)
            });
        };
        updateInterval = setInterval(()=>{
update();
},()=>{
1000();
});
    },
    onUnload:function(){
        clearInterval(updateInterval);
    }
});
