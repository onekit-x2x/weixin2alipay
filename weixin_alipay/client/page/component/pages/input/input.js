import {OnekitApp,OnekitPage} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'input',
            path:'page/component/pages/input/input'
        };
    },
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
        const value = e.detail.value;
        var pos = e.detail.cursor;
        var left;
        if(pos !== -1){
            left = e.detail.value.slice(0,pos);
            pos = left.replace(new RegExp("11","g"),'2').length;
        }
        return {
            value:value.replace(new RegExp("11","g"),'2'),
            cursor:pos
        };
    },
    bindHideKeyboard:function(e){
        if(e.detail.value === '123'){
            wx.hideKeyboard();
        }
    }
});
