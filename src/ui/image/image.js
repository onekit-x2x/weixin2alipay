/* eslint-disable no-console */
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
    onShareAppMessage() {
      return {
        title: '分享 View 组件',
        desc: 'View 组件很通用',
        path: 'weixin2alipay/ui/image/image',
      }
    },
    image_longTap() {
      if (this.props.showMenuByLongpress === true) {
        my.showActionSheet({
          items: ['发送给朋友', '收藏', '保存图片', '识别图片的小程序码'],
          cancelButtonText: '取消',
          success: (res) => {
            const btn = res.index === -1 ? '取消' : res.index
            // my.alert({
            //   title: `你点了${btn}按钮`
            // })
            console.log(`${btn}`)
            switch (`${btn}`) {
              case 0:
                console.log('000000000')
                this.onShareAppMessage()
                break
              case 1:
                console.log('111111111')
                break
              case 2:
                console.log('222222222')
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
              case 3:
                console.log('3333333333')
                my.ix.onCodeScan((r) => {
                  if (r.success) {
                    console.log('code: ' + r.code)
                  }
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
