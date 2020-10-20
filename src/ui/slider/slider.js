/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    name: '',
    min: 0,
    max: 100,
    step: 1,
    disabled: false,
    value: 0,
    color: '#e9e9e9',
    selectedColor: '#1aad19',
    activeColor: '#1aad19',
    backgroundColor: '#e9e9e9',
    blockSize: 28,
    blockColor: '#ffffff',
    showValue: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
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
