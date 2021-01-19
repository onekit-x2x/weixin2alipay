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
  // deriveDataFromProps(props) {
  //   this.setData({
  //     x: 0,
  //     y: 0
  //   })
  //   // setTimeout(() => {
  //   //   this.setData(props)
  //   // }, 1000)
  //   this.setData(props)
  // },
  methods: {
    movable_change(e) {
      if (this.props.onChange) {
        this.props.onChange(e)
      }
    },
    movable_scale(e) {
      if (this.props.onScale) {
        this.props.onScale(e)
      }
    },
    movable_move(e) {
      const dx = this.props.x
      const dy = this.props.y
      if (dy < 2 && dx > dy) {
        this._trigger_htouchmove(e)
      } else if (dx < 2 && dy > dx) {
        this._trigger_vtouchmove(e)
      } else {
        this._trigger_htouchmove(e)
        this._trigger_vtouchmove(e)
      }
      if (this.props.onTouchmove) {
        this.props.onTouchmove(e)
      }
    },

    _trigger_htouchmove(e) {
      if (this.props.onHtouchmove) {
        this.props.onHtouchmove(e)
      } else if (this.props.catchHtouchmove) {
        this.props.catchHtouchmove(e)
      }
    },
    _trigger_vtouchmove(e) {
      if (this.props.onVtouchmove) {
        this.props.onVtouchmove(e)
      } else if (this.props.catchVtouchmove) {
        this.props.catchVtouchmove(e)
      }
    }
  },
})
