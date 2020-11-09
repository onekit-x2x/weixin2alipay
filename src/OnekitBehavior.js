/* eslint-disable camelcase */
import thekit from 'oneutil'
import wx from './wx'

export default function OnekitBehavior(object) {
  const wx_object = {
    onInit(query) {
      let created
      if (object.lifetimes && object.lifetimes.created) {
        created = object.lifetimes.created
      } else if (object.created) {
        created = object.created
      } else {
        created = function () {}
      }
      created.call(this, query)
    },
    didMount() {
      let attached
      if (object.lifetimes && object.lifetimes.attached) {
        attached = object.lifetimes.attached
      } else if (object.attached) {
        attached = object.attached
      } else {
        attached = function () {}
      }
      attached.call(this)
      // //////
      let ready
      if (object.lifetimes && object.lifetimes.ready) {
        ready = object.lifetimes.ready
      } else if (object.ready) {
        ready = object.ready
      } else {
        ready = function () {}
      }
      ready.call(this)
    },
    didUnmount() {
      let detached
      if (object.lifetimes && object.lifetimes.detached) {
        detached = object.lifetimes.detached
      } else if (object.detached) {
        detached = object.detached
      } else {
        detached = function () {}
      }
      detached.call(this)
    }
  }
  if (object) {
    if (!object.methods) { object.methods = {} }
    object.methods.triggerEvent = function (name, data) {
      const funcName = `on${thekit.firstUpper(name)}`
      if (this.props[funcName]) {
        this.props[funcName](data)
      }
    }
    object.methods.createSelectorQuery = wx.createSelectorQuery
  }
  for (const key of Object.keys(object)) {
    const value = object[key]
    if (!value) {
      continue
    }
    switch (key) {
      case 'properties':
        wx_object.props = {}
        for (const p of Object.keys(value)) {
          const v = value[p]
          wx_object.props[p] = (v && v.value ? v.value : null)
        }
        break
      default:
        wx_object[key] = value
    }
  }

  return wx_object
}
