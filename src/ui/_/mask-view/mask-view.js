Component({
  mixins: [],
  data: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    view_tap(){
      if(this.props.onClose){
        this.props.onClose();
      }
    }
  },
});
