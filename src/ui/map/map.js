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
    longitude: 0,
    latitude: 0,
    scale: 16,
    minScale: 3,
    maxScale: 20,
    markers: [],
    covers: [],
    polyline: [],
    circles: [],
    controls: [],
    includePoints: [],
    showLocation: false,
    polygons: [],
    //
    subkey: '',
    layerStyle: 1,
    //
    rotate: 0,
    skew: 0,
    // 支付宝暂时不支持3D'
    enable3D: false,
    showCompass: false,
    showsScale: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    enableSatellite: false,
    enableTraffic: false,
    enablePoi: true,
    // 支付宝暂时不支持
    enableBuilding: true,
    setting: {}
  },
  deriveDataFromProps(props) {
    const mapCtx = my.createMapContext(props.onekitId)
    this.showCompass_(mapCtx, props.showCompass)
    this.showsScale_(mapCtx, props.showsScale)
    this.enableZoom_(mapCtx, props.enableZoom)
    this.enableScroll_(mapCtx, props.enableScroll)
    this.enableRotate_(mapCtx, props.enableRotate)
    this.enableSatellite_(mapCtx, props.enableSatellite)
    this.enableTraffic_(mapCtx, props.enableTraffic)
    this.enablePoi_(mapCtx, props.enablePoi)
    this.setting_(mapCtx, props.latitude, props.longitude)
  },
  onInit() {
    // console.log('onInit', this)
  },
  didMount() {
    const scale = Math.max(this.props.scale, this.props.minScale)
    let covers = this.props.covers
    let markers = this.props.markers
    if (covers.length !== 0) {
      markers = markers.concat(covers)
      covers = []
    }
    console.log(markers)
    this.setData({
      scale,
      covers,
      markers,
    })

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec((rect) => {
      this.setData({
        rect: rect[0]
      })
    })
  },
  didUpdate() {
    this._trigger_updated()
  },
  didUnmount() {},
  methods: {
    showCompass_(mapCtx, showCompass) {
      mapCtx.showsCompass({
        isShowCompass: showCompass ? 1 : 0
      })
    },
    showsScale_(mapCtx, showsScale) {
      mapCtx.showsScale({
        isShowsScale: showsScale ? 1 : 0
      })
    },
    enableZoom_(mapCtx, enableZoom) {
      mapCtx.gestureEnable({
        isGestureEnable: enableZoom ? 1 : 0
      })
      console.warn('支付宝小程序地图组件会禁用全部手势')
    },
    enableScroll_(mapCtx, enableScroll) {
      mapCtx.gestureEnable({
        isGestureEnable: enableScroll ? 1 : 0
      })
      console.warn('支付宝小程序地图组件会禁用全部手势')
    },
    enableRotate_(mapCtx, enableRotate) {
      mapCtx.gestureEnable({
        isGestureEnable: enableRotate ? 1 : 0
      })
      console.warn('支付宝小程序地图组件会禁用全部手势')
    },
    enableSatellite_(mapCtx, enableSatellite) {
      mapCtx.updateComponents({
        setting: {
          trafficEnabled: enableSatellite ? 1 : 0
        }
      })
    },
    enableTraffic_(mapCtx, enableTraffic) {
      mapCtx.updateComponents({
        setting: {
          trafficEnabled: enableTraffic ? 1 : 0
        }
      })
    },
    enablePoi_(mapCtx, enablePoi) {
      mapCtx.updateComponents({
        setting: {
          showMapText: enablePoi ? 1 : 0
        }
      })
    },
    setting_(mapCtx, latitude, longitude) {
      // const set = mapCtx.updateComponents.setting
      // console.log(mapCtx.updateComponents, set)
      // set.skew = 0
      // set.rotate = 0
      // set.showLocation = false
      // set.subKey = ''
      // set.layerStyle = 1
      // set.enable3D = true
      // set.replase(/tiltGesturesEnabled/g, 'enableOverlooking')
      // set.replase(/showMapText/g, 'enableSatellite')
      mapCtx.updateComponents({
        latitude,
        longitude,
        set: {
          skew: this.props.skew,
          rotate: this.props.rotate,
          showLocation: this.props.showLocation,
          showScale: this.props.showScale,
          // 做不了
          subKey: '',
          // 做不了 支付宝有问题
          layerStyle: 1,
          enableZoom: this.props.enableZoom,
          enableScroll: this.props.enableScroll,
          enableRotate: this.props.enableRotate,
          showCompass: this.props.showCompass,
          enable3D: this.props.enable3D,
          enableOverlooking: this.props.enableOverlooking,
          // 做不了
          enableSatellite: this.props.enableSatellite,
          enableTraffic: this.props.enableTraffic,
        }
      })
    },

    addGroundOverlay(object) {
      console.log('addGroundOverlay', object)
    },
    map_tap({
      detail
    }) {
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
    _trigger_labeltap({
      detail
    }) {
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

    map_MarkerTap({
      detail
    }) {
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
    map_ControlTap({
      detail
    }) {
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
    map_CalloutTap({
      detail
    }) {
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

    _trigger_updated() {
      this.mapCtx = my.createMapContext(this.props.onekitId)
      if (this.mapCtx.updateComponents) {
        if (this.props.onUpdated) {
          this.props.onUpdated()
        }
      }
    },

    map_RegionChange({
      detail
    }) {
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
    _trigger_poitap({
      detail
    }) {
      this.mapCtx = my.createMapContext(this.props.onekitId)
      const dataset = this._dataset()
      if (this.props.onPoiTap) {
        this.props.onPoiTap({
          detail,
          currentTarget: {
            dataset
          }
        })
      }
    },
    _trigger_anchorpointtap({
      detail
    }) {
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
