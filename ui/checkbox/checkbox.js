Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    name:"",
    onekitId:"",
  value:"",
  disabled:false,
  checked:false,
  color:""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    checkbox_Change(e) {
      if (this.props.onChange) {
        this.props.onChange({})
      }
    },
  },
});
