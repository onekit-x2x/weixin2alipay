/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  arc(x, y, r, sAngle, eAngle) {
    const counterclockwise = 0
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  arcTo(x1, y1, x2, y2, radius) {
    return this.alipayCanvasContext.arcTo(x1, y1, x2, y2, radius)
  }

  beginPath() {
    return this.alipayCanvasContext.beginPath()
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.alipayCanvasContext.setLineWidth(0)
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height)
  }

  clip() {
    this.alipayCanvasContext.setFillStyle('#000')
    return this.alipayCanvasContext.clip()
  }

  closePath() {
    return this.alipayCanvasContext.closePath()
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

  drawImage(imageResource, sx, sy) {
    const sWidth = 0
    const sHeight = 0
    const dx = 0
    const dy = 0
    const dWidth = 0
    const dHeight = 0
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  fill() {
    return this.alipayCanvasContext.fill()
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  fillText(text, x, y) {
    this.alipayCanvasContext.setFillStyle('#000')
    return this.alipayCanvasContext.fillText(text, x, y)
  }

  lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y)
  }

  measureText(width) {
    return this.alipayCanvasContext.measureText(width)
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
    this.alipayCanvasContext.setFillStyle(color)
  }

  get fillStyle() {
    return this.alipayCanvasContext.getFillStyle()
  }

  setFillStyle(color) {
    this.fillStyle = color
  }

  //
  set font(fontSize) {
    this.alipayCanvasContext.setFontSize(fontSize)
  }

  get font() {
    return this.alipayCanvasContext.getFontSize()
  }

  setFontSize(fontSize) {
    this.font = fontSize
  }

  //
  set globalAlpha(alpha) {
    this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  get globalAlpha() {
    return this.alipayCanvasContext.getGlobalAlpha()
  }

  setGlobalAlpha(alpha) {
    this.globalAlpha = alpha
  }

  //
  set lineCap(lineCap) {
    this.alipayCanvasContext.setLineCap(lineCap)
  }

  get lineCap() {
    return this.alipayCanvasContext.getLineCap()
  }

  setLineCap(lineCap) {
    this.lineCap = lineCap
  }

  //
  set lineDashOffset(offset) {
    this.alipayCanvasContext.setLineDash([5, 5], offset)
  }

  get lineDashOffset() {
    return this.alipayCanvasContext.getLineDash()
  }

  setLineDash(pattern, offset) {
    this.lineDashOffset = (pattern, offset)
  }

  //
  set lineJoin(lineJoin) {
    this.alipayCanvasContext.setLineJoin(lineJoin)
  }

  get lineJoin() {
    return this.alipayCanvasContext.getLineJoin()
  }

  setLineJoin(lineJoin) {
    this.lineJoin = lineJoin
  }

  //
  set lineWidth(lineWidth) {
    this.alipayCanvasContext.setLineWidth(lineWidth)
  }

  get lineWidth() {
    return this.alipayCanvasContext.getLineWidth()
  }

  setLineWidth(lineWidth) {
    this.lineWidth = lineWidth
  }

  //
  set miterLimit(miterLimit) {
    this.alipayCanvasContext.setMiterLimit(miterLimit)
  }

  get miterLimit() {
    return this.alipayCanvasContext.getMiterLimit()
  }

  setMiterLimit(miterLimit) {
    this.miterLimit = miterLimit
  }

  //
  set shadowOffsetX(offsetX) {
    const offsetY = this._shadowOffsetY || 0
    const blur = this._shadowBlur || 0
    const color = this._shadowColor || 'black'
    this._shadowOffsetX = offsetX
    this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowOffsetX() {
    return this._shadowOffsetX || 0
  }

  set shadowOffsetY(offsetY) {
    const offsetX = this._shadowOffsetX || 0
    const blur = this._shadowBlur || 0
    const color = this._shadowColor || 'black'
    this._shadowOffsetY = offsetY
    this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowOffsetY() {
    return this._shadowOffsetY || 0
  }

  set shadowBlur(blur) {
    const offsetX = this._shadowOffsetX || 0
    const offsetY = this._shadowOffsetY || 0
    const color = this._shadowColor || 'black'
    this._shadowBlur = blur
    this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowBlur() {
    return this._shadowBlur || 0
  }

  set shadowColor(color) {
    const offsetX = this._shadowOffsetX || 0
    const offsetY = this._shadowOffsetY || 0
    const blur = this._shadowBlur || 0
    this._shadowColor = color
    this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  get shadowColor() {
    return this._shadowColor || 'black'
  }

  setShadow(offsetX, offsetY, blur, color) {
    this.shadowOffsetX = offsetX
    this.shadowOffsetY = offsetY
    this.shadowBlur = blur
    this.shadowColor = color
  }


  //
  set strokeStyle(color) {
    this.alipayCanvasContext.setStrokeStyle(color)
  }

  get strokeStyle() {
    return this.alipayCanvasContext.getStrokeStyle()
  }

  setStrokeStyle(color) {
    this.strokeStyle = color
  }

  setTextAlign(align) {
    return this.alipayCanvasContext.setTextAlign(align)
  }

  setTextBaseline(textBaseline) {
    return this.alipayCanvasContext.setTextBaseline(textBaseline)
  }

  setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  stroke() {
    return this.alipayCanvasContext.stroke()
  }

  strokeRect(x, y, width, height) {
    return this.alipayCanvasContext.strokeRect(x, y, width, height)
  }

  strokeText(text, x, y) {
    const maxWidth = 0
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
  }

  transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  translate(x, y) {
    return this.alipayCanvasContext.translate(x, y)
  }
}
