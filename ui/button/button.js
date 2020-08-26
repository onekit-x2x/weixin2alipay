import wx from "../../wx";
Component({
  mixins: [],
  data: {
    hideContact: true
  },
  props: {
    onekitStyle: "",
    onekitClass: "",
    name: "",
    onekitId: "",
    size: "default",
    type: "default",
    plain: "false",
    disabled: false,
    loading: false,
    formType: "",
    openType: "",
    hoverClass: "button-hover",
    hoverStopPropagation: false,
    hoverStartTime: 20,
    hoverStayTime: 70,
    lang:"en",
  },
  didMount() {
    var openType;
    var scope;
    switch (this.props.openType) {
      case "getPhoneNumber": openType = "getAuthorize"; scope = "phoneNumber"; break;
      case "getUserInfo": openType = "getAuthorize"; scope = "userInfo"; break;
      default: openType = openType;
    }
    this.setData({ openType, scope });
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    contactBG_tap() {
      this.setData({ hideContact: true });
    },
    onGetAuthorize(e) {
      var that = this;
      switch (this.props.openType) {


        case "getUserInfo":

          if (that.props.onGetuserinfo) {
            wx.getUserInfo({
              withCredentials: true,
              success(res) {
                e.detail = res;
                that.props.onGetuserinfo(e);
              }
            });
          }
          break;
        case "getPhoneNumber":

          if (this.props.onGetphonenumber) {
            //  console.log(e)
            wx.getPhoneNumber({
              success(res) {
                e.detail = res;
                that.props.onGetphonenumber(e);
              }
            });
          }
          break;
        default:
          throw new Error(this.props.openType);
      }
    },
    onError(e) {
      console.log(e);
    },
    button_onTap(e) {
      var that = this;
      if (that.props.openType) {
        switch (that.props.openType) {
          case "contact":
            that.setData({ hideContact: false });
            break;
          case "share":
            wx.showShareMenu({
              success() {

              }
            });
            break;
          case "getUserInfo":
          case "getPhoneNumber":
            break;
          case "launchApp":
            break;
          case "openSetting":
            /*my.navigateTo({
              url:"/onekit/page/setting/setting"
            });*/
            wx.openSetting({

            });
            break;
          case "feedback":
            break;
          default:
            throw new Error(this.props.openType);
        }
      }
      if (that.props.onTap) {
        ///console.log("xxxxxxxxxxxx",e)
        that.props.onTap(e)
      }
    },
  },
});
