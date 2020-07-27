import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'新增联系人',
            path:'packageAPI/pages/add-contact/add-contact'
        };
    },
    submit:function(e){
        const formData = e.detail.value;
        wx.addPhoneContact({
            ...formData,
            success:function(){
                wx.showToast({
                    title:'联系人创建成功'
                });
            },
            fail:function(){
                wx.showToast({
                    title:'联系人创建失败'
                });
            }
        });
    }
});
