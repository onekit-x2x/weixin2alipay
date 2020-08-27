Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    onekitId:"",
    headerText:"",
    disabled:false,
    mode:"selector",
    range:Array,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    selector_Change(e){
      if(this.props.onChange){
        this.props.onChange(e)
      }
    },
    //////////////////////////////// time ////////////////////////
    // time_Tap(){
    //   if(this.props.disabled){
    //     return;
    //   }
    //   const hours = [];
    //   for(var h=0;h<24;h++){
    //     const hourName = h>=10?h:("0"+h);
    //     const hour = {name:hourName};
    //     const minutes = [];
    //     for(var m=0;m<60;m++){
    //       const minuteName = m>=10?m:("0"+m);
    //       const minute = {name:minuteName};
    //       minutes.push(minute);

    //     }
    //     hour.subList = minutes;
    //     hours.push(hour);
    //   }
    //   this.setData({show:true})
    // },
  },
});
