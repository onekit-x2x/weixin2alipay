/* eslint-disable no-console */
export default {
  props: {
    onekitId: `id_${Math.random() * 1000}`,
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
  },
  onInit() {
    if (!getApp().onekit_nodes) {
      getApp().onekit_nodes = {}
    }
    getApp().onekit_nodes[`#${this.props.onekitId}`] = this
    //
    if (this.props.onekitClass) {
      getApp().onekit_nodes[`.${this.props.onekitClass}`] = this
    }
  }
}
