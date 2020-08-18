Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    name:"",
    id:"",
    value:"",
    indicatorStyle:"",
    indicatorClass:"",
    maskStyle:"",
    maskClass:""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    pickerView_Change(e){
      if(this.props.onChange){
        this.props.onChange({})
      }
    }
  },
});
