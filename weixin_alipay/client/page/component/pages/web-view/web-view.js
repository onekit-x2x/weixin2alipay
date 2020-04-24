import wx from '/onekit/wx';
global = {};
Page({
  onShareAppMessage() {
    return {
      title: 'webview',
      path: 'page/component/pages/web-view/web-view'
    }
  },
})