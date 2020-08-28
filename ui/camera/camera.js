Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    devicePosition:"back",
    flash:"auto",
    onekitId:""
    },
  didMount() {
     const that = this;
    this.cameraCtx = my.createMapContext(this.props.onekitId);

    my.createSelectorQuery().select(`.onekit-camera`).boundingClientRect().exec((rect) => {
        that.setData({rect:rect[0]});
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
   camera_stop(e) {
      if (this.props.onStop) {
        this.props.onStop({})
      }
    },
    camera_error(e) {
      if (this.props.onError) {
        this.props.onError({})
      }
    }
  },
});
