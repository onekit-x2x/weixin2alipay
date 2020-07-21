Component({
  mixins: [],
  data: {},
  props: {},
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
