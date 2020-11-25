/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import {PROMISE} from 'oneutil'
import LngLat2px from '../js/LngLat2px'
// import PX2LNTLAT from '../ui/map/PX2LNTLAT'

module.exports = {
  data: {
    on: {}
  },
  methods: {
    addGroundOverlay(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_id = wx_object.id
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
          FAIL({errMsg: 'addGroundOverlay:err'})
          return
        }
        const markerLevel = this.data.markers.markerLevel
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
          markerLevel = wx_id,
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
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      // //////////
      PROMISE((SUCCESS, FAIL) => {
        if (!wx_markers) {
          FAIL({errMsg: 'addMarkers:error'})
          return
        }
        const markers = wx_clear ? [] : this.data.markers
        markers.push(...wx_markers)
        this.setData({
          markers
        })
        const clusters = this._getClusters()

        const wx_res = {
          errMsg: 'addMarkers:ok'
        }
        SUCCESS(wx_res)
        this.trigger_markerClusterCreate(clusters)
      }, wx_success, wx_fail, wx_complete)
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
    getRotate(wx_object) {
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
          rotate: this.data.route,
          errMsg: 'getRotate:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    getScale(wx_object) {
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
          scale: this.data.scale,
          errMsg: 'getScale:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    getSkew(wx_object) {
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
          skew: this.data.skew,
          errMsg: 'getSkew:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    includePoints(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_points = wx_object.points
      const wx_padding = wx_object.padding
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      // //////////
      PROMISE((SUCCESS, FAIL) => {
        if (!wx_points) {
          FAIL({errMsg: 'includePoints:error'})
          return
        }
        this.setData({
          includePoints: wx_points,
          'include-padding': {
            left: wx_padding[3],
            right: wx_padding[1],
            top: wx_padding[0],
            bottom: wx_padding[2]
          }
        })
        const wx_res = {
          errMsg: 'includePoints:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    initMarkerCluster(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_enableDefaultStyle = wx_object.enableDefaultStyle
      const wx_zoomOnClick = wx_object.zoomOnClick
      const wx_gridSize = wx_object.gridSize
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null
      // //////////
      PROMISE((SUCCESS) => {
        this.trigger_markerClusterCreate(wx_enableDefaultStyle, wx_zoomOnClick, wx_gridSize)
        const wx_res = {
          errMsg: 'initMarkerCluster:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
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
          FAIL({errMsg: 'moveAlong:error'})
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
        this.trigger_markerClusterCreate(wx_autoRotate)
      }, wx_success, wx_fail, wx_complete)
    },
    on(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_markerClusterCreate = wx_object.clusters
      const wx_markerClusterClick = wx_object.latitude
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS) => {
        this.trigger_markerClusterCreate(wx_markerClusterCreate, wx_markerClusterClick)
        const wx_res = {
          errMsg: 'on:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
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
          FAIL({errMsg: 'openMapApp:error'})
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
          FAIL({errMsg: 'removeGroundOverlay:error'})
          return
        }
        this.trigger_removeGroundOverlay(wx_id)
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
          FAIL({errMsg: 'removeMarkers:error'})
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
    setCenterOffset(wx_object) {
      // 未完成
      if (!wx_object) {
        return
      }
      const wx_offset = wx_object.offset || [0.5, 0.5]
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS, FAIL) => {
        if (!wx_offset) {
          FAIL({errMsg: 'setCenterOffset:error'})
          return
        }
        const wx_res = {
          errMsg: 'setCenterOffset:ok'
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    toScreenLocation(wx_object) {
      if (!wx_object) {
        return
      }
      const wx_success = wx_object.success
      const wx_fail = wx_object.fail
      const wx_complete = wx_object.complete
      wx_object = null

      PROMISE((SUCCESS) => {
        let mapWidth
        let mapHeight
        let lngNE
        let latNE
        let lngSW
        let latSW
        const lngLat2px = new LngLat2px(mapWidth, mapHeight, lngNE, latNE, lngSW, latSW)
        const wx_res = {
          errMsg: 'toScreenLocation:ok',
          x: lngLat2px.lngSW,
          y: lngLat2px.latNE
        }
        SUCCESS(wx_res)
      }, wx_success, wx_fail, wx_complete)
    },
    updateGroundOverlay(wx_object) {
      console.log(wx_object)
      if (!wx_object) {
        return
      }
      const wx_id = wx_object.id
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
          FAIL({errMsg: 'updateGroundOverlay:err'})
          return
        }
        const markerLevel = this.data.markers.markerLevel
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
          markerLevel = wx_id,
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
    trigger_markerClusterCreate(clusters) {
      if (this.on.markerClusterCreate) {
        this.on.markerClusterCreate({clusters})
      }
    },
    trigger_moveAlong(markerId, path, autoRotate, duration) {
      if (this.on.moveAlong) {
        this.on.moveAlong({
          markerId, path, autoRotate, duration
        })
      }
    },
    trigger_removeGroundOverlay(id) {
      if (this.on.removeGroundOverlay) {
        this.on.removeGroundOverlay({id})
      }
    },
    _getClusters() {
      let mapWidth
      let mapHeight
      let lngNE
      let latNE
      let lngSW
      let latSW
      let allMarkers
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
        return {longitude, latitude}
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
              clusters.push({clusterId, markerIds: [id1, id2]})
            }
          }
        }
      }
      return clusters.map(cluster => {
        const marksers = sortedRagionMarkersWithXY.filter(marker => cluster.markerIds.indexOf(marker.id))
        cluster.center = getPolygonAreaCenter(marksers)
        return cluster
      })
    },
    _getMapMove() {
      let autoRotate
      // let duration
      let allMarkers
      const markerId = getApp().onekit_nodes[`_${this.id}`]
      const lng,
      const lat,
      const path = [{
        lng, lat
      }]
      allMarkers.map((r, theta) => {
        for (const i in path) {
          if (markerId) {
            r = Math.floor(Math.sqrt((path[i].lng - path[i - 1].lng) * (path[i].lng - path[i - 1].lng) + (path[i].lat - path[i - 1].lng) * (path[i].lat - path[i - 1].lng)))
            theta = Math.atan((path[i].lng - path[i - 1].lng) / (path[i].lat - path[i - 1].lng))
            if ((theta >= 0 && theta < Math.PI) && (((path[i].lat - path[i - 1].lng) < 0 && (path[i].lng - path[i - 1].lng) > 0) || ((path[i].lat - path[i - 1].lng) < 0 && (path[i].lng - path[i - 1].lng) < 0))) {
              theta = Math.PI + theta
            }

            //
            if (autoRotate) {
              theta = 0
            }
            // if (duration) {
            //   const setDuration = duration
            // }
          }
        }
        return true
      })
    },
    _getremoveGroundOverlay() {
      const id
      function removeClass(ele, cName) {
        const arr = ele.className.split(' ')
        const arr1 = cName.split(' ')
        for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr.length; j++) {
            if (arr1[i] === arr[j]) {
              arr.splice(j, 1)
            }
          }
        }
        ele.className = arr.join(' ')
      }
      return removeClass(id)
    },
    /* _getsetCenterOffset() {
      let mapWidth
      let mapHeight
      const offset = new Array(2)

      function CenterArea(x, y) {
        let circleCentrerX
        let circleCentrerY
        const r
        let paddingLeft
        let paddingRight
        x = offset[0]
        y = offset[1]
        if ((x > 0.25 * mapWidth && x < 0.75 * mapWidth) && (y > 0.25 * mapHeight && y < 0.75 * mapHeight) && (r > 0 && r < 0.5 * mapHeight)) {
          if ((x === 0.5) && (y === 0.5)) {
            circleCentrerX = x
            circleCentrerY = y

            // const circle = document.createElement('div')
            // 记得remove

            // circle.setAttrbute('style', `width:${r * 2};height:${r * 2};borderRadius: 50%;paddingLeft:${paddingLeft};paddingRight:${paddingRight};opacity:0`)

            paddingLeft = circleCentrerX - r
            paddingRight = circleCentrerY - r
          }
        }
      }
    } */
  }
}
