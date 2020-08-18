Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle: "",
    onekitClass: "",
    id: ""
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    view_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e)
      }
    }
  },
});
