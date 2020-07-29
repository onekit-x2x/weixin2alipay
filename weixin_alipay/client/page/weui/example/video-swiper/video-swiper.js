import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
const urls = [
    'https://res.wx.qq.com/wxaliveplayer/htdocs/video14e1eea.mov',
    'https://res.wx.qq.com/wxaliveplayer/htdocs/video24e1eeb.mov',
    'https://res.wx.qq.com/wxaliveplayer/htdocs/video34e1eeb.mov',
    'https://res.wx.qq.com/wxaliveplayer/htdocs/video44e1eeb.mov',
    'https://res.wx.qq.com/wxaliveplayer/htdocs/video54e1eeb.mov'
];
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'video-swiper',
            path:'page/weui/example/video-swiper/video-swiper'
        };
    },
    data:{
        videoList:[
        ]
    },
    onLoad:function(){
        const videoList = urls.map((item,index)=>{
            return {
                id:index,
                url:item,
                objectFit:'contain'
            };
        });
        this.setData({
            videoList:videoList
        });
    },
    onReady:function(){
    },
    onShow:function(){
    },
    onHide:function(){
    },
    onUnload:function(){
    },
    onPlay:function(e){
    },
    onPause:function(e){
    },
    onEnded:function(e){
    },
    onError:function(e){
    },
    onWaiting:function(e){
    },
    onTimeUpdate:function(e){
    },
    onProgress:function(e){
    },
    onLoadedMetaData:function(e){
        console.log('LoadedMetaData',e);
    }
});
