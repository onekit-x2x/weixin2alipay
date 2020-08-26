Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle: "",
    onekitClass: "",
    onekitId: "",

    hoverClass:"none",
    hoverStopPropagation:false,
    hoverStartTime:50,
    hoverStayTime:400,
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
