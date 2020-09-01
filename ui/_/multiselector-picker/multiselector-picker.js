Component({
  data:{
    value:[]
  },
  props:{
    onekitStyle: "",
    onekitClass: "",
    onekitId: "",
    headerText: "",
    range:[],
    "range-key":"",
    value:[],
    disabled:false
  },
  methods: {
    selector_show() {
      if (this.props.disabled) {
        return;
      }
      const select = [];
      for(const v of this.props.value){
          select.push([v]);
      }
      this.setData({ select,show: true })
    },
    selector_cancle() {
      this.setData({ show: false })
      if (this.props.onCancle) {
        this.props.onCancle();
      }
    },
    selector_confirm() {
      this.setData({ show: false })
      if (this.props.onChange) {
        this.props.onChange({ detail: { value: this.data.value } });
      }
    },
    selector_change(e) {
      const value = e.detail.value[0];
      const column = e.currentTarget.dataset.index;
      this.data.value[column] = value;
      if (this.props.onColumnchange) {
        this.props.onColumnchange({ detail: { column,value } });
      }
    }
  },
});
