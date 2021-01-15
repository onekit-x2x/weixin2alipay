/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    headerText: '',
    disabled: false,
    mode: 'selector',
    range: [],
    value: null,
    start: '',
    end: '',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    picker_Cancle(detail) {
      if (this.props.onCancle) {
        this.props.onCancle(detail)
      }
    },
    picker_Change(detail) {
      if (this.props.onChange) {
        this.props.onChange(detail)
      }
    },
    picker_Columnchange(detail) {
      if (this.props.onColumnchange) {
        this.props.onColumnchange(detail)
      }
    }
  },
})
