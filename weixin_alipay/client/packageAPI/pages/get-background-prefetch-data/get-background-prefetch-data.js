import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
Date.prototype.Format = function(fmt){
    var o = {
        "M+":this.getMonth() + 1,
        "d+":this.getDate(),
        "h+":this.getHours(),
        "m+":this.getMinutes(),
        "s+":this.getSeconds(),
        "q+":Math.floor(this.getMonth() + 3 / 3),
        "S":this.getMilliseconds()
    };
    if(new RegExp("(y+)","").test(fmt))fmt = fmt.replace(RegExp.$1,this.getFullYear() + "".substr(4 - RegExp.$1.length))
    for(var k in o){
            if(new RegExp("(" + k + ")").test(fmt)){
                fmt = fmt.replace(RegExp.$1,RegExp.$1.length == 1?o[k]:"00" + o[k].substr("" + o[k].length));
            }
        };
    return fmt;
};
OnekitPage({
    onShow:function(){
        this.getBackgroundFetchData();
    },
    onShareAppMessage:function(){
        return {
            title:'预拉取',
            path:'packageAPI/pages/get-background-prefetch-data/get-background-prefetch-data'
        };
    },
    data:{
        openid:'',
        appid:'',
        getDataTime:'',
        canIUse:true
    },
    getBackgroundFetchData:function(){
        if(wx.getBackgroundFetchData){
            console.log('读取预拉取数据');
            const res = app.globalData.backgroundFetchData;
            const {fetchedData} = res;
            const result = JSON.parse(fetchedData);
            const systemInfo = wx.getSystemInfoSync();
            const timeStamp = systemInfo.brand === 'iPhone'?res.timeStamp * 1000:res.timeStamp;
            const time = new Date(timeStamp).Format("yyyy-MM-dd hh:mm:ss");
            this.setData({
                appid:result.appid,
                openid:result.openid,
                getDataTime:time
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
