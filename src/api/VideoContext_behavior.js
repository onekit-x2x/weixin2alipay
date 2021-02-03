/* eslint-disable camelcase */
/* eslint-disable no-console */
import {
  PROMISE
} from 'oneutil/PROMISE'

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
      let wx_text
      let wx_color
      const danmuList = this.props.danmuList
      danmuList.map(item => {
        wx_text = item.text
        wx_color = item.color
        return (wx_text, wx_color)
      })
      wx_object = null
      if (!wx_text) {
        wx_object.fail = {
          errMsg: 'sendDanmu:error'
        }
        wx_object.complete = {
          errMsg: 'sendDanmu:error'
        }
        return
      }
      wx_object.success = {
        errMsg: 'sendDanmu:ok'
      }
      wx_object.complete = {
        errMsg: 'sendDanmu:ok'
      }
    }
  }
}
