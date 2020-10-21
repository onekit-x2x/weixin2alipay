/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    url: '',
    openType: 'navigate',
    hoverClass: 'navigator-hover',
    hoverStartTime: '',
    hoverStayTime: ''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
