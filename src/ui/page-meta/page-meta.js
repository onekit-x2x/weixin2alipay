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
    _trigger_resize({detail}) {
      const dataset = this._dataset()
      if (this.props.onResize) {
        this.props.onResize({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    _trigger_scroll({detail}) {
      const dataset = this._dataset()
      if (this.props.onScroll) {
        this.props.onScroll({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    _trigger_scrolldone({detail}) {
      const dataset = this._dataset()
      if (this.props.onScrolldone) {
        this.props.onScrolldone({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
