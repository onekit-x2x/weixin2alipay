import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
OnekitPage({
    onShareAppMessage:function(){
        return {
        title:'cover-view',
        path:'weixin2alipay/ui/cover-view/cover-view'
    };
    },
    data:{
        latitude:23.099994,
        longitude:113.32452
    }
});

