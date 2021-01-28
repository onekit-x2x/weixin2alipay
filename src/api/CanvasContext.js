/* eslint-disable prefer-rest-params */
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

  draw() {
    return this.alipayCanvasContext.draw()
  }

  drawImage(...params) {
    return this.alipayCanvasContext.drawImage.apply(this, params)
  }

  fill(...params) {
    return this.alipayCanvasContext.fill.apply(this, params)
  }

  fillRect() {
    this.alipayCanvasContext.fillRect.apply(this, arguments)
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
  set font(font) {
    return this.alipayCanvasContext.setFontSize(font)
  }

  get font() {
    return this.alipayCanvasContext.getFontSize()
  }

  setFontSize(font) {
    this.font = font
  }

  //
  set globalAlpha(globalAlpha) {
    return this.alipayCanvasContext.setGlobalAlpha(globalAlpha)
  }

  get globalAlpha() {
    return this.alipayCanvasContext.getGlobalAlpha()
  }

  setGlobalAlpha(globalAlpha) {
    this.globalAlpha = globalAlpha
  }

  //
  set lineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap)
  }

  get lineCap() {
    return this.alipayCanvasContext.getLineCap()
  }

  setLineCap(lineCap) {
    this.lineCap = lineCap
  }

  //
  set lineDashOffset(lineDashOffset) {
    return this.alipayCanvasContext.setLineDash(lineDashOffset)
  }

  get lineDashOffset() {
    return this.alipayCanvasContext.getLineDash()
  }

  setLineDash(lineDashOffset) {
    this.lineDashOffset = lineDashOffset
  }

  //
  set lineJoin(lineJoin) {
    return this.alipayCanvasContext.setLineJoin(lineJoin)
  }

  get lineJoin() {
    return this.alipayCanvasContext.getLineJoin()
  }

  setLineJoin(lineJoin) {
    this.lineJoin = lineJoin
  }

  //
  set lineWidth(lineWidth) {
    return this.alipayCanvasContext.setLineWidth(lineWidth)
  }

  get lineWidth() {
    return this.alipayCanvasContext.getLineWidth()
  }

  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth
  }

  //
  set miterLimit(miterLimit) {
    return this.alipayCanvasContext.setMiterLimit(miterLimit)
  }

  get miterLimit() {
    return this.alipayCanvasContext.getMiterLimit()
  }

  setMiterLimit(miterLimit) {
    this.miterLimit = miterLimit
  }

  //
  set shadowOffsetX(shadowOffsetX) {
    return this.alipayCanvasContext.setShadow(shadowOffsetX, 0, 0, 'black')
  }

  set shadowOffsetY(shadowOffsetY) {
    return this.alipayCanvasContext.setShadow(0, shadowOffsetY, 0, 'black')
  }

  // eslint-disable-next-line class-methods-use-this
  set shadowColor(shadowColor) {
    // return this.alipayCanvasContext.shadowColor.apply(this, params)
  }

  // eslint-disable-next-line class-methods-use-this
  set shadowBlur(shadowBlur) {
    // return this.alipayCanvasContext.shadowBlur.apply(this, params)
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
