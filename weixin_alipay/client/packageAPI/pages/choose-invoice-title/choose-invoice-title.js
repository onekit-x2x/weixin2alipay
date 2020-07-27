import {OnekitApp,OnekitPage,OnekitComponent} from "../../../onekit/onekit.js";
import wx from "../../../onekit/wx.js";
OnekitPage({
    onShareAppMessage:function(){
        return {
            title:'获取发票抬头',
            path:'packageAPI/pages/choose-invoice-title/choose-invoice-title'
        };
    },
    data:{
        type:'',
        title:'',
        taxNumber:'',
        companyAddress:'',
        telephone:'',
        bankName:'',
        bankAccount:''
    },
    chooseInvoiceTitle:function(){
        wx.chooseInvoiceTitle({
            success:(res)=>{
                this.setData({
                    type:res.type,
                    title:res.title,
                    taxNumber:res.taxNumber,
                    companyAddress:res.companyAddress,
                    telephone:res.telephone,
                    bankName:res.bankName,
                    bankAccount:res.bankAccount
                });
            },
            fail:(err)=>{
                console.error(err);
            }
        });
    }
});
