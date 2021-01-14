import {OnekitApp,wx} from './weixin2alipay/index'
OnekitApp({
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  },
  ttSavePath2wxStorePath: {}
});
