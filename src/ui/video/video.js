/* eslint-disable no-console */
/* eslint-disable camelcase */
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [wxs_behavior],

  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: 'onekit-video',
    src: '',
    duration: null,
    controls: true,
    danmuList: [],
    danmuBtn: false,
    enableDanmu: false,
    autoplay: true,
    loop: false,
    muted: false,
    initialTime: '',
    pagGesture: false,
    direction: '',
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
    playBtnPosition: 'button',
    enablePlayGesture: false,
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
    vslideGesture: false,
    vslideGestureInFullscreen: true,
    adUnitId: '',
    posterForCrawler: '',
    showCastingButton: false,
    pictureInPictureMode: '' || [],
    pictureInPictureShowPprogress: false,
    enableAutoRotation: false,
    showScreenLockButton: false,
    showSnapshotButton: false
  },
  didMount() {
    const that = this
    my.createSelectorQuery()
      .select('.onekit-video').boundingClientRect().exec((rect) => {
        const width = rect[0].width
        const height = rect[0].height
        that.setData({
          rect: rect[0],
          width,
          height
        })
      })
    my.createIntersectionObserver().relativeToViewport().observe('.logo', (res) => {
      console.log(res.time) // 时间戳
    })
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
    }
    this.setData({danmuList})
  },
  methods: {
    video_start() {
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
    video_timeupdate() {
      if (this.props.onTimeUpdate) {
        this.props.onTimeUpdate({})
      }
    },
    video_fullscreenchange() {
      if (this.props.onFullScreenChange) {
        this.props.onFullScreenChange({})
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


  },
})
