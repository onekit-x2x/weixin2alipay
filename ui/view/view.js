import wxs_behavior from "../../wxs_behavior.js";
Component({
  mixins: [wxs_behavior],
  data: {},
  props: {
    onekitStyle: "",
    onekitClass: "",
    onekitId: ""
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
