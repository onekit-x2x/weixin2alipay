/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    value: '',
    type: 'text',
    password: false,
    placeholder: '',
    placeholderStyle: 'inputPlaceholder',
    placeholderClass: '',
    disabled: false,
    maxlength: 140,
    // 有bug
    cursorSpacing: 0,
    //

    autoFocus: false,
    focus: false,
    confirmType: 'done',
    // 做不了
    alwaysEmbed: false,
    //

    confirmHold: false,
    cursor: null,
    selectionStart: -1,
    selectionEnd: -1,

    // 有bug
    adjustPosition: true,
    //

    // 系统级别
    holdKeyboard: false,
    //
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
    input_Input(detail) {
      if (this.props.onInput) {
        const result = this.props.onInput(detail)
        if (result) {
          const value = result.value
          this.setData({
            value
          })
        }
      }
    },
    input_Focus(detail) {
      if (this.props.onFocus) {
        this.props.onFocus(detail)
      }
    },
    input_Blur(detail) {
      if (this.props.onBlur) {
        this.props.onBlur(detail)
      }
    },
    input_Confirm(detail) {
      if (this.props.onConfirm) {
        this.props.onConfirm(detail)
      }
    },
    // 做不了
    _trigger_Keyboardheightchange(detail) {
      if (this.props.onKeyboardheightchange) {
        this.props.onKeyboardheightchange(detail)
      }
    }
  },
})
