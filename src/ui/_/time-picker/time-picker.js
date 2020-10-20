Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle: "",
    onekitClass: "",
    onekitId: "",
    headerText: "",
    disabled: false,
    range: [],
    value: "00:00",
    start: "",
    end: "",
  },
  didMount() {
        const hours = [];
        for (var h = 0; h < 24; h++) {
          const hour = h >= 10 ? h : ("0" + h);
          hours.push(hour);
        }
        const minutes = [];
        for (var m = 0; m < 60; m++) {
          const minute = m >= 10 ? m : ("0" + m);
          minutes.push(minute);
        }
        this.setData({ hours, minutes });
    }
  ,
  didUpdate() {},
  didUnmount() {},
  methods: {
     time_show() {
      if (this.props.disabled) {
        return;
      }
      var time = this.props.value.split(":");
      time = [parseInt(time[0]), parseInt(time[1])];
      this.setData({ time,show: true })
    },
    time_cancle() {
      this.setData({ show: false })
      if (this.props.onCancle) {
        this.props.onCancle();
      }
    },
    time_confirm() {
      this.setData({ show: false })
      if (this.props.onChange) {
        this.props.onChange({ detail: { value: this.data.value } });
      }
    },
    time_change(e) {
      const current = e.detail.value;
      var h = current[0]; h = h >= 10 ? h : ("0" + h);
      var m = current[1]; m = m >= 10 ? m : ("0" + m);
      var value = `${h}:${m}`;
      if (this.props.start) {
        if (value < this.props.start) {
          var time = this.props.start.split(":");
          time = [parseInt(time[0]), parseInt(time[1])];
          this.setData({ value: this.props.start, time });
          return;
        }
      }
      if (this.props.end) {
        if (value > this.props.end) {
          var time = this.props.end.split(":");
          time = [parseInt(time[0]), parseInt(time[1])];
          this.setData({ value: this.props.end, time });
          return;
        }
      }
      this.data.value = value;
    }
  },
});
