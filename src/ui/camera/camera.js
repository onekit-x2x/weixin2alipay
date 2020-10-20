/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    devicePosition: 'back',
    flash: 'auto'
  },
  didMount() {
    const that = this
    this.cameraCtx = my.createMapContext(this.props.onekitId)

    my.createSelectorQuery().select('.onekit-camera').boundingClientRect().exec((rect) => {
      that.setData({rect: rect[0]})
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    camera_stop() {
      if (this.props.onStop) {
        this.props.onStop({})
      }
    },
    camera_error() {
      if (this.props.onError) {
        this.props.onError({})
      }
    }
  },
})
