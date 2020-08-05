import wx from "./wx.js";
export default function OnekitComponent(object){
  const alipay_object = {
    onInit(query){
      var created;
      if(object.lifetimes && object.lifetimes.created){
        created = object.lifetimes.created;
      }else if(object.created){
        created = object.created;
      }else{
        created = function(){};
      }
      created(this.query);
    },
    didMount(){
      var attached;
      if(object.lifetimes && object.lifetimes.attached){
        attached = object.lifetimes.attached;
      }else if(object.attached){
        attached = object.attached;
      }else{
        attached = function(){};
      }
      attached.apply(this);
      ////////
    //  setTimeout(function(){
        var ready;
        if(object.lifetimes && object.lifetimes.ready){
          ready = object.lifetimes.ready;
        }else if(object.ready){
          ready = object.ready;
        }else{
          ready = function(){};
        }
        ready.apply(this);
    //  },100);
    },
    didUnmount(){
      var detached;
      if(object.lifetimes && object.lifetimes.detached){
        detached = object.lifetimes.detached;
      }else if(object.detached){
        detached = object.detached;
      }else{
        detached = function(){};
      }
      detached.apply(this);
    },
    methods:{
    }
  };
  for(const key of Object.keys(object)){
    const value = object[key];
    if(!value){
      continue;
    }
    switch(key){
      case "properties":
        alipay_object.props = {};
        for(const p of Object.keys(value)){
          const v = value[p];
          alipay_object.props[p] = (v && v.value ? v.value:null);
        }
        break;
      default:  
       alipay_object[key] = value;
    }
  }
  alipay_object.methods.triggerEven = function(name,data,options){
    var funcName = `on${thekit.firstUpper(name)}`;
    if(this.props[funcName]){
      this.props[funcName](data);
    }
  }
  alipay_object.methods.createSelectorQuery = wx.createSelectorQuery;
  return Component(alipay_object);
}