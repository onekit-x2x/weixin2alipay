import onekit from "../onekit";
export default class CanvasContext {
  constructor() {
    this._actions = [];
    this._path = [];
  }
  beginPath() {
        this._actions = [];
    this._path = [];
  }

  save() {
    this._actions.push({ method: "save", data: [] });
  }
  restore() {
    this._actions.push({ method: "restore", data: [] });
  }
  //
    setGlobalAlpha(alpha) {
    this._actions.push({ method: "setGlobalAlpha", data: [alpha] });
  }
  setFillStyle(color) {
    color = onekit.color.fix(color);
    this._actions.push({ method: "setFillStyle", data: ["normal", onekit.color.str2array(color)] });
  }
  setStrokeStyle(color) {
    color = onekit.color.fix(color);
    this._actions.push({ method: "setStrokeStyle", data: ["normal", onekit.color.str2array(color)] });
  }
  setShadow(x, y, blur, color) {
    color = onekit.color.fix(color);
    this._actions.push({ method: "setShadow", data: [x, y, blur, onekit.color.str2array(color)] });
  }
  setLineCap(cap) {
    this._actions.push({ method: "setLineCap", data: [cap] });
  }
  setLineJoin(join) {
    this._actions.push({ method: "setLineJoin", data: [join] });
  }
  setLineWidth(width) {
    this._actions.push({ method: "setLineWidth", data: [width] });
  }
  setMiterLimit(limit) {
    this._actions.push({ method: "setMiterLimit", data: [limit] });
  }
  setFontSize(size) {
    this._actions.push({ method: "setFontSize", data: [size] });

  }
  rotate(angle) {
    this._actions.push({ method: "rotate", data: [angle] });
  }
  scale(sx, sy) {
    this._actions.push({ method: "scale", data: [sx, sy] });
  }
  translate(tx, ty) {
    this._actions.push({ method: "translate", data: [tx, ty] });
  }
  moveTo(x, y) {
    this._path.push({ method: "moveTo", data: [x, y] });
  }
  lineTo(x, y) {
    this._path.push({ method: "lineTo", data: [x, y] });
  }
  closePath() {
    this._path.push({ method: "closePath", data: [] });
  }
  fillText() {
    var data = [];
    for (var arg of arguments) {
      data.push(arg);
    }
    this._actions.push({ method: "fillText", data: data });
  }
  drawImage() {
    var data = [];
    for (var arg of arguments) {
      data.push(arg);
    }
    this._actions.push({ method: "drawImage", data: data });
  }
  arc() {
    var data = [];
    for (var arg of arguments) {
      data.push(arg);
    }
    if(data.length<6){
      data.push(false);
    }
    this._path.push({ method: "arc", data: data });
  }
  quadraticCurveTo() {
    var data = [];
    for (var arg of arguments) {
      data.push(arg);
    }
    this._path.push({ method: "quadraticCurveTo", data: data });
  }
   bezierCurveTo() {
    var data = [];
    for (var arg of arguments) {
      data.push(arg);
    }
    this._path.push({ method: "bezierCurveTo", data: data });
  }
  //
  rect(x, y, width, height) {
    this._path.push({ method: "rect", data: [x, y, width, height] });
  }
  //
  clearRect(x, y, width, height) {
    this._actions.push({ method: "clearRect", data: [x, y, width, height] });
  }
  stroke() {
    this._actions.push({ method: "strokePath", data: this._path });
  }
  fill() {
    this._actions.push({ method: "fillPath", data: this._path });
  }
  getActions() {
    var actions = this._actions;
    this._actions = [];
    return actions;
  }
}