Component({
  mixins: [],
  data: {},
  props: {
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
