/* eslint-disable class-methods-use-this */
import CameraFrameListener from './CameraFrameListener'

export default class CameraContext {
  onCameraFrame() {
    return new CameraFrameListener()
  }

  setZoom() {}

  startRecord() {}

  stopRecord() {}

  takePhoto() {}
}
