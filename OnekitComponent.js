import TheKit from "./TheKit"
export default function OnekitComponent(data){
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