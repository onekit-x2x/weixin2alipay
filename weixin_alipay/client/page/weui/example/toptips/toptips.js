import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'toptips',
            path:'page/weui/example/toptips/toptips'
        };
    },
    data:{
        value:'',
        showTopTips:false,
        message:'请输入文本',
        type:'info'
    },
    bindInputValue:function(e){
        this.setData({
            value:e.detail.value
        });
    },
    bindConfirmTap:function(){
        if(this.data.value){
            this.setData({
                showTopTips:true,
                message:this.data.value,
                type:'success'
            });
        } else {
            this.setData({
                showTopTips:true,
                type:'error'
            });
        }
    }
});
