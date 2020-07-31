import {OnekitApp,OnekitPage,OnekitComponent} from '../../../onekit/onekit.js';
import wx from '../../../onekit/wx.js';
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'剪切板',
            path:'packageAPI/pages/clipboard-data/clipboard-data'
        };
    },
    data:{
        value:'edit and copy me',
        pasted:''
    },
    valueChanged:function(e){
        this.setData({
            value:e.detail.value
        });
    },
    copy:function(){
        wx.setClipboardData({
            data:this.data.value,
            success:function(){
                wx.showToast({
                    title:'复制成功',
                    icon:'success',
                    duration:1000
                });
            }
        });
    },
    paste:function(){
        const self = this;
        wx.getClipboardData({
            success:function(res){
                self.setData({
                    pasted:res.data
                });
                wx.showToast({
                    title:'粘贴成功',
                    icon:'success',
                    duration:1000
                });
            }
        });
    }
});
