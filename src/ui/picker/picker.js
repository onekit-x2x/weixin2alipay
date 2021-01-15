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
    picker_Cancle(e) {
      if (this.props.onCancle) {
        this.props.onCancle(e)
      }
    },
    picker_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
    picker_Columnchange(e) {
      if (this.props.onColumnchange) {
        this.props.onColumnchange(e)
      }
    }
  },
})
