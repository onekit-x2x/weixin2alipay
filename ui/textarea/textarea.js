Component({
  mixins: [],
  data: {},
  props: {
    onekitStyle:"",
    onekitClass:"",
    name:"",
    onekitId:"",
    value:"",
    placeholder:"",
    placeholderStyle:"",
    placeholderClass:"textarea-placeholder",
    disabled:false,
    maxlength:140,
    autoFocus:false,
    focus:false,
    autoHeight:false,
    fixed:false,
    cursorSpacing:0,
    cursor:-1,
    showConfirmBar:true,
    selectionStart:-1,
    selectionEnd:-1,
    adjustPosition:true,
    holdKeyboard:false,
    disableDefaultPadding:false,
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    textarea_Input(e) {
      if (this.props.onInput) {
        this.props.onInput({})
      }
    },
    textarea_Focus(e){
      if (this.props.onFocus) {
        this.props.onFocus({})
      }
    },
    textarea_Blur(e){
      if (this.props.onBlur) {
        this.props.onBlur(e)
      }
    },
    textarea_Confirm(e){
      if (this.props.onConfirm) {
        this.props.onConfirm({})
      }
    }
  },
});
