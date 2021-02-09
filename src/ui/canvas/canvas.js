/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'
import RenderingContext from '../../api/RenderingContext'
import Image from '../../api/Image'

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
    this.ctx = my.createCanvasContext(onekitId)
    this.setData({
      onekitId
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    cancelAnimationFrame(id) {
      return clearTimeout(id)
    },
    createImage() {
      return new Image()
    },
    // createPath2D(path) {},
    getContext(type) {
      switch (type) {
        case '2d':
          return new RenderingContext(this.ctx)
        case 'webGL':
          // console.warn('xxx')
          return 'webGL is not support'
        default:
          throw new Error('webGL is not support')
      }
    },
    requestAnimationFrame(callback) {
      return setTimeout(callback, 0)
    },
    toDataURL(callback, type = 'image/png', encoderOptions = 0.92) {
      this.ctx.toDataURL({
        fileType: type,
        quality: encoderOptions
        // eslint-disable-next-line promise/no-callback-in-promise
      }).then(callback).catch((err) => {
        throw new Error(err)
      })
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
