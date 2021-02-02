/* eslint-disable class-methods-use-this */


export default class VideoContext {
  constructor(alipayVideoContext, id) {
    this.alipayVideoContext = alipayVideoContext
    this.id = id
  }

  exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen()
  }

  exitPictureInPicture() {}

  hideStatusBar() {}

  pause() {
    return this.alipayVideoContext.pause()
  }

  play() {
    return this.alipayVideoContext.play()
  }

  playbackRate() {}

  requestFullScreen(direction) {
    return this.alipayConvasContext.requestFullScreen(direction)
  }

  seek(position) {
    return this.alipayConvasContext.seek(position)
  }

  //
  sendDanmu(data) {
    const video = getApp().onekit_nodes[this.id]
    video.sendDanmu(data)
  }

  showStatusBar() {}

  stop() {
    return this.alipayVideoContext.stop()
  }
}
