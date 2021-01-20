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
    pickerView_Change({detail}) {
      const dataset = this._dataset()
      if (this.props.onChange) {
        this.props.onChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    // 做不了
    _trigger_Pickstart({detail}) {
      const dataset = this._dataset()
      if (this.props.onPickstart) {
        this.props.onPickstart({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    _trigger_Pickend({detail}) {
      const dataset = this._dataset()
      if (this.props.onPickend) {
        this.props.onPickend({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
  },
})
