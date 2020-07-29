Component({
  mixins: [],
  data: {},
  props: {
    src: "",
    mode: "",
    webp: false,
    lazyLoad: false,
    Id:""
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    image_error(e) {
       console.log("image_error", e);
      if (this.props.onError) {
        this.props.onError(e)
      }
    },
    image_load(e) {
      console.log("image_load", e);
      if(this.props.onLoad){
        this.props.onLoad(e)
      }
    },
  },
});
