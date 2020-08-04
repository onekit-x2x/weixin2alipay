Component({
  mixins: [],
  data: {},
  props: {
    Style:"",
    Class:"",
    name:"",
    Id:"",
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
