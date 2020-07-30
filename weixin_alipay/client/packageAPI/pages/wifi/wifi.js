import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'Wi-Fi',
            path:'packageAPI/pages/wifi/wifi'
        };
    },
    data:{
        wifiList:[
        ]
    },
    onUnload:function(){
        this.stopSearch();
    },
    startSearch:function(){
        const getWifiList = ()=>{wx.getWifiList({
            success:()=>{wx.onGetWifiList((res)=>{
                const wifiList = res.wifiList.sort((a,b)=>b.signalStrength - a.signalStrength).map((wifi)=>{
                    const strength = Math.ceil(wifi.signalStrength * 4);
                    return Object.assign(wifi,{
                        strength:strength
                    });
                });
                this.setData({
                    wifiList:wifiList
                });
            })},
            fail:function(err){
                console.error(err);
            }
        })};
        const startWifi = ()=>{wx.startWifi({
            success:getWifiList,
            fail:function(err){
                console.error(err);
            }
        })};
        wx.getSystemInfo({
            success:function(res){
                const isIOS = res.platform === 'ios';
                if(isIOS){
                    wx.showModal({
                        title:'提示',
                        content:'由于系统限制，iOS用户请手动进入系统WiFi页面，然后返回小程序。',
                        showCancel:false,
                        success:function(){
                            startWifi();
                        }
                    });
                    return;
                }
                startWifi();
            }
        });
    },
    stopSearch:function(){
        wx.stopWifi({
            success:function(res){
                console.log(res);
            },
            fail:function(err){
                console.error(err);
            }
        });
    }
});
