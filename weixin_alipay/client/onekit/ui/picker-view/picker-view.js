Component({
  mixins: [],
  data: {},
  props: {
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
