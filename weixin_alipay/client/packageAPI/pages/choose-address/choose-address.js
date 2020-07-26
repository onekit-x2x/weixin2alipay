import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'收货地址',
            path:'packageAPI/pages/choose-address/choose-address'
        };
    },
    data:{
        addressInfo:null
    },
    chooseAddress:function(){
        wx.chooseAddress({
            success:(res)=>{
                this.setData({
                    addressInfo:res
                });
            },
            fail:function(err){
                console.log(err);
            }
        });
    }
});
