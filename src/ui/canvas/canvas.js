Component({
  mixins: [],
  data: {},
  props: {
    Id:"",
    Class:"",
    Style:"",
    canvasId:"",
    disableScroll:false,
    type:"",
    width:0,
    height:0
  },
  

  didMount() {},
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
