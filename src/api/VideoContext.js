/* eslint-disable no-console */
/* eslint-disable camelcase */

export default class VideoContext {
  constructor(alipayVideoContext, id) {
    this.alipayVideoContext = alipayVideoContext
    this.id = id
  }

  exitFullScreen() {
    return this.alipayVideoContext.exitFullScreen()
  }

  exitPictureInPicture(wx_object) {
    const video = getApp().onekit_nodes[`_${this.id}`]
    video.exitPictureInPicture(wx_object)
  }

  hideStatusBar() {
    return this.alipayVideoContext.hideStatusBar()
  }

  pause() {
    return this.alipayVideoContext.pause()
  }

  play() {
    return this.alipayVideoContext.play()
  }

  playbackRate(rate) {
    return this.alipayVideoContext.playbackRate(rate)
  }

  requestFullScreen(object) {
    return this.alipayVideoContext.requestFullScreen(object)
  }

  seek(position) {
    return this.alipayVideoContext.seek(position)
  }

  sendDanmu(data) {
    const video = getApp().onekit_nodes[`_${this.id}`]
    video.sendDanmu(data)
  }

  showStatusBar() {
    return this.alipayVideoContext.showStatusBar()
  }

  stop() {
    return this.alipayVideoContext.stop()
  }
}
