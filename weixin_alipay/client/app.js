global = {};
import {OnekitApp,OnekitPage,OnekitComponent} from './onekit/onekit.js';
import wx from './onekit/wx.js';
const config = require('./config');
const themeListeners = [
];
global.isDemo = true;
OnekitApp({
    onLaunch:function(opts,data){
        const that = this;
        const canIUseSetBackgroundFetchToken = wx.canIUse('setBackgroundFetchToken');
        if(canIUseSetBackgroundFetchToken){
            wx.setBackgroundFetchToken({
                token:'getBackgroundFetchToken'
            });
        }
        if(wx.getBackgroundFetchData){
            wx.getBackgroundFetchData({
                fetchType:'pre',
                success:function(res){
                    that.globalData.backgroundFetchData = res;
                    console.log('读取预拉取数据成功');
                },
                fail:function(){
                    console.log('读取预拉取数据失败');
                    wx.showToast({
                        title:'无缓存数据',
                        icon:'none'
                    });
                },
                complete:function(){
                    console.log('结束读取');
                }
            });
        }
        console.log('App Launch',opts);
        if(data && data.path){
            wx.navigateTo({
                url:data.path
            });
        }
        if(!wx.cloud){
            console.error('请使用 2.2.3 或以上的基础库以使用云能力');
        } else {
            wx.cloud.init({
                env:config.envId,
                traceUser:true
            });
        }
    },
    onShow:function(opts){
        console.log('App Show',opts);
    },
    onHide:function(){
        console.log('App Hide');
    },
    onThemeChange:function({theme}){
        this.globalData.theme = theme;
        themeListeners.forEach((listener)=>{listener(theme)});
    },
    watchThemeChange:function(listener){
        if(themeListeners.indexOf(listener) < 0){
            themeListeners.push(listener);
        }
    },
    unWatchThemeChange:function(listener){
        const index = themeListeners.indexOf(listener);
        if(index > -1){
            themeListeners.splice(index,1);
        }
    },
    globalData:{
        theme:wx.getSystemInfoSync().theme,
        hasLogin:false,
        openid:null,
        iconTabbar:'/page/weui/example/images/icon_tabbar.png'
    },
    getUserOpenId:function(callback){
        const self = this;
        if(self.globalData.openid){
            callback(null,self.globalData.openid);
        } else {
            wx.login({
                success:function(data){
                    wx.cloud.callFunction({
                        name:'login',
                        data:{
                            action:'openid'
                        },
                        success:(res)=>{
                            console.log('拉取openid成功',res);
                            self.globalData.openid = res.result.openid;
                            callback(null,self.globalData.openid);
                        },
                        fail:(err)=>{
                            console.log('拉取用户openid失败，将无法正常使用开放接口等服务',res);
                            callback(res);
                        }
                    });
                },
                fail:function(err){
                    console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务',err);
                    callback(err);
                }
            });
        }
    },
    getUserOpenIdViaCloud:function(){
        return wx.cloud.callFunction({
    name:'wxContext',
    data:{}
}).then((res)=>{
            this.globalData.openid = res.result.openid;
            return res.result.openid;
        });
    }
});
