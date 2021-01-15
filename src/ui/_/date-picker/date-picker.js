import {DATE} from 'oneutil'

const YEAR_START = 1900
const YEAR_END = 2100
Component({
  props: {
    headerText: '',
    disabled: false,
    range: [],
    value: new Date().toDateString(),
    start: '',
    end: '',
  },
  didMount() {
    const years = []
    for (let y = YEAR_START; y <= YEAR_END; y++) {
      const year = y
      years.push(`${year}年`)
    }
    const months = []
    for (let m = 1; m <= 12; m++) {
      const month = m >= 10 ? m : ('0' + m)
      months.push(`${month}月`)
    }
    this.setData({
      years,
      months
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    updateDays() {
      const value = (this.data.value || this.props.value).split('-')
      const days = []
      const dayCount = DATE.monthDays(value[0], value[1])
      for (let d = 1; d <= dayCount; d++) {
        const day = d >= 10 ? d : ('0' + d)
        days.push(`${day}日`)
      }
      this.setData({
        days
      })
    },
    date_show() {
      if (this.props.disabled) {
        return
      }
      let date = this.props.value.split('-')
      date = [date[0] - YEAR_START, date[1] - 1, date[2] - 1]
      this.setData({
        date,
        show: true
      })
      this.updateDays()
    },
    date_cancle() {
      this.setData({
        show: false
      })
      if (this.props.onCancle) {
        this.props.onCancle()
      }
    },
    date_confirm() {
      this.setData({
        show: false
      })
      if (this.props.onChange) {
        this.props.onChange({
          detail: {
            value: this.data.value
          }
        })
      }
    },
    date_change(e) {
      const current = e.detail.value
      const y = current[0] + YEAR_START
      let m = current[1] + 1
      m = m >= 10 ? m : ('0' + m)
      let d = current[2] + 1
      d = d >= 10 ? d : ('0' + d)
      const value = `${y}-${m}-${d}`
      if (this.props.start) {
        if (value < this.props.start) {
          let date = this.props.start.split('-')
          date = [date[0] - YEAR_START, date[1] - 1, date[2] - 1]
          this.setData({
            value: this.props.start,
            date
          })
          return
        }
      }
      if (this.props.end) {
        if (value > this.props.end) {
          let date = this.props.end.split('-')
          date = [date[0] - YEAR_START, date[1] - 1, date[2] - 1]
          this.setData({
            value: this.props.end,
            date
          })
          return
        }
      }
      this.data.value = value
      this.updateDays()
    }
  },
})
