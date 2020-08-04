import TheKit from "./TheKit.js"
import wx from "./wx.js"
var onekit = {};
onekit.OnekitApp = function(data){
  my.hideAllFavoriteMenu();
  return App(data);
}
onekit.OnekitPage = function(data){
  data.animate = function(){};
  return Page(data);
}
onekit.OnekitComponent = function(data){
  var methods = data.methods || {};
  methods.triggerEvent = function(name,data,options){
    var funcName = `on${TheKit.firstUpper(name)}`;
    if(this.props[funcName]){
      this.props[funcName](data);
    }
  }
  data.methods = methods;
  return Component(data);
}
onekit.wx = wx;
module.exports =  onekit;
