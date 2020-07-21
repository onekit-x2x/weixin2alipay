Component({
  mixins: [],
  data: {},
  props: {
    src: "",
    autoplay: false,
    muted: false,
    orientation: "vertical",
    objectFit: "contain",
    backgroundMute: false,
    minCache: 1,
    maxCache: 3,

  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  methods: {
     live_player_statechange(e){
        console.log("live_player_statechange", e);
        if(this.props.onstatechange){}
        this.props.onstatechange(e.details)
       },
       live_player_netstatus(e){
        console.log("live_player_netstatus", e);
        if(this.props.onnetstatus){}
        this.props.onnetstatus(e.details)
       },
       live_player_fullscreenchange(e){
        console.log("live_player_fullscreenchange", e);
        if(this.props.onfullscreenchange){}
        this.props.onfullscreenchange()
       },
  },
});
