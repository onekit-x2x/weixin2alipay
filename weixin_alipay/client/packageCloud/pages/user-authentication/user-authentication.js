import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'用户鉴权',
            path:'page/cloud/pages/user-authentication/user-authentication'
        };
    },
    data:{
        openid:'',
        loading:false
    },
    onGetOpenid:function(){
        this.setData({
            loading:true
        });
        app.getUserOpenIdViaCloud().then((openid)=>{
    this.setData({
        openid:openid,
        loading:false
    });
    return openid;
}).catch((err)=>{
            console.error(err);
        });
    },
    clear:function(){
        this.setData({
            openid:''
        });
    }
});
