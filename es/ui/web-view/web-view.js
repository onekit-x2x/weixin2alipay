Component({
  mixins: [],
  data: {},
  props: {
    Id:"",
    Class:"",
    Style:"",
    src:"",
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    webView_Message(e){
      if(this.props.onMessage){
        this.props.onMessage(e.detail)
      }
    }
  },
});
