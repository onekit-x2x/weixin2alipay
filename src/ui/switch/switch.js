/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    name: '',
    checked: false,
    disabled: false,
    type: 'switch',
    color: '#04BE02',
    value: ''
  },
  methods: {
    switch_Change({detail}) {
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
    checkbox_Change({detail}) {
      const dataset = this._dataset()
      if (this.props.onChange) {
        this.props.onChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
