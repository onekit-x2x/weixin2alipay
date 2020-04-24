import wx from '/onekit/wx';
global = {};
Page({
  onShareAppMessage() {
    return {
      title: 'open-data',
      path: 'page/component/pages/open-data/open-data'
    }
  },
})