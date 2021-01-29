/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  arcTo(x1, y1, x2, y2, radius) {
    return this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius)
  }

  beginPath() {
    return this.alipayCanvasContext.beginPath()
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height)
  }

  clip() {
    return this.alipayCanvasContext.createCircularGradient()
  }

  closePath() {
    return this.alipayCanvasContext.createLinearGradient()
  }

  createCircularGradient(x, y, r) {
    return this.alipayCanvasContext.createCircularGradient(x, y, r)
  }

  createLinearGradient(x0, y0, x1, y1) {
    return this.alipayCanvasContext.createLinearGradient(x0, y0, x1, y1)
  }

  createPattern(image, repetition) {
    return this.alipayCanvasContext.createPattern(image, repetition)
  }

  draw(reserve, callback) {
    return this.alipayCanvasContext.draw(reserve, callback)
  }

  drawImage(imageResource, sx, sy, sWidth = 0, sHeight = 0, dx = 0, dy = 0, dWidth = 0, dHeight = 0) {
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  fill() {
    return this.alipayCanvasContext.fill()
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  fillText(text, x, y, maxWidth = 0) {
    return this.alipayCanvasContext.fillText(text, x, y, maxWidth)
  }

  lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y)
  }

  measureText(text) {
    return this.alipayCanvasContext.measureText(text)
  }

  moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height)
  }

  restore() {
    return this.alipayCanvasContext.restore()
  }

  rotate(rotate) {
    return this.alipayCanvasContext.rotate(rotate)
  }

  save() {
    return this.alipayCanvasContext.save()
  }

  scale(scaleWidth, scaleHeight) {
    return this.alipayCanvasContext.scale(scaleWidth, scaleHeight)
  }

  //
  set fillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color)
  }

  get fillStyle() {
    return this.alipayCanvasContext.getFillStyle()
  }

  setFillStyle(color) {
    this.fillStyle = color
  }

  //
  set font(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize)
  }

  get font() {
    return this.alipayCanvasContext.getFontSize()
  }

  setFontSize(fontSize) {
    this.font = fontSize
  }

  //
  set globalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  get globalAlpha() {
    return this.alipayCanvasContext.getGlobalAlpha()
  }

  setGlobalAlpha(alpha) {
    this.globalAlpha = alpha
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
  set lineDashOffset(pattern, offset) {
    return this.alipayCanvasContext.setLineDash(pattern, offset)
  }

  get lineDashOffset() {
    return this.alipayCanvasContext.getLineDash()
  }

  setLineDash(lineDashOffset) {
    this.lineDashOffset = lineDashOffset
  }

  //
  set lineJoin(pattern, offset) {
    return this.alipayCanvasContext.setLineJoin(pattern, offset)
  }

  get lineJoin() {
    return this.alipayCanvasContext.getLineJoin()
  }

  setLineJoin(pattern, offset) {
    this.lineJoin = (pattern, offset)
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
    // return this.alipayCanvasContext.shadowColor(this, params)
  }

  // eslint-disable-next-line class-methods-use-this
  set shadowBlur(shadowBlur) {
    // return this.alipayCanvasContext.shadowBlur(this, params)
  }


  //
  strokeStyle(...params) {
    return this.alipayCanvasContext.strokeStyle(this, params)
  }

  setStrokeStyle(...params) {
    return this.alipayCanvasContext.setStrokeStyle(this, params)
  }

  setTextAlign(...params) {
    return this.alipayCanvasContext.setTextAlign(this, params)
  }

  setTextBaseline(...params) {
    return this.alipayCanvasContext.setTextBaseline(this, params)
  }

  setTransform(...params) {
    return this.alipayCanvasContext.setTransform(this, params)
  }

  stroke(...params) {
    return this.alipayCanvasContext.stroke(this, params)
  }

  strokeRect(...params) {
    return this.alipayCanvasContext.strokeRect(this, params)
  }

  strokeText(...params) {
    return this.alipayCanvasContext.strokeText(this, params)
  }

  transform(...params) {
    return this.alipayCanvasContext.transform(this, params)
  }

  translate(...params) {
    return this.alipayCanvasContext.translate(this, params)
  }
}
