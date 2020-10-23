/* eslint-disable camelcase */
import {rel2abs} from '../../js/TheKit'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {},
  props: {
    src: '',
    mode: 'scaleToFill',
    webp: false,
    lazyLoad: false
  },
  didMount() {
    const pages = getCurrentPages()
    const currentUrl = pages[pages.length - 1].route
    const alipay_src = '/' + rel2abs(currentUrl, this.props.src)
    this.setData({alipay_src})
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
      if (this.props.onLoad) {
        this.props.onLoad(e)
      }
    },
  },
})
