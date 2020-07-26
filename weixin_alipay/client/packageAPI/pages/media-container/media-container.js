import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'音视频合成',
            path:'packageAPI/pages/media-container/media-container'
        };
    },
    onLoad:function(){
        const canIUse = wx.canIUse('wx.createMediaContainer()');
        if(canIUse){
            this.mediaContainer = wx.createMediaContainer();
        } else {
            this.setData({
                canIUse:false
            });
            wx.showModal({
                title:'微信版本过低，暂不支持本功能'
            });
        }
    },
    data:{
        targetSrc:'',
        one:'',
        two:'',
        canIUse:true
    },
    handleChooseVideo:function(e){
        const that = this;
        wx.chooseVideo({
            sourceType:[
                'album',
                'camera'
            ],
            success:function(res){
                console.log(res.tempFilePath);
                that.setData({
                    [e.currentTarget.dataset.video]:res.tempFilePath
                });
                if(e.currentTarget.dataset.video === 'one'){
                    that.mediaContainer.extractDataSource({
                        source:that.data.one,
                        success:function(mt){
                            that.mediaTrackOne = mt;
                        }
                    });
                } else {
                    that.mediaContainer.extractDataSource({
                        source:that.data.two,
                        success:function(mt){
                            that.mediaTrackTwo = mt;
                        }
                    });
                }
            }
        });
    },
    handleExport:function(){
        if(this.data.one === '' || this.data.two === ''){
            wx.showToast({
                title:'请先选择源视频',
                icon:"none"
            });
        } else {
            console.log(this.mediaTrackOne,this.mediaTrackTwo);
            const [trackMedia] = this.mediaTrackOne.tracks.filter((item)=>{
                item.kind === 'video';
            });
            const [trackAudio] = this.mediaTrackTwo.tracks.filter((item)=>{
                item.kind === 'audio';
            });
            console.log(trackMedia,trackAudio);
            this.mediaContainer.addTrack(trackMedia);
            this.mediaContainer.addTrack(trackAudio);
            const that = this;
            this.mediaContainer.export({
                success:(res)=>{
                    that.setData({
                        targetSrc:res.tempFilePath
                    });
                }
            });
        }
    }
});
