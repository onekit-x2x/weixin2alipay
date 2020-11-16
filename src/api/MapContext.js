/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
export default class MapContext {
  constructor(alipayMapContext, id) {
    this.alipayMapContext = alipayMapContext
    this.id = id
    this.map = getApp().onekit_nodes[id]
  }

  addGroundOverlay(object) {
    this.map.addGroundOverlay(object)
  }

  addMarkers(object) {
    console.log(object)
  }

  fromScreenLocation(object) {
    console.log(object)
  }

  getRotate(object) {
    console.log(object)
  }

  getScale(object) {
    console.log(object)
  }

  getSkew(object) {
    console.log(object)
  }

  includePoints(object) {
    console.log(object)
  }

  initMarkerCluster(object) {
    console.log(object)
  }

  moveAlong(object) {
    console.log(object)
  }

  moveToLocation(object) {
    console.log(object)
  }

  on() {
    console.log()
  }

  openMapApp(object) {
    console.log(object)
  }

  removeGroundOverlay(object) {
    console.log(object)
  }

  setCenterOffset(object) {
    console.log(object)
  }

  toScreenLocation(object) {
    console.log(object)
  }

  translateMarker(object) {
    return this.alipayMapContext.translateMarker(object)
  }

  updateGroundOverlay(object) {
    console.log(object)
  }
}
