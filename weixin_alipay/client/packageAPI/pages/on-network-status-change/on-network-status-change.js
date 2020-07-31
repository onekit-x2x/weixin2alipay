import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'监听手机网络变化',
            path:'packageAPI/pages/on-network-status-change/on-network-status-change'
        };
    },
    data:{
        isConnected:false
    },
    onLoad:function(){
        const that = this;
        wx.onNetworkStatusChange(function(res){
            that.setData({
                isConnected:res.isConnected,
                networkType:res.networkType
            });
        });
    },
    onShow:function(){
        const that = this;
        wx.getNetworkType({
            success:function(res){
                that.setData({
                    isConnected:res.networkType !== 'none',
                    networkType:res.networkType
                });
            }
        });
    }
});
