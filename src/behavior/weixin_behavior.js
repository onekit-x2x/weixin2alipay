export default {
  methods: {
    selectComponent(selector) {

    },
    selectAllComponents(selector) {

    },
    setStyle(styleDict) {
      var onekit_styles = "";
      for (var cssName of Object.keys(styleDict)) {
        onekit_styles += `${cssName}:${styleDict[cssName]};`;
      }
      this.setData({ onekit_styles })
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