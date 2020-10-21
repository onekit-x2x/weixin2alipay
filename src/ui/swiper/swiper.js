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
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {

    swiper_Change() {
      if (this.props.onChange) {
        this.props.onChange()
      }
    },
    swiper_Transition() {
      if (this.props.onTransition) {
        this.props.onTransition()
      }
    },
    swiper_AnimationEnd() {
      if (this.props.onAnimationEnd) {
        this.props.onAnimationfinish()
      }
    }
  },
})
