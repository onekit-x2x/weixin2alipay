/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {PROMISE} from 'oneutil/PROMISE'
import LngLat2px from '../js/LngLat2px'
// import PX2LNTLAT from '../ui/map/PX2LNTLAT'

module.exports = {
  data: {
    on: {}
  },
  methods: {
    addGroundOverlay(wx_object) {
      if (!wx_object) {
        return
      }
      let wx_id = wx_object.id
      const wx_src = wx_object.src
      const wx_bounds = wx_object.bounds
      let wx_visible = wx_object.visible
      const wx_zIndex = wx_object.zIndex
      // 未完成
      // const wx_opacity = wx_object.opacity
      //
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS, FAIL) => {
        if (!wx_id || !wx_src || !wx_bounds) {
          FAIL({
            errMsg: 'addGroundOverlay:err'
          })
          return
        }
        const markerLevel = this.data.markers.markerLevel
        wx_id = markerLevel
        let alpha = this.data.groundOverlays.alpha
        if (wx_visible) {
          alpha = 1
        } else {
          alpha = 0
        }
        wx_visible = alpha
        // if (wx_opacity) {
        //   filter:alpha(opacity:30)
        // }
        this.setData({
          markerLevel: wx_id,
          'ground-overlays': [{
            'include-points': wx_bounds,
            image: wx_src,
            zIndex: wx_zIndex
          }]
        })
        const wx_res = {
          errMsg: 'addGroundOverlay:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    addMarkers(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_markers = wx_object.markers
      const wx_clear = wx_object.clear || false
      wx_object = null


      const markers = wx_clear ? [] : this.data.markers
      markers.push(...wx_markers)
      this.setData({
        markers
      })
      const clusters = this._getClusters()
      this._trigger_markerClusterCreate(clusters)
    },
    fromScreenLocation(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      // //////////
      PROMISE((SUCCESS) => {
        const wx_res = {
          latitude: this.data.latitude,
          longitude: this.data.longitude,
          errMsg: 'fromScreenLocation:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    initMarkerCluster(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_enableDefaultStyle = wx_object.enableDefaultStyle
      const wx_zoomOnClick = wx_object.zoomOnClick
      const wx_gridSize = wx_object.gridSize
      wx_object = null
      // //////////
      this._trigger_markerClusterCreate(wx_enableDefaultStyle, wx_zoomOnClick, wx_gridSize)
    },
    moveAlong(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_markerId = wx_object.markerId
      const wx_path = wx_object.path
      const wx_autoRotate = wx_object.autoRotate
      const wx_duration = wx_object.duration
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      // //////////
      PROMISE((SUCCESS, FAIL) => {
        if (!wx_markerId || !wx_path || !wx_duration) {
          FAIL({
            errMsg: 'moveAlong:error'
          })
          return
        }
        const my_object = {
          polylineId: wx_markerId,
          points: wx_path,
          duration: wx_duration,
          success() {
            const wx_res = {
              errMsg: 'moveAlong:ok'
            }
            SUCCESS(wx_res)
          },
          fail() {
            const wx_res = {
              errMsg: 'moveToLocation:ok'
            }
            FAIL(wx_res)
          }
        }
        my.smoothMovePolyline(my_object)
        this._trigger_markerClusterCreate(wx_autoRotate)
      }, wx_success, wx_fail, wx_complete)
    },
    on(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_markerClusterCreate = wx_object.clusters
      const wx_markerClusterClick = wx_object.latitude
      wx_object = null

      this._trigger_markerClusterCreate(wx_markerClusterCreate, wx_markerClusterClick)
    },
    openMapApp(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_longitude = wx_object.longitude
      const wx_latitude = wx_object.latitude
      const wx_destination = wx_object.destination
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS, FAIL) => {
        if (!wx_longitude || !wx_latitude || !wx_destination) {
          FAIL({
            errMsg: 'openMapApp:error'
          })
          return
        }
        my.openLocation({
          latitude: wx_longitude,
          longitude: wx_latitude,
          name: wx_destination
        })
        const wx_res = {
          errMsg: 'openMapApp:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    removeGroundOverlay(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_id = wx_object.id
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS, FAIL) => {
        if (!wx_id) {
          FAIL({
            errMsg: 'removeGroundOverlay:error'
          })
          return
        }
        this._trigger_removeGroundOverlay(wx_id)
        const wx_res = {
          errMsg: 'removeGroundOverlay:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    removeMarkers(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_markerIds = wx_object.markerIds
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS, FAIL) => {
        if (!wx_markerIds) {
          FAIL({
            errMsg: 'removeMarkers:error'
          })
          return
        }
        const my_object = {
          remove: {
            longitude: wx_markerIds.longitude,
            latitude: wx_markerIds.latitude,
          },
          success() {
            const wx_res = {
              errMsg: 'removeMarkers:ok'
            }
            SUCCESS(wx_res)
          },
          fail() {
            const wx_res = {
              errMsg: 'removeMarkers:error'
            }
            FAIL(wx_res)
          }
        }
        my.changeMarkers(my_object)
      }, wx_success, wx_fail, wx_complete)
    },
    updateGroundOverlay(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      let wx_id = wx_object.id
      const wx_src = wx_object.src
      const wx_bounds = wx_object.bounds
      let wx_visible = wx_object.visible
      const wx_zIndex = wx_object.zIndex
      // 未完成
      // const wx_opacity = wx_object.opacity
      //
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS, FAIL) => {
        if (!wx_id || !wx_src || !wx_bounds) {
          FAIL({
            errMsg: 'updateGroundOverlay:err'
          })
          return
        }
        const markerLevel = this.data.markers.markerLevel
        wx_id = markerLevel
        let alpha = this.data.groundOverlays.alpha
        if (wx_visible) {
          alpha = 1
        } else {
          alpha = 0
        }
        wx_visible = alpha
        // if (wx_opacity) {
        //   filter:alpha(opacity:30)
        // }
        this.setData({
          markerLevel: wx_id,
          'ground-overlays': [{
            'include-points': wx_bounds,
            image: wx_src,
            zIndex: wx_zIndex
          }]
        })
        const wx_res = {
          errMsg: 'updateGroundOverlay:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },

    //
    _trigger_markerClusterCreate(clusters) {
      if (this.on.markerClusterCreate) {
        this.on.markerClusterCreate({
          clusters
        })
      }
    },
    _trigger_moveAlong(markerId, path, autoRotate, duration) {
      if (this.on.moveAlong) {
        this.on.moveAlong({
          markerId,
          path,
          autoRotate,
          duration
        })
      }
    },
    _trigger_removeGroundOverlay(id) {
      if (this.on.removeGroundOverlay) {
        this.on.removeGroundOverlay({
          id
        })
      }
    },
    _getClusters() {
      let mapWidth
      let mapHeight
      let lngNE
      let latNE
      let lngSW
      let latSW
      const allMarkers = []
      let gridSize

      function Area(p0, p1, p2) {
        let area = 0.0
        area = p0.longitude * p1.latitude + p1.longitude * p2.latitude + p2.longitude * p0.latitude - p1.longitude * p0.latitude - p2.longitude * p1.latitude - p0.longitude * p2.latitude
        return area / 2
      }

      // line 249 计算polygon的质心
      function getPolygonAreaCenter(points) {
        let sum_x = 0
        let sum_y = 0
        let sum_area = 0
        let p1 = points[1]

        for (let i = 2; i < points.length; i++) {
          const p2 = points[i]
          const area = Area(points[0], p1, p2)
          sum_area += area
          sum_x += (points[0].longitude + p1.longitude + p2.longitude) * area
          sum_y += (points[0].latitude + p1.latitude + p2.latitude) * area
          p1 = p2
        }
        const longitude = sum_x / sum_area / 3
        const latitude = sum_y / sum_area / 3
        return {
          longitude,
          latitude
        }
      }
      const ragionMarkers = allMarkers.filter(marker => ((lngSW < marker.lng < lngNE) && (latSW < marker.lat < latNE)))

      // 3
      const lngLat2px = new LngLat2px(mapWidth, mapHeight, lngNE, latNE, lngSW, latSW)
      const ragionMarkersWithXY = ragionMarkers.map(marker => {
        marker.xy = lngLat2px.run(marker.lng, marker.lat)
        return marker
      })
      // 4
      const sortedRagionMarkersWithXY = ragionMarkersWithXY.sort((marker1, marker2) => marker2.lng > marker1.lng)
      const clusters = []
      for (let i = 0; i < sortedRagionMarkersWithXY.length; i++) {
        for (let j = i + 1; j < sortedRagionMarkersWithXY.length; j++) {
          if (i === j) {
            continue
          }
          const marker1 = sortedRagionMarkersWithXY[i]
          const marker2 = sortedRagionMarkersWithXY[j]
          const dx = marker1.x - marker2.x
          const dy = marker1.y - marker2.yj
          const gridSizeMarkers = dx * dx + dy * dy
          // let enableDefaultStyle
          // if (enableDefaultStyle) {

          // }
          if (gridSizeMarkers <= gridSize * gridSize) {
            const id1 = marker1.id
            const id2 = marker2.id
            let isFind = false
            for (let c = 0; c < clusters.length; c++) {
              const cluster = clusters[c]
              if (cluster.markerIds.indexOf(id1) >= 0) {
                cluster.markerIds.push(id2)
                isFind = true
                break
              } else if (cluster.markerIds.indexOf(id2) >= 0) {
                cluster.markerIds.push(id1)
                isFind = true
                break
              }
            }
            // let zoomOnClick
            // if (zoomOnClick) {

            // }
            if (!isFind) {
              const clusterId = clusters.length + 1
              clusters.push({
                clusterId,
                markerIds: [id1, id2]
              })
            }
          }
        }
      }
      return clusters.map(cluster => {
        const marksers = sortedRagionMarkersWithXY.filter(marker => cluster.markerIds.indexOf(marker.id))
        cluster.center = getPolygonAreaCenter(marksers)
        return cluster
      })
    }
  }
}
