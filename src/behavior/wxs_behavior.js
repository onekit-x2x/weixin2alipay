/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
export default {
  methods: {
    selectComponent(selector) {

    },
    selectAllComponents(selctor) {

    },
    setStyle(styleDict) {
      let onekit_styles = ''
      for (const cssName of Object.keys(styleDict)) {
        onekit_styles += `${cssName}:${styleDict[cssName]};`
      }
      this.setData({onekit_styles})
    },
    addClass(className) {

    },
    removeClass(className) {

    },
    hasClass(className) {

    },
    getDataset() {

    },
    callMethod(funcName, args) {

    },
    requestAnimationFrame(callback) {

    },
    getState() {

    },
    getComputedStyle(cssNames) {

    }
  }
}
