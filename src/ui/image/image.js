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
    lazyLoad: false,
    showMenuByLongpress: false
  },
  didMount() {
    const pages = getCurrentPages()
    const currentUrl = pages[pages.length - 1].route
    const alipay_src = '/' + rel2abs(currentUrl, this.props.src)
    this.setData({src: alipay_src})
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
    image_tap() {
      if (this.props.showMenuByLongpress === true) {
        setTimeout(() => {
          my.showActionSheet({
            items: ['发送给朋友', '收藏', '保存图片', '识别图片的小程序码'],
            cancelButtonText: '取消',
          })
        }, 1000)
        this.setData({
          showMenuByLongpress: this.props.showMenuByLongpress
        })
      }
    }
  },
})
