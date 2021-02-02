export default class CameraContext {
  constructor(alipayCameraContext) {
    this.alipayCameraContext = alipayCameraContext
  }

  takePhoto(object) {
    return this.alipayCameraContext.takePhoto(object)
  }

  startRecord(object) {
    return this.alipayCameraContext.startRecord(object)
  }

  stopRecord(object) {
    return this.alipayCameraContext.stopRecord(object)
  }

  onCameraFrame(callback) {
    return this.alipayCameraContext.onCameraFrame(callback)
  }
}
