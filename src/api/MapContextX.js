/* eslint-disable max-len */
/* eslint-disable camelcase */
import LngLat2px from '../js/LngLat2px'

module.exports = {
  methods: {
    addGroundOverlay(data) {
      const visible = this.data.visible
      const opacity = this.data.opacity
      data.src = this.data.image
      data.bounds = this.data.includePoints
      visible.push(data)
      opacity.push(data)
      this.setData({visible, opacity})
    },

    _getCluster(mapWidth, mapHeight, lngNE, latNE, lngSW, latSW, allMarkers, gridSize) {
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
    }
  }
}
