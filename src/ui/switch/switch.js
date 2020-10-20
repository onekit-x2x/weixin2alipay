/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    name: '',
    checked: false,
    disabled: false,
    type: 'switch',
    color: '#04BE02',
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    switch_Change(e) {
      console.log('switch_Change', e)
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    }
  },
})
