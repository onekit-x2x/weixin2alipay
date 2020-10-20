export default class VideoContext {
  constructor(alipayVideoContext) {
    this.alipayVideoContext = alipayVideoContext
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

  requestFullScreen(direction) {
    return this.alipayConvasContext.requestFullScreen(direction)
  }

  exitFullScreen() {
    return this.alipayConvasContext.exitFullScreen()
  }
}
