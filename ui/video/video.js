import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [wxs_behavior],
  
  props: {
    onekitStyle:"",
    onekitClass:"",
    onekitId:"onekit-video",
    src:"",
    autoplay:true,
    poster:"",
    controls:true,
    muted:false,
    direction:'',
    loop:false,
    initialTime:'',
    showFullscreenBtn:true,
    showPlayBtn:true,
    showCenterPlayBtn:true,
    objectFit:'contain',
    showMuteBtn:true,

    danmuList:[],
    danmuBtn:false,
    enableDanmu:false,
    pagGesture:false,
    showProgress:true,
    enableProgressGesture:true,
  },
  didMount(){
    const that = this;
    my.createSelectorQuery().select(`.onekit-video`).boundingClientRect().exec((rect) => {
     that.setData({rect:rect[0]});
    })
    var lastTime = 0;
    var index = 0;
    const danmuList = [];
    for(const danmu of this.props.danmuList){
      if(lastTime<danmu.time){
        index=0;
        lastTime = danmu.time;
      }
      danmu.index = index;
      index++;
      danmuList.push(danmu);
    }
    this.setData({danmuList});
  },
  methods: {
      video_start(e) {
        if (this.props.onPlay) {
          this.props.onPlay({})
        }
      },
      video_pause(e) {
        if (this.props.onPause) {
          this.props.onPause({})
        }
      },
      video_end(e) {
        if (this.props.onEnded) {
          this.props.onEnded({})
        }
      },
      video_timeupdate(e) {
        if (this.props.onTimeUpdate) {
          this.props.onTimeUpdate({})
        }
      },
      video_fullscreenchange(e) {
        if (this.props.onFullScreenChange) {
          this.props.onFullScreenChange({})
        }
      },
      video_error(e) {
        if (this.props.onError) {
          this.props.onError({})
        }
      },


  },
});
