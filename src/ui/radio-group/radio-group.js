import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
    name:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    radioGroup_Change(e){
      if(this.props.onChange){
        this.props.onChange(e);
      }
    }
  },
});