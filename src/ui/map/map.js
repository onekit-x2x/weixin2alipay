/* eslint-disable no-console */
/* eslint-disable camelcase */
import weixin_behavior from '../../behavior/weixin_behavior'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [weixin_behavior, onekit_behavior, wxs_behavior],
  data: {
    groundOverlays: [],
    'include-padding': {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    'ground-overlays': [{
      'include-points': [{
        latitude: null,
        longitude: null,
      }, {
        latitude: null,
        longitude: null,
      }],
      image: '',
      alpha: 1,
      zIndex: null
    }]
  },
  props: {
    longitude(longitude) {
      this.setData({
        longitude
      })
    },
    latitude(latitude) {
      this.setData({
        latitude
      })
    },
    scale: 16,
    minScale: 3,
    maxScale: 20,
    markers(markers) {
      this.setData({
        markers
      })
    },
    covers(covers) {
      this.setData({
        markers: covers
      })
    },
    polyline(polyline) {
      this.setData({
        polyline
      })
    },
    circles(circles) {
      this.setData({
        circles
      })
    },
    controls(controls) {
      this.setData({
        controls
      })
    },
    'include-points': function (includePoints) {
      this.setData({
        'include-points': includePoints
      })
    },
    'show-location': function (showLocation) {
      this.setData({
        'show-location': showLocation
      })
    },
    polygons(polygon) {
      this.setData({
        polygon
      })
    },

    //
    subkey(subkey) {
      this.setData({
        subkey
      })
    },
    layerStyle(layerStyle) {
      this.setData({
        layerStyle
      })
    },
    //

    rotate(rotate) {
      this.setData({
        rotate
      })
    },
    skew(skew) {
      this.setData({
        skew
      })
    },

    // 支付宝暂时不支持3D'
    'enable-3D': function () {
      console.log('[onekit]enable-3D')
      my.showToast({
        content: '支付宝暂时不支持3D',
      })
    },
    'show-compass': function (showCompass) {
      this.mapCtx.showsCompass({
        isShowCompass: showCompass
      })
    },
    'show-scale': function (showsScale) {
      this.mapCtx.showsScale({
        isShowsScale: showsScale
      })
    },
    'enable-overlooking': function (enableOverlooking) {
      this.mapCtx.gestureEnable({
        isGestureEnable: enableOverlooking
      })
    },
    'enable-zoom': function (enableZoom) {
      this.mapCtx.showsScale({
        isShowsScale: enableZoom
      })
    },
    'enable-scroll': function (enableScroll) {
      this.mapCtx.gestureEnable({
        isGestureEnable: enableScroll
      })
    },
    'enable-rotate': function (enableRotate) {
      this.mapCtx.gestureEnable({
        isGestureEnable: enableRotate
      })
    },
    'enable-satellite': function (trafficEnabled) {
      this.mapCtx.updateComponents({
        setting: {
          trafficEnabled
        }
      })
    },
    'enable-traffic': function (trafficEnabled) {
      this.mapCtx.updateComponents({
        setting: {
          trafficEnabled
        }
      })
    },
    'enableP-poi': function (enablePPoi) {
      this.mapCtx.updateComponents({
        setting: {
          showMapText: enablePPoi
        }
      })
    },
    'enable-building': function () {
      console.log('[onekit]enable-building')
      my.showToast({
        content: '支付宝暂时不支持展示建筑物',
      })
    },
    setting() {
      const set = this.mapCtx.updateComponents.setting
      set.skew = 0
      set.rotate = 0
      set.showLocation = false
      set.subKey = ''
      set.layerStyle = 1
      set.enable3D = true
      set.replase(/tiltGesturesEnabled/g, 'enableOverlooking')
      set.replase(/showMapText/g, 'enableSatellite')
      this.mapCtx.updateComponents({
        set
      })
    }
  },
  onInit() {
    console.log('onInit', this)
  },
  didMount() {
    const that = this
    const scale = Math.max(that.props.scale, that.props.minScale)
    that.setData({
      scale
    })

    this.mapCtx = my.createMapContext(this.props.onekitId)

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec((rect) => {
      that.setData({
        rect: rect[0]
      })
    })
  },
  didUpdate() {
    this._trigger_updated()
  },
  didUnmount() {},
  methods: {
    addGroundOverlay(object) {
      console.log('addGroundOverlay', object)
    },

    map_tap({detail}) {
      const dataset = this._dataset()
      if (this.props.onTap) {
        this.props.onTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },

    // 做不了
    _trigger_labeltap({detail}) {
      const dataset = this._dataset()
      if (this.props.onLabelTap) {
        this.props.onLabelTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    //

    map_MarkerTap({detail}) {
      const dataset = this._dataset()
      if (this.props.onMarkerTap) {
        this.props.onMarkerTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    map_ControlTap({detail}) {
      const dataset = this._dataset()
      if (this.props.onControltap) {
        this.props.onControltap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    map_CalloutTap({detail}) {
      const dataset = this._dataset()
      if (this.props.onCalloutTap) {
        this.props.onCalloutTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },

    _trigger_updated(e) {
      this.mapCtx = my.createMapContext(this.props.onekitId)
      if (this.mapCtx.updateComponents) {
        if (this.props.onUpdated) {
          this.props.onUpdated(e)
        }
      }
    },

    map_RegionChange({detail}) {
      const dataset = this._dataset()
      if (this.props.onRegionChange) {
        this.props.onRegionChange({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },

    //
    _trigger_poitap(e) {
      this.mapCtx = my.createMapContext(this.props.onekitId)
      if (this.props.onPoiTap) {
        this.props.onPoiTap(e)
      }
    },
    _trigger_anchorpointtap({detail}) {
      const dataset = this._dataset()
      if (this.props.onAnchorPointTap) {
        this.props.onAnchorPointTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    }
  },
})
