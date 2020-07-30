import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'上传文件',
            path:'page/cloud/pages/upload-file/upload-file'
        };
    },
    data:{
        fileUploaded:false,
        fileId:'',
        filePath:'',
        fromOtherPage:false
    },
    onLoad:function(options){
        if(options.from){
            this.setData({
                fromOtherPage:true
            });
        }
    },
    chooseImage:function(){
        const self = this;
        wx.chooseImage({
            count:1,
            sizeType:[
                'compressed'
            ],
            sourceType:[
                'album'
            ],
            success:function(res){
                console.log('chooseImage success, temp path is',res.tempFilePaths[0]);
                const filePath = res.tempFilePaths[0];
                wx.showLoading({
                    title:'上传中'
                });
                app.getUserOpenIdViaCloud().then((openid)=>{
    const cloudPath = ('upload/' + openid) + filePath.match(new RegExp("\.[^.]+?$",""))[0];
    console.log('cloudPath',cloudPath);
    wx.cloud.uploadFile({
        cloudPath:cloudPath,
        filePath:filePath,
        success:(res)=>{
            console.log('[上传文件] 成功：',res);
            app.globalData.fileId = res.fileID;
            self.setData({
                fileUploaded:true,
                fileId:res.fileID,
                filePath:filePath
            });
            wx.hideLoading();
        },
        fail:(err)=>{
            console.error('[上传文件] 失败：',err);
            wx.hideLoading();
            wx.showToast({
                icon:'none',
                title:'上传失败'
            });
        }
    });
    return openid;
}).catch((err)=>{
                    console.error(err);
                    wx.hideLoading();
                });
            },
            fail:function({errMsg}){
                console.log('chooseImage fail, err is',errMsg);
            }
        });
    }
});
