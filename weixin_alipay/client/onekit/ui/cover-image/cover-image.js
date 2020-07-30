Component({
  mixins: [],
  data: {},
  props: {
    Style:"",
    Class:"",
    src:"",
    Id:""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    coverImage_tap(){
      if(this.props.onload){
        this.props.onload()
      }
      if(this.props.onerror){
        this.props.onerror()	
      }
    }
  },
});
