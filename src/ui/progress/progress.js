/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    percent: null,
    showInfo: false,
    borderRadius: 0,
    fontSize: 16,
    strokeWidth: 6,
    color: '',
    activeColor: '',
    backgroundColor: '#EBEBEB',
    active: false,
    activeMode: '',
    duration: 30
  },
  didMount() {
    let activeColor
    let activeMode
    let duration
    const curPercent = this.props.percent
    const timestamp = this.props.duration * this.props.percent
    if (this.props.color) {
      activeColor = this.props.color
    } else if (this.props.activeColor) {
      activeColor = this.props.activeColor
    } else {
      activeColor = '09BB07'
    }
    //
    if (this.props.activeMode) {
      activeMode = this.props.activeMode
    } else {
      activeMode = 'backwards'
    }
    //
    if (this.props.duration !== 30 && this.props.duration !== 0) {
      duration = this.props.duration
      my.createAnimation({
        duration: 100 * duration,
        delay: 100 * duration,
      })
    }
    this.setData({
      activeColor,
      activeMode,
      duration,
      borderRadius: this.data.borderRadius,
      fontSize: this.data.fontSize,
    })
    //
    my.createSelectorQuery().selectAll('.onekit-progress').boundingClientRect().exec(res => {
      my.createSelectorQuery().select('.onekit-progress').boundingClientRect().exec(ret => {
        if (this.props.active) {
          res[0].forEach(item => {
            if (item.top !== 10) {
              item.top += 3
            }
            ret[0] = item
          })
          //
          const detail = {
            curPercent: parseInt(curPercent, 10)
          }
          setTimeout(() => {
            this._trigger_activeend(detail)
          }, timestamp)
        }
      })
    })
  },
  methods: {
    _trigger_activeend(detail, dataset) {
      if (this.props.onActiveend) {
        this.props.onActiveend(this._e(detail, dataset))
      }
    }
  },
})
