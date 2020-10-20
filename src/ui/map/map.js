/* eslint-disable no-console */
/* eslint-disable camelcase */
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [wxs_behavior],
  data: {},
  props: {
    onekitId: 'onekit-map',
    onekitClass: '',
    onekitStyle: '',
    longitude(longitude) {
      this.setData({longitude})
    },
    latitude(latitude) {
      this.setData({latitude})
    },
    scale(scale) {
      this.setData({scale})
    },
    markers(markers) {
      this.setData({markers})
    },
    covers(covers) {
      this.setData({markers: covers})
    },
    polyline(polyline) {
      this.setData({polyline})
    },
    polygons(polygon) {
      this.setData({polygon})
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
    subkey(subkey) {
      this.setData({subkey})
    },
    'enable-3D': function () {
      console.log('[onekit]enable-3D')
    },
    'show-compass': function (showCompass) {
      this.mapCtx.showsCompass({isShowCompass: showCompass})
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
    }
  },
  didMount() {
    const that = this
    this.mapCtx = my.createMapContext(this.props.onekitId)

    my.createSelectorQuery().select('.onekit-map').boundingClientRect().exec((rect) => {
      that.setData({rect: rect[0]})
    })
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    onMarkertap() {

    },
    onCallouttap() {

    },
    onControltap() {

    },
    onRegionchange() {

    },
    onTap() {

    },
    onUpdated() {

    },
    onPoitap() {

    }
  },
})
