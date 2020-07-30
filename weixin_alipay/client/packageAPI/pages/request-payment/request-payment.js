import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'发起支付',
            path:'packageAPI/pages/request-payment/request-payment'
        };
    },
    onLoad:function(){
    },
    requestPayment:function(){
        const self = this;
        self.setData({
            loading:true
        });
        app.getUserOpenId(function(err,openid){
            if(!err){
                wx.cloud.callFunction({
                    name:'pay',
                    data:{
                        action:'unifiedorder',
                        userInfo:{
                            openId:openid
                        },
                        price:0.01
                    },
                    success:(res)=>{
                        console.warn('[云函数] [openapi] templateMessage.send 调用成功：',res);
                        const data = res.result.data;
                        wx.requestPayment({
                            timeStamp:data.time_stamp,
                            nonceStr:data.nonce_str,
                            package:`prepay_id=${data.prepay_id}`,
                            signType:'MD5',
                            paySign:data.sign,
                            success:()=>{wx.showToast({
                                title:'支付成功'
                            })}
                        });
                    },
                    fail:(err)=>{
                        wx.showToast({
                            icon:'none',
                            title:'支付失败'
                        });
                        console.error('[云函数] [openapi] templateMessage.send 调用失败：',err);
                    }
                });
            } else {
                console.log('err:',err);
                self.setData({
                    loading:false
                });
            }
        });
    }
});
