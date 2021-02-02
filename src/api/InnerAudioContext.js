export default class InnerAudioContext {
  constructor(alipayInnerAudioContext) {
    this.alipayInnerAudioContext = alipayInnerAudioContext
  }

  destroy() {
    return this.alipayInnerAudioContext.destroy()
  }

  offEnded(callback) {
    return this.alipayInnerAudioContext.offEnded(callback)
  }

  callback(callback) {
    return this.alipayInnerAudioContext.callback(callback)
  }

  offError(callback) {
    return this.alipayCameraContext.offError(callback)
  }

  offPause(callback) {
    return this.alipayInnerAudioContext.offPause(callback)
  }

  offPlay(callback) {
    return this.alipayInnerAudioContext.offPlay(callback)
  }

  offSeeked(callback) {
    return this.alipayCameraContext.offSeeked(callback)
  }

  offSeeking(callback) {
    return this.alipayInnerAudioContext.offSeeking(callback)
  }

  offStop(callback) {
    return this.alipayInnerAudioContext.offStop(callback)
  }

  offTimeUpdate(callback) {
    return this.alipayCameraContext.offTimeUpdate(callback)
  }

  offWaiting(callback) {
    return this.alipayInnerAudioContext.offWaiting(callback)
  }

  onCanplay(callback) {
    return this.alipayInnerAudioContext.onCanplay(callback)
  }

  onEnded(callback) {
    return this.alipayCameraContext.onEnded(callback)
  }

  onError(callback) {
    return this.alipayInnerAudioContext.onError(callback)
  }

  onPause(callback) {
    return this.alipayInnerAudioContext.onPause(callback)
  }

  onPlay(callback) {
    return this.alipayCameraContext.onPlay(callback)
  }

  onSeeked(callback) {
    return this.alipayInnerAudioContext.onSeeked(callback)
  }

  onSeeking(callback) {
    return this.alipayInnerAudioContext.onSeeking(callback)
  }

  onStop(callback) {
    return this.alipayCameraContext.onStop(callback)
  }

  onTimeUpdate(callback) {
    return this.alipayInnerAudioContext.onTimeUpdate(callback)
  }

  onWaiting(callback) {
    return this.alipayInnerAudioContext.onWaiting(callback)
  }

  pause() {
    return this.alipayCameraContext.pause()
  }

  play() {
    return this.alipayInnerAudioContext.play()
  }

  seek() {
    return this.alipayInnerAudioContext.seek()
  }

  stop() {
    return this.alipayCameraContext.offError()
  }
}
