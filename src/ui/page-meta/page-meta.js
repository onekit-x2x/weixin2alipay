/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {
    backgroundTextStyle: null,
    backgroundColor: null,
    backgroundColorTop: null,
    backgroundColorBottom: null,
    rootBackgroundColor: null,
    scrollTop: '',
    scrollDuration: 300,
    pageStyle: '',
    bodyFontSize: '',
    rootFontSize: '',
    pageOrientation: '',
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    _trigger_resize(e) {
      if (this.props.onResize) {
        this.props.onResize(e)
      }
    },
    _trigger_scroll(e) {
      if (this.props.onScroll) {
        this.props.onScroll(e)
      }
    },
    _trigger_scrolldone(e) {
      if (this.props.onScrolldone) {
        this.props.onScrolldone(e)
      }
    }
  },
})
