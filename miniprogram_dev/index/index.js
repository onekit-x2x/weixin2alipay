import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
    view_tap(){
    console.log('hhhh');
  },
  movable_touchmove(e){
    console.log("没拦住我～～～");
  },
  movable_htouchmove(e){
    console.log(e);
  }
});
