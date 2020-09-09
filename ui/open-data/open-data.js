import wx from "../../wx";
import onekit_behavior from "../../behavior/onekit_behavior"  
import wxs_behavior from "../../behavior/wxs_behavior"  
Component({
  mixins: [onekit_behavior,wxs_behavior],
  data: {},
  props: {
    },

  didMount() {
    var that = this;
    wx.getOpenData({
      success(opendata) {
        console.log("xxx",opendata);
        switch (that.props.type) {
          case "userNickName":
            that.setData({userNickName:opendata.nickName});
            break;
          case "userAvatarUrl":
          that.setData({userAvatarUrl:opendata.avatarUrl});
            break;
          case "userGender":
          that.setData({userGender:opendata.gender});
            break;
          case "userCity":
          that.setData({userCity:opendata.city});
            break;
          case "userProvince":
          that.setData({userProvince:opendata.province});
            break;
          case "userCountry":
          that.setData({userCountry:opendata.country});
            break;
          case "userLanguage":
          that.setData({userLanguage:opendata.language});
            break;
          default:
            break;
        }
      }
    });
  },
  didUpdate() { },
  didUnmount() { },
  methods: {},
});
