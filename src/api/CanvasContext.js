/* eslint-disable max-len */
export default class CanvasContext {
  constructor(alipayCanvasContext, id) {
    this.alipayCanvasContext = alipayCanvasContext
    this.id = id
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

  drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
  }

  fill() {
    return this.alipayCanvasContext.fill()
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  fillText(...params) {
    return this.alipayCanvasContext.fillText(...params)
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

  setFillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color)
  }

  setFontSize(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize)
  }

  setGlobalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  setLineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap)
  }

  setLineDash(pattern, offset) {
    return this.alipayCanvasContext.setLineDash(pattern, offset)
  }

  setLineJoin(lineJoin) {
    return this.alipayCanvasContext.setLineJoin(lineJoin)
  }

  setLineWidth(lineWidth) {
    return this.alipayCanvasContext.setLineWidth(lineWidth)
  }

  setMiterLimit(miterLimit) {
    return this.alipayCanvasContext.setMiterLimit(miterLimit)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  setStrokeStyle(color) {
    return this.alipayCanvasContext.setStrokeStyle(color)
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

  strokeText(text, x, y, maxWidth) {
    return this.alipayCanvasContext.strokeText(text, x, y, maxWidth)
  }

  transform(scaleX, skewX, skewY, scaleY, translateX, translateY) {
    return this.alipayCanvasContext.transform(scaleX, skewX, skewY, scaleY, translateX, translateY)
  }

  translate(x, y) {
    return this.alipayCanvasContext.translate(x, y)
  }
}
