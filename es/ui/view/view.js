Component({
  mixins: [],
  data: {},
  props: {
    Style: "",
    Class: "",
    Id: ""
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
