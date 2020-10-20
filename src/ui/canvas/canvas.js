import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
    canvasId:"",
    disableScroll:false,
    type:"",
    width:0,
    height:0
  },
  

  didMount() {
     const that = this;
    this.canvasCtx = my.createMapContext(this.props.onekitId);

    my.createSelectorQuery().select(`.onekit-canvas`).boundingClientRect().exec((rect) => {
        that.setData({rect:rect[0]});
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    canvas_TouchStart(e){
      if(this.props.onTouchStart){
        this.props.onTouchStart({})
      }
    },
    canvas_TouchMove(e){
      if(this.props.onTouchMove){
        this.props.onTouchMove({})
      }
    },
    canvas_TouchEnd(e){
      if(this.props.onTouchEnd){
        this.props.onTouchEnd({})
      }
    },
    canvas_TouchCancel(e){
      if(this.props.onTouchCancel){
        this.props.onTouchCancel({})
      }
    },
    canvas_LongTap(e){
      if(this.props.onLongTap){
        this.props.onLongTap({})
      }
    }
  },
});
