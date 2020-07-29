import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'dialog',
            path:'page/weui/example/dialog/dialog'
        };
    },
    data:{
        dialogShow:false,
        showOneButtonDialog:false,
        buttons:[
            {
                text:'取消'
            },
            {
                text:'确定'
            }
        ],
        oneButton:[
            {
                text:'确定'
            }
        ]
    },
    openConfirm:function(){
        this.setData({
            dialogShow:true
        });
    },
    tapDialogButton:function(e){
        this.setData({
            dialogShow:false,
            showOneButtonDialog:false
        });
    },
    tapOneDialogButton:function(e){
        this.setData({
            showOneButtonDialog:true
        });
    }
});
