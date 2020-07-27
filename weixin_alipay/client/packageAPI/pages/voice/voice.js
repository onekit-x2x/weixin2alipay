import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = require('../../../util/util.js');
var playTimeInterval;
var recordTimeInterval;
const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'录音',
            path:'packageAPI/pages/voice/voice'
        };
    },
    data:{
        recording:false,
        playing:false,
        hasRecord:false,
        recordTime:0,
        playTime:0,
        formatedRecordTime:'00:00:00',
        formatedPlayTime:'00:00:00'
    },
    onHide:function(){
        if(this.data.playing){
            this.stopVoice();
        } else if(this.data.recording){
            this.stopRecordUnexpectedly();
        }
    },
    onLoad:function(){
        const that = this;
        recorderManager.onStart(()=>{
            console.log('recorderManage: onStart');
            recordTimeInterval = setInterval(()=>{
                const recordTime = that.data.recordTime += 1;
                that.setData({
                    formatedRecordTime:util.formatTime(that.data.recordTime),
                    recordTime:recordTime
                });
            },1000);
        });
        recorderManager.onStop((res)=>{
            console.log('recorderManage: onStop');
            that.setData({
                hasRecord:true,
                recording:false,
                tempFilePath:res.tempFilePath,
                formatedPlayTime:util.formatTime(that.data.playTime)
            });
            clearInterval(recordTimeInterval);
        });
        innerAudioContext.onPlay(()=>{
            console.log('innerAudioContext: onPlay');
            playTimeInterval = setInterval(()=>{
                const playTime = that.data.playTime + 1;
                if(that.data.playTime === that.data.recordTime){
                    that.stopVoice();
                } else {
                    console.log('update playTime',playTime);
                    that.setData({
                        formatedPlayTime:util.formatTime(playTime),
                        playTime:playTime
                    });
                }
            },1000);
        });
        innerAudioContext.onStop(()=>{
        });
    },
    startRecord:function(){
        this.setData({
            recording:true
        });
        const options = {
            duration:10000,
            sampleRate:44100,
            numberOfChannels:1,
            encodeBitRate:192000,
            format:'aac',
            frameSize:50
        };
        recorderManager.start(options);
    },
    stopRecord:function(){
        recorderManager.stop();
    },
    stopRecordUnexpectedly:function(){
        const that = this;
        wx.stopRecord({
            success:function(){
                console.log('stop record success');
                clearInterval(recordTimeInterval);
                that.setData({
                    recording:false,
                    hasRecord:false,
                    recordTime:0,
                    formatedRecordTime:util.formatTime(0)
                });
            }
        });
    },
    playVoice:function(){
        innerAudioContext.src = this.data.tempFilePath;
        this.setData({
            playing:true
        },()=>{
            innerAudioContext.play();
        });
    },
    pauseVoice:function(){
        clearInterval(playTimeInterval);
        innerAudioContext.pause();
        this.setData({
            playing:false
        });
    },
    stopVoice:function(){
        clearInterval(playTimeInterval);
        innerAudioContext.stop();
        this.setData({
            playing:false,
            formatedPlayTime:util.formatTime(0),
            playTime:0
        });
    },
    clear:function(){
        clearInterval(playTimeInterval);
        innerAudioContext.stop();
        this.setData({
            playing:false,
            hasRecord:false,
            tempFilePath:'',
            formatedRecordTime:util.formatTime(0),
            recordTime:0,
            playTime:0
        });
    }
});
