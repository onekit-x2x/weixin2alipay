import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
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
