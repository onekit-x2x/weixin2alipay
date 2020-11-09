/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    disableScroll: false,
    type: '',
    width: 0,
    height: 0
  },

  didMount() {
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    canvas_TouchStart() {
      if (this.props.onTouchStart) {
        this.props.onTouchStart({})
      }
    },
    canvas_TouchMove() {
      if (this.props.onTouchMove) {
        this.props.onTouchMove({})
      }
    },
    canvas_TouchEnd() {
      if (this.props.onTouchEnd) {
        this.props.onTouchEnd({})
      }
    },
    canvas_TouchCancel() {
      if (this.props.onTouchCancel) {
        this.props.onTouchCancel({})
      }
    },
    canvas_LongTap() {
      if (this.props.onLongTap) {
        this.props.onLongTap({})
      }
    }
  },
})
