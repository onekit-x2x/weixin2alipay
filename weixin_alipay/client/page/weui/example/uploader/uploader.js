import {OnekitApp,OnekitPage,OnekitComponent} from "../../../../onekit/onekit.js";
import wx from "../../../../onekit/wx.js";
import CustomPage from "../../base/CustomPage";
CustomPage({
    onShareAppMessage:function(){
        return {
            title:'uploader',
            path:'page/weui/example/uploader/uploader'
        };
    },
    data:{
        files:[
            {
                url:'http://mmbiz.qpic.cn/mmbiz_png/VUIF3v9blLsicfV8ysC76e9fZzWgy8YJ2bQO58p43Lib8ncGXmuyibLY7O3hia8sWv25KCibQb7MbJW3Q7xibNzfRN7A/0'
            }
        ]
    },
    onLoad:function(){
        this.setData({
            selectFile:this.selectFile.bind(this),
            uplaodFile:this.uplaodFile.bind(this)
        });
    },
    chooseImage:function(e){
        var that = this;
        wx.chooseImage({
            sizeType:[
                'original',
                'compressed'
            ],
            sourceType:[
                'album',
                'camera'
            ],
            success:function(res){
                that.setData({
                    files:that.data.files.concat(res.tempFilePaths)
                });
            }
        });
    },
    previewImage:function(e){
        wx.previewImage({
            current:e.currentTarget.id,
            urls:this.data.files
        });
    },
    selectFile:function(files){
        console.log('files',files);
    },
    uplaodFile:function(files){
        console.log('upload files',files);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject('some error');
            },1000);
        });
    },
    uploadError:function(e){
        console.log('upload error',e.detail);
    },
    uploadSuccess:function(e){
        console.log('upload success',e.detail);
    }
});
