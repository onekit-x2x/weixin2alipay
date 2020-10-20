/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    name: '',
    value: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    disabled: false,
    maxlength: 140,
    cursorSpacing: 0,
    autoFocus: false,
    focus: false,
    confirmType: 'done',
    confirmHold: false,
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    input_Input(e) {
      if (this.props.onInput) {
        const result = this.props.onInput(e)
        if (result) {
          const value = result.value
          this.setData({value})
        }
      }
    },
    input_Focus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e)
      }
    },
    input_Blur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e)
      }
    },
    input_Confirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(e)
      }
    }
  },
})
