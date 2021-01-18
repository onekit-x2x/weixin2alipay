/* eslint-disable no-console */
/* eslint-disable camelcase */
import {PATH} from 'oneutil'
import weixin_behavior from '../../behavior/weixin_behavior'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [weixin_behavior, onekit_behavior, wxs_behavior],
  data: {},
  props: {
    src: '',
    mode: 'scaleToFill',
    // 不支持
    webp: false,
    lazyLoad: false,
    showMenuByLongpress: false
  },
  didMount() {
    const pages = getCurrentPages()
    if (!this.props.src.indexOf('://')) {
      const currentUrl = pages[pages.length - 1].route
      const alipay_src = '/' + PATH.rel2abs(currentUrl, this.props.src)
      this.setData({
        src: alipay_src
      })
    }
  },
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
    onShareAppMessage() {
      return {
        title: '分享 View 组件',
        desc: 'View 组件很通用',
        path: 'weixin2alipay/ui/image/image',
      }
    },
    image_longTap() {
      if (this.props.showMenuByLongpress) {
        my.showActionSheet({
          items: ['转发', '保存图片', '收藏'],
          cancelButtonText: '取消',
          success: ({
            index
          }) => {
            if (index === -1) {
              return
            }
            switch (index) {
              case 0:
                this.onShareAppMessage()
                break
              case 1:
                my.alert({
                  title: "请点击右上角的'☆'收藏按钮"
                })
                break
              case 2:
                my.saveImage({
                  url: this.props.src,
                  showActionSheet: true,
                  success: () => {
                    my.alert({
                      title: '保存成功',
                    })
                  },
                })
                break
              default:
                break
            }
          }
        })
        this.setData({
          showMenuByLongpress: this.props.showMenuByLongpress
        })
      }
    }
  },
})
