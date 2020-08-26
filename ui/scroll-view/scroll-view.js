var touch, moved, startY, diff,
  pagePull = true;
var refresher;
Component({
  mixins: [],
  data: {
    refresher_height: 0
  },
  props: {
    onekitStyle:"",
    onekitClass:"",
    onekitId:"", 
    scrollX: false,
    scrollY: false,
    UpperThreshold: 50,
    LowerThreshold: 50,
    ScrollIntoView: "",
    scrollTop: "",
    scrollLeft: "",
    ScrollWithAnimation: false,
    EnableBackToTop: false,
    refresherEnabled: false,
    refresherThreshold: 45,
    refresherDefaultStyle: "black",
    refresherBackground: "#fff"
  },
  didMount() { },
  didUpdate() { },
  didUnmount() { },
  onupper(e) {

  },

  methods: {
    css(ele, t) {
      //var transition = "all " + t + "ms";
      //this.setData({transition});
    },
    on_Touchstart(e) {
      if (!this.props.refresherEnabled) {
        return;
      }
      /*  if (scrollView.scrollTop > 0) {
       //当页面已经有滚动或者不是置顶的时候，不需要进行下拉刷新，是页面正常的滑动
       touch = false;
       return;
     }*/
      touch = true; //触摸开始
      moved = false; //还没有进行下拉刷新的滑动
      startY = e.touches[0].clientY;

    },
    on_Touchmove(e) {
      // console.log('on_Touchmove:', e);
      if (!this.props.refresherEnabled) {
        return;
      }
      if (!touch || !pagePull) {
        return;
      }
      var touchesDiff = e.touches[0].clientY - startY; //计算的移动位移
      if (touchesDiff < 0) {
        //说明页面是向上滑的，不做任何操作
        moved = false;
        return;
      }
      moved = true;
      diff = touchesDiff;
      var distance = 0;
      if (diff <= this.props.refresherThreshold) {
        //moveDiff至少要等于loading的高度
        //当滑动小于规定的临界值时
        distance = diff;
        this.setData({text:'zzzzzzz'})
      } else {
        //  '释放可刷新';
        //弹性
        if (touchesDiff <= (2 * this.props.refresherThreshold)) {
          distance = this.props.refresherThreshold + 0.5 * (touchesDiff - this.props.refresherThreshold);
        } else {
          distance = this.props.refresherThreshold + 0.1 * (touchesDiff - this.props.refresherThreshold) + 0.05 * (touchesDiff - 2 * this.props.refresherThreshold);
        }
      }
      if (distance > 0) {
        if (this.props.onRefresherpulling) {
          this.props.onRefresherpulling(e);
        }
        //  e.preventDefault();
        //滑动的距离
        this.css(refresher, 0);
        this.setData({ refresher_height: distance });
      }
    },
    on_Touchend(e) {
      if (!this.props.refresherEnabled) {
        return;
      }
      if (!touch || !moved) {
        this.setData({ refresher_height: 0 });
        return;
      }
      this.css(refresher, 300);
      pagePull = false;
      if (diff > this.props.refresherThreshold) {
        //  '刷新中';

        this.setData({ refresher_height: this.props.refresherThreshold });
        setTimeout(() => {

          this.css(refresher, 300);
          this.setData({ refresher_height: 0 });
          setTimeout(() => {
            pagePull = true; //控制在刷新期间，重复向下拉动，不做任何操作   
          }, 300);
        }, 500);
      } else {
        pagePull = true;
        this.setData({ refresher_height: 0 });
      }
    },
    on_Touchcancel(e) {
      console.log('on_Touchcancel:', e);
      this.props.onRefresherabort({})
    },
    ////////////////////////////
    on_toupper(e) {
      if (this.props.onScrolltoupper) {
        this.props.onScrolltoupper(e)
      }
    },
    on_tolower(e) {
      if (this.props.onScrollToLower) {
        this.props.onScrollToLower(e)
      }
    },
    on_scroll(e) {
      if (this.props.onScroll) {
        this.props.onScroll(e)
      }
    }
  },
});
