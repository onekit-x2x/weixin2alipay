/* eslint-disable no-console */
/* eslint-disable camelcase */
import wx from '../../wx'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {
    hideContact: true
  },
  props: {
    size: 'default',
    type: 'default',
    plain: false,
    disabled: false,
    loading: false,
    formType: '',
    openType: '',
    hoverClass: 'button-hover',
    hoverStopPropagation: false,
    hoverStartTime: 20,
    hoverStayTime: 70,
    //
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '当前标题',
    sendMessagePath: '当前分享路径',
    sendMessageImg: '截图',
    appParameter: '',
    showMessageCard: false,
  },
  didMount() {
    let openType
    let scope
    switch (this.props.openType) {
      case 'getPhoneNumber':
        openType = 'getAuthorize'
        scope = 'phoneNumber'
        break
      case 'getUserInfo':
        openType = 'getAuthorize'
        scope = 'userInfo'
        break
      default:
        openType = this.props.openType
    }
    //
    let attributeCSS = 'onekit-button'
    if (this.props.disabled) {
      attributeCSS += '_disabled'
    }
    if (this.props.loading) {
      attributeCSS += '_loading'
    }

    attributeCSS += `_type-${this.props.type}`

    if (this.props.plain) {
      attributeCSS += '_plain'
    }
    console.log(attributeCSS)
    this.setData({
      openType,
      scope,
      attributeCSS
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    contactBG_tap() {
      this.setData({
        hideContact: true
      })
    },
    button_onGetAuthorize(e) {
      const that = this
      switch (this.props.openType) {
        case 'getUserInfo':
          if (that.props.onGetuserinfo) {
            wx.getUserInfo({
              withCredentials: true,
              success(res) {
                e.detail = res
                that.props.onGetuserinfo(e.detail)
              }
            })
          }
          break
        case 'getPhoneNumber':
          if (this.props.onGetphonenumber) {
            //  console.log(detail)
            wx.getPhoneNumber({
              success(res) {
                e.detail = res
                that.props.onGetphonenumber(e.detail)
              }
            })
          }
          break
        default:
          throw new Error(this.props.openType)
      }
    },
    button_onTap(detail) {
      const that = this
      if (that.props.openType) {
        switch (that.props.openType) {
          case 'contact':
            that.setData({
              hideContact: false
            })
            break
          case 'share':
            wx.showShareMenu({
              success() {

              }
            })
            break
          case 'getUserInfo':
          case 'getPhoneNumber':
            break
          case 'launchApp':
            break
          case 'openSetting':
            /* my.navigateTo({
              url:"/onekit/page/setting/setting"
            }); */
            wx.openSetting({

            })
            break
          case 'feedback':
            break
          default:
            throw new Error(this.props.openType)
        }
      }
      if (that.props.onTap) {
        // /console.log("xxxxxxxxxxxx",e)
        that.props.onTap(detail)
      }
    },
    //
    _trigger_Getuserinfo(detail) {
      if (this.props.onGetuserinfo) {
        this.props.onGetuserinfo(detail)
      }
    },
    _trigger_Contact(detail) {
      if (this.props.onContact) {
        this.props.onContact(detail)
      }
    },
    _trigger_Getphonenumber(detail) {
      if (this.props.onGetphonenumber) {
        this.props.onGetphonenumber(detail)
      }
    },
    _trigger_Error(detail) {
      if (this.props.onError) {
        this.props.onError(detail)
      }
    },
    _trigger_Opensetting(detail) {
      if (this.props.onOpensetting) {
        this.props.onOpensetting(detail)
      }
    },
    _trigger_Launchapp(detail) {
      if (this.props.onLaunchapp) {
        this.props.onLaunchapp(detail)
      }
    },
  },
})
