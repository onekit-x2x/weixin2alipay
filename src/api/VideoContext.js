/* eslint-disable no-console */
/* eslint-disable camelcase */

export default class VideoContext {
  constructor(alipayVideoContext, id) {
    this.alipayVideoContext = alipayVideoContext
    this.id = id
  }

  exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen()
  }

  exitPictureInPicture(wx_object) {
    const video = getApp().onekit_nodes[`_${this.id}`]
    video.exitPictureInPicture(wx_object)
  }

  hideStatusBar() {
    return this.alipayConvasContext.hideStatusBar()
  }

  pause() {
    return this.alipayVideoContext.pause()
  }

  play() {
    return this.alipayVideoContext.play()
  }

  playbackRate() {
    return this.alipayVideoContext.playbackRate()
  }

  requestFullScreen(object) {
    return this.alipayConvasContext.requestFullScreen(object)
  }

  seek(position) {
    return this.alipayConvasContext.seek(position)
  }

  sendDanmu(data) {
    const video = getApp().onekit_nodes[this.id]
    console.log(video)
    video.sendDanmu(data)
  }

  showStatusBar() {
    return this.alipayVideoContext.showStatusBar()
  }

  stop() {
    return this.alipayVideoContext.stop()
  }
}
