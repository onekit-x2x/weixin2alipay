import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
const app = getApp();
const sliderWidth = 96;
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'权限管理',
            path:'page/cloud/pages/db-permission/db-permission'
        };
    },
    data:{
        openid:'',
        permissions:[
            '仅创建者可写，所有人可读',
            '仅创建者可读写',
            '仅管理端可写，所有人可读',
            '仅管理端可读写'
        ],
        currentPermissionIndex:0,
        tabs:[
            [
                '我的个性签名',
                '阿白的个性签名'
            ],
            [
                '我的邮箱',
                '阿绿的邮箱'
            ],
            [
            ],
            [
            ]
        ],
        activeTabIndex:0,
        sliderOffset:0,
        sliderLeft:0,
        querying:false,
        updating:false,
        hasMyWhatsUp:false,
        myWhatsUp:'',
        adminWhatsUp:'',
        myEmail:'',
        adminEmail:'',
        hasProduct:false,
        product:{},
        serverData:''
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
                wx.showModal({
                    content:'初始化失败，请检查网络',
                    showCancel:false
                });
            });
        }
        const {myWhatsUp,adminWhatsUp,myEmail,adminEmail} = app.globalData;
        this.setData({
            hasMyWhatsUp:!!myWhatsUp,
            myWhatsUp:myWhatsUp || '',
            adminWhatsUp:adminWhatsUp || '',
            myEmail:myEmail || '',
            adminEmail:adminEmail || ''
        });
        this.initTabs();
    },
    initTabs:function(){
        const currentPermissionIndex = this.data.currentPermissionIndex;
        const tabLength = this.data.tabs[currentPermissionIndex].length;
        const that = this;
        wx.getSystemInfo({
            success:function(res){
                that.setData({
                    sliderLeft:res.windowWidth / tabLength - sliderWidth / 2,
                    sliderOffset:res.windowWidth / tabLength * that.data.activeTabIndex
                });
            }
        });
    },
    onTabClick:function(e){
        this.setData({
            sliderOffset:e.currentTarget.offsetLeft,
            activeTabIndex:Number(e.currentTarget.id)
        });
    },
    onPermissionChange:function(e){
        const oldIndex = this.data.currentPermissionIndex;
        const newIndex = Number(e.detail.value);
        if(oldIndex !== newIndex){
            this.setData({
                currentPermissionIndex:Number(newIndex),
                activeTabIndex:0
            });
            this.initTabs();
        }
    },
    bindInput:function(e){
        const {name} = e.currentTarget.dataset;
        this.setData({
            [name]:e.detail.value
        });
    },
    showErrorModal:function(name,err){
        var errMsg = name + '失败';
        if(err.toString().indexOf('permission denied') >= 0){
            errMsg += '：无权限操作';
        }
        wx.showModal({
            content:errMsg,
            showCancel:false
        });
    },
    queryOneByOpenId:function(collection,openid,options){
        const {showLoading,showError,success,fail} = options;
        if(showLoading){
            this.setData({
                querying:true
            });
        }
        const db = wx.cloud.database();
        const _openid = openid || this.data.openid;
        db.collection(collection).where({
    _openid:_openid
}).get({
            success:(res)=>{
                console.log('[数据库] [查询记录] 成功: ',res);
                const resFirstData = res.data[0] || {};
                if(resFirstData._openid && resFirstData._openid !== _openid){
                    const err = new Error('database permission denied');
                    if(showError)this.showErrorModal('获取',err)
                    if(failCallback)failCallback.call(this,err)
                } else if(successCallback){
                    successCallback.call(this,res.data[0]);
                }
            },
            fail:(err)=>{
                if(showError)this.showErrorModal('获取',err)
                console.error('[数据库] [查询记录] 失败：',err);
                if(failCallback)failCallback.call(this,err)
            },
            complete:()=>{
                if(showLoading){
                    this.setData({
                        querying:false
                    });
                }
            }
        });
    },
    updateOneByOpenId:function(collection,openid,data,options){
        const {showLoading,showError,success,fail} = options;
        if(showLoading){
            this.setData({
                updating:true
            });
        }
        const db = wx.cloud.database();
        this.queryOneByOpenId(collection,openid || '',{
            success:(dbData)=>{
                if(dbData){
                    db.collection(collection).doc(dbData._id).update({
                        data:data,
                        success:(res)=>{
                            console.log('[数据库] [更新记录] 成功: ',res);
                            if(successCallback)successCallback.call(this,res.stats)
                        },
                        fail:(err)=>{
                            if(showError)this.showErrorModal('设置',err)
                            console.error('[数据库] [更新记录] 失败：',err);
                            if(failCallback)failCallback.call(this,err)
                        },
                        complete:()=>{
                            if(showLoading){
                                this.setData({
                                    updating:false
                                });
                            }
                        }
                    });
                } else if(!openid || openid === this.data.openid){
                    db.collection(collection).add({
                        data:data,
                        success:(res)=>{
                            console.log('[数据库] [新增记录] 成功：',res);
                            if(successCallback)successCallback.call(this,{
                                _id:res._id
                            })
                        },
                        fail:(err)=>{
                            if(showError)this.showErrorModal('设置',err)
                            console.error('[数据库] [新增记录] 失败：',err);
                            if(failCallback)failCallback.call(this,err)
                        },
                        complete:()=>{
                            if(showLoading){
                                this.setData({
                                    updating:false
                                });
                            }
                        }
                    });
                } else {
                    const err = new Error('database permission denied');
                    if(showError)this.showErrorModal('设置',err)
                    if(failCallback)failCallback.call(this,err)
                    if(showLoading){
                        this.setData({
                            updating:false
                        });
                    }
                }
            },
            fail:(err)=>{
                if(showError)this.showErrorModal('设置',err)
                if(failCallback)failCallback.call(this,err)
                if(showLoading){
                    this.setData({
                        updating:false
                    });
                }
            }
        });
    },
    queryMyWhatsUp:function(){
        this.queryOneByOpenId('perm1','',{
            showLoading:true,
            showError:true,
            success:(data)=>{
                const content = data && data.whatsUp || '';
                wx.showModal({
                    title:'获取成功',
                    content:content?'个性签名为：' + content:'个性签名为空',
                    showCancel:false
                });
            }
        });
    },
    updateMyWhatsUp:function(){
        const data = {
            whatsUp:this.data.myWhatsUp
        };
        this.updateOneByOpenId('perm1','',data,{
            showLoading:true,
            showError:true,
            success:()=>{
                app.globalData.myWhatsUp = this.data.myWhatsUp;
                this.setData({
                    hasMyWhatsUp:true
                });
                wx.showModal({
                    content:'设置成功',
                    showCancel:false
                });
            }
        });
    },
    queryAdminWhatsUp:function(){
        this.queryOneByOpenId('perm1','kiki',{
            showLoading:true,
            showError:true,
            success:(data)=>{
                const content = data && data.whatsUp || '';
                wx.showModal({
                    title:'获取成功',
                    content:content?'个性签名为：' + content:'个性签名为空',
                    showCancel:false
                });
            }
        });
    },
    updateAdminWhatsUp:function(){
        const data = {
            whatsUp:this.data.adminWhatsUp
        };
        this.updateOneByOpenId('perm1','kiki',data,{
            showLoading:true,
            showError:true,
            success:(res)=>{
                if(res.updated === 0){
                    wx.showModal({
                        content:'设置失败：无权限操作',
                        showCancel:false
                    });
                } else {
                    app.globalData.adminWhatsUp = this.data.adminWhatsUp;
                    wx.showModal({
                        content:'设置成功',
                        showCancel:false
                    });
                }
            }
        });
    },
    queryMyEmail:function(){
        this.queryOneByOpenId('perm2','',{
            showLoading:true,
            showError:true,
            success:(data)=>{
                const content = data && data.email || '';
                wx.showModal({
                    title:'获取成功',
                    content:content?'邮箱为：' + content:'邮箱为空',
                    showCancel:false
                });
            }
        });
    },
    updateMyEmail:function(){
        const data = {
            email:this.data.myEmail
        };
        this.updateOneByOpenId('perm2','',data,{
            showLoading:true,
            showError:true,
            success:()=>{
                app.globalData.myEmail = this.data.myEmail;
                wx.showModal({
                    content:'设置成功',
                    showCancel:false
                });
            }
        });
    },
    queryAdminEmail:function(){
        this.queryOneByOpenId('perm2','popo',{
            showLoading:true,
            showError:true,
            success:(data)=>{
                const content = data && data.email || '';
                wx.showModal({
                    title:'获取成功',
                    content:content?'邮箱为：' + content:'邮箱为空',
                    showCancel:false
                });
            }
        });
    },
    updateAdminEmail:function(){
        const data = {
            email:this.data.adminEmail
        };
        this.updateOneByOpenId('perm2','popo',data,{
            showLoading:true,
            showError:true,
            success:()=>{
                app.globalData.adminEmail = this.data.adminEmail;
                wx.showModal({
                    content:'设置成功',
                    showCancel:false
                });
            }
        });
    },
    queryProduct:function(){
        this.queryOneByOpenId('perm3','admin',{
            showLoading:true,
            showError:true,
            success:(data)=>{
                const price = data && data.price || null;
                wx.showModal({
                    title:'获取成功',
                    content:price !== null?'商品价格为：' + price:'商品价格暂未设置',
                    showCancel:false
                });
            }
        });
    },
    updateProductPrice:function(){
        const data = {
            price:parseInt(this.data.product.price,10)
        };
        this.updateOneByOpenId('perm3','admin',data,{
            showLoading:true,
            showError:true,
            success:()=>{
                wx.showModal({
                    content:'设置成功',
                    showCancel:false
                });
            }
        });
    },
    queryServerData:function(){
        this.queryOneByOpenId('perm4','server',{
            showLoading:true,
            showError:true,
            success:(data)=>{
                const content = data && data.serverData || '';
                wx.showModal({
                    title:'获取成功',
                    content:content?'后台流水数据为：' + content:'后台流水数据为空',
                    showCancel:false
                });
            }
        });
    },
    updateServerData:function(){
        const data = {
            data:this.data.serverData
        };
        this.updateOneByOpenId('perm4','server',data,{
            showLoading:true,
            showError:true,
            success:()=>{
                wx.showModal({
                    content:'设置成功',
                    showCancel:false
                });
            }
        });
    }
});
