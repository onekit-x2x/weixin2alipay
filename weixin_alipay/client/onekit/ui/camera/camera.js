Component({
  mixins: [],
  data: {},
  props: {
    devicePosition:"back",
    flash:"auto",
    Id:""
    },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
   camera_stop(e) {
      if (this.props.onStop) {
        this.props.onStop({})
      }
    },
    camera_error(e) {
      if (this.props.onError) {
        this.props.onError({})
      }
    }
  },
});
