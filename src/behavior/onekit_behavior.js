/* eslint-disable no-console */
export default {
  props: {
    onekitId: '', // `id_${Math.random() * 1000}`,
    onekitClass: '',
    onekitStyle: '',
    onekitVersion: '',
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
  }
}
