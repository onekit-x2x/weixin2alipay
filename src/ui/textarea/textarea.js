/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
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
    confirmType: 'return'
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
  didMount() {
    let fixed = this.props.fixed
    if (!fixed) {
      fixed = null
    } else {
      fixed = 'fixed'
    }
    this.setData({
      fixed
    })
  },
  methods: {
    textarea_Input({detail}) {
      const dataset = this._dataset()
      if (this.props.onInput) {
        this.props.onInput({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    textarea_Focus({detail}) {
      const dataset = this._dataset()
      if (this.props.onFocus) {
        this.props.onFocus({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    textarea_Blur({detail}) {
      const dataset = this._dataset()
      if (this.props.onBlur) {
        this.props.onBlur({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    textarea_Confirm({detail}) {
      const dataset = this._dataset()
      if (this.props.onConfirm) {
        this.props.onConfirm({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    // 做不了
    _trigger_Keyboardheightchange({detail}) {
      const dataset = this._dataset()
      if (this.props.onKeyboardheightchange) {
        this.props.onKeyboardheightchange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
