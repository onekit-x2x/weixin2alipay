import DATE from "../../../js/DATE" 
const YEAR_START = 1900;
const YEAR_END = 2100;
Component({
  props: {
    onekitStyle: "",
    onekitClass: "",
    onekitId: "",
    headerText: "",
    disabled: false,
    range: [],
    value: new Date().toDateString(),
    start: "",
    end: "",
  },
  didMount() {
        const years = [];
        for (var y = YEAR_START; y <= YEAR_END; y++) {
          const year = y;
          years.push(`${year}年`);
        }
        const months = [];
        for (var m = 1; m <= 12; m++) {
          const month = m >= 10 ? m : ("0" + m);
          months.push(`${month}月`);
        }
        this.setData({ years, months });
 
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    updateDays(){
        const value = (this.data.value || this.props.value).split("-");
        const days = [];
      const dayCount = DATE.monthDays(value[0],value[1]);
        for (var d = 1; d <= dayCount; d++) {
           const day = d >= 10 ? d : ("0" + d);
          days.push(`${day}日`);
        }
          this.setData({ days })
    },
    date_show() {
      if (this.props.disabled) {
        return;
      }
      var date = this.props.value.split("-");
      date = [date[0]-YEAR_START,date[1]-1,date[2]-1];
      this.setData({ date,show: true })   
     this.updateDays();
    },
    date_cancle() {
      this.setData({ show: false })
      if (this.props.onCancle) {
        this.props.onCancle();
      }
    },
    date_confirm() {
      this.setData({ show: false })
      if (this.props.onChange) {
        this.props.onChange({ detail: { value: this.data.value } });
      }
    },
    date_change(e) {
      const current = e.detail.value;
      var y = current[0]+YEAR_START;
      var m = current[1]+1; m = m >= 10 ? m : ("0" + m);
      var d = current[2]+1; d = d >= 10 ? d : ("0" + d);
      var value = `${y}-${m}-${d}`;
      if (this.props.start) {
        if (value < this.props.start) {
          var date = this.props.start.split("-");
          date = [date[0]-YEAR_START,date[1]-1,date[2]-1];
          this.setData({ value: this.props.start, date });
          return;
        }
      }
      if (this.props.end) {
        if (value > this.props.end) {
          var date = this.props.end.split("-");
          date = [date[0]-YEAR_START,date[1]-1,date[2]-1];
          this.setData({ value: this.props.end, date });
          return;
        }
      }
      this.data.value = value;
      this.updateDays();
    }
  },
});
