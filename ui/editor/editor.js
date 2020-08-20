Component({
  mixins: [],
  data: {},
  props: {
    readOnly: false,
    placeholder: "",
    showImgSize: false,
    showImgToolbar: false,
    showImgResize: false,
    onekitClass:'',
  },
  didMount() {
    this.webView = my.createWebViewContext('webView');
    this.props.onReady();
  },
  didUpdate() { },
  didUnmount() { },
  methods: {
    webView_message(e) {
      var data = e.detail.data;
      console.log("ssssss", data);
      switch (data.type) {
        case "event":
          switch (data.name) {
            case "ready":
              if (this.props.onReady) {
                this.props.onReady();
              }
              break;
            case "focus":
              if (this.props.onFocus) {
                this.props.onFocus();
              }
              break;
              case "blur":
              if (this.props.onBlur) {
                this.props.onBlur();
              }
              break;
               case "input":
              if (this.props.onInput) {
                this.props.onInput();
              }
              break;
               case "statuschange":
              if (this.props.onStatuschange) {
                this.props.onStatuschange();
              }
              break;
            default: break;
          }
          break;
        default: break;
      }

    },

    format(name, value) {

    },

    insertDivider() {

    },


    insertImage(object) {
      this.webView.postMessage({ 'insertImage': object.text });
    },

    insertText(object) {
      this.webView.postMessage({ 'insertText': object.text });
    },

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
});
