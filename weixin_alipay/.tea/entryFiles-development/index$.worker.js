if(!self.__appxInited) {
self.__appxInited = 1;


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



function success() {
require('../../client/app');
require('../../client/onekit/ui/ad/ad?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/button/button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/checkbox/checkbox?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/editor/editor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/icon/icon?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/map/map?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/modal/modal?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/open-data/open-data?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/rich-text/rich-text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/video/video?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/page/component/index?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/view/view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/scroll-view/scroll-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/swiper/swiper?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/text/text?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/icon/icon?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/progress/progress?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/button/button?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/checkbox/checkbox?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/form/form?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/input/input?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/label/label?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/picker/picker?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/radio/radio?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/slider/slider?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/switch/switch?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/textarea/textarea?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/navigator/navigator?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/navigator/navigate?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/navigator/redirect?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/image/image?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/audio/audio?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/video/video?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/map/map?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/canvas/canvas?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/ad/ad?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/movable-view/movable-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/cover-view/cover-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/rich-text/rich-text?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/index?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/login/login?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-user-info/get-user-info?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/request-payment/request-payment?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/share/share?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/share-button/share-button?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/custom-message/custom-message?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/template-message/template-message?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/set-navigation-bar-title/set-navigation-bar-title?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/navigation-bar-loading/navigation-bar-loading?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/navigator/navigator?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/pull-down-refresh/pull-down-refresh?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/animation/animation?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/action-sheet/action-sheet?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/modal/modal?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/toast/toast?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-network-type/get-network-type?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/on-network-status-change/on-network-status-change?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-system-info/get-system-info?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/on-compass-change/on-compass-change?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/make-phone-call/make-phone-call?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/scan-code/scan-code?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/request/request?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/web-socket/web-socket?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/upload-file/upload-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/download-file/download-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/image/image?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/voice/voice?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/file/file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/on-accelerometer-change/on-accelerometer-change?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/canvas/canvas?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/background-audio/background-audio?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/video/video?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-location/get-location?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/open-location/open-location?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/choose-location/choose-location?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/storage/storage?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/picker-view/picker-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/camera/camera?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/camera-scan-code/camera-scan-code?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-wxml-node-info/get-wxml-node-info?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/open-data/open-data?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/web-view/web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/load-font-face/load-font-face?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/clipboard-data/clipboard-data?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/bluetooth/bluetooth?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/screen-brightness/screen-brightness?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/vibrate/vibrate?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/add-contact/add-contact?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/wifi/wifi?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/page-scroll/page-scroll?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/intersection-observer/intersection-observer?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/capture-screen/capture-screen?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/worker/worker?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/ibeacon/ibeacon?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/choose-address/choose-address?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/setting/setting?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/choose-invoice-title/choose-invoice-title?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/soter-authentication/soter-authentication?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/map-styles/map-styles?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/index?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/user-authentication/user-authentication?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/get-wx-context/get-wx-context?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/upload-file/upload-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/download-file/download-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/get-temp-file-url/get-temp-file-url?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/delete-file/delete-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/cloud-file-component/cloud-file-component?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/crud/crud?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/crud-detail/crud-detail?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/db-permission/db-permission?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/server-date/server-date?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/scf-database/scf-database?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/scf-storage/scf-storage?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/scf-openapi/scf-openapi?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/doc-web-view/doc-web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/doc-web-view/doc-web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/doc-web-view/doc-web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/editor/editor?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}