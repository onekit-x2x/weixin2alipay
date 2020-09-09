import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
    indicatorDots:false,
    indicatorColor:"rgba(0, 0, 0, .3)",
    indicatorActiveColor:"#000000",
    autoplay:false,
    current:0,
    interval:5000,
    duration:500,
    circular:false,
    vertical:false,
    previousMargin:"0px",
    nextMargin:"0px",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
   
    swiper_Change(e){
      if(this.props.onChange){
        this.props.onChange()
      }
    },
    swiper_Transition(e){
      if(this.props.onTransition){
        this.props.onTransition()
      }
    },
    swiper_AnimationEnd(e){
      if(this.props.onAnimationEnd){
        this.props.onAnimationfinish()
      }
    }
  },
});
