export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  arc(...params) {
    return this.alipayCanvasContext.arc.apply(this, params)
  }

  arcTo(...params) {
    return this.alipayCanvasContext.arcTo.apply(this, params)
  }

  beginPath(...params) {
    return this.alipayCanvasContext.beginPath.apply(this, params)
  }

  bezierCurveTo(...params) {
    return this.alipayCanvasContext.bezierCurveTo.apply(this, params)
  }

  clearRect(...params) {
    return this.alipayCanvasContext.clearRect.apply(this, params)
  }

  createCircularGradient(...params) {
    return this.alipayCanvasContext.createCircularGradient.apply(this, params)
  }

  createLinearGradient(...params) {
    return this.alipayCanvasContext.createLinearGradient.apply(this, params)
  }

  createPattern(...params) {
    return this.alipayCanvasContext.createPattern.apply(this, params)
  }

  draw(...params) {
    return this.alipayCanvasContext.draw.apply(this, params)
  }

  drawImage(...params) {
    return this.alipayCanvasContext.drawImage.apply(this, params)
  }

  fill(...params) {
    return this.alipayCanvasContext.fill.apply(this, params)
  }

  fillRect(...params) {
    return this.alipayCanvasContext.fillRect.apply(this, params)
  }

  fillText(...params) {
    return this.alipayCanvasContext.fillText.apply(this, params)
  }

  lineTo(...params) {
    return this.alipayCanvasContext.lineTo.apply(this, params)
  }

  measureText(...params) {
    return this.alipayCanvasContext.measureText.apply(this, params)
  }

  moveTo(...params) {
    return this.alipayCanvasContext.moveTo.apply(this, params)
  }

  quadraticCurveTo(...params) {
    return this.alipayCanvasContext.quadraticCurveTo.apply(this, params)
  }

  rect(...params) {
    return this.alipayCanvasContext.rect.apply(this, params)
  }

  restore(...params) {
    return this.alipayCanvasContext.restore.apply(this, params)
  }

  rotate(...params) {
    return this.alipayCanvasContext.rotate.apply(this, params)
  }

  save(...params) {
    return this.alipayCanvasContext.save.apply(this, params)
  }

  scale(...params) {
    return this.alipayCanvasContext.scale.apply(this, params)
  }

  //
  set fillStyle(fillStyle) {
    return this.alipayCanvasContext.setFillStyle(fillStyle)
  }

  get fillStyle() {
    return this.alipayCanvasContext.getFillStyle()
  }

  setFillStyle(fillStyle) {
    this.fillStyle = fillStyle
  }

  //
  font(...params) {
    return this.alipayCanvasContext.beginPath.font(this, params)
  }

  setFontSize(...params) {
    return this.alipayCanvasContext.bezierCurveTo.setFontSize(this, params)
  }

  //
  globalAlpha(...params) {
    return this.alipayCanvasContext.globalAlpha.apply(this, params)
  }

  setGlobalAlpha(...params) {
    return this.alipayCanvasContext.setGlobalAlpha.apply(this, params)
  }

  //
  lineCap(...params) {
    return this.alipayCanvasContext.lineCap.apply(this, params)
  }

  setLineCap(...params) {
    return this.alipayCanvasContext.setLineCap.apply(this, params)
  }

  //
  lineDashOffset(...params) {
    return this.alipayCanvasContext.lineDashOffset.apply(this, params)
  }

  setLineDash(...params) {
    return this.alipayCanvasContext.setLineDash.apply(this, params)
  }

  //
  lineJoin(...params) {
    return this.alipayCanvasContext.fill.apply(this, params)
  }

  setLineJoin(...params) {
    return this.alipayCanvasContext.setLineJoin.apply(this, params)
  }

  //
  lineWidth(...params) {
    return this.alipayCanvasContext.lineWidth.apply(this, params)
  }

  setLineWidth(...params) {
    return this.alipayCanvasContext.setLineWidth.apply(this, params)
  }

  //
  miterLimit(...params) {
    return this.alipayCanvasContext.miterLimit.apply(this, params)
  }

  setMiterLimit(...params) {
    return this.alipayCanvasContext.setMiterLimit.apply(this, params)
  }

  //
  shadowOffsetX(...params) {
    return this.alipayCanvasContext.shadowOffsetX.apply(this, params)
  }

  shadowOffsetY(...params) {
    return this.alipayCanvasContext.shadowOffsetY.apply(this, params)
  }

  shadowColor(...params) {
    return this.alipayCanvasContext.shadowColor.apply(this, params)
  }

  shadowBlur(...params) {
    return this.alipayCanvasContext.shadowBlur.apply(this, params)
  }

  setShadow(...params) {
    return this.alipayCanvasContext.setShadow.apply(this, params)
  }

  //
  strokeStyle(...params) {
    return this.alipayCanvasContext.strokeStyle.apply(this, params)
  }

  setStrokeStyle(...params) {
    return this.alipayCanvasContext.setStrokeStyle.apply(this, params)
  }

  setTextAlign(...params) {
    return this.alipayCanvasContext.setTextAlign.apply(this, params)
  }

  setTextBaseline(...params) {
    return this.alipayCanvasContext.setTextBaseline.apply(this, params)
  }

  setTransform(...params) {
    return this.alipayCanvasContext.setTransform.apply(this, params)
  }

  stroke(...params) {
    return this.alipayCanvasContext.stroke.apply(this, params)
  }

  strokeRect(...params) {
    return this.alipayCanvasContext.strokeRect.apply(this, params)
  }

  strokeText(...params) {
    return this.alipayCanvasContext.strokeText.apply(this, params)
  }

  transform(...params) {
    return this.alipayCanvasContext.transform.apply(this, params)
  }

  translate(...params) {
    return this.alipayCanvasContext.translate.apply(this, params)
  }
}
