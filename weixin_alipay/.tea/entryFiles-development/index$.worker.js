if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../client/app');
require('../../client/onekit/ui/open-data/open-data?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/ad/ad?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/rich-text/rich-text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/icon/icon?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/checkbox/checkbox?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/button/button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/map/map?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/video/video?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/editor/editor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/modal/modal?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/page/API/components/set-tab-bar/set-tab-bar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/page/component/index?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/view/view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/scroll-view/scroll-view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/swiper/swiper?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/text/text?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/icon/icon?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/progress/progress?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/button/button?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/checkbox/checkbox?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/form/form?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/input/input?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/label/label?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/picker/picker?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/radio/radio?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/slider/slider?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/switch/switch?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/textarea/textarea?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/navigator/navigator?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/navigator/navigate?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/navigator/redirect?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/image/image?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/video/video?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/map/map?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/canvas/canvas?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/ad/ad?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/movable-view/movable-view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/cover-view/cover-view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/rich-text/rich-text?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/picker-view/picker-view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/camera/camera?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/camera-scan-code/camera-scan-code?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/map-styles/map-styles?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/live-player/live-player?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/live-pusher/live-pusher?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/aria-component/aria-component?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/API/index?hash=08a9856c7e0f3f04666b5b68330fb10801920dd8');
require('../../client/page/cloud/index?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/doc-web-view/doc-web-view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/open-data/open-data?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/web-view/web-view?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/editor/editor?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/canvas-2d/canvas-2d?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
require('../../client/page/component/pages/webgl/webgl?hash=028f7ae2ecdd0fb218d820dfc1ba05673b3bf333');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}