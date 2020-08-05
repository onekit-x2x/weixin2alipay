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
      triggerEvent(name,data,options){
        var funcName = `on${thekit.firstUpper(name)}`;
        if(this.props[funcName]){
          this.props[funcName](data);
        }
      }
    }
  };
  for(const key in object){
    switch(key){
      case "properties":
        alipay_object.props = {};
        for(const p in object.properties){
          alipay_object.props[p] = (object.properties[p].value || null);
        }
        break;
      default:  
       alipay_object[key] = object[key];
    }
  }
  return alipay_object;
}