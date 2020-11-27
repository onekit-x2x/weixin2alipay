/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    title: null,
    loading: false,
    frontColor: null, // 支付宝自动改变黑白颜色
    backgroundColor: null,
    colorAnimationduration: null,
    colorAnimationTimingFunc: null,
    // 'color-animation-duration': function (colorAnimationduration) {
    //   this.animation({colorAnimationduration})
    // },
    // 'color-animation-timing-func': function (colorAnimationTimingFunc) {
    //   this.animation({colorAnimationTimingFunc})
    // },
  },
  didMount() {
    const title = this.props.title
    const loading = this.props.loading
    const backgroundColor = this.props.backgroundColor
    const colorAnimationduration = this.props.colorAnimationduration
    const colorAnimationTimingFunc = this.props.colorAnimationTimingFunc

    if (title && backgroundColor) {
      my.setNavigationBar({
        title,
        backgroundColor
      })
    }
    if (!loading) {
      my.hideNavigationBarLoading()
    } else {
      my.showNavigationBarLoading()
    }

    // this.animation = my.createAnimation()
    if (colorAnimationduration && colorAnimationTimingFunc) {
      my.createAnimation({
        duration: colorAnimationduration,
        timeFunction: colorAnimationTimingFunc,
      })
    }
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
})
