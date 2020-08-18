Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    name:"",
    id:""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    checkboxGroup_change(e){
      if(this.props.onchange){
        this.props.onchange({})
      }
    }
  },
});
