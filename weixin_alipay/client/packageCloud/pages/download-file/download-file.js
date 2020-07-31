import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const demoImageFileId = require('../../../config').demoImageFileId;
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'下载文件',
            path:'page/cloud/pages/download-file/download-file'
        };
    },
    data:{
        fileDownloaded:false,
        fileId:'',
        filePath:'',
        loading:false
    },
    onLoad:function(){
        this.setData({
            fileId:app.globalData.fileId || demoImageFileId
        });
    },
    downloadFile:function(){
        const fileId = this.data.fileId;
        if(!fileId){
            return;
        }
        const self = this;
        this.setData({
            loading:true
        });
        wx.cloud.downloadFile({
            fileID:fileId,
            success:(res)=>{
                console.log('[下载文件] 成功：',res);
                self.setData({
                    fileDownloaded:true,
                    filePath:res.tempFilePath
                });
            },
            fail:(err)=>{console.error('[下载文件] 失败：',err)},
            complete:()=>{self.setData({
                loading:false
            })}
        });
    }
});
