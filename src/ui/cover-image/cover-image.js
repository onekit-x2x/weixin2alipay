import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
    src:""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    coverImage_tap(){
      if(this.props.onload){
        this.props.onload()
      }
      if(this.props.onerror){
        this.props.onerror()	
      }
    }
  },
});
