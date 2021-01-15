/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    name: '',
    value: '',
    indicatorStyle: '',
    indicatorClass: '',
    maskStyle: '',
    maskClass: ''
  },
  didMount() {},
  methods: {
    pickerView_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
    // 做不了
    _trigger_Pickstart(e) {
      if (this.props.onPickstart) {
        this.props.onPickstart(e)
      }
    },
    _trigger_Pickend(e) {
      if (this.props.onPickend) {
        this.props.onPickend(e)
      }
    },
  },
})
