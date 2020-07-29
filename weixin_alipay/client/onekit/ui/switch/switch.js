Component({
  mixins: [],
  data: {},
  props: {
    Id:"",
    checked:false,
    disabled:false,
    type:"switch",
    color:"#04BE02",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    switch_Change(e){
      if(this.props.onChange){
        this.props.onChange({})
      }
    }
  },
});
