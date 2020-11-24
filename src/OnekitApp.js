/* eslint-disable no-console */
/* eslint-disable camelcase */

export default function OnekitApp(wx_object) {
  const my_object = {
    onekit_nodes: {},
    onLaunch() {
      my.onError(my_error => {
        console.error('[my.onError]', my_error)
        const wx_error = my_error
        if (getApp().onekit_onError) {
          getApp().onekit_onError(wx_error)
        }
        if (wx_object.onError) {
          wx_object.onError(wx_error)
        }
      })
      //

      // 小程序不支持
      // my.onPageNotFound(function (my_error) {
      //   var wx_error = my_error;
      //   if (getApp().onekit_onPageNotFound) {
      //     getApp().onekit_onPageNotFound(wx_error);
      //   }
      //   if (wx_object.onPageNotFound) {
      //     wx_object.onPageNotFound(wx_error);
      //   }
      // });
      // /////////////////
      if (wx_object.onLaunch) {
        wx_object.onLaunch()
      }
    },
    onShow() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow()
      }
      if (wx_object.onShow) {
        wx_object.onShow()
      }
    },
    onHide() {
      if (getApp().onekit_onAppShow) {
        getApp().onekit_onAppShow()
      }
      if (wx_object.onHide) {
        wx_object.onHide()
      }
    },
    onError() {
      if (wx_object.onError) {
        wx_object.onError()
      }
    },
  }
  for (const key of Object.keys(wx_object)) {
    const member = wx_object[key]
    switch (key) {
      case 'onLaunch':
      case 'onShow':
      case 'onHide':
      case 'onError':
      case 'onPageNotFound':
      case 'onUnhandledRejection':
      case 'onThemeChange':
        break
      default:
        my_object[key] = member
        break
    }
  }
  return App(my_object)
}
