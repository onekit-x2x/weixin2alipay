/* eslint-disable no-console */
export default {
  props: {
    onekitId: '',
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
    onekitDataset: null
  },
  data: {},
  onInit() {
    if (this.props.onekitId) {
      getApp().onekit_nodes[`_${this.props.onekitId}`] = this
    }
    //
    if (this.props.onekitClass) {
      getApp().onekit_nodes[`__${this.props.onekitClass}`] = this
    }
  },
  methods: {
    _dataset() {
      const json = `{${this.props.onekitDataset}}`
      return JSON.parse(json)
    },
    _e(detail, dataset) {
      // currentTarget: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // detail: {
      //   curPercent: parseInt(curPercent, 10)
      // },
      // mark: {},
      // mut: false,
      // target: {
      //   dataset: {},
      //   id: '',
      //   offsetLeft: ret[0].left,
      //   offsetTop: ret[0].top
      // },
      // timeStamp: 8888888, //
      // type: 'activeend',
      // _userTap: false
      return {
        detail: detail || {},
        dataset: dataset || {}
      }
    }
  }
}
