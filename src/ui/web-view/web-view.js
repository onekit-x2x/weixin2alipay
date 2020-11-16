/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    src: '',
  },
  onInit() {
  },
  didMount() {

  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    webView_Message(e) {
      if (this.props.onMessage) {
        this.props.onMessage(e.detail)
      }
    },

    //
    trigger_Load(e) {
      if (this.props.onLoad) {
        this.props.onLoad(e)
      }
    },
    /*
    trigger_Error(e) {
      if (this.props.onError) {
        this.props.onError(e)
      }
    }, */
  },
})
