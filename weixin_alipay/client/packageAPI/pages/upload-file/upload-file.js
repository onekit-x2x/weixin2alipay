import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'上传文件',
            path:'packageAPI/pages/upload-file/upload-file'
        };
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
                const imageSrc = res.tempFilePaths[0];
                wx.cloud.uploadFile({
                    cloudPath:'example.png',
                    filePath:imageSrc,
                    config:{
                        env:'release-b86096'
                    },
                    success:(res)=>{
                        console.log(res.fileID);
                        console.log('uploadImage success, res is:',res);
                        wx.showToast({
                            title:'上传成功',
                            icon:'success',
                            duration:1000
                        });
                        self.setData({
                            imageSrc:imageSrc,
                            fileID:res.fileID
                        });
                    },
                    fail:function({errMsg}){
                        console.log('uploadImage fail, errMsg is',errMsg);
                    }
                });
            },
            fail:(res)=>{
                wx.showToast({
                    icon:'none',
                    title:'上传失败'
                });
                console.log('uploadImage fail, errMsg is',res.errMsg);
            }
        });
    },
    onUnload:function(){
        if(this.data.fileID){
            wx.cloud.deleteFile({
                fileList:[
                    this.data.fileID
                ]
            });
        }
    }
});
