import HTML from "../../lib/HTML"
import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
  },
  didMount() {
    var nodes = this.props.nodes;
    if (typeof (nodes) === "string") {
      nodes = HTML.html2nodes(nodes);
      this.setData({nodes:nodes});
    }
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
  
  },

});
