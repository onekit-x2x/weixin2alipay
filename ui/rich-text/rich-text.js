import HTML from "../../lib/HTML"
Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    onekitId:""
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
