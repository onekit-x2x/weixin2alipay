import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const demoImageFileId = require('../../../config').demoImageFileId;
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取临时链接',
            path:'page/cloud/pages/get-temp-file-url/get-temp-file-url'
        };
    },
    data:{
        fileTempURLDone:false,
        fileId:'',
        tempFileURL:'',
        maxAge:0,
        loading:false
    },
    onLoad:function(){
        this.setData({
            fileId:app.globalData.fileId || demoImageFileId
        });
    },
    getTempFileURL:function(){
        const fileId = this.data.fileId;
        if(!fileId){
            return;
        }
        const self = this;
        this.setData({
            loading:true
        });
        wx.cloud.getTempFileURL({
            fileList:[
                fileId
            ],
            success:(res)=>{
                console.log('[换取临时链接] 成功：',res);
                if(res.fileList && res.fileList.length){
                    self.setData({
                        fileTempURLDone:true,
                        tempFileURL:res.fileList[0].tempFileURL,
                        maxAge:res.fileList[0].maxAge
                    });
                }
            },
            fail:(err)=>{console.error('[换取临时链接] 失败：',err)},
            complete:()=>{self.setData({
                loading:false
            })}
        });
    }
});
