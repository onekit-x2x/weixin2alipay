Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle: "",
    onekitClass: "",
    onekitId: "",
    headerText: "",
    disabled: false,
    mode: "selector",
    range: [],
    value: null,
    start: "",
    end: "",
  },
  didMount() {},
  didUpdate() { },
  didUnmount() { },
  methods: {
    picker_Cancle(e) {
      if (this.props.onCancle) {
        this.props.onCancle(e)
      }
    },
    picker_Change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
     picker_Columnchange(e) {
      if (this.props.onColumnchange) {
        this.props.onColumnchange(e)
      }
    }
  },
});
