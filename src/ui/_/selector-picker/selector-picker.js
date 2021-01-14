Component({
  props: {
    headerText: '',
    range: [],
    'range-key': '',
    value: 0,
    disabled: false
  },
  methods: {
    selector_show() {
      if (this.props.disabled) {
        return
      }
      const select = [this.props.value]
      this.setData({select, show: true})
    },
    selector_cancle() {
      this.setData({show: false})
      if (this.props.onCancle) {
        this.props.onCancle()
      }
    },
    selector_confirm() {
      this.setData({show: false})
      if (this.props.onChange) {
        this.props.onChange({detail: {value: this.data.value}})
      }
    },
    selector_change(e) {
      this.data.value = e.detail.value[0]
    }
  },
})
