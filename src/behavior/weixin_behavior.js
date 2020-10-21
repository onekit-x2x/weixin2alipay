/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  props: {
  },
  methods: {
    ui_tap() {
      if (this.props.ontap) {
        this.props.ontap()
      }
    },
    ui_touchstart() {
      if (this.props.ontouchstart) {
        this.props.ontouchstart()
      }
    },
    ui_touchmove() {
      if (this.props.ontouchmove) {
        this.props.ontouchmove()
      }
    },
    ui_touchcancel() {
      if (this.props.ontouchcancel) {
        this.props.ontouchcancel()
      }
    },
    ui_touchend() {
      if (this.props.ontouchend) {
        this.props.ontouchend()
      }
    },
    ui_longpress() {
      if (this.props.onlongpress) {
        this.props.onlongpress()
      }
    },
    ui_longtap() {
      if (this.props.onlongtap) {
        this.props.onlongtap()
      }
    },
    ui_transitionend() {
      if (this.props.ontransitionend) {
        this.props.ontransitionend()
      }
    },
    ui_animationstart() {
      if (this.props.onanimationstart) {
        this.props.onanimationstart()
      }
    },
    ui_animationiteration() {
      if (this.props.onanimationiteration) {
        this.props.onanimationiteration()
      }
    },
    ui_animationend() {
      if (this.props.onanimationend) {
        this.props.onanimationend()
      }
    },
    ui_touchforcechange() {
      if (this.props.ontouchforcechange) {
        this.props.ontouchforcechange()
      }
    },
  },
}
