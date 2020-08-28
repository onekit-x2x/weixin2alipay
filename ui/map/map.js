Component({
  mixins: [],
  data: {},
  props: {
      onekitId:"onekit-map",
            onekitClass:"",
        onekitStyle:"",
    longitude: function(longitude) {
this.setData({longitude:longitude});
    },
    latitude: function(latitude) {
this.setData({latitude:latitude});
    },
    scale: function(scale) {
this.setData({scale:scale});
    },
    markers: function(markers) {
this.setData({markers:markers});
    },
    covers: function(covers) {
this.setData({markers:covers});
    },
    polyline: function(polyline) {
this.setData({polyline:polyline});
    },
    polygons: function(polygons) {
this.setData({polygon:polygon});
    },
    circles: function(circles) {
this.setData({circles:circles});
    },
    controls: function(controls) {
this.setData({controls:controls});
    },
    "include-points": function(includePoints) {
this.setData({"include-points":includePoints});
    },
    "show-location": function(showLocation) {
this.setData({"show-location":showLocation});
    },
    subkey: function(subkey) {
this.setData({"subkey":subkey});
    },
    "enable-3D": function(enable3D) {
console.log("[onekit]enable-3D");
    },
    "show-compass": function(showCompass) {
this.mapCtx.showsCompass({isShowCompass:showCompass});
    },
    "enable-overlooking": function(enableOverlooking) {
this.mapCtx.gestureEnable({isGestureEnable:enableOverlooking});
    },
    "enable-zoom": function(enableZoom) {
this.mapCtx.showsScale({isShowsScale:enableZoom});
    },
    "enable-scroll": function(enableScroll) {
console.log("[onekit]enable-scroll");
    },
    "enable-rotate": function(enableRotate) {
this.mapCtx.gestureEnable({isGestureEnable:enableRotate});
    }
  },
  didMount() {
    const that = this;
    this.mapCtx = my.createMapContext(this.props.onekitId);

    my.createSelectorQuery().select(`.onekit-map`).boundingClientRect().exec((rect) => {
        that.setData({rect:rect[0]});
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
});
