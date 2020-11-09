/* eslint-disable class-methods-use-this */
export default class VideoContext {
  constructor(alipayVideoContext, id) {
    this.alipayVideoContext = alipayVideoContext
    this.id = id
  }

  play() {
    return this.alipayVideoContext.play()
  }

  pause() {
    return this.alipayVideoContext.pause()
  }

  stop() {
    return this.alipayVideoContext.stop()
  }

  seek(position) {
    return this.alipayConvasContext.seek(position)
  }

  //
  sendDanmu(data) {
    const video = getApp().onekit_nodes[this.id]
    video.sendDanmu(data)
  }

  playbackRate() {}


  requestFullScreen(direction) {
    return this.alipayConvasContext.requestFullScreen(direction)
  }

  exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen()
  }

  //
  showStatusBar() {}

  hideStatusBar() {}

  exitPictureInPicture() {}
}
