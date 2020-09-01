import provinces from "./data/provices.json.js"
import allCitys from "./data/citys.json.js"
import allTowns from "./data/towns.json.js"
Component({
  props: {
    onekitStyle: "",
    onekitClass: "",
    onekitId: "",
    headerText: "",
    disabled: false,
    value: ['北京市', '北京市', '东城区'],
    "custom-item": ""
  },
  data: {
    provinces,
    ragion:{value:[],code:[],postcode:null}
  },
  didMount(){
    const value = this.props.value;
    this.data.ragion.value = value;
    this.init(value);
  },
  methods: {
    init(value){
    for (var p = 0; p < this.data.provinces.length; p++) {
        if (this.data.provinces[p].name == value[0]) {
          this.setData({ provinceIndexes: [p] });
          const province = this.provinceChange(p);
          this.data.ragion.code[0] = province.id;
          break;
        }
      }
      for (var c = 0; c < this.data.citys.length; c++) {
        if (this.data.citys[c].name == value[1]) {
          this.setData({ cityIndexes: [c] });
          const city = this.cityChange(c);
          this.data.ragion.code[1] = city.id;
          break;
        }
      }
      for (var t = 0; t < this.data.towns.length; t++) {
        if (this.data.towns[t].name == value[2]) {
          this.setData({ townIndexes: [t] });
          const town = this.townChange(t);
          this.data.ragion.code[2] = town.id;
          this.data.ragion.postcode = town.zipcode;
          break;
        }
      }
    },
    provinceChange(index) {
      const province = this.data.provinces[index];
      const citys = allCitys[province.id];
      this.setData({ citys,cityIndexes:[0] })
      //
      return province;
    },
    cityChange(index) {
      const city = this.data.citys[index];
      const towns = allTowns[city.id];
      this.setData({ towns,townIndexes:[0] })
      //
      return city;
    },
    townChange(index) {
      const town = this.data.towns[index];
      //
      return town;
    },
    ragion_show() {
      if (this.props.disabled) {
        return;
      }
     const value = this.data.ragion.value;
     this.init(value);
      this.setData({ show: true })
    },
    ragion_cancle() {
      this.setData({ show: false })
      if (this.props.onCancle) {
        this.props.onCancle();
      }
    },
    ragion_confirm() {
      this.setData({ show: false })
      if (this.props.onChange) {
        this.props.onChange({ detail:  this.data.ragion });
      }
    },
    province_change(e) {
      this.provinceChange(e.detail.value);
      this.cityChange(0);
    },
    city_change(e) {
      this.cityChange(e.detail.value);
    },
    town_change(e) {
      this.townChange(e.detail.value);
    }
  },
});
