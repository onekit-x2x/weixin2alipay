import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
const app = getApp();
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'基本操作',
            path:'page/cloud/pages/crud/crud'
        };
    },
    data:{
        openid:'',
        todoId:'',
        description:'',
        done:false,
        updating:false,
        deleting:false
    },
    onLoad:function(options){
        const {todoId} = options;
        this.setData({
            todoId:todoId
        });
        if(app.globalData.openid){
            this.setData({
                openid:app.globalData.openid
            });
            this.queryTodo();
        } else {
            wx.showLoading({
                title:'正在初始化...'
            });
            app.getUserOpenIdViaCloud().then((openid)=>{
    this.setData({
        openid:openid
    });
    wx.hideLoading();
    this.queryTodo();
    return openid;
}).catch((err)=>{
                console.error(err);
                wx.hideLoading();
            });
        }
    },
    queryTodo:function(){
        wx.showLoading({
            title:'正在查询...'
        });
        const db = wx.cloud.database();
        db.collection('todos').doc(this.data.todoId).get({
            success:(res)=>{
                this.setData({
                    description:res.data.description,
                    done:res.data.done
                });
                console.log('[数据库] [查询记录] 成功: ',res);
            },
            fail:(err)=>{
                wx.showToast({
                    icon:'none',
                    title:'查询记录失败'
                });
                console.error('[数据库] [查询记录] 失败：',err);
            },
            complete:()=>{wx.hideLoading()}
        });
    },
    updateTodo:function(){
        if(this.data.updating || !this.data.todoId){
            return;
        }
        const {todoId,description} = this.data;
        if(!description){
            return;
        }
        this.setData({
            updating:true
        });
        const db = wx.cloud.database();
        db.collection('todos').doc(todoId).update({
            data:{
                description:description
            },
            success:()=>{
                console.log('he');
                wx.showToast({
                    title:'更新成功'
                });
                wx.navigateBack();
            },
            fail:(err)=>{
                wx.showToast({
                    icon:'none',
                    title:'更新失败'
                });
                console.error('[数据库] [更新记录] 失败：',err);
            },
            complete:()=>{this.setData({
                updating:false
            })}
        });
    },
    removeTodo:function(){
        if(this.data.deleting || !this.data.todoId){
            return;
        }
        const {todoId} = this.data;
        this.setData({
            deleting:true
        });
        const db = wx.cloud.database();
        db.collection('todos').doc(todoId).remove({
            success:()=>{
                wx.showToast({
                    title:'删除成功'
                });
                wx.navigateBack();
            },
            fail:(err)=>{
                wx.showToast({
                    icon:'none',
                    title:'删除失败'
                });
                console.error('[数据库] [删除记录] 失败：',err);
            },
            complete:()=>{this.setData({
                deleting:false
            })}
        });
    },
    onInputContent:function(e){
        this.setData({
            description:e.detail.value
        });
    }
});
