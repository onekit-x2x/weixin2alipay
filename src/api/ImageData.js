/* eslint-disable no-console */
/* eslint-disable camelcase */
export default class ImageData {
  constructor(alipayImageData) {
    this.alipayImageData = alipayImageData
    console.log(this.alipayImageData, this.ctx)
  }

  get width() {
    this.ctx.getImageData({
      x: 0,
      y: 0,
      width: this.rect.width,
      height: this.rect.height,
      success: res => {
        this._width = res.width
        this._height = res.height
        this._data = res.data
      }
    })
    return this._width
  }

  get height() {
    return this._height
  }

  get data() {
    return this._data
  }
}
