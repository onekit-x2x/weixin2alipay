/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {},
  methods: {
    ui_tap(e) {
      if (this.props.onTap) {
        this.props.onTap(e)
      }
    },
    ui_touchstart() {
      if (this.props.onTouchstart) {
        this.props.onTouchstart()
      }
    },
    ui_touchmove() {
      if (this.props.onTouchmove) {
        this.props.onTouchmove()
      }
    },
    ui_touchcancel() {
      if (this.props.onTouchcancel) {
        this.props.onTouchcancel()
      }
    },
    ui_touchend() {
      if (this.props.onTouchend) {
        this.props.onTouchend()
      }
    },
    ui_longpress() {
      if (this.props.onLongpress) {
        this.props.onLongpress()
      }
    },
    ui_longtap() {
      if (this.props.onLongtap) {
        this.props.onLongtap()
      }
    },
    ui_transitionend() {
      if (this.props.onTransitionend) {
        this.props.onTransitionend()
      }
    },
    ui_animationstart() {
      if (this.props.onAnimationstart) {
        this.props.onAnimationstart()
      }
    },
    ui_animationiteration() {
      if (this.props.onAnimationiteration) {
        this.props.onAnimationiteration()
      }
    },
    ui_animationend() {
      if (this.props.onAnimationend) {
        this.props.onAnimationend()
      }
    },
    ui_touchforcechange() {
      if (this.props.onTouchforcechange) {
        this.props.onTouchforcechange()
      }
    },
  },
}
