/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    value: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: 'textarea-placeholder',
    disabled: false,
    maxlength: 140,
    autoFocus: false,
    focus: false,
    autoHeight: false,
    //
    fixed: false,

    // 有bug
    cursorSpacing: 0,
    //

    cursor: -1,
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,

    // 有bug
    adjustPosition: true,
    //

    // 系统级别
    holdKeyboard: false,
    //

    disableDefaultPadding: false,
  },
  onInit() {
    getApp().onekit_onKeyboardHeight.push(my_e => {
      if (this.props.onKeyboardheightchange) {
        const wx_e = {
          height: my_e.height,
          duration: 0
        }
        this.props.onKeyboardheightchange(wx_e)
      }
    })
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
    textarea_Blur(detail) {
      if (this.props.onBlur) {
        this.props.onBlur(detail)
      }
    },
    textarea_Confirm() {
      if (this.props.onConfirm) {
        this.props.onConfirm({})
      }
    }
  },
})
