/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    indicatorDots: false,
    indicatorColor: 'rgba(0, 0, 0, .3)',
    indicatorActiveColor: '#000000',
    autoplay: false,
    current: 0,
    interval: 5000,
    duration: 500,
    circular: false,
    vertical: false,
    previousMargin: '0px',
    nextMargin: '0px',
    //
    snapToEdge: false,
    displayMultipleItems: 1,
    easingFunction: ''
  },
  didMount() {
    if (this.props.easingFunction) {
      switch (this.props.easingFunction) {
        case 'default':
          this.setData({easingFunction: 'ease'})
          break
        case 'linear':
          this.setData({easingFunction: 'linear'})
          break
        case 'easeInCubic':
          this.setData({easingFunction: 'ease-in'})
          break
        case 'easeOutCubic':
          this.setData({easingFunction: 'ease-out'})
          break
        case 'easeInOutCubic':
          this.setData({easingFunction: 'ease-in-out'})
          break
        default:
          break
      }
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    swiper_change() {
      if (this.props.onChange) {
        this.props.onChange()
      }
    },
    swiper_transition() {
      if (this.props.onTransition) {
        this.props.onTransition()
      }
    },
    swiper_animationfinish() {
      if (this.props.onAnimationEnd) {
        this.props.onAnimationfinish()
      }
    }
  },
})
