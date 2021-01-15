/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import onekit_behavior from '../../behavior/onekit_behavior'
import wxs_behavior from '../../behavior/wxs_behavior'
import weixin_behavior from '../../behavior/weixin_behavior'

Component({
  mixins: [onekit_behavior, wxs_behavior, weixin_behavior],
  data: {},
  props: {
    readOnly: false,
    placeholder: '',
    showImgSize: false,
    showImgToolbar: false,
    showImgResize: false,
  },
  didMount() {
    this.webView = my.createWebViewContext('webView')
    this.props.onReady()
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    webView_message(e) {
      const data = e.detail.data
      console.log('ssssss', data)
      switch (data.type) {
        case 'event':
          switch (data.name) {
            case 'ready':
              if (this.props.onReady) {
                this.props.onReady()
              }
              break
            case 'focus':
              if (this.props.onFocus) {
                this.props.onFocus()
              }
              break
            case 'blur':
              if (this.props.onBlur) {
                this.props.onBlur()
              }
              break
            case 'input':
              if (this.props.onInput) {
                this.props.onInput()
              }
              break
            case 'statuschange':
              if (this.props.onStatuschange) {
                this.props.onStatuschange()
              }
              break
            default:
              break
          }
          break
        default:
          break
      }
    },

    // eslint-disable-next-line no-unused-vars
    format(name, value) {

    },

    insertDivider() {

    },


    insertImage(object) {
      this.webView.postMessage({
        insertImage: object.text
      })
    },

    insertText(object) {
      this.webView.postMessage({
        insertText: object.text
      })
    },

    // eslint-disable-next-line no-unused-vars
    setContents(object) {

    },

    getContents() {

    },

    clear() {

    },

    removeFormat() {

    },

    undo() {

    },

    redo() {

    },

    blur() {

    },

    scrollIntoView() {

    },
  }
})
