/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
  },
  didMount() {
    const that = this
    this.livePusherCtx = my.createMapContext(this.props.onekitId)

    my.createSelectorQuery().select('.onekit-live-pusher').boundingClientRect().exec((rect) => {
      that.setData({rect: rect[0]})
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
