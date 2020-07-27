import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'数据存储',
            path:'packageAPI/pages/storage/storage'
        };
    },
    data:{
        key:'',
        data:'',
        dialog:{
            title:'',
            content:'',
            hidden:true
        }
    },
    keyChange:function(e){
        this.data.key = e.detail.value;
    },
    dataChange:function(e){
        this.data.data = e.detail.value;
    },
    getStorage:function(){
        const {key,data} = this.data;
        var storageData;
        if(key.length === 0){
            this.setData({
                key:key,
                data:data
            });
            wx.showModal({
                title:'读取数据失败',
                content:'key 不能为空'
            });
        } else {
            storageData = wx.getStorageSync(key);
            console.log(storageData);
            if(storageData === ''){
                this.setData({
                    key:key,
                    data:storageData
                });
                wx.showModal({
                    title:'读取数据失败',
                    content:'找不到 key 对应的数据'
                });
            } else {
                this.setData({
                    key:key,
                    data:storageData
                });
                wx.showModal({
                    title:'读取数据成功',
                    content:storageData
                });
            }
        }
    },
    setStorage:function(){
        const {key,data} = this.data;
        if(key.length === 0){
            this.setData({
                key:key,
                data:data
            });
            wx.showModal({
                title:'保存数据失败',
                content:'key 不能为空'
            });
        } else {
            wx.setStorageSync(key,data);
            this.setData({
                key:key,
                data:data
            });
            wx.showModal({
                title:'存储数据成功'
            });
        }
    },
    clearStorage:function(){
        wx.clearStorageSync();
        this.setData({
            key:'',
            data:''
        });
        wx.showModal({
            title:'清除数据成功'
        });
    }
});
