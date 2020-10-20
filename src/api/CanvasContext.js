export default class CanvasContext {
  constructor(alipayCanvasContext) {
    this.alipayCanvasContext = alipayCanvasContext
  }

  beginPath(a) {
    return this.alipayCanvasContext.beginPath(a)
  }

  save() {
    return this.alipayCanvasContext.save()
  }

  restore() {
    return this.alipayCanvasContext.restore()
  }

  //
  setGlobalAlpha(alpha) {
    return this.alipayCanvasContext.setGlobalAlpha(alpha)
  }

  setFillStyle(color) {
    return this.alipayCanvasContext.setFillStyle(color)
  }

  setStrokeStyle(color) {
    return this.alipayCanvasContext.setStrokeStyle(color)
  }

  setShadow(offsetX, offsetY, blur, color) {
    return this.alipayCanvasContext.setShadow(offsetX, offsetY, blur, color)
  }

  setLineCap(lineCap) {
    return this.alipayCanvasContext.setLineCap(lineCap)
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

  setFontSize(fontSize) {
    return this.alipayCanvasContext.setFontSize(fontSize)
  }

  rotate(rotate) {
    return this.alipayCanvasContext.rotate(rotate)
  }

  scale(scaleWidth, scaleHeight) {
    return this.alipayCanvasContext.scale(scaleWidth, scaleHeight)
  }

  translate(x, y) {
    return this.alipayCanvasContext.translate(x, y)
  }

  moveTo(x, y) {
    return this.alipayCanvasContext.moveTo(x, y)
  }

  lineTo(x, y) {
    return this.alipayCanvasContext.lineTo(x, y)
  }

  closePath() {
    return this.alipayCanvasContext.closePath()
  }

  fillText(text, x, y) {
    return this.alipayCanvasContext.fillText(text, x, y)
  }

  drawImage(imageResource, sx, sy, sWidth, sHeight) {
    return this.alipayCanvasContext.drawImage(imageResource, sx, sy, sWidth, sHeight)
  }

  arc(x, y, r, sAngle, eAngle, counterclockwise) {
    return this.alipayCanvasContext.arc(x, y, r, sAngle, eAngle, counterclockwise)
  }

  quadraticCurveTo(cpx, cpy, x, y) {
    return this.alipayCanvasContext.quadraticCurveTo(cpx, cpy, x, y)
  }

  bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.alipayCanvasContext.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  }

  //
  rect(x, y, width, height) {
    return this.alipayCanvasContext.rect(x, y, width, height)
  }

  //
  clearRect(x, y, width, height) {
    return this.alipayCanvasContext.clearRect(x, y, width, height)
  }

  stroke() {
    return this.alipayCanvasContext.stroke()
  }

  fill() {
    return this.alipayCanvasContext.fill()
  }

  draw(reserve, callback) {
    return this.alipayCanvasContext.draw(reserve, callback)
  }

  fillRect(x, y, width, height) {
    return this.alipayCanvasContext.fillRect(x, y, width, height)
  }

  getActions() {
    return this.alipayCanvasContext.getActions()
  }
}
