import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'云函数操作数据库',
            path:'page/cloud/pages/scf-database/scf-database'
        };
    },
    data:{
        serverDataClient:'',
        serverDataClientError:false,
        serverDataCloud:'',
        serverDataCloudError:false,
        clientLoading:false,
        cloudLoading:false,
        theme:'light'
    },
    onLoad:function(){
        this.setData({
            theme:wx.getSystemInfoSync().theme || 'light'
        });
        if(wx.onThemeChange){
            wx.onThemeChange(({theme})=>{
                this.setData({
                    theme:theme
                });
            });
        }
    },
    queryServerDataViaClient:function(){
        const db = wx.cloud.database();
        this.setData({
            clientLoading:true,
            serverDataClient:'',
            serverDataClientError:false
        });
        db.collection('perm4').where({
    _openid:'server'
}).get({
            success:(res)=>{
                const resFirstData = res.data && res.data[0] || {};
                this.setData({
                    serverDataClient:resFirstData.data
                });
                console.log('[数据库] [查询记录] 成功: ',res);
            },
            fail:(err)=>{
                this.setData({
                    serverDataClientError:true
                });
                console.error('[数据库] [查询记录] 失败：',err);
            },
            complete:()=>{
                this.setData({
                    clientLoading:false
                });
            }
        });
    },
    queryServerDataViaCloudFunction:function(){
        this.setData({
            cloudLoading:true,
            serverDataCloud:'',
            serverDataCloudError:false
        });
        wx.cloud.callFunction({
            name:'getServerDataDemo',
            data:{},
            success:(res)=>{
                console.log('[云函数] [getServerDataDemo] res: ',res.result);
                const resFirstData = res.result.data && res.result.data[0] || {};
                this.setData({
                    serverDataCloud:resFirstData.data
                });
            },
            fail:(err)=>{
                this.setData({
                    serverDataCloudError:true
                });
                console.error('[云函数] [getServerDataDemo] 调用失败',err);
            },
            complete:()=>{
                this.setData({
                    cloudLoading:false
                });
            }
        });
    }
});
