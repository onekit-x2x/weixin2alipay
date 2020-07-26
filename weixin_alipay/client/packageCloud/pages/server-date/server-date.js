import {OnekitApp,OnekitPage} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const util = require('../../../util/util.js');
const app = getApp();
const collection = 'serverDate';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'服务端时间',
            path:'page/cloud/pages/server-date/server-date'
        };
    },
    data:{
        openid:'',
        loading:false,
        clientDate:null,
        serverDate:null,
        clientDateFormatted:'',
        serverDateFormatted:'',
        delta:0
    },
    onLoad:function(){
        if(app.globalData.openid){
            this.setData({
                openid:app.globalData.openid
            });
        } else {
            wx.showLoading({
                title:'正在初始化...'
            });
            app.getUserOpenIdViaCloud().then((openid)=>{
    this.setData({
        openid:openid
    });
    wx.hideLoading();
    return openid;
}).catch((err)=>{
                console.error(err);
                wx.hideLoading();
                wx.showToast({
                    icon:'none',
                    title:'初始化失败，请检查网络'
                });
            });
        }
    },
    showError:function(){
        wx.showToast({
            icon:'none',
            title:'插入失败'
        });
    },
    completeTask:function(){
        this.setData({
            loading:false
        });
    },
    insertOrUpdateData:function(existedData,data){
        const db = wx.cloud.database();
        if(existedData._id){
            db.collection(collection).doc(existedData._id).update({
    data:data
}).then((res)=>{
    this.setCompletedData(existedData._id);
    return res;
}).catch((err)=>{
                this.showError();
                console.error('[数据库] [更新记录] 失败：',err);
                this.completeTask();
            });
        } else {
            db.collection(collection).add({
    data:data
}).then((res)=>{
    this.setCompletedData(res._id);
    return res;
}).catch((err)=>{
                this.showError();
                console.error('[数据库] [新增记录] 失败：',err);
                this.completeTask();
            });
        }
    },
    setCompletedData:function(id){
        const db = wx.cloud.database();
        db.collection(collection).doc(id).get().then((res)=>{
    this.setData({
        delta:Math.abs(res.data.time - this.data.clientDate),
        serverDate:res.data.time,
        clientDateFormatted:util.formatDateTime(this.data.clientDate,true),
        serverDateFormatted:util.formatDateTime(res.data.time,true)
    });
    wx.showToast({
        title:'插入成功'
    });
    this.completeTask();
    return res;
}).catch((err)=>{
            this.showError();
            console.error('[数据库] [查询记录] 失败：',err);
            this.completeTask();
        });
    },
    insertData:function(){
        const db = wx.cloud.database();
        const data = {
            time:db.serverDate()
        };
        this.setData({
            loading:true
        });
        db.collection(collection).where({
    _openid:this.data.openid
}).get().then((res)=>{
    this.setData({
        clientDate:new Date()
    });
    console.log('[数据库] [查询记录] 成功: ',res);
    const resFirstData = res.data[0] || {};
    this.insertOrUpdateData(resFirstData,data);
    return res;
}).catch((err)=>{
            this.showError();
            console.error('[数据库] [查询记录] 失败：',err);
            this.completeTask();
        });
    }
});
