export default class CameraContext {
  constructor(myCameraContext) {
    this.myCameraContext = myCameraContext
  }

  takePhoto(object) {
    return this.myCameraContext.takePhoto(object)
  }

  startRecord(object) {
    return this.myCameraContext.startRecord(object)
  }

  stopRecord(object) {
    return this.myCameraContext.stopRecord(object)
  }

  onCameraFrame(callback) {
    return this.myCameraContext.onCameraFrame(callback)
  }
}
