/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable camelcase */
import weixin_behavior from '../../behavior/weixin_behavior'
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'

let refresher
Component({
  mixins: [weixin_behavior, onekit_behavior, wxs_behavior],
  data: {
    refresher_height: 0,
    pagePulling: false
  },
  props: {
    scrollX: false,
    scrollY: false,
    UpperThreshold: 50,
    LowerThreshold: 50,
    ScrollTop: 0,
    ScrollLeft: 0,
    ScrollIntoView: '',
    ScrollWithAnimation: false,
    EnableBackToTop: false,

    EnableFlex: false,
    ScrollAnchoring: false,

    refresherEnabled: false,
    refresherThreshold: 45,
    refresherDefaultStyle: 'black',
    refresherBackground: '#fff',
    refresherTriggered: false,

    Enhanced: false,
    Bounces: true,
    ShowScrollbar: true,
    PagingEnabled: false,
    FastDeceleration: false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  onupper() {

  },
  deriveDataFromProps(nextProps) {
    console.log(1, nextProps)
    // if (nextProps.refresherTriggered) {
    //   if (!this.data.pagePulling) {
    //     console.log('xxxxxxxxxxxxx')
    //     this.data.pagePulling = true
    //     this.startPull()
    //   }
    // } else {
    //   if (this.data.pagePulling) {
    //     console.log('yyyyyyyyyyyyy')
    //     this.stopPull()
    //   }
    // }
  },

  methods: {
    css() {
      // var transition = "all " + t + "ms";
      // this.setData({transition});
    },
    catch_Touchstart(e) {
      if (!this.props.refresherEnabled) {
        return
      }
      /*  if (scrollView.scrollTop > 0) {
       //当页面已经有滚动或者不是置顶的时候，不需要进行下拉刷新，是页面正常的滑动
       this.data.touch = false;
       return;
     } */
      this.data.touch = true // 触摸开始
      this.data.moved = false // 还没有进行下拉刷新的滑动
      this.data.startY = e.touches[0].clientY
    },
    catch_Touchmove(e) {
      // console.log('on_Touchmove:', e);
      if (!this.props.refresherEnabled) {
        return
      }
      if (!this.data.touch || this.data.pagePulling) {
        return
      }
      const touchesDiff = e.touches[0].clientY - this.data.startY // 计算的移动位移
      if (touchesDiff < 0) {
        // 说明页面是向上滑的，不做任何操作
        this.data.moved = false
        return
      }
      this.data.moved = true
      this.data.diff = touchesDiff
      let distance = 0
      if (this.data.diff <= this.props.refresherThreshold) {
        // moveDiff至少要等于loading的高度
        // 当滑动小于规定的临界值时
        distance = this.data.diff
        this.setData({
          text: 'zzzzzzz'
        })

        //
        console.log('下拉可刷新')
      } else {
        //
        console.log('释放可刷新')
        //  '释放可刷新';
        // 弹性
        if (touchesDiff <= (2 * this.props.refresherThreshold)) {
          distance = this.props.refresherThreshold + 0.5 * (touchesDiff - this.props.refresherThreshold)
        } else {
          distance = this.props.refresherThreshold + 0.1 * (touchesDiff - this.props.refresherThreshold) + 0.05 * (touchesDiff - 2 * this.props.refresherThreshold)
        }
      }
      if (distance > 0) {
        if (this.props.onRefresherpulling) {
          e.detail = {
            dy: distance
          }
          this.props.onRefresherpulling()
        }
        //  e.preventDefault();
        // 滑动的距离
        this.css(refresher, 0)
        this.setData({
          refresher_height: distance
        })
      }
    },
    catch_Touchend() {
      if (!this.props.refresherEnabled) {
        return
      }
      if (!this.data.touch || !this.data.moved) {
        this.setData({
          refresher_height: 0
        })
        return
      }

      console.log('startPull')
      this.css(refresher, 300)
      this.data.pagePulling = true
      if (this.data.diff > this.props.refresherThreshold) {
        //  '刷新中';
        this.startPull()
      } else {
        console.log('bbbbbbbbbbbbb')
        this.data.pagePulling = false
        this.setData({
          refresher_height: 0
        })
      }
    },
    stopPull() {
      console.log('stopPull')
      this.css(refresher, 300)
      this.setData({
        refresher_height: 0
      })
      setTimeout(() => {
        this.data.pagePulling = false // 控制在刷新期间，重复向下拉动，不做任何操作
      }, 300)
    },
    startPull() {
      console.log('aaaaaaaaaaaa')
      this.setData({
        refresher_height: this.props.refresherThreshold
      })
    },
    catch_Touchcancel(e) {
      console.log('on_Touchcancel:', e)
      this.props.onRefresherabort({})
    },
    // //////////////////////////
    on_toupper() {
      if (this.props.onScrolltoupper) {
        this.props.onScrolltoupper()
      }
    },
    on_tolower() {
      if (this.props.onScrollToLower) {
        this.props.onScrollToLower()
      }
    },
    catch_scroll() {
      if (this.props.onScroll) {
        this.props.onScroll()
      }
    }
  },
})
