import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'select-text',
            path:'page/weui/example/select-text/select-text'
        };
    },
    data:{
        arr:[
            {
                value:'长按，上侧复制',
                placement:'top'
            },
            {
                value:'长按，右侧复制',
                placement:'right'
            },
            {
                value:'长按，左侧复制',
                placement:'left'
            },
            {
                value:'长按，下侧复制',
                placement:'bottom'
            }
        ]
    },
    onLoad:function(){
    },
    onCopy:function(e){
        console.log('onCopy',e);
    },
    handleTouchStart:function(e){
        console.log('@@ touchstart',e);
    },
    handleTap:function(e){
        console.log('@@ tap',e);
        this.setData({
            evt:e
        });
    }
});
