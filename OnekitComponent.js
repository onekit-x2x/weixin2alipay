import wx from "./wx.js";
import wxs_behavior from "./wxs_behavior.js";
export default function OnekitComponent(object) {

  const properties = {};
  const alipay_object = {
    mixins:[wxs_behavior],
    data() {
      onekit_styles: ""
    },
    onInit(query) {

      var created;
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created;
      } else if (object.created) {
        created = object.created;
      } else {
        created = function () { };
      }
      created.call(this, query);
    },
    didMount() {

      for (const k of Object.keys(this.props)) {
        const v = this.props[k];
        properties[k] = v;
        this.data[k] = v;
      }
      var attached;
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached;
      } else if (object.attached) {
        attached = object.attached;
      } else {
        attached = function () { };
      }
      attached.call(this);
      ////////
      var ready;
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready;
      } else if (object.ready) {
        ready = object.ready;
      } else {
        ready = function () { };
      }
      ready.call(this);
    },
    didUnmount() {
      var detached;
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached;
      } else if (object.detached) {
        detached = object.detached;
      } else {
        detached = function () { };
      }
      detached.call(this);
    }, methods: {
      get properties() {
        return properties;
      },
    
    }
  };
  if (object) {
    if (!object.methods) { object.methods = {}; }
    object.methods.triggerEvent = function (name, data, options) {
      var funcName = `on${thekit.firstUpper(name)}`;
      if (this.props[funcName]) {
        this.props[funcName](data);
      }
    }
    object.methods.createSelectorQuery = wx.createSelectorQuery;
  }
  for (const key of Object.keys(object)) {
    const value = object[key];
    if (!value) {
      continue;
    }
    switch (key) {
      case "properties":
        alipay_object.props = {};
        for (const k of Object.keys(value)) {
          const p = value[k];
          const v = (p && p.value ? p.value : null);
          alipay_object.props[k] = v;
          properties[k] = v;

        }
        break;
      case "methods":
        for (const k of Object.keys(value)) {
          alipay_object.methods[k] = value[k];
        }
        break;
      case "data":
        for (const k of Object.keys(value)) {
          alipay_object.data[k] = value[k];
        }
        break;
      case "behaviors":
        alipay_object.mixins = value;
      default:
        alipay_object[key] = value;
    }
  }
  return Component(alipay_object);
}