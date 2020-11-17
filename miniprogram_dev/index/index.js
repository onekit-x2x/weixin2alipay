import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
    data:{
        longitude:'',
        latitude:'',
    },
    onLoad:function(){
        var that = this;
        wx.getLocation({
        success:function(res){
            that.setData({
            latitude:res.latitude,
            longitude:res.longitude
        });
        }
    });
    }
});


