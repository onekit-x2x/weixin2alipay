import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
    data:{
        nbFrontColor:'#000000',
        nbBackgroundColor:'#ffffff'
    },
    onLoad:function(){
        this.setData({
        nbTitle:'新标题',
        nbLoading:true,
        nbFrontColor:'#ffffff',
        nbBackgroundColor:'#000000'
    });
    }
});
