import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const requestUrl = require('../../../config').requestUrl;
const duration = 2000;
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'网络请求',
            path:'packageAPI/pages/request/request'
        };
    },
    makeRequest:function(){
        const self = this;
        self.setData({
            loading:true
        });
        wx.request({
            url:requestUrl,
            data:{
                noncestr:Date.now()
            },
            success:function(result){
                wx.showToast({
                    title:'请求成功',
                    icon:'success',
                    mask:true,
                    duration:duration
                });
                self.setData({
                    loading:false
                });
                console.log('request success',result);
            },
            fail:function({errMsg}){
                console.log('request fail',errMsg);
                self.setData({
                    loading:false
                });
            }
        });
    }
});
