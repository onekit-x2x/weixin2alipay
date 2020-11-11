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
  didMount() { },
  didUpdate() {
    const data = {}
    for (const p of Object.keys(this.props)) {
      data[p] = this.props[p]
    }
    this.setData(data)
  },
  didUnmount() { },
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
        console.log('x方向', dx, dy)
        // this.trigger_htouchmove({e, dx, dy})
        this.trigger_htouchmove(e)
      } else if (dx < 2 && dy > dx) {
        console.log('y方向', dx, dy)
        // this.trigger_vtouchmove({e, dx, dy})
        this.trigger_vtouchmove(e)
      } else {
        console.log('666666', dx, dy)
        // this.trigger_htouchmove({e, dx, dy})
        this.trigger_htouchmove(e)
        // this.trigger_vtouchmove({e, dx, dy})
        this.trigger_vtouchmove(e)
      }
      if (this.props.onTouchmove) {
        this.props.onTouchmove(e)
      }
    },

    trigger_htouchmove(e) {
      console.log('xxxxxx')
      if (this.props.onHtouchmove) {
        this.props.onHtouchmove(e)
      } else if (this.props.catchHtouchmove) {
        this.props.catchHtouchmove(e)
      }
    },
    trigger_vtouchmove(e) {
      console.log('yyyyyy')
      if (this.props.onVtouchmove) {
        this.props.onVtouchmove(e)
      } else if (this.props.catchVtouchmove) {
        this.props.catchVtouchmove(e)
      }
    }
  },
})
