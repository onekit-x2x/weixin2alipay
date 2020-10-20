/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior],
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
    movable_Change(e) {
      if (this.props.onchange) {
        this.props.onchange(e)
      }
    },
    movable_scale(e) {
      if (this.props.onscale) {
        this.props.onscale(e)
      }
    }
  },
})
