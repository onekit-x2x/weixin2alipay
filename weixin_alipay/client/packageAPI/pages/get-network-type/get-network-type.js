import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取手机网络状态',
            path:'packageAPI/pages/get-network-type/get-network-type'
        };
    },
    data:{
        hasNetworkType:false
    },
    getNetworkType:function(){
        const that = this;
        wx.getNetworkType({
            success:function(res){
                console.log(res);
                that.setData({
                    hasNetworkType:true,
                    networkType:res.subtype || res.networkType
                });
            }
        });
    },
    clear:function(){
        this.setData({
            hasNetworkType:false,
            networkType:''
        });
    }
});
