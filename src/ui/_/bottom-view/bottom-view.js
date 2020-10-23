Component({
  mixins: [],
  data: {},
  props: {
    headerText: ''
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    cancle_tap() {
      if (this.props.onCancle) {
        this.props.onCancle()
      }
    },
    confirm_tap() {
      if (this.props.onConfirm) {
        this.props.onConfirm()
      }
    },
  },
})
