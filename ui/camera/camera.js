Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    devicePosition:"back",
    flash:"auto",
    id:""
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
