export default function OnekitBehavior(object){
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
      created(query);
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
      attached();
      ////////
      setTimeout(function(){
        var ready;
        if(object.lifetimes && object.lifetimes.ready){
          ready = object.lifetimes.ready;
        }else if(object.ready){
          ready = object.ready;
        }else{
          ready = function(){};
        }
        ready();
      },100);
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
      detached();
    },
    methods:{
    }
  };
  for(const key in object){
    const value = object[key];
    if(!value){
      continue;
    }
    switch(key){
      case "properties":
        alipay_object.props = {};
        for(const p in value){
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
  return alipay_object;
}