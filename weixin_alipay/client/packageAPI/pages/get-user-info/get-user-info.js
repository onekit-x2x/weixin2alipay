import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取用户信息',
            path:'packageAPI/pages/get-user-info/get-user-info'
        };
    },
    data:{
        hasUserInfo:false
    },
    getUserInfo:function(info){
        const userInfo = info.detail.userInfo;
        this.setData({
            userInfo:userInfo,
            hasUserInfo:true
        });
    },
    clear:function(){
        this.setData({
            hasUserInfo:false,
            userInfo:{}
        });
    }
});
