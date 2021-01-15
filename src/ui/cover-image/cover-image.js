/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    src: ''
  },
  methods: {
    // 做不了
    _trigger_load(detail) {
      if (this.props.onLoad) {
        this.props.onLoad(detail)
      }
    },
    // 做不了
    _trigger_error(detail) {
      if (this.props.onError) {
        this.props.onError(detail)
      }
    },
  },
})
