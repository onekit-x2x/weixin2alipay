/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
  data: {
    groundOverlays: []
  },
  props: {
    longitude(longitude) {
      this.setData({longitude})
    },
    latitude(latitude) {
      this.setData({latitude})
    },
    scale: 16,
    minScale: 3,
    maxScale: 20,
    markers(markers) {
      this.setData({markers})
    },
    covers(covers) {
      this.setData({markers: covers})
    },
    polyline(polyline) {
      this.setData({polyline})
    },
    circles(circles) {
      this.setData({circles})
    },
    controls(controls) {
      this.setData({controls})
    },
    'include-points': function (includePoints) {
      this.setData({'include-points': includePoints})
    },
    'show-location': function (showLocation) {
      this.setData({'show-location': showLocation})
    },
    polygons(polygon) {
      this.setData({polygon})
    },

    //
    subkey(subkey) {
      this.setData({subkey})
    },
    layerStyle(layerStyle) {
      this.setData({layerStyle})
    },
    //

    rotate(rotate) {
      this.setData({rotate})
    },
    skew(skew) {
      this.setData({skew})
    },

    // 支付宝暂时不支持3D'
    'enable-3D': function () {
      console.log('[onekit]enable-3D')
    },
    'show-compass': function (showCompass) {
      this.mapCtx.showsCompass({isShowCompass: showCompass})
    },
    'show-scale': function () {
      console.log()
    },
    'enable-overlooking': function (enableOverlooking) {
      this.mapCtx.gestureEnable({isGestureEnable: enableOverlooking})
    },
    'enable-zoom': function (enableZoom) {
      this.mapCtx.showsScale({isShowsScale: enableZoom})
    },
    'enable-scroll': function () {
      console.log('[onekit]enable-scroll')
    },
    'enable-rotate': function (enableRotate) {
      this.mapCtx.gestureEnable({isGestureEnable: enableRotate})
    },
    'enable-satellite': function () {
      console.log()
    },
    'enable-traffic': function () {
      console.log()
    },
    'enableP-poi': function () {
      console.log()
    },
    'enable-building': function () {
      console.log()
    },
    //

    setting(setting) {
      this.setData({setting})
    }
  },
  didMount() {
    const that = this
    const scale = Math.max(that.props.scale, that.props.minScale)
    that.setData({scale})
    that.mapCtx = my.createMapContext(that.props.onekitId)

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec((rect) => {
      that.setData({rect: rect[0]})
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    addGroundOverlay(object) {
      console.log('addGroundOverlay', object)
    },

    map_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e)
      }
    },

    //
    trigger_labeltap(e) {
      if (this.props.onLabelTap) {
        this.props.onLabelTap(e)
      }
    },
    //

    map_MarkerTap(e) {
      if (this.props.onMarkerTap) {
        this.props.onMarkerTap(e)
      }
    },
    map_ControlTap(e) {
      if (this.props.onControltap) {
        this.props.onControltap(e)
      }
    },
    map_CalloutTap(e) {
      if (this.props.onCalloutTap) {
        this.props.onCalloutTap(e)
      }
    },

    //
    trigger_updated(e) {
      if (this.props.onUpdated) {
        this.props.onUpdated(e)
      }
    },
    //

    map_RegionChange(e) {
      if (this.props.onRegionChange) {
        this.props.onRegionChange(e)
      }
    },

    //
    trigger_poitap(e) {
      if (this.props.onPoiTap) {
        this.props.onPoiTap(e)
      }
    },
    trigger_anchorpointtap(e) {
      if (this.props.onAnchorPointTap) {
        this.props.onAnchorPointTap(e)
      }
    }
  },
})
