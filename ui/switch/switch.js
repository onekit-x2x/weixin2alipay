Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    name:"",
    onekitId:"",
    checked:false,
    disabled:false,
    type:"switch",
    color:"#04BE02",
    name:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    switch_Change(e){
      console.log("switch_Change",e)
      if(this.props.onChange){
        this.props.onChange(e)
      }
    }
  },
});
