/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    name: '',
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0,
    color: '',
    selectedColor: '',
    activeColor: '',
    backgroundColor: '',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false,
  },
  didMount() {
    const value = Math.max(this.props.value, this.props.min)
    let backgroundColor
    let activeColor
    if (this.props.color || this.props.selectedColor) {
      backgroundColor = this.props.color
      activeColor = this.props.selectedColor
    } else if (this.props.backgroundColor) {
      backgroundColor = this.props.backgroundColor
      activeColor = this.props.activeColor
    } else {
      backgroundColor = '#e9e9e9'
      activeColor = '#1aad19'
    }

    this.setData({
      value,
      backgroundColor,
      activeColor
    })
  },
  methods: {
    slider_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
    slider_Changing(e) {
      if (this.props.onChanging) {
        this.props.onChanging(e)
      }
    }
  },
})
