/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  props: {
    src: '',
    duration: null,
    controls: true,
    danmuList: [],
    danmuBtn: false,
    enableDanmu: false,
    autoplay: false,
    loop: false,
    muted: false,
    initialTime: 0,
    pagGesture: false,
    direction: null,
    //
    showProgress: true,
    showFullscreenBtn: true,
    showPlayBtn: true,
    showCenterPlayBtn: true,
    enableProgressGesture: true,
    objectFit: 'contain',
    poster: '',
    showMuteBtn: true,
    //
    title: '',
    //
    playBtnPosition: 'button',
    enablePlayGesture: false,
    //
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    //
    adUnitId: '',
    posterForCrawler: '',
    showCastingButton: false,
    pictureInPictureMode: '' || [],
    pictureInPictureShowPprogress: false,
    enableAutoRotation: false,
    showScreenLockButton: false,
    showSnapshotButton: false
  },
  deriveDataFromProps(data_props) {
    console.log(data_props)
    this._trigger_controlstoggle(data_props.controls)
  },
  didMount() {
    const that = this
    my.createSelectorQuery()
      .select('.onekit-video').boundingClientRect().exec((rect) => {
        that.setData({
          rect: rect[0]
        })
      })
    /*
    let lastTime = 0
    let index = 0
    const danmuList = []
    for (const danmu of this.props.danmuList) {
      if (lastTime < danmu.time) {
        index = 0
        lastTime = danmu.time
      }
      danmu.index = index
      index++
      danmuList.push(danmu)
    } */

    const danmuList = {}
    for (const danmu of this.props.danmuList) {
      let danmus = danmuList['t_' + danmu.time]
      if (!danmus) {
        danmus = []
      }
      danmus.push({
        text: danmu.text,
        color: danmu.color,
        index: danmus.length
      })
      danmuList['t_' + danmu.time] = danmus
    }
    this.setData({
      danmuList
    })
    this._trigger_seekcomplete()
    this._trigger_controlstoggle(this.props.controls)
  },
  methods: {
    video_play() {
      if (this.props.onPlay) {
        this.props.onPlay({})
      }
    },
    video_pause() {
      if (this.props.onPause) {
        this.props.onPause({})
      }
    },
    video_end() {
      if (this.props.onEnded) {
        this.props.onEnded({})
      }
    },
    video_timeupdate(e) {
      this.currentTime = e.detail.currentTime
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate(e.detail)
      }
    },
    video_fullscreenchange(e) {
      this._trigger_controlstoggle(this.props.controls && !e.detail.fullScreen)
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange(e.detail)
      }
    },
    video_waiting() {
      if (this.props.onLoading) {
        this.props.onLoading({})
      }
    },
    video_error() {
      if (this.props.onError) {
        this.props.onError({})
      }
    },
    _trigger_progress() {
      if (this.props.onProgress) {
        this.props.onProgress({})
      }
    },
    video_loadedmetadata() {
      if (this.props.onLoadedmetadata) {
        this.props.onLoadedmetadata({})
      }
    },
    _trigger_controlstoggle(show) {
      if (this.data.show === show) {
        return
      }
      this.data.show = show
      if (this.props.onControlstoggle) {
        this.props.onControlstoggle({
          show
        })
      }
    },
    _trigger_enterpictureinpicture() {
      if (this.props.onEnterpictureinpicture) {
        this.props.onEnterpictureinpicture({})
      }
    },
    _trigger_leavepictureinpicture() {
      if (this.props.onLeavepictureinpicture) {
        this.props.onLeavepictureinpicture({})
      }
    },
    _trigger_seekcomplete(positon) {
      if (this.props.duration) {
        const res = my.getSystemInfo()
        if (res.platform === 'iOS') {
          positon = this.props.duration * 1000
        } else if (res.platform === 'Android ') {
          positon = this.props.duration
        }
        if (this.props.onSeekcomplete) {
          this.props.onSeekcomplete({
            positon
          })
        }
      }
    }
  },
})
