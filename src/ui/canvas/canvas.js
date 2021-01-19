/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    type: '2d',
    canvasId: '',
    disableScroll: false,
  },

  didMount() {
    const onekitId = this.props.canvasId || this.props.onekitId
    this.setData({onekitId})
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    canvas_touchstart() {
      if (this.props.onTouchStart) {
        this.props.onTouchStart({})
      }
    },
    canvas_touchmove() {
      if (this.props.onTouchMove) {
        this.props.onTouchMove({})
      }
    },
    canvas_touchend() {
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd({})
      }
    },
    canvas_touchcancel() {
      if (this.props.onTouchCancel) {
        this.props.onTouchCancel({})
      }
    },
    canvas_longtap() {
      if (this.props.onLongTap) {
        this.props.onLongTap({})
      }
    },
    //
    _trigger_error() {
      console.warn('暂不支持onError')
      // if (this.props.onError) {
      //   this.props.onError({})
      // }
    }
  },
})
