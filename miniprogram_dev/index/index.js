import {OnekitPage} from '../weixin2alipay/index';
import {wx} from '../weixin2alipay/index';
global = {};
var initData = 'this is first line\nthis is second line';
var extraLine = [
];
OnekitPage({
    data:{
        text:initData
    },
    add:function(e){
        extraLine.push('other line');
        this.setData({
        text:(((initData + '\n')) + extraLine.join('\n'))
    });
    },
    remove:function(e){
        if((extraLine.length > 0)){
        extraLine.pop();
        this.setData({
            text:(((initData + '\n')) + extraLine.join('\n'))
        });
    }
    }
});
