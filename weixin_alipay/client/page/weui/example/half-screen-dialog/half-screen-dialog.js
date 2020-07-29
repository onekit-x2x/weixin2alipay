import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'half-screen-dialog',
            path:'page/weui/example/half-screen-dialog/half-screen-dialog'
        };
    },
    data:{
        typeF:false,
        typeS:false,
        typeT:false,
        buttons:[
            {
                type:'default',
                className:'',
                text:'辅助操作',
                value:0
            },
            {
                type:'primary',
                className:'',
                text:'主操作',
                value:1
            }
        ]
    },
    openTypeF:function(){
        this.setData({
            typeF:true
        });
    },
    openTypeS:function(){
        this.setData({
            typeS:true
        });
    },
    openTypeT:function(){
        this.setData({
            typeT:true
        });
    },
    buttontap:function(e){
        console.log(e.detail);
    }
});
