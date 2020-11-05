import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
global = {};
function getRandomColor(){
    const rgb = [
    ];
    for(var i = 0;(i < 3);++i){
        var color = Math.floor((Math.random() * 256)).toString(16);
        color = (color.length == 1)?('0' + color):color;
        rgb.push(color);
    };
    return ('#' + rgb.join(''));
};
OnekitPage({
    onReady:function(res){
        this.videoContext = wx.createVideoContext('myVideo');
    },
    inputValue:'',
    data:{
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
    bindSendDanmu:function(){
        this.videoContext.sendDanmu({
        text:this.inputValue,
        color:getRandomColor()
    });
    },
    bindPlay:function(){
        this.videoContext.play();
    },
    bindPause:function(){
        this.videoContext.pause();
    },
    videoErrorCallback:function(e){
        console.log('视频错误信息:');
        console.log(e.detail.errMsg);
    }
});
