import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
    data:{
        focus:false,
        inputValue:''
    },
    bindKeyInput:function(e){
        this.setData({
        inputValue:e.detail.value
    });
    },
    bindReplaceInput:function(e){
        var value = e.detail.value;
        var pos = e.detail.cursor;
        var left;
        if((pos !== -1)){
        left = e.detail.value.slice(0,pos);
        pos = left.replace(/11/,'2').length;
    }
        return {
        value:value.replace(/11/,'2'),
        cursor:pos
    };
    },
    bindHideKeyboard:function(e){
        if((e.detail.value === '123')){
        wx.hideKeyboard();
    }
    },
    input_onKeyboardheightchange(e){
      console.log(e)
    }
});