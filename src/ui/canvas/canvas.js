/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'
// import CanvasContext from '../../api/CanvasContext'

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
    this.setData({
      onekitId
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    getContext() {
      const alipayContext = my.createCanvasContext(this.props.onekitId)
      return alipayContext // new CanvasContext(alipayContext)
    },
    canvas_touchstart({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchstart) {
        this.props.onTouchstart({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_touchmove({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchmove) {
        this.props.onTouchmove({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_touchend({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchend) {
        this.props.onTouchend({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_touchcancel({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    canvas_longtap({
      detail
    }) {
      const dataset = this._dataset()
      if (this.props.onLongtap) {
        this.props.onLongtap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    //
    _trigger_error() {
      console.warn('暂不支持onError')
      // const dataset = this._dataset()
      // if (this.props.onError) {
      //   this.props.onError({
      //     detail,
      //     currentTarget: {
      //       dataset
      //     }
      //   })
      // }
    }
  },
})
