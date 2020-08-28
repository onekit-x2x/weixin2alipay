Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    onekitId:""
  },
  didMount() {
     const that = this;
    this.livePusherCtx = my.createMapContext(this.props.onekitId);

    my.createSelectorQuery().select(`.onekit-live-pusher`).boundingClientRect().exec((rect) => {
        that.setData({rect:rect[0]});
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
