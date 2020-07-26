import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'周期性缓存',
            path:'packageAPI/pages/get-background-fetch-data/get-background-fetch-data'
        };
    },
    onShow:function(){
        this.getBackgroundFetchData();
    },
    data:{
        openid:'',
        appid:'',
        canIUse:true
    },
    getBackgroundFetchData:function(){
        console.log('读取周期性更新数据');
        const that = this;
        if(wx.getBackgroundFetchData){
            wx.getBackgroundFetchData({
                fetchType:'periodic',
                success:function(res){
                    console.log(res);
                    const {fetchedData} = res;
                    const result = JSON.parse(fetchedData);
                    that.setData({
                        appid:result.appid,
                        openid:result.openid
                    });
                    console.log('读取周期性更新数据成功');
                },
                fail:function(){
                    console.log('读取周期性更新数据失败');
                    wx.showToast({
                        title:'无缓存数据',
                        icon:'none'
                    });
                },
                complete:function(){
                    console.log('结束读取');
                }
            });
        } else {
            this.setData({
                canIUse:false
            });
            wx.showModal({
                title:'微信版本过低，暂不支持本功能'
            });
        }
    }
});
