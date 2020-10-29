import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
var pageData = {};
for(var i = 1;(i < 5);++i){
    (function(index){
        pageData[`slider${index}change`] = function(e){
        console.log(`slider${index}发生change事件，携带值为`,e.detail.value);
    };
    })(i);
};
OnekitPage(pageData);
