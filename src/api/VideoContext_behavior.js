/* eslint-disable camelcase */
/* eslint-disable no-console */
import {PROMISE} from 'oneutil'

module.exports = {
  methods: {
    // 做不了
    exitPictureInPicture(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_exitPictureInPicture = wx_object.onLeavepictureinpicture
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      PROMISE((SUCCESS, FAIL) => {
        if (wx_exitPictureInPicture) {
          const wx_res = {
            errMsg: 'exitPictureInPicture:ok'
          }
          SUCCESS(wx_res)
        }
        const wx_res = {
          errMsg: 'exitPictureInPicture:error'
        }
        FAIL(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    sendDanmu(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_text = wx_object.text
      const wx_color = wx_object.color
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      //
      PROMISE((SUCCESS, FAIL) => {
        if (this.data.currentTime <= 0) {
          return
        }
        if (!wx_text) {
          FAIL({
            errMsg: 'sendDanmu:error'
          })
          return
        }
        const time = this.data.currentTime + 1
        const danmu = {
          text: wx_text,
          color: wx_color
        }
        const danmus = this.data.danmuDict[time] || []
        danmus.push(danmu)
        const key = `danmuDict['${time}']`
        this.setData({
          [key]: danmus
        })
        SUCCESS({
          errMsg: 'sendDanmu:ok'
        })
      }, wx_success, wx_fail, wx_complete)
    }
  }
}
