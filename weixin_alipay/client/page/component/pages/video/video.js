import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
function getRandomColor(){
    const rgb = [
    ];
    for(var i = 0;i < 3;++i){
        var color = Math.floor(Math.random() * 256).toString(16);
        color = color.length === 1?'0' + color:color;
        rgb.push(color);
    };
    return '#' + rgb.join('');
};
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'video',
            path:'page/component/pages/video/video'
        };
    },
    onReady:function(){
        this.videoContext = wx.createVideoContext('myVideo');
    },
    onHide:function(){
    },
    inputValue:'',
    data:{
        enableAutoRotation:true,
        src:'',
        danmuList:[
            {
                text:'第 1s 出现的弹幕',
                color:'#ff0000',
                time:1
            },
            {
                text:'第 3s 出现的弹幕',
                color:'#ff00ff',
                time:3
            }
        ]
    },
    bindInputBlur:function(e){
        this.inputValue = e.detail.value;
    },
    bindButtonTap:function(){
        const that = this;
        wx.chooseVideo({
            sourceType:[
                'album',
                'camera'
            ],
            maxDuration:60,
            camera:[
                'front',
                'back'
            ],
            success:function(res){
                that.setData({
                    src:res.tempFilePath
                });
            }
        });
    },
    bindVideoEnterPictureInPicture:function(){
        console.log('进入小窗模式');
    },
    bindVideoLeavePictureInPicture:function(){
        console.log('退出小窗模式');
    },
    bindPlayVideo:function(){
        this.videoContext.play();
    },
    bindSendDanmu:function(){
        this.videoContext.sendDanmu({
            text:this.inputValue,
            color:getRandomColor()
        });
    },
    videoErrorCallback:function(e){
        console.log('视频错误信息:');
        console.log(e.detail.errMsg);
    },
    handleSwitchChange:function(e){
        this.setData({
            enableAutoRotation:e.detail.value
        });
    }
});
