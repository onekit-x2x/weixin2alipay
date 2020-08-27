Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    onekitId:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    radioGroup_Change(e){
      if(this.props.onChange){
        this.props.onChange(e);
      }
    }
  },
});
