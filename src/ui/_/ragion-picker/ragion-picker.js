/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import provinces from './data/provices.json'
import allCitys from './data/citys.json'
import allTowns from './data/towns.json'

Component({
  props: {
    onekitStyle: '',
    onekitClass: '',
    onekitId: '',
    headerText: null,
    disabled: false,
    value: ['北京市', '北京市', '东城区'],
    customItem: ''
  },
  data: {
    provinces,
    ragion: {
      value: [],
      code: [],
      postcode: null
    }
  },
  didMount() {
    const value = this.props.value
    this.init(value)
  },
  methods: {
    init(value) {
      if (!value) {
        this.provinceChange(this.props.customItem ? -1 : 0)
        this.cityChange(this.props.customItem ? -1 : 0)
        this.townChange(this.props.customItem ? -1 : 0)
        return
      }
      if (this.props.customItem && value[0] === this.props.customItem) {
        this.setData({
          provinceIndexes: 0
        })
        this.provinceChange(-1)
      } else {
        for (let p = 0; p < this.data.provinces.length; p++) {
          if (this.data.provinces[p].name === value[0]) {
            const i = [this.props.customItem ? p + 1 : p]
            this.setData({
              provinceIndexes: i
            })
            this.provinceChange(p)
            break
          }
        }
      }
      if (this.props.customItem && value[1] === this.props.customItem) {
        this.setData({
          cityIndexes: 0
        })
        this.cityChange(-1)
      } else {
        for (let c = 0; c < this.data.citys.length; c++) {
          if (this.data.citys[c].name === value[1]) {
            const _i = [this.props.customItem ? c + 1 : c]
            this.setData({
              cityIndexes: _i
            })
            this.cityChange(c)
            break
          }
        }
      }
      if (this.props.customItem && value[2] === this.props.customItem) {
        this.setData({
          townIndexes: 0
        })
        this.townChange(-1)
      } else {
        for (let t = 0; t < this.data.towns.length; t++) {
          if (this.data.towns[t].name === value[2]) {
            const _i2 = [this.props.customItem ? t + 1 : t]
            this.setData({
              townIndexes: _i2
            })
            this.townChange(t)
            break
          }
        }
      }
    },
    provinceChange(index) {
      if (index < 0) {
        this.data.ragion.value[0] = this.props.customItem
        this.data.ragion.code = []
        this.setData({
          citys: [],
          cityIndexes: [0]
        })
        return
      }
      const province = this.data.provinces[index]
      const citys = allCitys[province.id]
      //
      this.data.ragion.value[0] = province.name
      this.data.ragion.code[0] = province.id
      //
      const i = this.props.customItem ? 0 : 1
      this.setData({
        citys,
        cityIndexes: [i]
      })
    },
    cityChange(index) {
      if (index < 0) {
        this.data.ragion.value[1] = this.props.customItem
        switch (this.data.ragion.code.length) {
          case 0:
            break
          case 1:
          case 2:
          case 3:
            this.data.ragion.code = [this.data.ragion.code[0]]
            break
          default:
            break
        }
        this.setData({
          towns: [],
          townIndexes: [0]
        })
        return
      }
      const city = this.data.citys[index]
      const towns = allTowns[city.id]
      //
      this.data.ragion.value[1] = city.name
      this.data.ragion.code[1] = city.id
      //
      const i = this.props.customItem ? 0 : 1
      this.setData({
        towns,
        townIndexes: [i]
      })
    },
    townChange(index) {
      if (index < 0) {
        this.data.ragion.value[2] = this.props.customItem
        switch (this.data.ragion.code.length) {
          case 0:
            this.data.ragion.code = []
            break
          case 1:
            this.data.ragion.code = [this.data.ragion.code[0]]
            break
          case 2:
            this.data.ragion.code = [this.data.ragion.code[0], this.data.ragion.code[1]]
            break
          default:
            break
        }
        this.data.ragion.postcode = null
        return
      }
      const town = this.data.towns[index]
      //
      this.data.ragion.value[2] = town.name
      this.data.ragion.code[2] = town.id
      this.data.ragion.postcode = town.zipcode
    },
    ragion_show() {
      if (this.props.disabled) {
        return
      }
      const value = this.data.ragion.value
      this.init(value)
      this.setData({
        show: true,
        provinceIndexes: this.data.provinceIndexes
      })
    },
    ragion_cancle() {
      this.setData({
        show: false
      })
      if (this.props.onCancle) {
        this.props.onCancle()
      }
    },
    ragion_confirm() {
      this.setData({
        show: false
      })
      if (this.props.onChange) {
        this.props.onChange({
          detail: this.data.ragion
        })
      }
    },
    province_change(e) {
      const index = e.detail.value[0]
      this.data.provinceIndexes = [index]
      this.provinceChange(this.props.customItem && index === 0 ? -1 : (this.props.customItem ? (index - 1) : index))
      this.cityChange(this.props.customItem ? -1 : 0)
      this.townChange(this.props.customItem ? -1 : 0)
    },
    city_change(e) {
      const index = e.detail.value[0]
      this.data.cityIndexes = [index]
      this.cityChange(this.props.customItem && index === 0 ? -1 : (this.props.customItem ? (index - 1) : index))
      this.townChange(this.props.customItem ? -1 : 0)
    },
    town_change(e) {
      const index = e.detail.value[0]
      this.data.townIndexes = [index]
      this.townChange(this.props.customItem && index === 0 ? -1 : (this.props.customItem ? (index - 1) : index))
    }
  },
})
