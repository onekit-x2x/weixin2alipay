/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */

// import wx from '../wx'
// import MapContextX from './MapContextX'

export default class MapContext {
  constructor(alipayMapContext, id) {
    this.alipayMapContext = alipayMapContext
    this.id = id
  }

  addCustomLayer(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.addCustomLayer(wx_object)
  }

  addGroundOverlay(wx_object) {
    // 支付宝组件ground-overlays
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.addGroundOverlay(wx_object)
  }

  addMarkers(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.addMarkers(wx_object)
  }

  fromScreenLocation(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.fromScreenLocation(wx_object)
  }

  getCenterLocation(object) {
    return this.alipayMapContext.getCenterLocation(object)
  }

  getRegion(object) {
    return this.alipayMapContext.getRegion(object)
  }

  getRotate(object) {
    // const map = getApp().onekit_nodes[`_${this.id}`]
    // map.getRotate(wx_object)
    return this.alipayMapContext.getRegion(object)
  }

  getScale(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.getScale(wx_object)
  }

  getSkew(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.getSkew(wx_object)
  }

  includePoints(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.includePoints(wx_object)
  }

  initMarkerCluster(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.initMarkerCluster(wx_object)
  }

  moveAlong(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.moveAlong(wx_object)
  }

  moveToLocation(object) {
    return this.alipayMapContext.moveToLocation(object)
  }

  on(eventName, handlers) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.on(eventName, handlers)
  }

  openMapApp(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.openMapApp(wx_object)
  }

  removeGroundOverlay(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.removeGroundOverlay(wx_object)
  }

  removeMarkers(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.removeMarkers(wx_object)
  }

  setCenterOffset(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.setCenterOffset(wx_object)
  }

  toScreenLocation(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.toScreenLocation(wx_object)
  }

  translateMarker(object) {
    return this.alipayMapContext.translateMarker(object)
  }

  updateGroundOverlay(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.updateGroundOverlay(wx_object)
  }
}
