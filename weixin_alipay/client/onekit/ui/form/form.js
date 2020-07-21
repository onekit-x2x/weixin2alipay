Component({
  mixins: [],
  data: {},
  props: {
    reportSubmit: false,
    reportSubmitTimeout: 0,
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    form_Reset(e) {
      if (this.props.onReset) {
        this.props.onReset({})
      }
    },
    form_Submit(e) {
      if (this.props.onSubmit) {
        this.props.onSubmit({})
      }
    }
  },
});
