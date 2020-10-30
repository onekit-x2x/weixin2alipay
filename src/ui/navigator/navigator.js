/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    target: 'self',
    url: '',
    openType: 'navigate',
    delta: 1,
    appId: '',
    path: '',
    extraData: {},
    version: '',
    hoverClass: 'navigator-hover',
    hoverStopPropagation: false,
    hoverStartTime: 50,
    hoverStayTime: 600
  },
  didMount() {
    this._update()
  },
  didUpdate() {
    this._update()
  },
  didUnmount() {},
  methods: {
    _update() {
      const target = this.props.target
      const openType = this.props.openType
      // let version
      // //
      // if (this.props.version === 'develop') {
      //   console.log('开发版')
      //   version = this.props.version
      // } else if (this.props.version === 'trial') {
      //   console.log('体验版')
      //   version = this.props.version
      // } else if (this.props.version === 'release') {
      //   console.log('正式版，仅在当前小程序为开发版或体验版时此参数有效；如果当前小程序是正式版，则打开的小程序必定是正式版。')
      //   version = this.props.version
      // }
      //
      switch (target) {
        case 'self':
          switch (openType) {
            case 'navigate':
              my.navigateTo({url: this.props.url})
              break
            case 'redirectTo':
              my.redirectTo({url: this.props.url})
              break
            case 'switchTab':
              my.switchTab({url: this.props.url})
              break
            case 'reLaunch':
              my.reLaunch({url: this.props.url})
              break
            case 'navigateBack':
              my.navigateBack({url: this.props.url})
              break
            case 'exit':
              my.alert({
                content: '请点击右上角⨂按钮'
              })
              break
            default:
              break
          }
          break
        case 'miniProgram':
          my.navigateToMiniProgram({
            appId: this.props.appId,
            path: this.props.path,
            extraData: this.props.extraData
          })
          break
        default:
          break
      }

      this.setData({
        target, openType
      })
    },
    navigator_success(e) {
      if (this.props.onsuccess) {
        this.props.onsuccess(e)
      }
    },
    navigator_fail(e) {
      if (this.props.onfail) {
        this.props.onfail(e)
      }
    },
    navigator_complete(e) {
      if (this.props.oncomplete) {
        this.props.oncomplete(e)
      }
    },
  },
})
