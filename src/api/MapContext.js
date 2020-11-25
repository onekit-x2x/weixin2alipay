/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable no-console */

// import wx from '../wx'
// import MapContextX from './MapContextX'

export default class MapContext {
  constructor(alipayMapContext, id) {
    console.log(alipayMapContext, id)
    this.alipayMapContext = alipayMapContext
    console.log(alipayMapContext)
    this.id = id
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

  getRotate(wx_object) {
    const map = getApp().onekit_nodes[`_${this.id}`]
    map.getRotate(wx_object)
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

  static toScreenLocation() {
    // if (!wx_object) {
    //   return
    // }
    // const wx_longitude = wx_object.longitude
    // const wx_latitude = wx_object.latitude
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null

    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     longitude: wx_longitude,
    //     latitude: wx_latitude,
    //     success(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   my.moveToLocation(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }

  translateMarker(object) {
    return this.alipayMapContext.translateMarker(object)
  }

  static updateGroundOverlay() {
    // if (!wx_object) {
    //   return
    // }
    // const wx_longitude = wx_object.longitude
    // const wx_latitude = wx_object.latitude
    // const wx_success = wx_object.success
    // const wx_fail = wx_object.fail
    // const wx_complete = wx_object.complete
    // wx_object = null

    // PROMISE((SUCCESS, FAIL) => {
    //   const my_object = {
    //     longitude: wx_longitude,
    //     latitude: wx_latitude,
    //     success(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       SUCCESS(wx_res)
    //     },
    //     fail(my_res) {
    //       const wx_res = {
    //         errMsg: my_res.errMsg
    //       }
    //       FAIL(wx_res)
    //     }
    //   }
    //   my.moveToLocation(my_object)
    // }, wx_success, wx_fail, wx_complete)
  }
}
