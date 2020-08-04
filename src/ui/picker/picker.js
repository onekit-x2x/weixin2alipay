Component({
  mixins: [],
  data: {},
  props: {
    Style:"",
    Class:"",
    name:"",
    Id:"",
    headerText:"",
    disabled:false,
    mode:"selector",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    picker_Change(e){
      if(this.props.onChange){
        this.props.onChange({})
      }
    }
  },
});
