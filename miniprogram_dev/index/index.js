import { OnekitPage } from '../weixin2alipay/index';
import { wx } from '../weixin2alipay/index';

global = {};
OnekitPage({
  webview_error(e){
    console.log(e)
  }
});
