import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'删除文件',
            path:'page/cloud/pages/delete-file/delete-file'
        };
    },
    data:{
        fileId:'',
        loading:false
    },
    onLoad:function(){
        this.setData({
            fileId:app.globalData.fileId || ''
        });
    },
    onShow:function(){
        this.setData({
            fileId:app.globalData.fileId || ''
        });
    },
    deleteFile:function(){
        const fileId = this.data.fileId;
        if(!fileId){
            return;
        }
        const self = this;
        this.setData({
            loading:true
        });
        wx.cloud.deleteFile({
            fileList:[
                fileId
            ],
            success:(res)=>{
                console.log('[删除文件] 成功：',res);
                if(res.fileList && res.fileList.length){
                    self.setData({
                        fileId:''
                    });
                }
                app.globalData.fileId = '';
                wx.showToast({
                    title:'删除成功'
                });
            },
            fail:(err)=>{
                console.error('[删除文件] 失败：',err);
            },
            complete:()=>{
                self.setData({
                    loading:false
                });
            }
        });
    }
});
