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
  },
  didUpdate() {
  },
  didUnmount() {},
  methods: {
    navigator_tap(e) {
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
              my.navigateTo({
                url: this.props.url,
                success: () => {
                  this.trigger_Success()
                },
                fail: () => {
                  this.trigger_Fail()
                },
                complete: () => {
                  this.trigger_Complete()
                }
              })
              break
            case 'redirectTo':
              my.redirectTo({
                url: this.props.url,
                success: () => {
                  this.trigger_Success()
                },
                fail: () => {
                  this.trigger_Fail()
                },
                complete: () => {
                  this.trigger_Complete()
                }
              })
              break
            case 'switchTab':
              my.switchTab({
                url: this.props.url,
                success: () => {
                  this.trigger_Success()
                },
                fail: () => {
                  this.trigger_Fail()
                },
                complete: () => {
                  this.trigger_Complete()
                }
              })
              break
            case 'reLaunch':
              my.reLaunch({
                url: this.props.url,
                success: () => {
                  this.trigger_Success()
                },
                fail: () => {
                  this.trigger_Fail()
                },
                complete: () => {
                  this.trigger_Complete()
                }
              })
              break
            case 'navigateBack':
              my.navigateBack({delta: this.props.delta})
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
            extraData: this.props.extraData,
            // envVersion:this.props.version
            success: () => {
              this.trigger_Success()
            },
            fail: () => {
              this.trigger_Fail()
            },
            complete: () => {
              this.trigger_Complete()
            }
          })
          break
        default:
          break
      }
      if (this.props.onTap) {
        this.props.onTap(e)
      }
    },
    view_tap(e) {
      if (!this.props.hoverStopPropagation) {
        if (this.props.onTap) {
          this.props.onTap(e)
        }
      }
    },
    trigger_Success(e) {
      if (this.props.onSuccess) {
        this.props.onSuccess(e)
      }
    },
    trigger_Fail(e) {
      if (this.props.onFail) {
        this.props.onFail(e)
      }
    },
    trigger_Complete(e) {
      if (this.props.onComplete) {
        this.props.onComplete(e)
      }
    },
  },
})
