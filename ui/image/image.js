import {fixurl} from "../../thekit"

Component({
  mixins: [],
  data: {},
  props: {
    Style:"",
    Class:"",
    src: "",
    mode: "scaleToFill",
    webp: false,
    lazyLoad: false,
    onekitId:""
  },
  didMount() { 
     const pages = getCurrentPages();
      const currentUrl = pages[pages.length-1].route;
      const alipay_src = "/"+fixurl(currentUrl,this.props.src);
      this.setData({alipay_src});

  },
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
