import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
    percent:"",
    showInfo:false,
    strokeWidth:2,
    color:"#09BB07",
    backgroundColor:"#EBEBEB",
    active:false
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
});