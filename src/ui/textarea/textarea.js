/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    name: '',
    value: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: 'textarea-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: -1,
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    holdKeyboard: false,
    disableDefaultPadding: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    textarea_Input() {
      if (this.props.onInput) {
        this.props.onInput({})
      }
    },
    textarea_Focus() {
      if (this.props.onFocus) {
        this.props.onFocus({})
      }
    },
    textarea_Blur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e)
      }
    },
    textarea_Confirm() {
      if (this.props.onConfirm) {
        this.props.onConfirm({})
      }
    }
  },
})
