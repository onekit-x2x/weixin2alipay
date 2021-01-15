/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    direction: 'none',
    inertia: false,
    outOfBounds: false,
    x: 0,
    y: 0,
    damping: 20,
    friction: 2,
    disabled: false,
    scale: false,
    scaleMin: 0.5,
    scaleMax: 10,
    scaleValue: 1,
    animation: true
  },
  methods: {
    movable_change(detail) {
      if (this.props.onChange) {
        this.props.onChange(detail)
      }
    },
    movable_scale(detail) {
      if (this.props.onScale) {
        this.props.onScale(detail)
      }
    },
    movable_move(detail) {
      const dx = this.props.x
      const dy = this.props.y
      if (dy < 2 && dx > dy) {
        this._trigger_htouchmove(detail)
      } else if (dx < 2 && dy > dx) {
        this._trigger_vtouchmove(detail)
      } else {
        this._trigger_htouchmove(detail)
        this._trigger_vtouchmove(detail)
      }
      if (this.props.onTouchmove) {
        this.props.onTouchmove(detail)
      }
    },

    _trigger_htouchmove(detail) {
      if (this.props.onHtouchmove) {
        this.props.onHtouchmove(detail)
      } else if (this.props.catchHtouchmove) {
        this.props.catchHtouchmove(detail)
      }
    },
    _trigger_vtouchmove(detail) {
      if (this.props.onVtouchmove) {
        this.props.onVtouchmove(detail)
      } else if (this.props.catchVtouchmove) {
        this.props.catchVtouchmove(detail)
      }
    }
  },
})
