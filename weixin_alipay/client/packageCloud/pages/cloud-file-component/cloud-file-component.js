import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const {demoImageFileId,demoVideoFileId} = require('../../../config');
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'组件支持',
            path:'page/cloud/pages/cloud-file-component/cloud-file-component'
        };
    },
    data:{
        imageFileId:demoImageFileId,
        videoFileId:demoVideoFileId
    }
});
