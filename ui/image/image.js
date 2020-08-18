Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    src: "",
    mode: "scaleToFill",
    webp: false,
    lazyLoad: false,
    id:""
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
    image_error(e) {
      if (this.props.onError) {
        this.props.onError(e)
      }
    },
    image_load(e) {
      if(this.props.onLoad){
        this.props.onLoad(e)
      }
    },
  },
});
