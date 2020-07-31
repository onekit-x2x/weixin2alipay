import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'WXContext',
            path:'page/cloud/pages/get-wx-context/get-wx-context'
        };
    },
    data:{
        hasWXContext:false,
        wxContext:{},
        loading:false
    },
    getWXContext:function(){
        this.setData({
            loading:true
        });
        wx.cloud.callFunction({
            name:'wxContext',
            data:{},
            success:(res)=>{
                console.log('[云函数] [wxContext] wxContext: ',res.result);
                this.setData({
                    hasWXContext:true,
                    wxContext:res.result,
                    loading:false
                });
            },
            fail:(err)=>{console.error('[云函数] [wxContext] 调用失败',err)}
        });
    },
    clear:function(){
        this.setData({
            hasWXContext:false,
            wxContext:{}
        });
    }
});
