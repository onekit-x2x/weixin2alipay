export default class LngLat2px {
  constructor(mapWidth, mapHeight, lngNE, latNE, lngSW, latSW) {
    this.lngNW = lngSW
    this.latNW = latNE
    this.kw = (lngNE - lngSW) * 3600 / mapWidth
    this.kh = (latNE - latSW) * 3600 / mapHeight
  }

  run(lng, lat) {
    const x = (lng - this.latNW) * 3600 / this.kw
    const y = (this.lngNW - lat) * 3600 / this.kh
    return {x, y}
  }
}
